import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperList = document.querySelector('.gallery__slider-list');
const swiperSlides = swiperList.querySelectorAll('.gallery__slider-item');


const addSwiperClasses = () => {
  if (swiperList && !swiperList.classList.contains('swiper-wrapper')) {
    swiperList.classList.add('swiper-wrapper');
  }

  swiperSlides.forEach((slide) => {
    if (slide && !slide.classList.contains('swiper-slide')) {
      slide.classList.add('swiper-slide');
    }
  });
};

const removeSwiperClasses = () => {
  if (swiperList && !swiperList.classList.contains('swiper-wrapper')) {
    swiperList.classList.remove('swiper-wrapper');
  }

  swiperSlides.forEach((slide) => {
    if (slide && !slide.classList.contains('swiper-slide')) {
      slide.classList.remove('swiper-slide');
    }
  });
};

const initGallerySwiper = () => {
  let swiperInstance = null;

  const handleMediaQuery = () => {
    const mediaQuery = window.matchMedia('(max-width: 1439px)');

    if (mediaQuery.matches) {
      if (!swiperInstance) {
        addSwiperClasses();
        swiperInstance = new Swiper('.gallery__container', {
          modules: [Navigation],
          navigation: {
            nextEl: '.gallery__slider-control-button.swiper-button-next',
            prevEl: '.gallery__slider-control-button.swiper-button-prev',
          },
          direction: 'horizontal',
          grabCursor: true,
          allowTouchMove: true,
          loop: true,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
          },
        });
      }

    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        removeSwiperClasses();
      }
      swiperInstance = null;
    }
  };

  handleMediaQuery();
  window.addEventListener('resize', handleMediaQuery);
};

export { initGallerySwiper };
