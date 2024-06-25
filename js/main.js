window.onload = function() {
    window.scrollTo(0, 0);
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.pagination .dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    updateActiveDot(index);
}

function updateActiveDot(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function setActiveDot(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Показать первый слайд при загрузке страницы
showSlide(currentSlide);



document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const headermainmobile = document.querySelector('.header_main-mobile');


    burger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    burger.addEventListener('click', function() {
        headermainmobile.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetCollapse = document.querySelector(targetId);
            const faqBody = targetCollapse.querySelector('.faq-body');

            // Toggle active class on button
            this.classList.toggle('active');

            // Toggle active class on faq-body
            faqBody.classList.toggle('active');

            // Determine if faqBody is active
            const isActive = faqBody.classList.contains('active');

            if (isActive) {
                // Calculate the height of faqBody
                const maxHeight = faqBody.scrollHeight + 'px';
                faqBody.style.maxHeight = maxHeight;
            } else {
                faqBody.style.maxHeight = '0px';
            }
        });
    });
});


