// DOM Elements
const appointmentBtns = document.querySelectorAll('.appointment-btn, .cta-btn');
const modal = document.getElementById('appointmentModal');
const closeBtn = document.querySelector('.close-btn');
const appointmentForm = document.getElementById('appointmentForm');
const navbar = document.querySelector('.navbar');

// Show appointment modal
appointmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close appointment modal
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'visible';
}

// Handle form submission
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    console.log('Appointment Form Data:', formData);
    
    // Show success message
    alert('Appointment request submitted successfully! We will contact you shortly.');
    
    // Reset form and close modal
    appointmentForm.reset();
    closeModal();
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Services animation on scroll
const serviceCards = document.querySelectorAll('.service-card');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Reviews slider
const reviewsSlider = document.querySelector('.reviews-slider');
let isDown = false;
let startX;
let scrollLeft;

reviewsSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    reviewsSlider.classList.add('active');
    startX = e.pageX - reviewsSlider.offsetLeft;
    scrollLeft = reviewsSlider.scrollLeft;
});

reviewsSlider.addEventListener('mouseleave', () => {
    isDown = false;
    reviewsSlider.classList.remove('active');
});

reviewsSlider.addEventListener('mouseup', () => {
    isDown = false;
    reviewsSlider.classList.remove('active');
});

reviewsSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - reviewsSlider.offsetLeft;
    const walk = (x - startX) * 2;
    reviewsSlider.scrollLeft = scrollLeft - walk;
});

// Form validation
const inputs = appointmentForm.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.classList.add('error');
    });

    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            input.classList.remove('error');
        }
    });
});

// Initialize minimum date for appointment
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Mobile menu toggle (you'll need to add a hamburger menu button in HTML)
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.classList.add('mobile-menu-btn');
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
navbar.appendChild(mobileMenuBtn);

const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('show');
    }
});

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});