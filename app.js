// Back to Top Button
const scrollBtn = document.querySelector('#back-top');
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('showing');
    } else {
        scrollBtn.classList.remove('showing');
    }
};
document.addEventListener('scroll', () => {
    btnVisibility();
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// fixed header
window.onscroll = function () {
    const windowScroll = window.scrollY;
    const fixedMenu = document.querySelector('.header');
    if (windowScroll > 100) {
        fixedMenu.classList.add('js-header');
    }
    else {
        fixedMenu.classList.remove('js-header');
    }
}

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbar-toggle-nav-center .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});

// swiper swiperMarquee
const swiperMarquee = new Swiper('.swiperMarquee', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 120,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true
});