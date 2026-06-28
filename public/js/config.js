const CONFIG = {
    API_BASE_URL: localStorage.getItem('api_base_url') || 'https://documentos-3-1.vercel.app',
    GOOGLE_CLIENT_ID: '646250109102-o86kpovp63mnr8q4amap7eve5l95rj61.apps.googleusercontent.com',
    STORAGE_KEYS: {
        TOKEN: 'auth_token',
        USER: 'auth_user',
        API_BASE_URL: 'api_base_url'
    },
    TEMPLATES: [
        { id: 'aut_venta_exc', name: 'Autorización de venta — exclusiva', icon: '📝', category: 'compra', description: 'Para autorizar venta exclusiva de inmueble' },
        { id: 'aut_venta_noexcl', name: 'Autorización de venta — no exclusiva', icon: '📋', category: 'compra', description: 'Para autorizar venta no exclusiva' },
        { id: 'desistimiento', name: 'Desistimiento de compra', icon: '❌', category: 'compra', description: 'Para desistirse de una compra' },
        { id: 'r_compra', name: 'Reserva de compra', icon: '✅', category: 'compra', description: 'Documento de reserva' },
        { id: 'r_emprendimiento', name: 'Reserva de emprendimiento', icon: '🏗️', category: 'compra', description: 'Reserva de unidad en emprendimiento' },
        { id: 'aut_venta_renta', name: 'Autorización de venta con renta', icon: '🎯', category: 'compra', description: 'Con cláusula de renta' },
        { id: 'r_cesion', name: 'Reserva de cesión', icon: '📑', category: 'compra', description: 'Cesión de derechos' },
        { id: 'aut_venta_otro', name: 'Autorización de venta — otros casos', icon: '📄', category: 'compra', description: 'Casos especiales' },
        { id: 'aut_locacion_exc', name: 'Autorización de alquiler — exclusiva', icon: '🏠', category: 'alquiler', description: 'Alquiler exclusivo' },
        { id: 'cont_locacion_viv', name: 'Contrato de locación — vivienda (CABA)', icon: '🏘️', category: 'alquiler', description: 'Contrato vivienda CABA' },
        { id: 'cont_locacion_usd', name: 'Contrato de locación — vivienda en USD', icon: '💵', category: 'alquiler', description: 'Pagadero en USD' },
        { id: 'cont_locacion_com', name: 'Contrato de locación comercial', icon: '🏪', category: 'alquiler', description: 'Local comercial' },
        { id: 'r_loc_caba', name: 'Reserva de locación CABA', icon: '🔑', category: 'alquiler', description: 'CABA' },
        { id: 'r_loc_pba', name: 'Reserva de locación PBA', icon: '🔑', category: 'alquiler', description: 'Provincia Buenos Aires' },
        { id: 'r_loc_comercial', name: 'Reserva de locación comercial', icon: '🏢', category: 'alquiler', description: 'Local comercial' },
        { id: 'r_temporal', name: 'Reserva de alquiler temporario', icon: '⏱️', category: 'alquiler', description: 'Corta duración' },
        { id: 'aut_temporal_excl', name: 'Autorización temporario — exclusiva', icon: '📌', category: 'alquiler', description: 'Temporario exclusivo' }
    ]
};

const API_BASE_URL = CONFIG.API_BASE_URL;
