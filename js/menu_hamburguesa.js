'use strict'

//Menú de hamburguesa

// Cuando se haga 'click' en .Header-menu se va a agregar/quita la clase .change
const headerMenu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

headerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('hasChange')
})
