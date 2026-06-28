let currentDocument = null;
let currentTemplate = null;
let currentFormData = {};

async function initEditor() {
    requireAuth();
    loadTemplateOptions();
    const params = new URLSearchParams(window.location.search);
    const docId = params.get('id');
    if (docId) { loadExistingDocument(docId); }
}

function loadTemplateOptions() {
    const select = document.getElementById('template-select');
    select.innerHTML = '<option>Selecciona un template...</option>' + CONFIG.TEMPLATES.map(t => `<option value="${t.id}">${t.icon} ${t.name}</option>`).join('');
}

async function loadExistingDocument(docId) {
    try {
        currentDocument = await api.getDocument(docId);
        document.getElementById('doc-title').value = currentDocument.title;
        document.getElementById('template-select').value = currentDocument.template_id;
        currentFormData = currentDocument.form_data || {};
        loadTemplate();
    } catch (e) { console.error('Error:', e); alert('Error cargando documento'); }
}

function loadTemplate() {
    const templateId = document.getElementById('template-select').value;
    if (!templateId) return;
    currentTemplate = CONFIG.TEMPLATES.find(t => t.id === templateId);
    if (currentDocument) currentDocument.template_id = templateId;
    renderFormFields();
    renderPreview();
}

function renderFormFields() {
    const fields = getTemplateFields(currentTemplate?.id);
    document.getElementById('form-fields').innerHTML = fields.map(f => `
        <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">${f.label}</label>
            <input type="text" value="${currentFormData[f.key] || ''}" placeholder="${f.placeholder || ''}" onchange="updateField('${f.key}', this.value)">
        </div>
    `).join('');
}

function updateField(key, value) { currentFormData[key] = value; renderPreview(); }

function renderPreview() {
    let html = '<h2 style="text-align: center; margin-bottom: 20px;">' + (currentTemplate?.name || 'Preview') + '</h2>';
    html += '<p>Aquí irá el contenido del documento con variables interpoladas.</p>';
    html += '<p style="margin-top: 20px; color: #999; font-size: 12px;">Datos: ' + JSON.stringify(currentFormData) + '</p>';
    document.getElementById('preview-content').innerHTML = html;
}

async function saveDraft() {
    const title = document.getElementById('doc-title').value;
    if (!title || !currentTemplate) { alert('Completa título y template'); return; }

    try {
        if (currentDocument && currentDocument.id) {
            await api.updateDocument(currentDocument.id, { title: title, form_data: currentFormData });
            showToast('✅ Documento guardado');
        } else {
            const result = await api.createDocument(currentTemplate.id, title, currentFormData);
            currentDocument = result.document;
            window.history.replaceState(null, '', `editor.html?id=${currentDocument.id}`);
            showToast('✅ Documento creado');
        }
    } catch (e) { console.error('Error:', e); alert('Error guardando'); }
}

async function generatePDF() {
    if (!currentDocument) { alert('Guarda el documento primero'); return; }
    try {
        const element = document.getElementById('preview-content');
        const opt = { margin: 10, filename: (currentDocument.title || 'documento') + '.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' } };
        html2pdf().set(opt).from(element).save();
        await api.exportPDF(currentDocument.id, currentDocument.title + '.pdf');
        showToast('✅ PDF generado');
    } catch (e) { console.error('Error:', e); }
}

function logout() { localStorage.clear(); window.location.href = 'index.html'; }
function getTemplateFields(tid) {
    const fields = { 'aut_venta_exc': [
        { key: 'cliente_nombre', label: 'Cliente', placeholder: 'Nombre' },
        { key: 'cliente_dni', label: 'DNI', placeholder: 'DNI' },
        { key: 'precio_num', label: 'Precio', placeholder: 'Monto' }
    ], 'cont_locacion_viv': [
        { key: 'inquilino', label: 'Inquilino', placeholder: 'Nombre' },
        { key: 'canon', label: 'Canon mensual', placeholder: 'Monto' },
        { key: 'duracion', label: 'Duración (meses)', placeholder: 'Meses' }
    ]};
    return fields[tid] || [];
}

document.addEventListener('DOMContentLoaded', initEditor);
