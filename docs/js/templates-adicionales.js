// Modelos normalizados desde Downloads/Modelos contratos CREA 2026.
// Son borradores editables: revisar el texto con el profesional responsable antes de firmar.

const ADICIONALES_CLAUSULAS = {
  adi_recibo: {
    titulo: 'RECIBO DE RESERVA',
    texto: `Recibí por cuenta y orden del corredor público René Alejandro Vera (CSI 5848 / CPI 6778), en representación de RE/MAX CREA, la suma de {{monto_letras}} ({{monto_num}}), entregada por {{parte_nombre}}, DNI/CUIT {{parte_dni}}, en concepto de reserva de la operación sobre {{inmueble_dir}}.`
  },
  adi_refuerzo: {
    titulo: 'REFUERZO DE RESERVA',
    texto: `RE/MAX CREA recibe de {{parte_nombre}}, DNI/CUIT {{parte_dni}}, la suma adicional de {{monto_letras}} ({{monto_num}}), que se imputa a la reserva de la operación sobre {{inmueble_dir}} y queda sujeta a las condiciones de la reserva original de fecha {{fecha_reserva}}.`
  },
  adi_boleto: {
    titulo: 'BOLETO DE COMPRAVENTA',
    texto: `La parte vendedora vende y la parte compradora compra el inmueble ubicado en {{inmueble_dir}}, por el precio total de {{precio_letras}} ({{precio_num}}), que será abonado conforme al siguiente esquema: {{forma_pago}}.`
  },
  adi_posesion: {
    titulo: 'POSESIÓN Y ENTREGA',
    texto: `La posesión se entrega en este acto / se entregará el {{fecha_posesion}}, libre de ocupantes y cosas, con los impuestos, tasas, servicios y expensas devengados hasta esa fecha a cargo de {{deudas_a_cargo}}.`
  },
  adi_cesion_boleto: {
    titulo: 'CESIÓN DE BOLETO',
    texto: `El cedente cede al cesionario los derechos emergentes del boleto de compraventa de fecha {{fecha_boleto}}, relativo al inmueble ubicado en {{inmueble_dir}}, por el precio de cesión de {{precio_letras}} ({{precio_num}}).`
  },
  bol_encabezado: {
    titulo: 'COMPARECENCIA',
    texto: `En {{ciudad}}, a los {{dia}} días del mes de {{mes}} de {{anio}}, comparecen la parte VENDEDORA, {{vendedor_nombre}}, DNI/CUIT {{vendedor_dni}}, con domicilio en {{vendedor_domicilio}}, y la parte COMPRADORA, {{comprador_nombre}}, DNI/CUIT {{comprador_dni}}, con domicilio en {{comprador_domicilio}}, quienes celebran el presente boleto de compraventa.`
  },
  bol_inmueble: {
    titulo: 'INMUEBLE',
    texto: `La VENDEDORA vende el inmueble de su exclusiva propiedad, ad corpus, ubicado en {{inmueble_dir}}, Unidad Funcional {{unidad_funcional}}, nomenclatura catastral {{nomenclatura}}, inscripto bajo matrícula {{inmueble_matricula}}.`
  },
  bol_precio: {
    titulo: 'PRECIO Y FORMA DE PAGO',
    texto: `La venta se realiza por {{precio_letras}} ({{precio_num}}). En este acto la COMPRADORA entrega {{reserva_letras}} ({{reserva_num}}) a cuenta de precio. El saldo de {{saldo_letras}} ({{saldo_num}}) será abonado el {{fecha_escritura}}, al otorgarse la escritura y entregarse la posesión.`
  },
  bol_moneda: {
    titulo: 'MONEDA DE PAGO',
    texto: `El pago deberá efectuarse en {{moneda}}, por lo que la COMPRADORA renuncia expresamente a la aplicación del artículo 765 del Código Civil y Comercial de la Nación y manifiesta disponer del monto pactado.`
  },
  bol_estado: {
    titulo: 'TÍTULOS, DEUDAS Y ESTADO',
    texto: `La venta se realiza sobre títulos perfectos, libre de deudas y gravámenes, totalmente desocupada, con expensas, impuestos y servicios pagos hasta la escritura y posesión, libre de ocupantes, intrusos e inquilinos.`
  },
  bol_hipoteca: {
    titulo: 'CANCELACIÓN DE GRAVÁMENES',
    texto: `El inmueble será transmitido libre de gravámenes. La hipoteca existente, si la hubiera, deberá cancelarse íntegramente antes o simultáneamente con la escritura, conforme la documentación que entregue la VENDEDORA.`
  },
  bol_estado_bien: {
    titulo: 'ESTADO Y ACCESORIOS',
    texto: `La propiedad se entrega con {{contenido}}, incluyendo vidrios, herrajes y llaves, en el estado general en que se encuentra, que la COMPRADORA declara conocer y aceptar.`
  },
  bol_incumplimiento: {
    titulo: 'INCUMPLIMIENTO Y CLÁUSULA PENAL',
    texto: `Ante el incumplimiento, la parte cumplidora podrá exigir el cumplimiento con una cláusula penal de {{mora_diaria}} diarios desde la mora, o resolver la operación. Si incumple la COMPRADORA, la VENDEDORA podrá retener las sumas recibidas; si incumple la VENDEDORA, restituirá lo percibido más otro tanto, salvo acuerdo distinto por escrito.`
  },
  bol_titularidad: {
    titulo: 'TITULARIDAD Y EVICCIÓN',
    texto: `La VENDEDORA declara ser titular del inmueble y responde por evicción conforme a derecho. Las partes declaran no registrar inhibiciones para disponer, conforme los informes que deberán acompañarse.`
  },
  bol_escritura: {
    titulo: 'ESCRITURA Y GASTOS',
    texto: `La escritura traslativa se otorgará por ante {{escribano}}, con domicilio en {{escribano_domicilio}}, en lugar y horario a designar. Los gastos estarán a cargo de cada parte conforme los usos y costumbres notariales.`
  },
  bol_fallecimiento: {
    titulo: 'FALLECIMIENTO O INCAPACIDAD',
    texto: `En caso de fallecimiento o incapacidad, herederos o representantes deberán comunicarlo dentro de cinco días e iniciar el trámite sucesorio o judicial correspondiente dentro de los treinta días, bajo apercibimiento de mora y multa diaria de {{multa_diaria}}.`
  },
  bol_inspeccion: {
    titulo: 'INSPECCIÓN PREVIA',
    texto: `La VENDEDORA permitirá a la COMPRADORA acceder a la unidad con veinticuatro horas de anticipación a la escritura para verificar sus condiciones conforme las visitas realizadas.`
  },
  bol_documentacion: {
    titulo: 'DOCUMENTACIÓN',
    texto: `La VENDEDORA entregará a la escribanía, dentro de las setenta y dos horas, título de propiedad, reglamento de copropiedad, boletas de ABL, ARBA, servicios y expensas, constancia de CUIT/CUIL y copias de DNI.`
  },
  bol_llaves: {
    titulo: 'LLAVES',
    texto: `La VENDEDORA entregará las llaves de acceso al edificio y a la Unidad Funcional al momento de la escritura y posesión.`
  },
  bol_asentimiento: {
    titulo: 'ASENTIMIENTO CONYUGAL',
    texto: `{{conyuge_nombre}}, DNI {{conyuge_dni}}, en carácter de cónyuge de la VENDEDORA, presta asentimiento a la venta y se compromete a comparecer al otorgamiento de la escritura.`
  },
  bol_jurisdiccion: {
    titulo: 'DOMICILIOS Y JURISDICCIÓN',
    texto: `Las partes constituyen domicilios en los indicados y se someten a la jurisdicción de los tribunales de {{jurisdiccion}}, con renuncia a cualquier otro fuero.`
  },
  bol_usufructo: {
    titulo: 'USUFRUCTO',
    texto: `Si pesara usufructo sobre el inmueble, {{usufructuario}} se obliga a comparecer a la escritura para prestar su conformidad y formalizar el levantamiento correspondiente.`
  },
  bol_locacion: {
    titulo: 'LOCACIÓN VIGENTE',
    texto: `Si existiera contrato de locación vigente, {{locatario_nombre}} declara conocer la venta y las partes acuerdan la cesión de los derechos y obligaciones locativos al comprador, conforme el anexo que suscriban.`
  },
  bol_cierre: {
    titulo: 'CIERRE Y FIRMAS',
    texto: `Leído el presente, las partes declaran comprender sus cláusulas y lo firman en ejemplares de un mismo tenor en el lugar y fecha indicados.`
  },
  bolp_encabezado: {
    titulo: 'COMPARECENCIA',
    texto: `En {{ciudad}}, a los {{dia}} días del mes de {{mes}} de {{anio}}, comparecen {{vendedor_nombre}}, como VENDEDOR/A, y {{comprador_nombre}}, como COMPRADOR/A, quienes celebran el presente boleto de compraventa.`
  },
  bolp_inmueble: {
    titulo: 'INMUEBLE',
    texto: `La VENDEDORA vende el inmueble ubicado en {{inmueble_dir}}, Unidad Funcional {{unidad_funcional}}, nomenclatura {{nomenclatura}}, matrícula {{inmueble_matricula}}.`
  },
  bolp_precio: {
    titulo: 'PRECIO Y SALDO',
    texto: `La venta se realiza por {{precio_letras}} ({{precio_num}}). La COMPRADORA entrega {{reserva_letras}} ({{reserva_num}}) a cuenta y abonará el saldo el {{fecha_escritura}}, al otorgarse la escritura.`
  },
  bolp_moneda: {
    titulo: 'MONEDA DE PAGO',
    texto: `El saldo será pagado en {{moneda}}. La COMPRADORA renuncia a la aplicación del artículo 765 del Código Civil y Comercial de la Nación.`
  },
  bolp_posesion: {
    titulo: 'POSESIÓN',
    texto: `La posesión real y efectiva se entrega en este acto, libre de inquilinos, intrusos y ocupantes, en el estado conocido y aceptado por la COMPRADORA. El boleto es intransferible sin conformidad escrita de la VENDEDORA.`
  },
  bolp_titulos: {
    titulo: 'TÍTULOS Y DEUDAS',
    texto: `La venta se realiza sobre títulos perfectos, libre de deudas y gravámenes hasta la escritura, con impuestos y servicios pagos hasta la toma de posesión.`
  },
  bolp_estado: {
    titulo: 'ESTADO Y ACCESORIOS',
    texto: `La propiedad se entrega con sus vidrios, herrajes y llaves, en el estado general que la COMPRADORA conoce y acepta.`
  },
  bolp_incumplimiento: {
    titulo: 'INCUMPLIMIENTO',
    texto: `La parte cumplidora podrá exigir el cumplimiento con una cláusula penal de {{mora_diaria}} diarios o resolver la operación, aplicándose la retención o restitución agravada de las sumas recibidas según quién incumpla.`
  },
  bolp_escritura: {
    titulo: 'ESCRITURA Y GASTOS',
    texto: `La escritura se otorgará por ante {{escribano}}, en lugar y horario a designar por la VENDEDORA. Los gastos serán soportados conforme los usos notariales.`
  },
  bolp_fallecimiento: {
    titulo: 'FALLECIMIENTO O INCAPACIDAD',
    texto: `Los herederos o representantes deberán comunicar el fallecimiento o incapacidad dentro de cinco días e iniciar el trámite correspondiente dentro de treinta días, bajo apercibimiento de multa diaria de {{multa_diaria}}.`
  },
  bolp_jurisdiccion: {
    titulo: 'DOMICILIOS Y JURISDICCIÓN',
    texto: `Las partes constituyen domicilios en los indicados y se someten a los tribunales de {{jurisdiccion}}.`
  },
  bolp_documentacion: {
    titulo: 'DOCUMENTACIÓN Y LLAVES',
    texto: `La VENDEDORA entregará título, reglamento, boletas y constancias personales a la escribanía dentro de las setenta y dos horas, y entrega en este acto las llaves del edificio y la Unidad Funcional.`
  },
  bolp_cierre: {
    titulo: 'CIERRE Y FIRMAS',
    texto: `Leído el presente, las partes lo ratifican y firman en tres ejemplares de un mismo tenor y a un solo efecto.`
  },
  adi_cesion_locacion: {
    titulo: 'CESIÓN DE CONTRATO DE LOCACIÓN',
    texto: `El locatario cedente cede al cesionario su posición contractual en el contrato de locación de fecha {{fecha_contrato}}, relativo al inmueble ubicado en {{inmueble_dir}}, con consentimiento del locador y vigencia hasta {{fecha_vencimiento}}.`
  },
  adi_desocupacion: {
    titulo: 'CONVENIO DE DESOCUPACIÓN',
    texto: `El locatario se obliga a restituir el inmueble ubicado en {{inmueble_dir}} el día {{fecha_salida}}, libre de ocupantes y bienes, entregando las llaves al locador. El incumplimiento habilitará las acciones legales correspondientes.`
  },
  adi_comodato: {
    titulo: 'CONTRATO DE COMODATO',
    texto: `El comodante entrega gratuitamente al comodatario el uso del inmueble ubicado en {{inmueble_dir}}, que deberá ser destinado exclusivamente a {{destino}} y restituido el {{fecha_vencimiento}} en el estado recibido, salvo el desgaste normal.`
  },
  adi_mutuo: {
    titulo: 'CONTRATO DE MUTUO',
    texto: `El acreedor entrega al deudor la suma de {{monto_letras}} ({{monto_num}}), que el deudor reconoce recibir y se obliga a restituir el {{fecha_vencimiento}}, con los intereses pactados del {{interes}} y conforme al plan de pago: {{forma_pago}}.`
  },
  adi_aceptacion_compra: {
    titulo: 'ACEPTACIÓN / CONTRAOFERTA / RECHAZO DE COMPRAVENTA',
    texto: `La parte vendedora declara que acepta / formula contraoferta / rechaza la oferta recibida de {{parte_nombre}}, DNI/CUIT {{parte_dni}}, relativa al inmueble ubicado en {{inmueble_dir}}, por {{precio_letras}} ({{precio_num}}), bajo las siguientes condiciones: {{condiciones}}.`
  },
  adi_aceptacion_locacion: {
    titulo: 'ACEPTACIÓN / CONTRAOFERTA / RECHAZO DE LOCACIÓN',
    texto: `La parte locadora declara que acepta / formula contraoferta / rechaza la propuesta de locación presentada por {{parte_nombre}}, relativa al inmueble ubicado en {{inmueble_dir}}, con canon de {{alquiler_num}} y plazo de {{plazo}}, bajo las siguientes condiciones: {{condiciones}}.`
  },
  adi_sena: {
    titulo: 'SEÑA DE COMPRAVENTA DE INMUEBLE',
    texto: `La parte compradora entrega a la parte vendedora la suma de {{monto_letras}} ({{monto_num}}) en concepto de seña penitencial, imputable al precio de {{precio_letras}} ({{precio_num}}), por el inmueble ubicado en {{inmueble_dir}}. Se aplicarán las consecuencias previstas en el artículo 1059 del Código Civil y Comercial, salvo pacto escrito en contrario.`
  },
  adi_hipoteca: {
    titulo: 'GRAVÁMENES Y DOCUMENTACIÓN',
    texto: `La parte transmitente declara que el inmueble será entregado libre de gravámenes, inhibiciones y deudas, debiendo acompañar los informes y comprobantes necesarios para el otorgamiento del instrumento definitivo.`
  },
  adi_notificaciones: {
    titulo: 'DOMICILIOS Y NOTIFICACIONES',
    texto: `Las partes constituyen domicilio real en los indicados en este instrumento y domicilio electrónico en {{email}}, donde serán válidas las comunicaciones vinculadas con la operación.`
  },
  adi_recibo_detalle: {
    titulo: 'IMPUTACIÓN DEL RECIBO',
    texto: `El importe recibido se imputa a {{concepto}}, sin que implique por sí solo aceptación definitiva de la operación ni modificación de la reserva original.`
  },
  adi_recibo_custodia: {
    titulo: 'CUSTODIA DE FONDOS',
    texto: `El corredor mantendrá los fondos conforme las instrucciones documentadas de las partes y los entregará o restituirá según la aceptación, rechazo o incumplimiento que corresponda.`
  },
  adi_refuerzo_imputacion: {
    titulo: 'IMPUTACIÓN DEL REFUERZO',
    texto: `El refuerzo integra el monto de reserva y se imputa al precio final de la operación, manteniendo vigentes las condiciones de la reserva original que no fueran modificadas por escrito.`
  },
  adi_refuerzo_constancia: {
    titulo: 'CONSTANCIA Y RECIBO',
    texto: `El presente instrumento sirve como recibo suficiente por el importe adicional entregado y deberá conservarse junto con la reserva original.`
  },
  adi_cesion_consentimiento: {
    titulo: 'CONSENTIMIENTO Y DOCUMENTACIÓN',
    texto: `La cesión queda sujeta al consentimiento de la parte contratante que corresponda y a la entrega del boleto o contrato original, sus anexos e informes relacionados.`
  },
  adi_cesion_precio: {
    titulo: 'PRECIO Y FORMA DE PAGO DE LA CESIÓN',
    texto: `El precio de la cesión se abonará conforme {{forma_pago}}, sirviendo los comprobantes y recibos firmados como constancia de cada pago.`
  },
  adi_cesion_entrega: {
    titulo: 'ENTREGA DE DERECHOS Y DOCUMENTOS',
    texto: `Con la firma del instrumento definitivo se entregarán al cesionario los documentos, derechos y obligaciones que integran la posición cedida.`
  },
  adi_cesion_gastos: {
    titulo: 'GASTOS Y HONORARIOS',
    texto: `Los gastos, impuestos, certificaciones y honorarios derivados de la cesión serán soportados por {{gastos_a_cargo}}, salvo pacto distinto por escrito.`
  },
  adi_cesion_incumplimiento: {
    titulo: 'INCUMPLIMIENTO DE LA CESIÓN',
    texto: `El incumplimiento habilitará a la parte cumplidora a exigir cumplimiento o resolución, con reparación de los daños directos acreditados y devolución de las sumas que correspondan.`
  },
  adi_desocupacion_entrega: {
    titulo: 'FORMA DE ENTREGA',
    texto: `La restitución deberá hacerse con llaves, comprobantes de servicios y constancia del estado del inmueble. Las partes documentarán la entrega mediante acta o recibo.`
  },
  adi_desocupacion_deudas: {
    titulo: 'DEUDAS Y SERVICIOS',
    texto: `Las deudas, servicios, tasas y expensas devengados hasta {{fecha_salida}} estarán a cargo de {{deudas_a_cargo}}, quien deberá acreditarlo al entregar las llaves.`
  },
  adi_desocupacion_penalidad: {
    titulo: 'MORA EN LA RESTITUCIÓN',
    texto: `La demora en restituir el inmueble generará una penalidad diaria de {{multa_diaria}}, sin perjuicio de las acciones de desalojo y daños que pudieran corresponder.`
  },
  adi_comodato_destino: {
    titulo: 'DESTINO Y USO',
    texto: `El comodatario solo podrá destinar el inmueble a {{destino}} y no podrá cambiar su destino, cederlo, sublocarlo ni permitir su uso por terceros sin autorización escrita.`
  },
  adi_comodato_conservacion: {
    titulo: 'CONSERVACIÓN Y REPARACIONES',
    texto: `El comodatario conservará el inmueble con diligencia, informará de inmediato cualquier daño y afrontará las reparaciones que provengan de su culpa o uso indebido.`
  },
  adi_comodato_gastos: {
    titulo: 'GASTOS DEL USO',
    texto: `Durante la vigencia del comodato estarán a cargo del comodatario los servicios, consumos y gastos ordinarios derivados del uso del inmueble.`
  },
  adi_comodato_restitucion: {
    titulo: 'RESTITUCIÓN',
    texto: `Al vencimiento o ante la resolución anticipada, el comodatario restituirá el inmueble libre de ocupantes y bienes, con sus llaves y en el estado recibido.`
  },
  adi_comodato_resolucion: {
    titulo: 'RESOLUCIÓN ANTICIPADA',
    texto: `El comodante podrá requerir la restitución anticipada ante incumplimiento, cambio de destino, deterioro relevante o necesidad urgente debidamente comunicada.`
  },
  adi_mutuo_entrega: {
    titulo: 'ENTREGA DEL CAPITAL',
    texto: `El deudor declara haber recibido de conformidad el capital indicado, en dinero efectivo o transferencia, y reconoce la obligación de restituirlo.`
  },
  adi_mutuo_restitucion: {
    titulo: 'RESTITUCIÓN DEL CAPITAL',
    texto: `El capital será restituido el {{fecha_vencimiento}} o en las cuotas detalladas en {{forma_pago}}, mediante el medio de pago acordado por las partes.`
  },
  adi_mutuo_intereses: {
    titulo: 'INTERESES',
    texto: `El capital devengará un interés de {{interes}}, calculado sobre el saldo pendiente y pagadero junto con cada cuota, salvo que las partes pacten expresamente su inexistencia.`
  },
  adi_mutuo_mora: {
    titulo: 'MORA',
    texto: `La mora se producirá por el vencimiento de cualquier obligación sin necesidad de interpelación. El saldo vencido devengará el interés moratorio que las partes acuerden.`
  },
  adi_mutuo_garantia: {
    titulo: 'GARANTÍAS',
    texto: `La obligación se garantiza con {{garantia}}, que permanecerá vigente hasta la cancelación total del capital, intereses y gastos.`
  },
  adi_respuesta: {
    titulo: 'RESPUESTA A LA OFERTA',
    texto: `La parte receptora deja constancia de que su respuesta es: {{respuesta}}. La aceptación solo producirá efectos en los términos expresamente consignados en este instrumento.`
  },
  adi_respuesta_plazo: {
    titulo: 'VIGENCIA DE LA RESPUESTA',
    texto: `La respuesta y sus condiciones tendrán vigencia hasta {{fecha_vencimiento}}. Vencido ese plazo sin instrumentarse el acuerdo definitivo, quedarán sin efecto salvo ratificación escrita.`
  },
  adi_respuesta_condiciones: {
    titulo: 'CONDICIONES PARTICULARES',
    texto: `Las condiciones particulares de la aceptación o contraoferta son: {{condiciones}}.`
  },
  adi_sena_entrega: {
    titulo: 'ENTREGA DE LA SEÑA',
    texto: `La suma se entrega en este acto y la parte receptora declara recibirla de conformidad, imputándola al precio de la operación.`
  },
  adi_sena_imputacion: {
    titulo: 'IMPUTACIÓN AL PRECIO',
    texto: `La seña será imputada al precio total al otorgarse el boleto o la escritura, conforme {{forma_pago}}.`
  },
  adi_sena_arrepentimiento: {
    titulo: 'ARREPENTIMIENTO',
    texto: `Si desiste la parte compradora perderá la seña; si desiste la parte vendedora deberá restituirla más otro tanto, salvo pacto distinto instrumentado por escrito.`
  },
  adi_sena_escritura: {
    titulo: 'INSTRUMENTO DEFINITIVO',
    texto: `Las partes se obligan a otorgar el instrumento definitivo respecto del inmueble ubicado en {{inmueble_dir}} el {{fecha_escritura}}, por ante {{escribano}}.`
  },
  adi_sena_gastos: {
    titulo: 'GASTOS',
    texto: `Los gastos e impuestos de la operación serán afrontados por cada parte conforme la ley y los usos notariales, salvo pacto escrito en contrario.`
  },
  adi_cierre: {
    titulo: 'CIERRE Y FIRMAS',
    texto: `Leído el instrumento, las partes declaran comprenderlo, lo ratifican y firman ejemplares de un mismo tenor en el lugar y fecha indicados.`
  }
};

