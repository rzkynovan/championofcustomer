// SHOW MENU NAV
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu Show
if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden 
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
// Remove menu mobile
const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // menghilangkan show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// Change Background Header
function scrollHeader(){
    const header = document.getElementById('header')
    //  Sroll y = 50
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== PRICES TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('prices__active')
        })
        target.classList.add('prices__active')

        tabs.forEach(tab =>{
            tab.classList.remove('prices__active')
        })
        tab.classList.add('prices__active')
    })
})
