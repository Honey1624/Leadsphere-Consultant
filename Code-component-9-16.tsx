// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
        mobileMenuBtn.classList.add('active');
    }
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Counter Animation
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

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.dataset.target);
            if (target) {
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        }
    });
}, observerOptions);

// Observe all counter elements
document.querySelectorAll('[data-target]').forEach(counter => {
    counterObserver.observe(counter);
});

// Hover effects for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Button click animations
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// Image lazy loading fallback
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1TDE5MiAxNDIuMzMzTDIyNSAxMDlMMjc1IDE1OUgxMjVMMTc1IDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPGNpcmNsZSBjeD0iMTYyLjUiIGN5PSIxMTIuNSIgcj0iMTIuNSIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
        this.alt = 'Image not available';
    });
});

// Form validation for newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitBtn = newsletterForm.querySelector('.btn');
    
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            // Simulate form submission
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
            emailInput.value = '';
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Subscribe <i class="fas fa-arrow-right"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #3B82F6, #8B5CF6)';
            }, 3000);
        } else {
            // Show error
            emailInput.style.borderColor = '#EF4444';
            emailInput.setAttribute('placeholder', 'Please enter a valid email');
            
            setTimeout(() => {
                emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                emailInput.setAttribute('placeholder', 'Enter your email address');
            }, 3000);
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Testimonial card hover effects
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const quote = card.querySelector('.testimonial-quote');
        const rating = card.querySelector('.testimonial-rating');
        
        quote.style.transform = 'scale(1.1) rotate(10deg)';
        quote.style.opacity = '0.2';
        
        // Animate stars
        rating.querySelectorAll('i').forEach((star, index) => {
            setTimeout(() => {
                star.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    star.style.transform = 'scale(1)';
                }, 150);
            }, index * 100);
        });
    });
    
    card.addEventListener('mouseleave', () => {
        const quote = card.querySelector('.testimonial-quote');
        quote.style.transform = 'scale(1) rotate(0deg)';
        quote.style.opacity = '0.1';
    });
});

// Floating animation for cards
function animateFloatingCards() {
    const cards = document.querySelectorAll('.floating-card, .achievement-card, .cta-floating-card');
    
    cards.forEach((card, index) => {
        const delay = index * 200;
        const duration = 3000 + (index * 500);
        
        setInterval(() => {
            card.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                card.style.transform = 'translateY(0px)';
            }, duration / 2);
        }, duration);
    });
}

// Start floating animations after page load
window.addEventListener('load', () => {
    setTimeout(animateFloatingCards, 2000);
});

// Service card icon rotation on hover
document.querySelectorAll('.service-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    // Remove loading class if it exists
    document.body.classList.remove('loading');
    
    // Animate elements on page load
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 1s ease-out';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Focus management for accessibility
document.querySelectorAll('.btn, .nav-link, .mobile-nav-link').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #3B82F6';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add click analytics (placeholder for real analytics)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // Analytics tracking would go here
        console.log('Button clicked:', button.textContent.trim());
    });
});

// Intersection observer for revealing animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe elements for reveal animations
document.querySelectorAll('.service-card, .testimonial-card, .stat-box').forEach(el => {
    revealObserver.observe(el);
});

// Add CSS for reveal animations
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .service-card,
    .testimonial-card,
    .stat-box {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1);
    }
    
    .service-card.revealed,
    .testimonial-card.revealed,
    .stat-box.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

console.log('LeadSphere Consultant website loaded successfully!');

// Custom cursor effect (optional)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease;
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '0.7';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Interactive hover effects for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.opacity = '0.3';
    });
    
    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = '0.7';
    });
});