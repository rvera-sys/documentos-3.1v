// ═══════════════════════════════════════════════════════════════════════════════
// CLAUSULAS MANAGER — agregar / quitar / reordenar / editar cláusulas (v1)
// Depende de: templates-completos.js (TEMPLATES_COMPLETOS, CLAUSULAS_COMPLETAS)
// No toca el modelo de datos existente: usa las columnas ya previstas en el
// schema -> document_instances.selected_clauses  y  .custom_clauses
// ═══════════════════════════════════════════════════════════════════════════════

// ── Estado ────────────────────────────────────────────────────────────────────
// docClauses      = [{ id, on, custom }]   (el ORDEN del array es el orden final)
// customClauses   = { <id>: { titulo, texto, base } }
//                   base = id original si es una edición (override) de una
//                   cláusula de la librería; null si es cláusula libre nueva.
let docClauses = [];
let customClauses = {};
let autoRenumerar = true;

const PREFIJO_UNIVERSAL = 'acc'; // cláusulas accesorias: sirven para cualquier doc

// Nombre legible de cada familia de cláusulas (prefijo del id)
const PREFIJO_LABELS = {
    lcab: 'Reserva locación CABA', lpb: 'Reserva locación PBA', lcom: 'Reserva locación comercial',
    rtmp: 'Reserva alquiler temporario', av: 'Autorización de venta', avr: 'Autorización venta c/renta',
    ac: 'Autorización venta c/cesión', ae: 'Autorización emprendimiento', al: 'Autorización de locación',
    atex: 'Autorización temporario (excl.)', atne: 'Autorización temporario (no excl.)',
    pr: 'Prórroga', rt: 'Reintegro', af: 'Acta entrega de fondos', de: 'Desistimiento',
    clv: 'Contrato locación vivienda', clc: 'Contrato locación comercial',
    ctc: 'Contrato temporario c/servicios', cts: 'Contrato temporario s/servicios',
    esc: 'Reserva escritura directa', bol: 'Reserva boleto + escritura', hip: 'Reserva crédito hipotecario',
    ces: 'Reserva cesión', remp: 'Reserva emprendimiento', bcv: 'Boleto de compraventa',
    bcp: 'Boleto c/posesión', cbc: 'Cesión de boleto', ccl: 'Cesión de locación',
    cvd: 'Convenio de desocupación', cmd: 'Comodato', mtu: 'Contrato de mutuo',
    acv: 'Aceptación / contraoferta (venta)', alc: 'Aceptación / contraoferta (locación)',
    rec: 'Recibo de reserva', sen: 'Seña de compraventa', rfr: 'Refuerzo de reserva',
    acc: 'Accesorias / adicionales', libre: 'Cláusulas libres'
};
function labelPrefijo(p) { return PREFIJO_LABELS[p] || p; }

// ── Ordinales en castellano (para renumerar al agregar/quitar) ────────────────
const ORD_UNIDAD_F = ['', 'PRIMERA', 'SEGUNDA', 'TERCERA', 'CUARTA', 'QUINTA', 'SEXTA', 'SÉPTIMA', 'OCTAVA', 'NOVENA'];
const ORD_UNIDAD_M = ['', 'PRIMERO', 'SEGUNDO', 'TERCERO', 'CUARTO', 'QUINTO', 'SEXTO', 'SÉPTIMO', 'OCTAVO', 'NOVENO'];
const ORD_DECENA_F = ['', 'DÉCIMA', 'VIGÉSIMA', 'TRIGÉSIMA', 'CUADRAGÉSIMA', 'QUINCUAGÉSIMA'];
const ORD_DECENA_M = ['', 'DÉCIMO', 'VIGÉSIMO', 'TRIGÉSIMO', 'CUADRAGÉSIMO', 'QUINCUAGÉSIMO'];

function ordinal(n, genero) {
    const U = genero === 'M' ? ORD_UNIDAD_M : ORD_UNIDAD_F;
    const D = genero === 'M' ? ORD_DECENA_M : ORD_DECENA_F;
    if (n < 10) return U[n];
    const d = Math.floor(n / 10), u = n % 10;
    if (d >= D.length) return String(n) + 'º';
    return u === 0 ? D[d] : D[d] + ' ' + U[u];
}

