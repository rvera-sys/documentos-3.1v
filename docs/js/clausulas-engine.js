// ═══════════════════════════════════════════════════════════════════════════════
// CLAUSULAS ENGINE v3.2 — Documentos modulares por cláusula
// Cada documento = lista ordenada de bloques (cláusulas) que se pueden
// agregar, quitar, reordenar y editar. La numeración ordinal se recalcula sola.
// ═══════════════════════════════════════════════════════════════════════════════

const ORDINALES = [
  'PRIMERA', 'SEGUNDA', 'TERCERA', 'CUARTA', 'QUINTA', 'SEXTA', 'SÉPTIMA',
  'OCTAVA', 'NOVENA', 'DÉCIMA', 'DÉCIMO PRIMERA', 'DÉCIMO SEGUNDA',
  'DÉCIMO TERCERA', 'DÉCIMO CUARTA', 'DÉCIMO QUINTA', 'DÉCIMO SEXTA',
  'DÉCIMO SÉPTIMA', 'DÉCIMO OCTAVA', 'DÉCIMO NOVENA', 'VIGÉSIMA',
  'VIGÉSIMO PRIMERA', 'VIGÉSIMO SEGUNDA', 'VIGÉSIMO TERCERA', 'VIGÉSIMO CUARTA',
  'VIGÉSIMO QUINTA', 'VIGÉSIMO SEXTA', 'VIGÉSIMO SÉPTIMA', 'VIGÉSIMO OCTAVA',
  'VIGÉSIMO NOVENA', 'TRIGÉSIMA'
];

function ordinalFem(n) {
  return ORDINALES[n - 1] || `CLÁUSULA ${n}`;
}

// Quita el ordinal cableado del título original ("SÉPTIMA: HONORARIOS" -> "HONORARIOS")
const RE_ORDINAL = new RegExp(
  '^\\s*(?:' + ORDINALES.join('|') + '|ONCEAVA|DOCEAVA|TRECEAVA|CATORCEAVA|UNDÉCIMA|DUODÉCIMA)\\s*[:.\\-–]\\s*',
  'i'
);

function limpiarTitulo(titulo) {
  return (titulo || '').replace(RE_ORDINAL, '').trim();
}

// Bloques que NO llevan número de cláusula (encabezado, firma, cierre)
function esNumerable(titulo) {
  const t = limpiarTitulo(titulo).toUpperCase();
  if (!t) return false;
  return !/^(ENCABEZAMIENTO|ENCABEZADO|FIRMA|FIRMAS|CIERRE|LUGAR Y FECHA|LEYENDA)/.test(t);
}

