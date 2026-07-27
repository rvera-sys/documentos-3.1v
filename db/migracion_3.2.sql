-- ═══════════════════════════════════════════════════════════════════════════════
-- DOCUMENTOS 3.2 — Migración correctiva
-- Ejecutar completo en Supabase → SQL Editor. Es idempotente.
-- ═══════════════════════════════════════════════════════════════════════════════

-- 1) COLUMNAS FALTANTES / TIPOS ────────────────────────────────────────────────
ALTER TABLE document_instances ADD COLUMN IF NOT EXISTS selected_clauses JSONB DEFAULT '[]'::jsonb;
ALTER TABLE document_instances ADD COLUMN IF NOT EXISTS custom_clauses  JSONB DEFAULT '[]'::jsonb;
ALTER TABLE document_instances ADD COLUMN IF NOT EXISTS locked_at TIMESTAMPTZ;
ALTER TABLE document_templates ALTER COLUMN icon TYPE VARCHAR(8);  -- los emojis no entran en VARCHAR(2)

-- 2) FIX CRÍTICO: los templates reales de la app deben existir por el FK ────────
INSERT INTO document_templates (id, name, category, icon, description) VALUES
('r_escritura', 'Reserva de compra — Escritura directa', 'compra', '🏠', 'Escritura directa'),
('r_boleto_esc', 'Reserva de compra — Boleto + escritura', 'compra', '📋', 'Boleto + escritura'),
('r_hipotecario', 'Reserva crédito — Ad referéndum hipotecario', 'compra', '🏦', 'Ad referéndum hipotecario'),
('r_cesion', 'Reserva cesión — Boleto / derechos', 'compra', '📝', 'Boleto / derechos'),
('r_emprendimiento', 'Reserva emprendimiento — Unidad en pozo', 'compra', '🏗️', 'Unidad en pozo'),
('r_loc_caba', 'Reserva locación CABA — Vivienda', 'alquiler', '🔑', 'Vivienda'),
('r_loc_pba', 'Reserva locación PBA — Vivienda', 'alquiler', '🏡', 'Vivienda'),
('r_loc_comercial', 'Reserva locación — Comercial', 'alquiler', '🏪', 'Comercial'),
('r_temp', 'Reserva temporario — Alquiler temporario', 'alquiler', '⏱️', 'Alquiler temporario'),
('aut_venta', 'Autorización de venta — Exclusiva', 'autorizacion', '✍️', 'Exclusiva'),
('aut_venta_renta', 'Autorización venta c/renta — Inversión', 'autorizacion', '💰', 'Inversión'),
('aut_cesion', 'Autorización venta — Con cesión de derechos', 'autorizacion', '🔄', 'Con cesión de derechos'),
('aut_emprendimiento', 'Autorización venta — Emprendimiento', 'autorizacion', '🏗️', 'Emprendimiento'),
('aut_locacion', 'Autorización de alquiler — Exclusiva', 'autorizacion', '📋', 'Exclusiva'),
('aut_temp_excl', 'Autorización temporario — Exclusiva', 'autorizacion', '🌟', 'Exclusiva'),
('aut_temp_noexcl', 'Autorización temporario — No exclusiva', 'autorizacion', '📄', 'No exclusiva'),
('prorroga', 'Prórroga de contrato — Extensión de plazo', 'gestion', '📅', 'Extensión de plazo'),
('reintegro', 'Reintegro de locador — Reintegro por daños', 'gestion', '💰', 'Reintegro por daños'),
('acta_fondos', 'Acta de fondos — Liquidación final', 'gestion', '🧾', 'Liquidación final'),
('desistimiento', 'Desistimiento — Renuncia anticipada', 'gestion', '🚫', 'Renuncia anticipada'),
('cont_locacion_viv', 'Contrato de locación — Vivienda', 'contrato', '🏠', 'Vivienda'),
('cont_locacion_usd', 'Contrato de locación — Vivienda USD', 'contrato', '💵', 'Vivienda USD'),
('cont_locacion_com', 'Contrato de locación — Comercio', 'contrato', '🏢', 'Comercio'),
('cont_temp_con', 'Contrato temporario — Temporario con servicios', 'contrato', '🌟', 'Temporario con servicios'),
('cont_temp_sin', 'Contrato temporario — Temporario sin servicios', 'contrato', '📄', 'Temporario sin servicios');
-- Actualiza nombre/categoría si el id ya existía
UPDATE document_templates dt SET name = v.name, category = v.category, icon = v.icon, description = v.description
FROM (VALUES
('r_escritura', 'Reserva de compra — Escritura directa', 'compra', '🏠', 'Escritura directa'),
('r_boleto_esc', 'Reserva de compra — Boleto + escritura', 'compra', '📋', 'Boleto + escritura'),
('r_hipotecario', 'Reserva crédito — Ad referéndum hipotecario', 'compra', '🏦', 'Ad referéndum hipotecario'),
('r_cesion', 'Reserva cesión — Boleto / derechos', 'compra', '📝', 'Boleto / derechos'),
('r_emprendimiento', 'Reserva emprendimiento — Unidad en pozo', 'compra', '🏗️', 'Unidad en pozo'),
('r_loc_caba', 'Reserva locación CABA — Vivienda', 'alquiler', '🔑', 'Vivienda'),
('r_loc_pba', 'Reserva locación PBA — Vivienda', 'alquiler', '🏡', 'Vivienda'),
('r_loc_comercial', 'Reserva locación — Comercial', 'alquiler', '🏪', 'Comercial'),
('r_temp', 'Reserva temporario — Alquiler temporario', 'alquiler', '⏱️', 'Alquiler temporario'),
('aut_venta', 'Autorización de venta — Exclusiva', 'autorizacion', '✍️', 'Exclusiva'),
('aut_venta_renta', 'Autorización venta c/renta — Inversión', 'autorizacion', '💰', 'Inversión'),
('aut_cesion', 'Autorización venta — Con cesión de derechos', 'autorizacion', '🔄', 'Con cesión de derechos'),
('aut_emprendimiento', 'Autorización venta — Emprendimiento', 'autorizacion', '🏗️', 'Emprendimiento'),
('aut_locacion', 'Autorización de alquiler — Exclusiva', 'autorizacion', '📋', 'Exclusiva'),
('aut_temp_excl', 'Autorización temporario — Exclusiva', 'autorizacion', '🌟', 'Exclusiva'),
('aut_temp_noexcl', 'Autorización temporario — No exclusiva', 'autorizacion', '📄', 'No exclusiva'),
('prorroga', 'Prórroga de contrato — Extensión de plazo', 'gestion', '📅', 'Extensión de plazo'),
('reintegro', 'Reintegro de locador — Reintegro por daños', 'gestion', '💰', 'Reintegro por daños'),
('acta_fondos', 'Acta de fondos — Liquidación final', 'gestion', '🧾', 'Liquidación final'),
('desistimiento', 'Desistimiento — Renuncia anticipada', 'gestion', '🚫', 'Renuncia anticipada'),
('cont_locacion_viv', 'Contrato de locación — Vivienda', 'contrato', '🏠', 'Vivienda'),
('cont_locacion_usd', 'Contrato de locación — Vivienda USD', 'contrato', '💵', 'Vivienda USD'),
('cont_locacion_com', 'Contrato de locación — Comercio', 'contrato', '🏢', 'Comercio'),
('cont_temp_con', 'Contrato temporario — Temporario con servicios', 'contrato', '🌟', 'Temporario con servicios'),
('cont_temp_sin', 'Contrato temporario — Temporario sin servicios', 'contrato', '📄', 'Temporario sin servicios')) AS v(id, name, category, icon, description)
WHERE dt.id = v.id;

