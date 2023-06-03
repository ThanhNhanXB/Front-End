
$('.trending-servies').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
autoplayTimeout: 6000,
autoplayHoverPause: true,
    navText: [
    '<span class="pre-btn"><i class="fa-solid fa-chevron-left"></i></span>'
    , `<span class="next-btn"><i class="fa-solid fa-chevron-right"></i></span>`
  ],
  dotsEach: 1,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
})
$('.freelancers-servies').owlCarousel({
  loop: true,
  margin: 10,
  dotsEach: 1,
  autoplay: true,
autoplayTimeout: 6000,
autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
})
$('.carousel-membership').owlCarousel({
  loop: false,
  margin: 10,
  dotsEach: 1,
  responsive: {
    0: {
      items: 1
    },
    600: {
      dotsEach: 2,
      items: 2
    },
    1200: {
      items: 4
    }
  }
})
$('.owl-category').owlCarousel({
  // loop: true,
  margin: 10,
  nav: false,
  dotsEach: 1,
  responsive: {
    0: {
      dotsEach: 1,
      items: 2
    },
    800: {
      items: 3
    },
    1200: {
      dotsEach: 1,
      items: 7
    }
  }
})

$('.first-carousel').owlCarousel({
  // loop: true,
  margin: 10,
  nav: false,
  dots: false,

  responsive: {
    0: {
      dotsEach: 1,
      items: 1
    },
    600: {
      items: 1
    },
    1200: {
      dotsEach: 5,
      items: 1
    }
  }
})
$('.second-carousel').owlCarousel({
  margin: 10,
  nav: false,
  dots: false,
  center: true,
  responsive: {
    0: {
      loop: true,
      dotsEach: 1,
      items: 3
    },
    600: {
      center: false,
      items: 5
    },
    1200: {
      center: false,
      items: 5
    }
  }
})
$('.brand-carousel').owlCarousel({
  loop: false,
  dots: false,
  margin: 10,
  nav: true,
  navText: [
    '<span class="pre-btn"><i class="fa-solid fa-chevron-left"></i></span>'
    , `<span class="next-btn"><i class="fa-solid fa-chevron-right"></i></span>`
  ],
  responsive: {
    0: {
      margin: 80,
      items: 3
    },
    600: {
      items: 2
    },
    768: {
      items: 4
    },
    1200: {
      items: 6,
      nav: false,

    }
  }
})