// ───────────────────────────────────────────────────────────────────────────────
// CLÁUSULAS OPCIONALES — biblioteca extra, disponible en todos los documentos.
// Redacción base para revisar con escribano/asesor legal antes de usar en firma.
// ───────────────────────────────────────────────────────────────────────────────
const CLAUSULAS_OPCIONALES = {
  'opt_uif_sujeto': {
    titulo: 'PREVENCIÓN DE LAVADO DE ACTIVOS (UIF)',
    familia: 'general',
    texto: `Las partes declaran bajo juramento que los fondos aplicados a la presente operación tienen origen lícito y se obligan a suministrar al corredor interviniente la documentación respaldatoria que éste requiera en cumplimiento de la Ley 25.246, sus modificatorias y las Resoluciones de la Unidad de Información Financiera aplicables a los agentes y corredores inmobiliarios. Asimismo, declaran si revisten o no la condición de Persona Expuesta Políticamente (PEP) y se comprometen a informar cualquier modificación de dicha condición.`
  },
  'opt_datos_personales': {
    titulo: 'PROTECCIÓN DE DATOS PERSONALES',
    familia: 'general',
    texto: `Las partes prestan conformidad para que sus datos personales sean tratados por el corredor interviniente con la exclusiva finalidad de ejecutar la presente operación y dar cumplimiento a las obligaciones legales, regulatorias y fiscales aplicables, en los términos de la Ley 25.326. El titular podrá ejercer los derechos de acceso, rectificación y supresión conforme la normativa vigente.`
  },
  'opt_mediacion': {
    titulo: 'MEDIACIÓN PREVIA OBLIGATORIA',
    familia: 'general',
    texto: `Con carácter previo a promover cualquier acción judicial derivada del presente, las partes se someterán al procedimiento de mediación prejudicial obligatoria que corresponda según la jurisdicción pactada.`
  },
  'opt_domicilios_electronicos': {
    titulo: 'DOMICILIOS Y NOTIFICACIONES ELECTRÓNICAS',
    familia: 'general',
    texto: `Las partes constituyen domicilios especiales en los indicados en el encabezamiento y aceptan como válidas y fehacientes las notificaciones cursadas a las direcciones de correo electrónico denunciadas, las que se tendrán por recibidas el día hábil siguiente a su envío, salvo prueba en contrario.`
  },
  'opt_firma_digital': {
    titulo: 'FIRMA ELECTRÓNICA Y EJEMPLARES',
    familia: 'general',
    texto: `Las partes acuerdan que el presente podrá suscribirse en ejemplares separados y mediante firma electrónica o digital, reconociéndose mutuamente plena validez a dichos instrumentos en los términos de la Ley 25.506 y del artículo 288 del Código Civil y Comercial de la Nación.`
  },
  'opt_mora_automatica': {
    titulo: 'MORA AUTOMÁTICA E INTERESES',
    familia: 'general',
    texto: `La mora se producirá de pleno derecho por el mero vencimiento de los plazos pactados, sin necesidad de interpelación previa alguna. Las sumas adeudadas devengarán un interés punitorio equivalente a {{interes_punitorio}} diario hasta su efectiva cancelación.`
  },
  'opt_mascotas': {
    titulo: 'ANIMALES DE COMPAÑÍA',
    familia: 'alquiler',
    texto: `EL/LA LOCATARIO/A queda autorizado/a a mantener en el inmueble animales de compañía, asumiendo la responsabilidad exclusiva por los daños que éstos pudieran ocasionar en la unidad y en las partes comunes, y obligándose a cumplir el reglamento de copropiedad y administración vigente.`
  },
  'opt_prohibicion_fumar': {
    titulo: 'PROHIBICIÓN DE FUMAR',
    familia: 'alquiler',
    texto: `Queda expresamente prohibido fumar dentro de la unidad locada. El incumplimiento facultará al locador a exigir la reparación integral de los daños derivados, incluidos los trabajos de pintura y saneamiento que resulten necesarios.`
  },
  'opt_rescision_1221': {
    titulo: 'RESCISIÓN ANTICIPADA (Art. 1221 CCCN)',
    familia: 'alquiler',
    texto: `EL/LA LOCATARIO/A podrá resolver anticipadamente el presente contrato transcurridos seis (6) meses de su inicio, notificando su decisión al locador con una antelación mínima de un (1) mes y abonando la indemnización prevista en el artículo 1221 del Código Civil y Comercial de la Nación, salvo que la notificación se realice con tres (3) meses de anticipación y hubieren transcurrido al menos seis (6) meses de contrato, supuesto en el cual no corresponderá indemnización alguna.`
  },
  'opt_inventario_anexo': {
    titulo: 'INVENTARIO Y ESTADO DE CONSERVACIÓN (ANEXO)',
    familia: 'alquiler',
    texto: `Las partes suscriben como Anexo el inventario de bienes, artefactos e instalaciones existentes en el inmueble, con constancia de su estado de conservación y funcionamiento, el que forma parte integrante del presente y servirá de base para la restitución de la unidad al vencimiento del plazo.`
  },
  'opt_seguro_integral': {
    titulo: 'SEGURO INTEGRAL',
    familia: 'alquiler',
    texto: `EL/LA LOCATARIO/A se obliga a contratar y mantener vigente durante toda la locación un seguro integral de responsabilidad civil e incendio sobre el inmueble y su contenido, debiendo acreditar su vigencia al locador cada vez que le sea requerido.`
  },
  'opt_estudio_titulos': {
    titulo: 'ESTUDIO DE TÍTULOS Y AD REFERÉNDUM',
    familia: 'compra',
    texto: `La presente operación se celebra ad referéndum del resultado favorable del estudio de títulos, informes de dominio, inhibiciones y demás informes registrales que practique el escribano interviniente. De arrojar dichos informes observaciones que impidan la transmisión de un título perfecto, la operación quedará sin efecto, debiendo restituirse las sumas entregadas sin intereses ni indemnización alguna.`
  },
  'opt_asentimiento_conyugal': {
    titulo: 'ASENTIMIENTO CONYUGAL (Art. 470 CCCN)',
    familia: 'compra',
    texto: `La parte vendedora declara que, de resultar el inmueble un bien ganancial o la vivienda familiar, obtendrá y acreditará el asentimiento de su cónyuge o conviviente inscripto en los términos de los artículos 456, 470 y concordantes del Código Civil y Comercial de la Nación, con carácter previo al otorgamiento de la escritura traslativa de dominio.`
  },
  'opt_libre_ocupantes': {
    titulo: 'ENTREGA LIBRE DE OCUPANTES Y DEUDAS',
    familia: 'compra',
    texto: `La parte vendedora se obliga a entregar el inmueble libre de ocupantes, intrusos, muebles y objetos, y al día en el pago de impuestos, tasas, contribuciones, servicios y expensas devengados hasta la fecha de la posesión, sirviendo el presente de suficiente constancia.`
  },
  'opt_gastos_escrituracion': {
    titulo: 'GASTOS DE ESCRITURACIÓN',
    familia: 'compra',
    texto: `Los gastos, honorarios e impuestos derivados del otorgamiento de la escritura traslativa de dominio estarán a cargo de {{gastos_escritura_cargo}}, conforme los usos y costumbres de la plaza y la normativa aplicable.`
  },
  'opt_libre': {
    titulo: 'CLÁUSULA ADICIONAL',
    familia: 'general',
    texto: `[Redactá aquí el texto de la cláusula adicional. Podés usar variables entre llaves dobles, por ejemplo {{inmueble_dir}}.]`
  }
};

