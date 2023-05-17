$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<span class="pre-btn"><i class="fa-solid fa-chevron-left"></i></span>'
      ,`<span class="next-btn"><i class="fa-solid fa-chevron-right"></i></span>`
    ],  
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })
  $('.trending-servies').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
 
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