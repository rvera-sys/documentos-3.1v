// ═══════════════════════════════════════════════════════════════════════════════
// EDITOR v3.2 — Documentos modulares por cláusula
// Requiere: config.js, auth.js, api.js, utils.js, templates-completos.js,
//           clausulas-engine.js
// ═══════════════════════════════════════════════════════════════════════════════

let currentDocument = null;
let currentTemplate = null;
let currentFormData = {};
let clausulas = [];        // lista viva de bloques del documento
let dirty = false;
let dragUid = null;

function getFullTemplate(id) {
  return TEMPLATES_COMPLETOS.find(t => t.id === id);
}

function marcarSucio() {
  dirty = true;
  const b = document.getElementById('estado-guardado');
  if (b) { b.textContent = '● Sin guardar'; b.className = 'estado sucio'; }
}
function marcarLimpio(msg) {
  dirty = false;
  const b = document.getElementById('estado-guardado');
  if (b) { b.textContent = msg || '✓ Guardado'; b.className = 'estado ok'; }
}

// ─── INIT ──────────────────────────────────────────────────────────────────────
async function initEditor() {
  if (!requireAuth()) return;
  loadTemplateOptions();
  const params = new URLSearchParams(window.location.search);
  const docId = params.get('id');
  if (docId) await loadExistingDocument(docId);

  window.addEventListener('beforeunload', e => {
    if (dirty) { e.preventDefault(); e.returnValue = ''; }
  });
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveDraft(); }
  });
}

function loadTemplateOptions() {
  const select = document.getElementById('template-select');
  const grupos = {};
  TEMPLATES_COMPLETOS.forEach(t => {
    (grupos[t.categoria] = grupos[t.categoria] || []).push(t);
  });
  select.innerHTML = '<option value="">Seleccioná un template…</option>' +
    Object.entries(grupos).map(([cat, ts]) =>
      `<option disabled>── ${cat.toUpperCase()} ──</option>` +
      ts.map(t => `<option value="${t.id}">${t.icon} ${escapeHtml(t.nombre)} — ${escapeHtml(t.descripcion)}</option>`).join('')
    ).join('');
}

async function loadExistingDocument(docId) {
  try {
    currentDocument = await api.getDocument(docId);
    document.getElementById('doc-title').value = currentDocument.title || '';
    document.getElementById('template-select').value = currentDocument.template_id;
    currentFormData = currentDocument.form_data || {};
    currentTemplate = getFullTemplate(currentDocument.template_id);

    const guardadas = currentDocument.selected_clauses;
    clausulas = (Array.isArray(guardadas) && guardadas.length)
      ? hidratarGuardadas(guardadas)
      : construirDesdeTemplate(currentTemplate || { clausulas_default: [] });

    renderFormFields();
    renderPanelClausulas();
    renderPreview();
    marcarLimpio('✓ Guardado (v' + (currentDocument.version || 1) + ')');
  } catch (e) {
    console.error(e);
    showToast('❌ Error cargando documento');
  }
}

function loadTemplate() {
  const templateId = document.getElementById('template-select').value;
  if (!templateId) return;
  if (clausulas.length && !confirm('Cambiar de template reemplaza las cláusulas actuales. ¿Continuar?')) {
    document.getElementById('template-select').value = currentTemplate ? currentTemplate.id : '';
    return;
  }
  currentTemplate = getFullTemplate(templateId);
  if (!currentDocument) currentFormData = {};
  clausulas = construirDesdeTemplate(currentTemplate);
  renderFormFields();
  renderPanelClausulas();
  renderPreview();
  marcarSucio();
}

