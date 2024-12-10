var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  loop:true,
  breakpoints : {
    360 : {
        slidesPerView:3
    },
    720 : {
         slidesPerView:5
    },
    960 : {
        slidesPerView : 9
    },
    1200 : {
        slidesPerView : 12
    }
  }
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
