# Nexo Canino - Landing Page Premium 🐕

Landing page profesional y optimizada para conversión (CRO) del servicio premium de adiestramiento canino **Nexo Canino** en Barcelona.

## 🎯 Características

- ✅ Diseño premium con paleta oscura (charcoal/gold)
- ✅ Optimizada para conversión (CRO)
- ✅ Responsive y mobile-first
- ✅ Animaciones suaves y micro-interacciones
- ✅ SEO optimizado con meta tags completos
- ✅ Estructura de 7 secciones según mejores prácticas
- ✅ CTAs estratégicamente ubicados
- ✅ Garantía de "riesgo cero" incluida

## 📋 Estructura de Secciones

1. **Hero** - Promesa principal y CTA
2. **Pain Points** - Agitación de problemas urbanos
3. **Solution** - Protocolo Urbano Nexo K9
4. **Grand Slam Offer** - Stack de valor (1.350€)
5. **Pricing** - Oferta fundadores 297€ (70% descuento)
6. **Guarantee** - Garantía sin riesgo
7. **Footer & Final CTA**

## 🚀 Despliegue Rápido

### Opción 1: Vercel (RECOMENDADO - Más fácil)

1. Instala Vercel CLI (solo primera vez):

   ```bash
   npm install -g vercel
   ```

2. Desde el directorio del proyecto, ejecuta:

   ```bash
   vercel
   ```

3. Sigue las instrucciones:
   - Login con GitHub/Email
   - Confirma el proyecto
   - ¡Listo! Te dará la URL pública

### Opción 2: Netlify

1. Instala Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:

   ```bash
   netlify deploy --prod
   ```

3. Arrastra la carpeta del proyecto o sigue las instrucciones

### Opción 3: GitHub Pages

1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main
4. Guarda y espera 2-3 minutos
5. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo`

### Opción 4: Servidor Local (Testing)

```bash
# Si tienes Python instalado:
python -m http.server 8000

# Luego abre: http://localhost:8000
```

## 📝 Configuración Importante

### 1. Cambiar Número de WhatsApp

En `index.html`, busca y reemplaza `34XXXXXXXXX` con tu número real:

```html
<!-- Línea ~470 y ~585 -->
<a href="https://wa.me/34XXXXXXXXX?text=...">
```

**Formato del número**: Código de país + número (sin +, espacios ni guiones)

- Ejemplo: `34612345678` para España

### 2. Actualizar Enlaces Sociales

En el footer (~línea 620), actualiza los enlaces:

```html
<a href="https://instagram.com/TU_USUARIO" ...>
<a href="https://facebook.com/TU_PAGINA" ...>
```

### 3. Añadir Google Analytics (Opcional)

Añade antes del `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Video de Fondo (Opcional - Mejora Conversión)

Para añadir un video de fondo en el hero, reemplaza en `index.css` línea ~195:

```css
.hero::before {
  background: url('ruta-a-tu-video.mp4') center/cover;
  /* O usa un servicio como Cloudinary */
}
```

## 🎨 Colores de Marca

```css
--primary-dark: #1a1d23       /* Negro carbón */
--accent-gold: #c9a961        /* Dorado mate */
--accent-burnt-orange: #d97742 /* Naranja quemado */
```

## 📱 Testing Responsivo

Prueba en:

- Desktop (1920px, 1440px, 1024px)
- Tablet (768px)
- Mobile (375px, 414px)

## ✅ Checklist Pre-Lanzamiento

- [ ] Cambiar número de WhatsApp
- [ ] Actualizar enlaces sociales
- [ ] Probar todos los CTAs
- [ ] Verificar responsive en móvil
- [ ] Optimizar logo (comprimir si es muy grande)
- [ ] Configurar dominio personalizado (opcional)
- [ ] Añadir Google Analytics
- [ ] Configurar política de privacidad y aviso legal

## 🔧 Archivos del Proyecto

```
nexo-canino-landing/
├── index.html       # Página principal
├── index.css        # Estilos premium
├── script.js        # Interacciones
├── assets/
│   ├── logo.jpg     # Logo Nexo Canino
│   └── reference.jpg # Referencia
├── package.json     # Metadata
└── README.md        # Esta guía
```

## 🚨 Importante

**Oferta Fundadores**: Recuerda actualizar el número de plazas disponibles manualmente según vayas vendiendo. Está hardcodeado en "5 PLAZAS" en la sección de pricing.

## 📞 Soporte

Para modificaciones o dudas técnicas, contacta al desarrollador.

---

**© 2026 Nexo Canino Barcelona** - Hecho con 🧡 para transformar perros reactivos
