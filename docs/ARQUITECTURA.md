# 🏗️ ARQUITECTURA DOCUMENTOS 3.1

## Stack Tecnológico

```
Frontend:  HTML/CSS/JavaScript → GitHub Pages
Backend:   Node.js → Vercel Functions
Database:  PostgreSQL → Supabase
Auth:      Google OAuth2 + JWT
```

## Flujo de Autenticación

```
1. Usuario abre: https://tu-user.github.io/documentos-3-1
2. Click "Sign in with Google"
3. Google popup → usuario completa credenciales
4. Google envía token a frontend
5. Frontend envía token a: POST /api/auth/google
6. Backend verifica whitelist en Supabase
7. Si autorizado: genera JWT y retorna
8. Frontend guarda JWT en localStorage
9. Todos los siguientes requests incluyen: "Authorization: Bearer {JWT}"
10. ✅ Usuario autenticado
```

## Estructura de Base de Datos

```
users
├─ id (UUID)
├─ email (unique)
├─ full_name
├─ is_admin
├─ last_login
└─ created_at

email_whitelist
├─ email (unique)
├─ status (active/inactive)
├─ is_admin
└─ added_at

document_instances
├─ id (UUID)
├─ user_id (FK users)
├─ template_id (FK templates)
├─ title
├─ form_data (JSONB)
├─ state (draft/completed)
├─ version
└─ updated_at

document_templates
├─ id (VARCHAR)
├─ name
├─ category (compra/alquiler)
├─ icon
└─ description

clauses_library
├─ clause_id (unique)
├─ name
├─ text_template
├─ category
└─ version

draft_history
├─ document_id (FK)
├─ snapshot (JSONB)
├─ version_number
└─ edited_by

audit_log
├─ user_id (FK)
├─ action
├─ document_id (FK)
├─ details (JSONB)
└─ created_at
```

## Flujo de Creación de Documento

```
1. Usuario entra a editor.html?new=true
2. Selecciona template (ej: aut_venta_exc)
3. POST /api/documents
   ├─ Crea documento en BD
   ├─ Estado: draft
   ├─ Versión: 1
   └─ Retorna documento con ID
4. URL cambia a: editor.html?id={id}
5. Usuario completa formulario
6. Cada cambio: renderiza preview en vivo
7. Click "Guardar":
   ├─ PUT /api/documents/{id}
   ├─ Incremente versión
   ├─ Crea snapshot en draft_history
   └─ Auditoría en audit_log
8. Click "PDF":
   ├─ html2pdf() convierte preview a PDF
   ├─ POST /api/documents/{id}/export
   └─ Descarga PDF
```

## Versionado y Snapshots

- Cada vez que editas: versión++
- Snapshot: foto completa del documento (form_data, cláusulas, etc)
- Historial: acceso a cualquier versión anterior
- Restauración: volver a versión anterior

## Seguridad

- **Autenticación:** Google OAuth2 + JWT
- **Autorización:** Whitelist en Supabase
- **Row Level Security:** PostgreSQL RLS policies (opcional)
- **Tokens:** Expiran en 24 horas
- **Auditoría:** Cada acción se registra en audit_log

