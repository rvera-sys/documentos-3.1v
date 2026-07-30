// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATES COMPLETOS + CLAUSULAS — 25 documentos (version 3.1)
// Fuente: DocumentosCrea1/index.html (DOCS + FORMS + buildClauses)
// ═══════════════════════════════════════════════════════════════════════════════

const CORREDOR = "René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.";

const TEMPLATES_COMPLETOS = [
  // ════════════════════════════════════════════════════════════════
  // COMPRA (5 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'r_compra', nombre: 'Reserva de compra', icon: '🏠', categoria: 'compra', descripcion: 'Escritura directa',
    sections: [
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Ej: Gurruchaga 1234, Piso 2°, Dpto. B, CABA', full: true },
        { id: 'inmueble_barrio', label: 'Barrio / Localidad', placeholder: 'Ej: Palermo, CABA' },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '👤 Comprador (dador de la reserva)', fields: [
        { id: 'comprador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'comprador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'comprador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'comprador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'comprador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'comprador_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'comprador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Vendedor', fields: [
        { id: 'vendedor_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'vendedor_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'vendedor_domicilio', label: 'Domicilio', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '💵 Condiciones económicas', fields: [
        { id: 'precio_letras', label: 'Precio de venta (letras) <span class="req">*</span>', placeholder: 'Ej: Doscientos mil dólares', full: true },
        { id: 'precio_num', label: 'Precio de venta (números) <span class="req">*</span>', placeholder: 'Ej: USD 200.000' },
        { id: 'moneda', label: 'Moneda', type: 'select', options: ['Dólares billete (USD)','Pesos argentinos (ARS)'] },
        { id: 'reserva_letras', label: 'Monto reserva (letras) <span class="req">*</span>', placeholder: 'Ej: Cinco mil dólares', full: true },
        { id: 'reserva_num', label: 'Monto reserva (números) <span class="req">*</span>', placeholder: 'Ej: USD 5.000' },
        { id: 'fecha_esc', label: 'Fecha tope de escritura', type: 'date' },
        { id: 'escribano', label: 'Escribano designado', placeholder: 'Nombre del escribano' },
      ]},
      { title: '📊 Comisiones', fields: [
        { id: 'com_captador', label: 'Comisión captador (%+IVA)', placeholder: 'Ej: 3' },
        { id: 'com_oferente', label: 'Comisión oferente (%+IVA)', placeholder: 'Ej: 4' },
      ]},
      { title: '🧑‍💼 Agente y observaciones', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones ad referéndum adicionales (opcional)', type: 'textarea', placeholder: 'Ej: Sujeto a revisión de títulos...', full: true },
      ]},
    ],
    clausulas_default: ['esc_encabezado','esc_dador','esc_vendedora','esc_inmueble','esc_precio','esc_posesion','esc_estado_parcelario','esc_ad_referendum','esc_sena','esc_honorarios','esc_corredor','esc_renuncia_765','esc_billetes','esc_incumplimiento','esc_jurisdiccion','esc_agente','esc_cierre']
  },
  {
    id: 'r_boleto_esc', nombre: 'Reserva de compra', icon: '📋', categoria: 'compra', descripcion: 'Boleto + escritura',
    sections: [
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Dirección, piso, dpto, barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '👤 Comprador', fields: [
        { id: 'comprador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'comprador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'comprador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'comprador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'comprador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'comprador_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'comprador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Vendedor', fields: [
        { id: 'vendedor_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'vendedor_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
      ]},
      { title: '💵 Condiciones económicas', fields: [
        { id: 'precio_letras', label: 'Precio total (letras) <span class="req">*</span>', placeholder: 'Ej: Ciento cincuenta mil dólares', full: true },
        { id: 'precio_num', label: 'Precio total (números) <span class="req">*</span>', placeholder: 'Ej: USD 150.000' },
        { id: 'moneda', label: 'Moneda', type: 'select', options: ['Dólares billete (USD)','Pesos argentinos (ARS)'] },
        { id: 'reserva_letras', label: 'Monto reserva (letras) <span class="req">*</span>', placeholder: 'Ej: Cinco mil dólares', full: true },
        { id: 'reserva_num', label: 'Monto reserva (números) <span class="req">*</span>', placeholder: 'Ej: USD 5.000' },
        { id: 'pct_boleto', label: '% al boleto', placeholder: 'Ej: 30%' },
        { id: 'pct_escritura', label: '% a la escritura', placeholder: 'Ej: 70%' },
        { id: 'fecha_boleto', label: 'Fecha tope de boleto', type: 'date' },
        { id: 'fecha_esc', label: 'Fecha tope de escritura', type: 'date' },
        { id: 'escribano', label: 'Escribano designado', placeholder: 'Nombre del escribano' },
      ]},
      { title: '📊 Comisiones', fields: [
        { id: 'com_captador', label: 'Comisión captador (%+IVA)', placeholder: 'Ej: 3' },
        { id: 'com_oferente', label: 'Comisión oferente (%+IVA)', placeholder: 'Ej: 4' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones ad referéndum adicionales', type: 'textarea', placeholder: 'Condiciones adicionales...', full: true },
      ]},
    ],
    clausulas_default: ['bol_encabezado','bol_dador','bol_vendedora','bol_inmueble','bol_precio','bol_posesion','bol_estado_parcelario','bol_ad_referendum','bol_sena','bol_honorarios','bol_corredor','bol_renuncia_765','bol_billetes','bol_incumplimiento','bol_jurisdiccion','bol_agente','bol_cierre']
  },
  {
    id: 'r_hipotecario', nombre: 'Reserva crédito', icon: '🏦', categoria: 'compra', descripcion: 'Ad referéndum hipotecario',
    sections: [
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Dirección completa', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '👤 Comprador', fields: [
        { id: 'comprador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'comprador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'comprador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'comprador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'comprador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'comprador_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'comprador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Vendedor', fields: [
        { id: 'vendedor_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'vendedor_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
      ]},
      { title: '🏦 Crédito hipotecario', fields: [
        { id: 'banco', label: 'Banco / entidad financiera <span class="req">*</span>', placeholder: 'Ej: Banco Nación, Banco Ciudad', full: true },
        { id: 'monto_credito', label: 'Monto del crédito solicitado <span class="req">*</span>', placeholder: 'Ej: $50.000.000' },
        { id: 'estado_credito', label: 'Estado del crédito', type: 'select', options: ['Pre-aprobado','En evaluación','Aprobado','Pendiente de documentación'] },
        { id: 'plazo_acreditacion', label: 'Plazo estimado de acreditación', placeholder: 'Ej: 60 días hábiles' },
      ]},
      { title: '💵 Condiciones económicas', fields: [
        { id: 'precio_letras', label: 'Precio total (letras) <span class="req">*</span>', placeholder: 'Ej: Ciento cincuenta mil dólares', full: true },
        { id: 'precio_num', label: 'Precio total (números) <span class="req">*</span>', placeholder: 'Ej: USD 150.000' },
        { id: 'reserva_num', label: 'Monto reserva <span class="req">*</span>', placeholder: 'Ej: USD 5.000' },
        { id: 'reserva_letras', label: 'Monto reserva (letras)', placeholder: 'Ej: Cinco mil dólares', full: true },
        { id: 'fecha_esc', label: 'Fecha tope de escritura', type: 'date' },
      ]},
      { title: '📊 Comisiones', fields: [
        { id: 'com_captador', label: 'Comisión captador (%+IVA)', placeholder: 'Ej: 3' },
        { id: 'com_oferente', label: 'Comisión oferente (%+IVA)', placeholder: 'Ej: 4' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales', type: 'textarea', placeholder: 'Condiciones especiales del crédito...', full: true },
      ]},
    ],
    clausulas_default: ['hip_encabezado','hip_comprador','hip_vendedor','hip_inmueble','hip_precio','hip_reserva','hip_condicion_suspensiva','hip_saldo','hip_ad_referendum','hip_sena','hip_renuncia_765','hip_posesion','hip_honorarios','hip_incumplimiento','hip_jurisdiccion','hip_agente','hip_cierre']
  },
  {
    id: 'r_cesion', nombre: 'Reserva cesión', icon: '📝', categoria: 'compra', descripcion: 'Boleto / derechos',
    sections: [
      { title: '📍 Inmueble / Boleto cedido', fields: [
        { id: 'inmueble_dir', label: 'Descripción del inmueble / unidad <span class="req">*</span>', placeholder: 'Dirección, torre, piso, unidad', full: true },
        { id: 'precio_original', label: 'Precio original del boleto', placeholder: 'Ej: USD 75.000' },
        { id: 'fecha_boleto_orig', label: 'Fecha del boleto original', type: 'date' },
      ]},
      { title: '👤 Cedente (vende los derechos)', fields: [
        { id: 'cedente_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'cedente_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'cedente_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'cedente_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'cedente_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'cedente_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'cedente_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '👤 Cesionario (compra los derechos)', fields: [
        { id: 'cesionario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'cesionario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'cesionario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'cesionario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'cesionario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'cesionario_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'cesionario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '💵 Condiciones económicas', fields: [
        { id: 'precio_letras', label: 'Precio de la cesión (letras) <span class="req">*</span>', placeholder: 'Ej: Noventa mil dólares', full: true },
        { id: 'precio_num', label: 'Precio de la cesión (números) <span class="req">*</span>', placeholder: 'Ej: USD 90.000' },
        { id: 'moneda', label: 'Moneda', type: 'select', options: ['Dólares billete (USD)','Pesos argentinos (ARS)'] },
        { id: 'reserva_letras', label: 'Monto reserva (letras) <span class="req">*</span>', placeholder: 'Ej: Dos mil dólares', full: true },
        { id: 'reserva_num', label: 'Monto reserva (números) <span class="req">*</span>', placeholder: 'Ej: USD 2.000' },
        { id: 'fecha_firma_ces', label: 'Fecha tope para firma de cesión', type: 'date' },
      ]},
      { title: '📊 Comisiones', fields: [
        { id: 'com_captador', label: 'Comisión captador (%+IVA)', placeholder: 'Ej: 3' },
        { id: 'com_oferente', label: 'Comisión oferente (%+IVA)', placeholder: 'Ej: 4' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales', type: 'textarea', placeholder: 'Condiciones especiales...', full: true },
      ]},
    ],
    clausulas_default: ['ces_encabezado','ces_cedente','ces_cesionario','ces_inmueble','ces_precio','ces_reserva','ces_fecha_tope','ces_ad_referendum','ces_sena','ces_renuncia_765','ces_honorarios','ces_incumplimiento','ces_jurisdiccion','ces_agente','ces_cierre']
  },
  {
    id: 'r_emprendimiento', nombre: 'Reserva emprendimiento', icon: '🏗️', categoria: 'compra', descripcion: 'Unidad en pozo',
    sections: [
      { title: '🏗️ Emprendimiento y unidad', fields: [
        { id: 'emp_nombre', label: 'Nombre del emprendimiento <span class="req">*</span>', placeholder: 'Ej: Torre Palermo Soho', full: true },
        { id: 'emp_dir', label: 'Dirección del emprendimiento', placeholder: 'Calle, barrio, ciudad', full: true },
        { id: 'unidad', label: 'Unidad / Número de piso / Torre <span class="req">*</span>', placeholder: 'Ej: Piso 5, Unidad A, Torre 1', full: true },
        { id: 'superficie', label: 'Superficie (m²)', placeholder: 'Ej: 65 m² + 10 m² balcón' },
        { id: 'entrega_est', label: 'Entrega estimada', placeholder: 'Ej: Diciembre 2026' },
      ]},
      { title: '🏢 Desarrolladora', fields: [
        { id: 'dev_nombre', label: 'Razón social desarrolladora <span class="req">*</span>', placeholder: 'Nombre de la empresa', full: true },
        { id: 'dev_cuit', label: 'CUIT', placeholder: '00-00000000-0' },
      ]},
      { title: '👤 Comprador / Inversor', fields: [
        { id: 'comprador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'comprador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'comprador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'comprador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'comprador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'comprador_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'comprador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '💵 Condiciones económicas', fields: [
        { id: 'precio_letras', label: 'Precio total (letras) <span class="req">*</span>', placeholder: 'Ej: Ciento veinte mil dólares', full: true },
        { id: 'precio_num', label: 'Precio total (números) <span class="req">*</span>', placeholder: 'Ej: USD 120.000' },
        { id: 'reserva_letras', label: 'Monto reserva (letras) <span class="req">*</span>', placeholder: 'Ej: Cinco mil dólares', full: true },
        { id: 'reserva_num', label: 'Monto reserva (números) <span class="req">*</span>', placeholder: 'Ej: USD 5.000' },
        { id: 'plan_pago', label: 'Plan de pago', type: 'textarea', placeholder: 'Ej: 20% al boleto, 30% en cuotas, 50% a la escritura', full: true },
        { id: 'moneda', label: 'Moneda', type: 'select', options: ['Dólares billete (USD)','Pesos argentinos (ARS)'] },
      ]},
      { title: '📊 Comisiones', fields: [
        { id: 'com_captador', label: 'Comisión captador (%+IVA)', placeholder: 'Ej: 3' },
        { id: 'com_oferente', label: 'Comisión oferente (%+IVA)', placeholder: 'Ej: 4' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales', type: 'textarea', placeholder: 'Condiciones especiales...', full: true },
      ]},
    ],
    clausulas_default: ['remp_encabezado','remp_dador','remp_desarrolladora','remp_emprendimiento','remp_precio','remp_forma_pago','remp_ad_referendum','remp_sena','remp_persona_juridica','remp_honorarios','remp_corredor','remp_renuncia_765','remp_billetes','remp_incumplimiento','remp_jurisdiccion','remp_agente','remp_cierre']
  },
  // ════════════════════════════════════════════════════════════════
  // ALQUILER (4 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'r_loc_caba', nombre: 'Reserva locación CABA', icon: '🔑', categoria: 'alquiler', descripcion: 'Vivienda',
    sections: [
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., CABA', full: true },
        { id: 'ambientes', label: 'Ambientes', placeholder: 'Ej: 3 ambientes' },
        { id: 'piso_dpto', label: 'Piso / Departamento', placeholder: 'Ej: 3° B' },
      ]},
      { title: '👤 Locatario (interesado)', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Propietario / Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'alq_pretendido', label: 'Alquiler mensual pretendido <span class="req">*</span>', placeholder: 'Ej: $350.000' },
        { id: 'alq_pretendido_letras', label: 'Alquiler mensual (letras)', placeholder: 'Ej: Trescientos cincuenta mil pesos', full: true },
        { id: 'duracion', label: 'Duración contrato', type: 'select', options: ['2 años','3 años'] },
        { id: 'fecha_ingreso', label: 'Fecha de ingreso pretendida', type: 'date' },
        { id: 'garantia', label: 'Garantía ofrecida', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','A convenir'] },
        { id: 'reserva_num', label: 'Monto de reserva entregado', placeholder: 'Ej: $100.000' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales', type: 'textarea', placeholder: 'Condiciones especiales...', full: true },
      ]},
    ],
    clausulas_default: ['lcab_encabezado','lcab_locatario','lcab_propietario','lcab_inmueble','lcab_condiciones','lcab_garantia','lcab_reserva','lcab_ad_referendum','lcab_condicion_reserva','lcab_honorarios','lcab_jurisdiccion','lcab_agente','lcab_cierre']
  },
  {
    id: 'r_loc_pba', nombre: 'Reserva locación PBA', icon: '🏡', categoria: 'alquiler', descripcion: 'Vivienda',
    sections: [
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, localidad, Provincia de Buenos Aires', full: true },
        { id: 'partido', label: 'Partido / Municipio', placeholder: 'Ej: San Isidro, Tigre, Pilar...' },
      ]},
      { title: '👤 Locatario (interesado)', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Propietario / Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'alq_pretendido', label: 'Alquiler mensual pretendido <span class="req">*</span>', placeholder: 'Ej: $300.000' },
        { id: 'alq_pretendido_letras', label: 'Alquiler mensual (letras)', placeholder: 'Ej: Trescientos mil pesos', full: true },
        { id: 'duracion', label: 'Duración contrato', type: 'select', options: ['2 años','3 años'] },
        { id: 'fecha_ingreso', label: 'Fecha de ingreso pretendida', type: 'date' },
        { id: 'garantia', label: 'Garantía ofrecida', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','A convenir'] },
        { id: 'reserva_num', label: 'Monto de reserva entregado', placeholder: 'Ej: $80.000' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales', type: 'textarea', placeholder: 'Condiciones especiales...', full: true },
      ]},
    ],
    clausulas_default: ['lpb_encabezado','lpb_locatario','lpb_propietario','lpb_inmueble','lpb_condiciones','lpb_garantia','lpb_reserva','lpb_ad_referendum','lpb_condicion','lpb_honorarios','lpb_jurisdiccion','lpb_agente','lpb_cierre']
  },
  {
    id: 'r_loc_comercial', nombre: 'Reserva locación', icon: '🏪', categoria: 'alquiler', descripcion: 'Comercial',
    sections: [
      { title: '📍 Inmueble comercial', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'rubro', label: 'Rubro destinado <span class="req">*</span>', placeholder: 'Ej: Gastronomía, comercio, oficina', full: true },
        { id: 'inmueble_superficie', label: 'Superficie aprox. (m²)', placeholder: 'Ej: 80' },
      ]},
      { title: '👤 Locatario (interesado)', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Propietario / Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido / Razón social <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'alq_pretendido', label: 'Alquiler mensual pretendido <span class="req">*</span>', placeholder: 'Ej: $500.000' },
        { id: 'alq_pretendido_letras', label: 'Alquiler mensual (letras)', placeholder: 'Ej: Quinientos mil pesos', full: true },
        { id: 'duracion', label: 'Duración contrato (años) <span class="req">*</span>', placeholder: 'Ej: 3' },
        { id: 'fecha_ingreso', label: 'Fecha de ingreso pretendida', type: 'date' },
        { id: 'reserva_num', label: 'Monto de reserva entregado', placeholder: 'Ej: $150.000' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales', type: 'textarea', placeholder: 'Condiciones especiales...', full: true },
      ]},
    ],
    clausulas_default: ['lcom_encabezado','lcom_locatario','lcom_propietario','lcom_inmueble','lcom_condiciones','lcom_reserva','lcom_ad_referendum','lcom_condicion','lcom_honorarios','lcom_jurisdiccion','lcom_agente','lcom_cierre']
  },
  {
    id: 'r_temporal', nombre: 'Reserva temporario', icon: '⏱️', categoria: 'alquiler', descripcion: 'Alquiler temporario',
    sections: [
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, localidad', full: true },
        { id: 'incluye', label: 'El precio incluye', placeholder: 'Ej: Expensas, WIFI, agua, etc.', full: true },
      ]},
      { title: '👤 Locatario (interesado)', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '🏷️ Propietario / Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
      ]},
      { title: '⏱️ Período y condiciones', fields: [
        { id: 'fecha_desde', label: 'Fecha de ingreso <span class="req">*</span>', type: 'date' },
        { id: 'fecha_hasta', label: 'Fecha de egreso <span class="req">*</span>', type: 'date' },
        { id: 'precio_total', label: 'Precio total del período (números) <span class="req">*</span>', placeholder: 'Ej: $450.000 o USD 1.500' },
        { id: 'precio_total_letras', label: 'Precio total (letras)', placeholder: 'Ej: Cuatrocientos cincuenta mil pesos', full: true },
        { id: 'deposito', label: 'Depósito (30% del total)', placeholder: 'Ej: $135.000' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
        { id: 'ad_ref', label: 'Condiciones adicionales (opcional)', type: 'textarea', placeholder: 'Condiciones especiales, etc.', full: true },
      ]},
    ],
    clausulas_default: ['rtmp_encabezado','rtmp_locatario','rtmp_propietario','rtmp_inmueble','rtmp_periodo','rtmp_reserva_deposito','rtmp_ad_referendum','rtmp_condicion','rtmp_honorarios','rtmp_jurisdiccion','rtmp_agente','rtmp_cierre']
  },
  // ════════════════════════════════════════════════════════════════
  // AUTORIZACIÓN (7 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'aut_venta_exc', nombre: 'Autorización de venta', icon: '✍️', categoria: 'autorizacion', descripcion: 'Exclusiva',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario (autorizante)', fields: [
        { id: 'prop_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'prop_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'prop_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'prop_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'prop_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'prop_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'prop_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble autorizado', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_desc', label: 'Descripción adicional', placeholder: 'Superficies, características, etc.', full: true },
      ]},
      { title: '💵 Condiciones de la autorización', fields: [
        { id: 'precio_letras', label: 'Precio de venta autorizado (letras) <span class="req">*</span>', placeholder: 'Ej: Ciento cincuenta mil dólares', full: true },
        { id: 'precio_num', label: 'Precio de venta autorizado (números) <span class="req">*</span>', placeholder: 'Ej: USD 150.000' },
        { id: 'plazo_dias', label: 'Plazo de exclusividad (días hábiles)', placeholder: 'Ej: 90' },
        { id: 'com_pct', label: 'Comisión del corredor (%+IVA)', placeholder: 'Ej: 3' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['av_encabezado','av_precio','av_titularidad','av_percibir','av_honorarios','av_exclusividad','av_proteccion','av_publicidad','av_gastos_pub','av_conyuge','av_jurisdiccion','av_agente','av_cierre']
  },
  {
    id: 'aut_venta_renta', nombre: 'Autorización venta c/renta', icon: '💰', categoria: 'autorizacion', descripcion: 'Inversión',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario (autorizante)', fields: [
        { id: 'prop_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'prop_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'prop_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'prop_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'prop_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'prop_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'prop_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inquilino_actual', label: 'Inquilino actual (si tiene)', placeholder: 'Nombre del inquilino' },
        { id: 'alq_actual', label: 'Alquiler mensual actual', placeholder: 'Ej: $500.000 / mes' },
        { id: 'ctto_vto', label: 'Vencimiento contrato locación', type: 'date' },
      ]},
      { title: '💵 Condiciones de venta', fields: [
        { id: 'precio_letras', label: 'Precio de venta (letras) <span class="req">*</span>', placeholder: 'Ej: Doscientos mil dólares', full: true },
        { id: 'precio_num', label: 'Precio de venta (números) <span class="req">*</span>', placeholder: 'Ej: USD 200.000' },
        { id: 'plazo_dias', label: 'Plazo de exclusividad (días hábiles)', placeholder: 'Ej: 90' },
        { id: 'com_pct', label: 'Comisión del corredor (%+IVA)', placeholder: 'Ej: 3' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['avr_encabezado','avr_precio','avr_titularidad','avr_percibir','avr_honorarios','avr_exclusividad','avr_proteccion','avr_publicidad','avr_gastos_pub','avr_contrato_locacion','avr_locatario_acceso','avr_conyuge','avr_jurisdiccion','avr_cierre']
  },
  {
    id: 'aut_cesion', nombre: 'Autorización venta', icon: '🔄', categoria: 'autorizacion', descripcion: 'Con cesión de derechos',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario / Cedente', fields: [
        { id: 'prop_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'prop_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'prop_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'prop_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'prop_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'prop_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'prop_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble / Boleto de compraventa', fields: [
        { id: 'inmueble_dir', label: 'Inmueble objeto del boleto <span class="req">*</span>', placeholder: 'Descripción del inmueble o unidad', full: true },
        { id: 'precio_original', label: 'Precio original del boleto', placeholder: 'Ej: USD 80.000' },
        { id: 'fecha_boleto_orig', label: 'Fecha del boleto original', type: 'date' },
      ]},
      { title: '💵 Condiciones de la autorización', fields: [
        { id: 'precio_letras', label: 'Precio de cesión autorizado (letras) <span class="req">*</span>', placeholder: 'Ej: Noventa mil dólares', full: true },
        { id: 'precio_num', label: 'Precio de cesión autorizado (números) <span class="req">*</span>', placeholder: 'Ej: USD 90.000' },
        { id: 'plazo_dias', label: 'Plazo de exclusividad (días hábiles)', placeholder: 'Ej: 90' },
        { id: 'com_pct', label: 'Comisión del corredor (%+IVA)', placeholder: 'Ej: 3' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['ac_encabezado','ac_autorizante','ac_objeto','ac_precio','ac_exclusividad','ac_comision','ac_proteccion','ac_jurisdiccion','ac_agente','ac_cierre']
  },
  {
    id: 'aut_emprendimiento', nombre: 'Autorización venta', icon: '🏗️', categoria: 'autorizacion', descripcion: 'Emprendimiento',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '🏢 Autorizante (representante legal)', fields: [
        { id: 'emp_razons', label: 'Razón social <span class="req">*</span>', placeholder: 'Nombre de la empresa / fideicomiso', full: true },
        { id: 'emp_cuit', label: 'CUIT', placeholder: '00-00000000-0' },
        { id: 'emp_rep', label: 'Representante legal (nombre) <span class="req">*</span>', placeholder: 'Nombre y apellido', full: true },
        { id: 'emp_rep_dni', label: 'DNI del representante', placeholder: '00.000.000' },
        { id: 'emp_rep_cuit', label: 'CUIT/CUIL del representante', placeholder: '00-00000000-0' },
        { id: 'emp_rep_ecivil', label: 'Estado civil del representante', placeholder: 'Soltero/a, casado/a, etc.' },
        { id: 'emp_rep_nac', label: 'Nacionalidad del representante', placeholder: 'Argentino' },
        { id: 'emp_rep_domicilio', label: 'Domicilio del representante', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'emp_dom', label: 'Domicilio social de la empresa', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📜 Poder (Anexo I)', fields: [
        { id: 'fecha_poder', label: 'Fecha del poder', type: 'date' },
        { id: 'escribano', label: 'Escribano actuante', placeholder: 'Nombre completo', full: true },
        { id: 'num_poder', label: 'Número de protocolo', placeholder: 'Ej: 123' },
      ]},
      { title: '🏗️ Emprendimiento', fields: [
        { id: 'emp_nombre', label: 'Nombre del emprendimiento <span class="req">*</span>', placeholder: 'Ej: Torre Palermo Soho', full: true },
        { id: 'emp_dir', label: 'Calle del emprendimiento', placeholder: 'Solo nombre de la calle', full: true },
        { id: 'numero', label: 'Número', placeholder: 'Ej: 1234' },
        { id: 'piso', label: 'Piso', placeholder: 'Ej: PB' },
        { id: 'dpto', label: 'Departamento', placeholder: 'Ej: 3' },
        { id: 'uf', label: 'UF (Unidad Funcional)', placeholder: 'Ej: 12' },
        { id: 'caba_pba', label: 'Ubicación', type: 'select', options: ['CABA','PBA'] },
        { id: 'matricula', label: 'Matrícula FR/FRE', placeholder: 'Ej: FR-12345' },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'precio_letras', label: 'Precio de venta (letras) <span class="req">*</span>', placeholder: 'Ej: Doscientos mil dólares', full: true },
        { id: 'precio_num', label: 'Precio de venta (números) <span class="req">*</span>', placeholder: 'Ej: USD 200.000' },
        { id: 'plazo_dias', label: 'Plazo de exclusividad (días hábiles)', placeholder: 'Ej: 90' },
        { id: 'com_pct', label: 'Comisión del corredor (%+IVA)', placeholder: 'Ej: 3' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['ae_encabezado','ae_precio_anexo','ae_declaracion','ae_percibir','ae_honorarios','ae_exclusividad','ae_publicidad','ae_gastos_pub','ae_jurisdiccion','ae_cierre']
  },
  {
    id: 'aut_locacion_exc', nombre: 'Autorización de alquiler', icon: '📋', categoria: 'autorizacion', descripcion: 'Exclusiva',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario (autorizante)', fields: [
        { id: 'prop_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'prop_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'prop_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'prop_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'prop_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'prop_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'prop_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble autorizado', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., ciudad', full: true },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Ambientes, m², características', full: true },
      ]},
      { title: '💰 Condiciones de la autorización', fields: [
        { id: 'precio_letras', label: 'Alquiler mensual pretendido (letras) <span class="req">*</span>', placeholder: 'Ej: Doscientos cincuenta mil pesos', full: true },
        { id: 'precio_num', label: 'Alquiler mensual pretendido (números) <span class="req">*</span>', placeholder: 'Ej: $250.000' },
        { id: 'plazo_dias', label: 'Plazo de exclusividad (días hábiles)', placeholder: 'Ej: 60' },
        { id: 'com_pct', label: 'Comisión del corredor (%+IVA)', placeholder: 'Ej: 1 mes' },
        { id: 'garantia', label: 'Garantía requerida', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Recibo de sueldo','A convenir'] },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['al_encabezado','al_autorizante','al_inmueble','al_alquiler','al_exclusividad','al_garantia','al_comision','al_obligaciones','al_proteccion','al_jurisdiccion','al_agente','al_cierre']
  },
  {
    id: 'aut_temporal_excl', nombre: 'Autorización temporario', icon: '🌟', categoria: 'autorizacion', descripcion: 'Exclusiva',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario (autorizante)', fields: [
        { id: 'prop_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'prop_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'prop_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'prop_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'prop_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'prop_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'prop_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble autorizado', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., localidad', full: true },
        { id: 'inmueble_desc', label: 'Descripción y comodidades', placeholder: 'Ambientes, m², equipamiento', full: true },
      ]},
      { title: '💰 Condiciones de la autorización', fields: [
        { id: 'precio_num', label: 'Precio diario / semanal pretendido <span class="req">*</span>', placeholder: 'Ej: USD 120/noche' },
        { id: 'plataformas', label: 'Plataformas de comercialización', type: 'select', options: ['Airbnb','Booking','Ambas','Otras'] },
        { id: 'plazo_meses', label: 'Plazo de exclusividad (meses)', placeholder: 'Ej: 6' },
        { id: 'com_pct', label: 'Comisión del corredor (%)', placeholder: 'Ej: 20' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['atex_encabezado','atex_autorizante','atex_inmueble','atex_precio_plataformas','atex_exclusividad','atex_comision','atex_obligaciones','atex_proteccion','atex_jurisdiccion','atex_agente','atex_cierre']
  },
  {
    id: 'aut_temp_noexcl', nombre: 'Autorización temporario', icon: '📄', categoria: 'autorizacion', descripcion: 'No exclusiva',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario (autorizante)', fields: [
        { id: 'prop_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'prop_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'prop_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'prop_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'prop_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'prop_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'prop_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble autorizado', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., localidad', full: true },
        { id: 'inmueble_desc', label: 'Descripción y comodidades', placeholder: 'Ambientes, m², equipamiento', full: true },
      ]},
      { title: '💰 Condiciones de la autorización', fields: [
        { id: 'precio_num', label: 'Precio diario / semanal pretendido <span class="req">*</span>', placeholder: 'Ej: $50.000/noche' },
        { id: 'plataformas', label: 'Plataformas de comercialización', type: 'select', options: ['Airbnb','Booking','Ambas','Redes sociales','Otras'] },
        { id: 'plazo_meses', label: 'Plazo de autorización (meses)', placeholder: 'Ej: 3' },
        { id: 'com_pct', label: 'Comisión del corredor (%)', placeholder: 'Ej: 20' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['atne_encabezado','atne_autorizante','atne_inmueble','atne_precio_plataformas','atne_autorizacion_noexcl','atne_comision','atne_jurisdiccion','atne_agente','atne_cierre']
  },
  // ════════════════════════════════════════════════════════════════
  // GESTIÓN (4 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'prorroga', nombre: 'Prórroga de contrato', icon: '📅', categoria: 'gestion', descripcion: 'Extensión de plazo',
    sections: [
      { title: '📋 Datos del contrato original', fields: [
        { id: 'contrato_ref', label: 'Referencia del contrato', placeholder: 'Ej: Contrato de locación del xx/xx/xxxx', full: true },
        { id: 'fecha_inic_orig', label: 'Fecha de inicio original', type: 'date' },
        { id: 'fecha_fin_orig', label: 'Fecha de finalización original', type: 'date' },
      ]},
      { title: '👤 Partes', fields: [
        { id: 'locador_nombre', label: 'Locador', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_nombre', label: 'Locatario', placeholder: 'Nombre completo', full: true },
        { id: 'garante_nombre', label: 'Garante', placeholder: 'Nombre completo', full: true },
      ]},
      { title: '📅 Nueva fecha de vencimiento', fields: [
        { id: 'fecha_fin_nueva', label: 'Nueva fecha de finalización', type: 'date' },
        { id: 'motivo', label: 'Motivo de la prórroga', placeholder: 'Ej: Por acuerdo entre las partes', full: true },
      ]},
    ],
    clausulas_default: ['pr_encabezado','pr_objeto','pr_plazo','pr_mensual','pr_garantia','pr_jurisdiccion','pr_firma']
  },
  {
    id: 'reintegro', nombre: 'Reintegro de locador', icon: '💰', categoria: 'gestion', descripcion: 'Reintegro por daños',
    sections: [
      { title: '📋 Datos del contrato original', fields: [
        { id: 'contrato_ref', label: 'Referencia del contrato', placeholder: 'Ej: Contrato de locación del xx/xx/xxxx', full: true },
      ]},
      { title: '👤 Partes', fields: [
        { id: 'locador_nombre', label: 'Locador', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_nombre', label: 'Locatario', placeholder: 'Nombre completo', full: true },
      ]},
      { title: '💰 Detalle del reintegro', fields: [
        { id: 'concepto', label: 'Concepto del reintegro', placeholder: 'Ej: Reparación de filtración en techo', full: true },
        { id: 'monto_letras', label: 'Monto (letras) <span class="req">*</span>', placeholder: 'Ej: Treinta mil pesos', full: true },
        { id: 'monto_num', label: 'Monto (números) <span class="req">*</span>', placeholder: 'Ej: $30.000' },
        { id: 'fecha_reintegro', label: 'Fecha de reintegro', type: 'date' },
      ]},
    ],
    clausulas_default: ['rt_encabezado','rt_objeto','rt_monto','rt_forma_pago','rt_jurisdiccion','rt_firma']
  },
  {
    id: 'acta_fondos', nombre: 'Acta de fondos', icon: '🧾', categoria: 'gestion', descripcion: 'Liquidación final',
    sections: [
      { title: '📋 Datos del contrato original', fields: [
        { id: 'contrato_ref', label: 'Referencia del contrato', placeholder: 'Ej: Contrato de locación del xx/xx/xxxx', full: true },
        { id: 'fecha_inicio', label: 'Fecha de inicio', type: 'date' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
      ]},
      { title: '👤 Partes', fields: [
        { id: 'locador_nombre', label: 'Locador', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_nombre', label: 'Locatario', placeholder: 'Nombre completo', full: true },
      ]},
      { title: '📊 Liquidación', fields: [
        { id: 'saldo_favor_locador', label: 'Saldo a favor del locador', placeholder: 'Ej: $15.000' },
        { id: 'saldo_favor_locatario', label: 'Saldo a favor del locatario', placeholder: 'Ej: $0' },
        { id: 'observaciones', label: 'Observaciones', placeholder: 'Detalles adicionales...', full: true },
      ]},
    ],
    clausulas_default: ['af_encabezado','af_objeto','af_saldo','af_jurisdiccion','af_firma']
  },
  {
    id: 'desistimiento', nombre: 'Desistimiento', icon: '🚫', categoria: 'gestion', descripcion: 'Renuncia anticipada',
    sections: [
      { title: '📋 Datos del contrato original', fields: [
        { id: 'contrato_ref', label: 'Referencia del contrato', placeholder: 'Ej: Contrato de locación del xx/xx/xxxx', full: true },
        { id: 'fecha_fin_orig', label: 'Fecha de finalización original', type: 'date' },
      ]},
      { title: '👤 Partes', fields: [
        { id: 'locador_nombre', label: 'Locador', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_nombre', label: 'Locatario', placeholder: 'Nombre completo', full: true },
      ]},
      { title: '📅 Detalle del desistimiento', fields: [
        { id: 'fecha_salida', label: 'Fecha de desocupación <span class="req">*</span>', type: 'date' },
        { id: 'motivo', label: 'Motivo del desistimiento', placeholder: 'Ej: Motivos personales / laborales', full: true },
        { id: 'pago_penal', label: 'Monto de penalidad', placeholder: 'Ej: 1 mes de alquiler' },
        { id: 'fecha_desistimiento', label: 'Fecha de notificación', type: 'date' },
      ]},
    ],
    clausulas_default: ['de_encabezado','de_objeto','de_monto','de_jurisdiccion','de_firma']
  },

  // ════════════════════════════════════════════════════════════════
  // CONTRATO (5 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'cont_locacion_viv', nombre: 'Contrato de locación', icon: '🏠', categoria: 'contrato', descripcion: 'Vivienda',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locador_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '👤 Locatario', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI', placeholder: '00.000.000' },
        { id: 'locatario_cuit', label: 'CUIT', placeholder: '00-00000000-0' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_causes', label: 'En virtud de', placeholder: 'Ej: su matrimonio con...' },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_lugar_nacimiento', label: 'Lugar de nacimiento', placeholder: 'Ej: Ciudad de Buenos Aires', full: true },
        { id: 'locatario_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_superficie', label: 'Superficie (m²)', placeholder: 'Ej: 65' },
        { id: 'inmueble_ambientes', label: 'Ambientes', placeholder: 'Ej: 3' },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Detalles adicionales', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'monto_alquiler', label: 'Monto mensual del alquiler <span class="req">*</span>', placeholder: 'Ej: $350.000' },
        { id: 'ajuste_indice', label: 'Índice de ajuste', type: 'select', options: ['IPC','CER','Índice de Remuneración Vespignani','Conforme a Ley 27.551','Otro'] },
        { id: 'periodo_ajuste', label: 'Período de ajuste', type: 'select', options: ['Cada 3 meses','Cada 6 meses','Anual'] },
        { id: 'garantia_tipo', label: 'Tipo de garantía <span class="req">*</span>', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Cesión de crédito','A convenir'] },
        { id: 'garantia_monto', label: 'Monto / detalle de la garantía', placeholder: 'Ej: $1.400.000 (4 meses)' },
        { id: 'anticipo_deposito', label: 'Depósito en garantía ($)', placeholder: 'Ej: $350.000' },
        { id: 'honorarios_monto', label: 'Honorarios ($)', placeholder: 'Ej: $105.000' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de inicio <span class="req">*</span>', type: 'date' },
        { id: 'duracion_meses', label: 'Duración (meses) <span class="req">*</span>', placeholder: 'Ej: 36' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
        { id: 'anticipo_meses', label: 'Anticipo (meses)', placeholder: 'Ej: 1' },
        { id: 'anticipo_dias', label: 'Días para depositar anticipo', placeholder: 'Ej: 5' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['clv_encabezado','clv_objeto','clv_plazo','clv_mensual','clv_ajuste','clv_garantia','clv_deposito','clv_honorarios','clv_gastos','clv_destino','clv_subarriendo','clv_mejoras','clv_reparaciones','clv_entrega_devolucion','clv_jurisdiccion','clv_agente','clv_firma']
  },
  {
    id: 'cont_locacion_usd', nombre: 'Contrato de locación', icon: '💵', categoria: 'contrato', descripcion: 'Vivienda USD',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locador_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '👤 Locatario', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI', placeholder: '00.000.000' },
        { id: 'locatario_cuit', label: 'CUIT', placeholder: '00-00000000-0' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_causes', label: 'En virtud de', placeholder: 'Ej: su matrimonio con...' },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_lugar_nacimiento', label: 'Lugar de nacimiento', placeholder: 'Ej: Ciudad de Buenos Aires', full: true },
        { id: 'locatario_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_superficie', label: 'Superficie (m²)', placeholder: 'Ej: 65' },
        { id: 'inmueble_ambientes', label: 'Ambientes', placeholder: 'Ej: 3' },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Detalles adicionales', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'monto_alquiler', label: 'Monto mensual en USD <span class="req">*</span>', placeholder: 'Ej: USD 1.200' },
        { id: 'cotizacion_dolar', label: 'Cotización del dólar de referencia', type: 'select', options: ['Dólar oficial','Dólar tarjeta','Dólar blue','Dólar CCL','A convenir'] },
        { id: 'ajuste_indice', label: 'Índice de ajuste', type: 'select', options: ['IPC','CER','Índice de Remuneración Vespignani','Conforme a Ley 27.551','Otro'] },
        { id: 'periodo_ajuste', label: 'Período de ajuste', type: 'select', options: ['Cada 3 meses','Cada 6 meses','Anual'] },
        { id: 'garantia_tipo', label: 'Tipo de garantía <span class="req">*</span>', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Cesión de crédito','A convenir'] },
        { id: 'garantia_monto', label: 'Monto / detalle de la garantía', placeholder: 'Ej: USD 4.800 (4 meses)' },
        { id: 'anticipo_deposito', label: 'Depósito en garantía (USD)', placeholder: 'Ej: USD 1.200' },
        { id: 'honorarios_monto', label: 'Honorarios ($)', placeholder: 'Ej: $105.000' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de inicio <span class="req">*</span>', type: 'date' },
        { id: 'duracion_meses', label: 'Duración (meses) <span class="req">*</span>', placeholder: 'Ej: 36' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
        { id: 'anticipo_meses', label: 'Anticipo (meses)', placeholder: 'Ej: 1' },
        { id: 'anticipo_dias', label: 'Días para depositar anticipo', placeholder: 'Ej: 5' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['clv_encabezado','clv_objeto','clv_plazo','clv_mensual','clv_ajuste','clv_garantia','clv_deposito','clv_honorarios','clv_gastos','clv_destino','clv_subarriendo','clv_mejoras','clv_reparaciones','clv_entrega_devolucion','clv_jurisdiccion','clv_agente','clv_firma']
  },
  {
    id: 'cont_locacion_com', nombre: 'Contrato de locación', icon: '🏢', categoria: 'contrato', descripcion: 'Comercio',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locador_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locador_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locador_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locador_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locador_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '👤 Locatario', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI', placeholder: '00.000.000' },
        { id: 'locatario_cuit', label: 'CUIT', placeholder: '00-00000000-0' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_causes', label: 'En virtud de', placeholder: 'Ej: su matrimonio con...' },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_superficie', label: 'Superficie (m²)', placeholder: 'Ej: 80' },
        { id: 'inmueble_ambientes', label: 'Ambientes', placeholder: 'Ej: 2' },
        { id: 'inmueble_destino', label: 'Destino comercial', placeholder: 'Ej: gastronomía, oficina, comercio', full: true },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Detalles adicionales', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'monto_alquiler', label: 'Monto mensual del alquiler <span class="req">*</span>', placeholder: 'Ej: $600.000' },
        { id: 'ajuste_indice', label: 'Índice de ajuste', type: 'select', options: ['IPC','CER','Índice de Remuneración Vespignani','Conforme a Ley 27.551','Otro'] },
        { id: 'periodo_ajuste', label: 'Período de ajuste', type: 'select', options: ['Cada 3 meses','Cada 6 meses','Anual'] },
        { id: 'garantia_tipo', label: 'Tipo de garantía <span class="req">*</span>', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Cesión de crédito','A convenir'] },
        { id: 'garantia_monto', label: 'Monto / detalle de la garantía', placeholder: 'Ej: $2.400.000 (4 meses)' },
        { id: 'anticipo_deposito', label: 'Depósito en garantía ($)', placeholder: 'Ej: $600.000' },
        { id: 'honorarios_monto', label: 'Honorarios ($)', placeholder: 'Ej: $180.000' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de inicio <span class="req">*</span>', type: 'date' },
        { id: 'duracion_meses', label: 'Duración (meses) <span class="req">*</span>', placeholder: 'Ej: 36' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
        { id: 'anticipo_meses', label: 'Anticipo (meses)', placeholder: 'Ej: 1' },
        { id: 'anticipo_dias', label: 'Días para depositar anticipo', placeholder: 'Ej: 5' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['clc_encabezado','clc_objeto','clc_plazo','clc_mensual','clc_ajuste','clc_garantia','clc_deposito','clc_honorarios','clc_gastos','clc_destino','clc_subarriendo','clc_mejoras','clc_reparaciones','clc_entrega_devolucion','clc_jurisdiccion','clc_agente','clc_firma']
  },
  {
    id: 'cont_temp_con', nombre: 'Contrato temporario', icon: '🌟', categoria: 'contrato', descripcion: 'Temporario con servicios',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario / Anfitrión', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locador_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '👤 Huesped', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI / Pasaporte', placeholder: '00.000.000' },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_causes', label: 'En virtud de', placeholder: 'Ej: su matrimonio con...' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., localidad', full: true },
        { id: 'inmueble_superficie', label: 'Superficie (m²)', placeholder: 'Ej: 65' },
        { id: 'inmueble_ambientes', label: 'Ambientes', placeholder: 'Ej: 3' },
        { id: 'inmueble_desc', label: 'Descripción y comodidades', placeholder: 'Ambientes, m², equipamiento', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'precio_noche', label: 'Precio por noche <span class="req">*</span>', placeholder: 'Ej: $45.000' },
        { id: 'precio_total', label: 'Precio total de la estadía', placeholder: 'Ej: $315.000' },
        { id: 'forma_pago', label: 'Forma de pago', placeholder: 'Ej: Transferencia bancaria / Efectivo' },
        { id: 'precio_semana', label: 'Precio por semana', placeholder: 'Ej: $270.000' },
        { id: 'precio_mes', label: 'Precio por mes', placeholder: 'Ej: $850.000' },
        { id: 'servicios_incluidos', label: 'Servicios incluidos', type: 'select', options: ['Wifi, agua, luz, gas','Wifi, agua, luz, gas, limpieza','A convenir'] },
        { id: 'honorarios_monto', label: 'Honorarios ($)', placeholder: 'Ej: $31.500' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de llegada <span class="req">*</span>', type: 'date' },
        { id: 'duracion_noches', label: 'Noches de estadía', placeholder: 'Ej: 7' },
        { id: 'fecha_fin', label: 'Fecha de salida <span class="req">*</span>', type: 'date' },
        { id: 'hora_llegada', label: 'Hora de llegada (check-in)', placeholder: 'Ej: 14:00' },
        { id: 'hora_salida', label: 'Hora de salida (check-out)', placeholder: 'Ej: 10:00' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['ctc_encabezado','ctc_objeto','ctc_plazo','ctc_precio','ctc_servicios','ctc_honorarios','ctc_proteccion','ctc_jurisdiccion','ctc_firma']
  },
  {
    id: 'cont_temp_sin', nombre: 'Contrato temporario', icon: '📄', categoria: 'contrato', descripcion: 'Temporario sin servicios',
    sections: [
      { title: '📋 Lugar y fecha de firma', fields: [
        { id: 'ciudad_firma', label: 'Ciudad de firma', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_firma', label: 'Fecha de firma', type: 'date' },
      ]},
      { title: '👤 Propietario / Anfitrión', fields: [
        { id: 'locador_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locador_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locador_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '👤 Huesped', fields: [
        { id: 'locatario_nombre', label: 'Nombre y apellido <span class="req">*</span>', placeholder: 'Nombre completo' },
        { id: 'locatario_dni', label: 'DNI / Pasaporte', placeholder: '00.000.000' },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_causes', label: 'En virtud de', placeholder: 'Ej: su matrimonio con...' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., localidad', full: true },
        { id: 'inmueble_superficie', label: 'Superficie (m²)', placeholder: 'Ej: 65' },
        { id: 'inmueble_ambientes', label: 'Ambientes', placeholder: 'Ej: 3' },
        { id: 'inmueble_desc', label: 'Descripción y comodidades', placeholder: 'Ambientes, m², equipamiento', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'precio_noche', label: 'Precio por noche <span class="req">*</span>', placeholder: 'Ej: $45.000' },
        { id: 'precio_total', label: 'Precio total de la estadía', placeholder: 'Ej: $315.000' },
        { id: 'forma_pago', label: 'Forma de pago', placeholder: 'Ej: Transferencia bancaria / Efectivo' },
        { id: 'precio_semana', label: 'Precio por semana', placeholder: 'Ej: $270.000' },
        { id: 'precio_mes', label: 'Precio por mes', placeholder: 'Ej: $850.000' },
        { id: 'servicios_excluidos', label: 'Servicios excluidos (detalle)', placeholder: 'Ej: Electricidad y gas a cargo del huésped', full: true },
        { id: 'honorarios_monto', label: 'Honorarios ($)', placeholder: 'Ej: $31.500' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de llegada <span class="req">*</span>', type: 'date' },
        { id: 'duracion_noches', label: 'Noches de estadía', placeholder: 'Ej: 7' },
        { id: 'fecha_fin', label: 'Fecha de salida <span class="req">*</span>', type: 'date' },
        { id: 'hora_llegada', label: 'Hora de llegada (check-in)', placeholder: 'Ej: 14:00' },
        { id: 'hora_salida', label: 'Hora de salida (check-out)', placeholder: 'Ej: 10:00' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['cts_encabezado','cts_objeto','cts_plazo','cts_precio','cts_servicios_excl','cts_honorarios','cts_proteccion','cts_jurisdiccion','cts_firma']
  },
  // ════════════════════════════════════════════════════════════════
  // BOLETOS DE COMPRAVENTA (2 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'boleto_compraventa', nombre: 'Boleto de Compraventa', icon: '📋', categoria: 'contrato', descripcion: 'Estándar - 70 días',
    sections: [
      { title: '📋 Encabezado y Partes', fields: [
        { id: 'fecha_ciudad', label: 'Ciudad', placeholder: 'Ej: San Isidro' },
        { id: 'fecha_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año', placeholder: 'Ej: 2026' },
        { id: 'vendedor_1_nombre', label: 'Vendedor 1 - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'vendedor_1_cuit', label: 'Vendedor 1 - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'vendedor_1_estado_civil', label: 'Vendedor 1 - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'vendedor_1_domicilio', label: 'Vendedor 1 - Domicilio', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'vendedor_2_nombre', label: 'Vendedor 2 - Nombre (opcional)', placeholder: 'Nombre completo', full: true },
        { id: 'vendedor_2_cuit', label: 'Vendedor 2 - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'vendedor_2_estado_civil', label: 'Vendedor 2 - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'vendedor_2_domicilio', label: 'Vendedor 2 - Domicilio', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'comprador_nombre', label: 'Comprador - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'comprador_cuit', label: 'Comprador - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'comprador_estado_civil', label: 'Comprador - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'comprador_domicilio', label: 'Comprador - Domicilio', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_ubicacion', label: 'Ubicación <span class="req">*</span>', placeholder: 'Ej: Ciudad Autónoma de Buenos Aires', full: true },
        { id: 'inmueble_calle', label: 'Calle', placeholder: 'Nombre de la calle' },
        { id: 'inmueble_numero', label: 'Número', placeholder: 'Ej: 1234' },
        { id: 'inmueble_entre_calles', label: 'Entre calles', placeholder: 'Calle 1 y Calle 2' },
        { id: 'inmueble_uf', label: 'Unidad Funcional Nº', placeholder: 'Ej: 5' },
        { id: 'inmueble_piso', label: 'Piso', placeholder: 'Ej: 3°' },
        { id: 'inmueble_circ', label: 'Circunscripción', placeholder: 'Ej: 12' },
        { id: 'inmueble_seccion', label: 'Sección', placeholder: 'Ej: 3' },
        { id: 'inmueble_manzana', label: 'Manzana', placeholder: 'Ej: 45' },
        { id: 'inmueble_parcela', label: 'Parcela', placeholder: 'Ej: 12A' },
        { id: 'inmueble_matricula', label: 'Matrícula', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '💰 Precio y Forma de Pago', fields: [
        { id: 'precio_letras', label: 'Precio total en letras <span class="req">*</span>', placeholder: 'Ej: Doscientos mil dólares', full: true },
        { id: 'precio_num', label: 'Precio total en números (U$S)', placeholder: 'Ej: 200.000' },
        { id: 'senal_letras', label: 'Seña en letras <span class="req">*</span>', placeholder: 'Ej: Diez mil dólares', full: true },
        { id: 'senal_num', label: 'Seña en números (U$S)', placeholder: 'Ej: 10.000' },
        { id: 'saldo_letras', label: 'Saldo en letras <span class="req">*</span>', placeholder: 'Ej: Ciento noventa mil dólares', full: true },
        { id: 'saldo_num', label: 'Saldo en números (U$S)', placeholder: 'Ej: 190.000' },
        { id: 'plazo_dias', label: 'Plazo en días para el saldo', placeholder: '70' },
        { id: 'partido_pago', label: 'Partido / lugar de pago y escrituración', placeholder: 'Ej: San Isidro', full: true },
      ]},
      { title: '🏦 Hipoteca (si aplica)', fields: [
        { id: 'escritura_hipoteca_nro', label: 'Escritura de cancelación Nº', placeholder: 'Ej: 123' },
        { id: 'escribano_hipoteca_nombre', label: 'Escribano que certificó cancelación', placeholder: 'Nombre del escribano', full: true },
        { id: 'escribano_hipoteca_matricula', label: 'Matrícula del escribano', placeholder: 'Ej: 4567' },
      ]},
      { title: '📦 Incluye / Equipamiento', fields: [
        { id: 'inmueble_incluye_1', label: 'Incluye (item 1)', placeholder: 'Ej: Cocina' },
        { id: 'inmueble_incluye_2', label: 'Incluye (item 2)', placeholder: 'Ej: Lavarropas' },
        { id: 'inmueble_incluye_3', label: 'Incluye (item 3)', placeholder: 'Ej: Aire acondicionado' },
        { id: 'inmueble_incluye_4', label: 'Incluye (item 4)', placeholder: 'Ej: Muebles de cocina' },
        { id: 'inmueble_incluye_5', label: 'Incluye (item 5)', placeholder: 'Ej: Cortinas' },
      ]},
      { title: '✍️ Escribanía', fields: [
        { id: 'escribano_nombre', label: 'Escribano interviniente <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'escribano_domicilio', label: 'Domicilio del escribano', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'partido_escribania', label: 'Partido de la escribanía', placeholder: 'Ej: San Isidro' },
      ]},
      { title: '📜 Títulos e Inhibiciones', fields: [
        { id: 'ciudad_rpi', label: 'Ciudad del Registro Propiedad Inmueble', placeholder: 'Ej: San Isidro' },
        { id: 'informe_dominio_fecha', label: 'Fecha informe de dominio', type: 'date' },
        { id: 'informe_dominio_numero', label: 'Nº informe de dominio', placeholder: 'Ej: 12345' },
        { id: 'anotaciones_personales_fecha', label: 'Fecha anotaciones personales', type: 'date' },
        { id: 'anotaciones_personales_numeros', label: 'Números anotaciones personales', placeholder: 'Ej: 123456' },
      ]},
      { title: '👰 Cónyuge del Vendedor', fields: [
        { id: 'conyuge_nombre', label: 'Nombre del cónyuge', placeholder: 'Nombre completo', full: true },
        { id: 'conyuge_dni', label: 'DNI del cónyuge', placeholder: '00.000.000' },
      ]},
      { title: '🔑 Usufructo (si aplica)', fields: [
        { id: 'usufructuario_nombre', label: 'Nombre del usufructuario', placeholder: 'Nombre completo', full: true },
        { id: 'usufructuario_dni', label: 'DNI del usufructuario', placeholder: '00.000.000' },
        { id: 'usufructuario_domicilio', label: 'Domicilio del usufructuario', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📄 Cesión de Locación (si aplica)', fields: [
        { id: 'locatario_nombre', label: 'Nombre del locatario (inquilino)', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_dni', label: 'DNI del locatario', placeholder: '00.000.000' },
        { id: 'locatario_domicilio', label: 'Domicilio del locatario', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'fiador_nombre', label: 'Nombre del fiador', placeholder: 'Nombre completo', full: true },
        { id: 'fiador_dni', label: 'DNI del fiador', placeholder: '00.000.000' },
        { id: 'fiador_domicilio', label: 'Domicilio del fiador', placeholder: 'Calle, número, ciudad', full: true },
      ]},
    ],
    clausulas_default: ['bcv_encabezado','bcv_primera_inmueble','bcv_segunda_precio','bcv_tercera_titulos','bcv_cuarta_hipoteca','bcv_quinta_entrega','bcv_sexta_incumplimiento','bcv_septima_titularidad','bcv_octava_escribania','bcv_novena_fallecimiento','bcv_decima_acceso','bcv_decimaprimera_documentos','bcv_decimasegunda_llaves','bcv_decimatercera_conyuge','bcv_decimacuarta_domicilios','bcv_decimaquinta_usufructo','bcv_decimasexta_locacion','bcv_cierre']
  },
  {
    id: 'boleto_compraventa_con_posesion', nombre: 'Boleto Compraventa c/Posesión', icon: '📑', categoria: 'contrato', descripcion: 'Con entrega de posesión en el acto',
    sections: [
      { title: '📋 Encabezado y Partes', fields: [
        { id: 'fecha_ciudad', label: 'Ciudad', placeholder: 'Ej: San Isidro' },
        { id: 'fecha_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año', placeholder: 'Ej: 2026' },
        { id: 'vendedor_nombre', label: 'Vendedor - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'vendedor_cuit', label: 'Vendedor - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'vendedor_estado_civil', label: 'Vendedor - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'vendedor_domicilio', label: 'Vendedor - Domicilio', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'vendedor_2_nombre', label: 'Vendedor 2 - Nombre (opcional)', placeholder: 'Nombre completo', full: true },
        { id: 'comprador_nombre', label: 'Comprador - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'comprador_cuit', label: 'Comprador - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'comprador_estado_civil', label: 'Comprador - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'comprador_domicilio', label: 'Comprador - Domicilio', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_ubicacion', label: 'Ubicación <span class="req">*</span>', placeholder: 'Ej: Ciudad Autónoma de Buenos Aires', full: true },
        { id: 'inmueble_entre_calles', label: 'Entre calles', placeholder: 'Calle 1 y Calle 2' },
        { id: 'inmueble_uf', label: 'Unidad Funcional Nº', placeholder: 'Ej: 5' },
        { id: 'inmueble_circ', label: 'Circunscripción', placeholder: 'Ej: 12' },
        { id: 'inmueble_seccion', label: 'Sección', placeholder: 'Ej: 3' },
        { id: 'inmueble_frac', label: 'Fracción', placeholder: 'Ej: I' },
        { id: 'inmueble_parcela', label: 'Parcela', placeholder: 'Ej: 12A' },
        { id: 'inmueble_subparcela', label: 'Subparcela', placeholder: 'Ej: a' },
        { id: 'inmueble_matricula', label: 'Matrícula', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '💰 Precio y Forma de Pago', fields: [
        { id: 'precio_letras', label: 'Precio total en letras <span class="req">*</span>', placeholder: 'Ej: Doscientos mil dólares', full: true },
        { id: 'precio_num', label: 'Precio total en números (U$S)', placeholder: 'Ej: 200.000' },
        { id: 'senal_letras', label: 'Seña en letras <span class="req">*</span>', placeholder: 'Ej: Diez mil dólares', full: true },
        { id: 'senal_num', label: 'Seña en números (U$S)', placeholder: 'Ej: 10.000' },
        { id: 'saldo_letras', label: 'Saldo en letras <span class="req">*</span>', placeholder: 'Ej: Ciento noventa mil dólares', full: true },
        { id: 'saldo_num', label: 'Saldo en números (U$S)', placeholder: 'Ej: 190.000' },
        { id: 'fecha_tope_dia', label: 'Fecha tope - día', placeholder: 'Ej: 30' },
        { id: 'fecha_tope_mes', label: 'Fecha tope - mes', placeholder: 'Ej: Junio' },
        { id: 'fecha_tope_anio', label: 'Fecha tope - año', placeholder: 'Ej: 2026' },
      ]},
      { title: '✍️ Escribanía', fields: [
        { id: 'escribano_nombre', label: 'Escribano interviniente <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'escribano_domicilio', label: 'Domicilio del escribano', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📜 Títulos e Inhibiciones', fields: [
        { id: 'ciudad_rpi', label: 'Ciudad del Registro Propiedad Inmueble', placeholder: 'Ej: San Isidro' },
        { id: 'informe_dominio_fecha', label: 'Fecha informe de dominio', type: 'date' },
        { id: 'informe_dominio_numero', label: 'Nº informe de dominio', placeholder: 'Ej: 12345' },
        { id: 'anotaciones_personales_fecha', label: 'Fecha anotaciones personales', type: 'date' },
        { id: 'anotaciones_personales_numeros', label: 'Números anotaciones personales', placeholder: 'Ej: 123456' },
      ]},
      { title: '📬 Domicilios constituidos', fields: [
        { id: 'vendedor_domicilio_constitucion', label: 'Domicilio constituido del vendedor <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
      ]},
    ],
    clausulas_default: ['bcp_encabezado','bcp_primera_inmueble','bcp_segunda_precio','bcp_tercera_posesion','bcp_cuarta_titulos','bcp_quinta_entrega','bcp_sexta_incumplimiento','bcp_septima_titularidad','bcp_octava_escribania','bcp_novena_fallecimiento','bcp_decima_domicilios','bcp_decimaprimera_documentos','bcp_decimasegunda_llaves','bcp_cierre']
  },
  // ════════════════════════════════════════════════════════════════
  // CESIONES (2 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'cesion_boleto_compraventa', nombre: 'Cesión de Boleto', icon: '🔄', categoria: 'gestion', descripcion: 'Cesión de derechos y obligaciones de boleto de compraventa',
    sections: [
      { title: '📋 Fecha y Lugar de Firma', fields: [
        { id: 'fecha_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año', placeholder: 'Ej: 26' },
        { id: 'lugar', label: 'Lugar de firma', placeholder: 'Ej: San Isidro' },
      ]},
      { title: '👤 Cedente', fields: [
        { id: 'cedente_nombre', label: 'Nombre del cedente <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'cedente_dni', label: 'CUIT/DNI del cedente', placeholder: '00.000.000' },
        { id: 'cedente_estado_civil', label: 'Estado civil del cedente', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'cedente_domicilio', label: 'Domicilio del cedente', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '👤 Cesionario', fields: [
        { id: 'cesionario_nombre', label: 'Nombre del cesionario <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'cesionario_dni', label: 'CUIT/DNI del cesionario', placeholder: '00.000.000' },
        { id: 'cesionario_estado_civil', label: 'Estado civil del cesionario', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'cesionario_domicilio', label: 'Domicilio del cesionario', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📄 Boleto de Compraventa Original', fields: [
        { id: 'boleto_fecha_dia', label: 'Día del boleto original', placeholder: 'Ej: 10' },
        { id: 'boleto_fecha_mes', label: 'Mes del boleto original', placeholder: 'Ej: Marzo' },
        { id: 'boleto_fecha_anio', label: 'Año del boleto original', placeholder: 'Ej: 2025' },
        { id: 'vendedor_nombre', label: 'Vendedor original (nombre)', placeholder: 'Nombre completo', full: true },
        { id: 'vendedor_dni', label: 'DNI del vendedor original', placeholder: '00.000.000' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_ubicacion', label: 'Dirección del inmueble <span class="req">*</span>', placeholder: 'Calle, número, localidad', full: true },
        { id: 'inmueble_partido', label: 'Partido', placeholder: 'Ej: San Isidro' },
        { id: 'inmueble_uf', label: 'Unidad Funcional Nº', placeholder: 'Ej: 5' },
        { id: 'inmueble_circ', label: 'Circunscripción', placeholder: 'Ej: 12' },
        { id: 'inmueble_seccion', label: 'Sección', placeholder: 'Ej: 3' },
        { id: 'inmueble_manzana', label: 'Manzana', placeholder: 'Ej: 45' },
        { id: 'inmueble_parcela', label: 'Parcela', placeholder: 'Ej: 12A' },
        { id: 'inmueble_matricula', label: 'Matrícula', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '💰 Precio de la Cesión', fields: [
        { id: 'precio_total_letras', label: 'Precio total en letras <span class="req">*</span>', placeholder: 'Ej: Cien mil dólares', full: true },
        { id: 'precio_total_numero', label: 'Precio total en números (U$S)', placeholder: 'Ej: 100.000' },
        { id: 'precio_inicial_letras', label: 'Pago inicial en letras', placeholder: 'Ej: Veinte mil dólares', full: true },
        { id: 'precio_inicial_numero', label: 'Pago inicial en números (U$S)', placeholder: 'Ej: 20.000' },
        { id: 'precio_saldo_letras', label: 'Saldo en letras', placeholder: 'Ej: Ochenta mil dólares', full: true },
        { id: 'precio_saldo_numero', label: 'Saldo en números (U$S)', placeholder: 'Ej: 80.000' },
      ]},
      { title: '✍️ Escribanía', fields: [
        { id: 'escribania_nombre', label: 'Nombre de la escribanía', placeholder: 'Nombre completo', full: true },
        { id: 'escribania_domicilio', label: 'Domicilio de la escribanía', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'escribania_partido', label: 'Partido de la escribanía', placeholder: 'Ej: San Isidro' },
        { id: 'escribania_registro', label: 'Número de registro', placeholder: 'Ej: 123' },
        { id: 'escribania_folio', label: 'Folio', placeholder: 'Ej: 456' },
      ]},
      { title: '⏱️ Plazos', fields: [
        { id: 'plazo_notificacion_dias', label: 'Anticipación de notificación (días)', placeholder: 'Ej: 10' },
        { id: 'plazo_escrituracion_dias', label: 'Plazo para escriturar (días)', placeholder: 'Ej: 60' },
        { id: 'inmueble_uso', label: 'Destino / uso del inmueble', placeholder: 'Ej: Vivienda', full: true },
        { id: 'domicilio_cedente', label: 'Domicilio contractual del cedente', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'domicilio_cesionario', label: 'Domicilio contractual del cesionario', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'boleto_firma_dia', label: 'Día del boleto firmado adjunto', placeholder: 'Ej: 10' },
        { id: 'boleto_firma_mes', label: 'Mes del boleto firmado adjunto', placeholder: 'Ej: Marzo' },
        { id: 'boleto_firma_anio', label: 'Año del boleto firmado adjunto', placeholder: 'Ej: 25' },
      ]},
    ],
    clausulas_default: ['cbc_primera_objeto','cbc_segunda_precio','cbc_tercera_reglamento','cbc_cuarta_garantias','cbc_quinta_escrituracion','cbc_sexta_plazos','cbc_septima_mora','cbc_octava_transferencia','cbc_novena_destino','cbc_decima_impuestos','cbc_decimoprimera_domicilios','cbc_decimosegunda_jurisdiccion','cbc_decimotercera_ejemplares','cbc_decimocuarta_fecha']
  },
  {
    id: 'cesion_contrato_locacion', nombre: 'Cesión de Locación', icon: '📝', categoria: 'gestion', descripcion: 'Cesión de contrato de locación por compraventa del inmueble',
    sections: [
      { title: '📋 Fecha y Lugar de Firma', fields: [
        { id: 'lugar_firma', label: 'Lugar de firma', placeholder: 'Ej: San Isidro' },
        { id: 'fecha_firma_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_firma_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_firma_anio', label: 'Año', placeholder: 'Ej: 26' },
      ]},
      { title: '👤 Cedentes', fields: [
        { id: 'cedente1_nombre', label: 'Cedente 1 - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'cedente1_dni', label: 'Cedente 1 - DNI', placeholder: '00.000.000' },
        { id: 'cedente2_nombre', label: 'Cedente 2 - Nombre (opcional)', placeholder: 'Nombre completo', full: true },
        { id: 'cedente2_dni', label: 'Cedente 2 - DNI', placeholder: '00.000.000' },
        { id: 'cedente_domicilio', label: 'Domicilio de los cedentes', placeholder: 'Calle, número', full: true },
        { id: 'cedente_localidad', label: 'Localidad de los cedentes', placeholder: 'Ej: Olivos' },
        { id: 'cedente_partido', label: 'Partido de los cedentes', placeholder: 'Ej: Vicente López' },
      ]},
      { title: '👤 Cesionarios', fields: [
        { id: 'cesionario1_nombre', label: 'Cesionario 1 - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'cesionario1_dni', label: 'Cesionario 1 - DNI', placeholder: '00.000.000' },
        { id: 'cesionario2_nombre', label: 'Cesionario 2 - Nombre (cónyuge, opcional)', placeholder: 'Nombre completo', full: true },
        { id: 'cesionario2_dni', label: 'Cesionario 2 - DNI', placeholder: '00.000.000' },
        { id: 'cesionario_domicilio', label: 'Domicilio de los cesionarios', placeholder: 'Calle, número', full: true },
        { id: 'cesionario_ciudad', label: 'Ciudad de los cesionarios', placeholder: 'Ej: CABA' },
      ]},
      { title: '📄 Contrato de Locación Original', fields: [
        { id: 'locacion_fecha_dia', label: 'Día del contrato original', placeholder: 'Ej: 1' },
        { id: 'locacion_fecha_mes', label: 'Mes del contrato original', placeholder: 'Ej: Abril' },
        { id: 'locacion_fecha_anio', label: 'Año del contrato original', placeholder: 'Ej: 2024' },
        { id: 'inmueble_calle', label: 'Calle del inmueble locado', placeholder: 'Nombre de la calle', full: true },
        { id: 'inmueble_piso', label: 'Piso', placeholder: 'Ej: 3°' },
        { id: 'inmueble_depto', label: 'Departamento', placeholder: 'Ej: B' },
        { id: 'inmueble_ciudad', label: 'Ciudad del inmueble', placeholder: 'Ej: CABA' },
        { id: 'locatario_nombre', label: 'Nombre del locatario', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_dni', label: 'DNI del locatario', placeholder: '00.000.000' },
        { id: 'fiador_nombre', label: 'Nombre del fiador', placeholder: 'Nombre completo', full: true },
      ]},
      { title: '📅 Vigencia de la Locación', fields: [
        { id: 'locacion_vigencia_desde_dia', label: 'Vigencia desde - día', placeholder: 'Ej: 1' },
        { id: 'locacion_vigencia_desde_mes', label: 'Vigencia desde - mes', placeholder: 'Ej: Mayo' },
        { id: 'locacion_vigencia_hasta_dia', label: 'Vigencia hasta - día', placeholder: 'Ej: 30' },
        { id: 'locacion_vigencia_hasta_mes', label: 'Vigencia hasta - mes', placeholder: 'Ej: Abril' },
        { id: 'locacion_vigencia_hasta_anio', label: 'Vigencia hasta - año', placeholder: 'Ej: 26' },
      ]},
      { title: '🏛️ Escritura de Compraventa', fields: [
        { id: 'escritura_fecha_dia', label: 'Día de la escritura', placeholder: 'Ej: 15' },
        { id: 'escritura_fecha_mes', label: 'Mes de la escritura', placeholder: 'Ej: Enero' },
        { id: 'escritura_fecha_anio', label: 'Año de la escritura', placeholder: 'Ej: 26' },
      ]},
    ],
    clausulas_default: ['ccl_antecedentes_locacion','ccl_antecedentes_compraventa','ccl_primera_cesion','ccl_primera_subrogacion','ccl_segunda_aceptacion','ccl_tercera_precio','ccl_cuarta_notificacion']
  },
  // ════════════════════════════════════════════════════════════════
  // CONVENIOS (1 template)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'convenio_desocupacion', nombre: 'Convenio de Desocupación', icon: '📄', categoria: 'gestion', descripcion: 'Desocupación voluntaria de inmueble locado',
    sections: [
      { title: '📋 Fecha y Lugar de Firma', fields: [
        { id: 'lugar_firma', label: 'Lugar de firma', placeholder: 'Ej: CABA' },
        { id: 'fecha_firma_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_firma_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_firma_anio', label: 'Año', placeholder: 'Ej: 26' },
      ]},
      { title: '👤 Locador', fields: [
        { id: 'locador_nombre', label: 'Nombre del locador <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'locador_dni', label: 'DNI del locador', placeholder: '00.000.000' },
        { id: 'locador_domicilio', label: 'Domicilio del locador', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locador_email', label: 'Email del locador', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '👤 Locatario', fields: [
        { id: 'locatario_nombre', label: 'Nombre del locatario <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'locatario_dni', label: 'DNI del locatario', placeholder: '00.000.000' },
        { id: 'locatario_domicilio', label: 'Domicilio del locatario', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email del locatario', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_ubicacion', label: 'Ubicación del inmueble <span class="req">*</span>', placeholder: 'Dirección completa', full: true },
      ]},
      { title: '📄 Contrato de Locación', fields: [
        { id: 'contrato_fecha_dia', label: 'Día del contrato', placeholder: 'Ej: 1' },
        { id: 'contrato_fecha_mes', label: 'Mes del contrato', placeholder: 'Ej: Abril' },
        { id: 'contrato_fecha_anio', label: 'Año del contrato', placeholder: 'Ej: 2024' },
        { id: 'locacion_fin_dia', label: 'Día de finalización del vínculo', placeholder: 'Ej: 30' },
        { id: 'locacion_fin_mes', label: 'Mes de finalización del vínculo', placeholder: 'Ej: Abril' },
      ]},
      { title: '📅 Desocupación', fields: [
        { id: 'desocupacion_fecha_dia', label: 'Día de entrega', placeholder: '15' },
        { id: 'desocupacion_fecha_mes', label: 'Mes de desocupación', placeholder: 'Ej: Mayo' },
      ]},
    ],
    clausulas_default: ['cvd_primera_compromiso','cvd_segunda_sentencia','cvd_tercera_penalidades','cvd_cuarta_incumplimiento','cvd_quinta_homologacion']
  },
  // ════════════════════════════════════════════════════════════════
  // CONTRATOS VARIOS (2 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'contrato_comodato', nombre: 'Comodato', icon: '📄', categoria: 'contrato', descripcion: 'Comodato gratuito de inmueble por enajenación',
    sections: [
      { title: '📋 Fecha de Firma', fields: [
        { id: 'fecha_firma_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_firma_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_firma_anio', label: 'Año', placeholder: 'Ej: 2026' },
      ]},
      { title: '👤 Comodatario (ex titular)', fields: [
        { id: 'comodatario_nombre', label: 'Nombre del comodatario <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'comodatario_dni', label: 'DNI del comodatario', placeholder: '00.000.000' },
        { id: 'comodatario_domicilio', label: 'Domicilio del comodatario', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '👤 Comodante (nuevo titular)', fields: [
        { id: 'comodante_nombre', label: 'Nombre del comodante <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'comodante_dni', label: 'DNI del comodante', placeholder: '00.000.000' },
        { id: 'comodante_domicilio', label: 'Domicilio del comodante', placeholder: 'Calle, número, ciudad', full: true },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_uf', label: 'Unidad Funcional Nº', placeholder: 'Ej: 5' },
        { id: 'inmueble_piso', label: 'Piso', placeholder: 'Ej: 3°' },
        { id: 'inmueble_calle', label: 'Calle', placeholder: 'Nombre de la calle' },
        { id: 'inmueble_numero', label: 'Número', placeholder: 'Ej: 1234' },
        { id: 'inmueble_entre1', label: 'Entre calle 1', placeholder: 'Ej: Calle A' },
        { id: 'inmueble_entre2', label: 'Entre calle 2', placeholder: 'Ej: Calle B' },
        { id: 'inmueble_circ', label: 'Circunscripción', placeholder: 'Ej: 12' },
        { id: 'inmueble_seccion', label: 'Sección', placeholder: 'Ej: 3' },
        { id: 'inmueble_manzana', label: 'Manzana', placeholder: 'Ej: 45' },
        { id: 'inmueble_parcela', label: 'Parcela', placeholder: 'Ej: 12A' },
        { id: 'inmueble_partida', label: 'Partida inmobiliaria', placeholder: 'Ej: 123456' },
      ]},
      { title: '📜 Escritura de Enajenación', fields: [
        { id: 'escritura_numero', label: 'Número de escritura', placeholder: 'Ej: 123' },
        { id: 'escribano_nombre', label: 'Nombre del escribano', placeholder: 'Nombre completo', full: true },
        { id: 'escritura_folio', label: 'Folio', placeholder: 'Ej: 456' },
        { id: 'registro_notarial', label: 'Registro notarial', placeholder: 'Ej: 789' },
      ]},
      { title: '⏱️ Plazo', fields: [
        { id: 'plazo_vencimiento_dia', label: 'Día de vencimiento', placeholder: '15' },
        { id: 'plazo_vencimiento_mes', label: 'Mes de vencimiento', placeholder: 'Ej: Julio' },
        { id: 'plazo_vencimiento_anio', label: 'Año de vencimiento', placeholder: 'Ej: 2026' },
        { id: 'multa_diaria_letras', label: 'Multa diaria en letras (USD)', placeholder: 'Ej: Cien dólares', full: true },
        { id: 'multa_diaria_numero', label: 'Multa diaria en números (USD)', placeholder: 'Ej: 100' },
      ]},
    ],
    clausulas_default: ['cmd_primero_objeto','cmd_segundo_plazo','cmd_tercero_acceso','cmd_cuarto_sentencia','cmd_quinto_responsabilidad','cmd_sexto_gastos','cmd_septimo_jurisdiccion']
  },
  {
    id: 'contrato_mutuo', nombre: 'Contrato de Mutuo', icon: '💰', categoria: 'contrato', descripcion: 'Préstamo con garantía de pagarés en USD',
    sections: [
      { title: '📋 Fecha de Firma', fields: [
        { id: 'fecha_firma_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_firma_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_firma_anio', label: 'Año', placeholder: 'Ej: 2026' },
      ]},
      { title: '👤 Acreedor', fields: [
        { id: 'acreedor_nombre', label: 'Nombre del acreedor <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'acreedor_dni', label: 'DNI del acreedor', placeholder: '00.000.000' },
        { id: 'acreedor_domicilio_calle', label: 'Domicilio - calle', placeholder: 'Nombre de la calle', full: true },
        { id: 'acreedor_domicilio_piso', label: 'Piso', placeholder: 'Ej: 3°' },
        { id: 'acreedor_domicilio_depto', label: 'Depto', placeholder: 'Ej: A' },
      ]},
      { title: '👤 Deudor', fields: [
        { id: 'deudor_nombre', label: 'Nombre del deudor (presidente) <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'deudor_dni', label: 'DNI del deudor', placeholder: '00.000.000' },
        { id: 'deudor_sociedad_nombre', label: 'Nombre de la sociedad', placeholder: 'Razón social', full: true },
        { id: 'deudor_sociedad_cuit', label: 'CUIT de la sociedad', placeholder: '00-00000000-0' },
        { id: 'deudor_domicilio_calle', label: 'Domicilio de la sociedad - calle', placeholder: 'Nombre de la calle', full: true },
        { id: 'deudor_domicilio_piso', label: 'Piso', placeholder: 'Ej: 5°' },
        { id: 'deudor2_nombre', label: 'Deudor 2 - Nombre (opcional)', placeholder: 'Nombre completo', full: true },
        { id: 'deudor2_dni', label: 'Deudor 2 - DNI', placeholder: '00.000.000' },
      ]},
      { title: '💰 Préstamo', fields: [
        { id: 'monto_prestamo_letras', label: 'Monto del préstamo en letras (USD) <span class="req">*</span>', placeholder: 'Ej: Cien mil dólares', full: true },
        { id: 'monto_prestamo_numero', label: 'Monto del préstamo en números (USD)', placeholder: 'Ej: 100.000' },
        { id: 'cuotas_cantidad', label: 'Cantidad de cuotas', placeholder: '36' },
        { id: 'cuota_monto_numero', label: 'Monto de cada cuota (USD)', placeholder: 'Ej: 3.500' },
        { id: 'cuota_vencimiento_dia', label: 'Día de vencimiento de cuotas', placeholder: '5' },
        { id: 'cuota_vencimiento_mes', label: 'Mes de vencimiento primera cuota', placeholder: 'Ej: Febrero' },
        { id: 'cuota_vencimiento_anio', label: 'Año de vencimiento primera cuota', placeholder: 'Ej: 2026' },
        { id: 'lugar_pago', label: 'Lugar de pago', placeholder: 'Ej: CABA', full: true },
        { id: 'interes_punitorio', label: 'Interés punitorio mensual', placeholder: '1%' },
      ]},
    ],
    clausulas_default: ['mtu_primera_prestamo','mtu_segunda_lugar_pago','mtu_tercera_mora','mtu_cuarta_moneda','mtu_quinta_ley25345','mtu_sexta_jurisdiccion']
  },
  // ════════════════════════════════════════════════════════════════
  // ACEPTACION / CONTRAOFERTA / RECHAZO (2 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'aceptacion_compraventa', nombre: 'Aceptación / Contraoferta', icon: '✅', categoria: 'gestion', descripcion: 'Compraventa',
    sections: [
      { title: '📋 Encabezado', fields: [
        { id: 'fecha_ciudad', label: 'Ciudad', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año', placeholder: 'Ej: 2026' },
        { id: 'vendedor_nombre', label: 'Nombre del vendedor <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'vendedor_dni', label: 'DNI del vendedor', placeholder: '00.000.000' },
        { id: 'vendedor_domicilio', label: 'Domicilio real del vendedor', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'vendedor_email', label: 'Email del vendedor', placeholder: 'email@ejemplo.com' },
        { id: 'comprador_nombre', label: 'Nombre del comprador', placeholder: 'Nombre completo', full: true },
        { id: 'reserva_fecha', label: 'Fecha de la reserva', type: 'date' },
        { id: 'comision_pct', label: 'Comisión del corredor (%)', placeholder: 'Ej: 3' },
      ]},
    ],
    clausulas_default: ['acv_aceptacion','acv_contraoferta','acv_aceptacion_contraoferta','acv_rechazo']
  },
  {
    id: 'aceptacion_locacion', nombre: 'Aceptación / Contraoferta', icon: '✅', categoria: 'gestion', descripcion: 'Locación',
    sections: [
      { title: '📋 Encabezado', fields: [
        { id: 'fecha_ciudad', label: 'Ciudad', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año', placeholder: 'Ej: 2026' },
        { id: 'locador_nombre', label: 'Nombre del locador <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'locador_dni', label: 'DNI del locador', placeholder: '00.000.000' },
        { id: 'locador_domicilio', label: 'Domicilio del locador', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_nombre', label: 'Nombre del locatario', placeholder: 'Nombre completo', full: true },
        { id: 'reserva_fecha', label: 'Fecha de la reserva', type: 'date' },
        { id: 'comision_pct', label: 'Comisión del corredor (%)', placeholder: 'Ej: 1 mes' },
      ]},
    ],
    clausulas_default: ['alc_aceptacion','alc_contraoferta','alc_aceptacion_contraoferta','alc_rechazo']
  },
  // ════════════════════════════════════════════════════════════════
  // RECIBOS Y SEÑAS (3 templates)
  // ════════════════════════════════════════════════════════════════
  {
    id: 'recibo_reserva', nombre: 'Recibo de Reserva', icon: '🧾', categoria: 'gestion', descripcion: 'Recibo por cuenta y orden del corredor',
    sections: [
      { title: '📋 Datos del Recibo', fields: [
        { id: 'monto_letras', label: 'Monto en letras <span class="req">*</span>', placeholder: 'Ej: Cinco mil dólares', full: true },
        { id: 'monto_num', label: 'Monto en números', placeholder: 'Ej: USD 5.000' },
        { id: 'moneda', label: 'Moneda', type: 'select', options: ['Dólares (USD)','Pesos argentinos (ARS)'] },
        { id: 'dador_nombre', label: 'Nombre del dador (comprador/locatario)', placeholder: 'Nombre completo', full: true },
        { id: 'inmueble_dir', label: 'Inmueble sito en', placeholder: 'Dirección completa', full: true },
        { id: 'localidad', label: 'Localidad', placeholder: 'Ej: Buenos Aires' },
        { id: 'fecha_dia', label: 'Día', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año', placeholder: 'Ej: 2026' },
        { id: 'agente', label: 'Nombre del agente', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['rec_texto']
  },
  {
    id: 'sena', nombre: 'Seña de Compraventa', icon: '💵', categoria: 'compra', descripcion: 'Contrato de seña a cuenta de precio',
    sections: [
      { title: '📋 Encabezado y Partes', fields: [
        { id: 'vendedor_nombre', label: 'Vendedor - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'vendedor_dni', label: 'Vendedor - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'vendedor_ecivil', label: 'Vendedor - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'vendedor_domicilio', label: 'Vendedor - Domicilio', placeholder: 'Calle, número, localidad', full: true },
        { id: 'vendedor_localidad', label: 'Vendedor - Localidad', placeholder: 'Ej: San Isidro' },
        { id: 'vendedor_partido', label: 'Vendedor - Partido', placeholder: 'Ej: San Isidro' },
        { id: 'comprador_nombre', label: 'Comprador - Nombre <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'comprador_dni', label: 'Comprador - CUIT/DNI', placeholder: '00.000.000' },
        { id: 'comprador_ecivil', label: 'Comprador - Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'comprador_domicilio', label: 'Comprador - Domicilio', placeholder: 'Calle, número, localidad', full: true },
        { id: 'comprador_localidad', label: 'Comprador - Localidad', placeholder: 'Ej: San Isidro' },
        { id: 'comprador_partido', label: 'Comprador - Partido', placeholder: 'Ej: San Isidro' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_calle', label: 'Calle', placeholder: 'Nombre de la calle' },
        { id: 'inmueble_localidad', label: 'Localidad', placeholder: 'Ej: Olivos' },
        { id: 'inmueble_partido', label: 'Partido', placeholder: 'Ej: Vicente López' },
        { id: 'inmueble_circ', label: 'Circunscripción', placeholder: 'Ej: 12' },
        { id: 'inmueble_seccion', label: 'Sección', placeholder: 'Ej: 3' },
        { id: 'inmueble_manzana', label: 'Manzana', placeholder: 'Ej: 45' },
        { id: 'inmueble_parcela', label: 'Parcela', placeholder: 'Ej: 12A' },
        { id: 'inmueble_matricula', label: 'Matrícula', placeholder: 'Ej: FR-12-34567' },
      ]},
      { title: '💰 Condiciones Económicas', fields: [
        { id: 'precio_letras', label: 'Precio total en letras <span class="req">*</span>', placeholder: 'Ej: Doscientos mil dólares', full: true },
        { id: 'precio_num', label: 'Precio total en números (U$S)', placeholder: 'Ej: 200.000' },
        { id: 'senal_letras', label: 'Seña en letras <span class="req">*</span>', placeholder: 'Ej: Diez mil dólares', full: true },
        { id: 'senal_num', label: 'Seña en números (U$S)', placeholder: 'Ej: 10.000' },
        { id: 'saldo_letras', label: 'Saldo en letras', placeholder: 'Ej: Ciento noventa mil dólares', full: true },
        { id: 'saldo_num', label: 'Saldo en números (U$S)', placeholder: 'Ej: 190.000' },
      ]},
      { title: '✍️ Escrituración', fields: [
        { id: 'fecha_tope_dia', label: 'Fecha tope - día', placeholder: 'Ej: 30' },
        { id: 'fecha_tope_mes', label: 'Fecha tope - mes', placeholder: 'Ej: Junio' },
        { id: 'fecha_tope_anio', label: 'Fecha tope - año', placeholder: 'Ej: 2026' },
        { id: 'fecha_tope_hora', label: 'Hora', placeholder: 'Ej: 10:00' },
        { id: 'escribania_domicilio', label: 'Domicilio de la escribanía', placeholder: 'Calle, número, localidad', full: true },
        { id: 'escribano_nombre', label: 'Escribano interviniente', placeholder: 'Nombre completo', full: true },
        { id: 'escribano_partido', label: 'Partido del escribano', placeholder: 'Ej: San Isidro' },
      ]},
      { title: '📦 Incluye', fields: [
        { id: 'inmueble_incluye_1', label: 'Incluye (item 1)', placeholder: 'Ej: Cocina' },
        { id: 'inmueble_incluye_2', label: 'Incluye (item 2)', placeholder: 'Ej: Lavarropas' },
        { id: 'inmueble_incluye_3', label: 'Incluye (item 3)', placeholder: 'Ej: Aire acondicionado' },
        { id: 'inmueble_incluye_4', label: 'Incluye (item 4)', placeholder: 'Ej: Muebles' },
        { id: 'inmueble_incluye_5', label: 'Incluye (item 5)', placeholder: 'Ej: Cortinas' },
        { id: 'inmueble_telefono', label: 'Teléfono', placeholder: 'Número de línea telefónica' },
      ]},
      { title: '📜 Títulos', fields: [
        { id: 'ciudad_rpi', label: 'Ciudad del RPI', placeholder: 'Ej: San Isidro' },
        { id: 'informe_dominio_fecha_dia', label: 'Informe de dominio - día', placeholder: 'Ej: 10' },
        { id: 'informe_dominio_fecha_mes', label: 'Informe de dominio - mes', placeholder: 'Ej: Enero' },
        { id: 'informe_dominio_fecha_anio', label: 'Informe de dominio - año', placeholder: 'Ej: 2026' },
        { id: 'informe_dominio_numero', label: 'Nº informe de dominio', placeholder: 'Ej: 12345' },
        { id: 'anotaciones_fecha_dia', label: 'Anotaciones personales - día', placeholder: 'Ej: 10' },
        { id: 'anotaciones_fecha_mes', label: 'Anotaciones personales - mes', placeholder: 'Ej: Enero' },
        { id: 'anotaciones_fecha_anio', label: 'Anotaciones personales - año', placeholder: 'Ej: 2026' },
        { id: 'anotaciones_numero', label: 'Nº anotaciones personales', placeholder: 'Ej: 123456' },
      ]},
    ],
    clausulas_default: ['sen_encabezado','sen_sena','sen_escrituracion','sen_titulos','sen_entrega','sen_incumplimiento','sen_titularidad','sen_fallecimiento','sen_acceso','sen_documentos','sen_llaves','sen_jurisdiccion','sen_cierre']
  },
  {
    id: 'refuerzo_reserva', nombre: 'Refuerzo de Reserva', icon: '💵', categoria: 'compra', descripcion: 'Refuerzo de reserva de compra',
    sections: [
      { title: '📋 Datos del Refuerzo', fields: [
        { id: 'comprador_nombre', label: 'Nombre del comprador <span class="req">*</span>', placeholder: 'Nombre completo', full: true },
        { id: 'comprador_dni', label: 'DNI', placeholder: '00.000.000' },
        { id: 'comprador_cuit', label: 'CUIT', placeholder: '00-00000000-0' },
        { id: 'comprador_ecivil', label: 'Estado civil', placeholder: 'Soltero/a, Casado/a, etc.' },
        { id: 'comprador_domicilio', label: 'Domicilio', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'refuerzo_letras', label: 'Monto refuerzo en letras <span class="req">*</span>', placeholder: 'Ej: Cinco mil dólares', full: true },
        { id: 'refuerzo_num', label: 'Monto refuerzo en números (USD)', placeholder: 'Ej: 5.000' },
        { id: 'inmueble_dir', label: 'Inmueble', placeholder: 'Dirección completa', full: true },
        { id: 'reserva_fecha', label: 'Fecha de la reserva original', type: 'date' },
        { id: 'aceptacion_fecha', label: 'Fecha de aceptación por el vendedor', type: 'date' },
        { id: 'fecha_dia', label: 'Día de firma', placeholder: 'Ej: 15' },
        { id: 'fecha_mes', label: 'Mes de firma', placeholder: 'Ej: Enero' },
        { id: 'fecha_anio', label: 'Año de firma', placeholder: 'Ej: 2026' },
      ]},
    ],
    clausulas_default: ['rfr_texto']
  }
];
const CLAUSULAS_COMPLETAS = {
  // ──────────────────────────────────────────────────────────────
  // ALQUILER CABA (r_loc_caba)
  // ──────────────────────────────────────────────────────────────
  'lcab_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación (en adelante EL "PROPIETARIO"), por una parte, y de la otra, como parte inquilina, el/la Sr./Sra. {{inquilino_nombre}} {{inquilino_apellido}} de nacionalidad {{inquilino_nacionalidad}}, de estado civil {{inquilino_ecivil}} en virtud de {{inquilino_causes}} portador/a del DNI nro. {{inquilino_dni}}, CUIT nro. {{inquilino_cuit}} nacido/a el día {{inquilino_nacimiento}} en {{inquilino_lugar_nacimiento}} y domiciliado/a en {{inquilino_domicilio}} (en adelante "EL/LA INQUILINO/A"), convienen en celebrar el presente contrato de locación de inmueble para uso exclusivo de vivienda, el cual se regirá por las cláusulas y condiciones que a continuación se detallan, conforme lo establecido por la Ley 27.551 y sus modificatorias:`
  },
  'lcab_inmueble': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra matriculado/inscripto en el Registro de la Propiedad Inmueble de la Ciudad Autónoma de Buenos Aires bajo el nro. {{inmueble_matricula}} y constituye el condominio y/o propiedad de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra ubicado en {{inmueble_dir}}, Ciudad Autónoma de Buenos Aires.`
  },
  'lcab_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación se celebrará por el término de {{duracion_meses}} meses, computados a partir del día {{fecha_inicio}} hasta el día {{fecha_fin}}.`
  },
  'lcab_mensual': {
    titulo: 'CUARTA: MONTO MENSUAL DEL ALQUILER',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de precio de la locación del inmueble materia del presente contrato, la suma mensual de pesos argentinos {{monto_alquiler}} (en adelante "EL ALQUILER").`
  },
  'lcab_ajuste': {
    titulo: 'QUINTA: AJUSTE',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a abonar el alquiler pactado, computando los incrementos periódicos que resulten de aplicar el procedimiento previsto por la Ley 27.551, conforme al índice {{ajuste_indice}} o el que legalmente corresponda, cada {{periodo_ajuste}} y/o los que resulten de la aplicación de la normativa vigente al momento del ajuste.`
  },
  'lcab_garantia': {
    titulo: 'SEXTA: GARANTÍA',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, presenta en garantía del pago del alquiler y de las obligaciones asumidas en virtud del presente contrato de locación, un/a {{garantia_tipo}} por un monto de pesos argentinos {{garantia_monto}}. En caso de que la garantía ofrecida por EL/LA INQUILINO/A no alcancen a cubrir los importes adeudados, EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en su carácter de propietario/a del inmueble objeta del presente contrato, se reserva el derecho de solicitar la ampliación de la misma, debiendo EL/LA INQUILINO/A aportar la documentación respaldatoria a su cargo.`
  },
  'lcab_deposito': {
    titulo: 'SÉPTIMA: DEPÓSITO EN GARANTÍA',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, depositará en la cuenta de depósitos judiciales y extrajudiciales del Banco de la Nación Argentina, o en la cuenta de depósitos judiciales y extrajudiciales del Banco Provincia de Buenos Aires, o en la cuenta de depósitos judiciales y extrajudiciales de cualquier otro banco autorizado por el Banco Central de la República Argentina, en concepto de depósito en garantía del presente contrato, la suma de pesos argentinos {{anticipo_deposito}} equivalente a {{anticipo_meses}} mes/es de alquiler, dentro de los primeros {{anticipo_dias}} días de la firma del mismo.`
  },
  'lcab_honorarios': {
    titulo: 'OCTAVA: HONORARIOS',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a de {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de honorarios la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará en la oportunidad prevista en la cláusula décima segunda del presente.`
  },
  'lcab_gastos': {
    titulo: 'NOVENA: GASTOS',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a abonar todos los gastos que graven el inmueble objeto del presente contrato que se generen durante la vigencia del mismo, como ser: impuestos, tasas, contribuciones, expensas y todo otro gasto corriente, con excepción de las expensas extraordinarias que no estuvieren previstas en el reglamento de copropiedad, las cuales serán a cargo de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}.`
  },
  'lcab_destino': {
    titulo: 'DÉCIMA: DESTINO',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, declara que el inmueble objeto del presente contrato será destinado exclusivamente a vivienda. En caso de que EL/LA INQUILINO/A incumpliera con la obligación precedentemente pactada, EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} en su carácter de propietario/a del inmueble objeta del presente contrato,将以 la facultad de rescindir el mismo en los términos previstos por los artículos 1200 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'lcab_subarriendo': {
    titulo: 'DÉCIMO PRIMERA: SUBARRIENDO',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, no podrá ceder ni subarrendar total o parcialmente el inmueble objeto del presente contrato sin el consentimiento previo y por escrito de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}.`
  },
  'lcab_entrega_devolucion': {
    titulo: 'DÉCIMO SEGUNDA: ENTREGA Y DEVOLUCIÓN DEL INMUEBLE',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, declara que el inmueble objeto del presente contrato le fue entregado por EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} en su carácter de propietario/a del inmueble objeta del presente contrato, en perfecto estado de conservación y funcionamiento, conforme al inventario que obra en el Anexo I que forma parte integrante del presente contrato.`
  },
  'lcab_jurisdiccion': {
    titulo: 'DÉCIMO TERCERA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'lcab_agente': {
    titulo: 'DÉCIMO CUARTA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y/o apoderado/a de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento de conformidad a lo dispuesto por los artículos 374, 377, 381 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442.`
  },
  'lcab_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // ──────────────────────────────────────────────────────────────
  // ALQUILER PBA (r_loc_pba)
  // ──────────────────────────────────────────────────────────────
  'lpb_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación (en adelante EL "PROPIETARIO"), por una parte, y de la otra, como parte inquilina, el/la Sr./Sra. {{inquilino_nombre}} {{inquilino_apellido}} de nacionalidad {{inquilino_nacionalidad}}, de estado civil {{inquilino_ecivil}} en virtud de {{inquilino_causes}} portador/a del DNI nro. {{inquilino_dni}}, CUIT nro. {{inquilino_cuit}} nacido/a el día {{inquilino_nacimiento}} en {{inquilino_lugar_nacimiento}} y domiciliado/a en {{inquilino_domicilio}} (en adelante "EL/LA INQUILINO/A"), convienen en celebrar el presente contrato de locación de inmueble para uso exclusivo de vivienda, el cual se regirá por las cláusulas y condiciones que a continuación se detallan, conforme lo establecido por la Ley 27.551 y sus modificatorias:`
  },
  'lpb_inmueble': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra inscripto en el Registro de la Propiedad Inmueble de la Provincia de Buenos Aires bajo el nro. {{inmueble_matricula}}.`
  },
  'lpb_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación se celebrará por el término de {{duracion_meses}} meses, computados a partir del día {{fecha_inicio}} hasta el día {{fecha_fin}}.`
  },
  'lpb_mensual': {
    titulo: 'CUARTA: MONTO MENSUAL DEL ALQUILER',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de precio de la locación del inmueble materia del presente contrato, la suma mensual de pesos argentinos {{monto_alquiler}} (en adelante "EL ALQUILER").`
  },
  'lpb_ajuste': {
    titulo: 'QUINTA: AJUSTE',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a abonar el alquiler pactado, computando los incrementos periódicos que resulten de aplicar el procedimiento previsto por la Ley 27.551, conforme al índice {{ajuste_indice}} o el que legalmente corresponda, cada {{periodo_ajuste}} y/o los que resulten de la aplicación de la normativa vigente al momento del ajuste.`
  },
  'lpb_garantia': {
    titulo: 'SEXTA: GARANTÍA',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, presenta en garantía del pago del alquiler y de las obligaciones asumidas en virtud del presente contrato de locación, un/a {{garantia_tipo}} por un monto de pesos argentinos {{garantia_monto}}. En caso de que la garantía ofrecida por EL/LA INQUILINO/A no alcancen a cubrir los importes adeudados, EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en su carácter de propietario/a del inmueble objeta del presente contrato, se reserva el derecho de solicitar la ampliación de la misma, debiendo EL/LA INQUILINO/A aportar la documentación respaldatoria a su cargo.`
  },
  'lpb_deposito': {
    titulo: 'SÉPTIMA: DEPÓSITO EN GARANTÍA',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, depositará en la cuenta de depósitos judiciales y extrajudiciales del Banco de la Nación Argentina, o en la cuenta de depósitos judiciales y extrajudiciales del Banco Provincia de Buenos Aires, o en la cuenta de depósitos judiciales y extrajudiciales de cualquier otro banco autorizado por el Banco Central de la República Argentina, en concepto de depósito en garantía del presente contrato, la suma de pesos argentinos {{anticipo_deposito}} equivalente a {{anticipo_meses}} mes/es de alquiler, dentro de los primeros {{anticipo_dias}} días de la firma del mismo.`
  },
  'lpb_honorarios': {
    titulo: 'OCTAVA: HONORARIOS',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a de {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de honorarios la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará en la oportunidad prevista en la cláusula décima segunda del presente.`
  },
  'lpb_gastos': {
    titulo: 'NOVENA: GASTOS',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a abonar todos los gastos que graven el inmueble objeto del presente contrato que se generen durante la vigencia del mismo, como ser: impuestos, tasas, contribuciones, expensas y todo otro gasto corriente, con excepción de las expensas extraordinarias que no estuvieren previstas en el reglamento de copropiedad, las cuales serán a cargo de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}.`
  },
  'lpb_destino': {
    titulo: 'DÉCIMA: DESTINO',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, declara que el inmueble objeto del presente contrato será destinado exclusivamente a vivienda. En caso de que EL/LA INQUILINO/A incumpliera con la obligación precedentemente pactada, EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} en su carácter de propietario/a del inmueble objeta del presente contrato, tendrá la facultad de rescindir el mismo en los términos previstos por los artículos 1200 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'lpb_subarriendo': {
    titulo: 'DÉCIMO PRIMERA: SUBARRIENDO',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, no podrá ceder ni subarrendar total o parcialmente el inmueble objeto del presente contrato sin el consentimiento previo y por escrito de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}.`
  },
  'lpb_entrega_devolucion': {
    titulo: 'DÉCIMO SEGUNDA: ENTREGA Y DEVOLUCIÓN DEL INMUEBLE',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, declara que el inmueble objeto del presente contrato le fue entregado por EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} en su carácter de propietario/a del inmueble objeta del presente contrato, en perfecto estado de conservación y funcionamiento, conforme al inventario que obra en el Anexo I que forma parte integrante del presente contrato.`
  },
  'lpb_jurisdiccion': {
    titulo: 'DÉCIMO TERCERA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Provincia de Buenos Aires, Republica Argentina.`
  },
  'lpb_agente': {
    titulo: 'DÉCIMO CUARTA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y/o apoderado/a de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento de conformidad a lo dispuesto por los artículos 374, 377, 381 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442.`
  },
  'lpb_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // ──────────────────────────────────────────────────────────────
  // ALQUILER COMERCIAL (r_loc_comercial)
  // ──────────────────────────────────────────────────────────────
  'lcom_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación (en adelante EL "PROPIETARIO"), por una parte, y de la otra, como parte inquilina, el/la Sr./Sra. {{inquilino_nombre}} {{inquilino_apellido}} de nacionalidad {{inquilino_nacionalidad}}, de estado civil {{inquilino_ecivil}} en virtud de {{inquilino_causes}} portador/a del DNI nro. {{inquilino_dni}}, CUIT nro. {{inquilino_cuit}} nacido/a el día {{inquilino_nacimiento}} en {{inquilino_lugar_nacimiento}} y domiciliado/a en {{inquilino_domicilio}} (en adelante "EL/LA INQUILINO/A"), convienen en celebrar el presente contrato de locación de inmueble para uso exclusivo de comercio, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'lcom_inmueble': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra matriculado/inscripto en el Registro de la Propiedad Inmueble bajo el nro. {{inmueble_matricula}} y constituye el condominio y/o propiedad de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra ubicado en {{inmueble_dir}}.`
  },
  'lcom_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación se celebrará por el término de {{duracion_meses}} meses, computados a partir del día {{fecha_inicio}} hasta el día {{fecha_fin}}.`
  },
  'lcom_mensual': {
    titulo: 'CUARTA: MONTO MENSUAL DEL ALQUILER',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de precio de la locación del inmueble materia del presente contrato, la suma mensual de pesos argentinos {{monto_alquiler}} (en adelante "EL ALQUILER").`
  },
  'lcom_ajuste': {
    titulo: 'QUINTA: AJUSTE',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a abonar el alquiler pactado, computando los incrementos periódicos que resulten de aplicar el procedimiento previsto por la Ley 27.551, conforme al índice {{ajuste_indice}} o el que legalmente corresponda, cada {{periodo_ajuste}} y/o los que resulten de la aplicación de la normativa vigente al momento del ajuste.`
  },
  'lcom_garantia': {
    titulo: 'SEXTA: GARANTÍA',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, presenta en garantía del pago del alquiler y de las obligaciones asumidas en virtud del presente contrato de locación, un/a {{garantia_tipo}} por un monto de pesos argentinos {{garantia_monto}}. En caso de que la garantía ofrecida por EL/LA INQUILINO/A no alcancen a cubrir los importes adeudados, EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en su carácter de propietario/a del inmueble objeta del presente contrato, se reserva el derecho de solicitar la ampliación de la misma, debiendo EL/LA INQUILINO/A aportar la documentación respaldatoria a su cargo.`
  },
  'lcom_honorarios': {
    titulo: 'SÉPTIMA: HONORARIOS',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a de {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de honorarios la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará en la oportunidad prevista en la cláusula décima segunda del presente.`
  },
  'lcom_gastos': {
    titulo: 'OCTAVA: GASTOS',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, se obliga a abonar todos los gastos que graven el inmueble objeto del presente contrato que se generen durante la vigencia del mismo, como ser: impuestos, tasas, contribuciones, expensas y todo otro gasto corriente, con excepción de las expensas extraordinarias que no estuvieren previstas en el reglamento de copropiedad, las cuales serán a cargo de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}.`
  },
  'lcom_destino': {
    titulo: 'NOVENA: DESTINO',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, declara que el inmueble objeto del presente contrato será destinado exclusivamente a {{inmueble_destino}}. En caso de que EL/LA INQUILINO/A incumpliera con la obligación precedentemente pactada, EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} en su carácter de propietario/a del inmueble objeta del presente contrato, tendrá la facultad de rescindir el mismo en los términos previstos por los artículos 1200 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'lcom_subarriendo': {
    titulo: 'DÉCIMA: SUBARRIENDO',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, no podrá ceder ni subarrendar total o parcialmente el inmueble objeto del presente contrato sin el consentimiento previo y por escrito de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}.`
  },
  'lcom_entrega_devolucion': {
    titulo: 'DÉCIMO PRIMERA: ENTREGA Y DEVOLUCIÓN DEL INMUEBLE',
    texto: `Que EL/LA INQUILINO/A en su carácter de tal, declara que el inmueble objeto del presente contrato le fue entregado por EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} en su carácter de propietario/a del inmueble objeta del presente contrato, en perfecto estado de conservación y funcionamiento, conforme al inventario que obra en el Anexo I que forma parte integrante del presente contrato.`
  },
  'lcom_jurisdiccion': {
    titulo: 'DÉCIMO SEGUNDA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'lcom_agente': {
    titulo: 'DÉCIMO TERCERA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y/o apoderado/a de EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}} y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento de conformidad a lo dispuesto por los artículos 374, 377, 381 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442.`
  },
  'lcom_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // ──────────────────────────────────────────────────────────────
  // TEMPORARIO (r_temp)
  // ──────────────────────────────────────────────────────────────
  'rtmp_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler temporal que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación (en adelante EL "PROPIETARIO"), por una parte, y de la otra, como parte huésped, el/la Sr./Sra. {{inquilino_nombre}} {{inquilino_apellido}} de nacionalidad {{inquilino_nacionalidad}}, de estado civil {{inquilino_ecivil}} en virtud de {{inquilino_causes}} portador/a del DNI nro. {{inquilino_dni}} (en adelante "EL/LA HUÉSPED"), convienen en celebrar el presente contrato de locación temporaria de inmueble, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'rtmp_inmueble': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra debidamente amueblado y equipado para su uso temporario.`
  },
  'rtmp_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación temporaria se celebrará por el término de {{duracion_noches}} noches, computados a partir del día {{fecha_inicio}} (check-in a las {{hora_llegada}}) hasta el día {{fecha_fin}} (check-out a las {{hora_salida}}).`
  },
  'rtmp_precio': {
    titulo: 'CUARTA: PRECIO',
    texto: `Que EL/LA HUÉSPED en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de precio de la locación temporaria del inmueble materia del presente contrato, la suma total de pesos argentinos {{precio_total}} por la totalidad de las noches convenidas, la cual se abonará de la siguiente manera: {{forma_pago}}.`
  },
  'rtmp_servicios': {
    titulo: 'QUINTA: SERVICIOS INCLUIDOS',
    texto: `Que EL/LA/Los/Las Sr./Sra./Sres./Sras. {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en su carácter de propietario/a del inmueble objeta del presente contrato, pone a disposición de EL/LA HUÉSPED los siguientes servicios incluidos en el precio: {{servicios_incluidos}}. Los servicios de electricidad, gas y agua que excedan el uso razonable serán a cargo de EL/LA HUÉSPED.`
  },
  'rtmp_honorarios': {
    titulo: 'SEXTA: HONORARIOS',
    texto: `Que EL/LA HUÉSPED en su carácter de tal, se obliga a pagar a EL/LA/Los/Las Sr./Sra./Sres./Sras. René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a de {{propietario_nombre}} {{propietario_apellido}} de nacionalidad {{propietario_nacionalidad}}, de estado civil {{propietario_ecivil}} en virtud de {{propietario_causes}} portador/a del DNI nro. {{propietario_dni}}, CUIT nro. {{propietario_cuit}} nacido/a el día {{propietario_nacimiento}} en {{propietario_lugar_nacimiento}} y domiciliado/a en {{propietario_domicilio}}, en concepto de honorarios la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará conjuntamente con el precio total del alquiler.`
  },
  'rtmp_proteccion': {
    titulo: 'SÉPTIMA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, y en concordancia con lo normado por la Disisión D - 2012 de la Dirección Nacional de Protección de Datos Personales, ambos intervinientes en el presente contrato declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales, la cual consiste en la posibilidad de transmitir dichos datos a terceros con fines de comercialización y/o publicidad. Ambos intervinientes declaran que son titulares de los datos personales incluidos en el presente y en consecuencia, tienen la facultad de decidir sobre ellos. Asimismo declaran que han sido informados sobre el derecho que les asiste de acceder en cualquier momento a la base de datos donde se encuentran almacenados sus datos personales para ser informados de qué datos son objeto de tratamiento, conforme lo normado por los artículos 14, 15 y 16 de la citada ley 25.326.`
  },
  'rtmp_jurisdiccion': {
    titulo: 'OCTAVA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'rtmp_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // AUTORIZACIONES
  // ──────────────────────────────────────────────────────────────
  'av_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de venta que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación, y/o sus modificaciones, y/o normas complementarias y/o supletorias de la Republica Argentina, por una parte, y de la otra, como parte propietaria, el/la Sr./Sra. {{prop_nombre}} de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}} (en adelante "EL/LA PROPIETARIO/A"), convienen en celebrar el presente contrato de autorización exclusiva de venta, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'av_precio': {
    titulo: 'SEGUNDA: PRECIO',
    texto: `Que EL/LA PROPIETARIO/A autoriza la venta del inmueble objeto del presente contrato por un precio total de pesos argentinos {{precio_letras}} ({{precio_num}}), el cual es de libre aceptación por EL/LA PROPIETARIO/A.`
  },
  'av_titularidad': {
    titulo: 'TERCERA: TITULARIDAD DEL INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra matriculado/inscripto en el Registro de la Propiedad Inmueble bajo el nro. {{inmueble_matricula}} y constituye el condominio y/o propiedad de EL/LA PROPIETARIO/A.`
  },
  'av_percibir': {
    titulo: 'CUARTA: FACULTAD PARA RECIBIR PRECIOS',
    texto: `Que EL/LA PROPIETARIO/A autoriza expresamente a René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a, para percibir total y expresamente los valores recibidos en virtud del presente instrumento.`
  },
  'av_honorarios': {
    titulo: 'QUINTA: HONORARIOS CORREDOR',
    texto: `Que EL/LA PROPIETARIO/A se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en la suma de pesos argentinos {{calcHon}} (u$s dolar oficial {{calcHonUsd}} + IVA en su caso), de conformidad a los arts. 377, 379 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442 y sus modificatorias.`
  },
  'av_exclusividad': {
    titulo: 'SEXTA: EXCLUSIVIDAD',
    texto: `Que el presente contrato tiene el carácter de EXCLUSIVO por el plazo de {{plazo_dias}} días hábiles computados desde la fecha de firma del mismo. En caso que durante el plazo de la exclusividad mediare oferta de terceros por precio inferior, EL/LA PROPIETARIO/A se reserva la facultad de no aceptarla.`
  },
  'av_proteccion': {
    titulo: 'SÉPTIMA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes en el presente contrato declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales, la cual consiste en la posibilidad de transmitir dichos datos a terceros con fines de comercialización y/o publicidad.`
  },
  'av_publicidad': {
    titulo: 'OCTAVA: PUBLICIDAD',
    texto: `Que EL/LA PROPIETARIO/A autoriza expresamente a René Alejandro Vera para publicar en cualquier medio de comunicación y/o publicidad, los datos referidos al inmueble materia del presente contrato, con fines exclusivamente comerciales.`
  },
  'av_gastos_pub': {
    titulo: 'NOVENA: GASTOS PUBLICOS',
    texto: `Que EL/LA PROPIETARIO/A se obliga a abonar todos los gastos y contribuciones que graven el inmueble con anterioridad al día {{fecha_firma}}. EL/LA PROPIETARIO/A acredita el pago del impuesto inmobiliario del mes de {{mes_tributo}}.`
  },
  'av_conyuge': {
    titulo: 'DÉCIMA: INTERVENCIÓN DEL CÓNYUGE',
    texto: `Que el/la Sr./Sra. {{prop_conyuge_nombre}} interviene en el presente carácter de cónyuge del propietario/a, en virtud de la comunidad de ganancias en la que se encuentran comprendidos los bienes gananciales, y en su carácter de tal, autoriza expresamente la venta del inmueble de marras.`
  },
  'av_jurisdiccion': {
    titulo: 'ONCEAVA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'av_agente': {
    titulo: 'DOCEAVA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y/o apoderado/a de EL/LA PROPIETARIO/A y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento de conformidad a lo dispuesto por los artículos 374, 377, 381 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442.`
  },
  'av_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // aut_venta_renta (avr)
  'avr_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de venta que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación, y/o sus modificaciones, y/o normas complementarias y/o supletorias de la Republica Argentina, por una parte, y de la otra, como parte propietaria, el/la Sr./Sra. {{prop_nombre}} de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}} (en adelante "EL/LA PROPIETARIO/A"), convienen en celebrar el presente contrato de autorización exclusiva de venta, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'avr_precio': {
    titulo: 'SEGUNDA: PRECIO',
    texto: `Que EL/LA PROPIETARIO/A autoriza la venta del inmueble objeto del presente contrato por un precio total de pesos argentinos {{precio_letras}} ({{precio_num}}), el cual es de libre aceptación por EL/LA PROPIETARIO/A.`
  },
  'avr_titularidad': {
    titulo: 'TERCERA: TITULARIDAD DEL INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra matriculado/inscripto en el Registro de la Propiedad Inmueble bajo el nro. {{inmueble_matricula}} y constituye el condominio y/o propiedad de EL/LA PROPIETARIO/A.`
  },
  'avr_percibir': {
    titulo: 'CUARTA: FACULTAD PARA RECIBIR PRECIOS',
    texto: `Que EL/LA PROPIETARIO/A autoriza expresamente a René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a, para percibir total y expresamente los valores recibidos en virtud del presente instrumento.`
  },
  'avr_honorarios': {
    titulo: 'QUINTA: HONORARIOS CORREDOR',
    texto: `Que EL/LA PROPIETARIO/A se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en la suma de pesos argentinos {{calcHon}} (u$s dolar oficial {{calcHonUsd}} + IVA en su caso), de conformidad a los arts. 377, 379 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442 y sus modificatorias.`
  },
  'avr_exclusividad': {
    titulo: 'SEXTA: EXCLUSIVIDAD',
    texto: `Que el presente contrato tiene el carácter de EXCLUSIVO por el plazo de {{plazo_dias}} días hábiles computados desde la fecha de firma del mismo.`
  },
  'avr_proteccion': {
    titulo: 'SÉPTIMA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes en el presente contrato declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales, la cual consiste en la posibilidad de transmitir dichos datos a terceros con fines de comercialización y/o publicidad.`
  },
  'avr_publicidad': {
    titulo: 'OCTAVA: PUBLICIDAD',
    texto: `Que EL/LA PROPIETARIO/A autoriza expresamente a René Alejandro Vera para publicar en cualquier medio de comunicación y/o publicidad, los datos referidos al inmueble materia del presente contrato, con fines exclusivamente comerciales.`
  },
  'avr_gastos_pub': {
    titulo: 'NOVENA: GASTOS PUBLICOS',
    texto: `Que EL/LA PROPIETARIO/A se obliga a abonar todos los gastos y contribuciones que graven el inmueble con anterioridad al día {{fecha_firma}}. EL/LA PROPIETARIO/A acredita el pago del impuesto inmobiliario del mes de {{mes_tributo}}.`
  },
  'avr_contrato_locacion': {
    titulo: 'DÉCIMA: CONTRATO DE LOCACIÓN VIGENTE',
    texto: `Que EL/LA PROPIETARIO/A declara que el inmueble objeto del presente contrato se encuentra actualmente alquilado a {{inquilino_actual}} por un monto mensual de {{alq_actual}}, cuyo contrato vence el día {{ctto_vto}}.`
  },
  'avr_locatario_acceso': {
    titulo: 'DÉCIMO PRIMERA: ACCESO AL INMUEBLE',
    texto: `Que EL/LA PROPIETARIO/A autoriza el acceso al inmueble a EL/LA COMPRADOR/A y/o a René Alejandro Vera para la inspección del mismo, previo acuerdo con el inquilino actual.`
  },
  'avr_conyuge': {
    titulo: 'DÉCIMO SEGUNDA: INTERVENCIÓN DEL CÓNYUGE',
    texto: `Que el/la Sr./Sra. {{prop_conyuge_nombre}} interviene en el presente carácter de cónyuge del propietario/a, en virtud de la comunidad de ganancias, y en su carácter de tal, autoriza expresamente la venta del inmueble de marras.`
  },
  'avr_jurisdiccion': {
    titulo: 'DÉCIMO TERCERA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'avr_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // aut_cesion (ac)
  'ac_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del cedente por virtud de la autorización exclusiva de venta que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte compradora, el/la Sr./Sra. {{comprador_nombre}} {{comprador_apellido}} de nacionalidad {{comprador_nacionalidad}}, de estado civil {{comprador_ecivil}} en virtud de {{comprador_causes}} portador/a del DNI nro. {{comprador_dni}}, CUIT nro. {{comprador_cuit}} y domiciliado/a en {{comprador_domicilio}} (en adelante "EL/LA COMPRADOR/A"), convienen en celebrar el presente contrato de autorización de venta de derechos, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'ac_autorizante': {
    titulo: 'SEGUNDA: AUTORIZANTE',
    texto: `Que EL/LA AUTORIZANTE es {{prop_nombre}}, de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}}.`
  },
  'ac_objeto': {
    titulo: 'TERCERA: OBJETO',
    texto: `Que el objeto del presente contrato es la autorización de venta de los derechos posesorios que EL/LA AUTORIZANTE detenta sobre el inmueble {{inmueble_dir}}, objeto de un boleto de compraventa previo.`
  },
  'ac_precio': {
    titulo: 'CUARTA: PRECIO',
    texto: `Que EL/LA AUTORIZANTE autoriza la venta de sus derechos por un precio total de pesos argentinos {{precio_letras}} ({{precio_num}}).`
  },
  'ac_exclusividad': {
    titulo: 'QUINTA: EXCLUSIVIDAD',
    texto: `Que el presente contrato tiene el carácter de EXCLUSIVO por el plazo de {{plazo_dias}} días hábiles computados desde la fecha de firma del mismo.`
  },
  'ac_comision': {
    titulo: 'SEXTA: COMISIÓN',
    texto: `Que EL/LA AUTORIZANTE se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en la suma de pesos argentinos {{calcHon}} (u$s dolar oficial {{calcHonUsd}} + IVA en su caso).`
  },
  'ac_proteccion': {
    titulo: 'SÉPTIMA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales.`
  },
  'ac_jurisdiccion': {
    titulo: 'OCTAVA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'ac_agente': {
    titulo: 'NOVENA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento.`
  },
  'ac_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // aut_emprendimiento (ae)
  'ae_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del emprendimiento por virtud de la autorización exclusiva de venta que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte compradora, el/la Sr./Sra. {{comprador_nombre}} {{comprador_apellido}} de nacionalidad {{comprador_nacionalidad}}, de estado civil {{comprador_ecivil}} en virtud de {{comprador_causes}} portador/a del DNI nro. {{comprador_dni}}, CUIT nro. {{comprador_cuit}} y domiciliado/a en {{comprador_domicilio}} (en adelante "EL/LA COMPRADOR/A"), convienen en celebrar el presente contrato de autorización de venta de unidades funcionales, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'ae_precio_anexo': {
    titulo: 'SEGUNDA: PRECIO Y ANEXO I',
    texto: `Que el precio de cada unidad funcional objeto del presente contrato será el que se detalla en el Anexo I, el cual forma parte integrante del mismo.`
  },
  'ae_declaracion': {
    titulo: 'TERCERA: DECLARACIÓN DEL EMPRENDIMIENTO',
    texto: `Que EL/LA AUTORIZANTE es {{emp_razons}}, persona jurídica inscripta en la IGJ bajo el nro. {{emp_igj}} y/o CUIT nro. {{emp_cuit}}, en la persona de su representante legal {{emp_rep}} con DNI nro. {{emp_rep_dni}} y CUIT nro. {{emp_rep_cuit}}, en virtud del poder conferido por escritura pública de fecha {{fecha_poder}}, otorgada ante el escribano {{escribano}}, protocolo nro. {{num_poder}}. El emprendimiento tiene por nombre {{emp_nombre}} y se encuentra ubicado en {{emp_dir}} {{numero}} {{piso}} {{dpto}} {{caba_pba}}.`
  },
  'ae_percibir': {
    titulo: 'CUARTA: FACULTAD PARA RECIBIR PRECIOS',
    texto: `Que EL/LA AUTORIZANTE autoriza expresamente a René Alejandro Vera para percibir total y expresamente los valores recibidos en virtud del presente instrumento.`
  },
  'ae_honorarios': {
    titulo: 'QUINTA: HONORARIOS CORREDOR',
    texto: `Que EL/LA AUTORIZANTE se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en la suma de pesos argentinos {{calcHon}} (u$s dolar oficial {{calcHonUsd}} + IVA en su caso).`
  },
  'ae_exclusividad': {
    titulo: 'SEXTA: EXCLUSIVIDAD',
    texto: `Que el presente contrato tiene el carácter de EXCLUSIVO por el plazo de {{plazo_dias}} días hábiles computados desde la fecha de firma del mismo.`
  },
  'ae_publicidad': {
    titulo: 'SÉPTIMA: PUBLICIDAD',
    texto: `Que EL/LA AUTORIZANTE autoriza expresamente a René Alejandro Vera para publicar en cualquier medio de comunicación los datos referidos al emprendimiento.`
  },
  'ae_gastos_pub': {
    titulo: 'OCTAVA: GASTOS PUBLICOS',
    texto: `Que EL/LA AUTORIZANTE se obliga a abonar todos los gastos y contribuciones que graven el inmueble con anterioridad al día {{fecha_firma}}.`
  },
  'ae_jurisdiccion': {
    titulo: 'NOVENA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'ae_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // aut_locacion (al)
  'al_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación, y/o sus modificaciones, y/o normas complementarias y/o supletorias de la Republica Argentina, por una parte, y de la otra, como parte propietaria, el/la Sr./Sra. {{prop_nombre}} de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}} (en adelante "EL/LA PROPIETARIO/A"), convienen en celebrar el presente contrato de autorización exclusiva de alquiler, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'al_autorizante': {
    titulo: 'SEGUNDA: AUTORIZANTE',
    texto: `Que EL/LA AUTORIZANTE es {{prop_nombre}}, de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}}.`
  },
  'al_inmueble': {
    titulo: 'TERCERA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra destinado a uso exclusivo de vivienda.`
  },
  'al_alquiler': {
    titulo: 'CUARTA: MONTO DEL ALQUILER',
    texto: `Que EL/LA PROPIETARIO/A autoriza la locación del inmueble por un monto mensual de pesos argentinos {{precio_letras}} ({{precio_num}}), el cual es de libre aceptación por EL/LA PROPIETARIO/A.`
  },
  'al_exclusividad': {
    titulo: 'QUINTA: EXCLUSIVIDAD',
    texto: `Que el presente contrato tiene el carácter de EXCLUSIVO por el plazo de {{plazo_dias}} días hábiles computados desde la fecha de firma del mismo.`
  },
  'al_garantia': {
    titulo: 'SEXTA: GARANTÍA',
    texto: `Que EL/LA PROPIETARIO/A declara que se encuentra debidamente asesorado/a respecto de los alcances de la Ley de Alquileres Nro. 27.551 y sus modificatorias, en particular en lo referido a la constitución de garantías.`
  },
  'al_comision': {
    titulo: 'SÉPTIMA: COMISIÓN',
    texto: `Que EL/LA PROPIETARIO/A se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en la suma de pesos argentinos {{calcHon}} (u$s dolar oficial {{calcHonUsd}} + IVA en su caso).`
  },
  'al_obligaciones': {
    titulo: 'OCTAVA: OBLIGACIONES DEL PROPIETARIO',
    texto: `Que EL/LA PROPIETARIO/A se obliga a mantener el inmueble en perfecto estado de conservación y funcionamiento, a fin de que el mismo pueda ser destinado al uso de vivienda.`
  },
  'al_proteccion': {
    titulo: 'NOVENA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes en el presente contrato declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales, la cual consiste en la posibilidad de transmitir dichos datos a terceros con fines de comercialización y/o publicidad.`
  },
  'al_jurisdiccion': {
    titulo: 'DÉCIMA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'al_agente': {
    titulo: 'DÉCIMO PRIMERA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento.`
  },
  'al_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // aut_temp_excl (atex)
  'atex_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler temporal que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte propietaria, el/la Sr./Sra. {{prop_nombre}} de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}} (en adelante "EL/LA PROPIETARIO/A"), convienen en celebrar el presente contrato de autorización exclusiva de alquiler temporal, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'atex_autorizante': {
    titulo: 'SEGUNDA: AUTORIZANTE',
    texto: `Que EL/LA AUTORIZANTE es {{prop_nombre}}, de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}}.`
  },
  'atex_inmueble': {
    titulo: 'TERCERA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra debidamente amueblado y equipado para su uso temporario.`
  },
  'atex_precio_plataformas': {
    titulo: 'CUARTA: PRECIO Y PLATAFORMAS',
    texto: `Que EL/LA PROPIETARIO/A autoriza la locación temporaria del inmueble por un precio pretendido de {{precio_num}} por noche y/o semana, el cual será publicado en las plataformas {{plataformas}} por René Alejandro Vera.`
  },
  'atex_exclusividad': {
    titulo: 'QUINTA: EXCLUSIVIDAD',
    texto: `Que el presente contrato tiene el carácter de EXCLUSIVO por el plazo de {{plazo_meses}} meses computados desde la fecha de firma del mismo.`
  },
  'atex_comision': {
    titulo: 'SEXTA: COMISIÓN',
    texto: `Que EL/LA PROPIETARIO/A se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en un {{com_pct}}% sobre el monto efectivamente recaudado.`
  },
  'atex_obligaciones': {
    titulo: 'SÉPTIMA: OBLIGACIONES DEL PROPIETARIO',
    texto: `Que EL/LA PROPIETARIO/A se obliga a mantener el inmueble en perfecto estado de conservación y funcionamiento, provisto de ropa de cama, toallas y todos los elementos necesarios para su uso temporario.`
  },
  'atex_proteccion': {
    titulo: 'OCTAVA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales.`
  },
  'atex_jurisdiccion': {
    titulo: 'NOVENA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'atex_agente': {
    titulo: 'DÉCIMA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento.`
  },
  'atex_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // aut_temp_noexcl (atne)
  'atne_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización de alquiler temporal que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte propietaria, el/la Sr./Sra. {{prop_nombre}} de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}} (en adelante "EL/LA PROPIETARIO/A"), convienen en celebrar el presente contrato de autorización de alquiler temporal (no exclusiva), el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'atne_autorizante': {
    titulo: 'SEGUNDA: AUTORIZANTE',
    texto: `Que EL/LA AUTORIZANTE es {{prop_nombre}}, de nacionalidad {{prop_nac}}, de estado civil {{prop_ecivil}}, portador/a del DNI nro. {{prop_dni}} y domiciliado/a en {{prop_domicilio}}.`
  },
  'atne_inmueble': {
    titulo: 'TERCERA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra debidamente amueblado y equipado para su uso temporario.`
  },
  'atne_precio_plataformas': {
    titulo: 'CUARTA: PRECIO Y PLATAFORMAS',
    texto: `Que EL/LA PROPIETARIO/A autoriza la locación temporaria del inmueble por un precio pretendido de {{precio_num}} por noche y/o semana, el cual será publicado en las plataformas {{plataformas}} por René Alejandro Vera.`
  },
  'atne_autorizacion_noexcl': {
    titulo: 'QUINTA: AUTORIZACIÓN NO EXCLUSIVA',
    texto: `Que el presente contrato tiene el carácter de NO EXCLUSIVO por el plazo de {{plazo_meses}} meses computados desde la fecha de firma del mismo. EL/LA PROPIETARIO/A se reserva la facultad de contratar a otros agentes inmobiliarios y/o publicar por su cuenta el alquiler temporario del inmueble.`
  },
  'atne_comision': {
    titulo: 'SEXTA: COMISIÓN',
    texto: `Que EL/LA PROPIETARIO/A se obliga a pagar a René Alejandro Vera la comisión pertinente a esta operación, la cual se fija en un {{com_pct}}% sobre el monto efectivamente recaudado por las reservas gestionadas a través de René Alejandro Vera.`
  },
  'atne_jurisdiccion': {
    titulo: 'SÉPTIMA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la ciudad de Buenos Aires, Republica Argentina.`
  },
  'atne_agente': {
    titulo: 'OCTAVA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento.`
  },
  'atne_cierre': {
    titulo: 'CIERRE',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // ──────────────────────────────────────────────────────────────
  // GESTIÓN
  // ──────────────────────────────────────────────────────────────
  // Prórroga (prorroga)
  'pr_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre las partes que celebran el presente instrumento: por una parte, el/la Sr./Sra. {{locador_nombre}} (en adelante "EL/LA LOCADOR/A"), y de la otra, el/la Sr./Sra. {{locatario_nombre}} (en adelante "EL/LA LOCATARIO/A"), convienen en celebrar el presente acto de prórroga del contrato de locación, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'pr_objeto': {
    titulo: 'SEGUNDA: OBJETO',
    texto: `Que las partes acuerdan prorrogar el contrato de locación identificado como {{contrato_ref}}, suscripto el día {{fecha_inic_orig}} con vencimiento original el día {{fecha_fin_orig}}, por un plazo adicional de {{prorroga_meses}} meses.`
  },
  'pr_plazo': {
    titulo: 'TERCERA: NUEVO PLAZO',
    texto: `Que el contrato prorrogado tendrá vigencia hasta el día {{fecha_fin_nueva}}, manteniéndose todas las demás condiciones原始 del contrato original sin modificaciones.`
  },
  'pr_mensual': {
    titulo: 'CUARTA: MONTO MENSUAL',
    texto: `Que el monto mensual del alquiler será el mismo que el estipulado en el contrato original, esto es, pesos argentinos {{monto_alquiler}}, sujeto a los ajustes periódicos que correspondan conforme al índice {{ajuste_indice}}.`
  },
  'pr_garantia': {
    titulo: 'QUINTA: GARANTÍA',
    texto: `Que la garantía constituida en el contrato original se mantiene vigente por todo el plazo de la prórroga. La misma se constituye mediante {{garantia_tipo}} por un monto de pesos argentinos {{garantia_monto}}.`
  },
  'pr_jurisdiccion': {
    titulo: 'SEXTA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'pr_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // Reintegro (reintegro)
  'rt_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre las partes que celebran el presente instrumento: por una parte, el/la Sr./Sra. {{locador_nombre}} (en adelante "EL/LA LOCADOR/A"), y de la otra, el/la Sr./Sra. {{locatario_nombre}} (en adelante "EL/LA LOCATARIO/A"), convienen en celebrar el presente acto de reintegro, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'rt_objeto': {
    titulo: 'SEGUNDA: OBJETO',
    texto: `Que el presente acto tiene por objeto documentar el reintegro acordado entre las partes en virtud del contrato de locación {{contrato_ref}}.`
  },
  'rt_monto': {
    titulo: 'TERCERA: MONTO',
    texto: `Que EL/LA LOCATARIO/A se obliga a reintegrar a EL/LA LOCADOR/A la suma de pesos argentinos {{monto_letras}} ({{monto_num}}) en concepto de {{concepto}}.`
  },
  'rt_forma_pago': {
    titulo: 'CUARTA: FORMA DE PAGO',
    texto: `Que EL/LA LOCATARIO/A abonará el monto indicado en la cláusula anterior en la fecha {{fecha_reintegro}}, mediante {{forma_pago}}.`
  },
  'rt_jurisdiccion': {
    titulo: 'QUINTA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'rt_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // Acta de fondos (acta_fondos)
  'af_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre las partes que celebran el presente instrumento: por una parte, el/la Sr./Sra. {{locador_nombre}} (en adelante "EL/LA LOCADOR/A"), y de la otra, el/la Sr./Sra. {{locatario_nombre}} (en adelante "EL/LA LOCATARIO/A"), convienen en celebrar el presente acta de fondos, la cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'af_objeto': {
    titulo: 'SEGUNDA: OBJETO',
    texto: `Que el presente acta tiene por objeto documentar la liquidación final de fondos correspondiente al contrato de locación {{contrato_ref}}, suscripto el día {{fecha_inicio}} y finalizado el día {{fecha_fin}}.`
  },
  'af_saldo': {
    titulo: 'TERCERA: SALDO',
    texto: `Que practicada la liquidación final, resulta un saldo a favor de {{saldo_favor}} por la suma de pesos argentinos {{saldo_monto}} ({{saldo_monto_num}}), el cual será abonado por {{saldo_pagador}} en la fecha {{saldo_fecha}}.`
  },
  'af_jurisdiccion': {
    titulo: 'CUARTA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'af_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // Desistimiento (desistimiento)
  'de_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre las partes que celebran el presente instrumento: por una parte, el/la Sr./Sra. {{locador_nombre}} (en adelante "EL/LA LOCADOR/A"), y de la otra, el/la Sr./Sra. {{locatario_nombre}} (en adelante "EL/LA LOCATARIO/A"), convienen en celebrar el presente acto de desistimiento, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'de_objeto': {
    titulo: 'SEGUNDA: OBJETO',
    texto: `Que EL/LA LOCATARIO/A manifiesta su voluntad de desistir del contrato de locación {{contrato_ref}} con vencimiento original el día {{fecha_fin_orig}}, con efectos a partir del día {{fecha_salida}}.`
  },
  'de_monto': {
    titulo: 'TERCERA: PENALIDAD',
    texto: `Que en virtud del desistimiento anticipado, EL/LA LOCATARIO/A se obliga a abonar a EL/LA LOCADOR/A, en concepto de penalidad, la suma de pesos argentinos {{pago_penal}} ({{pago_penal_num}}), la cual será descontada de la garantía constituida.`
  },
  'de_jurisdiccion': {
    titulo: 'CUARTA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'de_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // ──────────────────────────────────────────────────────────────
  // CONTRATOS
  // ──────────────────────────────────────────────────────────────
  // Contrato locación vivienda (cont_locacion_viv / cont_locacion_usd)
  'clv_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado con facultades suficientes para recibir precios y otorgar válidamente el presente documento conforme lo establecido por los artículos 374 y concordantes del Código Civil y Comercial de la Nación, y/o sus modificaciones, y/o normas complementarias y/o supletorias de la Republica Argentina, por una parte, y de la otra, como parte inquilina, el/la Sr./Sra. {{locatario_nombre}} de nacionalidad {{locatario_nac}}, de estado civil {{locatario_ecivil}} en virtud de {{locatario_causes}} portador/a del DNI nro. {{locatario_dni}}, CUIT nro. {{locatario_cuit}} nacido/a el día {{locatario_nacimiento}} en {{locatario_lugar_nacimiento}} y domiciliado/a en {{locatario_domicilio}} (en adelante "EL/LA LOCATARIO/A"), convienen en celebrar el presente contrato de locación de inmueble para uso exclusivo de vivienda, el cual se regirá por las cláusulas y condiciones que a continuación se detallan, conforme lo establecido por la Ley 27.551 y sus modificatorias:`
  },
  'clv_objeto': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra matriculado/inscripto en el Registro de la Propiedad Inmueble bajo el nro. {{inmueble_matricula}} y constituye el condominio y/o propiedad de EL/LA LOCADOR/A. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra ubicado en {{inmueble_dir}}.`
  },
  'clv_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación se celebrará por el término de {{duracion_meses}} meses, computados a partir del día {{fecha_inicio}} hasta el día {{fecha_fin}}.`
  },
  'clv_mensual': {
    titulo: 'CUARTA: MONTO MENSUAL DEL ALQUILER',
    texto: `Que EL/LA LOCATARIO/A se obliga a pagar a EL/LA LOCADOR/A, en concepto de precio de la locación, la suma mensual de pesos argentinos {{monto_alquiler}} (en adelante "EL ALQUILER").`
  },
  'clv_ajuste': {
    titulo: 'QUINTA: AJUSTE',
    texto: `Que EL/LA LOCATARIO/A se obliga a abonar el alquiler pactado, computando los incrementos periódicos que resulten de aplicar el procedimiento previsto por la Ley 27.551, conforme al índice {{ajuste_indice}} o el que legalmente corresponda, cada {{periodo_ajuste}} y/o los que resulten de la aplicación de la normativa vigente al momento del ajuste.`
  },
  'clv_garantia': {
    titulo: 'SEXTA: GARANTÍA',
    texto: `Que EL/LA LOCATARIO/A presenta en garantía del pago del alquiler y de las obligaciones asumidas en virtud del presente contrato de locación, un/a {{garantia_tipo}} por un monto de pesos argentinos {{garantia_monto}}.`
  },
  'clv_deposito': {
    titulo: 'SÉPTIMA: DEPÓSITO EN GARANTÍA',
    texto: `Que EL/LA LOCATARIO/A depositará en la cuenta de depósitos judiciales y extrajudiciales del Banco de la Nación Argentina, o en la cuenta de depósitos judiciales y extrajudiciales del Banco Provincia de Buenos Aires, o en la cuenta de depósitos judiciales y extrajudiciales de cualquier otro banco autorizado por el Banco Central de la República Argentina, en concepto de depósito en garantía del presente contrato, la suma de pesos argentinos {{anticipo_deposito}} equivalente a {{anticipo_meses}} mes/es de alquiler, dentro de los primeros {{anticipo_dias}} días de la firma del mismo.`
  },
  'clv_honorarios': {
    titulo: 'OCTAVA: HONORARIOS',
    texto: `Que EL/LA LOCATARIO/A se obliga a pagar a René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a de EL/LA LOCADOR/A, en concepto de honorarios la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará en la oportunidad prevista en la cláusula décima segunda del presente.`
  },
  'clv_gastos': {
    titulo: 'NOVENA: GASTOS',
    texto: `Que EL/LA LOCATARIO/A se obliga a abonar todos los gastos que graven el inmueble objeto del presente contrato que se generen durante la vigencia del mismo, como ser: impuestos, tasas, contribuciones, expensas y todo otro gasto corriente, con excepción de las expensas extraordinarias que no estuvieren previstas en el reglamento de copropiedad, las cuales serán a cargo de EL/LA LOCADOR/A.`
  },
  'clv_destino': {
    titulo: 'DÉCIMA: DESTINO',
    texto: `Que EL/LA LOCATARIO/A declara que el inmueble objeto del presente contrato será destinado exclusivamente a vivienda. En caso de que EL/LA LOCATARIO/A incumpliera con la obligación precedentemente pactada, EL/LA LOCADOR/A tendrá la facultad de rescindir el mismo en los términos previstos por los artículos 1200 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'clv_subarriendo': {
    titulo: 'DÉCIMO PRIMERA: SUBARRIENDO',
    texto: `Que EL/LA LOCATARIO/A no podrá ceder ni subarrendar total o parcialmente el inmueble objeto del presente contrato sin el consentimiento previo y por escrito de EL/LA LOCADOR/A.`
  },
  'clv_mejoras': {
    titulo: 'DÉCIMO SEGUNDA: MEJORAS',
    texto: `Que EL/LA LOCATARIO/A no podrá realizar mejoras ni transformaciones en el inmueble sin el consentimiento previo y por escrito de EL/LA LOCADOR/A.`
  },
  'clv_reparaciones': {
    titulo: 'DÉCIMO TERCERA: REPARACIONES',
    texto: `Que EL/LA LOCADOR/A se obliga a realizar a su exclusivo cargo las reparaciones necesarias para mantener el inmueble en perfecto estado de conservación y funcionamiento, conforme lo establecido por los artículos 1201 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'clv_entrega_devolucion': {
    titulo: 'DÉCIMO CUARTA: ENTREGA Y DEVOLUCIÓN DEL INMUEBLE',
    texto: `Que EL/LA LOCATARIO/A declara que el inmueble objeto del presente contrato le fue entregado por EL/LA LOCADOR/A en perfecto estado de conservación y funcionamiento, conforme al inventario que obra en el Anexo I que forma parte integrante del presente contrato.`
  },
  'clv_jurisdiccion': {
    titulo: 'DÉCIMO QUINTA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'clv_agente': {
    titulo: 'DÉCIMO SEXTA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y/o apoderado/a de EL/LA LOCADOR/A y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento de conformidad a lo dispuesto por los artículos 374, 377, 381 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442.`
  },
  'clv_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // Contrato locación comercio (cont_locacion_com)
  'clc_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte inquilina, el/la Sr./Sra. {{locatario_nombre}} de nacionalidad {{locatario_nac}}, de estado civil {{locatario_ecivil}} en virtud de {{locatario_causes}} portador/a del DNI nro. {{locatario_dni}}, CUIT nro. {{locatario_cuit}} y domiciliado/a en {{locatario_domicilio}} (en adelante "EL/LA LOCATARIO/A"), convienen en celebrar el presente contrato de locación de inmueble para uso exclusivo de comercio, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'clc_objeto': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra matriculado/inscripto en el Registro de la Propiedad Inmueble bajo el nro. {{inmueble_matricula}} y constituye el condominio y/o propiedad de EL/LA LOCADOR/A. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra ubicado en {{inmueble_dir}}.`
  },
  'clc_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación se celebrará por el término de {{duracion_meses}} meses, computados a partir del día {{fecha_inicio}} hasta el día {{fecha_fin}}.`
  },
  'clc_mensual': {
    titulo: 'CUARTA: MONTO MENSUAL DEL ALQUILER',
    texto: `Que EL/LA LOCATARIO/A se obliga a pagar a EL/LA LOCADOR/A, en concepto de precio de la locación, la suma mensual de pesos argentinos {{monto_alquiler}} (en adelante "EL ALQUILER").`
  },
  'clc_ajuste': {
    titulo: 'QUINTA: AJUSTE',
    texto: `Que EL/LA LOCATARIO/A se obliga a abonar el alquiler pactado, computando los incrementos periódicos que resulten de aplicar el procedimiento previsto por la Ley 27.551, conforme al índice {{ajuste_indice}} o el que legalmente corresponda, cada {{periodo_ajuste}} y/o los que resulten de la aplicación de la normativa vigente al momento del ajuste.`
  },
  'clc_garantia': {
    titulo: 'SEXTA: GARANTÍA',
    texto: `Que EL/LA LOCATARIO/A presenta en garantía del pago del alquiler y de las obligaciones asumidas en virtud del presente contrato de locación, un/a {{garantia_tipo}} por un monto de pesos argentinos {{garantia_monto}}.`
  },
  'clc_deposito': {
    titulo: 'SÉPTIMA: DEPÓSITO EN GARANTÍA',
    texto: `Que EL/LA LOCATARIO/A depositará en la cuenta de depósitos judiciales y extrajudiciales del Banco de la Nación Argentina, o en la cuenta de depósitos judiciales y extrajudiciales del Banco Provincia de Buenos Aires, o en la cuenta de depósitos judiciales y extrajudiciales de cualquier otro banco autorizado por el Banco Central de la República Argentina, en concepto de depósito en garantía del presente contrato, la suma de pesos argentinos {{anticipo_deposito}} equivalente a {{anticipo_meses}} mes/es de alquiler, dentro de los primeros {{anticipo_dias}} días de la firma del mismo.`
  },
  'clc_honorarios': {
    titulo: 'OCTAVA: HONORARIOS',
    texto: `Que EL/LA LOCATARIO/A se obliga a pagar a René Alejandro Vera con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, en su carácter de apoderado/a y/o mandatario/a y/o corredor/a de comercio y/o agente inmobiliario/a de EL/LA LOCADOR/A, en concepto de honorarios la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará en la oportunidad prevista en la cláusula décima segunda del presente.`
  },
  'clc_gastos': {
    titulo: 'NOVENA: GASTOS',
    texto: `Que EL/LA LOCATARIO/A se obliga a abonar todos los gastos que graven el inmueble objeto del presente contrato que se generen durante la vigencia del mismo, como ser: impuestos, tasas, contribuciones, expensas y todo otro gasto corriente, con excepción de las expensas extraordinarias que no estuvieren previstas en el reglamento de copropiedad, las cuales serán a cargo de EL/LA LOCADOR/A.`
  },
  'clc_destino': {
    titulo: 'DÉCIMA: DESTINO',
    texto: `Que EL/LA LOCATARIO/A declara que el inmueble objeto del presente contrato será destinado exclusivamente a {{inmueble_destino}}. En caso de que EL/LA LOCATARIO/A incumpliera con la obligación precedentemente pactada, EL/LA LOCADOR/A tendrá la facultad de rescindir el mismo en los términos previstos por los artículos 1200 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'clc_subarriendo': {
    titulo: 'DÉCIMO PRIMERA: SUBARRIENDO',
    texto: `Que EL/LA LOCATARIO/A no podrá ceder ni subarrendar total o parcialmente el inmueble objeto del presente contrato sin el consentimiento previo y por escrito de EL/LA LOCADOR/A.`
  },
  'clc_mejoras': {
    titulo: 'DÉCIMO SEGUNDA: MEJORAS',
    texto: `Que EL/LA LOCATARIO/A no podrá realizar mejoras ni transformaciones en el inmueble sin el consentimiento previo y por escrito de EL/LA LOCADOR/A.`
  },
  'clc_reparaciones': {
    titulo: 'DÉCIMO TERCERA: REPARACIONES',
    texto: `Que EL/LA LOCADOR/A se obliga a realizar a su exclusivo cargo las reparaciones necesarias para mantener el inmueble en perfecto estado de conservación y funcionamiento, conforme lo establecido por los artículos 1201 y concordantes del Código Civil y Comercial de la Nación.`
  },
  'clc_entrega_devolucion': {
    titulo: 'DÉCIMO CUARTA: ENTREGA Y DEVOLUCIÓN DEL INMUEBLE',
    texto: `Que EL/LA LOCATARIO/A declara que el inmueble objeto del presente contrato le fue entregado por EL/LA LOCADOR/A en perfecto estado de conservación y funcionamiento, conforme al inventario que obra en el Anexo I que forma parte integrante del presente contrato.`
  },
  'clc_jurisdiccion': {
    titulo: 'DÉCIMO QUINTA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'clc_agente': {
    titulo: 'DÉCIMO SEXTA: CALIDAD DEL AGENTE INMOBILIARIO',
    texto: `Que René Alejandro Vera (CSI 5848 / CPI 6778) con domicilio real en Concepción Arenal 2712 PB, Palermo, Ciudad Autónoma de Buenos Aires, interviene en el presente carácter de corredor/a de comercio y/o agente inmobiliario/a y/o apoderado/a de EL/LA LOCADOR/A y a tal fin queda facultado/a para recibir el precio y otorgar el presente documento de conformidad a lo dispuesto por los artículos 374, 377, 381 y concordantes del Código Civil y Comercial de la Nación y leyes 22.802 y 23.442.`
  },
  'clc_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },
  // Contrato temporario con servicios (cont_temp_con)
  'ctc_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler temporal que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte huésped, el/la Sr./Sra. {{locatario_nombre}} de nacionalidad {{locatario_nac}}, de estado civil {{locatario_ecivil}} en virtud de {{locatario_causes}} portador/a del DNI nro. {{locatario_dni}} (en adelante "EL/LA HUÉSPED"), convienen en celebrar el presente contrato de locación temporaria de inmueble, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'ctc_objeto': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra debidamente amueblado y equipado para su uso temporario, con los siguientes servicios incluidos: {{servicios_incluidos}}.`
  },
  'ctc_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación temporaria se celebrará por el término de {{duracion_noches}} noches, computados a partir del día {{fecha_inicio}} (check-in a las {{hora_llegada}}) hasta el día {{fecha_fin}} (check-out a las {{hora_salida}}).`
  },
  'ctc_precio': {
    titulo: 'CUARTA: PRECIO',
    texto: `Que EL/LA HUÉSPED se obliga a pagar a EL/LA LOCADOR/A, en concepto de precio de la locación temporaria, la suma total de pesos argentinos {{precio_total}} por la totalidad de las noches convenidas, la cual se abonará de la siguiente manera: {{forma_pago}}.`
  },
  'ctc_servicios': {
    titulo: 'QUINTA: SERVICIOS INCLUIDOS',
    texto: `Que EL/LA LOCADOR/A pone a disposición de EL/LA HUÉSPED los siguientes servicios incluidos en el precio: {{servicios_incluidos}}. Los servicios de electricidad, gas y agua que excedan el uso razonable serán a cargo de EL/LA HUÉSPED.`
  },
  'ctc_honorarios': {
    titulo: 'SEXTA: HONORARIOS',
    texto: `Que EL/LA HUÉSPED se obliga a pagar a René Alejandro Vera, en concepto de honorarios, la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará conjuntamente con el precio total del alquiler.`
  },
  'ctc_proteccion': {
    titulo: 'SÉPTIMA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes en el presente contrato declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales, la cual consiste en la posibilidad de transmitir dichos datos a terceros con fines de comercialización y/o publicidad.`
  },
  'ctc_jurisdiccion': {
    titulo: 'OCTAVA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'ctc_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // Contrato temporario sin servicios (cont_temp_sin)
  'cts_encabezado': {
    titulo: 'PRIMERA: ENCABEZAMIENTO',
    texto: `Entre ${CORREDOR}, quien actúa en nombre y representación del propietario por virtud de la autorización exclusiva de alquiler temporal que obra en su poder, de la cual se deja constancia en el presente instrumento, en su carácter de corredor público matriculado, por una parte, y de la otra, como parte huésped, el/la Sr./Sra. {{locatario_nombre}} de nacionalidad {{locatario_nac}}, de estado civil {{locatario_ecivil}} en virtud de {{locatario_causes}} portador/a del DNI nro. {{locatario_dni}} (en adelante "EL/LA HUÉSPED"), convienen en celebrar el presente contrato de locación temporaria de inmueble, el cual se regirá por las cláusulas y condiciones que a continuación se detallan:`
  },
  'cts_objeto': {
    titulo: 'SEGUNDA: INMUEBLE',
    texto: `Que el inmueble objeto del presente contrato se encuentra ubicado en {{inmueble_dir}}. El mismo tiene una superficie total de {{inmueble_superficie}} m², consta de {{inmueble_ambientes}} ambiente/s y se encuentra debidamente amueblado y equipado para su uso temporario. Los siguientes servicios NO están incluidos: {{servicios_excluidos}}.`
  },
  'cts_plazo': {
    titulo: 'TERCERA: PLAZO',
    texto: `Que el presente contrato de locación temporaria se celebrará por el término de {{duracion_noches}} noches, computados a partir del día {{fecha_inicio}} (check-in a las {{hora_llegada}}) hasta el día {{fecha_fin}} (check-out a las {{hora_salida}}).`
  },
  'cts_precio': {
    titulo: 'CUARTA: PRECIO',
    texto: `Que EL/LA HUÉSPED se obliga a pagar a EL/LA LOCADOR/A, en concepto de precio de la locación temporaria, la suma total de pesos argentinos {{precio_total}} por la totalidad de las noches convenidas, la cual se abonará de la siguiente manera: {{forma_pago}}.`
  },
  'cts_servicios_excl': {
    titulo: 'QUINTA: SERVICIOS EXCLUIDOS',
    texto: `Que los siguientes servicios NO están incluidos en el precio y serán a cargo de EL/LA HUÉSPED: {{servicios_excluidos}}.`
  },
  'cts_honorarios': {
    titulo: 'SEXTA: HONORARIOS',
    texto: `Que EL/LA HUÉSPED se obliga a pagar a René Alejandro Vera, en concepto de honorarios, la suma fija de pesos argentinos {{honorarios_monto}} por los servicios prestados, la cual se abonará conjuntamente con el precio total del alquiler.`
  },
  'cts_proteccion': {
    titulo: 'SÉPTIMA: PROTECCIÓN DE DATOS PERSONALES',
    texto: `En cumplimiento de la Ley 25.326 y su modificatoria, ambos intervinientes en el presente contrato declaran que conocen y aceptan la finalidad para la cual serán recabados sus datos personales, la cual consiste en la posibilidad de transmitir dichos datos a terceros con fines de comercialización y/o publicidad.`
  },
  'cts_jurisdiccion': {
    titulo: 'OCTAVA: JURISDICCION',
    texto: `Que para todos los efectos legales derivados del presente instrumento, las partes convienen en someterse a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Republica Argentina.`
  },
  'cts_firma': {
    titulo: 'FIRMA',
    texto: `Y en señal de conformidad con todo lo expuesto firman el presente en la Ciudad Autónoma de Buenos Aires el día {{fecha_firma}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA ESCRITURA (r_escritura)
  // ──────────────────────────────────────────────────────────────
  'esc_encabezado': {
    titulo: 'ENCABEZAMIENTO',
    texto: `OFERTA - RESERVA DE COMPRA\n\nBuenos Aires, {{fecha_firma}}.`
  },
  'esc_dador': {
    titulo: 'DADOR DE LA RESERVA',
    texto: `RECIBIMOS de {{comprador_nombre}}, Nacionalidad {{comprador_nac}}, DNI {{comprador_dni}}, CUIT/CUIL {{comprador_dni}}, Estado civil {{comprador_ecivil}}, Fecha de nacimiento {{comprador_nacimiento}}, con domicilio real en {{comprador_domicilio}} y constituyendo domicilio electrónico en {{comprador_email}}, en adelante DADOR DE LA RESERVA, la cantidad de DOLARES BILLETES ESTADOUNIDENSES {{reserva_letras}} (U$S {{reserva_num}}), en efectivo imputada a reserva y oferta de precio del inmueble sito en {{inmueble_dir}}, que es comercializado por el corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de 'RE/MAX CREA', con domicilio en Concepción Arenal 2712 PB, Palermo, CABA, sirviendo el presente de recibo por dicha suma, de acuerdo con las siguientes condiciones:`
  },
  'esc_vendedora': {
    titulo: 'VENDEDORA',
    texto: `VENDEDORA: {{vendedor_nombre}}, DNI/CUIT {{vendedor_dni}}, con domicilio en {{vendedor_domicilio}}.`
  },
  'esc_inmueble': {
    titulo: 'INMUEBLE',
    texto: `INMUEBLE OBJETO DE LA RESERVA: {{inmueble_dir}}. Matrícula Catastral/Registral: {{inmueble_matricula}}.`
  },
  'esc_precio': {
    titulo: 'PRECIO TOTAL Y FORMA DE PAGO',
    texto: `1. Que esta venta se realice por el monto total de DOLARES BILLETES ESTADOUNIDENSES {{precio_letras}} (U$S {{precio_num}}). El DADOR DE LA RESERVA declara poseer y se compromete a entregar las sumas en moneda DOLARES BILLETES ESTADOUNIDENSES.\n   A) La suma de DOLARES BILLETES ESTADOUNIDENSES {{precio_letras}} (U$S {{precio_num}}) al momento de la firma de la escritura traslativa de dominio con fecha tope {{fecha_esc}} a las 15:00 hs, por escribano designado {{escribano}}.`
  },
  'esc_posesion': {
    titulo: 'POSESIÓN',
    texto: `2. La posesión se otorgará libre de ocupantes y/o intrusos, inhibiciones, gravámenes, deudas de expensas, impuestos, tasas y contribuciones y servicios a la fecha de la escritura traslativa de dominio. El comprador recibirá el inmueble en el estado en que se encuentra, declarando el vendedor bajo juramento que el mismo se encuentra libre de ocupantes.`
  },
  'esc_estado_parcelario': {
    titulo: 'ESTADO PARCELARIO',
    texto: `3. EL VENDEDOR se compromete a gestionar el certificado de estado parcelario en un plazo no mayor a 3 (tres) días hábiles contados desde la aceptación de la presente oferta.`
  },
  'esc_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `4. AD REFERÉNDUM: La presente oferta queda sujeta a la aceptación de LA VENDEDORA dentro del plazo de 3 (tres) días corridos desde su firma. Si la vendedora no prestare conformidad, la reserva será restituida al dador sin penalidad alguna para ninguna de las partes.`
  },
  'esc_sena': {
    titulo: 'SEÑA PENITENCIAL (Art. 1059 CCCN)',
    texto: `5. En caso de aprobar LA VENDEDORA la presente propuesta, la suma recibida en concepto de reserva pasará a ser seña penitencial (Art. 1059 CCCN). En consecuencia:\na) Si el DADOR DE LA RESERVA desistiere, perderá la suma entregada en concepto de seña.\nb) Si LA VENDEDORA desistiere, deberá restituir al dador de la reserva el doble de la suma recibida.`
  },
  'esc_honorarios': {
    titulo: 'HONORARIOS DEL CORREDOR',
    texto: `6. HONORARIOS DEL CORREDOR: El DADOR DE LA RESERVA abonará al corredor inmobiliario René Alejandro Vera (CSI 5848 / CPI 6778) el {{com_oferente}} calculado sobre el precio total de venta, pagaderos al momento del otorgamiento de la escritura traslativa de dominio. LA VENDEDORA abonará al mismo corredor el {{com_captador}} calculado sobre el precio total de venta, pagaderos en el mismo acto.`
  },
  'esc_corredor': {
    titulo: 'CORREDOR RESPONSABLE',
    texto: `7. CORREDOR RESPONSABLE: René Alejandro Vera (CSI 5848 / CPI 6778), Matrícula CSI N° 5848, CPI N° 6778, en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },
  'esc_renuncia_765': {
    titulo: 'RENUNCIA ART. 765 CCCN',
    texto: `8. RENUNCIA ART. 765 CCCN: Queda establecido que la moneda de pago es DOLARES BILLETES ESTADOUNIDENSES, no pudiendo el deudor cancelar las obligaciones en moneda de curso legal. Las partes renuncian expresamente y de común acuerdo a la facultad establecida en el artículo 765 del Código Civil y Comercial de la Nación.`
  },
  'esc_billetes': {
    titulo: 'BILLETES — DENOMINACIÓN',
    texto: `9. Las partes acuerdan que los DOLARES BILLETES ESTADOUNIDENSES a entregar deberán ser de las denominaciones comúnmente conocidas como 'cara grande' (series 1996 en adelante), no aceptándose billetes de series anteriores ni monedas.`
  },
  'esc_incumplimiento': {
    titulo: 'INCUMPLIMIENTO',
    texto: `10. INCUMPLIMIENTO: En el caso de mediar incumplimiento por cualquiera de las partes, el incumplidor deberá abonar los honorarios de ambas partes al corredor inmobiliario René Alejandro Vera, además de las costas y costos del proceso y los daños y perjuicios que correspondan, sin perjuicio de las demás acciones legales que correspondan.`
  },
  'esc_jurisdiccion': {
    titulo: 'JURISDICCIÓN',
    texto: `JURISDICCIÓN: A todos los efectos legales que pudieran corresponder, las partes se someten a la jurisdicción de los Tribunales Ordinarios en lo Civil de la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponderles.`
  },
  'esc_agente': {
    titulo: 'AGENTE INTERVINIENTE',
    texto: `AGENTE INTERVINIENTE: {{agente}}, en representación de RE/MAX CREA.`
  },
  'esc_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad y previo a su firma digital, se firman dos (2) ejemplares de un mismo tenor y a un solo efecto, en el lugar y fecha indicados al inicio.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA BOLETO + ESCRITURA (r_boleto_esc)
  // ──────────────────────────────────────────────────────────────
  'bol_encabezado': {
    titulo: 'ENCABEZAMIENTO',
    texto: `OFERTA - RESERVA DE COMPRA (Boleto de compraventa + Escritura)\n\nBuenos Aires, {{fecha_firma}}.`
  },
  'bol_dador': {
    titulo: 'DADOR DE LA RESERVA',
    texto: `RECIBIMOS de {{comprador_nombre}}, Nacionalidad {{comprador_nac}}, DNI {{comprador_dni}}, CUIT/CUIL {{comprador_dni}}, Estado civil {{comprador_ecivil}}, Fecha de nacimiento {{comprador_nacimiento}}, con domicilio real en {{comprador_domicilio}} y constituyendo domicilio electrónico en {{comprador_email}}, en adelante DADOR DE LA RESERVA, la cantidad de DOLARES BILLETES ESTADOUNIDENSES {{reserva_letras}} (U$S {{reserva_num}}), en efectivo imputada a reserva y oferta de precio del inmueble sito en {{inmueble_dir}}, que es comercializado por el corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de 'RE/MAX CREA', con domicilio en Concepción Arenal 2712 PB, Palermo, CABA, sirviendo el presente de recibo por dicha suma, de acuerdo con las siguientes condiciones:`
  },
  'bol_vendedora': {
    titulo: 'VENDEDORA',
    texto: `VENDEDORA: {{vendedor_nombre}}, DNI/CUIT {{vendedor_dni}}.`
  },
  'bol_inmueble': {
    titulo: 'INMUEBLE',
    texto: `INMUEBLE OBJETO DE LA RESERVA: {{inmueble_dir}}. Matrícula: {{inmueble_matricula}}.`
  },
  'bol_precio': {
    titulo: 'PRECIO TOTAL Y FORMA DE PAGO',
    texto: `1. Que esta venta se realice por el monto total de DOLARES BILLETES ESTADOUNIDENSES {{precio_letras}} (U$S {{precio_num}}). El DADOR DE LA RESERVA declara poseer y se compromete a entregar las sumas en moneda DOLARES BILLETES ESTADOUNIDENSES.\n   A) Al momento del boleto de compraventa: el {{pct_boleto}}% del precio total, con fecha tope el {{fecha_boleto}}.\n   B) Al momento de la escritura traslativa de dominio: el {{pct_escritura}}% del precio total, con fecha tope el {{fecha_esc}} a las 15:00 hs, por escribano designado {{escribano}}.`
  },
  'bol_posesion': {
    titulo: 'POSESIÓN',
    texto: `2. La posesión se otorgará libre de ocupantes y/o intrusos, inhibiciones, gravámenes, deudas de expensas, impuestos, tasas y contribuciones y servicios a la fecha del boleto de compraventa y de la escritura traslativa de dominio.`
  },
  'bol_estado_parcelario': {
    titulo: 'ESTADO PARCELARIO',
    texto: `3. EL VENDEDOR se compromete a gestionar el certificado de estado parcelario en un plazo no mayor a 3 (tres) días hábiles contados desde la aceptación de la presente oferta.`
  },
  'bol_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `4. AD REFERÉNDUM: La presente oferta queda sujeta a la aceptación de LA VENDEDORA dentro del plazo de 3 (tres) días corridos desde su firma. Si la vendedora no prestare conformidad, la reserva será restituida al dador sin penalidad alguna para ninguna de las partes.`
  },
  'bol_sena': {
    titulo: 'SEÑA PENITENCIAL (Art. 1059 CCCN)',
    texto: `5. En caso de aprobar LA VENDEDORA la presente propuesta, la suma recibida en concepto de reserva pasará a ser seña penitencial (Art. 1059 CCCN). En consecuencia:\na) Si el DADOR DE LA RESERVA desistiere, perderá la suma entregada en concepto de seña.\nb) Si LA VENDEDORA desistiere, deberá restituir al dador de la reserva el doble de la suma recibida.`
  },
  'bol_honorarios': {
    titulo: 'HONORARIOS DEL CORREDOR',
    texto: `6. HONORARIOS DEL CORREDOR: El DADOR DE LA RESERVA abonará al corredor inmobiliario René Alejandro Vera (CSI 5848 / CPI 6778) el {{com_oferente}}% calculado sobre el precio total de venta, pagaderos al momento de la escritura traslativa de dominio. LA VENDEDORA abonará al mismo corredor el {{com_captador}}% calculado sobre el precio total de venta, pagaderos en el mismo acto.`
  },
  'bol_corredor': {
    titulo: 'CORREDOR RESPONSABLE',
    texto: `7. CORREDOR RESPONSABLE: René Alejandro Vera (CSI 5848 / CPI 6778), Matrícula CSI N° 5848, CPI N° 6778, en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },
  'bol_renuncia_765': {
    titulo: 'RENUNCIA ART. 765 CCCN',
    texto: `8. RENUNCIA ART. 765 CCCN: Queda establecido que la moneda de pago es DOLARES BILLETES ESTADOUNIDENSES, no pudiendo el deudor cancelar las obligaciones en moneda de curso legal. Las partes renuncian expresamente y de común acuerdo a la facultad establecida en el artículo 765 del Código Civil y Comercial de la Nación.`
  },
  'bol_billetes': {
    titulo: 'BILLETES — DENOMINACIÓN',
    texto: `9. Las partes acuerdan que los DOLARES BILLETES ESTADOUNIDENSES a entregar deberán ser de las denominaciones comúnmente conocidas como 'cara grande' (series 1996 en adelante), no aceptándose billetes de series anteriores ni monedas.`
  },
  'bol_incumplimiento': {
    titulo: 'INCUMPLIMIENTO',
    texto: `10. INCUMPLIMIENTO: En el caso de mediar incumplimiento por cualquiera de las partes, el incumplidor deberá abonar los honorarios de ambas partes al corredor inmobiliario René Alejandro Vera, además de las costas y costos del proceso y los daños y perjuicios que correspondan, sin perjuicio de las demás acciones legales que correspondan.`
  },
  'bol_jurisdiccion': {
    titulo: 'JURISDICCIÓN',
    texto: `JURISDICCIÓN: A todos los efectos legales que pudieran corresponder, las partes se someten a la jurisdicción de los Tribunales Ordinarios en lo Civil de la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponderles.`
  },
  'bol_agente': {
    titulo: 'AGENTE INTERVINIENTE',
    texto: `AGENTE INTERVINIENTE: {{agente}}, en representación de RE/MAX CREA.`
  },
  'bol_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad y previo a su firma digital, se firman dos (2) ejemplares de un mismo tenor y a un solo efecto, en el lugar y fecha indicados al inicio.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA HIPOTECARIO (r_hipotecario)
  // ──────────────────────────────────────────────────────────────
  'hip_encabezado': {
    titulo: 'ENCABEZAMIENTO',
    texto: `OFERTA — RESERVA DE COMPRA (Ad referéndum crédito hipotecario)\n\nEn la Ciudad de Buenos Aires, a los {{fecha_firma}}.`
  },
  'hip_comprador': {
    titulo: 'DADOR DE LA RESERVA (COMPRADOR)',
    texto: `DADOR DE LA RESERVA (COMPRADOR): {{comprador_nombre}}, DNI/CUIT {{comprador_dni}}, estado civil {{comprador_ecivil}}, nacionalidad {{comprador_nac}}, domicilio real {{comprador_domicilio}}, email {{comprador_email}}.`
  },
  'hip_vendedor': {
    titulo: 'VENDEDOR',
    texto: `VENDEDOR: {{vendedor_nombre}}, DNI/CUIT {{vendedor_dni}}.`
  },
  'hip_inmueble': {
    titulo: 'INMUEBLE',
    texto: `INMUEBLE OBJETO DE LA RESERVA: {{inmueble_dir}}. Matrícula: {{inmueble_matricula}}.`
  },
  'hip_precio': {
    titulo: 'PRECIO TOTAL DE VENTA',
    texto: `PRECIO TOTAL DE VENTA: {{precio_letras}} ({{precio_num}}).`
  },
  'hip_reserva': {
    titulo: 'MONTO DE RESERVA',
    texto: `MONTO DE RESERVA: {{reserva_letras}} ({{reserva_num}}), entregados al corredor en este acto, a cuenta del precio de venta.`
  },
  'hip_condicion_suspensiva': {
    titulo: 'CONDICIÓN SUSPENSIVA — CRÉDITO HIPOTECARIO',
    texto: `CONDICIÓN SUSPENSIVA — CRÉDITO HIPOTECARIO: La presente reserva queda sujeta, como condición suspensiva, a la obtención y acreditación del crédito hipotecario solicitado por el comprador ante {{banco}}, por un monto de {{monto_credito}} (estado actual: {{estado_credito}}). Plazo estimado de acreditación: {{plazo_acreditacion}}.\n\nSi dentro del plazo pactado el crédito no fuese otorgado por causas ajenas a la voluntad del comprador, la reserva será devuelta íntegramente sin penalidad alguna.`
  },
  'hip_saldo': {
    titulo: 'SALDO — ESCRITURA',
    texto: `SALDO DEL PRECIO — ESCRITURA: El saldo será abonado al momento de la escritura traslativa de dominio, cuya fecha tope es el {{fecha_esc}}, incluyendo el producido del crédito hipotecario aprobado.`
  },
  'hip_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `AD REFERÉNDUM: La presente oferta queda además sujeta a la aceptación del VENDEDOR en un plazo de 3 (tres) días corridos.`
  },
  'hip_sena': {
    titulo: 'SEÑA PENITENCIAL',
    texto: `SEÑA PENITENCIAL (Art. 1059 CCCN): Una vez aprobado el crédito y aceptada la oferta por el vendedor, la reserva se convierte en seña penitencial conforme al Art. 1059 CCCN.`
  },
  'hip_renuncia_765': {
    titulo: 'RENUNCIA ART. 765 CCCN',
    texto: `RENUNCIA ART. 765 CCCN: En caso de que el precio o parte de él esté pactado en dólares, las partes renuncian a la opción del Art. 765 CCCN y acuerdan pago en moneda extranjera billete.`
  },
  'hip_posesion': {
    titulo: 'POSESIÓN',
    texto: `POSESIÓN: El vendedor garantiza que el inmueble se entregará libre de ocupantes, gravámenes e inhibiciones al momento de la escritura.`
  },
  'hip_honorarios': {
    titulo: 'HONORARIOS',
    texto: `HONORARIOS:\n• Comprador: {{com_oferente}}% + IVA sobre el precio total, pagaderos a la escritura.\n• Vendedor: {{com_captador}}% + IVA sobre el precio total, pagaderos a la escritura.`
  },
  'hip_incumplimiento': {
    titulo: 'INCUMPLIMIENTO',
    texto: `INCUMPLIMIENTO: El incumplidor abonará los honorarios de ambas partes. La protección de honorarios rige por 90 días corridos post vencimiento.`
  },
  'hip_jurisdiccion': {
    titulo: 'JURISDICCIÓN',
    texto: `JURISDICCIÓN: Tribunales Ordinarios en lo Civil de la Ciudad Autónoma de Buenos Aires.`
  },
  'hip_agente': {
    titulo: 'AGENTE INTERVINIENTE',
    texto: `AGENTE INTERVINIENTE: {{agente}}, en representación de RE/MAX CREA.`
  },
  'hip_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad, se firman dos (2) ejemplares.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA CESIÓN (r_cesion)
  // ──────────────────────────────────────────────────────────────
  'ces_encabezado': {
    titulo: 'ENCABEZAMIENTO',
    texto: `OFERTA — RESERVA DE CESIÓN DE DERECHOS DE BOLETO DE COMPRAVENTA\n\nEn la Ciudad de Buenos Aires, a los {{fecha_firma}}.`
  },
  'ces_cedente': {
    titulo: 'CEDENTE',
    texto: `CEDENTE (vende los derechos): {{cedente_nombre}}, DNI/CUIT {{cedente_dni}}, estado civil {{cedente_ecivil}}, domicilio {{cedente_domicilio}}, email {{cedente_email}}.`
  },
  'ces_cesionario': {
    titulo: 'CESIONARIO',
    texto: `CESIONARIO (adquiere los derechos): {{cesionario_nombre}}, DNI/CUIT {{cesionario_dni}}, estado civil {{cesionario_ecivil}}, domicilio {{cesionario_domicilio}}, email {{cesionario_email}}.`
  },
  'ces_inmueble': {
    titulo: 'OBJETO DE LA CESIÓN',
    texto: `OBJETO DE LA CESIÓN: Los derechos emergentes del boleto de compraventa sobre el inmueble ubicado en {{inmueble_dir}}, cuyo precio original fue de {{precio_original}}, de fecha {{fecha_boleto_orig}}.`
  },
  'ces_precio': {
    titulo: 'PRECIO DE CESIÓN',
    texto: `PRECIO DE CESIÓN: {{precio_letras}} ({{precio_num}}), en {{moneda}}.`
  },
  'ces_reserva': {
    titulo: 'RESERVA',
    texto: `RESERVA: {{reserva_letras}} ({{reserva_num}}), entregados al corredor en este acto a cuenta del precio de cesión.`
  },
  'ces_fecha_tope': {
    titulo: 'FECHA TOPE PARA FIRMA',
    texto: `FECHA TOPE PARA FIRMA: Las partes se obligan a suscribir el instrumento definitivo de cesión de derechos con fecha tope el {{fecha_firma_ces}}.`
  },
  'ces_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `AD REFERÉNDUM: La presente oferta queda sujeta a la conformidad del cedente en el plazo de 3 días corridos.`
  },
  'ces_sena': {
    titulo: 'SEÑA PENITENCIAL',
    texto: `SEÑA PENITENCIAL (Art. 1059 CCCN): Prestada la conformidad del cedente, la reserva se convierte en seña penitencial. Si el cesionario desiste, pierde la suma. Si el cedente desiste, restituye el doble.`
  },
  'ces_renuncia_765': {
    titulo: 'RENUNCIA ART. 765 CCCN',
    texto: `RENUNCIA ART. 765 CCCN: Las partes pactan que las obligaciones en moneda extranjera se cumplirán en dólares billete, sin opción a pago en pesos.`
  },
  'ces_honorarios': {
    titulo: 'HONORARIOS',
    texto: `HONORARIOS:\n• Cesionario: {{com_oferente}}% + IVA sobre el precio de cesión, pagaderos a la firma del instrumento definitivo.\n• Cedente: {{com_captador}}% + IVA sobre el precio de cesión, pagaderos a la firma del instrumento definitivo.`
  },
  'ces_incumplimiento': {
    titulo: 'INCUMPLIMIENTO',
    texto: `INCUMPLIMIENTO: El incumplidor pagará honorarios de ambas partes. Protección de honorarios: 90 días post vencimiento.`
  },
  'ces_jurisdiccion': {
    titulo: 'JURISDICCIÓN',
    texto: `JURISDICCIÓN: Tribunales Ordinarios en lo Civil de la CABA.`
  },
  'ces_agente': {
    titulo: 'AGENTE INTERVINIENTE',
    texto: `AGENTE INTERVINIENTE: {{agente}}, en representación de RE/MAX CREA.`
  },
  'ces_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad, se firman dos (2) ejemplares.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA EMPRENDIMIENTO (r_emprendimiento)
  // ──────────────────────────────────────────────────────────────
  'remp_encabezado': {
    titulo: 'ENCABEZAMIENTO',
    texto: `OFERTA - RESERVA DE COMPRA INMUEBLE A CONSTRUIR\n\nBuenos Aires, {{fecha_firma}}.`
  },
  'remp_dador': {
    titulo: 'DADOR DE LA RESERVA',
    texto: `RECIBIMOS de {{comprador_nombre}}, Nacionalidad {{comprador_nac}}, DNI {{comprador_dni}}, CUIT/CUIL {{comprador_dni}}, Estado civil {{comprador_ecivil}}, Fecha de nacimiento {{comprador_nacimiento}}, con domicilio real en {{comprador_domicilio}} y constituyendo domicilio electrónico en la dirección de correo {{comprador_email}}, en adelante DADOR DE LA RESERVA, la cantidad de DOLARES BILLETES ESTADOUNIDENSES {{reserva_letras}} (U$S {{reserva_num}}) en efectivo imputada a reserva y oferta de precio del inmueble a construir, sito en {{emp_dir}}, que es comercializado por el corredor público René Alejandro Vera (CSI 5848/ CPI 6778), en representación de "REMAX Crea", con domicilio en Concepción Arenal 2712 PB, Palermo, CABA, sirviendo el presente de recibo por dicha suma, de acuerdo con las siguientes condiciones:`
  },
  'remp_desarrolladora': {
    titulo: 'VENDEDORA / DESARROLLADORA',
    texto: `VENDEDORA: {{dev_nombre}}, CUIT {{dev_cuit}}.`
  },
  'remp_emprendimiento': {
    titulo: 'EMPRENDIMIENTO Y UNIDAD',
    texto: `EMPRENDIMIENTO: {{emp_nombre}}, sito en {{emp_dir}}.\nUNIDAD RESERVADA: {{unidad}}, superficie aproximada: {{superficie}}.\nFecha estimada de entrega: {{entrega_est}}.`
  },
  'remp_precio': {
    titulo: 'PRECIO TOTAL DE VENTA',
    texto: `1. Que esta venta se realice por el monto total de DOLARES BILLETES ESTADOUNIDENSES {{precio_letras}} (U$S {{precio_num}}). El DADOR DE LA RESERVA declara poseer y se compromete a entregar las sumas establecidas en moneda DOLARES BILLETES ESTADOUNIDENSES.`
  },
  'remp_forma_pago': {
    titulo: 'FORMA DE PAGO',
    texto: `2. El monto mencionado será abonado de la siguiente manera:\n   1. La suma de DOLARES BILLETES ESTADOUNIDENSES {{precio_letras}} (U$S {{precio_num}}) al momento de la firma del "instrumento correspondiente" para realizar la compraventa, con fecha tope para el día {{entrega_est}} a las 15:00 hs en el domicilio sito en Concepción Arenal 2712 PB, Palermo, CABA, o lugar que se convenga por escrito.\n   2. El saldo de {{precio_num}} en {{plan_pago}}.`
  },
  'remp_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `3. Se deja expresa constancia que la presente reserva se toma AD REFERENDUM de:\n   1. La aceptación de la VENDEDORA por el plazo de 3 días corridos. Una vez vencido dicho plazo el DADOR DE LA RESERVA se compromete a notificarse personalmente en el domicilio del corredor si la oferta ha sido aceptada. En caso de que el propietario en ese término no aprobase la operación se devolverá al DADOR DE LA RESERVA la suma íntegra recibida como reserva sin indemnización ni interés alguno;\n   2. La aprobación del estudio que efectúe el DADOR DE LA RESERVA, sobre la documentación del emprendimiento por el cual se encuentra realizando la presente Oferta. En este acto, el DADOR DE LA RESERVA, recibe copia de la siguiente documental: Contrato constitutivo de fideicomiso y/o estatuto de la sociedad vendedora, Contrato de adhesión al fideicomiso y/o boleto de compra-venta, Escritura del terreno, inscripción en IGJ de fideicomiso y fiduciaria o constructora, planos de obra aprobados, memoria descriptiva del emprendimiento y presupuesto de obra completo.\n   3. Vencido el plazo de cinco (5) días corridos desde la notificación de la aceptación de la oferta por parte de la VENDEDORA, sin que el DADOR DE LA RESERVA se manifieste respecto del estudio mencionado, se entenderá que el mismo ha desistido de su oferta, debiendo concurrir al domicilio del corredor a retirar los importes otorgados en este acto, sin indemnización ni interés alguno. El vencimiento del plazo mencionado, faculta al corredor a comercializar nuevamente el inmueble.`
  },
  'remp_sena': {
    titulo: 'SEÑA PENITENCIAL',
    texto: `4. En caso de aprobar en forma definitiva la VENDEDORA la presente reserva de compra, con su correspondiente notificación al DADOR DE LA RESERVA, y cumplimentados todos los AD REFERENDUM expuestos en la presente reserva, la misma se transformará automáticamente para las partes en seña (penitencial) con facultad de arrepentimiento, por lo que: A) Si el que se arrepiente o desistiere de efectuar la compra fuera el dador de la reserva perderá los importes entregados, con la única salvedad que los títulos de la propiedad a vender no sean perfectos según el escribano interviniente por lo cual se reintegrará la reserva entregada al DADOR DE LA RESERVA, sin otra consecuencia legal y B) Si el que se arrepiente fuera la vendedora luego de haber sido conformada, deberá restituir el monto de la reserva, más otro tanto igual.`
  },
  'remp_persona_juridica': {
    titulo: 'PERSONA JURÍDICA DISTINTA DEL CORREDOR',
    texto: `5. EL DADOR DE LA RESERVA manifiesta comprender que la VENDEDORA es una persona jurídica distinta e independiente del corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de REMAX CREA. Los incumplimientos contractuales de la VENDEDORA de ningún modo serán imputables al corredor público.`
  },
  'remp_honorarios': {
    titulo: 'HONORARIOS',
    texto: `6. EL DADOR DE LA RESERVA reconoce a favor del corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "REMAX CREA" por su gestión comercial y honorarios, el importe equivalente al {{com_oferente}} del establecido en el presente instrumento, dichos honorarios deberán ser abonados al momento de la firma del boleto de compraventa o en la escritura traslativa de dominio, lo que surja primero, en Concepción Arenal 2712 PB, Palermo, CABA con fecha tope el día {{entrega_est}} a las 15:00 hs.`
  },
  'remp_corredor': {
    titulo: 'CORREDOR RESPONSABLE',
    texto: `7. Corredor responsable: René Alejandro Vera (CSI 5848 / CPI 6778) en representación de REMAX CREA.`
  },
  'remp_renuncia_765': {
    titulo: 'RENUNCIA ART. 765 CCCN',
    texto: `8. Queda establecido que el precio de venta como así también los honorarios correspondientes por la intermediación inmobiliaria se abonarán en Dólares Billetes Estadounidenses no aceptándose ningún otro medio o forma de pago salvo acuerdo por escrito expreso del corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "REMAX CREA", en consecuencia el DADOR DE LA RESERVA hace expresa renuncia a la aplicación del art. 765 y concordantes del Código Civil y Comercial de la Nación, y/o invocar imposibilidad, y/o imprevisión en los términos del art. 1091 del código citado.`
  },
  'remp_billetes': {
    titulo: 'BILLETES — DENOMINACIÓN',
    texto: `9. Las partes involucradas en la presente operación acuerdan que cualquier pago realizado en efectivo, parcial o total, deberá ser efectuado únicamente con billetes de denominación en dólares estadounidenses que correspondan a la serie conocida como "cara grande" (introducidos a partir de 1996). En caso de presentarse billetes con denominación anterior o billetes de baja denominación (inferiores a $50 USD), la parte receptora se reserva el derecho de rechazarlos, sin que ello constituya incumplimiento contractual.`
  },
  'remp_incumplimiento': {
    titulo: 'INCUMPLIMIENTO',
    texto: `10. En el caso de mediar incumplimiento de alguna de las partes una vez conformada la reserva, la parte incumplidora estará obligada a abonar al corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "REMAX CREA", el importe correspondiente a los honorarios pactados de ambas partes, en concepto de pago de honorarios que por su culpa se han dejado de percibir. El incumplidor quedará obligado a abonar el importe sin necesidad de formalidad judicial alguna.`
  },
  'remp_jurisdiccion': {
    titulo: 'JURISDICCIÓN',
    texto: `A todos los efectos legales, las partes firmantes constituyen domicilios en los arriba enunciados, resultando válidas todas las notificaciones que se cursen a dichos domicilios, y sometiéndose las partes para cualquier diferendo a la jurisdicción de los Tribunales Ordinarios en lo Civil de la Ciudad Autónoma de Buenos Aires.`
  },
  'remp_agente': {
    titulo: 'AGENTE INTERVINIENTE',
    texto: `AGENTE INTERVINIENTE: {{agente}}, en representación de RE/MAX CREA.`
  },
  'remp_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad con los términos del presente, se suscriben dos (2) ejemplares, de igual tenor, recibiendo cada parte el suyo.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA LOCACIÓN CABA (r_loc_caba) — faltantes
  // ──────────────────────────────────────────────────────────────
  'lcab_locatario': {
    titulo: 'LOCATARIO INTERESADO',
    texto: `LOCATARIO INTERESADO: {{locatario_nombre}}, DNI/CUIT {{locatario_dni}}, estado civil {{locatario_ecivil}}, domicilio actual {{locatario_domicilio}}, email {{locatario_email}}.`
  },
  'lcab_propietario': {
    titulo: 'PROPIETARIO / LOCADOR',
    texto: `PROPIETARIO / LOCADOR: {{locador_nombre}}, DNI/CUIT {{locador_dni}}.`
  },
  'lcab_condiciones': {
    titulo: 'CONDICIONES ECONÓMICAS PRETENDIDAS',
    texto: `ALQUILER MENSUAL PRETENDIDO: {{alq_pretendido}} ({{alq_pretendido_letras}}).\nDuración del contrato: {{duracion}} (conforme Ley 27.551).\nFecha de ingreso pretendida: {{fecha_ingreso}}.`
  },
  'lcab_reserva': {
    titulo: 'MONTO DE RESERVA',
    texto: `MONTO DE RESERVA: {{reserva_num}}, entregados al corredor en este acto, a cuenta del primer alquiler y/o depósito.`
  },
  'lcab_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `AD REFERÉNDUM: La presente oferta queda sujeta a la aceptación del propietario en el plazo de 3 (tres) días corridos.`
  },
  'lcab_condicion_reserva': {
    titulo: 'CONDICIÓN DE LA RESERVA',
    texto: `CONDICIÓN DE LA RESERVA: De aceptarse la oferta, se procederá a la suscripción del contrato de locación conforme la Ley 27.551 y el CCCN. De no aceptarse, la reserva será restituida íntegramente al locatario.`
  },
  'lcab_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad, se firman dos (2) ejemplares.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA LOCACIÓN PBA (r_loc_pba) — faltantes
  // ──────────────────────────────────────────────────────────────
  'lpb_locatario': {
    titulo: 'LOCATARIO INTERESADO',
    texto: `LOCATARIO INTERESADO: {{locatario_nombre}}, DNI/CUIT {{locatario_dni}}, estado civil {{locatario_ecivil}}, domicilio actual {{locatario_domicilio}}, email {{locatario_email}}.`
  },
  'lpb_propietario': {
    titulo: 'PROPIETARIO / LOCADOR',
    texto: `PROPIETARIO / LOCADOR: {{locador_nombre}}, DNI/CUIT {{locador_dni}}.`
  },
  'lpb_condiciones': {
    titulo: 'CONDICIONES ECONÓMICAS PRETENDIDAS',
    texto: `ALQUILER MENSUAL PRETENDIDO: {{alq_pretendido}} ({{alq_pretendido_letras}}).\nDuración del contrato: {{duracion}} (conf. Ley 27.551).\nFecha de ingreso pretendida: {{fecha_ingreso}}.`
  },
  'lpb_reserva': {
    titulo: 'MONTO DE RESERVA',
    texto: `MONTO DE RESERVA: {{reserva_num}}, entregados al corredor en este acto.`
  },
  'lpb_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `AD REFERÉNDUM: La presente oferta queda sujeta a la aceptación del propietario en el plazo de 3 (tres) días corridos.`
  },
  'lpb_condicion': {
    titulo: 'CONDICIÓN DE LA RESERVA',
    texto: `CONDICIÓN: De aceptarse la oferta, se suscribirá el contrato de locación conforme la Ley 27.551. De no aceptarse, la reserva será restituida íntegramente.`
  },
  'lpb_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad, se firman dos (2) ejemplares.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA LOCACIÓN COMERCIAL (r_loc_comercial) — faltantes
  // ──────────────────────────────────────────────────────────────
  'lcom_locatario': {
    titulo: 'LOCATARIO INTERESADO',
    texto: `LOCATARIO INTERESADO: {{locatario_nombre}}, DNI/CUIT {{locatario_dni}}, domicilio {{locatario_domicilio}}, email {{locatario_email}}.`
  },
  'lcom_propietario': {
    titulo: 'PROPIETARIO / LOCADOR',
    texto: `PROPIETARIO / LOCADOR: {{locador_nombre}}, DNI/CUIT {{locador_dni}}.`
  },
  'lcom_condiciones': {
    titulo: 'CONDICIONES ECONÓMICAS PRETENDIDAS',
    texto: `ALQUILER MENSUAL PRETENDIDO: {{alq_pretendido}} ({{alq_pretendido_letras}}).\nDuración del contrato: {{duracion}} años.\nFecha de ingreso pretendida: {{fecha_ingreso}}.`
  },
  'lcom_reserva': {
    titulo: 'MONTO DE RESERVA',
    texto: `MONTO DE RESERVA: {{reserva_num}}, entregados al corredor en este acto.`
  },
  'lcom_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `AD REFERÉNDUM: La presente oferta queda sujeta a la aceptación del propietario en el plazo de 3 (tres) días hábiles.`
  },
  'lcom_condicion': {
    titulo: 'CONDICIÓN DE LA RESERVA',
    texto: `CONDICIÓN: De aceptarse la oferta, se procederá a la suscripción del contrato de locación comercial. De no aceptarse, la reserva será restituida íntegramente.`
  },
  'lcom_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad, se firman dos (2) ejemplares.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // RESERVA TEMPORARIO (r_temp) — faltantes
  // ──────────────────────────────────────────────────────────────
  'rtmp_locatario': {
    titulo: 'LOCATARIO INTERESADO',
    texto: `LOCATARIO INTERESADO: {{locatario_nombre}}, DNI/CUIT {{locatario_dni}}, domicilio {{locatario_domicilio}}, email {{locatario_email}}.`
  },
  'rtmp_propietario': {
    titulo: 'PROPIETARIO / LOCADOR',
    texto: `PROPIETARIO / LOCADOR: {{locador_nombre}}, DNI/CUIT {{locador_dni}}.`
  },
  'rtmp_periodo': {
    titulo: 'PERÍODO Y PRECIO',
    texto: `PERÍODO: desde el {{fecha_desde}} hasta el {{fecha_hasta}}.\nPRECIO TOTAL DEL PERÍODO: {{precio_total}} ({{precio_total_letras}}).`
  },
  'rtmp_reserva_deposito': {
    titulo: 'RESERVA Y DEPÓSITO',
    texto: `RESERVA ENTREGADA: a cuenta del total, entregada al corredor en este acto.\nDEPÓSITO DE GARANTÍA: {{deposito}}, pagadero a la firma del contrato.`
  },
  'rtmp_ad_referendum': {
    titulo: 'AD REFERÉNDUM',
    texto: `AD REFERÉNDUM: La presente oferta queda sujeta a la conformidad del propietario dentro de las 48 hs.`
  },
  'rtmp_condicion': {
    titulo: 'CONDICIÓN DE LA RESERVA',
    texto: `CONDICIÓN: De aceptarse la oferta, las partes suscribirán el contrato de locación temporaria. De no aceptarse, la reserva será restituida íntegramente.`
  },
  'rtmp_agente': {
    titulo: 'AGENTE INTERVINIENTE',
    texto: `AGENTE INTERVINIENTE: {{agente}}, en representación de RE/MAX CREA.`
  },
  'rtmp_cierre': {
    titulo: 'CIERRE Y FIRMAS',
    texto: `En prueba de conformidad, se firman dos (2) ejemplares.\n\nCORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, con domicilio en Concepción Arenal 2712 PB, Palermo, CABA.`
  },

  // ──────────────────────────────────────────────────────────────
  // BOLETO DE COMPRAVENTA (boleto_compraventa)
  // ──────────────────────────────────────────────────────────────
  'bcv_encabezado': {
    titulo: 'ENCABEZADO',
    texto: `En la ciudad {{fecha_ciudad}}, a los {{fecha_dia}} días del mes de {{fecha_mes}} de {{fecha_anio}}, entre el/la Sr./Sra. {{vendedor_1_nombre}} C.U.I.T./D.N.I. {{vendedor_1_cuit}}, estado civil {{vendedor_1_estado_civil}}, argentino/a con domicilio en la calle {{vendedor_1_domicilio}} y el/la Sr./Sra. {{vendedor_2_nombre}} C.U.I.T./D.N.I. {{vendedor_2_cuit}} estado civil {{vendedor_2_estado_civil}}, argentino/a con domicilio en la calle {{vendedor_2_domicilio}} en adelante denominado la parte VENDEDORA y por el otro lado el/la Sr./Sra. {{comprador_nombre}}, argentino/a, C.U.I.T./D.N.I. {{comprador_cuit}}, estado civil {{comprador_estado_civil}}, argentino/a, con domicilio en {{comprador_domicilio}} de la Ciudad Autónoma de Buenos Aires, en adelante denominado la parte COMPRADORA, convienen en celebrar el presente BOLETO DE COMPRA-VENTA, que se regirá por las cláusulas y condiciones que a continuación se expresan:`
  },
  'bcv_primera_inmueble': {
    titulo: 'PRIMERA: Objeto - Inmueble',
    texto: `PRIMERA: La VENDEDORA vende el inmueble de su exclusiva propiedad \"ad corpus\" ubicada en {{inmueble_ubicacion}} de esta Ciudad con frente en calle {{inmueble_calle}} números {{inmueble_numero}} entre {{inmueble_entre_calles}}. Unidad Funcional Nº {{inmueble_uf}} ubicada en el {{inmueble_piso}} Piso y cuya NOMENCLATURA CATASTRAL: Circ.: {{inmueble_circ}}; Sección: {{inmueble_seccion}}; Manzana: {{inmueble_manzana}}; Parcela: {{inmueble_parcela}}. Inscripto en el REGISTRO DE LA PROPIEDAD INMUEBLE bajo matricula Nro. {{inmueble_matricula}}.`
  },
  'bcv_segunda_precio': {
    titulo: 'SEGUNDA: Precio y forma de pago',
    texto: `SEGUNDA: Esta venta se realiza por el precio total y convenido por las partes de DOLARES ESTADOUNIDENSES BILLETE {{precio_letras}} (U$S {{precio_num}}), pagaderos de la siguiente forma: en este acto entrega a cuenta de precio y como principio de ejecución de este contrato, la COMPRADORA a la VENDEDORA y esta última acepta de total conformidad, la cantidad de DOLARES ESTADOUNIDENSES BILLETE {{senal_letras}} (U$S {{senal_num}}), en moneda de igual denominación, sirviendo el presente de suficiente y formal recibo. El saldo total restante, o sea la suma de DOLARES ESTADOUNIDENSES {{saldo_letras}} (U$S {{saldo_num}}) serán abonados por la COMPRADORA dentro del plazo de SETENTA (70) días corridos a contar de la fecha del presente Boleto de Compraventa en lugar y horario a designar por la VENDEDORA en el Partido de {{partido_pago}} en el cual se firmará la respectiva escritura traslativa de dominio y tomará la COMPRADORA la posesión real, total y definitiva del inmueble que por este acto se vende, siendo condición esencial de este contrato el pago el billete estadounidense, dado que el comprador renuncia expresamente a la aplicación del art. 765 del Código Civil y Comercial de la Nación y manifiesta poseer en su poder el monto total pactado en dicha moneda extranjera.`
  },
  'bcv_tercera_titulos': {
    titulo: 'TERCERA: Títulos perfectos',
    texto: `TERCERA: Esta venta se realiza en base a títulos perfectos, libre de toda deuda o gravamen, totalmente desocupada, con todas sus expensas, impuestos y servicios pagos hasta el día de la firma de la escritura traslativa de dominio y toma de posesión, libre de ocupantes, intrusos o inquilinos. El presente boleto es intransferible salvo expresa conformidad otorgada por escrito del vendedor.`
  },
  'bcv_cuarta_hipoteca': {
    titulo: 'CUARTA: Hipoteca cancelada',
    texto: `CUARTA: Se deja constancia que el presente inmueble será transmitido libre de todo gravamen, habiéndose cancelado íntegramente la hipoteca que gravaba el mismo en el día de la fecha por escritura pública Nro. {{escritura_hipoteca_nro}} por ante el Escribano {{escribano_hipoteca_nombre}} con Matricula {{escribano_hipoteca_matricula}} de la cual se entrega copia.`
  },
  'bcv_quinta_entrega': {
    titulo: 'QUINTA: Estado de entrega',
    texto: `QUINTA: La propiedad se entrega con: {{inmueble_incluye_1}}, {{inmueble_incluye_2}}, {{inmueble_incluye_3}}, {{inmueble_incluye_4}}, {{inmueble_incluye_5}}, con todos sus vidrios, herrajes y llaves, todo en el estado general en que se encuentra, el cual la COMPRADORA conoce y acepta por haberla visitado con anterioridad.`
  },
  'bcv_sexta_incumplimiento': {
    titulo: 'SEXTA: Incumplimiento',
    texto: `SEXTA: Para el supuesto que cualquiera de las partes incumpliera con las obligaciones que para ellas emergen del presente, la parte cumplidora podrá optar por: a) Exigir el cumplimiento de la operación por vía judicial con más una suma diaria de dólares estadounidenses cien (U$S 100) que se pacta en concepto de cláusula penal por la simple demora y que comenzará a devengarse desde que se produzca la mora sin necesidad de interpelación judicial o extrajudicial alguna o notificación de ninguna índole, b) Considerar rescindida la operación y resuelta en todos sus efectos de pleno derecho y sin necesidad de interpelación o notificación alguna, quedando en tal caso en poder de la VENDEDORA, en el supuesto de ser la incumplidora la COMPRADORA, el cien por ciento de las sumas recibidas hasta ese momento. Y de ser la incumplidora la VENDEDORA deberá ésta reintegrar a la COMPRADORA la totalidad de lo que hubiera percibido hasta entonces, con más el cien por ciento de dicho importe, lo que se conviene entre las partes desde ahora y como única indemnización de los daños y perjuicios que se pudieran irrogar a la parte cumplidora.`
  },
  'bcv_septima_titularidad': {
    titulo: 'SEPTIMA: Titularidad e inhibiciones',
    texto: `SEPTIMA: La VENDEDORA declara ser titular del inmueble inscripto en el Registro de la Propiedad Inmueble de la Ciudad de {{ciudad_rpi}} conforme se desenvuelve del informe de dominio expedido en fecha {{informe_dominio_fecha}} bajo el numero {{informe_dominio_numero}}. Responde aquél por evicción conforme a derecho declarando que no existe tercero alguno que posea derechos sobre la finca que se enajena que puedan obstaculizar la presente operación. Así mismo, ambas partes contratantes no registran ningún tipo de inhibición para disponer del inmueble, conforme surge de los informes de Anotaciones Personales expedidos con fecha {{anotaciones_personales_fecha}}, números {{anotaciones_personales_numeros}}.`
  },
  'bcv_octava_escribania': {
    titulo: 'OCTAVA: Escrituración y gastos',
    texto: `OCTAVA: La escritura traslativa de dominio se realizará por ante el escribano {{escribano_nombre}} con domicilio en {{escribano_domicilio}} Partido de {{partido_escribania}}, Provincia de Buenos Aires, y se firmará en lugar y horario a designar por la VENDEDORA en el Partido de {{partido_escribania}} señalado supra, corriendo los gastos que demande la misma a cargo de cada parte, de acuerdo a usos y costumbres que rigen en materia notarial.`
  },
  'bcv_novena_fallecimiento': {
    titulo: 'NOVENA: Fallecimiento o incapacidad',
    texto: `NOVENA: En caso de fallecimiento, o incapacidad física o legal de alguna de las partes, sus herederos o representantes legales, se obligan a comunicar éste hecho a la otra parte dentro de los 5 días de producido el hecho y a iniciar el correspondiente juicio sucesorio o el trámite judicial que corresponda según el tipo de incapacidad, dentro de los 30 días siguientes a la notificación anterior, a los fines de obtener la orden para otorgar la respectiva escritura traslativa de dominio, de no ser así, la parte que no lo cumpliera con esta obligación, caerá automáticamente en mora de pleno derecho, sin que sea necesario ningún tipo de interpelación judicial o extrajudicial, debiendo abonar a la otra parte, que estuviera en cumplimiento, una multa diaria de DOLARES ESTADOUNIDENSES CIEN (U$S 100), hasta su efectivo cumplimiento.`
  },
  'bcv_decima_acceso': {
    titulo: 'DECIMA: Acceso previo',
    texto: `DECIMA: La VENDEDORA dará acceso a la unidad a la parte compradora con 24 horas de anterioridad a la firma de la escritura traslativa de dominio a fin de verificar las condiciones del bien raíz conforme a lo ya examinado en visitas anteriores.`
  },
  'bcv_decimaprimera_documentos': {
    titulo: 'DECIMA PRIMERA: Documentación',
    texto: `DECIMA PRIMERA: La VENDEDORA se obliga a entregar dentro de las setenta y dos (72) horas del día de la fecha a la Escribanía designada: 1) titulo de propiedad, 2) Reglamento de Copropiedad y Administración; 3) una Boleta de A.B.L., ARBA, A.yS.A., Luz, Gas, Teléfono y expensas con última liquidación, 4) Constancia de C.U.I.T./C.U.I.L. y fotocopia DNI (1era. y 2da. hoja).`
  },
  'bcv_decimasegunda_llaves': {
    titulo: 'DECIMA SEGUNDA: Entrega de llaves',
    texto: `DECIMA SEGUNDA: La VENDEDORA se compromete a entregar en el momento de la firma de la escritura traslativa de dominio las llaves de entrada al edificio y la UF.`
  },
  'bcv_decimatercera_conyuge': {
    titulo: 'DECIMA TERCERA: Conformidad del cónyuge',
    texto: `DECIMA TERCERA: presente en este acto la Señora {{conyuge_nombre}}, titular del D.N.I. nº {{conyuge_dni}}, en su carácter de cónyuge del vendedor presta su conformidad el cual comprende acabadamente, extendiendo su consentimiento a todos los términos y condiciones del acuerdo enunciado en las cláusulas precedentes a la realización de la presente venta, comprometiendo su comparecencia al acto de otorgamiento de la escritura traslativa de dominio.`
  },
  'bcv_decimacuarta_domicilios': {
    titulo: 'DECIMA CUARTA: Domicilios y jurisdicción',
    texto: `DECIMA CUARTA: Para todos los efectos legales del presente boleto de compraventa, las partes constituyen domicilios legales y especiales en los ya designados y se someten para dirimir cualquier divergencia que pudiera surgir de la aplicación e interpretación del presente, a la jurisdicción de los Tribunales Civiles y Ordinarios de la Ciudad Autónoma de Buenos Aires.`
  },
  'bcv_decimaquinta_usufructo': {
    titulo: 'DECIMA QUINTA: Usufructo vitalicio',
    texto: `DECIMA QUINTA: Conforme surge del informe de dominio referenciado vide supra pesa sobre el inmueble que se vende por el presente la constitución de un usufructo vitalicio a favor del señor {{usufructuario_nombre}}, titular del D.N.I. nº {{usufructuario_dni}} con domicilio en {{usufructuario_domicilio}}. Por ello, presente el usufructuario en este acto ratifica su total voluntad de proceder al levantamiento del beneficio expresado del cual es titular y se compromete a comparecer al acto de la firma de la escritura traslativa de dominio con el objeto de hacer efectiva la desafectación en tratamiento, firmando este instrumento al pie a tales efectos.`
  },
  'bcv_decimasexta_locacion': {
    titulo: 'DECIMA SEXTA: Cesión de locación',
    texto: `DECIMA SEXTA: Existiendo un contrato de locación suscripto en fecha {{locacion_fecha}} entre el vendedor y el señor {{locatario_nombre}}, titular del D.N.I. nº {{locatario_dni}} con domicilio en {{locatario_domicilio}}, las partes suscribientes (locador y locatario) de común acuerdo deciden ceder al aquí comprador los derechos locativos del acuerdo de marras, tomando aquél el lugar del locador y asumiendo la totalidad de los derechos y obligaciones que en tal carácter le competen. El comprador recibe en este acto el contrato de locación original y acepta la cesión comentada ratificando su contenido. A tales fines, comprador, vendedor y locatario han suscripto también en la fecha el anexo nº 1 al contrato de locación en estudio que da cuenta del alcance de esta cláusula conjuntamente con el señor {{fiador_nombre}}, titular del D.N.I. nº {{fiador_dni}}, con domicilio en {{fiador_domicilio}}, quien lo hace en su carácter de fiador. Firmando todos los aquí nombrados al pie en prueba de plena conformidad.`
  },
  'bcv_cierre': {
    titulo: 'CIERRE',
    texto: `Redactado de acuerdo a lo convenido y para su fiel cumplimiento, leído por y ante las partes presentes en este acto y declarando las mismas el haber interpretado todas y cada unas de sus cláusulas, ellas dan su conformidad y aceptación y en prueba de lo cual lo ratifican firmando en dos ejemplares de un mismo tenor y a un solo efecto en el lugar y fecha antes indicadas.`
  },

  // ──────────────────────────────────────────────────────────────
  // BOLETO DE COMPRAVENTA CON POSESIÓN (boleto_compraventa_con_posesion)
  // ──────────────────────────────────────────────────────────────
  'bcp_encabezado': {
    titulo: 'ENCABEZADO',
    texto: `En la Ciudad de {{fecha_ciudad}}, a los {{fecha_dia}} días del mes de {{fecha_mes}} de {{fecha_anio}}, entre el/la Sr./Sra. {{vendedor_nombre}} CUIT/D.N.I {{vendedor_cuit}}, estado civil {{vendedor_estado_civil}}, argentino/a con domicilio en la calle {{vendedor_domicilio}} en adelante denominado la parte VENDEDORA y por la otra parte, el/la Sr./Sra. {{comprador_nombre}}, CUIT/D.N.I {{comprador_cuit}}, estado civil {{comprador_estado_civil}} argentino/a, con domicilio en {{comprador_domicilio}} en adelante denominado la parte COMPRADORA, convienen en celebrar el presente BOLETO DE COMPRA-VENTA, que se regirá por las cláusulas y condiciones que a continuación se expresan:`
  },
  'bcp_primera_inmueble': {
    titulo: 'PRIMERA: Objeto - Inmueble',
    texto: `PRIMERA: La VENDEDORA vende el inmueble de su exclusiva propiedad \"ad corpus\" ubicada en {{inmueble_ubicacion}} entre {{inmueble_entre_calles}} Unidad Funcional Nº {{inmueble_uf}} cuya NOMENCLATURA CATASTRAL: Circ.: {{inmueble_circ}}; Sección: {{inmueble_seccion}}; Fracción {{inmueble_frac}}; Parcela: {{inmueble_parcela}}; subparcela {{inmueble_subparcela}}. Inscripto en el REGISTRO DE LA PROPIEDAD INMUEBLE bajo matricula Nro {{inmueble_matricula}}.`
  },
  'bcp_segunda_precio': {
    titulo: 'SEGUNDA: Precio y forma de pago',
    texto: `SEGUNDA: Esta venta se realiza por el precio total y convenido por las partes de DOLARES ESTADOUNIDENSES BILLETE {{precio_letras}} (U$S {{precio_num}}), pagaderos de la siguiente forma: en este acto entrega a cuenta de precio y como principio de ejecución de este contrato, la COMPRADORA a la VENDEDORA y esta última acepta de total conformidad, la cantidad de DOLARES ESTADOUNIDENSES BILLETE {{senal_letras}} (U$S {{senal_num}}), en moneda de igual denominación, sirviendo el presente de suficiente y formal recibo. El saldo total restante, o sea la suma de DOLARES ESTADOUNIDENSES BILLETE (U$S {{saldo_num}}) serán abonados por la COMPRADORA con fecha tope el {{fecha_tope_dia}} de {{fecha_tope_mes}} del {{fecha_tope_anio}} en lugar y horario a designar por la VENDEDORA, en el cual se firmará la respectiva escritura traslativa de dominio; siendo condición esencial de este contrato el pago el billete estadounidense, dado que el comprador renuncia expresamente a la aplicación del art. 765 del Código Civil y Comercial de la Nación y manifiesta poseer en su poder el monto total pactado en dicha moneda extranjera.`
  },
  'bcp_tercera_posesion': {
    titulo: 'TERCERA: Posesión en el acto',
    texto: `TERCERA: La posesión real y efectiva del bien es entregada en este acto, en la forma y en el estado en que se encuentra, con el inmueble totalmente libre de inquilinos, intrusos u ocupantes, sin oposición de terceros. El presente boleto es intransferible salvo expresa conformidad otorgada por escrito de la VENDEDORA.`
  },
  'bcp_cuarta_titulos': {
    titulo: 'CUARTA: Títulos perfectos',
    texto: `CUARTA: Esta venta se realiza en base a títulos perfectos, libre de toda deuda o gravamen hasta el día de la firma de la escritura traslativa de dominio y totalmente desocupada, con todos sus impuestos y servicios pagos hasta la toma de posesión que luego estarán a cargo del comprador.`
  },
  'bcp_quinta_entrega': {
    titulo: 'QUINTA: Estado de entrega',
    texto: `QUINTA: La propiedad se entrega con todos sus vidrios, herrajes y llaves en el estado general en que se encuentra, el cual la COMPRADORA conoce y acepta por haberla visitado con anterioridad.`
  },
  'bcp_sexta_incumplimiento': {
    titulo: 'SEXTA: Incumplimiento',
    texto: `SEXTA: para el supuesto que cualquiera de las partes incumpliera con las obligaciones que para ellas emergen del presente, la parte cumplidora podrá optar por: a) Exigir el cumplimiento de la operación por vía judicial con más una suma diaria de dólares estadounidenses cien (U$S 100) que se pacta en concepto de cláusula penal por la simple demora y que comenzará a devengarse desde que se produzca la mora sin necesidad de interpelación judicial o extrajudicial alguna o notificación de ninguna índole, b) Considerar rescindida la operación y resuelta en todos sus efectos de pleno derecho y sin necesidad de interpelación o notificación alguna, quedando en tal caso en poder de la VENDEDORA, en el supuesto de ser la incumplidora la COMPRADORA, el cien por ciento de las sumas recibidas hasta ese momento. Y de ser la incumplidora la VENDEDORA deberá ésta, reintegrar a la COMPRADORA la totalidad de lo que hubiera percibido hasta entonces, con más el cien por ciento de dicho importe, lo que se conviene entre las partes desde ahora y como única indemnización de los daños y perjuicios que se pudieran irrogar a la parte cumplidora.`
  },
  'bcp_septima_titularidad': {
    titulo: 'SEPTIMA: Titularidad e inhibiciones',
    texto: `SEPTIMA: La VENDEDORA declara ser titular del inmueble inscripto en el Registro de la Propiedad Inmueble de la Ciudad de {{ciudad_rpi}} conforme se desenvuelve del informe de dominio expedido en fecha {{informe_dominio_fecha}} bajo el número {{informe_dominio_numero}}. Responde aquél por evicción conforme a derecho declarando que no existe tercero alguno que posea derechos sobre la finca que se enajena que puedan obstaculizar la presente operación. Así mismo, ambas partes contratantes no registran ningún tipo de inhibición para disponer del inmueble, conforme surge de los informes de Anotaciones Personales expedidos con fecha {{anotaciones_personales_fecha}}, números {{anotaciones_personales_numeros}}.`
  },
  'bcp_octava_escribania': {
    titulo: 'OCTAVA: Escrituración y gastos',
    texto: `OCTAVA: La escritura traslativa de dominio se realizará por ante la escribana {{escribano_nombre}} con domicilio en {{escribano_domicilio}} Ciudad Autónoma de Buenos Aires y se firmará en lugar y horario a designar por la VENDEDORA, corriendo los gastos que demande la misma a cargo de cada parte, de acuerdo a usos y costumbres que rigen en materia notarial.`
  },
  'bcp_novena_fallecimiento': {
    titulo: 'NOVENA: Fallecimiento o incapacidad',
    texto: `NOVENA: En caso de fallecimiento, o incapacidad física o legal de alguna de las partes, sus herederos o representantes legales, se obligan a comunicar éste hecho a la otra parte dentro de los 5 días de producido el hecho y a iniciar el correspondiente juicio sucesorio o el trámite judicial que corresponda según el tipo de incapacidad, dentro de los 30 días siguientes a la notificación anterior, a los fines de obtener la orden para otorgar la respectiva escritura traslativa de dominio, de no ser así, la parte que no lo cumpliera con esta obligación, caerá automáticamente en mora de pleno derecho, sin que sea necesario ningún tipo de interpelación judicial o extrajudicial, debiendo abonar a la otra parte, que estuviera en cumplimiento, una multa diaria de DOLARES BILLETES ESTADOUNIDENSES CIEN (U$S 100), hasta su efectivo cumplimiento.`
  },
  'bcp_decima_domicilios': {
    titulo: 'DECIMA: Domicilios y jurisdicción',
    texto: `DECIMA: Para todos los efectos legales del presente boleto de compraventa, la VENDEDORA constituye domicilio legal y especial en {{vendedor_domicilio_constitucion}}, haciendo lo propio la COMPRADORA en el inmueble objeto del presente boleto de compraventa. Asimismo, se someten para dirimir cualquier divergencia que pudiera surgir de la aplicación e interpretación del presente, a la jurisdicción de los Tribunales Civiles y Ordinarios de la Ciudad Autónoma de Buenos Aires.`
  },
  'bcp_decimaprimera_documentos': {
    titulo: 'DECIMA PRIMERA: Documentación',
    texto: `DECIMA PRIMERA: La VENDEDORA se obliga a entregar dentro de las setenta y dos (72) horas del día de la fecha a la Escribanía designada: 1) titulo de propiedad, 2) Reglamento de Copropiedad y Administración; 3) una Boleta de A.B.L., A.R.B.A A.yS.A., Luz, Gas, Teléfono y expensas con última liquidación, 4) Constancia de C.U.I.T./C.U.I.L. y fotocopia DNI (1era. y 2da. hoja).`
  },
  'bcp_decimasegunda_llaves': {
    titulo: 'DECIMA SEGUNDA: Entrega de llaves',
    texto: `DECIMA SEGUNDA: La VENDEDORA entrega en este acto las llaves de entrada al edificio y la UF.`
  },
  'bcp_cierre': {
    titulo: 'CIERRE',
    texto: `Redactado de acuerdo a lo convenido y para su fiel cumplimiento, leído por y ante las partes presentes en este acto y declarando las mismas el haber interpretado todas y cada unas de sus cláusulas, ellas dan su conformidad y aceptación y en prueba de lo cual lo ratifican firmando en tres ejemplares de un mismo tenor y a un solo efecto en el lugar y fecha antes indicadas.`
  },

  // ──────────────────────────────────────────────────────────────
  // CESIÓN DE BOLETO DE COMPRAVENTA (cesion_boleto_compraventa)
  // ──────────────────────────────────────────────────────────────
  'cbc_primera_objeto': {
    titulo: 'PRIMERA: Objeto',
    texto: `PRIMERA: La CEDENTE cede a la CESIONARIA y éste adquiere de conformidad, la totalidad de los derechos, acciones y obligaciones que le corresponden del boleto de compraventa celebrado el día {{boleto_fecha_dia}} de {{boleto_fecha_mes}} del año {{boleto_fecha_anio}} con el/la Sr./Sra. {{vendedor_nombre}}, DNI {{vendedor_dni}}, en adelante el "VENDEDOR" del inmueble ubicado en {{inmueble_ubicacion}}, Partido de {{inmueble_partido}}, Provincia de Buenos Aires, designada como UF nro. {{inmueble_uf}}. NOMENCLATURA CATASTRAL del lote de terreno donde se encuentra construido el edificio: Circ.: {{inmueble_circ}}; Sección: {{inmueble_seccion}}; Manzana: {{inmueble_manzana}}; Parcela: {{inmueble_parcela}}. Inscripto en el REGISTRO DE LA PROPIEDAD INMUEBLE bajo matrícula Nro. {{inmueble_matricula}}, en adelante denominada "UNIDAD FUNCIONAL".`
  },
  'cbc_segunda_precio': {
    titulo: 'SEGUNDA: Precio',
    texto: `SEGUNDA: Esta cesión se realiza por el precio único total, convenido y definitivo de DOLARES ESTADOUNIDENSES BILLETES {{precio_total_letras}} (U$S {{precio_total_numero}}), pagaderos en la siguiente forma: a) La suma de DOLARES ESTADOUNIDENSES BILLETES {{precio_inicial_letras}} (U$S {{precio_inicial_numero}}), la abona la CESIONARIA a la CEDENTE en este acto, en dinero efectivo, a cuenta de precio y como principio de ejecución de contrato, sirviendo el presente como suficiente recibo y formal carta de pago; b) El saldo de precio, o sea la suma de DOLARES ESTADOUNIDENSES {{precio_saldo_letras}} (U$S {{precio_saldo_numero}}), la abonará la CESIONARIA en el momento de la firma de la escritura traslativa de dominio y posesión del inmueble, siendo condición esencial de este contrato el pago el billete estadounidense, dado que el comprador renuncia expresamente a la aplicación del art. 765 del Código Civil y Comercial de la Nación y manifiesta poseer en su poder el monto total pactado en dicha moneda extranjera. El comprador ha ponderado detenidamente todas las alternativas y variantes del mercado cambiario e inmobiliario y renuncia expresamente a alegar la teoría de la imprevisión en los términos del art. 1091 del código citado.`
  },
  'cbc_tercera_reglamento': {
    titulo: 'TERCERA: Reglamento de copropiedad',
    texto: `TERCERA: La CESIONARIA se obliga a cumplir el reglamento de copropiedad y administración que el escribano propuesto por el VENDEDOR identificado en la cláusula primera con relación al boleto de compraventa sustento de la presente operación celebrado el {{boleto_fecha_dia}} de {{boleto_fecha_mes}} del año {{boleto_fecha_anio}}, redacte y los gastos que origine su redacción, protocolización e inscripción, deberá pagarlos en la proporción que corresponda a su UNIDAD FUNCIONAL.`
  },
  'cbc_cuarta_garantias': {
    titulo: 'CUARTA: Garantías',
    texto: `CUARTA: LA CEDENTE declara y garantiza a la CESIONARIA que: (i) todos los derechos, créditos y acciones emergentes del Boleto de Compraventa son de su exclusiva propiedad y no han sido, ni serán cedidos, vendidos, ni de cualquier otro modo transferidos a favor de tercero alguno, (ii) que ha cumplido en tiempo y forma con todas las obligaciones a su cargo emergentes del Boleto de Compraventa y que ha pagado el saldo de precio previsto en la cláusula del Boleto de Compraventa, por lo que el precio de la UNIDAD FUNCIONAL se encuentra pagado en su totalidad al día de la fecha.`
  },
  'cbc_quinta_escrituracion': {
    titulo: 'QUINTA: Escrituración',
    texto: `QUINTA: La escritura se otorgará y firmará ante la escribanía {{escribania_nombre}}, domicilio {{escribania_domicilio}}, Partido de {{escribania_partido}}, número de registro {{escribania_registro}}, folio {{escribania_folio}}, una vez obtenidas las autorizaciones y recaudos de las oficinas públicas respectivas y despachados los certificados que habiliten a tal fin, sobre base de títulos perfectos.`
  },
  'cbc_sexta_plazos': {
    titulo: 'SEXTA: Plazos y penalidad',
    texto: `SEXTA: LAS PARTES deberán presentarse a firmar la escritura el día y hora que fije el escribano, quién deberá notificarlo con una anticipación superior a {{plazo_notificacion_dias}} días corridos, la cual se realizará dentro de los {{plazo_escrituracion_dias}} días corridos y luego de despachados los certificados que habiliten para tal fin. Para el caso de demora por cualquiera de LAS PARTES, en el cumplimiento de la presente, deberá pagar una multa como Cláusula Penal de DOLARES ESTADOUNIDENSES CIEN (U$S 100), por cada día de atraso en esta obligación. Las PARTES acuerdan que los gastos y honorarios que erogue la Escritura Traslativa de Dominio serán liquidadas según usos y costumbres.`
  },
  'cbc_septima_mora': {
    titulo: 'SEPTIMA: Mora automática',
    texto: `SEPTIMA: En todos los casos de mora se producirá por el mero vencimiento del plazo o término de la obligación y sin necesidad de interpelación alguna.`
  },
  'cbc_octava_transferencia': {
    titulo: 'OCTAVA: Transferencia',
    texto: `OCTAVA: La presente cesión de boleto se puede transferir, gratuita u onerosamente, asumiendo la CESIONARIA la obligación de notificar a la CEDENTE la cesión del presente contrato dentro de las 48hs de cedido el mismo.`
  },
  'cbc_novena_destino': {
    titulo: 'NOVENA: Destino del inmueble',
    texto: `NOVENA: Se establece como condición inexcusable de venta que la UNIDAD FUNCIONAL deberá destinarse exclusivamente para el uso de {{inmueble_uso}}, no pudiendo dársele otro destino.`
  },
  'cbc_decima_impuestos': {
    titulo: 'DECIMA: Impuestos',
    texto: `DECIMA: Cuando el impuesto de sellos o timbres gravare el presente contrato, o el de transferencia de inmuebles, correrá por cuenta de la CESIONARIA.`
  },
  'cbc_decimoprimera_domicilios': {
    titulo: 'DECIMA PRIMERA: Domicilios',
    texto: `DECIMA PRIMERA: Para cualesquiera notificaciones derivadas de este acto, LAS PARTES constituyen los domicilios contractuales: la CEDENTE en la calle {{domicilio_cedente}} y la CESIONARIA en la calle {{domicilio_cesionario}}; donde tendrán eficacia todas las que se realizaren.`
  },
  'cbc_decimosegunda_jurisdiccion': {
    titulo: 'DECIMO SEGUNDA: Jurisdicción',
    texto: `DECIMO SEGUNDA: Para el caso de litigio, LAS PARTES se someterán exclusivamente a la jurisdicción de tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, renunciando a cualesquier otros que pudiesen eventualmente corresponderles.`
  },
  'cbc_decimotercera_ejemplares': {
    titulo: 'DECIMO TERCERA: Ejemplares',
    texto: `DECIMO TERCERA: Se firman dos (2) ejemplares de este contrato de un mismo tenor y a un solo efecto, recibiendo un juego cada parte y adjuntándose al de la CESIONARIA el boleto de compra venta original, firmado con fecha {{boleto_firma_dia}} de {{boleto_firma_mes}} de 20{{boleto_firma_anio}}, que forma parte integral del presente acuerdo.`
  },
  'cbc_decimocuarta_fecha': {
    titulo: 'DECIMO CUARTA: Fecha',
    texto: `DECIMO CUARTA: Dado en la Provincia de Buenos Aires, {{lugar}}, a los {{fecha_dia}} días del mes de {{fecha_mes}} del año 20{{fecha_anio}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // CESIÓN DE CONTRATO DE LOCACIÓN (cesion_contrato_locacion)
  // ──────────────────────────────────────────────────────────────
  'ccl_encabezado': {
    titulo: 'ENCABEZADO',
    texto: `Entre los señores {{cedente1_nombre}}, argentino, con D.N.I. nº {{cedente1_dni}} y {{cedente2_nombre}}, argentina, D.N.I. nº {{cedente2_dni}}, ambos constituyendo domicilio en la calle {{cedente_domicilio}}, de la Localidad de {{cedente_localidad}}, Partido de {{cedente_partido}}, Provincia de Buenos Aires, en adelante los CEDENTES, por un lado; y por el otro los cónyuges {{cesionario1_nombre}}, argentino, mayor de edad, D.N.I. {{cesionario1_dni}} y {{cesionario2_nombre}}, argentina, DNI n° {{cesionario2_dni}}, ambos constituyendo domicilio a este efecto en la calle {{cesionario_domicilio}}, de la Ciudad de {{cesionario_ciudad}}, Provincia de Buenos Aires, en adelante la CESIONARIA y junto con los CEDENTES denominadas "LAS PARTES", convienen en celebrar la presente cesión de contrato de locación:`
  },
  'ccl_antecedentes_locacion': {
    titulo: 'ANTECEDENTES: Contrato de locación',
    texto: `ANTECEDENTES:\n\nEl día {{locacion_fecha_dia}} de {{locacion_fecha_mes}} del año {{locacion_fecha_anio}}, los CEDENTES, firmaron un contrato de locación en carácter de propietarios del inmueble sito en la calle {{inmueble_calle}}, piso {{inmueble_piso}}, dpto. {{inmueble_depto}}, de la Ciudad de {{inmueble_ciudad}}, con el señor {{locatario_nombre}}, DNI {{locatario_dni}}, en carácter de locatario y la señora {{fiador_nombre}}, en su carácter de Fiador solidario, liso y llano pagador. La vigencia de dicho contrato se estipuló desde el {{locacion_vigencia_desde_dia}} de {{locacion_vigencia_desde_mes}} del año {{locacion_fecha_anio}} venciendo en forma indefectible el día {{locacion_vigencia_hasta_dia}} de {{locacion_vigencia_hasta_mes}} del 20{{locacion_vigencia_hasta_anio}}. Se acompaña al presente como ANEXO I original del mencionado contrato de locación.`
  },
  'ccl_antecedentes_compraventa': {
    titulo: 'ANTECEDENTES: Compraventa',
    texto: `Que el día {{escritura_fecha_dia}} de {{escritura_fecha_mes}} de 20{{escritura_fecha_anio}}, por compraventa realizada entre la CEDENTE y la CESIONARIA, el segundo ha adquirido de la primera el inmueble objeto del contrato de locación mencionado en el considerando anterior, conforme copia de la escritura pública que se agrega al presente como ANEXO II.\n\nEs en razón de lo expuesto precedentemente que LAS PARTES acuerdan celebrar la presente cesión de contrato de locación, conforme los siguientes términos, cláusulas y condiciones:`
  },
  'ccl_primera_cesion': {
    titulo: 'PRIMERA: Cesión de derechos',
    texto: `PRIMERA: La CEDENTE cede y transfiere a la CESIONARIA todos y cada uno de los derechos y obligaciones que tiene y le corresponden conforme contrato de locación del inmueble sito en la calle {{inmueble_calle}}, de la Ciudad {{inmueble_ciudad}}, Provincia de Buenos Aires, suscripto el día {{locacion_fecha_dia}} de {{locacion_fecha_mes}} de 20{{locacion_fecha_anio}} con el señor {{locatario_nombre}}, en el carácter de LOCATARIO y la señora {{fiador_nombre}}, en su carácter de Fiador solidario, liso y llano pagador. Todo ello conforme ejemplar original de contrato que se acompaña al presente como ANEXO I.`
  },
  'ccl_primera_subrogacion': {
    titulo: 'PRIMERA (cont.): Subrogación',
    texto: `La CEDENTE coloca a la CESIONARIA en el mismo grado y prelación que sobre lo cedido tenía y lo subroga en todos los derechos y acciones que le correspondían por el contrato citado, con facultad para ejercitar las acciones que a él competen, declarando bajo juramento que los derechos y acciones mencionados, no los tiene cedidos, vendidos, renunciados o gravados en forma alguna. La CEDENTE manifiesta no encontrarse inhibida para disponer de sus bienes, manifestación que acepta la CESIONARIA.`
  },
  'ccl_segunda_aceptacion': {
    titulo: 'SEGUNDA: Aceptación',
    texto: `SEGUNDA: Impuesta la CESIONARIA, de los términos de esta cesión efectuada a su favor, manifiesta su conformidad y aceptación de la misma por estar de acuerdo a lo convenido, agregando que conoce y acepta el estado y condiciones de la locación acordada, asumiendo a partir del día de la fecha, a su cargo los derechos y obligaciones que del contrato de locación se derivan.`
  },
  'ccl_tercera_precio': {
    titulo: 'TERCERA: Precio compensado',
    texto: `TERCERA: LAS PARTES declaran que el precio de la presente cesión ha sido debidamente compensado en la compraventa inmobiliaria referida en los antecedentes, siendo que la CEDENTE declara haber sido satisfecha, no teniendo nada que reclamar a la CESIONARIA por ningún concepto, presente o futuro.`
  },
  'ccl_cuarta_notificacion': {
    titulo: 'CUARTA: Notificación al locatario',
    texto: `CUARTA: Presentes el Señor {{locatario_nombre}}, en el carácter de LOCATARIO del contrato cedido y la señora {{fiador_nombre}} en su carácter de Garante y Fiador, se notifican expresamente de la cesión aquí instrumentada, prestando conformidad con la misma y anoticiándose del nombre y domicilio de la CESIONARIA, donde realizarán el pago de los cánones locativos que en el futuro se devenguen, dejando constancia junto con LAS PARTES de la plena vigencia del contrato de locación oportunamente suscripto, y de los derechos y obligaciones que de él emanan. Se deja constancia, además que el locatario se encuentra al día en el pago de los cánones locativos, no adeudando suma alguna al CEDENTE, por ningún concepto.\nDe conformidad entre las partes, se firman tres (3) ejemplares de un mismo tenor y un mismo efecto, conservando uno el CEDENTE, uno el CESIONARIO y uno los LOCATARIOS, en {{lugar_firma}} el día {{fecha_firma_dia}} de {{fecha_firma_mes}} de 20{{fecha_firma_anio}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // CONVENIO DE DESOCUPACIÓN (convenio_desocupacion)
  // ──────────────────────────────────────────────────────────────
  'cvd_encabezado': {
    titulo: 'ENCABEZADO',
    texto: `Entre el Señor {{locador_nombre}} con documento de identidad DNI Nº {{locador_dni}}, con domicilio en la calle {{locador_domicilio}} y domicilio electrónico en {{locador_email}}, en su carácter de LOCADOR por una parte y el Señor {{locatario_nombre}}, con documento de identidad DNI Nº {{locatario_dni}}, con domicilio en la calle {{locatario_domicilio}} y domicilio electrónico en {{locatario_email}} en su condición de LOCATARIO por la otra parte, convienen celebrar el presente convenio de desocupación con relación al contrato de locación de un inmueble, ubicado en la calle {{inmueble_ubicacion}}, Ciudad Autónoma de Buenos Aires, sujeto a las siguientes cláusulas:`
  },
  'cvd_primera_compromiso': {
    titulo: 'PRIMERA: Compromiso de desocupación',
    texto: `PRIMERA: Las condiciones contractuales oportunamente pactadas en el contrato de locación suscripto entre las partes el día {{contrato_fecha_dia}} de {{contrato_fecha_mes}} de {{contrato_fecha_anio}}, estipulaban que el vínculo locativo finalizaría el día {{locacion_fin_dia}} de {{locacion_fin_mes}}. Sin perjuicio de lo establecido en el mencionado contrato, el LOCATARIO se compromete en forma efectiva, lisa y llana a entregar totalmente desocupado de bienes y personas el inmueble antes mencionado a más tardar el día {{desocupacion_fecha_dia}} de {{desocupacion_fecha_mes}}, fecha en la cual le hará entrega al LOCADOR de las llaves respectivas, contra documento escrito emanado del LOCADOR, no admitiéndose otro medio de prueba, y en las condiciones de conservación oportunamente pactadas en el contrato.`
  },
  'cvd_segunda_sentencia': {
    titulo: 'SEGUNDA: Sentencia de desalojo',
    texto: `SEGUNDA: Las partes acuerdan en otorgar al presente contrato de desocupación el valor de una sentencia de desalojo basada en autoridad de cosa juzgada, razón esta que de no cumplirse con la obligación de desocupar y desalojar en el término establecido facultará al LOCADOR a exigir el liso y llano lanzamiento del LOCATARIO quedando a favor de este último las costas que surjan del mismo.`
  },
  'cvd_tercera_penalidades': {
    titulo: 'TERCERA: Penalidades',
    texto: `TERCERA: En caso de incumplimiento de la obligación de desocupar, regirán las penalidades pactadas en el contrato.`
  },
  'cvd_cuarta_incumplimiento': {
    titulo: 'CUARTA: Incumplimiento y lanzamiento',
    texto: `CUARTA: El incumplimiento por parte del LOCATARIO, en la restitución del inmueble objeto del presente, en la fecha convenida en la cláusula Primera, así como la falta de pago de uno de los alquileres convenidos, previa intimación que se realizará conforme lo estipula el art. 1222 del Código Civil y Comercial de la Nación modificado por Ley 27.551, autorizará al LOCADOR, a solicitar el inmediato lanzamiento con habilitación de días y horas inhábiles.`
  },
  'cvd_quinta_homologacion': {
    titulo: 'QUINTA: Homologación y jurisdicción',
    texto: `QUINTA: Cualquiera de las partes, en forma conjunta o individual podrá homologar el presente CONVENIO, para lo cual se pacta la jurisdicción de los Tribunales de la Justicia de la Ciudad Autónoma de Buenos Aires. Asimismo se deja establecido que las partes constituyen domicilios especiales en los nombrados anteriormente donde serán válidas todas las notificaciones, tanto judiciales como extrajudiciales, referentes al presente convenio. EN PRUEBA DE CONFORMIDAD y autorizándose los abajo firmantes en forma recíproca a presentar el presente convenio ante la justicia a efectos de su correspondiente homologación, se ratifican los domicilios consignados en el contrato de locación y se firman dos ejemplares de un mismo tenor y a un solo efecto en {{lugar_firma}} a los {{fecha_firma_dia}} días del mes de {{fecha_firma_mes}} del año 20{{fecha_firma_anio}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // COMODATO (contrato_comodato)
  // ──────────────────────────────────────────────────────────────
  'cmd_encabezado': {
    titulo: 'ENCABEZADO',
    texto: `Entre el señor/a {{comodatario_nombre}}, D.N.I. {{comodatario_dni}}, domiciliado en la calle {{comodatario_domicilio}}, de la Ciudad Autónoma de Buenos Aires; en adelante "EL COMODATARIO", y como ex - titular de dominio del inmueble que más adelante se describirá; y el señor/a {{comodante_nombre}}, D.N.I. {{comodante_dni}}, domiciliado en la calle {{comodante_domicilio}}, de la Ciudad Autónoma de Buenos Aires, en adelante "EL COMODANTE", en su carácter de adquirente y actual titular de dominio del inmueble que más adelante se describirá; han convenido en celebrar el siguiente contrato de comodato, sujeto a las siguientes cláusulas:`
  },
  'cmd_primero_objeto': {
    titulo: 'PRIMERO: Objeto',
    texto: `PRIMERO: EL COMODANTE cede a EL COMODATARIO en comodato gratuito y al solo efecto de ocuparlo para vivienda de su grupo familiar, la UNIDAD FUNCIONAL Nº {{inmueble_uf}}, ubicada en el piso {{inmueble_piso}} del edificio con frente a la calle {{inmueble_calle}} número {{inmueble_numero}}, entre {{inmueble_entre1}} y {{inmueble_entre2}}; NOMENCLATURA CATASTRAL: Circunscripción {{inmueble_circ}}; Sección {{inmueble_seccion}}; Manzana {{inmueble_manzana}}; Parcela {{inmueble_parcela}}.- Partida Inmobiliaria: {{inmueble_partida}}.- (en adelante el "Inmueble").- Dicho Inmueble fue enajenado en el día de la fecha, según escritura número {{escritura_numero}}, otorgada ante el Escribano de esta Ciudad {{escribano_nombre}}, al folio {{escritura_folio}} del Registro Notarial {{registro_notarial}} a su cargo.-`
  },
  'cmd_segundo_plazo': {
    titulo: 'SEGUNDO: Plazo y restitución',
    texto: `SEGUNDO: El plazo máximo de este comodato vence el día {{plazo_vencimiento_dia}} de {{plazo_vencimiento_mes}} de {{plazo_vencimiento_anio}}, fecha en que el comodato se extingue de pleno derecho, e indefectiblemente EL COMODATARIO deberá restituir la tenencia del Inmueble a EL COMODANTE, libre de muebles y libre de ocupantes, en el mismo estado en que fuera dado en comodato, y en perfectas condiciones de aseo. Para el supuesto que no se verificara el cumplimiento de esta obligación dentro del término establecido, EL COMODANTE se reserva la facultad de ubicar los efectos de EL COMODATARIO en un depósito, el que será abonado por éste último en su totalidad. EL COMODATARIO podrá no obstante el plazo pactado rescindir el comodato y restituir la tenencia del Inmueble a EL COMODANTE en forma anticipada.-`
  },
  'cmd_tercero_acceso': {
    titulo: 'TERCERO: Acceso',
    texto: `TERCERO: EL COMODATARIO se obliga a permitir el acceso al Inmueble recibido en comodato a EL COMODANTE o a las personas que fueran autorizadas expresamente por dicha parte cuantas veces esta última estime necesario.-`
  },
  'cmd_cuarto_sentencia': {
    titulo: 'CUARTO: Sentencia firme y lanzamiento',
    texto: `CUARTO: Ambas partes están contestes en otorgar al presente el carácter de sentencia firme con autoridad de cosa juzgada, razón por la cual EL COMODATARIO renuncia a todo tipo de excepción, y EL COMODANTE, una vez vencido el plazo establecido, podrá pedir sin necesidad de trámite alguno el lanzamiento pertinente con el uso de la fuerza pública, con más los daños y perjuicios ocasionados. La mora se considerará operada automáticamente, y en caso de incumplimiento, EL COMODATARIO incurrirá en una multa diaria a favor de EL COMODANTE, de DOLARES ESTADOUNIDENSES {{multa_diaria_letras}} (U$S {{multa_diaria_numero}}), que se devengará hasta la efectiva desocupación y entrega del Inmueble, totalmente desocupado.-`
  },
  'cmd_quinto_responsabilidad': {
    titulo: 'QUINTO: Responsabilidad y reglamento',
    texto: `QUINTO: EL COMODANTE no se responsabiliza de los daños y perjuicios que pudieren producirle a EL COMODATARIO o a sus familiares las inundaciones, filtraciones y desprendimientos provenientes de roturas o desperfectos de caños o techos o cualquier otro accidente producido en el Inmueble. EL COMODATARIO se obliga a respetar en un todo las disposiciones que surgen del Reglamento de Copropiedad y Administración que rige sobre la totalidad del edificio, deslindando de toda responsabilidad a EL COMODANTE, ya sea por reclamos del Consorcio de la unidad y/o por terceros.`
  },
  'cmd_sexto_gastos': {
    titulo: 'SEXTO: Gastos y servicios',
    texto: `SEXTO: EL COMODATARIO se hace cargo del pago de todos los servicios e impuestos correspondientes al Inmueble, hasta la efectiva restitución de su tenencia a EL COMODANTE. En particular, EL COMODATARIO se obliga a abonar mensualmente los importes correspondientes a expensas comunes, ABL, y todo otro impuesto o gravamen en general que pese sobre el Inmueble, como así también abonar el consumo de energía eléctrica, gas natural, teléfono y demás que contrate la unidad. Asimismo EL COMODATARIO deberá realizar a su costo las reparaciones necesarias para el mantenimiento adecuado del Inmueble.`
  },
  'cmd_septimo_jurisdiccion': {
    titulo: 'SEPTIMO: Jurisdicción',
    texto: `SEPTIMO: Para todos los efectos legales emergentes de este comodato, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero o jurisdicción, constituyendo domicilios especiales en los indicados en el comienzo del presente.\nEN PRUEBA DE CONFORMIDAD, se firman dos ejemplares de un mismo tenor y a un solo efecto en la Ciudad Autónoma de Buenos Aires, a los {{fecha_firma_dia}} días del mes de {{fecha_firma_mes}} de {{fecha_firma_anio}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // MUTUO (contrato_mutuo)
  // ──────────────────────────────────────────────────────────────
  'mtu_encabezado': {
    titulo: 'ENCABEZADO',
    texto: `Entre la Sra. {{acreedor_nombre}} D.N.I Nº {{acreedor_dni}}, domiciliada en la calle {{acreedor_domicilio_calle}}, Piso {{acreedor_domicilio_piso}}, Depto. {{acreedor_domicilio_depto}}, de la CABA en adelante llamado "EL ACREEDOR" por una parte, y {{deudor_nombre}}, DNI {{deudor_dni}}, en su carácter de presidente de "{{deudor_sociedad_nombre}}" CUIT {{deudor_sociedad_cuit}}, con domicilio en la calle {{deudor_domicilio_calle}}, Piso {{deudor_domicilio_piso}} de la Ciudad Autónoma de Buenos Aires, y {{deudor2_nombre}} DNI {{deudor2_dni}}, con domicilio en {{deudor2_domicilio_calle}}, Piso {{deudor2_domicilio_piso}}, Depto. {{deudor2_domicilio_depto}}, de la Ciudad Autónoma de Buenos Aires, en adelante llamados "EL DEUDOR" por la otra parte, todos mayores de edad y hábiles para contratar han convenido en celebrar el presente contrato de mutuo sujeto a las siguientes condiciones y cláusulas.-`
  },
  'mtu_primera_prestamo': {
    titulo: 'PRIMERA: Préstamo',
    texto: `PRIMERA: "EL ACREEDOR" da en préstamo a "EL DEUDOR" y este acepta la suma de Dólares estadounidenses {{monto_prestamo_letras}} (USD {{monto_prestamo_numero}}), que "EL DEUDOR" recibe en este acto de conformidad sirviendo el presente de suficiente recibo y carta de adeudo en forma, obligándose "EL DEUDOR" a devolver la suma prestada en {{cuotas_cantidad}} cuotas mensuales y consecutivas de los siguientes importes: USD {{cuota_monto_numero}} cada una, con vencimiento la primera cuota el {{cuota_vencimiento_dia}} de {{cuota_vencimiento_mes}} de {{cuota_vencimiento_anio}} y las cuotas restantes todos los días {{cuota_vencimiento_dia}} de cada mes. En garantía del referido préstamo se firman {{cuotas_cantidad}} pagarés por los montos correspondientes a cada cuota y con los vencimientos en las fechas indicadas precedentemente.-`
  },
  'mtu_segunda_lugar_pago': {
    titulo: 'SEGUNDA: Lugar de pago',
    texto: `SEGUNDA: Todos los pagos deberán verificarse en {{lugar_pago}} de la CABA, o donde "EL ACREEDOR" más adelante lo indique, dentro de la Ciudad de Buenos Aires.-`
  },
  'mtu_tercera_mora': {
    titulo: 'TERCERA: Mora e intereses',
    texto: `TERCERA: La falta de pago del capital adeudado en la fecha establecidas y en el domicilio indicado, hará incurrir en mora automática a "EL DEUDOR", por el mero transcurso del tiempo, sin necesidad de interpelación alguna, judicial o extrajudicial, produciendo consecuentemente la resolución del mutuo acordado, con la inmediata posibilidad para "EL ACREEDOR" de iniciar el juicio ejecutivo, sin perjuicio de comenzar a devengarse también automáticamente en favor de la parte acreedora un interés punitorio del {{interes_punitorio}}% mensual, el que se aplicará sobre toda suma exigible y hasta su efectivo pago por la parte deudora.-`
  },
  'mtu_cuarta_moneda': {
    titulo: 'CUARTA: Moneda extranjera',
    texto: `CUARTA: Las partes manifiestan que el cumplimiento de la obligación de devolución del capital e intereses en la moneda pactada, es decir, DOLARES ESTADOUNIDENSES, es un elemento esencial del acuerdo de voluntad que otorgan, de conformidad a los artículos 281 y 1012 del Código Civil y Comercial de la Nación. La parte deudora se obliga atento el principio de identidad de pago, y los requisitos de integridad, puntualidad y localización, a cumplir con lo expresado en este contrato el cual integra el derecho de propiedad de los contratantes y por ende tiene protección y garantía Constitucional. Además, la parte deudora declara su solvencia para cumplir con sus obligaciones, y RENUNCIA A LIBERARSE DE SU OBLIGACIÓN DANDO EL EQUIVALENTE EN MONEDA LEGAL dispuesta en el artículo 765 del Código Civil y Comercial de la Nación. En virtud de lo expuesto, la parte deudora toma a su cargo en forma expresa el riesgo cambiario de la presente operación, por ser de su conocimiento el régimen de control de cambios vigente, y asume los eventuales agravamientos de las condiciones cambiarias, la contingencia de futuras restricciones adicionales, la imposibilidad de adquirir moneda extranjera en el mercado argentino y/o la alteración del tipo de cambio vigente, renunciando desde ya a invocar la imposibilidad de cumplimiento, caso fortuito o fuerza mayor por dichas razones.`
  },
  'mtu_quinta_ley25345': {
    titulo: 'QUINTA: Ley 25.345',
    texto: `QUINTA: Se deja constancia que las partes conocen los términos de la ley 25.345 que regula las formas de pago aceptadas y a pesar de ello resuelven contratar en dinero efectivo, renunciando a reclamar nuevamente las sumas entregadas en este acto invocando la ley citada.-`
  },
  'mtu_sexta_jurisdiccion': {
    titulo: 'SEXTA: Jurisdicción',
    texto: `SEXTA: Todas las partes se someten a la jurisdicción de los Tribunales de CABA, con exclusión del fuero federal, en caso de ser procedente, constituyendo domicilios especiales en los citados anteriormente, donde cada una de las partes tendrá por validas las notificaciones judiciales y/o extrajudiciales, aún cuando no viviesen mas en ellos y hasta tanto no comuniquen fehacientemente sus nuevos domicilios, renunciando además al derecho a recusar sin causa al Juzgado y/o Tribunal interviniente.-\nEn prueba de conformidad se firman dos (3) ejemplares de un mismo tenor y a un solo efecto en CABA, a los {{fecha_firma_dia}} días del mes de {{fecha_firma_mes}} de {{fecha_firma_anio}}.-`
  },

  // ──────────────────────────────────────────────────────────────
  // ACEPTACIÓN / CONTRAOFERTA / RECHAZO COMPRAVENTA (aceptacion_compraventa)
  // ──────────────────────────────────────────────────────────────
  'acv_aceptacion': {
    titulo: 'ACEPTACIÓN DE LA OFERTA',
    texto: `ACEPTACIÓN DE LA OFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{vendedor_nombre}}, con DNI {{vendedor_dni}}, con domicilio real en {{vendedor_domicilio}} y constituyendo domicilio electrónico en la dirección de correo {{vendedor_email}} en su carácter de parte vendedora del inmueble objeto de la reserva de compra y condiciones de pago emitida por sr. {{comprador_nombre}}, con fecha {{reserva_fecha}}, manifiesta no tener impedimento alguno para efectivizar la transferencia del dominio, presentando su plena y expresa conformidad con la oferta efectuada y demás condiciones pactadas que acepta en todos sus términos. La vendedora se obliga a entregar dentro de los cinco días hábiles (5) de la fecha de la firma del presente: 1) Copia de título de propiedad, 2) Boletas de ARBA, Municipal, AySA, Luz, Gas, Teléfono, Expensas 3) Constancia de Cuit/Cuil y fotocopia DNI (1era y 2da hoja). Asimismo me notifico que en caso de incomparecencia de mi parte, deberé reintegrar al oferente la suma recibida (en poder del corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "RE/MAX CREA") en concepto de reserva, con más un importe equivalente a ese valor, en concepto de indemnización. Abonaré al corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "RE/MAX CREA", en concepto de comisión y honorarios profesionales el {{comision_pct}}% más IVA del total de la Operación en la firma del Boleto de Compra-Venta o en la firma de la escritura traslativa de dominio, lo que ocurra primero. Dichos honorarios deberé abonarlos aun cuando esta firma no se realice por mi culpa o desistimiento, en cuyo caso también deberé abonar los honorarios que hubieren correspondido a la parte compradora. A los efectos legales que correspondieren las partes prorrogan su jurisdicción a los Tribunales Ordinarios de la Capital Federal.`
  },
  'acv_contraoferta': {
    titulo: 'CONTRAOFERTA',
    texto: `CONTRAOFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{vendedor_nombre}}, con DNI {{vendedor_dni}}, con domicilio real en {{vendedor_domicilio}} y constituyendo domicilio electrónico en la dirección de correo {{vendedor_email}}, CABA/Provincia de Buenos Aires, en su carácter de parte vendedora del inmueble objeto de la reserva de compra y condiciones de pago emitida por Sr. {{comprador_nombre}}, con fecha {{reserva_fecha}}, manifiesta NO aceptar la totalidad de las condiciones de la reserva descripta ut supra, contra ofertando por su parte.\n\nSe deja expresa constancia que la presente contraoferta se encuentra sujeta a la aceptación por parte del DADOR DE LA RESERVA por el plazo de 3 días corridos. Para el caso de que en ese término no aprobase la operación se devolverá al DADOR DE LA RESERVA la suma recibida en concepto de reserva sin indemnización alguna.\n\nEn caso de ser aceptada la presente contraoferta por la parte oferente, el vendedor declara no tener impedimento alguno para efectivizar la transferencia del dominio. A los efectos legales que correspondieren las partes prorrogan su jurisdicción a los Tribunales Ordinarios de la Capital Federal.`
  },
  'acv_aceptacion_contraoferta': {
    titulo: 'ACEPTACIÓN DE CONTRAOFERTA',
    texto: `ACEPTACIÓN DE CONTRAOFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{comprador_nombre}}, con DNI {{comprador_dni}}, con domicilio en la calle {{comprador_domicilio}}, CABA/Provincia de Buenos Aires, en su carácter de parte compradora del inmueble objeto de la reserva de compra y condiciones de pago emitida por si y con fecha {{reserva_fecha}}, manifiesta aceptar la totalidad de los términos y condiciones de la presente contraoferta emitida por el propietario, declarando no tener impedimento alguno para efectivizar la transferencia del dominio a su nombre. A los efectos legales que correspondieren las partes prorrogan su jurisdicción a los Tribunales Ordinarios de la Capital Federal.`
  },
  'acv_rechazo': {
    titulo: 'RECHAZO OFERTA',
    texto: `RECHAZO OFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{vendedor_nombre}}, con DNI {{vendedor_dni}}, con domicilio real en {{vendedor_domicilio}} y constituyendo domicilio electrónico en la dirección de correo {{vendedor_email}}, CABA/Provincia de Buenos Aires, en su carácter de parte vendedora del inmueble objeto de la reserva de compra y condiciones de pago emitida por Sr. {{comprador_nombre}}, con fecha {{reserva_fecha}}, manifiesta no aceptar las condiciones pactadas en todos sus términos.`
  },

  // ──────────────────────────────────────────────────────────────
  // ACEPTACIÓN / CONTRAOFERTA / RECHAZO LOCACIÓN (aceptacion_locacion)
  // ──────────────────────────────────────────────────────────────
  'alc_aceptacion': {
    titulo: 'ACEPTACIÓN DE LA OFERTA',
    texto: `ACEPTACIÓN DE LA OFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{locador_nombre}}, con DNI {{locador_dni}}, con domicilio en la calle {{locador_domicilio}}, Provincia de Buenos Aires, en su carácter de parte locadora del inmueble objeto de la reserva de locación y condiciones emitida por Sr. {{locatario_nombre}}, con fecha {{reserva_fecha}}, manifiesta no tener impedimento alguno para efectivizar la locación, presentando su plena y expresa conformidad con la oferta efectuada y demás condiciones pactadas que acepta en todos sus términos.\n\nAsimismo me notifico que en caso de incomparecencia de mi parte, deberé reintegrar al oferente la suma recibida (en custodia del corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "RE/MAX CREA") en concepto de reserva, con más un importe equivalente a ese valor, en concepto de indemnización. Abonaré al corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de "RE/MAX CREA", en concepto de comisión y honorarios profesionales el {{comision_pct}} + IVA del total de la Operación en la firma del Contrato de Locación. Dichos honorarios deberé abonarlos aun cuando esta firma no se realice por mi culpa o desistimiento, en cuyo caso también deberé abonar los honorarios que hubieren correspondido a la parte locataria. A los efectos legales que correspondieren las partes prorrogan su jurisdicción a los Tribunales Ordinarios de la Capital Federal.`
  },
  'alc_contraoferta': {
    titulo: 'CONTRAOFERTA',
    texto: `CONTRAOFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{locador_nombre}}, con DNI {{locador_dni}}, con domicilio en la calle {{locador_domicilio}}, Provincia de Buenos Aires, en su carácter de parte locadora del inmueble objeto de la reserva de locación y condiciones emitida por Sr. {{locatario_nombre}}, con fecha {{reserva_fecha}}, manifiesta NO aceptar la totalidad de las condiciones de la reserva descripta ut supra, contra ofertando por su parte.\n\nSe deja expresa constancia que la presente contraoferta se encuentra sujeta a la aceptación por parte del DADOR DE LA RESERVA por el plazo de 3 días corridos. Para el caso de que en ese término no aprobase la operación se devolverá al DADOR DE LA RESERVA la suma recibida en concepto de reserva sin indemnización alguna.\n\nEn caso de ser aceptada la presente contraoferta por la parte oferente, el locador declara no tener impedimento alguno para efectivizar la locación. A los efectos legales que correspondieren las partes prorrogan su jurisdicción a los Tribunales Ordinarios de la Capital Federal.`
  },
  'alc_aceptacion_contraoferta': {
    titulo: 'ACEPTACIÓN DE CONTRAOFERTA',
    texto: `ACEPTACIÓN DE CONTRAOFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{locatario_nombre}}, con DNI {{locatario_dni}}, con domicilio en la calle {{locatario_domicilio}}, Provincia de Buenos Aires, en su carácter de parte locataria del inmueble objeto de la reserva de locación y condiciones emitida por sí y con fecha {{reserva_fecha}}, manifiesta aceptar la totalidad de los términos y condiciones de la presente contraoferta emitida por el locador, declarando no tener impedimento alguno para efectivizar la locación. A los efectos legales que correspondieren las partes prorrogan su jurisdicción a los Tribunales Ordinarios de la Capital Federal.`
  },
  'alc_rechazo': {
    titulo: 'RECHAZO OFERTA',
    texto: `RECHAZO OFERTA\n{{fecha_ciudad}}, {{fecha_dia}} de {{fecha_mes}} de {{fecha_anio}}.\n\nPresente en este acto el Sr/a {{locador_nombre}}, con DNI {{locador_dni}}, con domicilio en la calle {{locador_domicilio}}, Provincia de Buenos Aires, en su carácter de parte locadora del inmueble objeto de la reserva de locación y condiciones emitida por Sr. {{locatario_nombre}}, con fecha {{reserva_fecha}}, manifiesta no aceptar las condiciones pactadas en todos sus términos.`
  },

  // ──────────────────────────────────────────────────────────────
  // RECIBO DE RESERVA (recibo_reserva)
  // ──────────────────────────────────────────────────────────────
  'rec_texto': {
    titulo: 'RECIBO DE RESERVA',
    texto: `Recibo de reserva\nRecibí por cuenta y orden del corredor público René Alejandro Vera (CSI 5848/ CPI 6778), en representación de RE/MAX CREA, la suma de {{monto_letras}} ({{monto_num}}), pertenecientes al sr/sra. {{dador_nombre}} para ser aplicados y en concepto de reserva de compra/alquiler por el inmueble sito en {{inmueble_dir}} (se adjunta copia de la reserva con sus términos y condiciones) a los efectos de ser entregado para su custodia al corredor público René Alejandro Vera (CSI 5848 / CPI 6778) responsable de la firma descripta ut supra. En la localidad de {{localidad}} a los {{fecha_dia}} días del mes de {{fecha_mes}}, de 20{{fecha_anio}}.\n\n{{agente}}\nFirma agente Inmobiliario`
  },

  // ──────────────────────────────────────────────────────────────
  // SEÑA DE COMPRAVENTA (sena)
  // ──────────────────────────────────────────────────────────────
  'sen_encabezado': {
    titulo: 'SEÑA DE COMPRAVENTA DE INMUEBLE',
    texto: `SEÑA DE COMPRAVENTA DE INMUEBLE\n\nPor medio del presente el/la Sr./Sra. {{vendedor_nombre}}, CUIT/DNI {{vendedor_dni}}, argentino/a, estado civil {{vendedor_ecivil}}, con domicilio en la calle {{vendedor_domicilio}}, localidad de {{vendedor_localidad}}, partido de {{vendedor_partido}} / Ciudad Autónoma de Buenos Aires, en adelante denominado/a la parte VENDEDORA, y por la otra parte el/la Sr. Sra. {{comprador_nombre}} CUIT/DNI {{comprador_dni}}, argentino/a, estado civil {{comprador_ecivil}}, con domicilio en la calle {{comprador_domicilio}}, localidad de {{comprador_localidad}}, partido {{comprador_partido}} / Ciudad Autónoma de Buenos Aires, en adelante denominado/a la parte COMPRADORA, quien compra "ad corpus" el inmueble ubicado en la calle {{inmueble_calle}}, localidad de {{inmueble_localidad}}, partido {{inmueble_partido}} / Ciudad Autónoma de Buenos Aires, NOMENCLATURA CATASTRAL: Circunscripción: {{inmueble_circ}}; Sección: {{inmueble_seccion}}; Manzana: {{inmueble_manzana}}; Parcela: {{inmueble_parcela}}.- Matricula: {{inmueble_matricula}}, cuyo precio total, fijo e inamovible es de DOLARES ESTADOUNIDENSES BILLETES {{precio_letras}} (U$S {{precio_num}}). Las partes acuerdan las siguientes condiciones que a continuación se detallan.`
  },
  'sen_sena': {
    titulo: '1 - SEÑA A CUENTA DE PRECIO',
    texto: `1- En este acto la COMPRADORA entrega a la VENDEDORA, y este acepta de total conformidad, la suma de DÓLARES ESTADOUNIDENSES BILLETES {{senal_letras}} (U$S {{senal_num}}), en concepto de seña a cuenta de precio, por la compraventa del inmueble antes citado en efectivo sirviendo el presente de suficiente y formal recibo. El saldo restante, es decir la suma de DOLARES ESTADOUNIDENSES BILLETES {{saldo_letras}} (U$S {{saldo_num}}), serán abonados por la COMPRADORA al momento de suscripción de la escritura traslativa de dominio, acto mediante el cual tomará la posesión real y definitiva del inmueble que por este acto se vende. Es condición esencial de este contrato el pago el billete estadounidense, dado que la COMPRADORA renuncia expresamente a la aplicación del art. 765 del código civil y comercial de la nación, y manifiesta poseer en su poder el monto total pactado en dicha moneda extranjera.`
  },
  'sen_escrituracion': {
    titulo: '2 - ESCRITURACIÓN',
    texto: `2- La firma de la escritura traslativa de dominio se efectuara con fecha tope el día {{fecha_tope_dia}} de {{fecha_tope_mes}} de {{fecha_tope_anio}}, a las {{fecha_tope_hora}} hs. en el domicilio sito en la calle {{escribania_domicilio}}, ante el escribano {{escribano_nombre}} con domicilio en {{escribano_domicilio}} partido de {{escribano_partido}}, provincia/ciudad autónoma de Buenos Aires, corriendo los gastos que demande la misma a cargo de cada parte, de acuerdo a usos y costumbres que rigen en materia notarial.`
  },
  'sen_titulos': {
    titulo: '3 - TÍTULOS PERFECTOS',
    texto: `3- Esta venta se realiza en base a títulos perfectos, libre de toda deuda o gravamen, totalmente desocupada, con todas sus expensas, impuestos y servicios pagos hasta el día de la firma de la escritura traslativa de dominio y toma de posesión, libre de ocupantes, intrusos o inquilinos. El presente contrato es intransferible salvo expresa conformidad otorgada por escrito del vendedor.`
  },
  'sen_entrega': {
    titulo: '4 - ESTADO DE ENTREGA',
    texto: `4- La propiedad se entrega con: {{inmueble_incluye_1}}, {{inmueble_incluye_2}}, {{inmueble_incluye_3}}, {{inmueble_incluye_4}}, {{inmueble_incluye_5}}, con todos sus vidrios, herrajes y llaves, todo en el estado general en que se encuentra, el cual la COMPRADORA conoce y acepta por haberla visitado con anterioridad, e incluye la transferencia de la línea telefónica N° {{inmueble_telefono}} funcionando y libre de deuda, con constancia que se presentará en la firma de la escritura.`
  },
  'sen_incumplimiento': {
    titulo: '5 - INCUMPLIMIENTO',
    texto: `5- Para el supuesto que cualquiera de las partes incumpliera con las obligaciones que para ellas emergen del presente, la parte cumplidora podrá optar por: a) Exigir el cumplimiento de la operación por vía judicial con más una suma diaria de dólares estadounidenses cien (U$S 100) que se pacta en concepto de cláusula penal por la simple demora y que comenzará a devengarse desde que se produzca la mora sin necesidad de interpelación judicial o extrajudicial alguna o notificación de ninguna índole, b) Considerar rescindida la operación y resuelta en todos sus efectos de pleno derecho y sin necesidad de interpelación o notificación alguna, quedando en tal caso en poder de la VENDEDORA, en el supuesto de ser la incumplidora la COMPRADORA, el cien por ciento de las sumas recibidas hasta ese momento. Y de ser la incumplidora la VENDEDORA deberá ésta reintegrar a la COMPRADORA la totalidad de lo que hubiera percibido hasta entonces, con más el cien por ciento de dicho importe, lo que se conviene entre las partes desde ahora y como única indemnización de los daños y perjuicios que se pudieran irrogar a la parte cumplidora.`
  },
  'sen_titularidad': {
    titulo: '6 - TITULARIDAD E INHIBICIONES',
    texto: `6- La VENDEDORA declara ser titular del inmueble inscripto en el Registro de la Propiedad Inmueble de la ciudad {{ciudad_rpi}} conforme el informe de dominio con fecha {{informe_dominio_fecha_dia}} de {{informe_dominio_fecha_mes}} de {{informe_dominio_fecha_anio}} bajo el numero {{informe_dominio_numero}}, asimismo la VENDEDORA no registra ningún tipo de inhibición para disponer del inmueble, conforme informe de anotaciones personales con fecha {{anotaciones_fecha_dia}} de {{anotaciones_fecha_mes}} de {{anotaciones_fecha_anio}} y numero {{anotaciones_numero}}.`
  },
  'sen_fallecimiento': {
    titulo: '7 - FALLECIMIENTO O INCAPACIDAD',
    texto: `7- En caso de fallecimiento, o incapacidad física o legal de alguna de las partes, sus herederos o representantes legales, se obligan a comunicar éste hecho a la otra parte dentro de los 5 días de producido el hecho y a iniciar el correspondiente juicio sucesorio o el trámite judicial que corresponda según el tipo de incapacidad, dentro de los 30 días siguientes a la notificación anterior, a los fines de obtener la orden para otorgar la respectiva escritura traslativa de dominio, de no ser así, la parte que no lo cumpliera con esta obligación, caerá automáticamente en mora de pleno derecho, sin que sea necesario ningún tipo de interpelación judicial o extrajudicial, debiendo abonar a la otra parte, que estuviera en cumplimiento, una multa diaria de DOLARES ESTADOUNIDENSES BILLETES CIEN (U$S 100) hasta su efectivo cumplimiento.`
  },
  'sen_acceso': {
    titulo: '8 - ACCESO PREVIO',
    texto: `8- La VENDEDORA dará acceso a la unidad a la parte compradora con 24 horas de anterioridad a la firma de la escritura traslativa de dominio a fin de verificar las condiciones del bien raíz conforme a lo ya examinado en visitas anteriores.`
  },
  'sen_documentos': {
    titulo: '9 - DOCUMENTACIÓN',
    texto: `9- La VENDEDORA se obliga a entregar dentro de las setenta y dos (72) horas, a contar desde el día de la fecha a la Escribanía designada: 1) título de propiedad, 2) Reglamento de Copropiedad y Administración 3) una Boleta de A.B.L., A.R.B.A, A.yS.A., Luz, Gas y Teléfono 4) Constancia de C.U.I.T./C.U.I.L. y fotocopia DNI (1era. y 2da. hoja).`
  },
  'sen_llaves': {
    titulo: '10 - ENTREGA DE LLAVES',
    texto: `10- La VENDEDORA se compromete a entregar en el momento de la firma de la escritura traslativa de dominio las llaves de entrada al edificio y la UF.`
  },
  'sen_jurisdiccion': {
    titulo: '11 - DOMICILIOS Y JURISDICCIÓN',
    texto: `11- A todos los efectos legales se tendrán como válidos y especiales los domicilios nombrados ut supra, y en caso de controversia se dirimirá ante los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires renunciando a cualquier otro fuero o Jurisdicción.`
  },
  'sen_cierre': {
    titulo: '12 - CIERRE',
    texto: `12- En fe de lo cual se firman dos ejemplares de un mismo tenor y a un solo efecto entregando uno para cada parte, en la ciudad {{ciudad_rpi}}, a los {{informe_dominio_fecha_dia}} días del mes de {{informe_dominio_fecha_mes}} de {{informe_dominio_fecha_anio}}.`
  },

  // ──────────────────────────────────────────────────────────────
  // REFUERZO DE RESERVA (refuerzo_reserva)
  // ──────────────────────────────────────────────────────────────
  'rfr_texto': {
    titulo: 'REFUERZO DE RESERVA',
    texto: `REFUERZO DE RESERVA\n\n"RE/MAX CREA", representada en este acto por René Alejandro Vera, CSI 5848/CPI 6778, con domicilio en Concepción Arenal 2712, CABA, en carácter de autorizado del Propietario, RECIBE: del Sr. {{comprador_nombre}}, Nacionalidad Argentina, DNI {{comprador_dni}}, CUIT {{comprador_cuit}}, Estado civil {{comprador_ecivil}}, con domicilio en {{comprador_domicilio}}, quien comparece en calidad de comprador y entrega la suma de dólares billetes estadounidenses {{refuerzo_letras}} (USD {{refuerzo_num}}) para aplicar a la compra de un inmueble situado en la calle {{inmueble_dir}} CABA/PBA por el precio total y convenido de dólares billetes estadounidenses {{refuerzo_letras}} (USD {{refuerzo_num}}).\n\nDicha suma se recibe como Refuerzo de la Reserva de Compra, firmada el día {{reserva_fecha}}, y ACEPTADA (CONFORMADA) por el Vendedor con fecha {{aceptacion_fecha}} del inmueble mencionado, manteniéndose todas sus cláusulas y condiciones. La escritura traslativa de dominio se firmará ante el/la escribano/o a designar por la parte compradora, en una entidad bancaria u oficina a designarse por el vendedor.\n\nA los {{fecha_dia}} días del mes de {{fecha_mes}} de {{fecha_anio}} en CABA, se firman 2 ejemplares del mismo tenor y efecto.`
  },

  // ──────────────────────────────────────────────────────────────
  // CLAUSULAS ACCESORIAS
  // ──────────────────────────────────────────────────────────────
  'acc_hipoteca_cancelada': {
    titulo: 'AC - HIPOTECA CANCELADA',
    texto: `Se deja constancia que el presente inmueble será transmitido libre de todo gravamen, habiéndose cancelado íntegramente la hipoteca que gravaba el mismo en el día de la fecha por escritura pública Nro. {{escritura_hipoteca_nro}} por ante el Escribano {{escribano_hipoteca_nombre}} con Matricula {{escribano_hipoteca_matricula}} de la cual se entrega copia.`
  },
  'acc_hipoteca_cancelar': {
    titulo: 'AC - HIPOTECA PENDIENTE DE CANCELACIÓN',
    texto: `Se deja constancia de que para el momento de firmarse la escritura traslativa de dominio, las hipotecas que gravan el inmueble estarán canceladas. Las partes declaran que esta es condición esencial y fundamental para la compra del inmueble. En caso de que las hipotecas no se encuentren canceladas e inscriptas sus cancelaciones en el registro de la propiedad inmueble, se considerará que la parte vendedora incumplió con una de las obligaciones a su cargo, en consecuencia será de aplicación la cláusula de incumplimiento del presente contrato.`
  },
  'acc_usufructo': {
    titulo: 'AC - USUFRUCTO VITALICIO',
    texto: `Conforme surge del informe de dominio referenciado vide supra pesa sobre el inmueble que se vende por el presente la constitución de un usufructo vitalicio a favor del señor {{usufructuario_nombre}}, titular del D.N.I. nº {{usufructuario_dni}} con domicilio en {{usufructuario_domicilio}}. Por ello, presente el usufructuario en este acto ratifica su total voluntad de proceder al levantamiento del beneficio expresado del cual es titular y se compromete a comparecer al acto de la firma de la escritura traslativa de dominio con el objeto de hacer efectiva la desafectación en tratamiento, firmando este instrumento al pie a tales efectos.`
  },
  'acc_venta_con_renta': {
    titulo: 'AC - VENTA CON RENTA (CESIÓN LOCACIÓN)',
    texto: `Existiendo un contrato de locación suscripto en fecha {{locacion_fecha}} entre el vendedor y el señor {{locatario_nombre}}, titular del D.N.I. nº {{locatario_dni}} con domicilio en {{locatario_domicilio}}, las partes suscribientes (locador y locatario) de común acuerdo deciden ceder al aquí comprador los derechos locativos del acuerdo de marras, tomando aquél el lugar del locador y asumiendo la totalidad de los derechos y obligaciones que en tal carácter le competen. El comprador recibe en este acto el contrato de locación original y acepta la cesión comentada ratificando su contenido. A tales fines, comprador, vendedor y locatario han suscripto también en la fecha el anexo nº 1 al contrato de locación en estudio que da cuenta del alcance de esta cláusula conjuntamente con el señor {{fiador_nombre}}, titular del D.N.I. nº {{fiador_dni}}, con domicilio en {{fiador_domicilio}}, quien lo hace en su carácter de fiador. Firmando todos los aquí nombrados al pie en prueba de plena conformidad.`
  },
  'acc_locacion_con_venta': {
    titulo: 'AC - LOCACIÓN CON VENTA',
    texto: `Las partes suscribientes (locador y locatario) de común acuerdo deciden respetar el derecho del locador a enajenar la propiedad locada, asumiendo el locatario la responsabilidad de acceder a las muestras de la propiedad de potenciales compradores y tomando conocimiento de la posible transacción. Queda establecido entre ambas partes, que de transmitirse el dominio de la propiedad que por este acto se renta, el vendedor/locador cederá al futuro comprador, en caso de realizarse la operación de compra venta, los derechos locativos del presente acuerdo de marras, tomando aquél el lugar del locador y asumiendo la totalidad de los derechos y obligaciones que en tal carácter le competen.`
  },
  'acc_asentimiento_conyugal': {
    titulo: 'AC - ASENTIMIENTO CONYUGAL',
    texto: `De acuerdo a que la titularidad del bien raíz a transmitir, ha sido adquirido por herencia y es privativo de las personas que lo reciben, por lo tanto, no alcanza los términos de lo establecido por el art. 1277 del Código Civil.`
  },
  'acc_acuerdo_partes': {
    titulo: 'AC - ACUERDO ENTRE PARTES',
    texto: `De común acuerdo las partes contratantes eximen de toda responsabilidad a las vendedoras por la falta de modificación del reglamento de copropiedad y administración y por la eventual diferencia que pudiera existir en la cantidad de metros semi-cubiertos consignados en el plano de mensura y deslinde y del título de propiedad antecedente. Esta clausula será expresamente incluida en la escritura traslativa de dominio a celebrarse, formando parte esencial de la misma.`
  },
  'acc_representacion': {
    titulo: 'AC - REPRESENTACIÓN',
    texto: `El vendedor, {{vendedor_nombre}}, en calidad de mandatario, representa a doña {{representada_nombre}}, titular del Documento Nacional de Identidad número {{representada_dni}} bajo folio de actuación notarial números {{actuacion_notarial_nro}} expedido por la notaria {{notaria_nombre}}.`
  },
  'acc_comodato_uso_gratuito': {
    titulo: 'AC - COMODATO DE USO GRATUITO',
    texto: `Las partes acuerdan que en el acto de la firma de la escritura traslativa de dominio, firmarán entre sí, un contrato de comodato en cual la vendedora tomará la tenencia en forma gratuita por 72 hs a partir de la firma de la escritura traslativa de dominio del bien raíz que por este acto de vende, con el fin de poder realizar la mudanza al bien inmueble que a su vez esta última compra, en el cual firmará la escritura traslativa de dominio y tendrá la posesión real, total y definitiva en el plazo ut supra mencionado. Por tal motivo y para agilizar el bueno curso de los plazos a fin de realizar dicha operación, las partes pactan entre sí firmar en forma privada el mencionado contrato, sometiéndose a las penalidades que del mismo se desprenden en caso de incumplimiento por alguna de ellas.`
  },
  'acc_levantamiento_inhibicion': {
    titulo: 'AC - LEVANTAMIENTO DE INHIBICIÓN',
    texto: `Las partes toman conocimiento del pedido de levantamiento de la inhibición general de bienes en relación a los autos caratulados "{{autos_caratula}}", ordenada en autos y anotada con fecha {{inhibicion_fecha}} bajo el N° {{inhibicion_numero}}, del cual se adjunta copia del mismo, y al momento de la escritura traslativa de dominio la parte vendedora se compromete a presentar el informe de inhibición correspondiente donde no consten anotaciones de ninguna índole por parte de la mencionada ut supra.`
  },
  'acc_compra_bien_propio_sucesion': {
    titulo: 'AC - COMPRA CON DINERO DE SUCESIÓN',
    texto: `El comprador deja expresamente establecido que adquiere en su totalidad el bien objeto de este contrato, con dinero recibido de la sucesión {{sucesion_caratula}} que se tramitó ante el Juzgado {{juzgado_sucesion}}.`
  },
  'acc_compra_bien_propio_venta': {
    titulo: 'AC - COMPRA CON DINERO DE VENTA DE BIEN PROPIO',
    texto: `El comprador deja expresamente establecido que adquiere en su totalidad el bien objeto de este contrato con dinero obtenido de la venta del {{bien_vendido_descripcion}}, cuya propiedad adquirió siendo de estado civil soltero según escritura suscripta el {{escritura_adquisicion_fecha}} ante el Escribano {{escribano_adquisicion_nombre}}, titular del Registro Nro {{registro_adquisicion_nro}} de {{registro_adquisicion_ciudad}}.`
  },
  'acc_venta_autorizacion_judicial': {
    titulo: 'AC - VENTA CON AUTORIZACIÓN JUDICIAL',
    texto: `El vendedor manifiesta que el consentimiento conyugal ha sido sustituido por la autorización otorgada por el Juez {{juez_nombre}}, a cargo del Juzgado Nacional de Primera Instancia en lo Civil Nro {{juzgado_civil_nro}}, Secretaría {{secretaria_nro}} de acuerdo al auto de fecha {{auto_fecha}}, cuya copia debidamente certificada se adjunta al presente instrumento, formando parte del mismo.`
  },
  'acc_venta_inhabilitado': {
    titulo: 'AC - VENTA POR INHABILITADO JUDICIALMENTE',
    texto: `Se deja expresa constancia de que el vendedor se encuentra comprendido dentro del art. 48 del Código Civil y Comercial, por lo que es asistido en este acto por su apoyo {{apoyo_nombre}}, DNI {{apoyo_dni}}, domiciliado en {{apoyo_domicilio}}, quien acredita el carácter invocado con testimonio de la sentencia recaída en el juicio por inhabilitación del vendedor, que se tramitó ante el Juzgado {{juzgado_inhabilitacion_nro}} a cargo del Dr. {{juez_inhabilitacion}}, Secretaría a cargo del Dr. {{secretario_inhabilitacion}}, expresando el apoyo su conformidad con la venta realizada, quien firma en prueba de ello al final del presente contrato.`
  },
  'acc_venta_herederos': {
    titulo: 'AC - VENTA POR HEREDEROS',
    texto: `Los vendedores manifiestan que esta venta la realizan en el carácter de herederos universales de {{causante_nombre}}, cuya sucesión abintestato se tramitó ante el Juzgado {{juzgado_sucesion_nro}} a cargo del Dr. {{juez_sucesion}}, Secretaría a cargo del Dr. {{secretario_sucesion}}, habiéndose dictado la correspondiente declaratoria de herederos, cuya copia se acompaña, la que fue inscripta en el Registro de la Propiedad Inmueble el {{inscripcion_declaratoria_fecha}}.`
  },
  'acc_compra_comision': {
    titulo: 'AC - COMPRA EN COMISIÓN',
    texto: `El comprador adquiere el inmueble "en comisión", obligándose a la fecha de la escrituración, a identificar a su comitente, de lo contrario se lo considerará comprador definitivo. El comprador manifiesta que realiza esta operación "en comisión", no pudiendo el vendedor oponerse a que se escriture a nombre del que en definitiva resulte el comprador.`
  },
  'acc_venta_menores': {
    titulo: 'AC - VENTA DE BIENES DE MENORES',
    texto: `Siendo menor de edad el titular de dominio del inmueble que por este acto se vende, comparecen {{padre_nombre}}, argentino, mayor de edad, con DNI {{padre_dni}}, domiciliado en {{padre_domicilio}} y {{madre_nombre}}, argentina, mayor de edad, con DNI {{madre_dni}}, domiciliada en {{madre_domicilio}}, en su carácter de padres del menor citado, y en nombre y representación de su hijo exhiben el testimonio de la autorización judicial dispuesta por el señor juez {{juez_menores}}, a cargo del Juzgado {{juzgado_menores_nro}}, Secretaría {{secretaria_menores}} a los efectos de enajenar el inmueble en cuestión, cuya copia se adjunta.`
  },
  'acc_inmueble_ocupado': {
    titulo: 'AC - INMUEBLE OCUPADO POR INQUILINO',
    texto: `Se deja constancia de que la propiedad objeto de esta compraventa se encuentra alquilada al señor {{inquilino_nombre}}, según contrato de locación de fecha {{locacion_contrato_fecha}}, cuyo vencimiento se operará el día {{locacion_vencimiento_dia}} de {{locacion_vencimiento_mes}} del año {{locacion_vencimiento_anio}}, cuya copia se acompaña al presente y cuyo ejemplar original correspondiente al locador le será entregado al comprador en el acto de la posesión y escrituración. Asimismo, el vendedor se obliga a notificar en forma fehaciente al locatario la venta del inmueble.`
  },
  'acc_boleto_financiacion': {
    titulo: 'AC - BOLETO CON FINANCIACIÓN',
    texto: `Las cuotas generarán, en caso de retraso en el pago, un interés punitorio del 2% mensual, más un interés moratorio del 2% mensual, sin necesidad de interpelación de ningún tipo, puesto que se pacta la mora automática. El vendedor podrá negarse a recibir el pago de la cuota atrasada, si con la misma no son satisfechos los intereses pactados en forma integral.\n\nPor la falta de pago de dos mensualidades consecutivas o alternadas, importará la caída de todos los plazos concedidos, entendiéndose por vencido todo el saldo restante y pudiendo proceder a su ejecución por vía ejecutiva. En virtud de ello las partes reconocen al presente acuerdo el carácter de título ejecutivo en los términos del art. 523 del código de procedimientos civil y comercial.`
  }
};

console.log(`✅ Archivo: templates-completos.js`);
console.log(`   📋 TEMPLATES_COMPLETOS: ${TEMPLATES_COMPLETOS.length} templates`);
console.log(`   📜 CLAUSULAS_COMPLETAS: ${Object.keys(CLAUSULAS_COMPLETAS).length} cláusulas`);