// Catálogo unificado (cláusulas de los 25 templates + opcionales)
function catalogoCompleto() {
  const base = (typeof CLAUSULAS_COMPLETAS !== 'undefined') ? CLAUSULAS_COMPLETAS : {};
  return { ...base, ...CLAUSULAS_OPCIONALES };
}

function buscarClausula(ref) {
  return catalogoCompleto()[ref] || null;
}

// ───────────────────────────────────────────────────────────────────────────────
// CONSTRUCCIÓN Y MANIPULACIÓN DE LA LISTA DE CLÁUSULAS DEL DOCUMENTO
// ───────────────────────────────────────────────────────────────────────────────

function uid() {
  return 'c' + Math.random().toString(36).slice(2, 10);
}

/** Arma la lista inicial a partir de clausulas_default del template. */
function construirDesdeTemplate(template) {
  return (template.clausulas_default || []).map(ref => {
    const c = buscarClausula(ref) || { titulo: ref, texto: '' };
    return {
      uid: uid(),
      ref,
      titulo: limpiarTitulo(c.titulo),
      texto: c.texto || '',
      incluida: true,
      editada: false,
      origen: 'template'
    };
  });
}

/** Reconstruye desde lo guardado, refrescando el texto de las no editadas. */
function hidratarGuardadas(guardadas) {
  return (guardadas || []).map(g => {
    const cat = g.ref ? buscarClausula(g.ref) : null;
    return {
      uid: g.uid || uid(),
      ref: g.ref || null,
      titulo: g.titulo || (cat ? limpiarTitulo(cat.titulo) : 'CLÁUSULA'),
      texto: g.editada ? (g.texto || '') : (cat ? cat.texto : (g.texto || '')),
      incluida: g.incluida !== false,
      editada: !!g.editada,
      origen: g.origen || 'template'
    };
  });
}

function agregarClausula(lista, ref, posicion) {
  const c = buscarClausula(ref);
  if (!c) return lista;
  const nueva = {
    uid: uid(),
    ref,
    titulo: limpiarTitulo(c.titulo),
    texto: c.texto || '',
    incluida: true,
    editada: false,
    origen: ref.startsWith('opt_') ? 'opcional' : 'catalogo'
  };
  const out = lista.slice();
  out.splice(typeof posicion === 'number' ? posicion : out.length, 0, nueva);
  return out;
}

function agregarClausulaLibre(lista, titulo, texto) {
  return lista.concat([{
    uid: uid(),
    ref: null,
    titulo: (titulo || 'CLÁUSULA ADICIONAL').toUpperCase(),
    texto: texto || '',
    incluida: true,
    editada: true,
    origen: 'custom'
  }]);
}

