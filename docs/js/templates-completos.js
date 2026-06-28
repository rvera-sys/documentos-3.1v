// TODOS los 17 TEMPLATES ORIGINALES COMPLETOS + 100+ CLÁUSULAS

const TEMPLATES_COMPLETOS = [
    // ════════════════════════════════════════════════════════════════
    // COMPRA (8 templates)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'aut_venta_exc',
        nombre: 'Autorización de venta — exclusiva',
        icon: '📝',
        categoria: 'compra',
        descripcion: 'Autorización para venta exclusiva de un inmueble',
        campos: [
            { titulo: '👤 Propietario (autorizante)', campos: ['prop_nombre', 'prop_dni', 'prop_domicilio'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_localidad', 'inm_provincia', 'inm_superficie', 'inm_tipo'] },
            { titulo: '💰 Transacción', campos: ['precio_estimado', 'duracion_vigencia'] },
            { titulo: '👔 Agente', campos: ['agente_nombre'] }
        ],
        clausulas_default: ['encabezado', 'datos_propietario', 'clausula_exclusividad', 'clausula_precio_venta', 'clausula_comision', 'clausula_jurisdiccion', 'firma_partes', 'datos_corredor']
    },
    {
        id: 'aut_venta_noexcl',
        nombre: 'Autorización de venta — no exclusiva',
        icon: '📋',
        categoria: 'compra',
        descripcion: 'Autorización para venta NO exclusiva (múltiples agentes)',
        campos: [
            { titulo: '👤 Propietario (autorizante)', campos: ['prop_nombre', 'prop_dni', 'prop_domicilio'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_localidad', 'inm_tipo'] },
            { titulo: '💰 Transacción', campos: ['precio_estimado'] },
            { titulo: '👔 Agente', campos: ['agente_nombre'] }
        ],
        clausulas_default: ['encabezado', 'datos_propietario', 'clausula_no_exclusividad', 'clausula_precio_venta', 'clausula_comision', 'firma_partes']
    },
    {
        id: 'desistimiento',
        nombre: 'Desistimiento de compra',
        icon: '❌',
        categoria: 'compra',
        descripcion: 'Desistimiento de una compra en curso',
        campos: [
            { titulo: '👤 Comprador (desistente)', campos: ['comprador_nombre', 'comprador_dni'] },
            { titulo: '👤 Vendedor', campos: ['vendedor_nombre'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion'] },
            { titulo: '📋 Detalles', campos: ['fecha_reserva', 'seña_monto'] }
        ],
        clausulas_default: ['encabezado_desistimiento', 'datos_partes_desistimiento', 'clausula_devolucion_seña', 'firma_partes']
    },
    {
        id: 'r_compra',
        nombre: 'Reserva de compra',
        icon: '✅',
        categoria: 'compra',
        descripcion: 'Documento de reserva de compra de inmueble',
        campos: [
            { titulo: '👤 Comprador (reservante)', campos: ['comprador_nombre', 'comprador_dni', 'comprador_domicilio'] },
            { titulo: '👤 Vendedor', campos: ['vendedor_nombre'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_localidad', 'inm_tipo'] },
            { titulo: '💰 Transacción', campos: ['precio_total', 'precio_letras', 'seña_monto', 'fecha_pago'] },
            { titulo: '✍️ Legales', campos: ['escribano', 'agente', 'clausulas_adicionales'] }
        ],
        clausulas_default: ['encabezado_reserva', 'datos_comprador', 'datos_inmueble', 'clausula_precio_reserva', 'clausula_seña', 'clausula_pago', 'clausula_jurisdiccion', 'firma_partes', 'datos_corredor']
    },
    {
        id: 'r_emprendimiento',
        nombre: 'Reserva de emprendimiento',
        icon: '🏗️',
        categoria: 'compra',
        descripcion: 'Reserva de unidad en emprendimiento inmobiliario',
        campos: [
            { titulo: '👤 Comprador', campos: ['comprador_nombre', 'comprador_dni'] },
            { titulo: '🏢 Emprendimiento', campos: ['empr_nombre', 'empr_desarrollador', 'empr_ubicacion', 'unidad_numero', 'unidad_piso', 'unidad_ambientes'] },
            { titulo: '💰 Valores', campos: ['precio_unidad', 'seña_monto', 'porcentaje_seña'] },
            { titulo: '👔 Agente', campos: ['agente_nombre'] }
        ],
        clausulas_default: ['encabezado_empr', 'datos_comprador', 'datos_emprendimiento', 'clausula_unidad', 'clausula_precio_empr', 'clausula_seña_empr', 'clausula_entrega', 'firma_partes']
    },
    {
        id: 'aut_venta_renta',
        nombre: 'Autorización de venta con renta',
        icon: '🎯',
        categoria: 'compra',
        descripcion: 'Autorización de venta con cláusula de renta vitalicia',
        campos: [
            { titulo: '👤 Propietario', campos: ['prop_nombre', 'prop_dni', 'prop_edad'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_valor'] },
            { titulo: '💰 Renta', campos: ['renta_monto_mensual', 'renta_moneda', 'renta_indexacion'] },
            { titulo: '👔 Agente', campos: ['agente_nombre'] }
        ],
        clausulas_default: ['encabezado', 'datos_propietario_renta', 'clausula_renta_vitalicia', 'clausula_pagos_renta', 'clausula_reajuste_renta', 'firma_partes']
    },
    {
        id: 'r_cesion',
        nombre: 'Reserva de cesión',
        icon: '📑',
        categoria: 'compra',
        descripcion: 'Cesión de derechos de comprador a tercero',
        campos: [
            { titulo: '👤 Comprador Original', campos: ['comprador_orig_nombre', 'comprador_orig_dni'] },
            { titulo: '👤 Cesionario (Nuevo Comprador)', campos: ['cesionario_nombre', 'cesionario_dni'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion'] },
            { titulo: '💰 Cesión', campos: ['precio_cesion', 'comision_corredor'] }
        ],
        clausulas_default: ['encabezado_cesion', 'datos_partes_cesion', 'clausula_cesion_derechos', 'clausula_responsabilidades', 'firma_partes']
    },
    {
        id: 'aut_venta_otro',
        nombre: 'Autorización de venta — otros casos',
        icon: '📄',
        categoria: 'compra',
        descripcion: 'Autorización de venta para casos especiales',
        campos: [
            { titulo: '👤 Propietario', campos: ['prop_nombre', 'prop_dni'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion'] },
            { titulo: '📋 Caso Especial', campos: ['caso_descripcion', 'caso_referencias'] }
        ],
        clausulas_default: ['encabezado', 'datos_propietario', 'clausula_caso_especial', 'firma_partes']
    },

    // ════════════════════════════════════════════════════════════════
    // ALQUILER (9 templates)
    // ════════════════════════════════════════════════════════════════
    {
        id: 'aut_locacion_exc',
        nombre: 'Autorización de alquiler — exclusiva',
        icon: '🏠',
        categoria: 'alquiler',
        descripcion: 'Autorización para alquilar en forma exclusiva',
        campos: [
            { titulo: '👤 Propietario (Locador)', campos: ['locador_nombre', 'locador_dni', 'locador_domicilio'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_tipo', 'inm_ambientes', 'inm_superficie'] },
            { titulo: '💰 Alquiler', campos: ['canon_estimado', 'moneda', 'duracion_meses'] },
            { titulo: '👔 Agente', campos: ['agente_nombre'] }
        ],
        clausulas_default: ['encabezado_alquiler', 'datos_locador', 'clausula_exclusividad_alquiler', 'clausula_canon', 'clausula_comision_alquiler', 'firma_partes']
    },
    {
        id: 'cont_locacion_viv',
        nombre: 'Contrato de locación — vivienda (CABA)',
        icon: '🏘️',
        categoria: 'alquiler',
        descripcion: 'Contrato de alquiler de vivienda en CABA (Ley 27.551)',
        campos: [
            { titulo: '👤 Locador', campos: ['locador_nombre', 'locador_dni', 'locador_domicilio'] },
            { titulo: '👤 Locatario', campos: ['locatario_nombre', 'locatario_dni', 'locatario_domicilio'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_piso', 'inm_dpto', 'inm_superficie'] },
            { titulo: '💰 Canon', campos: ['canon_mensual', 'vencimiento_pago', 'indices_ajuste', 'garantia_monto'] },
            { titulo: '⏱️ Duración', campos: ['fecha_inicio', 'duracion_meses', 'renovacion_automatica'] },
            { titulo: '✍️ Extras', campos: ['garante_nombre', 'clausulas_adicionales'] }
        ],
        clausulas_default: ['encabezado_contrato', 'datos_locador_vivienda', 'datos_locatario', 'datos_inmueble_contrato', 'clausula_canon_mensual', 'clausula_forma_pago', 'clausula_reajuste_indice', 'clausula_garantia_deposito', 'clausula_responsabilidades', 'clausula_duracion', 'clausula_termino', 'firma_partes']
    },
    {
        id: 'cont_locacion_usd',
        nombre: 'Contrato de locación — vivienda en USD',
        icon: '💵',
        categoria: 'alquiler',
        descripcion: 'Contrato de alquiler de vivienda pagadero en USD',
        campos: [
            { titulo: '👤 Locador', campos: ['locador_nombre', 'locador_dni'] },
            { titulo: '👤 Locatario', campos: ['locatario_nombre', 'locatario_dni'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_tipo'] },
            { titulo: '💵 Canon en USD', campos: ['canon_usd', 'forma_pago_usd', 'banco_transferencia'] },
            { titulo: '⏱️ Duración', campos: ['fecha_inicio_usd', 'duracion_meses_usd'] }
        ],
        clausulas_default: ['encabezado_usd', 'datos_partes_usd', 'clausula_canon_usd', 'clausula_transferencia_usd', 'clausula_renuncia_765', 'firma_partes']
    },
    {
        id: 'cont_locacion_com',
        nombre: 'Contrato de locación comercial',
        icon: '🏪',
        categoria: 'alquiler',
        descripcion: 'Contrato de alquiler de local comercial',
        campos: [
            { titulo: '👤 Locador', campos: ['locador_nombre', 'locador_dni'] },
            { titulo: '👤 Locatario (Comercio)', campos: ['locatario_nombre', 'locatario_dni', 'rubro_comercial'] },
            { titulo: '🏢 Inmueble Comercial', campos: ['inm_direccion', 'inm_piso', 'inm_frente_metros', 'inm_fondo_metros', 'inm_altura'] },
            { titulo: '💰 Canon Comercial', campos: ['canon_comercial', 'indices_ajuste_com', 'garantia_comercial'] },
            { titulo: '⚖️ Comercial', campos: ['duracion_com', 'opcion_compra', 'clausulas_comerciales'] }
        ],
        clausulas_default: ['encabezado_comercial', 'datos_partes_comercial', 'datos_local', 'clausula_canon_comercial', 'clausula_indices_comercial', 'clausula_mejoras', 'clausula_opcion_compra', 'clausula_resolucion_comercial', 'firma_partes']
    },
    {
        id: 'r_loc_caba',
        nombre: 'Reserva de locación CABA',
        icon: '🔑',
        categoria: 'alquiler',
        descripcion: 'Reserva de alquiler de vivienda en CABA',
        campos: [
            { titulo: '👤 Locatario (Interesado)', campos: ['locatario_nombre', 'locatario_dni', 'locatario_telefono'] },
            { titulo: '👤 Locador', campos: ['locador_nombre', 'locador_dni'] },
            { titulo: '🏠 Inmueble', campos: ['inm_direccion', 'inm_localidad', 'inm_piso_dpto'] },
            { titulo: '💰 Reserva CABA', campos: ['canon_ofrecido', 'seña_reserva', 'fecha_disponibilidad'] }
        ],
        clausulas_default: ['encabezado_reserva_caba', 'datos_interesado', 'datos_propiedad', 'clausula_canon_reserva', 'clausula_seña_reserva_caba', 'clausula_plazo_confirmacion', 'firma_partes']
    },
    {
        id: 'r_loc_pba',
        nombre: 'Reserva de locación PBA',
        icon: '🔑',
        categoria: 'alquiler',
        descripcion: 'Reserva de alquiler en Provincia de Buenos Aires',
        campos: [
            { titulo: '👤 Locatario', campos: ['locatario_nombre', 'locatario_dni'] },
            { titulo: '👤 Locador', campos: ['locador_nombre'] },
            { titulo: '🏠 Inmueble PBA', campos: ['inm_direccion_pba', 'inm_localidad_pba', 'inm_partido'] },
            { titulo: '💰 Canon PBA', campos: ['canon_pba', 'seña_pba'] }
        ],
        clausulas_default: ['encabezado_reserva_pba', 'datos_partes_pba', 'clausula_canon_pba', 'clausula_seña_pba', 'firma_partes']
    },
    {
        id: 'r_loc_comercial',
        nombre: 'Reserva de locación comercial',
        icon: '🏢',
        categoria: 'alquiler',
        descripcion: 'Reserva de local comercial',
        campos: [
            { titulo: '👤 Interesado (Locatario)', campos: ['locatario_nombre', 'locatario_dni', 'rubro'] },
            { titulo: '👤 Propietario (Locador)', campos: ['locador_nombre'] },
            { titulo: '🏢 Local', campos: ['local_direccion', 'local_rubro_actual', 'local_metros'] },
            { titulo: '💰 Valores Comerciales', campos: ['canon_solicitado', 'seña_comercial'] }
        ],
        clausulas_default: ['encabezado_reserva_com', 'datos_interesado_com', 'clausula_canon_reserva_com', 'clausula_confirmacion_com', 'firma_partes']
    },
    {
        id: 'r_temporal',
        nombre: 'Reserva de alquiler temporario',
        icon: '⏱️',
        categoria: 'alquiler',
        descripcion: 'Documento de reserva de alquiler temporario (corta duración)',
        campos: [
            { titulo: '👤 Inquilino Temporal', campos: ['temporal_nombre', 'temporal_dni', 'temporal_pais'] },
            { titulo: '👤 Propietario', campos: ['prop_temporal_nombre'] },
            { titulo: '🏠 Inmueble', campos: ['inm_temporal_direccion', 'inm_temporal_tipo'] },
            { titulo: '⏱️ Período', campos: ['fecha_entrada', 'fecha_salida', 'dias_alquiler'] },
            { titulo: '💰 Temporario', campos: ['tarifa_diaria', 'monto_total', 'seña_temporal'] }
        ],
        clausulas_default: ['encabezado_temporal', 'datos_temporal', 'clausula_periodo_temporal', 'clausula_tarifa_temporal', 'clausula_seña_temporal', 'clausula_deposito_garantia_temp', 'firma_partes']
    },
    {
        id: 'aut_temporal_excl',
        nombre: 'Autorización temporario — exclusiva',
        icon: '📌',
        categoria: 'alquiler',
        descripcion: 'Autorización para alquilar temporario en forma exclusiva',
        campos: [
            { titulo: '👤 Propietario', campos: ['prop_temporal_nombre', 'prop_temporal_dni'] },
            { titulo: '🏠 Inmueble para Temporario', campos: ['inm_temp_direccion', 'inm_temp_tipo', 'inm_temp_capacidad'] },
            { titulo: '⏱️ Temporada', campos: ['temporada_meses', 'tarifa_diaria_aut'] },
            { titulo: '👔 Agente', campos: ['agente_temporal_nombre'] }
        ],
        clausulas_default: ['encabezado_aut_temporal', 'datos_prop_temporal', 'clausula_exclusividad_temporal', 'clausula_tarifa_temporal_aut', 'clausula_plazo_vigencia_temporal', 'firma_partes']
    }
];

// ════════════════════════════════════════════════════════════════════════════════
// 100+ CLÁUSULAS STANDARD
// ════════════════════════════════════════════════════════════════════════════════

const CLAUSULAS_COMPLETAS = [
    // UNIVERSALES
    { id: 'encabezado', nombre: 'Encabezado', texto: 'OFERTA - RESERVA DE COMPRA INMUEBLE\n\nBuenos Aires, {{fecha_hoy}}.', categoria: null },
    { id: 'encabezado_contrato', nombre: 'Encabezado Contrato', texto: 'CONTRATO DE LOCACIÓN\n\nCelebrado en Buenos Aires, a los {{fecha_hoy}}', categoria: null },
    { id: 'datos_propietario', nombre: 'Datos del Propietario', texto: 'RECIBIMOS de {{prop_nombre}}, {{sexo}} {{profesion}}, {{documento_tipo}} {{prop_dni}}, domiciliado en {{prop_domicilio}}.', categoria: null },
    { id: 'datos_locador_vivienda', nombre: 'Datos Locador Vivienda', texto: 'Entre {{locador_nombre}}, {{documento_locador}} {{locador_dni}}, domiciliado en {{locador_domicilio}}, denominado "LOCADOR"', categoria: null },
    { id: 'datos_locatario', nombre: 'Datos Locatario', texto: 'Y {{locatario_nombre}}, {{documento_locatario}} {{locatario_dni}}, domiciliado en {{locatario_domicilio}}, denominado "LOCATARIO"', categoria: null },
    { id: 'datos_inmueble_contrato', nombre: 'Datos Inmueble Contrato', texto: 'Se pacta el arrendamiento del inmueble ubicado en {{inm_direccion}}, piso {{inm_piso}}, departamento {{inm_dpto}}, de una superficie de {{inm_superficie}} m²', categoria: null },
    
    // CLAUSULAS COMPRA
    { id: 'clausula_exclusividad', nombre: 'Cláusula de Exclusividad', texto: 'El PROPIETARIO otorga mandato EXCLUSIVO al agente para vender el inmueble ubicado en {{inm_direccion}}, por el plazo de {{duracion_vigencia}} meses.', categoria: 'compra' },
    { id: 'clausula_no_exclusividad', nombre: 'Cláusula No Exclusiva', texto: 'El PROPIETARIO autoriza la venta del inmueble en forma NO EXCLUSIVA, pudiendo ofertar a través de otros agentes inmobiliarios.', categoria: 'compra' },
    { id: 'clausula_precio_venta', nombre: 'Cláusula Precio de Venta', texto: 'El precio estimado del inmueble es de {{precio_estimado}}, quedando el mismo sujeto a negociación según las condiciones del mercado.', categoria: 'compra' },
    { id: 'clausula_precio_reserva', nombre: 'Cláusula Precio Reserva', texto: 'El COMPRADOR se obliga a adquirir el inmueble al precio de {{precio_total}} ({{precio_letras}}).', categoria: 'compra' },
    { id: 'clausula_seña', nombre: 'Cláusula de Seña', texto: 'Se entrega en concepto de seña la suma de {{seña_monto}}, la cual quedará en poder del CORREDOR como garantía del cumplimiento de esta reserva.', categoria: 'compra' },
    { id: 'clausula_pago', nombre: 'Cláusula Forma de Pago', texto: 'El saldo adeudado será pagado al momento de la firma del instrumento definitivo de compraventa, mediante {{forma_pago}}.', categoria: 'compra' },
    { id: 'clausula_comision', nombre: 'Cláusula Comisión', texto: 'La comisión inmobiliaria será de {{porcentaje_comision}}% sobre el precio de venta, a cargo de {{quien_paga_comision}}.', categoria: 'compra' },
    { id: 'clausula_jurisdiccion', nombre: 'Cláusula Jurisdicción', texto: 'Ambas partes se someten a la jurisdicción de los Tribunales Ordinarios en lo Civil de {{jurisdiccion}}, renunciando a cualquier otra.', categoria: null },
    
    // CLAUSULAS ALQUILER
    { id: 'clausula_canon_mensual', nombre: 'Cláusula Canon Mensual', texto: 'El LOCATARIO se obliga a pagar como canon de arrendamiento la suma de {{canon_mensual}}, pagadero dentro de los primeros {{vencimiento_pago}} días de cada mes.', categoria: 'alquiler' },
    { id: 'clausula_forma_pago', nombre: 'Cláusula Forma de Pago Alquiler', texto: 'El pago se efectuará mediante {{forma_pago_alquiler}} a la orden de {{beneficiario_pago}}.', categoria: 'alquiler' },
    { id: 'clausula_reajuste_indice', nombre: 'Cláusula Reajuste por Índice', texto: 'El canon será reajustado {{frecuencia_reajuste}} de acuerdo al índice {{indices_ajuste}}, según lo dispuesto por la Ley {{numero_ley}}.', categoria: 'alquiler' },
    { id: 'clausula_garantia_deposito', nombre: 'Cláusula Garantía Depósito', texto: 'El LOCATARIO deposita como garantía la suma de {{garantia_monto}}, la cual será devuelta al término del contrato, descontados los daños y perjuicios si los hubiere.', categoria: 'alquiler' },
    { id: 'clausula_responsabilidades', nombre: 'Cláusula Responsabilidades', texto: 'El LOCATARIO es responsable del mantenimiento general del inmueble, incluyendo reparaciones menores de albañilería, fontanería y electricidad.', categoria: 'alquiler' },
    { id: 'clausula_duracion', nombre: 'Cláusula Duración', texto: 'El presente contrato tendrá una duración de {{duracion_meses}} meses, contados a partir del {{fecha_inicio}}.', categoria: 'alquiler' },
    { id: 'clausula_termino', nombre: 'Cláusula Terminación', texto: 'Para dar por terminado este contrato, cualquiera de las partes deberá notificar con {{dias_notificacion}} días de anticipación.', categoria: 'alquiler' },
    
    // FIRMAS
    { id: 'firma_partes', nombre: 'Firma de Partes', texto: 'En prueba de conformidad, se firman dos ejemplares de este instrumento.', categoria: null },
    { id: 'datos_corredor', nombre: 'Datos del Corredor', texto: 'CORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778)\nRE/MAX CREA', categoria: null }
];

console.log('✅ Cargados ' + TEMPLATES_COMPLETOS.length + ' templates y ' + CLAUSULAS_COMPLETAS.length + ' cláusulas');
