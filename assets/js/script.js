// SMOOTH SCROLLING
document.addEventListener('DOMContentLoaded', () => {

    const scrollContainer = document.querySelector('.scroll-container');

    const sectionNav = document.querySelector('.section-nav');

    const sections = document.querySelectorAll('.section');

    let currentSection = 0;

    let isScrolling = false;


    // Create Navigation Dots

    sections.forEach((section, index) => {

        const dot = document.createElement('div');

        dot.classList.add('section-nav-dot');

        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => smoothScroll(section));

        sectionNav.appendChild(dot);

    });


    // Smooth Scrolling Function

    function smoothScroll(target) {

        scrollContainer.scrollTo({

            top: target.offsetTop,

            behavior: 'smooth'

        });

        updateNavDots(Array.from(sections).indexOf(target));

    }


    // Update Navigation Dots

    function updateNavDots(index) {

        const dots = document.querySelectorAll('.section-nav-dot');

        dots.forEach((dot, i) => {

            dot.classList.toggle('active', i === index);

        });

    }


    // Wheel Event Handler

    function handleWheel(e) {

        if (isScrolling) return;

        e.preventDefault();

        isScrolling = true;


        if (e.deltaY > 0) {

            currentSection = Math.min(currentSection + 1, sections.length - 1);

        } else {

            currentSection = Math.max(currentSection - 1, 0);

        }


        smoothScroll(sections[currentSection]);


        setTimeout(() => {

            isScrolling = false;

        }, 1000);

    }


    // Event Listeners

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

});