// ─── FORMULARIO DE DATOS ───────────────────────────────────────────────────────
function renderFormFields() {
  const cont = document.getElementById('form-fields');
  if (!currentTemplate) { cont.innerHTML = '<p class="muted">Seleccioná un template</p>'; return; }

  cont.innerHTML = (currentTemplate.sections || []).map(sec => `
    <div class="sec">
      <div class="sec-title">${sec.title || ''}</div>
      ${(sec.fields || []).map(f => {
        const key = f.id;
        const val = currentFormData[key] || '';
        const label = f.label || key.replace(/_/g, ' ');
        let input;
        if (f.type === 'select' && f.options) {
          input = `<select data-key="${key}" onchange="updateField('${key}', this.value)">
            ${f.options.map(o => `<option value="${escapeHtml(o)}" ${val === o ? 'selected' : ''}>${escapeHtml(o) || '—'}</option>`).join('')}
          </select>`;
        } else if (f.type === 'textarea') {
          input = `<textarea data-key="${key}" rows="3" placeholder="${escapeHtml(f.placeholder || '')}" oninput="updateField('${key}', this.value)">${escapeHtml(val)}</textarea>`;
        } else if (f.type === 'date') {
          input = `<input type="date" data-key="${key}" value="${escapeHtml(val)}" onchange="updateField('${key}', this.value)">`;
        } else {
          input = `<input type="text" data-key="${key}" value="${escapeHtml(val)}" placeholder="${escapeHtml(f.placeholder || '')}" oninput="updateField('${key}', this.value)">`;
        }
        return `<div class="campo ${f.full ? 'full' : ''}"><label>${label}</label>${input}</div>`;
      }).join('')}
    </div>`).join('');
}

function updateField(key, value) {
  currentFormData[key] = value;
  renderPreview();
  renderChecklist();
  marcarSucio();
}

