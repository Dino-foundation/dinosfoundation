// This is the JavaScript file for your Dino's Foundation website.
// It handles the mobile menu functionality and header scroll effect.

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('hamburger-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const header = document.getElementById('main-header');

    // Toggle mobile menu visibility
    if (mobileMenuButton && mobileMenuOverlay) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuButton.classList.toggle('open');
            mobileMenuOverlay.classList.toggle('open');
        });
    }

    // Add scroll-triggered header style
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-menu-overlay a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('open');
            mobileMenuOverlay.classList.remove('open');
        });
    });
});