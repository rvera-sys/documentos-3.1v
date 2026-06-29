const CONFIG = {
    API_BASE_URL: localStorage.getItem('api_base_url') || 'https://documentos-3-1v.vercel.app',
    GOOGLE_CLIENT_ID: '646250109102-o86kpovp63mnr8q4amap7eve5l95rj61.apps.googleusercontent.com',
    STORAGE_KEYS: {
        TOKEN: 'auth_token',
        USER: 'auth_user',
        API_BASE_URL: 'api_base_url'
    },
    TEMPLATES: [
        { id: 'r_escritura', name: 'Reserva de compra', icon: '🏠', category: 'compra', description: 'Escritura directa' },
        { id: 'r_boleto_esc', name: 'Reserva de compra', icon: '📋', category: 'compra', description: 'Boleto + escritura' },
        { id: 'r_hipotecario', name: 'Reserva crédito', icon: '🏦', category: 'compra', description: 'Ad referéndum hipotecario' },
        { id: 'r_cesion', name: 'Reserva cesión', icon: '📝', category: 'compra', description: 'Boleto / derechos' },
        { id: 'r_emprendimiento', name: 'Reserva emprendimiento', icon: '🏗️', category: 'compra', description: 'Unidad en pozo' },
        { id: 'r_loc_caba', name: 'Reserva locación CABA', icon: '🔑', category: 'alquiler', description: 'Vivienda' },
        { id: 'r_loc_pba', name: 'Reserva locación PBA', icon: '🏡', category: 'alquiler', description: 'Vivienda' },
        { id: 'r_loc_comercial', name: 'Reserva locación', icon: '🏪', category: 'alquiler', description: 'Comercial' },
        { id: 'r_temp', name: 'Reserva temporario', icon: '⏱️', category: 'alquiler', description: 'Alquiler temporario' },
        { id: 'aut_venta', name: 'Autorización de venta', icon: '✍️', category: 'autorizacion', description: 'Exclusiva' },
        { id: 'aut_venta_renta', name: 'Autorización venta c/renta', icon: '💰', category: 'autorizacion', description: 'Inversión' },
        { id: 'aut_cesion', name: 'Autorización venta', icon: '🔄', category: 'autorizacion', description: 'Con cesión de derechos' },
        { id: 'aut_emprendimiento', name: 'Autorización venta', icon: '🏗️', category: 'autorizacion', description: 'Emprendimiento' },
        { id: 'aut_locacion', name: 'Autorización de alquiler', icon: '📋', category: 'autorizacion', description: 'Exclusiva' },
        { id: 'aut_temp_excl', name: 'Autorización temporario', icon: '🌟', category: 'autorizacion', description: 'Exclusiva' },
        { id: 'aut_temp_noexcl', name: 'Autorización temporario', icon: '📄', category: 'autorizacion', description: 'No exclusiva' },
        { id: 'prorroga', name: 'Prórroga de reserva', icon: '⏰', category: 'gestion', description: 'Extensión de plazo' },
        { id: 'reintegro', name: 'Reintegro de reserva', icon: '↩️', category: 'gestion', description: 'Devolución de fondos' },
        { id: 'acta_fondos', name: 'Acta entrega fondos', icon: '📜', category: 'gestion', description: 'Incumplimiento reservante' },
        { id: 'desistimiento', name: 'Desistimiento de compra', icon: '❌', category: 'gestion', description: 'Retiro voluntario' },
        { id: 'cont_locacion_viv', name: 'Contrato locación', icon: '🏠', category: 'contrato', description: 'Vivienda (CABA)' },
        { id: 'cont_locacion_usd', name: 'Contrato locación', icon: '💵', category: 'contrato', description: 'Vivienda en dólares' },
        { id: 'cont_locacion_com', name: 'Contrato locación', icon: '🏪', category: 'contrato', description: 'Comercial' },
        { id: 'cont_temp_con', name: 'Contrato temporario', icon: '🌅', category: 'contrato', description: 'Con paquete de servicios' },
        { id: 'cont_temp_sin', name: 'Contrato temporario', icon: '🌄', category: 'contrato', description: 'Sin paquete de servicios' }
    ]
};

const API_BASE_URL = CONFIG.API_BASE_URL;
