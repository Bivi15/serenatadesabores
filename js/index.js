'use strict'

//HOMEPAGE

// Cuando se haga 'click' en .Header-menu se va a agregar/quita la clase .change
const headerMenu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

headerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('hasChange')
})

//Slider 
// Se calcula la posición de las imágenes
const siguiente = document.querySelector('.arrownext')
const anterior = document.querySelector('.arrowprev')
const sliderBtn = document.querySelectorAll('.temporada__btn')
const sliderImg = document.querySelectorAll('.temporada__img')

let posicion = 0
let mostrarImagen = function(){
    sliderImg.forEach(function(_, i){
        sliderImg[i].classList.remove('isVisible')
        sliderBtn[i].classList.remove('esActive')
    })
    sliderImg[posicion].classList.add('isVisible')
    sliderBtn[posicion].classList.add('esActive')
}
// Cuando se haga 'click' en .arrownext,  .arrowprev o .temporada__btn se haga moviemiento de las imágenes
siguiente.addEventListener('click', function(){
    posicion++
    if(posicion >= 5){
        posicion = 0
    }
    mostrarImagen()
})
anterior.addEventListener('click', function(){
    posicion--
    if(posicion < 0){
        posicion = 4
    }
    mostrarImagen()
})
sliderBtn.forEach(function(each, i){
    sliderBtn[i].addEventListener('click', function(){
        posicion = i
        mostrarImagen()
    })
})

//Lightbox
// Cuando se haga 'click' en .iconicos__grid el .iconicos__lightbox tiene un display: flex
const gridImgs = document.querySelectorAll('.iconicos__img')
const lightbox = document.querySelector('.iconicos__lightbox')
const lightboxBtn = lightbox.querySelector('.lightbox__btn')
const lightboxImg = lightbox.querySelector('.lightbox__img')

gridImgs.forEach( (_ , i) =>{
    gridImgs[i].addEventListener('click', ()=>{
        lightbox.style.display = 'flex'
        lightboxImg.src = gridImgs[i].src
    })
})
//Cuando see haga 'click' en .lightbox__btn el .iconicos__lightbox tiene un display: none
lightboxBtn.addEventListener('click', () => {
    lightbox.style.display  = 'none'
})