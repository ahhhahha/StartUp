window.onload = function () {
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



document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');


    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
        burger.classList.toggle('active')
        header.classList.toggle('active')
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
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


document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.querySelector('.header-switcher__button')
    const currentText = document.querySelector('.header-switcher__curtext')
    const currentFlag = document.querySelector('.header-switcher__curflag')
    const switcherBody = document.querySelector('.header-switcher-body')
    const options = document.querySelectorAll('.header-switcher-body__button')

    const lngArr = [
        {
            name: 'English',
            flag: './images/Flag1.svg',
            lng: 'en',
        },
        {
            name: 'Czech',
            flag: './images/Flag2.svg',
            lng: 'cz',
        },
        {
            name: 'Slovak',
            flag: './images/Flag3.svg',
            lng: 'sl',
        },
    ]

    switcher.addEventListener('click', () => {
        switcherBody.classList.toggle('active')
    })

    options.forEach(item => {
        item.addEventListener('click', () => {
            editCurrentLng(item.dataset.lng)
        })
    })

    function editCurrentLng(lng) {
        lngArr.forEach(item => {
            if (item.lng == lng) {
                currentText.innerHTML = item.name
                currentFlag.children[0].src = item.flag
                switcherBody.classList.toggle('active')
            }
        })
    }
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


document.addEventListener("DOMContentLoaded", function () {
    let decoration = document.querySelectorAll('.decoration');

    window.addEventListener('mousemove', function (e) {
        for (let i = 0; i < decoration.length; i++) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            if (i == 0) {
                decoration[i].style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
            } else if (i === 1) {
                decoration[i].style.transform = 'translate(-' + x * 45 + 'px, -' + y * 45 + 'px)';
            } else if (i === 2) {
                decoration[i].style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
            } else if (i === 3) {
                decoration[i].style.transform = 'translate(-' + x * 70 + 'px, -' + y * 80 + 'px)';
            } else if (i === 4) {
                decoration[i].style.transform = 'translate(-' + x * 45 + 'px, -' + y * 45 + 'px)';
            } else {
                decoration[i].style.transform = 'translate(-' + x * 45 + 'px, -' + y * 45 + 'px)';
            }
        }
    });

    window.addEventListener('scroll', () => {
        for (let i = 0; i < decoration.length; i++) {
            decoration[i].style.transform = 'translate(-' + getRandomArbitrary(1, 5) * 3 + 'px, -' + getRandomArbitrary(1, 5) * 3 + 'px)';
        }
    })
});
