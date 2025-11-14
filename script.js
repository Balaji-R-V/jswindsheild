// ============================================
// Navigation Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Enhanced Professional Scroll Animations
// ============================================
let scrollObserver;
let animatedElements;
let parallaxElements;

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// Initialize scroll animations with stagger effect
function initScrollAnimations() {
    // Create observer for scroll animations
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Element is entering viewport - add visible class with stagger
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50); // Stagger delay
            } else {
                // Element is leaving viewport - remove visible class for re-animation
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Get all cards and animated elements
    animatedElements = document.querySelectorAll(`
        .service-card,
        .product-card,
        .exchange-card,
        .insurance-card,
        .location-card,
        .benefit-card,
        .feature-item,
        .gallery-item,
        .contact-info-card,
        .contact-item,
        .section-header,
        .section-logo,
        .dealer-card,
        .authorized-dealers-grid > *
    `);

    // Add scroll-fade-in class and observe with individual delays
    animatedElements.forEach((el, index) => {
        el.classList.add('scroll-fade-in');
        el.style.transitionDelay = `${(index % 6) * 0.1}s`; // Stagger based on position
        scrollObserver.observe(el);
    });
}

// Parallax effect for hero section - Disabled to prevent overlap
function initParallax() {
    // Parallax disabled to prevent overlapping issues
    // parallaxElements = document.querySelectorAll('.hero, .section-logo');
    
    // window.addEventListener('scroll', () => {
    //     const scrolled = window.pageYOffset;
    //     
    //     parallaxElements.forEach((el, index) => {
    //         if (el.classList.contains('hero')) {
    //             const rate = scrolled * 0.5;
    //             el.style.transform = `translateY(${rate}px)`;
    //         }
    //     });
    // });
}

// Smooth reveal animation for text
function initTextReveal() {
    const textElements = document.querySelectorAll('.hero-title, .hero-subtitle, .section-title');
    
    textElements.forEach(el => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(el);
    });
}

// Enhanced card hover effects
function initCardAnimations() {
    const cards = document.querySelectorAll('.exchange-card, .product-card, .service-card, .insurance-card, .location-card, .benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Button ripple effect
function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Check if elements are already in view on page load
function checkInitialView() {
    if (!animatedElements) return;
    
    // Small delay to ensure IntersectionObserver has initialized
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            // Only add visible if element is in view and observer hasn't already handled it
            if (isInView && !el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }, 300);
}

// ============================================
// Form Handling
// ============================================
const appointmentForm = document.getElementById('appointmentForm');
const quoteForm = document.getElementById('quoteForm');
const contactForm = document.getElementById('contactForm');

// Appointment Form
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(appointmentForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showNotification('Appointment request submitted successfully! We will contact you soon.', 'success');
        
        // Reset form
        appointmentForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Appointment Data:', data);
    });
}

// Quote Form
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quoteForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        showNotification('Quote request submitted successfully! We will send you a quote shortly.', 'success');
        
        // Reset form
        quoteForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Quote Data:', data);
    });
}

// ============================================
// Email Logging System (Background - Text File)
// ============================================
const emailLogs = [];

// Load logs from localStorage on page load
function loadLogsFromStorage() {
    try {
        const savedLogs = localStorage.getItem('emailLogs');
        if (savedLogs) {
            const parsed = JSON.parse(savedLogs);
            emailLogs.push(...parsed);
        }
    } catch (e) {
        console.warn('Failed to load logs from storage:', e);
    }
}

// Save logs to localStorage
function saveLogsToStorage() {
    try {
        localStorage.setItem('emailLogs', JSON.stringify(emailLogs));
    } catch (e) {
        console.warn('Failed to save logs to storage:', e);
    }
}

