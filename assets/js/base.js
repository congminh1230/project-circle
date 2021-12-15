var swiper = new Swiper(".product__slider", {
    loop: true,
    grabCursor: true,
    // autoplay: {
    //   delay: 8500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      414: {
        slidesPerView: 2.5,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".service__slider", {
    initialSlide: 0,
  
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 4.5,
      },
      414: {
        slidesPerView: 4.5,
      },
      768: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".event__slider", {
    spaceBetween: 20,
  
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      414: {
        slidesPerView: 2.5,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  // sidebar
  var swiper = new Swiper(".banner", {
    spaceBetween: 20,
  
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      414: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
    },
  });
 