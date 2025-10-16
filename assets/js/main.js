/* ========== HALLOWEEN CELEBRATION WEBSITE ========== */
/* Created by Zxtni - GitHub: @zxtni */
/* Instagram: @igofrahul | Telegram: @zxtni */

/* ========== SHOW/HIDE MOBILE MENU ========== */
/* Get Menu Elements */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Toggle Menu - Show Menu on Click - Instagram: @igofrahul */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Close Menu on X Button Click */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ========== REMOVE MENU ON LINK CLICK ========== */
/* Close Mobile Menu When Nav Link is Clicked - Telegram: @zxtni */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

/* Add Click Event to Each Nav Link */
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== HOME SWIPER SLIDER ========== */
/* Hero Section Carousel - GitHub: @zxtni */
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,        /* Space between slides */
    loop: 'true',            /* Infinite loop */
    pagination: {
        el: ".swiper-pagination",  /* Pagination element */
        clickable: true,           /* Make bullets clickable */
    },
})

/* ========== CHANGE HEADER BACKGROUND ON SCROLL ========== */
/* Add Background Color to Header When Scrolling - Instagram: @igofrahul */
function scrollHeader() {
    const header = document.getElementById('header')
    /* When scroll is greater than 50px, add scroll-header class */
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

/* Listen for Scroll Event */
window.addEventListener('scroll', scrollHeader)

/* ========== NEW ARRIVALS SWIPER SLIDER ========== */
/* Products Carousel - Telegram: @zxtni */
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,    /* Center active slide */
    slidesPerView: "auto",   /* Auto width slides */
    loop: 'true',            /* Infinite loop */
    spaceBetween: 16,        /* Gap between slides */
})

/* ========== SCROLL SECTIONS ACTIVE LINK ========== */
/* Highlight Active Navigation Link on Scroll - GitHub: @zxtni */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    /* Loop through each section */
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        /* Check if section is in viewport */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            /* Add active class to corresponding nav link */
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            /* Remove active class */
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/* Listen for Scroll Event */
window.addEventListener('scroll', scrollActive)

/* ========== SHOW SCROLL UP BUTTON ========== */
/* Display Back to Top Button After Scrolling - Instagram: @igofrahul */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    /* When scroll is higher than 460px, show button */
    if (this.scrollY >= 460) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

/* Listen for Scroll Event */
window.addEventListener('scroll', scrollUp)

/* ========== SCROLL REVEAL ANIMATION ========== */
/* Animate Elements on Scroll - Telegram: @zxtni */
const sr = ScrollReveal({
    origin: 'top',         /* Animation origin point */
    distance: '60px',      /* Distance to travel */
    duration: 2500,        /* Animation duration in ms */
    delay: 400,            /* Delay before animation starts */
})

/* Reveal Elements from Top */
sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)

/* Reveal Elements with Interval - GitHub: @zxtni */
sr.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100})

/* Reveal from Left Side */
sr.reveal(`.about__data, .discount__img`, {origin: 'left'})

/* Reveal from Right Side */
sr.reveal(`.about__img, .discount__data`, {origin: 'right'})