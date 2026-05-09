// Wedding Countdown Timer
const weddingDate = new Date('2026-05-22T15:00:00');

function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById('days').textContent = '0';
        return;
    }

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days;
}

// Update countdown on page load
updateCountdown();

// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
const sideNav = document.getElementById('sideNav');

mobileNavToggle.addEventListener('click', () => {
    sideNav.classList.toggle('active');
});

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        sideNav.classList.remove('active');
    }
});

// Smooth scrolling and active section highlighting
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Handle nav link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Close mobile nav after clicking
            if (window.innerWidth <= 1024) {
                sideNav.classList.remove('active');
            }
        }
    });
});

// Update active nav link on scroll
function updateActiveNavLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        updateActiveNavLink();
    });
});

// Initial call to set active link
updateActiveNavLink();

