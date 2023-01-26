$('.responsive').slick({
    dots: true,
    prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
    nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesToShow: 2,
  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  });