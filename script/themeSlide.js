const gear = document.querySelector('.gear');
let body_class = document.querySelector('body');
let primary_color = gear.nextElementSibling;
let secondary_color = primary_color.nextElementSibling;
let store_theme =
  localStorage.getItem('theme') || localStorage.setItem('theme', 'theme-1');
body_class.classList = store_theme;

function set_theme_store(theme) {
  localStorage.setItem('theme', theme);
}

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

// Theme color changing
primary_color.addEventListener('click', () => {
  body_class.classList = 'theme-1';
  set_theme_store('theme-1');
});

secondary_color.addEventListener('click', () => {
  body_class.classList = 'theme-2';
  set_theme_store('theme-2');
});
