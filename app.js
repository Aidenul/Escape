let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let body = document.body

burger.addEventListener('click', function () {
    menu.classList.toggle('show')
    body.classList.toggle('overflow')
})