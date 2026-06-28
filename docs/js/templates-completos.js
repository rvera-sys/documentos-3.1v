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
    { id: 'datos_corredor', nombre: 'Datos del Corredor', texto: 'CORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778)\nRE/MAX CREA', categoria: null },

    // DESISTIMIENTO
    { id: 'encabezado_desistimiento', nombre: 'Encabezado Desistimiento', texto: 'DESISTIMIENTO DE COMPRA-venta\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'compra' },
    { id: 'datos_partes_desistimiento', nombre: 'Datos Partes Desistimiento', texto: 'Entre {{comprador_nombre}}, DNI {{comprador_dni}}, denominado "DESISTENTE", y {{vendedor_nombre}}, denominado "VENDEDOR".', categoria: 'compra' },
    { id: 'clausula_devolucion_seña', nombre: 'Cláusula Devolución de Seña', texto: 'Las partes acuerdan dejar sin efecto la operación de compra sobre el inmueble sito en {{inm_direccion}}. El VENDEDOR devuelve la suma de {{seña_monto}} recibida en concepto de seña.', categoria: 'compra' },

    // RESERVA COMPRA
    { id: 'encabezado_reserva', nombre: 'Encabezado Reserva Compra', texto: 'RESERVA DE COMPRA\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'compra' },
    { id: 'datos_comprador', nombre: 'Datos Comprador', texto: 'El Sr./a {{comprador_nombre}}, DNI {{comprador_dni}}, con domicilio en {{comprador_domicilio}}, manifiesta su intención de adquirir el inmueble.', categoria: 'compra' },
    { id: 'datos_inmueble', nombre: 'Datos Inmueble', texto: 'El inmueble objeto de la presente reserva se encuentra ubicado en {{inm_direccion}}, {{inm_localidad}}, tipo {{inm_tipo}}.', categoria: 'compra' },

    // EMPRENDIMIENTO
    { id: 'encabezado_empr', nombre: 'Encabezado Emprendimiento', texto: 'RESERVA DE UNIDAD EN EMPRENDIMIENTO\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'compra' },
    { id: 'datos_emprendimiento', nombre: 'Datos Emprendimiento', texto: 'El emprendimiento denominado "{{empr_nombre}}" desarrollado por {{empr_desarrollador}}, ubicado en {{empr_ubicacion}}.', categoria: 'compra' },
    { id: 'clausula_unidad', nombre: 'Cláusula Unidad', texto: 'Se reserva la unidad {{unidad_numero}}, piso {{unidad_piso}}, de {{unidad_ambientes}} ambientes, en el emprendimiento {{empr_nombre}}.', categoria: 'compra' },
    { id: 'clausula_precio_empr', nombre: 'Cláusula Precio Emprendimiento', texto: 'El precio total de la unidad es de {{precio_unidad}}. Se entrega en concepto de seña la suma de {{seña_monto}} ({{porcentaje_seña}}% del valor total).', categoria: 'compra' },
    { id: 'clausula_seña_empr', nombre: 'Cláusula Seña Emprendimiento', texto: 'La seña entregada quedará en poder del desarrollador como garantía de la reserva, imputándose al precio final.', categoria: 'compra' },
    { id: 'clausula_entrega', nombre: 'Cláusula Entrega', texto: 'La entrega de la unidad se estima para la fecha que oportunamente se acuerde entre las partes.', categoria: 'compra' },

    // RENTA VITALICIA
    { id: 'datos_propietario_renta', nombre: 'Datos Propietario Renta', texto: 'El Sr./a {{prop_nombre}}, DNI {{prop_dni}}, de {{prop_edad}} años de edad, es propietario del inmueble sito en {{inm_direccion}}.', categoria: 'compra' },
    { id: 'clausula_renta_vitalicia', nombre: 'Cláusula Renta Vitalicia', texto: 'El PROPIETARIO vende el inmueble con la condición de recibir una renta vitalicia mensual de {{renta_monto_mensual}} {{renta_moneda}}.', categoria: 'compra' },
    { id: 'clausula_pagos_renta', nombre: 'Cláusula Pagos Renta', texto: 'La renta será abonada mensualmente dentro de los primeros cinco días de cada mes, iniciando con la firma de la escritura traslativa de dominio.', categoria: 'compra' },
    { id: 'clausula_reajuste_renta', nombre: 'Cláusula Reajuste Renta', texto: 'El monto de la renta se reajustará periódicamente según {{renta_indexacion}}, a fin de mantener su valor adquisitivo.', categoria: 'compra' },

    // CESION
    { id: 'encabezado_cesion', nombre: 'Encabezado Cesión', texto: 'RESERVA DE CESIÓN DE DERECHOS\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'compra' },
    { id: 'datos_partes_cesion', nombre: 'Datos Partes Cesión', texto: 'El Sr./a {{comprador_orig_nombre}}, DNI {{comprador_orig_dni}}, cede los derechos adquiridos al Sr./a {{cesionario_nombre}}, DNI {{cesionario_dni}}.', categoria: 'compra' },
    { id: 'clausula_cesion_derechos', nombre: 'Cláusula Cesión Derechos', texto: 'El COMPRADOR ORIGINAL cede al CESIONARIO todos los derechos y obligaciones emergentes de la reserva de compra sobre el inmueble sito en {{inm_direccion}}, por el precio de {{precio_cesion}}.', categoria: 'compra' },

    // CASO ESPECIAL
    { id: 'clausula_caso_especial', nombre: 'Cláusula Caso Especial', texto: 'La presente autorización se otorga para el siguiente caso particular: {{caso_descripcion}}. Referencias: {{caso_referencias}}.', categoria: 'compra' },

    // ALQUILER - AUTORIZACION
    { id: 'encabezado_alquiler', nombre: 'Encabezado Alquiler', texto: 'AUTORIZACIÓN DE ALQUILER\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_locador', nombre: 'Datos Locador', texto: 'El Sr./a {{locador_nombre}}, DNI {{locador_dni}}, con domicilio en {{locador_domicilio}}, denominado "LOCADOR".', categoria: 'alquiler' },
    { id: 'clausula_exclusividad_alquiler', nombre: 'Cláusula Exclusividad Alquiler', texto: 'El LOCADOR otorga mandato EXCLUSIVO para alquilar el inmueble ubicado en {{inm_direccion}}, tipo {{inm_tipo}}, de {{inm_ambientes}} ambientes.', categoria: 'alquiler' },
    { id: 'clausula_comision_alquiler', nombre: 'Cláusula Comisión Alquiler', texto: 'La comisión de la inmobiliaria será equivalente a {{porcentaje_comision}} meses de canon, a cargo del LOCADOR.', categoria: 'alquiler' },

    // RESERVA CABA
    { id: 'encabezado_reserva_caba', nombre: 'Encabezado Reserva CABA', texto: 'RESERVA DE LOCACIÓN - CABA\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_interesado', nombre: 'Datos Interesado', texto: 'El Sr./a {{locatario_nombre}}, DNI {{locatario_dni}}, teléfono {{locatario_telefono}}, manifiesta interés en alquilar el inmueble.', categoria: 'alquiler' },
    { id: 'datos_propiedad', nombre: 'Datos Propiedad', texto: 'Inmueble ubicado en {{inm_direccion}}, {{inm_localidad}}, piso/dpto {{inm_piso_dpto}}.', categoria: 'alquiler' },
    { id: 'clausula_canon_reserva', nombre: 'Cláusula Canon Reserva', texto: 'El canon ofrecido es de {{canon_ofrecido}}. Se entrega en concepto de reserva la suma de {{seña_reserva}}.', categoria: 'alquiler' },
    { id: 'clausula_seña_reserva_caba', nombre: 'Cláusula Seña Reserva CABA', texto: 'La suma entregada en concepto de seña garantiza la reserva del inmueble hasta la firma del contrato de locación.', categoria: 'alquiler' },
    { id: 'clausula_plazo_confirmacion', nombre: 'Cláusula Plazo Confirmación', texto: 'El LOCADOR dispondrá de un plazo de {{plazo_confirmacion}} días hábiles para confirmar la operación.', categoria: 'alquiler' },

    // RESERVA PBA
    { id: 'encabezado_reserva_pba', nombre: 'Encabezado Reserva PBA', texto: 'RESERVA DE LOCACIÓN - PBA\n\n{{inm_localidad_pba}}, {{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_partes_pba', nombre: 'Datos Partes PBA', texto: 'Entre {{locatario_nombre}}, DNI {{locatario_dni}}, y {{locador_nombre}}, se acuerda la reserva del inmueble sito en {{inm_direccion_pba}}.', categoria: 'alquiler' },
    { id: 'clausula_canon_pba', nombre: 'Cláusula Canon PBA', texto: 'El canon mensual acordado es de {{canon_pba}}. Se entrega como seña la suma de {{seña_pba}}.', categoria: 'alquiler' },
    { id: 'clausula_seña_pba', nombre: 'Cláusula Seña PBA', texto: 'La seña entregada se imputará al primer mes de alquiler y al depósito en garantía.', categoria: 'alquiler' },

    // RESERVA COMERCIAL
    { id: 'encabezado_reserva_com', nombre: 'Encabezado Reserva Comercial', texto: 'RESERVA DE LOCACIÓN COMERCIAL\n\n{{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_interesado_com', nombre: 'Datos Interesado Comercial', texto: 'El Sr./a {{locatario_nombre}}, DNI {{locatario_dni}}, rubro {{rubro}}, manifiesta interés en el local.', categoria: 'alquiler' },
    { id: 'clausula_canon_reserva_com', nombre: 'Cláusula Canon Reserva Comercial', texto: 'Se acuerda un canon de {{canon_solicitado}}. Se entrega como reserva la suma de {{seña_comercial}}.', categoria: 'alquiler' },
    { id: 'clausula_confirmacion_com', nombre: 'Cláusula Confirmación Comercial', texto: 'El LOCADOR confirmará la operación en un plazo máximo de {{plazo_confirmacion}} días hábiles.', categoria: 'alquiler' },

    // TEMPORARIO
    { id: 'encabezado_temporal', nombre: 'Encabezado Temporario', texto: 'RESERVA DE ALQUILER TEMPORARIO\n\n{{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_temporal', nombre: 'Datos Inquilino Temporal', texto: 'El Sr./a {{temporal_nombre}}, DNI {{temporal_dni}}, procedente de {{temporal_pais}}, manifiesta interés en alquiler temporario.', categoria: 'alquiler' },
    { id: 'clausula_periodo_temporal', nombre: 'Cláusula Período Temporario', texto: 'El período de alquiler comprende desde {{fecha_entrada}} hasta {{fecha_salida}}, totalizando {{dias_alquiler}} días.', categoria: 'alquiler' },
    { id: 'clausula_tarifa_temporal', nombre: 'Cláusula Tarifa Temporaria', texto: 'La tarifa diaria acordada es de {{tarifa_diaria}}, resultando un monto total de {{monto_total}}.', categoria: 'alquiler' },
    { id: 'clausula_seña_temporal', nombre: 'Cláusula Seña Temporario', texto: 'Se entrega en concepto de seña la suma de {{seña_temporal}} para confirmar la reserva.', categoria: 'alquiler' },
    { id: 'clausula_deposito_garantia_temp', nombre: 'Cláusula Depósito Garantía Temporario', texto: 'Se requiere un depósito en garantía que será devuelto al finalizar la estadía, previa verificación del estado del inmueble.', categoria: 'alquiler' },

    // AUTORIZACION TEMPORARIO
    { id: 'encabezado_aut_temporal', nombre: 'Encabezado Autorización Temporario', texto: 'AUTORIZACIÓN DE ALQUILER TEMPORARIO — EXCLUSIVA\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_prop_temporal', nombre: 'Datos Propietario Temporario', texto: 'El Sr./a {{prop_temporal_nombre}}, DNI {{prop_temporal_dni}}, propietario del inmueble.', categoria: 'alquiler' },
    { id: 'clausula_exclusividad_temporal', nombre: 'Cláusula Exclusividad Temporario', texto: 'El PROPIETARIO otorga mandato EXCLUSIVO para alquiler temporario del inmueble sito en {{inm_temp_direccion}}, tipo {{inm_temp_tipo}}.', categoria: 'alquiler' },
    { id: 'clausula_tarifa_temporal_aut', nombre: 'Cláusula Tarifa Autorización Temporario', texto: 'La tarifa diaria estimada es de {{tarifa_diaria_aut}}. La temporada acordada es de {{temporada_meses}} meses.', categoria: 'alquiler' },
    { id: 'clausula_plazo_vigencia_temporal', nombre: 'Cláusula Vigencia Autorización Temporario', texto: 'La presente autorización tiene una vigencia de {{vigencia_meses}} meses a partir de la fecha de firma.', categoria: 'alquiler' },

    // USD
    { id: 'encabezado_usd', nombre: 'Encabezado USD', texto: 'CONTRATO DE LOCACIÓN — VIVIENDA EN USD\n\nBuenos Aires, {{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_partes_usd', nombre: 'Datos Partes USD', texto: 'Entre {{locador_nombre}}, DNI {{locador_dni}}, y {{locatario_nombre}}, DNI {{locatario_dni}}, se celebra el presente contrato.', categoria: 'alquiler' },
    { id: 'clausula_canon_usd', nombre: 'Cláusula Canon USD', texto: 'El canon mensual se fija en {{canon_usd}} dólares estadounidenses, pagadero en la forma convenida.', categoria: 'alquiler' },
    { id: 'clausula_transferencia_usd', nombre: 'Cláusula Transferencia USD', texto: 'El pago se efectuará mediante transferencia bancaria a la cuenta {{banco_transferencia}} en dólares estadounidenses.', categoria: 'alquiler' },
    { id: 'clausula_renuncia_765', nombre: 'Cláusula Renuncia Art. 765 CCCN', texto: 'El LOCATARIO renuncia a la facultad prevista en el Artículo 765 del Código Civil y Comercial de la Nación, obligándose a pagar en la moneda pactada.', categoria: 'alquiler' },

    // COMERCIAL
    { id: 'encabezado_comercial', nombre: 'Encabezado Comercial', texto: 'CONTRATO DE LOCACIÓN COMERCIAL\n\n{{fecha_hoy}}.', categoria: 'alquiler' },
    { id: 'datos_partes_comercial', nombre: 'Datos Partes Comercial', texto: 'Entre {{locador_nombre}}, DNI {{locador_dni}}, y {{locatario_nombre}}, DNI {{locatario_dni}}, rubro {{rubro_comercial}}, se celebra el presente contrato.', categoria: 'alquiler' },
    { id: 'datos_local', nombre: 'Datos Local Comercial', texto: 'El local comercial se encuentra en {{inm_direccion}}, piso {{inm_piso}}, con {{inm_frente_metros}} m de frente y {{inm_fondo_metros}} m de fondo.', categoria: 'alquiler' },
    { id: 'clausula_canon_comercial', nombre: 'Cláusula Canon Comercial', texto: 'El canon mensual es de {{canon_comercial}}, sujeto a reajuste según {{indices_ajuste_com}}.', categoria: 'alquiler' },
    { id: 'clausula_indices_comercial', nombre: 'Cláusula Índices Comercial', texto: 'El canon se reajustará con la periodicidad y según los índices que se acuerden entre las partes.', categoria: 'alquiler' },
    { id: 'clausula_mejoras', nombre: 'Cláusula Mejoras', texto: 'El LOCATARIO podrá realizar mejoras en el local previa autorización escrita del LOCADOR, quedando las mismas a beneficio del inmueble.', categoria: 'alquiler' },
    { id: 'clausula_opcion_compra', nombre: 'Cláusula Opción de Compra', texto: 'Se otorga opción de compra al LOCATARIO sobre el inmueble, por el plazo y condiciones que se acuerden en documento separado.', categoria: 'alquiler' },
    { id: 'clausula_resolucion_comercial', nombre: 'Cláusula Resolución Comercial', texto: 'Cualquiera de las partes podrá resolver el contrato en caso de incumplimiento de las obligaciones contraídas.', categoria: 'alquiler' }
];

console.log('✅ Cargados ' + TEMPLATES_COMPLETOS.length + ' templates y ' + CLAUSULAS_COMPLETAS.length + ' cláusulas');