// ─── PANEL DE CLÁUSULAS ────────────────────────────────────────────────────────
function renderPanelClausulas() {
  const cont = document.getElementById('clausulas-list');
  if (!cont) return;
  if (!clausulas.length) { cont.innerHTML = '<p class="muted">Seleccioná un template</p>'; return; }

  let n = 0;
  cont.innerHTML = clausulas.map((c, i) => {
    const num = esNumerable(c.titulo) && c.incluida ? (++n) : null;
    return `
    <div class="cl-item ${c.incluida ? '' : 'off'}" draggable="true" data-uid="${c.uid}" data-i="${i}"
         ondragstart="onDragStart(event)" ondragover="onDragOver(event)" ondrop="onDrop(event)" ondragend="onDragEnd(event)">
      <div class="cl-row">
        <span class="grip" title="Arrastrar para reordenar">⠿</span>
        <input type="checkbox" ${c.incluida ? 'checked' : ''} onchange="toggleClausula('${c.uid}')" title="Incluir en el documento">
        <span class="cl-num">${num !== null ? ordinalFem(num) : '—'}</span>
        <span class="cl-nombre" onclick="abrirEditor('${c.uid}')" title="Clic para editar el texto">${escapeHtml(limpiarTitulo(c.titulo))}</span>
        ${c.origen === 'custom' ? '<span class="tag tag-custom">propia</span>' : ''}
        ${c.origen === 'opcional' ? '<span class="tag tag-opt">opcional</span>' : ''}
        ${c.editada && c.origen !== 'custom' ? '<span class="tag tag-edit">editada</span>' : ''}
      </div>
      <div class="cl-tools">
        <button onclick="mover('${c.uid}',-1)" title="Subir">▲</button>
        <button onclick="mover('${c.uid}',1)" title="Bajar">▼</button>
        <button onclick="abrirEditor('${c.uid}')" title="Editar texto">✏️</button>
        <button onclick="duplicar('${c.uid}')" title="Duplicar">⧉</button>
        <button class="del" onclick="eliminar('${c.uid}')" title="Eliminar del documento">🗑️</button>
      </div>
      <div class="cl-edit" id="edit-${c.uid}" style="display:none">
        <input type="text" id="tit-${c.uid}" value="${escapeHtml(limpiarTitulo(c.titulo))}" placeholder="Título de la cláusula">
        <textarea id="txt-${c.uid}" rows="8" placeholder="Texto de la cláusula. Variables: {{campo}}">${escapeHtml(c.texto)}</textarea>
        <div class="cl-edit-tools">
          <button class="mini primary" onclick="guardarEdicion('${c.uid}')">Aplicar</button>
          <button class="mini" onclick="cerrarEditor('${c.uid}')">Cancelar</button>
          ${c.ref ? `<button class="mini" onclick="restaurar('${c.uid}')" title="Volver al texto original del catálogo">↺ Restaurar</button>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');

  const activas = clausulas.filter(c => c.incluida).length;
  const cnt = document.getElementById('cl-contador');
  if (cnt) cnt.textContent = `${activas} activas / ${clausulas.length} totales`;
}

function toggleClausula(u) {
  const c = clausulas.find(x => x.uid === u);
  if (c) c.incluida = !c.incluida;
  refrescar();
}
function mover(u, d) { clausulas = moverClausula(clausulas, u, d); refrescar(); }
function eliminar(u) {
  const c = clausulas.find(x => x.uid === u);
  if (!confirm(`¿Eliminar la cláusula "${limpiarTitulo(c.titulo)}" del documento?`)) return;
  clausulas = quitarClausula(clausulas, u);
  refrescar();
}
function duplicar(u) {
  const i = clausulas.findIndex(x => x.uid === u);
  const c = clausulas[i];
  clausulas.splice(i + 1, 0, { ...c, uid: 'c' + Math.random().toString(36).slice(2, 10), editada: true });
  refrescar();
}
function abrirEditor(u) {
  const el = document.getElementById('edit-' + u);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
function cerrarEditor(u) {
  const el = document.getElementById('edit-' + u);
  if (el) el.style.display = 'none';
}
function guardarEdicion(u) {
  const c = clausulas.find(x => x.uid === u);
  if (!c) return;
  c.titulo = document.getElementById('tit-' + u).value.toUpperCase();
  c.texto = document.getElementById('txt-' + u).value;
  c.editada = true;
  refrescar();
  showToast('✅ Cláusula actualizada');
}
function restaurar(u) {
  const c = clausulas.find(x => x.uid === u);
  const orig = c && c.ref ? buscarClausula(c.ref) : null;
  if (!orig) return;
  c.titulo = limpiarTitulo(orig.titulo);
  c.texto = orig.texto;
  c.editada = false;
  refrescar();
}

// Drag & drop
function onDragStart(e) { dragUid = e.currentTarget.dataset.uid; e.currentTarget.classList.add('dragging'); }
function onDragOver(e) { e.preventDefault(); e.currentTarget.classList.add('over'); }
function onDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  document.querySelectorAll('.cl-item.over').forEach(x => x.classList.remove('over'));
}
function onDrop(e) {
  e.preventDefault();
  const destino = parseInt(e.currentTarget.dataset.i, 10);
  if (dragUid) { clausulas = reordenar(clausulas, dragUid, destino); dragUid = null; refrescar(); }
}

// ─── AGREGAR CLÁUSULAS ─────────────────────────────────────────────────────────
function abrirCatalogo() {
  document.getElementById('modal-catalogo').style.display = 'flex';
  document.getElementById('cat-buscar').value = '';
  renderCatalogo();
  document.getElementById('cat-buscar').focus();
}
function cerrarCatalogo() { document.getElementById('modal-catalogo').style.display = 'none'; }

function renderCatalogo() {
  const q = (document.getElementById('cat-buscar').value || '').toLowerCase();
  const cat = catalogoCompleto();
  const yaRefs = new Set(clausulas.map(c => c.ref).filter(Boolean));
  const familia = currentTemplate ? (currentTemplate.clausulas_default[0] || '').split('_')[0] : '';

  const items = Object.entries(cat).filter(([ref, c]) => {
    const txt = (ref + ' ' + c.titulo + ' ' + c.texto).toLowerCase();
    return !q || txt.includes(q);
  });

  const prioridad = r => r.startsWith('opt_') ? 1 : (r.startsWith(familia + '_') ? 0 : 2);
  items.sort((a, b) => prioridad(a[0]) - prioridad(b[0]) || a[1].titulo.localeCompare(b[1].titulo));

  document.getElementById('cat-list').innerHTML = items.slice(0, 200).map(([ref, c]) => `
    <div class="cat-item">
      <div>
        <strong>${escapeHtml(limpiarTitulo(c.titulo))}</strong>
        ${ref.startsWith('opt_') ? '<span class="tag tag-opt">opcional</span>' : ''}
        ${prioridad(ref) === 0 ? '<span class="tag tag-fam">de este documento</span>' : ''}
        ${yaRefs.has(ref) ? '<span class="tag tag-ya">ya incluida</span>' : ''}
        <div class="cat-prev">${escapeHtml((c.texto || '').slice(0, 190))}…</div>
        <code>${ref}</code>
      </div>
      <button class="mini primary" onclick="agregarDelCatalogo('${ref}')">+ Agregar</button>
    </div>`).join('') || '<p class="muted">Sin resultados</p>';
}

function agregarDelCatalogo(ref) {
  clausulas = agregarClausula(clausulas, ref);
  cerrarCatalogo();
  refrescar();
  showToast('✅ Cláusula agregada al final — arrastrala a su lugar');
}

function nuevaClausulaLibre() {
  clausulas = agregarClausulaLibre(clausulas, 'CLÁUSULA ADICIONAL', '');
  refrescar();
  const u = clausulas[clausulas.length - 1].uid;
  abrirEditor(u);
  document.getElementById('tit-' + u).focus();
}

// ─── PREVIEW + CHECKLIST ───────────────────────────────────────────────────────
function refrescar() {
  renderPanelClausulas();
  renderPreview();
  renderChecklist();
  marcarSucio();
}

function datosCompletos() {
  const hoy = new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
  return { fecha_hoy: hoy, fecha_firma: currentFormData.fecha_firma || hoy, ...currentFormData };
}

function renderPreview() {
  const cont = document.getElementById('preview-content');
  if (!currentTemplate) { cont.innerHTML = '<p class="muted">Seleccioná un template para ver el preview</p>'; return; }
  const data = datosCompletos();
  cont.innerHTML = renderDocumento(clausulas, data, {
    titulo: (document.getElementById('doc-title').value || currentTemplate.nombre + ' — ' + currentTemplate.descripcion),
    lugarFecha: 'Ciudad Autónoma de Buenos Aires, ' + data.fecha_hoy + '.',
    resaltarFaltantes: true
  });
}

function renderChecklist() {
  const cont = document.getElementById('checklist');
  if (!cont) return;
  const f = faltantes(clausulas, datosCompletos());
  if (!f.length) {
    cont.innerHTML = '<div class="chk ok">✓ Todos los campos usados están completos</div>';
    return;
  }
  cont.innerHTML = `<div class="chk warn"><strong>⚠ ${f.length} campo/s sin completar</strong>
    <div class="chk-tags">${f.map(k => `<span>${escapeHtml(k)}</span>`).join('')}</div></div>`;
}

// ─── GUARDAR / EXPORTAR ────────────────────────────────────────────────────────
function payloadClausulas() {
  return clausulas.map(c => ({
    uid: c.uid, ref: c.ref, titulo: c.titulo,
    texto: c.editada ? c.texto : undefined,
    incluida: c.incluida, editada: c.editada, origen: c.origen
  }));
}

async function saveDraft() {
  const title = document.getElementById('doc-title').value.trim();
  if (!title || !currentTemplate) { showToast('⚠️ Completá el título y elegí un template'); return; }
  try {
    if (currentDocument && currentDocument.id) {
      const r = await api.updateDocument(currentDocument.id, {
        title, form_data: currentFormData, selected_clauses: payloadClausulas()
      });
      currentDocument.version = r.version;
      marcarLimpio('✓ Guardado (v' + r.version + ')');
    } else {
      const result = await api.createDocument(currentTemplate.id, title, currentFormData, payloadClausulas());
      currentDocument = result.document;
      window.history.replaceState(null, '', `editor.html?id=${currentDocument.id}`);
      marcarLimpio('✓ Creado (v1)');
    }
    showToast('✅ Documento guardado');
  } catch (e) {
    console.error(e);
    showToast('❌ Error guardando: ' + e.message);
  }
}

async function generatePDF() {
  const f = faltantes(clausulas, datosCompletos());
  if (f.length && !confirm(`Hay ${f.length} campo/s sin completar (${f.slice(0, 5).join(', ')}…). ¿Generar el PDF igual?`)) return;
  try {
    const clone = document.getElementById('preview-content').cloneNode(true);
    clone.querySelectorAll('.ph-falta').forEach(el => { el.outerHTML = el.textContent; });
    const wrap = document.createElement('div');
    wrap.className = 'pdf-render';
    wrap.appendChild(clone);
    document.body.appendChild(wrap);

    await html2pdf().set({
      margin: [18, 18, 18, 18],
      filename: ((document.getElementById('doc-title').value || 'documento').replace(/[^\w\s-]/g, '') + '.pdf'),
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['css', 'legacy'], avoid: '.cl-bloque' }
    }).from(wrap).save();

    wrap.remove();
    if (currentDocument) await api.exportPDF(currentDocument.id, 'pdf');
    showToast('✅ PDF generado');
  } catch (e) { console.error(e); showToast('❌ Error generando PDF'); }
}

function copiarTexto() {
  const txt = renderTextoPlano(clausulas, datosCompletos(), document.getElementById('doc-title').value);
  navigator.clipboard.writeText(txt).then(() => showToast('✅ Texto copiado — pegalo en Word'));
}

function imprimir() { window.print(); }

function logout() { localStorage.clear(); window.location.href = 'index.html'; }

document.addEventListener('DOMContentLoaded', initEditor);
