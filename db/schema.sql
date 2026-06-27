-- DOCUMENTOS 3.1 — Schema PostgreSQL (Supabase)

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255),
    company_name VARCHAR(255),
    picture_url VARCHAR(500),
    is_admin BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS email_whitelist (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255),
    company_name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'active',
    is_admin BOOLEAN DEFAULT false,
    added_at TIMESTAMP DEFAULT now(),
    added_by UUID REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS login_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    google_name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending',
    attempted_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS document_templates (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50),
    icon VARCHAR(2),
    description TEXT,
    version INT DEFAULT 1,
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS clauses_library (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clause_id VARCHAR(100) UNIQUE,
    name VARCHAR(255) NOT NULL,
    text_template TEXT NOT NULL,
    variables_required JSONB,
    category VARCHAR(50),
    version INT DEFAULT 1,
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS document_instances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    template_id VARCHAR(50) NOT NULL REFERENCES document_templates(id),
    title VARCHAR(255) NOT NULL,
    form_data JSONB,
    selected_clauses JSONB,
    custom_clauses JSONB,
    state VARCHAR(50) DEFAULT 'draft',
    version INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS draft_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES document_instances(id) ON DELETE CASCADE,
    snapshot JSONB NOT NULL,
    version_number INT NOT NULL,
    action VARCHAR(100),
    edited_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS generated_pdfs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES document_instances(id) ON DELETE CASCADE,
    pdf_url VARCHAR(500),
    pdf_storage_path VARCHAR(500),
    exported_snapshot JSONB,
    locked_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    document_id UUID REFERENCES document_instances(id),
    details JSONB,
    created_at TIMESTAMP DEFAULT now()
);

-- INSERTS INICIALES
INSERT INTO document_templates (id, name, category, icon, description) VALUES
('aut_venta_exc', 'Autorización de venta — exclusiva', 'compra', '📝', 'Para autorizar venta exclusiva de inmueble'),
('aut_venta_noexcl', 'Autorización de venta — no exclusiva', 'compra', '📋', 'Para autorizar venta no exclusiva'),
('desistimiento', 'Desistimiento de compra', 'compra', '❌', 'Para desistirse de una compra en curso'),
('r_compra', 'Reserva de compra', 'compra', '✅', 'Documento de reserva de inmueble'),
('r_emprendimiento', 'Reserva de emprendimiento', 'compra', '🏗️', 'Reserva de unidad en emprendimiento'),
('aut_venta_renta', 'Autorización de venta con renta', 'compra', '🎯', 'Autorización de venta con cláusula de renta'),
('r_cesion', 'Reserva de cesión', 'compra', '📑', 'Documento de cesión de derechos'),
('aut_venta_otro', 'Autorización de venta — otros casos', 'compra', '📄', 'Para casos especiales de venta'),
('aut_locacion_exc', 'Autorización de alquiler — exclusiva', 'alquiler', '🏠', 'Para autorizar alquiler exclusivo'),
('cont_locacion_viv', 'Contrato de locación — vivienda (CABA)', 'alquiler', '🏘️', 'Contrato de alquiler de vivienda en CABA'),
('cont_locacion_usd', 'Contrato de locación — vivienda en USD', 'alquiler', '💵', 'Contrato de alquiler pagadero en USD'),
('cont_locacion_com', 'Contrato de locación comercial', 'alquiler', '🏪', 'Contrato para locación de local comercial'),
('r_loc_caba', 'Reserva de locación CABA', 'alquiler', '🔑', 'Reserva de alquiler en CABA'),
('r_loc_pba', 'Reserva de locación PBA', 'alquiler', '🔑', 'Reserva de alquiler en Provincia de Buenos Aires'),
('r_loc_comercial', 'Reserva de locación comercial', 'alquiler', '🏢', 'Reserva de local comercial'),
('r_temporal', 'Reserva de alquiler temporario', 'alquiler', '⏱️', 'Para alquiler de corta duración'),
('aut_temporal_excl', 'Autorización temporario — exclusiva', 'alquiler', '📌', 'Autorización de temporario exclusivo')
ON CONFLICT DO NOTHING;

INSERT INTO clauses_library (clause_id, name, text_template, category) VALUES
('encabezado', 'Encabezado', 'OFERTA - RESERVA DE COMPRA INMUEBLE\n\nBuenos Aires, {{fecha_hoy}}.', NULL),
('datos_cliente', 'Datos del cliente', 'RECIBIMOS de {{cliente_nombre}}, DNI {{cliente_dni}}, domicilio en {{cliente_domicilio}}.', NULL),
('clausula_precio', 'Cláusula 1 — Precio total', 'El precio total acordado es de {{precio_num}} ({{precio_letras}}). Se entrega seña por el 10% del monto total.', 'compra'),
('clausula_pago', 'Cláusula 2 — Forma de pago', 'El monto restante será abonado en efectivo al momento de la firma del instrumento definitivo de compraventa.', 'compra'),
('clausula_jurisdiccion', 'Cláusula 3 — Jurisdicción', 'Ambas partes se someten a la jurisdicción de los Tribunales Ordinarios en lo Civil de {{jurisdiccion}}.', NULL),
('firma_partes', 'Firma de partes', 'En prueba de conformidad, se firman dos ejemplares de este instrumento.', NULL),
('datos_corredor', 'Datos del corredor', 'CORREDOR INMOBILIARIO: René Alejandro Vera (CSI 5848 / CPI 6778)\nRE/MAX CREA', NULL),
('clausula_duracion', 'Cláusula 1 — Duración', 'El contrato de locación tiene duración de {{duracion_meses}} meses desde el {{fecha_inicio}}.', 'alquiler'),
('clausula_canon', 'Cláusula 2 — Canon mensual', 'El canon mensual es de {{canon_monto}} {{canon_moneda}}, pagadero el {{canon_vencimiento}}.', 'alquiler'),
('clausula_garantia', 'Cláusula 4 — Garantía', 'El inmueble se entrega garantizado contra reclamos de terceros y libre de hipotecas.', 'compra'),
('clausula_garantia_loc', 'Cláusula 4 — Garantía locación', 'El inquilino deposita como garantía {{monto_garantia}} {{moneda_garantia}}.', 'alquiler')
ON CONFLICT (clause_id) DO NOTHING;

-- ÍNDICES
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_documents_user ON document_instances(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_state ON document_instances(state);
CREATE INDEX IF NOT EXISTS idx_audit_log_user ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_document ON audit_log(document_id);
