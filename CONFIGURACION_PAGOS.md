# 🎉 NEXO CANINO - CONFIGURACIÓN DE CALENDLY Y PAGOS

## ✅ Actualizaciones Realizadas

Se han añadido las siguientes funcionalidades a la landing page:

### 1. Redes Sociales Actualizadas

- ✅ Instagram: <https://www.instagram.com/nexocaninobcn/>
- ✅ TikTok: @nexocaninobcn (necesitas confirmar la URL completa)
- ✅ Email: <nexocaninobcn@gmail.com>

### 2. WhatsApp Dual

- ✅ Número Principal: +34 667 716 180
- ✅ Número Alternativo: +34 687 082 952
- Ambos configurados con mensajes predefinidos

### 3. Sistema de Pagos Integrado

- ✅ Página de pago separada (`pago.html`)
- ✅ Integración con Stripe (tarjetas de crédito/débito)
- ✅ Integración con PayPal
- ✅ Página de éxito post-pago (`exito.html`)

---

## 🔧 CONFIGURACIÓN NECESARIA

### CALENDLY (MUY IMPORTANTE)

Calendly requiere que **TÚ CREES UNA CUENTA** primero. Aquí te explico cómo:

#### Paso 1: Crear Cuenta en Calendly

1. Ve a: <https://calendly.com/signup>
2. Regístrate con: **<nexocaninobcn@gmail.com>**
3. Completa tu perfil

#### Paso 2: Crear Evento "Diagnóstico Gratuito"

1. Una vez en tu panel de Calendly, haz click en **"Create Event Type"**
2. Selecciona **"One-on-One"**
3. Configura así:

```
Nombre del Evento: Diagnóstico Gratuito - Nexo Canino
Duración: 30 minutos
Descripción: Sesión de diagnóstico gratuito para evaluar si tu perro es candidato para el Programa de Transformación Nexo Canino
```

1. **Configuración de Disponibilidad**:
   - Configura tus horarios disponibles
   - Zona horaria: Europe/Madrid

2. **Questions** (Preguntas a los clientes):
   - Nombre del perro
   - Edad del perro
   - Raza
   - Principal problema de comportamiento
   - Número de teléfono (WhatsApp)

3. **Notifications** (Notificaciones):
   - ✅ Email confirmations to: <nexocaninobcn@gmail.com>
   - ✅ Calendar invites
   - ✅ Reminder emails

#### Paso 3: Obtener tu URL de Calendly

1. Una vez creado el evento, Calendly te dará una URL como:

   ```
   https://calendly.com/nexocaninobcn/diagnostico-gratuito
   ```

2. **COPIA ESA URL** y reemplázala en el archivo `index.html` línea ~380:

```html
<!-- Busca esta línea y reemplaza la URL -->
<div class="calendly-inline-widget" data-url="PEGA_AQUI_TU_URL_DE_CALENDLY?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=c9a961" style="min-width:320px;height:700px;"></div>
```

---

### STRIPE (Tarjetas de Crédito)

#### Paso 1: Crear Cuenta Stripe

1. Ve a: <https://dashboard.stripe.com/register>
2. Regístrate con: **<nexocaninobcn@gmail.com>**
3. Completa la verificación de identidad (necesitarás DNI/NIE, datos bancarios)

#### Paso 2: Obtener API Keys

1. Una vez en el dashboard, ve a: **Developers → API keys**
2. Verás dos keys:
   - **Publishable key** (empieza con `pk_live_...`)
   - **Secret key** (empieza con `sk_live_...`)

#### Paso 3: Configurar en la Web

1. Abre el archivo `payment.js`
2. En la línea 9, reemplaza:

```javascript
const STRIPE_PUBLISHABLE_KEY = 'pk_live_TU_KEY_AQUI';
```

#### Paso 4: Crear Endpoint Backend (CRÍTICO)

⚠️ **IMPORTANTE**: Stripe requiere un backend para crear Payment Intents de forma segura.

**Opciones**:

