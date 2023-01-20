const sectionsWithCarouselTwo = document.querySelectorAll(
    ".section-with-carousel-two"
  );
   
  for (const section of sectionsWithCarouselTwo) {
    let slidesPerView = [1.2, 2.2, 3.2];
    
    if (section.classList.contains("section-with-left-offset")) {
     slidesPerView = [1.2, 2.2, 3.2];
    }
    
    
    const swiper = section.querySelector(".swiper-christmas-deals");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[0],
      //slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      lazyLoading: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        prevEl: section.querySelector(".carousel-control-left"),
        nextEl: section.querySelector(".carousel-control-right")
      },
      pagination: {
        el: section.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class=${className}>
              <span class="number">${index + 1}</span>
              <span class="line"></span>
          </div>`;
        }
      },
     breakpoints: {
        360: {
            spaceBetween: -20
        },
        385: {
            spaceBetween: -30
        },
        400: {
            spaceBetween: -40
        },
        420: {
            spaceBetween: -50
        },
        460: {
            spaceBetween: -70
        },
        490: {
            spaceBetween: -95
        },
        510: {
          spaceBetween: -120
        },
        545: {
          spaceBetween: -160
        },
        620: {
          slidesPerView: slidesPerView[1],
          spaceBetween: 0
        },
        680: {
          spaceBetween: -30
        },
        840: {
          spaceBetween: -60
        },
        1200: {
          slidesPerView: slidesPerView[2]
        }
      }
    });
  }