const button = document.querySelector('.burger-menu__btn');
const menuBurger = document.querySelector('#burger');

button.addEventListener('click', function() {
    menuBurger.classList.toggle('burger-menu__box')
})

