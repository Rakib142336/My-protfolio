//mobile menu js
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
// 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:2,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:4
      }
  }
})

//  slide__section
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    nav:true,
    autoplay:true,
    // autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

// =======
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: true,
    slidesPerView: 1,
    spaceBetween:10,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
   
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      
    },
  });