class APIClient {
  constructor(baseUrl) { this.baseUrl = baseUrl || API_BASE_URL; }

  async request(endpoint, options = {}) {
    const token = getToken();
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: { ...headers, ...(options.headers || {}) }
    });

    if (res.status === 401) { logout(); throw new Error('Sesión vencida'); }

    let body = null;
    try { body = await res.json(); } catch (_) { /* sin cuerpo */ }

    if (!res.ok) {
      throw new Error((body && (body.error || body.message)) || `HTTP ${res.status}`);
    }
    return body;
  }

  listDocuments(state = 'draft') { return this.request(`/api/documents?state=${encodeURIComponent(state)}`); }
  getDocument(id) { return this.request(`/api/documents/${id}`); }

  createDocument(templateId, title, formData, selectedClauses) {
    return this.request('/api/documents', {
      method: 'POST',
      body: JSON.stringify({
        template_id: templateId,
        title,
        form_data: formData || {},
        selected_clauses: selectedClauses || []
      })
    });
  }

  updateDocument(id, data) {
    return this.request(`/api/documents/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteDocument(id) { return this.request(`/api/documents/${id}`, { method: 'DELETE' }); }
  getHistory(id) { return this.request(`/api/documents/${id}/history`); }
  restoreVersion(id, versionNumber) {
    return this.request(`/api/documents/${id}/history`, {
      method: 'POST', body: JSON.stringify({ version_number: versionNumber })
    });
  }
  exportPDF(id, filename) {
    return this.request(`/api/documents/${id}/export`, { method: 'POST', body: JSON.stringify({ filename }) });
  }
}

const api = new APIClient(API_BASE_URL);
