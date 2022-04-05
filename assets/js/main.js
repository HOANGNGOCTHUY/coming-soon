//TABS UI
var navs = document.querySelectorAll('.menu-items');
var wraps = document.querySelectorAll('.wrap-item');
var btns = document.querySelectorAll('.btn');

let currentSlide = 1;

//JS
var manualNav = function(manual){
     wraps.forEach((wrap) => {
          wrap.classList.remove('active');

          btns.forEach((btn) =>{
               btn.classList.remove('active');
          });
          navs.forEach((nav) =>{
               nav.classList.remove('active');
          });
          
     });
     wraps[manual].classList.add('active');
     btns[manual].classList.add('active');
     navs[manual].classList.add('active');
}
btns.forEach((btn,i) => {
     btn.addEventListener("click",() =>{
          manualNav(i);
          currentSlide = i;
     });
});
navs.forEach((nav,i) => {
     nav.addEventListener("click",() =>{
          manualNav(i);
          currentSlide = i;
     });
});
