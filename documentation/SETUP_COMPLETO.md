# 🚀 DOCUMENTOS 3.1 — SETUP COMPLETO (30 MINUTOS)

## Paso 1: Supabase (5 min)

1. Ir a https://supabase.com
2. Crear cuenta y nuevo proyecto "documentos-3-1"
3. Esperar provisioning (2-3 min)
4. Ir a SQL Editor
5. Copiar todo el contenido de `db/schema.sql`
6. Pegar en SQL Editor y ejecutar
7. Copiar credenciales:
   - Project URL: `https://xxx.supabase.co`
   - Anon Key: `eyJ...`
8. Guardar en `.env.local`

## Paso 2: Google OAuth (5 min)

1. Google Cloud Console: https://console.cloud.google.com
2. Crear proyecto: "Documentos CREA"
3. Habilitar APIs:
   - Google+ API
   - OAuth 2.0 APIs
4. Credentials → OAuth 2.0 Client ID (Web Application)
5. Authorized redirect URIs:
   ```
   http://localhost:3000
   https://tu-user.github.io/documentos-3-1
   https://documentos-3-1.vercel.app/api/auth/google
   ```
6. Copiar:
   - Client ID
   - Client Secret
7. Guardar en `.env.local`

## Paso 3: Configuración Local (5 min)

1. Copiar `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Editar `.env.local`:
   ```env
   SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_ANON_KEY=eyJ...
   GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=xxx
   JWT_SECRET=tu-secret-aleatorio-12345
   ```

3. Editar `public/js/config.js`:
   - Reemplazar `YOUR_GOOGLE_CLIENT_ID` con tu Client ID
   - Verificar `API_BASE_URL` (para desarrollo: localhost, para producción: vercel)

4. Instalar dependencias:
   ```bash
   npm install
   ```

## Paso 4: Vercel (5 min)

1. Ir a https://vercel.com
2. "Add New → Project"
3. Conectar GitHub repository
4. Settings → Environment Variables
5. Agregar variables:
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
   - GOOGLE_CLIENT_ID
   - GOOGLE_CLIENT_SECRET
   - JWT_SECRET
6. Deploy

## Paso 5: GitHub Pages (5 min)

1. Ir a tu repo en GitHub
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: `main` / Folder: `/public`
5. Esperar deploy (1-2 min)
6. Tu sitio estará en: `https://tu-user.github.io/documentos-3-1`

## Paso 6: Habilitar Tu Email (2 min)

En Supabase:

1. SQL Editor
2. Ejecutar:
   ```sql
   INSERT INTO email_whitelist (email, full_name, company_name, is_admin)
   VALUES ('tu@email.com', 'Tu Nombre', 'RE/MAX CREA', true);
   ```

## Verificación Final

1. Abre: `https://tu-user.github.io/documentos-3-1`
2. Haz click en "Sign in with Google"
3. Usa tu email autorizado
4. ✅ Deberías ver el Dashboard

¡LISTO! Sistema en vivo.

## Troubleshooting

**Error 403 "Email not authorized":**
- Verifica que tu email esté en `email_whitelist`
- Asegúrate de que `status = 'active'`

**Error "CORS":**
- Verifica que Vercel tenga las env vars correctas
- Verifica que GitHub Pages pueda alcanzar Vercel

**Error "Google sign in":**
- Verifica que `GOOGLE_CLIENT_ID` en `config.js` sea correcto
- Verifica que tu dominio esté en "Authorized redirect URIs"

