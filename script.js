// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // For mobile menu (if needed later)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.id = 'toggleMenu';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.addEventListener('click', function() {
            nav.querySelector('ul').classList.toggle('show');
        });
        nav.prepend(mobileMenuBtn);
    };
    
    // Initialize visitor counter from localStorage
    const visitorBtn = document.querySelector('button');
    visitorBtn.addEventListener('click', function() {
        let count = localStorage.getItem('visitorCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('visitorCount', count);
        alert('Number of visitors: ' + count);
    });
});
