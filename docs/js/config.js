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
        { id: 'recibo_reserva', name: 'Recibo de reserva', icon: '🧾', category: 'gestion', description: 'Constancia de fondos recibidos' },
        { id: 'refuerzo_reserva', name: 'Refuerzo de reserva', icon: '➕', category: 'gestion', description: 'Adicional a una reserva existente' },
        { id: 'aceptacion_compraventa', name: 'Aceptación / contraoferta / rechazo', icon: '✅', category: 'gestion', description: 'Compraventa' },
        { id: 'aceptacion_locacion', name: 'Aceptación / contraoferta / rechazo de locación', icon: '✅', category: 'gestion', description: 'Locación' },
        { id: 'sena_compraventa', name: 'Seña de compraventa', icon: '✍️', category: 'gestion', description: 'Seña penitencial' },
        { id: 'cont_locacion_viv', name: 'Contrato locación', icon: '🏠', category: 'contrato', description: 'Vivienda (CABA)' },
        { id: 'cont_locacion_usd', name: 'Contrato locación', icon: '💵', category: 'contrato', description: 'Vivienda en dólares' },
        { id: 'cont_locacion_com', name: 'Contrato locación', icon: '🏪', category: 'contrato', description: 'Comercial' },
        { id: 'cont_temp_con', name: 'Contrato temporario', icon: '🌅', category: 'contrato', description: 'Con paquete de servicios' },
        { id: 'cont_temp_sin', name: 'Contrato temporario', icon: '🌄', category: 'contrato', description: 'Sin paquete de servicios' },
        { id: 'boleto_compraventa', name: 'Boleto de compraventa', icon: '📜', category: 'contrato', description: 'Compraventa con o sin posesión' },
        { id: 'boleto_compraventa_posesion', name: 'Boleto de compraventa con posesión', icon: '🏠', category: 'contrato', description: 'Boleto y entrega de posesión' },
        { id: 'cesion_boleto', name: 'Cesión de boleto de compraventa', icon: '🔄', category: 'contrato', description: 'Cesión de derechos del boleto' },
        { id: 'cesion_locacion', name: 'Cesión de contrato de locación', icon: '🔑', category: 'contrato', description: 'Cesión de posición contractual' },
        { id: 'convenio_desocupacion', name: 'Convenio de desocupación', icon: '🚪', category: 'gestion', description: 'Restitución acordada del inmueble' },
        { id: 'comodato', name: 'Contrato de comodato', icon: '🤝', category: 'contrato', description: 'Préstamo gratuito de uso' },
        { id: 'mutuo', name: 'Contrato de mutuo', icon: '💰', category: 'contrato', description: 'Préstamo de dinero' }
    ]
};

const LOCAL_DEMO_MODE = (() => {
    const host = window.location.hostname;
    return host === 'localhost' || host === '127.0.0.1' ||
        host.endsWith('.local') || host.startsWith('10.') ||
        host.startsWith('192.168.') || host.startsWith('172.16.');
})();
const API_BASE_URL = CONFIG.API_BASE_URL;
