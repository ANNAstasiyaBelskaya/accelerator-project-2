import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initAdvantagesSwiper = () => {
  let swiperInstance = null;
  let duplicatedSlides = [];

  const handleMediaQuery = () => {
    const mediaQuery = window.matchMedia('(width: 1440px)');

    if (mediaQuery.matches) {
      if (!swiperInstance) {
        const swiperList = document.querySelector('.advantages__list');
        if (swiperList) {
          const slides = Array.from(swiperList.children);
          duplicatedSlides = slides.map((slide) => slide.cloneNode(true));

          duplicatedSlides.forEach((slide) => swiperList.appendChild(slide));

          swiperList.classList.add('swiper-wrapper');

          swiperInstance = new Swiper('.advantages__container', {
            modules: [Navigation],
            navigation: {
              nextEl: '.advantages__slider-control-button.swiper-button-next',
              prevEl: '.advantages__slider-control-button.swiper-button-prev',
            },
            direction: 'horizontal',
            centeredSlides: true,
            autoHeight: true,
            initialSlide: 4,
            loop: true,
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 30,
            slidesOffsetBefore: 55,
            slidesOffsetAfter: 30,
          });
        }
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        duplicatedSlides.forEach((slide) => {
          slide.remove();
        });
        duplicatedSlides = [];

        const swiperList = document.querySelector('.advantages__list');

        if (swiperList) {
          swiperList.classList.remove('swiper-wrapper');
        }
        swiperInstance = null;
      }
    }
  };

  handleMediaQuery();
  window.addEventListener('resize', handleMediaQuery);
};

document.addEventListener('DOMContentLoaded', () => {
  initAdvantagesSwiper();
});

export { initAdvantagesSwiper };
