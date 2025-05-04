import { createBurgerButton } from './modules/menu';
import { initHeroSwiper } from './modules/hero-slider';
import { initToursSwiper } from './modules/tours-slider';
import { getRating } from './modules/stars';
import { initTrainersSwiper } from './modules/trainers-slider';
import { initReviewsSwiper } from './modules/reviews-slider';
import { initAdvantagesSwiper } from './modules/advantages-slider';
import { initGallerySwiper } from './modules/gallery-slider';
import { checkForm, checkPhoneInputValue, checkEmailInputValue } from './modules/form';

document.addEventListener('DOMContentLoaded', () => {
  createBurgerButton();
  initHeroSwiper();
  initToursSwiper();
  initTrainersSwiper();
  initReviewsSwiper();
  initAdvantagesSwiper();
  initGallerySwiper();
});

getRating();
checkPhoneInputValue();
checkEmailInputValue();
checkForm();
