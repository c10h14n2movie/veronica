const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const description = document.querySelector('.description');
const card = document.querySelectorAll('.design-card');
const footer = document.querySelector('footer');

const tl = new TimelineMax();

tl.fromTo(header, 1.5, { opacity: '0' }, { opacity: '1', ease: Power2.easeInOut })
    .fromTo(logo, 1.5, { opacity: '0', y: 40 }, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=1.5')
    .fromTo(description, 1.5, { opacity: '0', y: 40 }, { opacity: '1', y: 0, ease: Power2.easeInOut })
    .fromTo(card, 1, { opacity: '0', y: 40 }, { opacity: '1', y: 0, ease: Power4.easeIn }, '-=1')