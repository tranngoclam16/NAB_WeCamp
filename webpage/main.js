let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}
let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
    cart.classList.remove('active');
    search.classList.remove('active');
    user.classList.toggle('active');
}


var swiper = new Swiper(".top-titles", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//navbar
let header  = document.querySelector('header');

window.addEventListener('scroll',() => {
  header.classList.toggle('shadow', window.scrollY > 0);
})
