const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.getElementById('nav-close');
const pageLink = document.querySelectorAll('.page-link li');

/*-----------------------------
|          FUNCTIONS          |
|                             |
------------------------------*/

function openCloseMenu() {
  mobileMenu.classList.toggle('hide');
  hamMenu.classList.toggle('hide');
}

function clickMenu() {
  mobileMenu.classList.add('hide');
  hamMenu.classList.remove('hide');
}

const isActive = (li) => {
  return li.classList.value === 'active-line';
};

const showActiveLine = (liElement) => {
  liElement.classList.add('active-line');
};

// Close & Open Mobile Menu
hamMenu.addEventListener('click', openCloseMenu);
closeMenu.addEventListener('click', openCloseMenu);

pageLink.forEach((li) => {
  li.addEventListener('click', () => {
    clickMenu();
    if (!isActive(li)) {
      const parent = li.parentElement;
      parent.querySelector('.active-line').classList.remove('active-line');
      showActiveLine(li);
    }
  });
});
