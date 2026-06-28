class APIClient {
    constructor(baseUrl) { this.baseUrl = baseUrl || API_BASE_URL; }

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const token = getToken();
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(url, { headers: { ...headers, ...options.headers }, ...options });
        if (response.status === 401) { logout(); throw new Error('Unauthorized'); }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    }

    async listDocuments(state = 'draft') { return this.request(`/api/documents?state=${state}`); }
    async getDocument(id) { return this.request(`/api/documents/${id}`); }
    async createDocument(templateId, title, formData) { return this.request('/api/documents', { method: 'POST', body: JSON.stringify({ template_id: templateId, title: title, form_data: formData }) }); }
    async updateDocument(id, data) { return this.request(`/api/documents/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
    async deleteDocument(id) { return this.request(`/api/documents/${id}`, { method: 'DELETE' }); }
    async getHistory(id) { return this.request(`/api/documents/${id}/history`); }
    async exportPDF(id, filename) { return this.request(`/api/documents/${id}/export`, { method: 'POST', body: JSON.stringify({ filename: filename }) }); }
}

const api = new APIClient(API_BASE_URL);
