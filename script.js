// header bar
let menu = document.querySelector(".menuIcon")
let mobileMenu = document.querySelector(".mobile__menu")
const xMark = document.querySelector(".crossMark")
console.log(xMark)

menu.addEventListener('click', function(){
    mobileMenu.classList.toggle("show")
});

xMark.addEventListener('click', function(){
    mobileMenu.classList.remove("show")
})
