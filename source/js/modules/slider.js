import Swiper, {Navigation, Pagination} from 'swiper';

const swiperButtons = document.querySelectorAll('[data-swiper-button]');
const swiperContainer = document.querySelectorAll('[data-swiper]');

const sliderTrainers = () => {
  let viewport = window.innerWidth;
  if (viewport < 700) {
    if (!swiperContainer || !swiperButtons) {
      return;
    } else {
      const swiper = new Swiper('[data-swiper="features"]', {
        modules: [Navigation, Pagination],

        direction: "horizontal",

        watchOverflow: true,

        loop: false,

        autoHeight: true,

        keyboard: {
          enabled: true,
        },

        observer: true,

        grabCursor: true,

        setWrapperSize: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {
          prevEl: '[data-swiper-button="features-prev"]',
          nextEl: '[data-swiper-button="features-next"]',
        },

        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });
      swiper.init();
      const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
      duplicates.forEach((el) => el.removeAttribute('tabindex'));
    }
  }


};

const removeNotJs = () => {
  if (!swiperButtons || !swiperContainer) {
    return;
  }
  swiperButtons.forEach((el) => el.classList.remove('is-not-js'));
  swiperContainer.forEach((el) => el.classList.remove('is-not-js'));
};

export {sliderTrainers, removeNotJs};