function quitarClausula(lista, uidTarget) {
  return lista.filter(c => c.uid !== uidTarget);
}

function moverClausula(lista, uidTarget, delta) {
  const i = lista.findIndex(c => c.uid === uidTarget);
  const j = i + delta;
  if (i < 0 || j < 0 || j >= lista.length) return lista;
  const out = lista.slice();
  const [x] = out.splice(i, 1);
  out.splice(j, 0, x);
  return out;
}

function reordenar(lista, uidTarget, indiceDestino) {
  const i = lista.findIndex(c => c.uid === uidTarget);
  if (i < 0) return lista;
  const out = lista.slice();
  const [x] = out.splice(i, 1);
  out.splice(Math.max(0, Math.min(indiceDestino, out.length)), 0, x);
  return out;
}

// ───────────────────────────────────────────────────────────────────────────────
// RENDER
// ───────────────────────────────────────────────────────────────────────────────

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

/** Reemplaza {{var}}. Los faltantes quedan resaltados para que se vean antes de firmar. */
function interpolar(texto, data, resaltar) {
  return String(texto || '').replace(/\{\{(\w+)\}\}/g, (_, k) => {
    const v = data[k];
    if (v === undefined || v === null || String(v).trim() === '') {
      return resaltar
        ? `<span class="ph-falta" title="Campo sin completar">[${esc(k)}]</span>`
        : `[${esc(k)}]`;
    }
    return esc(v);
  });
}

/** Devuelve la lista de placeholders sin completar (para el checklist previo a firma). */
function faltantes(lista, data) {
  const out = new Set();
  lista.filter(c => c.incluida).forEach(c => {
    String(c.texto || '').replace(/\{\{(\w+)\}\}/g, (_, k) => {
      const v = data[k];
      if (v === undefined || v === null || String(v).trim() === '') out.add(k);
      return '';
    });
  });
  return [...out];
}

/** HTML del documento final, con numeración ordinal recalculada. */
function renderDocumento(lista, data, opciones) {
  const o = opciones || {};
  let n = 0;
  const cuerpo = lista.filter(c => c.incluida).map(c => {
    const numerable = esNumerable(c.titulo);
    if (numerable) n++;
    const encabezado = c.titulo
      ? `<h4 class="cl-titulo">${numerable ? ordinalFem(n) + ': ' : ''}${esc(limpiarTitulo(c.titulo))}</h4>`
      : '';
    return `<section class="cl-bloque" data-uid="${c.uid}">
      ${encabezado}
      <p class="cl-texto">${interpolar(c.texto, data, o.resaltarFaltantes !== false)}</p>
    </section>`;
  }).join('');

  return `<article class="doc-hoja">
    <header class="doc-head">
      <h1>${esc(o.titulo || '')}</h1>
      <div class="doc-lugar">${esc(o.lugarFecha || '')}</div>
      <hr>
    </header>
    ${cuerpo}
    <footer class="doc-foot">
      <div class="doc-firmas">
        <div class="firma"><span></span><small>Firma y aclaración</small></div>
        <div class="firma"><span></span><small>Firma y aclaración</small></div>
      </div>
      <p class="doc-pie">René Alejandro Vera — Martillero, Corredor y Tasador Inmobiliario · CPI 6778 / CMCPSI 5848 · RE/MAX CREA</p>
    </footer>
  </article>`;
}

/** Texto plano (para copiar a Word o enviar por mail). */
function renderTextoPlano(lista, data, titulo) {
  let n = 0;
  const partes = lista.filter(c => c.incluida).map(c => {
    const numerable = esNumerable(c.titulo);
    if (numerable) n++;
    const head = c.titulo ? (numerable ? ordinalFem(n) + ': ' : '') + limpiarTitulo(c.titulo) : '';
    const cuerpo = String(c.texto || '').replace(/\{\{(\w+)\}\}/g, (_, k) => {
      const v = data[k];
      return (v === undefined || v === null || String(v).trim() === '') ? `[${k}]` : v;
    });
    return (head ? head + '\n' : '') + cuerpo;
  });
  return (titulo ? titulo.toUpperCase() + '\n\n' : '') + partes.join('\n\n');
}
