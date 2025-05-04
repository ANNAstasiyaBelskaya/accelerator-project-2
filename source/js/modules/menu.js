const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerContainer = document.querySelector('.header__container');


const createBurgerButton = () => {
  headerBurger.innerHTML = `
    <svg width="26" height="19">
      <use href="/__spritemap#sprite-menu"></use>
    </svg>
  `;
};

const createCrossButton = () => {
  headerBurger.innerHTML = `
    <svg width="21" height="21">
      <use href="/__spritemap#sprite-cross"></use>
    </svg>
  `;
};

headerBurger.addEventListener('click', () => {
  header.classList.toggle('open');
  headerNav.classList.toggle('open');
  headerContainer.classList.toggle('open');
  headerBurger.classList.toggle('cross');

  if (headerBurger.classList.contains('cross')) {
    createCrossButton();
  } else {
    createBurgerButton();
  }
});

export { createBurgerButton };
