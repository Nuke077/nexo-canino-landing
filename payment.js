// ====================================
// NEXO CANINO - PAYMENT INTEGRATION
// ====================================

// NOTA IMPORTANTE: Este archivo contiene la integración de pagos con Stripe y PayPal.
// DEBES configurar tus API keys reales antes de usar en producción.

// ========== CONFIGURACIÓN ==========
// Reemplaza con tu Publishable Key de Stripe (obtén en: https://dashboard.stripe.com/apikeys)
const STRIPE_PUBLISHABLE_KEY = 'pk_test_TU_STRIPE_KEY_AQUI';

// El Client ID de PayPal ya está en el HTML
// Obtenlo en: https://developer.paypal.com/dashboard/applications

// Precio del programa
const PROGRAM_PRICE = 297;
const CURRENCY = 'EUR';

// ========== STRIPE SETUP ==========
let stripe, cardElement;

// Inicializar Stripe solo si estamos en la página de pago
if (document.getElementById('payment-form')) {
    initializeStripe();
}

function initializeStripe() {
    try {
        // Verificar que Stripe esté disponible
        if (typeof Stripe === 'undefined') {
            console.warn('Stripe no está disponible. Configura tu API key.');
            return;
        }

        // Verificar que la key no sea el placeholder
        if (STRIPE_PUBLISHABLE_KEY === 'pk_test_TU_STRIPE_KEY_AQUI' || !STRIPE_PUBLISHABLE_KEY) {
            console.warn('Stripe: Configura tu Publishable Key en payment.js');
            // Ocultar el campo de tarjeta de Stripe
            const cardElementContainer = document.getElementById('card-element');
            if (cardElementContainer) {
                cardElementContainer.innerHTML = '<p style="color: #c9a961; text-align: center; padding: 2rem;">⚠️ Stripe no configurado. Por favor contacta por WhatsApp para pagar.</p>';
            }
            return;
        }

        // Inicializar Stripe
        stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

        // Crear elementos de Stripe
        const elements = stripe.elements();

        // Estilo personalizado para el campo de tarjeta
        const cardStyle = {
            base: {
                color: '#f5f5f5',
                fontFamily: '"Inter", sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#a8b2bb'
                }
            },
            invalid: {
                color: '#d97742',
                iconColor: '#d97742'
            }
        };

        // Crear el elemento de tarjeta
        cardElement = elements.create('card', { style: cardStyle });
        cardElement.mount('#card-element');

        // Manejar errores en tiempo real
        cardElement.on('change', function (event) {
            const displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });

        // Manejar el submit del formulario
        const form = document.getElementById('payment-form');
        if (form) {
            form.addEventListener('submit', handleStripePayment);
        }
    } catch (error) {
        console.error('Error inicializando Stripe:', error);
        const cardElementContainer = document.getElementById('card-element');
        if (cardElementContainer) {
            cardElementContainer.innerHTML = '<p style="color: #d97742;">Error al cargar Stripe. Contacta por WhatsApp.</p>';
        }
    }
}

async function handleStripePayment(event) {
    event.preventDefault();

    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';

    // Obtener datos del formulario
    const cardHolderName = document.getElementById('card-holder-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    try {
        // Crear Payment Intent en tu backend
        // IMPORTANTE: Debes implementar este endpoint en tu servidor
        const response = await fetch('TU_BACKEND_URL/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: PROGRAM_PRICE * 100, // Stripe usa centavos
                currency: CURRENCY.toLowerCase(),
                customerName: cardHolderName,
                customerEmail: email,
                customerPhone: phone
            })
        });

        const { clientSecret } = await response.json();

        // Confirmar el pago
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: cardHolderName,
                    email: email,
                    phone: phone
                }
            }
        });

        if (error) {
            // Mostrar error
            document.getElementById('card-errors').textContent = error.message;
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-lock"></i> Pagar 297€ de forma segura';
        } else {
            // Pago exitoso
            window.location.href = 'exito.html?payment_intent=' + paymentIntent.id;
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al procesar el pago. Por favor contacta con nosotros por WhatsApp.');
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-lock"></i> Pagar 297€ de forma segura';
    }
}

// ========== PAYPAL SETUP ==========
if (document.getElementById('paypal-button-container')) {
    initializePayPal();
}

function initializePayPal() {
    try {
        // Verificar que PayPal esté disponible
        if (typeof paypal === 'undefined') {
            console.warn('PayPal no está disponible. Configura tu Client ID.');
            const paypalContainer = document.getElementById('paypal-button-container');
            if (paypalContainer) {
                paypalContainer.innerHTML = '<p style="color: #c9a961; text-align: center; padding: 2rem;">⚠️ PayPal no configurado. Por favor contacta por WhatsApp para pagar.</p>';
            }
            return;
        }

        paypal.Buttons({
            // Configurar la creación de la orden
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        description: 'Programa de Transformación Nexo Canino - 6 Semanas',
                        amount: {
                            currency_code: CURRENCY,
                            value: PROGRAM_PRICE.toString()
                        }
                    }],
                    application_context: {
                        shipping_preference: 'NO_SHIPPING'
                    }
                });
            },

            // Manejar la aprobación del pago
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    // Pago exitoso
                    console.log('Pago completado por ' + details.payer.name.given_name);

                    // Redirigir a página de éxito
                    window.location.href = 'exito.html?order_id=' + data.orderID;
                });
            },

            // Manejar errores
            onError: function (err) {
                console.error('Error en PayPal:', err);
                alert('Hubo un error con PayPal. Por favor intenta de nuevo o usa tarjeta de crédito.');
            },

            // Estilo del botón
            style: {
                color: 'gold',
                shape: 'rect',
                label: 'pay',
                height: 50
            }
        }).render('#paypal-button-container');
    } catch (error) {
        console.error('Error inicializando PayPal:', error);
        const paypalContainer = document.getElementById('paypal-button-container');
        if (paypalContainer) {
            paypalContainer.innerHTML = '<p style="color: #d97742;">Error al cargar PayPal. Contacta por WhatsApp.</p>';
        }
    }
}

// ========== PAYMENT TABS ==========
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.payment-tab');
    const panels = document.querySelectorAll('.payment-panel');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const targetTab = this.dataset.tab;

                // Actualizar tabs activos
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.style.background = 'var(--secondary-slate)';
                    t.style.color = 'var(--text-light)';
                });

                this.classList.add('active');
                this.style.background = 'var(--accent-gold)';
                this.style.color = 'var(--primary-dark)';

                // Mostrar panel correcto
                panels.forEach(panel => {
                    panel.style.display = 'none';
                });

                if (targetTab === 'card') {
                    document.getElementById('card-panel').style.display = 'block';
                } else if (targetTab === 'paypal') {
                    document.getElementById('paypal-panel').style.display = 'block';
                } else if (targetTab === 'stripe') {
                    document.getElementById('stripe-panel').style.display = 'block';
                }
            });
        });
    }
});

// ========== HELPERS ==========
// Validar formato de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validar teléfono español
function validateSpanishPhone(phone) {
    const re = /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
    return re.test(phone);
}
