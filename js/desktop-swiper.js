const sectionsWithCarouselDesktop = document.querySelectorAll(
    ".section-with-carousel-desktop"
  );
   
  for (const section of sectionsWithCarouselDesktop) {
    
    let slidesPerView = [3, 4, 5];
    //let slidesPerView = [4, 5, 6];
    
    if (section.classList.contains("section-with-left-offset")) {
     
     slidesPerView = [3, 4, 5];
    // slidesPerView = [4, 5, 6];
    }
    
    
    const swiper = section.querySelector(".swiper-desktop");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[2],
      //slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      lazyLoading: true,
      keyboard: {
        enabled: true
      },
      navigation: {
       /* prevEl: section.querySelector(".carousel-control-left"),
        nextEl: section.querySelector(".carousel-control-right")*/
        prevEl: document.getElementById('ccl'),
        nextEl: document.getElementById('ccr')
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
       
       
         /*1200: {
          slidesPerView: [4, 5, 6]
        }*/
      }
    });
  }