-- Modelos CREA 2026 adicionales normalizados en templates-adicionales.js.
INSERT INTO document_templates (id, name, category, icon, description) VALUES
  ('recibo_reserva', 'Recibo de reserva', 'gestion', '🧾', 'Constancia de fondos recibidos'),
  ('refuerzo_reserva', 'Refuerzo de reserva', 'gestion', '➕', 'Adicional a una reserva existente'),
  ('aceptacion_compraventa', 'Aceptación / contraoferta / rechazo', 'gestion', '✅', 'Compraventa'),
  ('aceptacion_locacion', 'Aceptación / contraoferta / rechazo de locación', 'gestion', '✅', 'Locación'),
  ('sena_compraventa', 'Seña de compraventa', 'gestion', '✍️', 'Seña penitencial'),
  ('boleto_compraventa', 'Boleto de compraventa', 'contrato', '📜', 'Compraventa con o sin posesión'),
  ('boleto_compraventa_posesion', 'Boleto de compraventa con posesión', 'contrato', '🏠', 'Boleto y entrega de posesión'),
  ('cesion_boleto', 'Cesión de boleto de compraventa', 'contrato', '🔄', 'Cesión de derechos del boleto'),
  ('cesion_locacion', 'Cesión de contrato de locación', 'contrato', '🔑', 'Cesión de posición contractual'),
  ('convenio_desocupacion', 'Convenio de desocupación', 'gestion', '🚪', 'Restitución acordada del inmueble'),
  ('comodato', 'Contrato de comodato', 'contrato', '🤝', 'Préstamo gratuito de uso'),
  ('mutuo', 'Contrato de mutuo', 'contrato', '💰', 'Préstamo de dinero')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  icon = EXCLUDED.icon,
  description = EXCLUDED.description;