function normaliza(s) {
    return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

// ── Detección del ordinal que ya trae el título ───────────────────────────────
// Cubre las tres convenciones del archivo de cláusulas:
//   'SEGUNDA: INMUEBLE'            (femenino)
//   'PRIMERO: Objeto'              (masculino)
//   'DÉCIMO PRIMERA: SUBARRIENDO'  (híbrido, se normaliza a 'DÉCIMA PRIMERA')
//   'DECIMOTERCERA: ...'           (concatenado)
//   '2 - ESCRITURACIÓN'            (numérico)
const _DEC = { DECIM: 10, VIGESIM: 20, TRIGESIM: 30, CUADRAGESIM: 40, QUINCUAGESIM: 50 };
const _UNI = { PRIMER: 1, SEGUND: 2, TERCER: 3, CUART: 4, QUINT: 5, SEXT: 6, SEPTIM: 7, OCTAV: 8, NOVEN: 9, UNDECIM: 11, DUODECIM: 12 };
const _RE_ORD = new RegExp(
    '^(?:(' + Object.keys(_DEC).join('|') + ')([OA]))?\\s*(?:(' + Object.keys(_UNI).join('|') + ')([OA]))?'
);

/**
 * Separa el ordinal del título conservando el separador original.
 *   'SEGUNDA: INMUEBLE' -> { genero:'F', sep:': ', label:'INMUEBLE', nro:2 }
 *   'ENCABEZADO'        -> { genero:null }  → NO se renumera ni consume número
 *   'AC - USUFRUCTO'    -> { genero:null }
 * Los títulos sin ordinal (encabezados, accesorias, cierres, firmas) quedan
 * intactos: es lo que hace seguro agregar/quitar sin romper la numeración.
 */
function partirTitulo(titulo) {
    const t = (titulo || '').trim();
    // 1) numérico: '1 - SEÑA', '2. ESCRITURACIÓN'
    const mNum = t.match(/^(\d{1,2})(\s*[-.:)]\s*)(.+)$/);
    if (mNum) return { genero: 'N', sep: mNum[2].replace(/\s+/g, ' '), label: mNum[3].trim(), nro: +mNum[1] };

    // 2) ordinal en palabras
    const tn = normaliza(t);
    const m = tn.match(_RE_ORD);
    if (m && (m[1] || m[3])) {
        const nro = (m[1] ? _DEC[m[1]] : 0) + (m[3] ? _UNI[m[3]] : 0);
        const genero = (m[4] || m[2]) === 'O' ? 'M' : 'F';   // el género lo define el último token
        const resto = t.slice(m[0].length);
        const mSep = resto.match(/^(\s*[:.\-–—)]\s*)(.+)$/);
        if (mSep) return { genero, sep: ': ', label: mSep[2].trim(), nro };
        if (!resto.trim()) return { genero, sep: '', label: '', nro };
    }
    return { genero: null, sep: '', label: t, nro: null };
}

/** Título final según posición. Devuelve null si la cláusula no se numera. */
function tituloNumerado(cl, nro) {
    const { genero, sep, label } = partirTitulo(cl.titulo);
    if (!genero) return null;
    if (genero === 'N') return nro + (sep || ' - ') + label;
    return ordinal(nro, genero) + (sep || ': ') + label;
}

// ── Resolución de cláusulas ───────────────────────────────────────────────────
function getClausula(id) {
    if (customClauses[id]) return customClauses[id];
    return CLAUSULAS_COMPLETAS[id] || null;
}

function esEditada(id) {
    return !!(customClauses[id] && customClauses[id].base);
}

function esLibre(id) {
    return !!(customClauses[id] && !customClauses[id].base);
}

/** Prefijos (familias) usados por el template, ej. ['esc'] o ['lcab'] */
function prefijosDelTemplate(tpl) {
    const p = new Set();
    (tpl.clausulas_default || []).forEach(id => p.add(String(id).split('_')[0]));
    return [...p];
}

/**
 * Catálogo de cláusulas que se pueden AGREGAR a este template:
 *  - familia: mismo prefijo que las del template pero no incluidas
 *  - universales: prefijo 'acc' (accesorias / adicionales de escribanía)
 *  - otras: el resto de la librería (búsqueda avanzada)
 */
function catalogoDisponible(tpl) {
    const yaEstan = new Set(docClauses.map(c => c.id));
    const pref = prefijosDelTemplate(tpl);
    const familia = [], universales = [], otras = [];
    Object.keys(CLAUSULAS_COMPLETAS).forEach(id => {
        if (yaEstan.has(id)) return;
        const p = id.split('_')[0];
        if (p === PREFIJO_UNIVERSAL) universales.push(id);
        else if (pref.includes(p)) familia.push(id);
        else otras.push(id);
    });
    const otrasPorFamilia = {};
    otras.forEach(id => { const p = id.split('_')[0]; (otrasPorFamilia[p] = otrasPorFamilia[p] || []).push(id); });
    return { familia, universales, otras, otrasPorFamilia };
}