function logEmailEvent(type, message, data = null) {
    const timestamp = new Date().toLocaleString();
    const isoTimestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        isoTimestamp,
        type, // 'info', 'success', 'error', 'warning'
        message,
        data
    };
    
    emailLogs.push(logEntry);
    
    // Save to localStorage
    saveLogsToStorage();
    
    // Console logging with color coding
    const logPrefix = `[EMAIL LOG ${timestamp}]`;
    switch(type) {
        case 'success':
            console.log(`%c${logPrefix} ✅ ${message}`, 'color: #10b981; font-weight: bold;', data || '');
            break;
        case 'error':
            console.error(`%c${logPrefix} ❌ ${message}`, 'color: #ef4444; font-weight: bold;', data || '');
            break;
        case 'warning':
            console.warn(`%c${logPrefix} ⚠️ ${message}`, 'color: #f59e0b; font-weight: bold;', data || '');
            break;
        default:
            console.log(`%c${logPrefix} ℹ️ ${message}`, 'color: #3b82f6; font-weight: bold;', data || '');
    }
    
    // Auto-save to text file after each log entry
    saveLogsToFile();
}

// Convert logs to text format
function formatLogsAsText() {
    let text = '='.repeat(80) + '\n';
    text += 'JS WINDSHIELD - EMAIL SUBMISSION LOGS\n';
    text += '='.repeat(80) + '\n';
    text += `Generated: ${new Date().toLocaleString()}\n`;
    text += `Total Log Entries: ${emailLogs.length}\n`;
    text += '='.repeat(80) + '\n\n';
    
    emailLogs.forEach((log, index) => {
        text += `[Entry ${index + 1}]\n`;
        text += `Timestamp: ${log.timestamp}\n`;
        text += `Type: ${log.type.toUpperCase()}\n`;
        text += `Message: ${log.message}\n`;
        
        if (log.data) {
            text += `Data:\n`;
            if (typeof log.data === 'object') {
                text += JSON.stringify(log.data, null, 2) + '\n';
            } else {
                text += log.data + '\n';
            }
        }
        
        text += '-'.repeat(80) + '\n\n';
    });
    
    return text;
}

