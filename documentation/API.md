# 📚 API DOCUMENTOS 3.1

## Base URL

```
Development: http://localhost:3000
Production: https://documentos-3-1.vercel.app
```

## Autenticación

Todos los endpoints requieren:

```
Authorization: Bearer {JWT_TOKEN}
```

## Endpoints

### 1. Autenticación

#### POST /api/auth/google
Login con Google OAuth2

**Body:**
```json
{
  "token": "google_id_token",
  "email": "user@example.com",
  "name": "User Name",
  "picture": "https://..."
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJ...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "User Name",
    "is_admin": false
  }
}
```

### 2. Documentos

#### GET /api/documents
Listar documentos del usuario

**Query:**
- `state`: "draft" | "completed" (default: "draft")

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Mi Documento",
    "template_id": "aut_venta_exc",
    "state": "draft",
    "version": 1,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
]
```

#### POST /api/documents
Crear nuevo documento

**Body:**
```json
{
  "template_id": "aut_venta_exc",
  "title": "Mi Documento",
  "form_data": {}
}
```

#### GET /api/documents/{id}
Obtener documento específico

#### PUT /api/documents/{id}
Actualizar documento

**Body:**
```json
{
  "title": "Título actualizado",
  "form_data": { "campo": "valor" }
}
```

#### DELETE /api/documents/{id}
Eliminar documento (soft delete)

### 3. Exportación

#### POST /api/documents/{id}/export
Generar PDF

**Body:**
```json
{
  "filename": "documento.pdf"
}
```

### 4. Historial

#### GET /api/documents/{id}/history
Ver historial de versiones

