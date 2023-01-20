const hamMenuCat = document.querySelectorAll('.menu-category');
const catShowMore = document.querySelector('.menu-category-show-more');
const hamMenuButton = document.getElementById('hamburger-menu');
const hamMenuShow = document.getElementById('hamburger-menu-show')
const hamMenuHide = document.getElementById('menu-hamburger-close');


function showHamMenu() {
    hamMenuShow.classList.add('active');
}
function hideHamMenu() {
    hamMenuShow.classList.remove('active');
}



hamMenuCat.forEach(cat => {
    cat.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(e.target.parentElement)
        const parentEl = e.target.parentElement;
        console.log(parentEl)
        const parentOfParentEl = parentEl.parentElement;
        console.log(parentOfParentEl)
        const childToShow = parentOfParentEl.lastElementChild;
        
        const menuCatBtnEl = cat.firstElementChild;
        console.log(menuCatBtnEl)
        const imgArrow = menuCatBtnEl.lastElementChild;
        if (childToShow.classList.contains('active')){
            childToShow.classList.remove('active');
            menuCatBtnEl.classList.remove('blue');
            imgArrow.classList.remove('white')
        } else {
            childToShow.classList.add('active');
            menuCatBtnEl.classList.add('blue');
            imgArrow.classList.add('white')
            
        }
        
    })
})





hamMenuButton.addEventListener('click', (showHamMenu));
hamMenuHide.addEventListener('click', (hideHamMenu));