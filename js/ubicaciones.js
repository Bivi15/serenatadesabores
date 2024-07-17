'use strict'

//UBICACIONES

// Cuando se haga 'click' en .Header-menu se va a agregar/quita la clase .change
const headerMenu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

headerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('hasChange')
})

//Slider 
// Se calcula la posición de las imágenes
const next = document.querySelector('.arrowsnext')
const prev = document.querySelector('.arrowsprev')
const sliderUbi = document.querySelectorAll('.lugares__pais')

let posiciones = 0
let mostrarUbi = function(){
    sliderUbi.forEach(function(_, i){
        sliderUbi[i].classList.remove('isVisible')
    })
    sliderUbi[posiciones].classList.add('isVisible')
}
// Cuando se haga 'click' en .arrowsnext, .arrowsprev se haga moviemiento de las imágenes
next.addEventListener('click', function(){
    posiciones++
    if(posiciones >= 6){
        posiciones = 0
    }
    mostrarUbi()
})
prev.addEventListener('click', function(){
    posiciones--
    if(posiciones < 0){
        posiciones = 5
    }
    mostrarUbi()
})