// ── Inicialización / carga ────────────────────────────────────────────────────
function initClausulas(tpl, savedSelected, savedCustom) {
    customClauses = savedCustom && typeof savedCustom === 'object' ? { ...savedCustom } : {};
    if (Array.isArray(savedSelected) && savedSelected.length) {
        docClauses = savedSelected.map(c => typeof c === 'string'
            ? { id: c, on: true, custom: false }
            : { id: c.id, on: c.on !== false, custom: !!c.custom });
    } else {
        docClauses = (tpl.clausulas_default || []).map(id => ({ id, on: true, custom: false }));
    }
    // descarta referencias muertas
    docClauses = docClauses.filter(c => !!getClausula(c.id));
}

function setRenumerar(v) { autoRenumerar = !!v; afterClausulasChange(); }

function resetClausulas(tpl) {
    tpl = tpl || currentTemplate;
    if (!confirm('¿Restaurar las cláusulas originales del template?\nSe pierden los cambios de orden y las cláusulas agregadas (los textos editados se conservan).')) return;
    docClauses = (tpl.clausulas_default || []).map(id => ({ id, on: true, custom: false }));
    afterClausulasChange();
}

// ── Mutaciones ────────────────────────────────────────────────────────────────
function toggleClausula(id) {
    const c = docClauses.find(x => x.id === id);
    if (c) { c.on = !c.on; afterClausulasChange(); }
}

function moverClausula(id, delta) {
    const i = docClauses.findIndex(x => x.id === id);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= docClauses.length) return;
    [docClauses[i], docClauses[j]] = [docClauses[j], docClauses[i]];
    afterClausulasChange();
}

function agregarClausula(id, posicion) {
    if (docClauses.some(x => x.id === id)) { showToast('⚠️ Ya está en el documento'); return; }
    const item = { id, on: true, custom: esLibre(id) };
    if (typeof posicion === 'number' && posicion >= 0) docClauses.splice(posicion, 0, item);
    else docClauses.push(item);
    afterClausulasChange();
}

function quitarClausula(id) {
    const c = getClausula(id);
    if (!confirm('¿Quitar definitivamente "' + (c ? c.titulo : id) + '" del documento?')) return;
    docClauses = docClauses.filter(x => x.id !== id);
    if (esLibre(id)) delete customClauses[id];
    afterClausulasChange();
}

function nuevaClausulaLibre() {
    const id = 'libre_' + Date.now().toString(36);
    customClauses[id] = { titulo: 'NUEVA CLÁUSULA', texto: '', base: null };
    docClauses.push({ id, on: true, custom: true });
    afterClausulasChange();
    abrirEditorClausula(id);
}

function guardarEdicionClausula(id, titulo, texto) {
    const orig = CLAUSULAS_COMPLETAS[id];
    customClauses[id] = { titulo: titulo, texto: texto, base: orig ? id : (customClauses[id] ? customClauses[id].base : null) };
    afterClausulasChange();
}

function revertirClausula(id) {
    if (!CLAUSULAS_COMPLETAS[id]) return;
    delete customClauses[id];
    afterClausulasChange();
}