// Save logs to downloadable text file
function saveLogsToFile() {
    try {
        const logText = formatLogsAsText();
        const blob = new Blob([logText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        // Create download link (hidden)
        let downloadLink = document.getElementById('emailLogDownloadLink');
        if (!downloadLink) {
            downloadLink = document.createElement('a');
            downloadLink.id = 'emailLogDownloadLink';
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
        }
        
        downloadLink.href = url;
        downloadLink.download = `email-logs-${new Date().toISOString().split('T')[0]}.txt`;
        
        // Auto-download only on form submission completion
        // (not on every log entry to avoid too many downloads)
    } catch (e) {
        console.error('Failed to save logs to file:', e);
    }
}

// Download logs as text file (call this manually or after form submission)
function downloadEmailLogs() {
    try {
        const logText = formatLogsAsText();
        const blob = new Blob([logText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `email-logs-${new Date().toISOString().split('T')[0]}-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('Email logs downloaded successfully');
    } catch (e) {
        console.error('Failed to download logs:', e);
    }
}

// Clear all logs
function clearEmailLogs() {
    emailLogs.length = 0;
    localStorage.removeItem('emailLogs');
    console.log('Email logs cleared');
}

// Initialize: Load logs from storage on page load
loadLogsFromStorage();

// Contact Form
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        
        logEmailEvent('info', 'Form submission started', {
            action: contactForm.action,
            formData: formDataObj,
            timestamp: new Date().toISOString()
        });
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        const startTime = Date.now();
        
        try {
            logEmailEvent('info', 'Sending request to FormSubmit API', {
                url: contactForm.action,
                method: 'POST',
                headers: { 'Accept': 'application/json' }
            });
            
            // Submit form to FormSubmit
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const responseTime = Date.now() - startTime;
            logEmailEvent('info', `Response received (${responseTime}ms)`, {
                status: response.status,
                statusText: response.statusText,
                ok: response.ok,
                headers: Object.fromEntries(response.headers.entries())
            });
            
            let responseData;
            try {
                responseData = await response.json();
                logEmailEvent('info', 'Response data parsed', responseData);
            } catch (parseError) {
                logEmailEvent('warning', 'Failed to parse JSON response', {
                    error: parseError.message,
                    responseText: await response.text()
                });
                responseData = {};
            }
            
            if (response.ok) {
                logEmailEvent('success', 'Email submission successful!', {
                    response: responseData,
                    message: 'Form submitted to FormSubmit. Check email for verification link if first time.',
                    recipient: 'balajioff26@gmail.com'
                });
                
                // Show success message with verification note
                showNotification('Message sent successfully! Please check your email (balajioff26@gmail.com) for a verification link if this is your first submission. After verification, you will receive all form submissions.', 'success');
                
                // Download logs after successful submission
                setTimeout(() => {
                    downloadEmailLogs();
                }, 1000);
                
                // Reset form
                contactForm.reset();
            } else {
                logEmailEvent('error', 'Email submission failed', {
                    status: response.status,
                    statusText: response.statusText,
                    response: responseData
                });
                
                // Show error with details
                const errorMsg = responseData?.error || 'Form submission failed. Please try again.';
                showNotification(`Error: ${errorMsg}`, 'error');
            }
        } catch (error) {
            const responseTime = Date.now() - startTime;
            
            // Check if it's a network error or CORS issue
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                logEmailEvent('warning', 'CORS/Network issue detected, using fallback method', {
                    error: error.message,
                    errorType: error.name,
                    responseTime: responseTime + 'ms'
                });
                
                // CORS issue - try alternative method
                logEmailEvent('info', 'Attempting direct form submission (fallback)', {
                    action: contactForm.action,
                    method: 'POST (direct)'
                });
                
                // Create a temporary form and submit it directly
                const tempForm = document.createElement('form');
                tempForm.method = 'POST';
                tempForm.action = contactForm.action;
                tempForm.style.display = 'none';
                
                // Copy all form data
                formData.forEach((value, key) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = value;
                    tempForm.appendChild(input);
                });
                
                document.body.appendChild(tempForm);
                
                logEmailEvent('info', 'Direct form submission initiated', {
                    note: 'Form submitted via direct POST. Cannot track response.',
                    recipient: 'balajioff26@gmail.com'
                });
                
                tempForm.submit();
                
                // Show success message
                showNotification('Message is being sent! Please check your email (balajioff26@gmail.com) for a verification link if this is your first submission.', 'success');
                
                // Download logs after fallback submission
                setTimeout(() => {
                    downloadEmailLogs();
                }, 1000);
                
                contactForm.reset();
                
                // Remove temp form after a delay
                setTimeout(() => {
                    document.body.removeChild(tempForm);
                }, 1000);
            } else {
                logEmailEvent('error', 'Unexpected error occurred', {
                    error: error.message,
                    errorType: error.name,
                    stack: error.stack,
                    responseTime: responseTime + 'ms'
                });
                
                // Show error message
                showNotification('Failed to send message. Please try again or contact us directly.', 'error');
            }
        } finally {
            // Restore button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            
            logEmailEvent('info', 'Form submission process completed');
        }
    });
}

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            
            .notification-success {
                border-left: 4px solid #10b981;
            }
            
            .notification-error {
                border-left: 4px solid #ef4444;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .notification-content i {
                font-size: 1.5rem;
                color: #10b981;
            }
            
            .notification-error .notification-content i {
                color: #ef4444;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ============================================
// Dropdown Menu Enhancement
// ============================================
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(-10px)';
        }
    });
});

// ============================================
// Counter Animation (if needed)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ============================================
// Lazy Loading Images (if images are added later)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(button);
}

// Initialize scroll to top button
createScrollToTopButton();

// ============================================
// Form Validation Enhancement
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Add real-time validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#ef4444';
            showNotification('Please enter a valid email address', 'error');
        } else {
            input.style.borderColor = '';
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validatePhone(input.value)) {
            input.style.borderColor = '#ef4444';
            showNotification('Please enter a valid phone number', 'error');
        } else {
            input.style.borderColor = '';
        }
    });
});

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero content
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('fade-in');
    }
    
    // Initialize all animations
    initScrollAnimations();
    initParallax();
    initTextReveal();
    initCardAnimations();
    initButtonRipple();
    
    // Check initial view after a short delay
    setTimeout(checkInitialView, 200);
    
    // Add loading animation complete class
    document.body.classList.add('loaded');
    
    // Initialize all interactive elements
    console.log('JS Windshield website initialized successfully with professional animations!');
});

