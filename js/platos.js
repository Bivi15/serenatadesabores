'use strict'

//MENÚ

//Header

// Cuando se haga 'click' en .Header-menu se va a agregar/quita la clase .change
const headerMenu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

headerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('hasChange')
})

//Sección de entrada

//Cuando haga 'click' en .titulo remove/add Activo al .bloque

const entradaTitulo = document.querySelectorAll('.titulom')
const entradaBloque = document.querySelectorAll('.bloque')

entradaTitulo.forEach( (_ , i) =>{
    entradaTitulo[i].addEventListener('click', ()=> {
        entradaBloque.forEach( (_ , i) => {
            entradaBloque[i].classList.remove('isActivo')
        })
        entradaBloque[i].classList.add('isActivo')
    })
})