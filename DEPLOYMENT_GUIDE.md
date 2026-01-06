# 🚀 Guía Completa: Subir Nexo Canino a GitHub Pages

## ⚡ MÉTODO RÁPIDO (SIN GIT) - RECOMENDADO

### Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión (o crea cuenta gratis)
2. Click en el botón verde **"New"** (esquina superior derecha) o ve a: <https://github.com/new>
3. Configura el repositorio:
   - **Repository name**: `nexo-canino-landing` (sin espacios)
   - **Description**: "Landing page premium para Nexo Canino Barcelona"
   - **Public** (debe ser público para GitHub Pages gratis)
   - ✅ **Add a README file** (marcado)
   - Click en **"Create repository"**

### Paso 2: Subir Archivos por Web

1. En tu nuevo repositorio, click en **"Add file"** → **"Upload files"**
2. Arrastra TODOS los archivos de la carpeta:

   ```
   C:\Users\miner\.gemini\antigravity\scratch\nexo-canino-landing\
   ```

   **EXCEPTO** las carpetas `.git` si existen

3. **Archivos a subir**:
   - ✅ index.html
   - ✅ index.css
   - ✅ script.js
   - ✅ README.md
   - ✅ package.json
   - ✅ vercel.json
   - ✅ netlify.toml
   - ✅ carpeta `assets/` completa (con logo.jpg y reference.jpg)

4. Escribe en commit message: "Add Nexo Canino landing page files"
5. Click en **"Commit changes"**

### Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **"Settings"** (pestaña superior)
2. En el menú lateral izquierdo, busca **"Pages"** (sección "Code and automation")
3. En **"Source"**, selecciona:
   - **Branch**: `main` (o `master`)
   - **Folder**: `/root`
4. Click en **"Save"**
5. ⏱️ Espera 2-3 minutos

### Paso 4: Obtener tu URL

Después de 2-3 minutos, verás un mensaje verde:

```
✅ Your site is published at https://TU-USUARIO.github.io/nexo-canino-landing/
```

**¡ESA ES TU URL PÚBLICA!** 🎉

---

## 🛠️ MÉTODO ALTERNATIVO (CON GIT INSTALADO)

Si prefieres usar Git por terminal, sigue estos pasos:

### Paso 1: Instalar Git

1. Descarga Git desde: <https://git-scm.com/download/win>
2. Ejecuta el instalador
3. Usa configuración por defecto (Next → Next → Install)
4. Reinicia tu terminal PowerShell

### Paso 2: Configurar Git (Primera Vez)

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

### Paso 3: Subir Proyecto

```powershell
# Navegar al proyecto
cd C:\Users\miner\.gemini\antigravity\scratch\nexo-canino-landing

# Inicializar Git
git init

# Añadir archivos
git add .

# Hacer commit
git commit -m "Initial commit: Nexo Canino premium landing page"

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/nexo-canino-landing.git

# Subir archivos
git branch -M main
git push -u origin main
```

### Paso 4: Activar GitHub Pages

(Mismo que el Método Rápido - Paso 3 y 4)

---

## 🎯 Después del Deployment

### Verificar que Funciona

1. Abre la URL: `https://TU-USUARIO.github.io/nexo-canino-landing/`
2. Verifica que:
   - ✅ El logo aparece
   - ✅ Los colores son correctos (dorado/oscuro)
   - ✅ Los botones funcionan
   - ✅ El scroll es suave
   - ✅ Responsive en móvil

### Si el Logo NO Aparece

Es posible que las rutas de las imágenes necesiten ajuste. En `index.html`, cambia:

```html
<!-- De esto: -->
<img src="assets/logo.jpg" alt="Nexo Canino Logo" class="hero-logo">

<!-- A esto: -->
<img src="./assets/logo.jpg" alt="Nexo Canino Logo" class="hero-logo">
```

O sube las imágenes a un CDN como Imgur/Cloudinary.

---

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar `nexocanino.com` en lugar de `github.io`:

1. Compra dominio en Namecheap/GoDaddy (~10€/año)
2. En GitHub Pages settings, añade tu dominio en "Custom domain"
3. En tu proveedor de dominio, configura DNS:

   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: TU-USUARIO.github.io
   ```

---

## 📱 Compartir la Página

Una vez publicada, comparte:

```
🐕 Nexo Canino - Transformación Canina en Barcelona
👉 https://TU-USUARIO.github.io/nexo-canino-landing/

✨ Oferta Fundadores: Solo 5 plazas disponibles
💰 297€ (70% descuento)
```

---

## 🔄 Actualizar la Página (Futuro)

### Con Web Interface

1. Ve a tu repositorio en GitHub
2. Click en el archivo que quieres editar
3. Click en el ícono del lápiz (editar)
4. Haz cambios
5. Scroll down → "Commit changes"
6. Espera 1-2 minutos → cambios en vivo

### Con Git

```powershell
# Hacer cambios en archivos locales
# Luego:
git add .
git commit -m "Actualización: [describe el cambio]"
git push
```

---

## 🆘 Troubleshooting

### "404 - Page not found"

- ✅ Verifica que el repositorio sea **Public**
- ✅ Verifica que GitHub Pages esté activado
- ✅ Espera 5 minutos y refresca

### "Estilos no aparecen"

- ✅ Verifica que `index.css` esté en el repositorio
- ✅ Abre DevTools (F12) y mira errores en Console

### "Logo no aparece"

- ✅ Verifica que la carpeta `assets/` esté subida
- ✅ Verifica que `logo.jpg` esté dentro de `assets/`
- ✅ Prueba cambiar ruta a `./assets/logo.jpg`

---

## 📊 Analytics (Opcional pero Recomendado)

Después de publicar, añade Google Analytics:

1. Crea cuenta en: <https://analytics.google.com>
2. Obtén tu ID de medición (G-XXXXXXXXXX)
3. Edita `index.html` en GitHub
4. Añade antes de `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Checklist Final

Antes de compartir la URL:

- [ ] Página pública y accesible
- [ ] Logo visible
- [ ] Número de WhatsApp actualizado
- [ ] Enlaces de redes sociales actualizados
- [ ] Probado en móvil (abre en tu teléfono)
- [ ] Todos los CTAs funcionan
- [ ] Google Analytics configurado (opcional)

---

## 🎉 ¡Listo

Tu landing page estará disponible 24/7 GRATIS en GitHub Pages.

**Siguiente paso**: Comparte la URL en redes sociales, grupos de dueños de perros en Barcelona, y ¡empieza a captar clientes fundadores!