const ADI_PERSONA = (prefix, label, full = false) => ({
  title: label,
  fields: [
    { id: `${prefix}_nombre`, label: 'Nombre y apellido', placeholder: 'Nombre completo', full },
    { id: `${prefix}_dni`, label: 'DNI / CUIT', placeholder: '00.000.000' },
    { id: `${prefix}_domicilio`, label: 'Domicilio', placeholder: 'Calle, número, ciudad', full: true },
    { id: `${prefix}_email`, label: 'Email', placeholder: 'email@ejemplo.com' }
  ]
});

const ADI_INMUEBLE = {
  title: 'Inmueble',
  fields: [
    { id: 'inmueble_dir', label: 'Dirección / descripción', placeholder: 'Dirección completa', full: true },
    { id: 'inmueble_matricula', label: 'Matrícula', placeholder: 'FR-12-34567' }
  ]
};

const TEMPLATES_ADICIONALES = [
  {
    id: 'recibo_reserva', nombre: 'Recibo de reserva', icon: '🧾', categoria: 'gestion', descripcion: 'Constancia de fondos recibidos',
    sections: [ADI_PERSONA('parte', 'Parte que entrega', true), ADI_INMUEBLE, { title: 'Importe', fields: [
      { id: 'monto_letras', label: 'Monto en letras', placeholder: 'Cinco mil dólares', full: true },
      { id: 'monto_num', label: 'Monto en números', placeholder: 'USD 5.000' },
      { id: 'fecha_reserva', label: 'Fecha', type: 'date' }
    ]}],
    clausulas_default: ['adi_recibo', 'adi_recibo_detalle', 'adi_recibo_custodia', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'refuerzo_reserva', nombre: 'Refuerzo de reserva', icon: '➕', categoria: 'gestion', descripcion: 'Adicional a una reserva existente',
    sections: [ADI_PERSONA('parte', 'Parte que entrega', true), ADI_INMUEBLE, { title: 'Refuerzo', fields: [
      { id: 'monto_letras', label: 'Monto en letras', placeholder: 'Dos mil dólares', full: true },
      { id: 'monto_num', label: 'Monto en números', placeholder: 'USD 2.000' },
      { id: 'fecha_reserva', label: 'Fecha de reserva original', type: 'date' }
    ]}],
    clausulas_default: ['adi_refuerzo', 'adi_refuerzo_imputacion', 'adi_refuerzo_constancia', 'adi_recibo_custodia', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'boleto_compraventa', nombre: 'Boleto de compraventa', icon: '📜', categoria: 'contrato', descripcion: 'Compraventa con o sin posesión',
    sections: [ADI_PERSONA('vendedor', 'Vendedor', true), ADI_PERSONA('comprador', 'Comprador', true), ADI_INMUEBLE, { title: 'Condiciones', fields: [
      { id: 'precio_letras', label: 'Precio total en letras', placeholder: 'Doscientos mil dólares', full: true },
      { id: 'precio_num', label: 'Precio total en números', placeholder: 'USD 200.000' },
      { id: 'forma_pago', label: 'Forma de pago', type: 'textarea', placeholder: 'Detalle de pagos', full: true },
      { id: 'fecha_escritura', label: 'Fecha de escritura', type: 'date' },
      { id: 'fecha_posesion', label: 'Fecha de posesión', type: 'date' }
    ]}],
    clausulas_default: ['bol_encabezado', 'bol_inmueble', 'bol_precio', 'bol_moneda', 'bol_estado', 'bol_hipoteca', 'bol_estado_bien', 'bol_incumplimiento', 'bol_titularidad', 'bol_escritura', 'bol_fallecimiento', 'bol_inspeccion', 'bol_documentacion', 'bol_llaves', 'bol_asentimiento', 'bol_jurisdiccion', 'bol_usufructo', 'bol_locacion', 'bol_cierre']
  },
  {
    id: 'boleto_compraventa_posesion', nombre: 'Boleto de compraventa con posesión', icon: '🏠', categoria: 'contrato', descripcion: 'Boleto y entrega de posesión',
    sections: [ADI_PERSONA('vendedor', 'Vendedor', true), ADI_PERSONA('comprador', 'Comprador', true), ADI_INMUEBLE, { title: 'Entrega y precio', fields: [
      { id: 'precio_letras', label: 'Precio total en letras', placeholder: 'Doscientos mil dólares', full: true },
      { id: 'precio_num', label: 'Precio total en números', placeholder: 'USD 200.000' },
      { id: 'forma_pago', label: 'Forma de pago', type: 'textarea', placeholder: 'Detalle de pagos', full: true },
      { id: 'fecha_posesion', label: 'Fecha de posesión', type: 'date' },
      { id: 'deudas_a_cargo', label: 'Deudas a cargo', placeholder: 'Vendedor hasta la posesión' }
    ]}],
    clausulas_default: ['bolp_encabezado', 'bolp_inmueble', 'bolp_precio', 'bolp_moneda', 'bolp_posesion', 'bolp_titulos', 'bolp_estado', 'bolp_incumplimiento', 'bolp_escritura', 'bolp_fallecimiento', 'bolp_jurisdiccion', 'bolp_documentacion', 'bolp_cierre']
  },
  {
    id: 'cesion_boleto', nombre: 'Cesión de boleto de compraventa', icon: '🔄', categoria: 'contrato', descripcion: 'Cesión de derechos del boleto',
    sections: [ADI_PERSONA('cedente', 'Cedente', true), ADI_PERSONA('cesionario', 'Cesionario', true), ADI_INMUEBLE, { title: 'Boleto y precio', fields: [
      { id: 'fecha_boleto', label: 'Fecha del boleto original', type: 'date' },
      { id: 'precio_letras', label: 'Precio de cesión en letras', placeholder: 'Noventa mil dólares', full: true },
      { id: 'precio_num', label: 'Precio de cesión en números', placeholder: 'USD 90.000' },
      { id: 'forma_pago', label: 'Forma de pago', type: 'textarea', full: true }
    ]}],
    clausulas_default: ['adi_cesion_boleto', 'adi_cesion_consentimiento', 'adi_cesion_precio', 'adi_cesion_entrega', 'adi_cesion_gastos', 'adi_cesion_incumplimiento', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'cesion_locacion', nombre: 'Cesión de contrato de locación', icon: '🔑', categoria: 'contrato', descripcion: 'Cesión de posición contractual',
    sections: [ADI_PERSONA('cedente', 'Locatario cedente', true), ADI_PERSONA('cesionario', 'Cesionario', true), ADI_PERSONA('locador', 'Locador'), ADI_INMUEBLE, { title: 'Vigencia', fields: [
      { id: 'fecha_contrato', label: 'Fecha del contrato original', type: 'date' },
      { id: 'fecha_vencimiento', label: 'Vencimiento', type: 'date' },
      { id: 'condiciones', label: 'Condiciones especiales', type: 'textarea', full: true }
    ]}],
    clausulas_default: ['adi_cesion_locacion', 'adi_cesion_consentimiento', 'adi_cesion_entrega', 'adi_cesion_gastos', 'adi_cesion_incumplimiento', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'convenio_desocupacion', nombre: 'Convenio de desocupación', icon: '🚪', categoria: 'gestion', descripcion: 'Restitución acordada del inmueble',
    sections: [ADI_PERSONA('locador', 'Locador', true), ADI_PERSONA('locatario', 'Locatario', true), ADI_INMUEBLE, { title: 'Restitución', fields: [
      { id: 'fecha_salida', label: 'Fecha de desocupación', type: 'date' },
      { id: 'condiciones', label: 'Condiciones de entrega', type: 'textarea', full: true }
    ]}],
    clausulas_default: ['adi_desocupacion', 'adi_desocupacion_entrega', 'adi_desocupacion_deudas', 'adi_desocupacion_penalidad', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'comodato', nombre: 'Contrato de comodato', icon: '🤝', categoria: 'contrato', descripcion: 'Préstamo gratuito de uso',
    sections: [ADI_PERSONA('comodante', 'Comodante', true), ADI_PERSONA('comodatario', 'Comodatario', true), ADI_INMUEBLE, { title: 'Uso y plazo', fields: [
      { id: 'destino', label: 'Destino del inmueble', placeholder: 'Vivienda', full: true },
      { id: 'fecha_vencimiento', label: 'Fecha de restitución', type: 'date' },
      { id: 'condiciones', label: 'Condiciones especiales', type: 'textarea', full: true }
    ]}],
    clausulas_default: ['adi_comodato', 'adi_comodato_destino', 'adi_comodato_conservacion', 'adi_comodato_gastos', 'adi_comodato_restitucion', 'adi_comodato_resolucion', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'mutuo', nombre: 'Contrato de mutuo', icon: '💰', categoria: 'contrato', descripcion: 'Préstamo de dinero',
    sections: [ADI_PERSONA('acreedor', 'Acreedor', true), ADI_PERSONA('deudor', 'Deudor', true), { title: 'Préstamo', fields: [
      { id: 'monto_letras', label: 'Monto en letras', placeholder: 'Cien mil pesos', full: true },
      { id: 'monto_num', label: 'Monto en números', placeholder: '$ 100.000' },
      { id: 'interes', label: 'Interés pactado', placeholder: '5% mensual' },
      { id: 'fecha_vencimiento', label: 'Fecha de vencimiento', type: 'date' },
      { id: 'forma_pago', label: 'Forma de pago', type: 'textarea', full: true }
    ]}],
    clausulas_default: ['adi_mutuo', 'adi_mutuo_entrega', 'adi_mutuo_restitucion', 'adi_mutuo_intereses', 'adi_mutuo_mora', 'adi_mutuo_garantia', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'aceptacion_compraventa', nombre: 'Aceptación / contraoferta / rechazo', icon: '✅', categoria: 'gestion', descripcion: 'Compraventa',
    sections: [ADI_PERSONA('parte', 'Parte oferente', true), ADI_INMUEBLE, { title: 'Respuesta', fields: [
      { id: 'respuesta', label: 'Respuesta', type: 'select', options: ['Aceptación', 'Contraoferta', 'Rechazo'] },
      { id: 'precio_letras', label: 'Precio en letras', placeholder: 'Precio acordado', full: true },
      { id: 'precio_num', label: 'Precio en números', placeholder: 'USD 200.000' },
      { id: 'condiciones', label: 'Condiciones', type: 'textarea', full: true },
      { id: 'fecha_firma', label: 'Fecha', type: 'date' }
    ]}],
    clausulas_default: ['adi_respuesta', 'adi_aceptacion_compra', 'adi_respuesta_plazo', 'adi_respuesta_condiciones', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'aceptacion_locacion', nombre: 'Aceptación / contraoferta / rechazo de locación', icon: '✅', categoria: 'gestion', descripcion: 'Locación',
    sections: [ADI_PERSONA('parte', 'Parte locataria', true), ADI_INMUEBLE, { title: 'Respuesta', fields: [
      { id: 'respuesta', label: 'Respuesta', type: 'select', options: ['Aceptación', 'Contraoferta', 'Rechazo'] },
      { id: 'alquiler_num', label: 'Alquiler mensual', placeholder: '$ 500.000' },
      { id: 'plazo', label: 'Plazo', placeholder: '36 meses' },
      { id: 'condiciones', label: 'Condiciones', type: 'textarea', full: true },
      { id: 'fecha_firma', label: 'Fecha', type: 'date' }
    ]}],
    clausulas_default: ['adi_respuesta', 'adi_aceptacion_locacion', 'adi_respuesta_plazo', 'adi_respuesta_condiciones', 'adi_notificaciones', 'adi_cierre']
  },
  {
    id: 'sena_compraventa', nombre: 'Seña de compraventa de inmueble', icon: '✍️', categoria: 'gestion', descripcion: 'Seña penitencial',
    sections: [ADI_PERSONA('comprador', 'Comprador', true), ADI_PERSONA('vendedor', 'Vendedor', true), ADI_INMUEBLE, { title: 'Seña y precio', fields: [
      { id: 'monto_letras', label: 'Seña en letras', placeholder: 'Cinco mil dólares', full: true },
      { id: 'monto_num', label: 'Seña en números', placeholder: 'USD 5.000' },
      { id: 'precio_letras', label: 'Precio total en letras', placeholder: 'Doscientos mil dólares', full: true },
      { id: 'precio_num', label: 'Precio total en números', placeholder: 'USD 200.000' },
      { id: 'fecha_firma', label: 'Fecha', type: 'date' }
    ]}],
    clausulas_default: ['adi_sena', 'adi_sena_entrega', 'adi_sena_imputacion', 'adi_sena_arrepentimiento', 'adi_sena_escritura', 'adi_sena_gastos', 'adi_hipoteca', 'adi_notificaciones', 'adi_cierre']
  }
];

const TEMPLATES_CARGADOS = [...TEMPLATES_COMPLETOS, ...TEMPLATES_ADICIONALES];