// ── Render del panel lateral ──────────────────────────────────────────────────
function renderClausulasPanel(tpl) {
    const box = document.getElementById('clausulas-panel');
    if (!box) return;
    if (!tpl) { box.innerHTML = '<p class="cl-empty">Seleccioná un template</p>'; return; }

    const activas = docClauses.filter(c => c.on).length;
    let n = 0;
    const rows = docClauses.map((c, i) => {
        const cl = getClausula(c.id);
        if (!cl) return '';
        const numerable = !!partirTitulo(cl.titulo).genero;
        if (c.on && numerable) n++;
        const titVisible = (c.on && autoRenumerar && numerable) ? tituloNumerado(cl, n) : cl.titulo;
        const faltantes = varsFaltantes(cl.texto);
        return `<div class="cl-row ${c.on ? '' : 'cl-off'}">
            <input type="checkbox" ${c.on ? 'checked' : ''} onchange="toggleClausula('${c.id}')" title="Incluir / excluir">
            <div class="cl-info">
                <div class="cl-tit">${escapeHtml(titVisible)}</div>
                <div class="cl-meta">
                    <code>${escapeHtml(c.id)}</code>
                    ${esEditada(c.id) ? '<span class="cl-tag cl-tag-edit">editada</span>' : ''}
                    ${esLibre(c.id) ? '<span class="cl-tag cl-tag-libre">libre</span>' : ''}
                    ${faltantes.length ? `<span class="cl-tag cl-tag-warn" title="${escapeHtml(faltantes.join(', '))}">${faltantes.length} var. sin dato</span>` : ''}
                </div>
            </div>
            <div class="cl-acts">
                <button onclick="moverClausula('${c.id}',-1)" ${i === 0 ? 'disabled' : ''} title="Subir">↑</button>
                <button onclick="moverClausula('${c.id}',1)" ${i === docClauses.length - 1 ? 'disabled' : ''} title="Bajar">↓</button>
                <button onclick="abrirEditorClausula('${c.id}')" title="Editar texto">✏️</button>
                <button onclick="quitarClausula('${c.id}')" title="Quitar">🗑</button>
            </div>
        </div>`;
    }).join('');

    box.innerHTML = `
        <div class="cl-head">
            <span><b>${activas}</b> de ${docClauses.length} incluidas</span>
            <label class="cl-chk"><input type="checkbox" ${autoRenumerar ? 'checked' : ''} onchange="setRenumerar(this.checked)"> renumerar</label>
        </div>
        ${rows || '<p class="cl-empty">Sin cláusulas</p>'}
        <div class="cl-foot">
            <button class="btn btn-small" onclick="abrirCatalogo()">➕ Agregar de la librería</button>
            <button class="btn btn-small" onclick="nuevaClausulaLibre()">✍️ Cláusula libre</button>
            <button class="btn btn-small" onclick="resetClausulas()">↺ Restaurar</button>
        </div>
        ${avisoNumeracion()}
        ${avisoReferencias()}`;
}

/** Variables {{x}} de una cláusula que no tienen dato cargado en el form */
function varsFaltantes(texto) {
    const out = [];
    (String(texto).match(/\{\{(\w+)\}\}/g) || []).forEach(m => {
        const k = m.slice(2, -2);
        if (k === 'fecha_hoy') return;
        const v = (typeof currentFormData === 'object' && currentFormData) ? currentFormData[k] : '';
        if (!v && out.indexOf(k) === -1) out.push(k);
    });
    return out;
}

/** Avisa cuando el documento mezcla cláusulas con y sin ordinal en el título */
function avisoNumeracion() {
    const act = docClauses.filter(c => c.on).map(c => getClausula(c.id)).filter(Boolean);
    const con = act.filter(c => partirTitulo(c.titulo).genero).length;
    const sin = act.length - con;
    if (!con || !sin) return '';
    return `<div class="cl-aviso">ℹ️ Numeración mixta: ${con} cláusula/s con ordinal en el título y ${sin} sin ordinal. La renumeración automática sólo toca las que ya lo traen; las otras salen sin número (encabezados, accesorias y cierres normalmente van así).</div>`;
}

/** Avisa si hay textos que citan "la cláusula X" (las referencias cruzadas no se renumeran solas) */
function avisoReferencias() {
    const re = /cl[áa]usula\s+(primera|segunda|tercera|cuarta|quinta|sexta|s[ée]ptima|octava|novena|d[ée]cima|vig[ée]sima)/i;
    const hits = docClauses.filter(c => c.on && re.test((getClausula(c.id) || {}).texto || '')).map(c => c.id);
    if (!hits.length) return '';
    return `<div class="cl-aviso">⚠️ Estas cláusulas citan a otras por su número; si cambiás el orden revisá el texto a mano:<br><code>${hits.map(escapeHtml).join(', ')}</code></div>`;
}

// ── Modal: catálogo para agregar ──────────────────────────────────────────────
function abrirCatalogo() {
    if (!currentTemplate) return;
    document.getElementById('cl-modal').classList.remove('hidden');
    document.getElementById('cl-modal-body').innerHTML = `
        <input type="text" id="cl-search" placeholder="Buscar por título, id o texto…" oninput="renderCatalogo()" style="margin-bottom:10px;">
        <div id="cl-cat-list"></div>`;
    renderCatalogo();
}

function cerrarCatalogo() { document.getElementById('cl-modal').classList.add('hidden'); }

