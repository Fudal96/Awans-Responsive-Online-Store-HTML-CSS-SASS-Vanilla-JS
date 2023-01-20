
document.querySelectorAll('.desktop-category').forEach(cat => {
    cat.addEventListener('mouseenter', entering)
})

document.querySelectorAll('.desktop-category').forEach(cat => {
    cat.addEventListener('mouseleave', leaving)
})



function entering(e) {
    /*e.currentTarget.style.borderColor = 'gold';*/
    console.log('mouseenter')
    const one = e.currentTarget.lastElementChild
    console.log(one)
    one.classList.add('active')
   
    
     
}

function leaving(e) {
    /*e.currentTarget.style.borderColor = 'red';*/
    console.log('mouseleave')
    const leave = e.currentTarget.lastElementChild
    console.log(leave)
    leave.classList.remove('active')
}

   
    const catShowMoreBtn = document.querySelectorAll('.desktop-cat-items-more-btn');
    const catShowLessBtn = document.querySelectorAll('.desktop-cat-items-less-btn');

    catShowMoreBtn.forEach(caBtn => {
        caBtn.addEventListener('click', (e) => {
        console.log('click')
        const wiecej = e.target.parentElement
        wiecej.classList.add('hide')
        const wiecejParent = wiecej.parentElement
        const wiecejParentLastChild = wiecejParent.lastElementChild
        wiecejParentLastChild.classList.add('active')
        })
    })

    catShowLessBtn.forEach(catBtnLess => {
        catBtnLess.addEventListener('click', (e) => {
            console.log('clickclick')
            const mniej = e.target.parentElement
            //console.log(mniej)
            const mniejParent = mniej.parentElement
            //console.log(mniejParent)
            mniejParent.classList.remove('active')
           const mniejPP = mniejParent.parentElement
           const mniejPPP = mniejPP.firstElementChild
           mniejPPP.classList.remove('hide')
        })
    })





