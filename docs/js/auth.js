function getToken() { return localStorage.getItem(CONFIG.STORAGE_KEYS.TOKEN); }
function getCurrentUser() { const u = localStorage.getItem(CONFIG.STORAGE_KEYS.USER); return u ? JSON.parse(u) : null; }
function isAuthenticated() { return !!getToken(); }
function isAdmin() { const u = getCurrentUser(); return u && u.is_admin; }

async function handleGoogleLogin(response) {
    try {
        const decoded = parseJwt(response.credential);
        const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: response.credential, email: decoded.email, name: decoded.name, picture: decoded.picture })
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem(CONFIG.STORAGE_KEYS.TOKEN, data.token);
            localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(data.user));
            setTimeout(() => { window.location.href = 'dashboard.html'; }, 500);
        } else {
            console.error('Auth error response:', data);
            alert('âŒ ' + (data.error || data.message || 'Error en autenticaciÃ³n') + (data.detail ? '\n' + data.detail : ''));
        }
    } catch (error) { console.error('Login error:', error); alert('Error de conexiÃ³n'); }
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) { return null; }
}

function logout() { localStorage.clear(); window.location.href = 'index.html'; }
function requireAuth() { if (!isAuthenticated()) { window.location.href = 'index.html'; return false; } return true; }
function requireAdmin() { if (!isAdmin()) { alert('No tienes permisos'); window.location.href = 'dashboard.html'; return false; } return true; }
