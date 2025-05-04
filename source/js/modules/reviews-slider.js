import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initReviewsSwiper = () => {
  const swiper = new Swiper('.reviews__slider', {
    modules: [ Navigation ],
    navigation: {
      nextEl: '.reviews__slider-control-button.swiper-button-next',
      prevEl: '.reviews__slider-control-button.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    allowTouchMove: true,
    autoHeight: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 1.7,
        spaceBetween: 120,
      },
    }
  });

  return swiper;
};

export { initReviewsSwiper };
