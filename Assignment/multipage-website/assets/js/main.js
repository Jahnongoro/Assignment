// This file contains the main JavaScript functionality for the website, such as navigation handling, image sliders, and other interactive elements.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Navigation toggle for mobile view
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
            const isOpen = navList.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Example of an image slider (if applicable)
    const slider = document.querySelector('.image-slider');
    if (slider) {
        let currentIndex = 0;
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        setInterval(nextSlide, 5000); // Change slide every 5 seconds
        showSlide(currentIndex); // Show the first slide
    }
});