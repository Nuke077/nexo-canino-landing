// ====================================
// NEXO CANINO - INTERACTIVE FEATURES
// ====================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.pain-card, .stack-item, .solution-feature, .pricing-card, .guarantee-content');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Countdown Timer for Urgency (Optional - 48 hours from page load)
function startCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    if (!countdownElement) return;

    const endTime = new Date().getTime() + (48 * 60 * 60 * 1000); // 48 hours

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = "¡OFERTA FINALIZADA!";
        }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// CTA Click Tracking (for analytics)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Track CTA clicks (integrate with Google Analytics or similar)
        console.log('CTA Clicked:', e.target.textContent.trim());

        // Optional: Add Facebook Pixel or Google Analytics event
        // gtag('event', 'cta_click', { 'event_category': 'engagement' });
    });
});

// Scroll Progress Indicator
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-burnt-orange), var(--accent-gold));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
}

// Initialize features
document.addEventListener('DOMContentLoaded', () => {
    createScrollIndicator();
    // startCountdown(); // Uncomment if you add a countdown element
});

// Mobile menu toggle (if you add a mobile menu later)
const mobileMenuToggle = () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }
};

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Form validation (if you add a form)
const validateForm = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.email || !data.email.includes('@')) {
            alert('Por favor, introduce un email válido.');
            return;
        }

        console.log('Form submitted:', data);
        // Here you would send data to your backend or CRM
    });
};

// Exit-intent popup (optional - shows when user tries to leave)
let exitIntentShown = false;
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitIntentShown && window.scrollY > 500) {
        exitIntentShown = true;
        // Show exit intent modal
        console.log('Exit intent triggered - show special offer modal');
        // You can implement a modal here
    }
});

// WhatsApp button enhancement
const enhanceWhatsAppButtons = () => {
    document.querySelectorAll('a[href*="wa.me"]').forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('WhatsApp CTA clicked');
            // Track conversion event
        });
    });
};

document.addEventListener('DOMContentLoaded', enhanceWhatsAppButtons);