**Opción A - Contratar Desarrollo Backend** (Recomendado)

- Necesitas un servidor Node.js/PHP/Python
- Coste aprox: 200-500€ una sola vez
- Te puedo proporcionar el código necesario

**Opción B - Usar Stripe Payment Links** (Más Fácil)

1. En Stripe dashboard → **Products → Add Product**
2. Nombre: "Programa Nexo Canino"
3. Precio: 297€
4. Clic en **"Create Payment Link"**
5. Copia el link generado
6. Reemplaza el botón de pago con ese link

**Opción C - Usar Stripe Checkout Embebido**

- Solución intermedia
- No requiere backend complejo
- Te puedo ayudar a configurarlo

---

### PAYPAL

#### Paso 1: Crear Cuenta Business

1. Ve a: <https://www.paypal.com/es/business>
2. Regístrate con: **<nexocaninobcn@gmail.com>**
3. Completa verificación

#### Paso 2: Crear App en PayPal Developer

1. Ve a: <https://developer.paypal.com/dashboard/applications>
2. Click en **"Create App"**
3. Nombre: "Nexo Canino Payments"
4. Tipo: **Merchant**

#### Paso 3: Obtener Client ID

1. Una vez creada la app, verás:
   - **Client ID** (para producción)
   - **Secret** (no lo compartas)

2. Abre `pago.html` línea 20:

```html
<!-- Reemplaza TU_CLIENT_ID_AQUI -->
<script src="https://www.paypal.com/sdk/js?client-id=TU_CLIENT_ID_REAL_AQUI&currency=EUR"></script>
```

---

## 📋 CHECKLIST DE CONFIGURACIÓN

Antes de que los pagos funcionen, debes completar:

- [ ] Crear cuenta de Calendly
- [ ] Crear evento "Diagnóstico Gratuito"
- [ ] Actualizar URL de Calendly en `index.html`
- [ ] Crear cuenta de Stripe
- [ ] Obtener Publishable Key de Stripe
- [ ] Actualizar `payment.js` con tu Stripe key
- [ ] **Decidir**: ¿Backend completo o Payment Links?
- [ ] Crear cuenta PayPal Business
- [ ] Crear app en PayPal Developer
- [ ] Actualizar Client ID en `pago.html`
- [ ] Probar ambos métodos de pago en modo test

---

## 🚀 ALTERNATIVA RÁPIDA (Sin Backend)

Si quieres lanzar YA sin configurar backend:

### Opción: WhatsApp + Transferencia/Bizum

1. Elimina la página `pago.html`
2. Los CTAs llevan directamente a WhatsApp
3. El proceso sería:
   - Cliente contacta por WhatsApp
   - Haces diagnóstico gratuito
   - Si califican, les das cuenta bancaria/Bizum
   - Una vez pagan, confirmas y empiezas

**Ventajas**:

- ✅ Funciona desde HOY
- ✅ No necesitas configurar nada técnico
- ✅ Control total de cada venta

**Desventajas**:

- ❌ No es automatizado
- ❌ Más trabajo manual
- ❌ Parece menos profesional

---

## 📞 SOPORTE

Si necesitas ayuda con la configuración:

**Para Calendly**: <https://help.calendly.com/>
**Para Stripe**: <https://support.stripe.com/>
**Para PayPal**: <https://www.paypal.com/es/smarthelp/contact-us>

O si prefieres, podemos configurarlo juntos paso a paso.

---

## ✅ LO QUE YA ESTÁ LISTO

- ✅ Diseño de página de pago premium
- ✅ Integración técnica de Stripe (solo faltan keys)
- ✅ Integración técnica de PayPal (solo faltan keys)  
- ✅ Widget de Calendly integrado (solo falta URL)
- ✅ Dual WhatsApp con números reales
- ✅ Redes sociales actualizadas
- ✅ Email configurado
- ✅ Página de éxito post-pago

**Lo único que necesitas es configurar tus cuentas en Calendly/Stripe/PayPal y actualizar las claves.** 🚀