-- Baja lógica de los ids sembrados que la app nunca usa
UPDATE document_templates SET deleted_at = now()
WHERE deleted_at IS NULL AND id IN (
  'aut_venta_exc','aut_venta_noexcl','r_compra','aut_venta_otro',
  'aut_locacion_exc','r_temporal','aut_temporal_excl'
);

-- 3) INTEGRIDAD Y PERFORMANCE ──────────────────────────────────────────────────
ALTER TABLE document_instances
  ADD CONSTRAINT chk_state CHECK (state IN ('draft','review','final','archived')) NOT VALID;

CREATE INDEX IF NOT EXISTS idx_docs_user_updated ON document_instances(user_id, updated_at DESC)
  WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_history_doc_ver   ON draft_history(document_id, version_number DESC);
CREATE INDEX IF NOT EXISTS idx_docs_title_trgm   ON document_instances USING gin (title gin_trgm_ops);
-- si falla la línea anterior: CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- updated_at automático
CREATE OR REPLACE FUNCTION touch_updated_at() RETURNS trigger AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_docs_touch ON document_instances;
CREATE TRIGGER trg_docs_touch BEFORE UPDATE ON document_instances
  FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

-- 4) SEGURIDAD: RLS ON en todas las tablas ─────────────────────────────────────
-- El backend usa SERVICE_ROLE (que ignora RLS). Con RLS activo y sin policies,
-- la anon key deja de poder leer o escribir nada si se filtra.
ALTER TABLE users               ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_whitelist     ENABLE ROW LEVEL SECURITY;
ALTER TABLE login_attempts      ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_templates  ENABLE ROW LEVEL SECURITY;
ALTER TABLE clauses_library     ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_instances  ENABLE ROW LEVEL SECURITY;
ALTER TABLE draft_history       ENABLE ROW LEVEL SECURITY;
ALTER TABLE generated_pdfs      ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log           ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon;

-- 5) WHITELIST: sólo los agentes de la oficina pueden entrar ───────────────────
-- Cargá acá los mails de tu equipo (o importalos por CSV desde el panel de Supabase)
INSERT INTO email_whitelist (email, full_name, company_name, is_admin, status) VALUES
  ('inmovera2011@gmail.com', 'René Alejandro Vera', 'RE/MAX CREA', true, 'active')
ON CONFLICT (email) DO UPDATE SET is_admin = EXCLUDED.is_admin, status = 'active';

-- 6) VISTA DE CONTROL PARA EL PANEL ADMIN ──────────────────────────────────────
CREATE OR REPLACE VIEW v_actividad_agentes AS
SELECT u.id, u.email, u.full_name, u.last_login,
       count(d.id) FILTER (WHERE d.deleted_at IS NULL)                    AS documentos,
       count(d.id) FILTER (WHERE d.state = 'final')                       AS cerrados,
       max(d.updated_at)                                                  AS ultima_edicion
FROM users u LEFT JOIN document_instances d ON d.user_id = u.id
GROUP BY u.id, u.email, u.full_name, u.last_login;
