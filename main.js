const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.getElementById('nav-close');

function openCloseMenu() {
  console.log('hello');
  mobileMenu.classList.toggle('hide');
  hamMenu.classList.toggle('hide');
}

hamMenu.addEventListener('click', openCloseMenu);
closeMenu.addEventListener('click', openCloseMenu);
