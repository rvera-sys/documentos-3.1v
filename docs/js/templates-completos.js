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
    id: 'r_escritura', nombre: 'Reserva de compra', icon: '🏠', categoria: 'compra', descripcion: 'Escritura directa',
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
    id: 'r_temp', nombre: 'Reserva temporario', icon: '⏱️', categoria: 'alquiler', descripcion: 'Alquiler temporario',
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
    id: 'aut_venta', nombre: 'Autorización de venta', icon: '✍️', categoria: 'autorizacion', descripcion: 'Exclusiva',
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
    id: 'aut_locacion', nombre: 'Autorización de alquiler', icon: '📋', categoria: 'autorizacion', descripcion: 'Exclusiva',
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
    id: 'aut_temp_excl', nombre: 'Autorización temporario', icon: '🌟', categoria: 'autorizacion', descripcion: 'Exclusiva',
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
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Ambientes, m², etc.', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'monto_alquiler', label: 'Monto mensual del alquiler <span class="req">*</span>', placeholder: 'Ej: $350.000' },
        { id: 'ajuste_indice', label: 'Índice de ajuste', type: 'select', options: ['IPC','CER','Índice de Remuneración Vespignani','Conforme a Ley 27.551','Otro'] },
        { id: 'periodo_ajuste', label: 'Período de ajuste', type: 'select', options: ['Cada 3 meses','Cada 6 meses','Anual'] },
        { id: 'garantia_tipo', label: 'Tipo de garantía <span class="req">*</span>', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Cesión de crédito','A convenir'] },
        { id: 'garantia_monto', label: 'Monto / detalle de la garantía', placeholder: 'Ej: $1.400.000 (4 meses)' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de inicio <span class="req">*</span>', type: 'date' },
        { id: 'duracion_meses', label: 'Duración (meses) <span class="req">*</span>', placeholder: 'Ej: 36' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
        { id: 'anticipo_meses', label: 'Anticipo de meses', placeholder: 'Ej: 1' },
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
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Ambientes, m², etc.', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'monto_alquiler', label: 'Monto mensual en USD <span class="req">*</span>', placeholder: 'Ej: USD 1.200' },
        { id: 'cotizacion_dolar', label: 'Cotización del dólar de referencia', type: 'select', options: ['Dólar oficial','Dólar tarjeta','Dólar blue','Dólar CCL','A convenir'] },
        { id: 'ajuste_indice', label: 'Índice de ajuste', type: 'select', options: ['IPC','CER','Índice de Remuneración Vespignani','Conforme a Ley 27.551','Otro'] },
        { id: 'periodo_ajuste', label: 'Período de ajuste', type: 'select', options: ['Cada 3 meses','Cada 6 meses','Anual'] },
        { id: 'garantia_tipo', label: 'Tipo de garantía <span class="req">*</span>', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Cesión de crédito','A convenir'] },
        { id: 'garantia_monto', label: 'Monto / detalle de la garantía', placeholder: 'Ej: USD 4.800 (4 meses)' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de inicio <span class="req">*</span>', type: 'date' },
        { id: 'duracion_meses', label: 'Duración (meses) <span class="req">*</span>', placeholder: 'Ej: 36' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
        { id: 'anticipo_meses', label: 'Anticipo de meses', placeholder: 'Ej: 1' },
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
        { id: 'locatario_dni', label: 'DNI / CUIT', placeholder: '00.000.000' },
        { id: 'locatario_ecivil', label: 'Estado civil', type: 'select', options: ['','Soltero/a','Casado/a','Divorciado/a','Viudo/a','Unión convivencial'] },
        { id: 'locatario_nac', label: 'Nacionalidad', placeholder: 'Argentino/a' },
        { id: 'locatario_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'locatario_domicilio', label: 'Domicilio real <span class="req">*</span>', placeholder: 'Calle, número, ciudad', full: true },
        { id: 'locatario_email', label: 'Email', placeholder: 'email@ejemplo.com' },
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., barrio, ciudad', full: true },
        { id: 'inmueble_matricula', label: 'Matrícula (FR/FRE)', placeholder: 'Ej: FR-12-34567' },
        { id: 'inmueble_desc', label: 'Descripción del inmueble', placeholder: 'Ambientes, m², etc.', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'monto_alquiler', label: 'Monto mensual del alquiler <span class="req">*</span>', placeholder: 'Ej: $600.000' },
        { id: 'ajuste_indice', label: 'Índice de ajuste', type: 'select', options: ['IPC','CER','Índice de Remuneración Vespignani','Conforme a Ley 27.551','Otro'] },
        { id: 'periodo_ajuste', label: 'Período de ajuste', type: 'select', options: ['Cada 3 meses','Cada 6 meses','Anual'] },
        { id: 'garantia_tipo', label: 'Tipo de garantía <span class="req">*</span>', type: 'select', options: ['Título de propiedad','Seguro de caución','Garantía personal','Cesión de crédito','A convenir'] },
        { id: 'garantia_monto', label: 'Monto / detalle de la garantía', placeholder: 'Ej: $2.400.000 (4 meses)' },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de inicio <span class="req">*</span>', type: 'date' },
        { id: 'duracion_meses', label: 'Duración (meses) <span class="req">*</span>', placeholder: 'Ej: 36' },
        { id: 'fecha_fin', label: 'Fecha de finalización', type: 'date' },
        { id: 'anticipo_meses', label: 'Anticipo de meses', placeholder: 'Ej: 1' },
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
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., localidad', full: true },
        { id: 'inmueble_desc', label: 'Descripción y comodidades', placeholder: 'Ambientes, m², equipamiento', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'precio_noche', label: 'Precio por noche <span class="req">*</span>', placeholder: 'Ej: $45.000' },
        { id: 'precio_semana', label: 'Precio por semana', placeholder: 'Ej: $270.000' },
        { id: 'precio_mes', label: 'Precio por mes', placeholder: 'Ej: $850.000' },
        { id: 'servicios_incluidos', label: 'Servicios incluidos', type: 'select', options: ['Wifi, agua, luz, gas','Wifi, agua, luz, gas, limpieza','A convenir'] },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de llegada <span class="req">*</span>', type: 'date' },
        { id: 'fecha_fin', label: 'Fecha de salida <span class="req">*</span>', type: 'date' },
        { id: 'hora_llegada', label: 'Hora de llegada', placeholder: 'Ej: 14:00' },
        { id: 'hora_salida', label: 'Hora de salida', placeholder: 'Ej: 10:00' },
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
      ]},
      { title: '📍 Inmueble', fields: [
        { id: 'inmueble_dir', label: 'Dirección completa <span class="req">*</span>', placeholder: 'Calle, número, piso, dpto., localidad', full: true },
        { id: 'inmueble_desc', label: 'Descripción y comodidades', placeholder: 'Ambientes, m², equipamiento', full: true },
      ]},
      { title: '💰 Condiciones económicas', fields: [
        { id: 'precio_noche', label: 'Precio por noche <span class="req">*</span>', placeholder: 'Ej: $45.000' },
        { id: 'precio_semana', label: 'Precio por semana', placeholder: 'Ej: $270.000' },
        { id: 'precio_mes', label: 'Precio por mes', placeholder: 'Ej: $850.000' },
        { id: 'servicios_excluidos', label: 'Servicios excluidos (detalle)', placeholder: 'Ej: Electricidad y gas a cargo del huésped', full: true },
      ]},
      { title: '📅 Plazos', fields: [
        { id: 'fecha_inicio', label: 'Fecha de llegada <span class="req">*</span>', type: 'date' },
        { id: 'fecha_fin', label: 'Fecha de salida <span class="req">*</span>', type: 'date' },
        { id: 'hora_llegada', label: 'Hora de llegada', placeholder: 'Ej: 14:00' },
        { id: 'hora_salida', label: 'Hora de salida', placeholder: 'Ej: 10:00' },
      ]},
      { title: '🧑‍💼 Agente', fields: [
        { id: 'agente', label: 'Nombre del agente RE/MAX CREA', placeholder: 'Nombre completo', full: true },
      ]},
    ],
    clausulas_default: ['cts_encabezado','cts_objeto','cts_plazo','cts_precio','cts_servicios_excl','cts_honorarios','cts_proteccion','cts_jurisdiccion','cts_firma']
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
    texto: `Que el presente contrato de locación temporaria se celebrará por el término de {{duracion_noches}} noches, computados a partir del día {{fecha_inicio}} (check-in a las {{hora_checkin}}) hasta el día {{fecha_fin}} (check-out a las {{hora_checkout}}).`
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
    texto: `Que el presente contrato de locación temporaria se celebrará por el término de {{duracion_noches}} noches, computados a partir del día {{fecha_inicio}} (check-in a las {{hora_checkin}}) hasta el día {{fecha_fin}} (check-out a las {{hora_checkout}}).`
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
    texto: `Que el presente contrato de locación temporaria se celebrará por el término de {{duracion_noches}} noches, computados a partir del día {{fecha_inicio}} (check-in a las {{hora_checkin}}) hasta el día {{fecha_fin}} (check-out a las {{hora_checkout}}).`
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
  }
};

console.log(`✅ Archivo: templates-completos.js`);
console.log(`   📋 TEMPLATES_COMPLETOS: ${TEMPLATES_COMPLETOS.length} templates`);
console.log(`   📜 CLAUSULAS_COMPLETAS: ${Object.keys(CLAUSULAS_COMPLETAS).length} cláusulas`);
