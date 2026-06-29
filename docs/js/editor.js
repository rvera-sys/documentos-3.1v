let currentDocument = null;
let currentTemplate = null;
let currentFormData = {};

function getFullTemplate(id) {
    return TEMPLATES_COMPLETOS.find(t => t.id === id);
}

async function initEditor() {
    if (!requireAuth()) return;
    loadTemplateOptions();
    const params = new URLSearchParams(window.location.search);
    const docId = params.get('id');
    if (docId) await loadExistingDocument(docId);
}

function loadTemplateOptions() {
    const select = document.getElementById('template-select');
    select.innerHTML = '<option value="">Selecciona un template...</option>' +
        TEMPLATES_COMPLETOS.map(t =>
            `<option value="${t.id}">${t.icon} ${t.nombre}</option>`
        ).join('');
}

async function loadExistingDocument(docId) {
    try {
        currentDocument = await api.getDocument(docId);
        document.getElementById('doc-title').value = currentDocument.title || '';
        document.getElementById('template-select').value = currentDocument.template_id;
        currentFormData = currentDocument.form_data || {};
        loadTemplate();
    } catch (e) {
        console.error('Error:', e);
        showToast('❌ Error cargando documento');
    }
}

function loadTemplate() {
    const templateId = document.getElementById('template-select').value;
    if (!templateId) return;
    currentTemplate = getFullTemplate(templateId);
    if (currentDocument) currentDocument.template_id = templateId;
    if (!currentDocument) currentFormData = {};
    renderFormFields();
    renderPreview();
}

function renderFormFields() {
    if (!currentTemplate) {
        document.getElementById('form-fields').innerHTML = '<p style="color: #999;">Seleccioná un template</p>';
        return;
    }
    const sections = currentTemplate.sections || currentTemplate.campos || [];
    const html = sections.map(sec => {
        const fields = sec.fields || sec.campos || [];
        return `
        <div style="margin-bottom: 16px;">
            <div style="font-size: 12px; font-weight: 700; color: #CC0000; margin-bottom: 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px;">${escapeHtml(sec.title || sec.titulo || '')}</div>
            ${fields.map(f => {
                const key = typeof f === 'string' ? f : f.id;
                const val = currentFormData[key] || '';
                const fieldObj = typeof f === 'object' ? f : {};
                const label = fieldObj.label || key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                const placeholder = fieldObj.placeholder || label;
                const isFull = fieldObj.full ? 'width:100%;' : '';
                let input;
                if (fieldObj.type === 'select' && fieldObj.options) {
                    input = `<select data-key="${key}" onchange="updateField('${key}', this.value)" style="font-size:12px;${isFull}">
                        ${fieldObj.options.map(o => `<option value="${escapeHtml(o)}" ${val === o ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('')}
                    </select>`;
                } else if (fieldObj.type === 'textarea') {
                    input = `<textarea data-key="${key}" placeholder="${escapeHtml(placeholder)}" rows="3" oninput="updateField('${key}', this.value)" style="font-size:12px;${isFull}width:100%;">${escapeHtml(val)}</textarea>`;
                } else if (fieldObj.type === 'date') {
                    input = `<input type="date" data-key="${key}" value="${escapeHtml(val)}" onchange="updateField('${key}', this.value)" style="font-size:12px;${isFull}">`;
                } else {
                    input = `<input type="text" value="${escapeHtml(val)}" data-key="${key}" placeholder="${escapeHtml(placeholder)}" oninput="updateField('${key}', this.value)" style="font-size:12px;${isFull}">`;
                }
                return `<div style="margin-bottom: 8px;${fieldObj.full ? '' : ' display:inline-block; width:calc(50% - 8px); margin-right:8px;'}">
                    <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 4px; color: #374151;">${label}</label>
                    ${input}
                </div>`;
            }).join('')}
        </div>`;
    }).join('');
    document.getElementById('form-fields').innerHTML = html;
}

function updateField(key, value) {
    currentFormData[key] = value;
    renderPreview();
}

function renderPreview() {
    if (!currentTemplate) {
        document.getElementById('preview-content').innerHTML = '<p style="color: #999;">Seleccioná un template para ver el preview</p>';
        return;
    }

    const hoy = new Date().toLocaleDateString('es-AR');
    const data = { fecha_hoy: hoy, ...currentFormData };

    const clausulas = currentTemplate.clausulas_default || [];
    const partes = clausulas.map(id => {
        const c = typeof CLAUSULAS_COMPLETAS === 'object' && !Array.isArray(CLAUSULAS_COMPLETAS)
            ? CLAUSULAS_COMPLETAS[id]
            : (CLAUSULAS_COMPLETAS.find ? CLAUSULAS_COMPLETAS.find(c => c.id === id) : null);
        if (!c) return '';
        const texto = (c.texto || '').replace(/\{\{(\w+)\}\}/g, (_, key) => escapeHtml(data[key]) || `[${key}]`);
        return `<div style="margin-bottom: 16px; text-align: justify;">
            <p style="white-space: pre-wrap; font-size: 13px; line-height: 1.8;">${texto}</p>
        </div>`;
    }).join('');

    const html = `
        <div style="max-width: 210mm; margin: 0 auto; padding: 30px 40px; font-family: 'Times New Roman', Times, serif; background: white;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="font-size: 18px; font-weight: 700; color: #CC0000; margin-bottom: 4px;">${escapeHtml(currentTemplate.nombre)}</h1>
                <hr style="border: none; border-top: 2px solid #CC0000; margin: 10px 0;">
            </div>
            ${partes}
            <div style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 16px;">
                <p style="font-size: 11px; color: #666; text-align: center;">Generado por Documentos 3.1 — RE/MAX CREA</p>
            </div>
        </div>`;

    document.getElementById('preview-content').innerHTML = html;
}

async function saveDraft() {
    const title = document.getElementById('doc-title').value;
    if (!title || !currentTemplate) { showToast('⚠️ Completá título y seleccioná un template'); return; }

    try {
        if (currentDocument && currentDocument.id) {
            await api.updateDocument(currentDocument.id, { title, form_data: currentFormData });
            showToast('✅ Documento guardado');
        } else {
            const result = await api.createDocument(currentTemplate.id, title, currentFormData);
            currentDocument = result.document;
            window.history.replaceState(null, '', `editor.html?id=${currentDocument.id}`);
            showToast('✅ Documento creado');
        }
    } catch (e) {
        console.error('Error:', e);
        showToast('❌ Error guardando');
    }
}

async function generatePDF() {
    if (!currentDocument) { showToast('⚠️ Guardá el documento primero'); return; }
    try {
        const element = document.getElementById('preview-content');
        const opt = {
            margin: 10,
            filename: (currentDocument.title || 'documento') + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };
        await html2pdf().set(opt).from(element).save();
        await api.exportPDF(currentDocument.id, currentDocument.title + '.pdf');
        showToast('✅ PDF generado');
    } catch (e) { console.error('Error:', e); showToast('❌ Error generando PDF'); }
}

function logout() { localStorage.clear(); window.location.href = 'index.html'; }

document.addEventListener('DOMContentLoaded', initEditor);
