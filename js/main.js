
  const cart = document.getElementById('cart');
  const inTheCartDesktop = document.getElementById('insideTheCartDesktop')


closeOutside();



  function closeOutside() {
  const mainBody = document.getElementById('main-body');
    mainBody.addEventListener('click', (e) => {
      const pp = e.target.parentElement
      console.log(pp.parentElement)
      if (e.target.id === 'cart-info' || e.target.id === 'cart-img' || e.target.id === 'cart' || e.target.id === 'desktop-cart-info' || e.target.id === 'desktop-cart-img' || e.target.id === 'desktop-cart') {
        insideTheCart.classList.remove('hide-cart')
        insideTheCart.classList.add('show-cart')

        inTheCartDesktop.classList.remove('hide-cart')
        inTheCartDesktop.classList.add('show-cart')
      } else if  (e.target.id != 'products-inside' && e.target.id != 'product-row' && e.target.id != 'quantity-of-the-product' && e.target.id != 'title-of-the-product' && e.target.id != 'price-of-the-product' && e.target.id != 'remove-product' && e.target.id != 'value-and-proceed' && e.target.id != 'value-row' && e.target.id != 'total-value-of-products' && e.target.id != 'total-value' && e.target.id != 'proceed-to-cart' && e.target.id != 'button-proceed-to-cart' && e.target.id != 'inside-the-cart-container' && e.target.id != 'insideTheCart') {
        insideTheCart.classList.remove('show-cart')
      insideTheCart.classList.add('hide-cart')
      } else {
        return
      }
    }) 
   
    }

    const closeDesktopCart = document.getElementById('close-desktop-cart');

    closeDesktopCart.addEventListener('click', () => {
      inTheCartDesktop.classList.remove('show-cart')
      inTheCartDesktop.classList.add('hide-cart')
    })
  

  
/*----------------SLIDER----------------*/


const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

 