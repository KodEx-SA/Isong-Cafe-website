// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function toggleMobileMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden', 'mobile-menu-close');
        mobileMenu.classList.add('mobile-menu-open');
        mobileOverlay.classList.remove('hidden');
    } else {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileMenu.classList.add('mobile-menu-close');
        mobileOverlay.classList.add('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-close');
        }, 300);
    }
}

if (menuToggle && mobileMenu && mobileOverlay) {
    menuToggle.addEventListener('click', toggleMobileMenu);
    menuClose.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', toggleMobileMenu);
}

// Active Navigation Highlight
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-orange-400', 'font-bold');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-orange-400', 'font-bold');
        }
    });
}

// Smooth Scroll for Nav Links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', setActiveLink);

// Initial call to set active link on page load
setActiveLink();

// Initialize Swiper Carousel
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});