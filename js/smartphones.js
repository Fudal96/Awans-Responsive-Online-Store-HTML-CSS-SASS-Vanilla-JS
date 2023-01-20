let smartphones = [
    {
      id: 1,
      name: "Iphone 13",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "iphone",
      price: 5200,
      image: "./images/iphone-13.jpg",
    },
    {
      id: 2,
      name: "Iphone 12",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "iphone",
      price: 4444,
      image: "./images/Iphone-12.jpg",
      sale: true,
      saleAmount: 444,
     
    },
    {
      id: 3,
      name: "huawei p50 pro",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "huawei",
      price: 1330,
      image: "./images/huawei-2.jpg",
    },
    {
      id: 4,
      name: "huawei p20 lite",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "huawei",
      price: 2250,
      image: "./images/huawei-1.jpg",
    },
    {
      id: 5,
      name: "Nokia c300",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "nokia",
      price: 950,
      image: "./images/Nokia.jpg",
      sale: true,
      saleAmount: 250,
    },
    {
      id: 7,
      name: "Samsung a53",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "samsung",
      price: 1440,
      image: "./images/Samsung-a53.jpg",
    },
    {
      id: 8,
      name: "Samsung s20",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "samsung",
      price: 2620,
      image: "./images/Samsung-s20.jpg",
      sale: true,
      saleAmount: 300,
    },
    {
      id: 9,
      name: "Samsung s22",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
      dolores eaque. Eligendi ab officia minus.`,
      category: "samsung",
      price: 3399,
      image: "./images/Samsung-s22.jpg",
    },
  ];

  let currentSmartphones = smartphones;
  let basket = JSON.parse(localStorage.getItem("data")) || [];

  const productsGallery = document.querySelector('.products-gallery');
  const cartInfo = document.querySelector('.cart-info');
  const cartInfoDesktop = document.querySelector('.desktop-cart-info');
  const productsInside = document.getElementById('products-inside');
  const productsInsideDesktop = document.getElementById('products-inside-desktop');
  const productsValue = document.getElementById('value-and-proceed');
  const totalCartValue = document.getElementById('total-value');
  const totalCartValueDesktop = document.getElementById('total-value-desktop')
  const searchResults = document.getElementById('search-results'); 
  const searchResultsDesktop = document.getElementById('search-results-desktop');
  const searchResultsContainer = document.querySelector('.search-results-container')
  const searchResultsContainerDesktop = document.getElementById('search-results-container-container-desktop')
 const addToCartButtons = document.querySelectorAll('.product-add-to-basket-btn')
 const removeFromCart = document.getElementById('remove-product');
 const productRow = document.getElementById('product-row');

  const cartPopUp = document.querySelector('.pop-up');

 



  const renderSmartphones = (items) => {
    for (let i = 0; i < items.length; i++) {
      const newSmartphone = document.createElement('div');
      newSmartphone.className = `smartphone ${items[i].sale ? 'on-sale' : ""}`;
      newSmartphone.innerHTML = `<img src="${items[i].image}">
      <p class="product-name">${items[i].name}</p>
      <div class="product-price">
        <span class="price">${items[i].price.toFixed(2)} zł</span> 
        <span class="price-sale">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</span>
     </div>
     <button onclick="increment(${items[i].id})" data-id="${items[i].id}" data-name="${items[i].name}" data-price2=' ${items[i].saleAmount ? (items[i].price - items[i].saleAmount).toFixed(2) : items[i].price.toFixed(2)} ' class="product-add-to-basket-btn" >Do koszyka</button>
            <p class="product-item-sale-info">Promocja</p>`

     productsGallery.appendChild(newSmartphone);

    }
 }
 
 const renderSearchResult = (sr) => {
  for (let i = 0; i < sr.length; i++) {
    const newSR = document.createElement('div');
    newSR.className = 'search-results-product';
    newSR.innerHTML = `<img src="${sr[i].image}">
    <p>${sr[i].name}</p>
    <span>${sr[i].saleAmount ? (sr[i].price - sr[i].saleAmount).toFixed(2) : sr[i].price.toFixed(2)} zł</span>`

    

    searchResultsContainer.appendChild(newSR);
  }
 } 
 


    let increment = (id) => {
     

      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem);

     if (search === undefined) {
        basket.push({
          id: selectedItem,
          item: 1,
        });

      } else {
        search.item += 1;
      }
      console.log(basket)
      
      
      generateCartItems();
      generateCartItemsDesktop();
      totalAmount();
      cartPopUp.classList.add('active')
       setTimeout (() => {
        cartPopUp.classList.remove('active')
      }, 3000)
      
     

      if (basket.length > 0) {
        cartInfo.classList.add('active')
        cartInfo.innerHTML = basket.length;
        cartInfoDesktop.classList.add('active')
        cartInfoDesktop.innerHTML = basket.length;
      } else {
        cartInfo.classList.remove('active')
        cartInfoDesktop.classList.remove('active')
      }
  
  
    }
    
    
  
    let generateCartItems = () => {
      if (basket.length !== 0) {
        console.log('working')
        return (productsInside.innerHTML = basket.map((x) => {
          let { id, item } = x;
        let search = smartphones.find((y) => y.id === id) || [];
          return `
          <div class="product-row" id="product-row">
                  <span class="quantity-of-the-product" id="quantity-of-the-product">${item} x </span>
                  <p class="title-of-the-product" id="title-of-the-product">${search.name.toUpperCase()}</p>
                  <span class="price-of-the-product" id="price-of-the-product"> ${search.saleAmount ? ((search.price - search.saleAmount) * (item)).toFixed(2) : ((search.price) * (item)).toFixed(2)} zł</span>
                  <button onclick="removeItem(${id})" class="remove-product" id="remove-product">x</button>
                 </div>
          `;
        }));
      } else {
        console.log('product not found')
      }
    }

    let totalAmount = () => {
      if (basket.length !== 0) {
        let amount = basket.map((x) => {
          let { item, id } = x;
          let search = smartphones.find((y) => y.id === id) || [];

          /*return search.saleAmount? item * search.price - search.saleAmount
           : item * search.price;*/

           return search.saleAmount ? ((search.price - search.saleAmount) * (item)) : ((search.price) * (item));
        })
        .reduce((x, y) => x + y, 0);
        console.log(amount)
        totalCartValue.innerHTML = `${amount}.00 zł`
        totalCartValueDesktop.innerHTML = `${amount}.00 zł`
      } else {
        console.log('wrong')
      }
    };


    const searchBarInput = document.getElementById('search-bar-input');
    searchBarInput.addEventListener('input', (e) => {
      const searchBarSearch = e.target.value;
      if (searchBarSearch.length > 0) {
        
        searchResults.classList.add('active');
       
      } else {
        
        searchResults.classList.remove('active');
      }
      console.log(searchBarSearch)
      console.log(searchBarSearch.length)
      
      deleteSearchChild();

      let foundProducts = smartphones.filter(product => {
        if (product.name.toLowerCase().includes(searchBarSearch.toLowerCase())) {
          console.log(product)
          return product;
          
        } else {
          console.log('nothing found')
         
        }
      })
      renderSearchResult(foundProducts);
      console.log(foundProducts)
      if (foundProducts.length === 0) {
       console.log('zero')
       searchResultsContainer.innerHTML = 'Nie znaleziono żadnego produktu...';
       } 
      
    })
    
  

  function deleteSearchChild() {
    while (searchResultsContainer.firstChild) {
        searchResultsContainer.removeChild
        (searchResultsContainer.firstChild)
    }
}

let removeItem = (id) => {
  let selectedCartItem = id;
  console.log(selectedCartItem)
  basket = basket.filter((x) => x.id !== selectedCartItem);
  if (basket.length >= 1) {
    cartInfo.innerHTML = basket.length;
    cartInfoDesktop.innerHTML = basket.length;
    generateCartItems();
    generateCartItemsDesktop();
  totalAmount();
  } else {
    console.log('cant do');
    basket = [];
    totalCartValue.innerHTML = '0.00 zł';
    productsInside.innerHTML = 'Brak produktów w koszyku...';
    totalCartValueDesktop.innerHTML = '0.00 zł';
    productsInsideDesktop.innerHTML = 'Brak produktów w koszyku...';
    cartInfo.classList.remove('active');
    cartInfoDesktop.classList.remove('active');
  }
}

/* ----------------------DESKTOP--------------------------------*/


const swiperWrapper = document.getElementById('swiper-wrapper-desktop')


const renderDesktopSmartphones = (items) => {
  for (let i = 0; i < items.length; i++) {
    const newDesktopSmartphone = document.createElement('div');
    newDesktopSmartphone.className =  `swiper-slide ${items[i].sale ? 'on-sale' : ""}`;
    newDesktopSmartphone.innerHTML = `
    <figure>
    <img src="${items[i].image}">
    <p class="product-name-desktop">${items[i].name}</p>
    <div class="product-price-desktop">
      <p class="price-desktop">${items[i].price.toFixed(2)} zł</p> 
      <p class="price-sale-desktop">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</p>
   </div>
   <button onclick="increment(${items[i].id})" data-id="${items[i].id}" data-name="${items[i].name}" data-price2=' ${items[i].saleAmount ? (items[i].price - items[i].saleAmount).toFixed(2) : items[i].price.toFixed(2)} ' class="product-add-to-basket-btn-desktop" >Do koszyka</button>
          <p class="product-item-sale-info-desktop">Promocja</p>
          </figure>`

          swiperWrapper.appendChild(newDesktopSmartphone);

  }
}

const renderSearchResultDesktop = (sr) => {
  for (let i = 0; i < sr.length; i++) {
    const newSRD = document.createElement('div');
    newSRD.className = 'search-results-container-desktop';
    newSRD.innerHTML = `
    <div class="search-results-product-desktop">
    <div><img src="${sr[i].image}"></div>
    <div><p>${sr[i].name}</p></div>
    <div class="desktop-search-result-price-p"><p>${sr[i].saleAmount ? (sr[i].price - sr[i].saleAmount).toFixed(2) : sr[i].price.toFixed(2)} zł</p></div>`

    

    searchResultsContainerDesktop.appendChild(newSRD);
  }
 } 



let generateCartItemsDesktop = () => {
  if (basket.length !== 0) {
    console.log('working')
    return (productsInsideDesktop.innerHTML = basket.map((x) => {
      let { id, item } = x;
    let search = smartphones.find((y) => y.id === id) || [];
      return `
      <div class="product-row-desktop" id="product-row-desktop">
              <span class="quantity-of-the-product-desktop" id="quantity-of-the-product-desktop">${item} x </span>
              <p class="title-of-the-product-desktop" id="title-of-the-product-desktop">${search.name.toUpperCase()}</p>
              <span class="price-of-the-product-desktop" id="price-of-the-product-desktop"> ${search.saleAmount ? ((search.price - search.saleAmount) * (item)).toFixed(2) : ((search.price) * (item)).toFixed(2)} zł</span>
              <button onclick="removeItem(${id})" class="remove-product-desktop" id="remove-product-desktop">x</button>
             </div>
      `;
    }));
  } else {
    console.log('product not found')
  }
}


const searchBarInputDesktop = document.getElementById('desktop-search-bar-input');
    searchBarInputDesktop.addEventListener('input', (e) => {
      const searchBarSearchDesktop = e.target.value;
      if (searchBarSearchDesktop.length > 0) {
        
        searchResultsDesktop.classList.add('active');
       
      } else {
        
        searchResultsDesktop.classList.remove('active');
      }
     
      
      deleteSearchChildDesktop();

      let foundProductsDesktop = smartphones.filter(productDes => {
        if (productDes.name.toLowerCase().includes(searchBarSearchDesktop.toLowerCase())) {
          
          return productDes;
          
        } else {
          console.log('nothing found')
         
        }
      })
      renderSearchResultDesktop(foundProductsDesktop);
      console.log(foundProductsDesktop)
      if (foundProductsDesktop.length === 0) {
       console.log('zero')
       searchResultsContainerDesktop.innerHTML = 'Nie znaleziono żadnego produktu...';
       } 
      
    })
    
  

  function deleteSearchChildDesktop() {
    while (searchResultsContainerDesktop.firstChild) {
        searchResultsContainerDesktop.removeChild
        (searchResultsContainerDesktop.firstChild)
    }
}



  document.onload = renderSmartphones(currentSmartphones);
 document.onload = renderDesktopSmartphones(currentSmartphones);