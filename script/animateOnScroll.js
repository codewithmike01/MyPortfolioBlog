import { showActiveLine } from './mobileMenu.js';
const animateH2 = document.querySelectorAll('.h2-animate');
const rocketContainer = document.querySelector('.to-top-icon');
const resume = document.getElementById('resume');
const pageLink = document.querySelector('.page-link');

// Animate On Scroll
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const hideScrollElement = (element) => {
  element.classList.remove('active');
};

const handleScrollAnimation = () => {
  animateH2.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

const displayRocket = (rocketContainer) => {
  rocketContainer.style.display = 'block';
};

const hideScrollRocket = (rocketContainer) => {
  rocketContainer.style.display = 'none';
};

// Rocket
const handleRocketDisplay = () => {
  if (elementInView(resume, 1.25)) {
    displayRocket(rocketContainer);
  } else if (elementOutofView(resume)) {
    hideScrollRocket(rocketContainer);
  }
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
  handleRocketDisplay();
});
