const animateH2 = document.querySelectorAll('.h2-animate');
const gear = document.querySelector('.gear');

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

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Animate Theme Change
const showThemeSlide = (parent) => {
  parent.classList.remove('deactivate');
  gear.classList.add('active');
  parent.classList.add('active');
};

const removeThemeSlide = (parent) => {
  parent.classList.remove('active');
  gear.classList.add('active');
  parent.classList.add('deactivate');
};

gear.addEventListener('click', () => {
  if (gear.parentNode.classList.value !== 'theme-control active') {
    showThemeSlide(gear.parentNode);
  } else if (gear.parentNode.classList.value === 'theme-control active') {
    removeThemeSlide(gear.parentNode);
  }

  setTimeout(() => {
    gear.classList.remove('active');
  }, 2000);
});

gear.parentNode.querySelectorAll('span').forEach((span) => {
  span.addEventListener('click', () => {
    removeThemeSlide(gear.parentNode);
  });
});
