# 🚀 Activar GitHub Pages - Instrucciones Finales

## ✅ Si ya subiste los archivos a GitHub

### Paso 1: Ve a Settings

1. Abre tu repositorio en GitHub
2. Click en la pestaña **"Settings"** (arriba a la derecha)

### Paso 2: Busca Pages

1. En el menú lateral izquierdo, busca **"Pages"**
   - (Está en la sección "Code and automation")

### Paso 3: Configurar Source

1. En **"Build and deployment"**
2. En **"Source"**, selecciona: **Deploy from a branch**
3. En **"Branch"**, selecciona:
   - Branch: **main** (o master)
   - Folder: **/root**
4. Click en **"Save"**

### Paso 4: Esperar

- ⏱️ Espera 2-3 minutos
- Refresca la página de Settings → Pages
- Verás un mensaje verde con tu URL:

```
✅ Your site is live at https://TU-USUARIO.github.io/nexo-canino-landing/
```

---

## ⚠️ Si NO están los archivos en GitHub

Necesitas hacer el push desde tu máquina local:

```powershell
# 1. Navega a la carpeta
cd C:\Users\miner\.gemini\antigravity\scratch\nexo-canino-landing

# 2. Conecta con tu repositorio (reemplaza con TU URL real)
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/TU-USUARIO/nexo-canino-landing.git

# 3. Sube los archivos
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

Te pedirá autenticación - puedes usar:

- GitHub Desktop (más fácil)
- Token de acceso personal
- Login por navegador

---

## 🔍 Cómo verificar si los archivos están en GitHub

1. Ve a tu repositorio en GitHub
2. Deberías ver estos archivos:
   - ✅ index.html
   - ✅ index.css
   - ✅ script.js
   - ✅ assets/ (carpeta con logo.jpg)
   - ✅ README.md

Si NO ves estos archivos, necesitas hacer el push.

---

## 📱 URL Final

Una vez activado Pages, tu web estará en:

```
https://TU-USUARIO.github.io/nexo-canino-landing/
```

**Compártela así**:

- LinkedIn, Instagram, Facebook
- Grupos de dueños de perros en Barcelona
- Anuncios en Google/Meta Ads

---

¡Comparte la URL de tu repo y te ayudo con lo que quede! 🚀
