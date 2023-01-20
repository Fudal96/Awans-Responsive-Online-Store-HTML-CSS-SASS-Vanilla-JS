const sectionsWithCarousel = document.querySelectorAll(
    ".section-with-carousel"
  );
   
  for (const section of sectionsWithCarousel) {
    //let slidesPerView = [1.5, 2.5, 3.5];
    let slidesPerView = [4, 5, 6];
    if (section.classList.contains("section-with-left-offset")) {
      //slidesPerView = [1.5, 1.5, 2.5];
      slidesPerView = [4, 5, 6];
    }
    const swiper = section.querySelector(".swiper-carousel");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[0],
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
        344: {
            slidesPerView: slidesPerView[0]
        },
        458: {
          slidesPerView: slidesPerView[1]
        },
        580: {
          slidesPerView: slidesPerView[2]
        }
      }
    });
  }