function renderCatalogo() {
    const q = normaliza((document.getElementById('cl-search') || {}).value || '');
    const cat = catalogoDisponible(currentTemplate);
    const grupo = (titulo, ids, abierto) => {
        const filt = ids.filter(id => {
            if (!q) return true;
            const c = CLAUSULAS_COMPLETAS[id];
            return normaliza(id + ' ' + c.titulo + ' ' + c.texto).includes(q);
        });
        if (!filt.length) return '';
        return `<details ${abierto || q ? 'open' : ''}>
            <summary>${titulo} <span class="cl-count">${filt.length}</span></summary>
            ${filt.map(id => {
                const c = CLAUSULAS_COMPLETAS[id];
                return `<div class="cl-cat-item">
                    <div>
                        <div class="cl-tit">${escapeHtml(c.titulo)}</div>
                        <div class="cl-prev">${escapeHtml(c.texto.slice(0, 170))}…</div>
                        <code>${escapeHtml(id)}</code>
                    </div>
                    <button class="btn-primary btn-small" onclick="agregarClausula('${id}'); renderCatalogo();">Agregar</button>
                </div>`;
            }).join('')}
        </details>`;
    };
    const otras = Object.keys(cat.otrasPorFamilia).sort()
        .map(p => grupo('🗃️ ' + labelPrefijo(p), cat.otrasPorFamilia[p], false)).join('');
    document.getElementById('cl-cat-list').innerHTML =
        (grupo('📂 Del mismo tipo de documento (' + prefijosDelTemplate(currentTemplate).map(labelPrefijo).join(', ') + ')', cat.familia, true) +
         grupo('📎 Accesorias / adicionales — sirven para cualquier documento', cat.universales, true) +
         otras) || '<p class="cl-empty">Sin resultados</p>';
}

// ── Modal: editor de texto de una cláusula ────────────────────────────────────
function abrirEditorClausula(id) {
    const cl = getClausula(id);
    if (!cl) return;
    document.getElementById('cl-modal').classList.remove('hidden');
    document.getElementById('cl-modal-body').innerHTML = `
        <label class="cl-lbl">Título</label>
        <input type="text" id="cl-ed-tit" value="${escapeHtml(cl.titulo)}">
        <label class="cl-lbl">Texto — usá <code>{{campo}}</code> para insertar datos del formulario</label>
        <textarea id="cl-ed-txt" rows="16">${escapeHtml(cl.texto)}</textarea>
        <div class="cl-ed-acts">
            <button class="btn-primary" onclick="guardarEdicionClausula('${id}', document.getElementById('cl-ed-tit').value, document.getElementById('cl-ed-txt').value); cerrarCatalogo();">💾 Guardar cláusula</button>
            ${CLAUSULAS_COMPLETAS[id] && esEditada(id) ? `<button class="btn" onclick="revertirClausula('${id}'); cerrarCatalogo();">↺ Volver al original</button>` : ''}
            <button class="btn" onclick="cerrarCatalogo()">Cancelar</button>
        </div>`;
}

// ── Armado del cuerpo del documento (lo usa el preview y el PDF) ──────────────
function construirCuerpo(data) {
    let n = 0;
    return docClauses.filter(c => c.on).map(c => {
        const cl = getClausula(c.id);
        if (!cl) return '';
        let titulo = cl.titulo;
        if (partirTitulo(cl.titulo).genero) {
            n++;
            if (autoRenumerar) titulo = tituloNumerado(cl, n);
        }
        const texto = String(cl.texto).replace(/\{\{(\w+)\}\}/g, (_, k) => {
            const v = data[k];
            return v ? escapeHtml(v) : `<span class="doc-falta">[${k}]</span>`;
        });
        return `<div class="doc-cl">
            <p class="doc-cl-tit">${escapeHtml(titulo)}</p>
            <p class="doc-cl-txt">${texto}</p>
        </div>`;
    }).join('');
}

/** Payload que se guarda en la base (columnas ya existentes) */
function clausulasPayload() {
    return {
        selected_clauses: docClauses.map(c => ({ id: c.id, on: c.on, custom: !!c.custom })),
        custom_clauses: customClauses
    };
}

// Hook: el editor lo redefine para re-renderizar panel + preview
function afterClausulasChange() {
    renderClausulasPanel(typeof currentTemplate !== 'undefined' ? currentTemplate : null);
    if (typeof renderPreview === 'function') renderPreview();
}
