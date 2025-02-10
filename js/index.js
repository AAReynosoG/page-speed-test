AOS.init();

let timeTimeOut = 3500;
let time = 300;

const animation_1 = () => {
   document.querySelector("#intro_logo").classList.add("d-none");
   // document.querySelector("#hero").classList.remove("d-none");
}
const animation_2 = () => {
   document.querySelector("#hero").classList.add("fade_in");
   document.querySelector("#img_hero_1").classList.add("img_left_right");
   document.querySelector("#img_hero_2").classList.add("img_right_left");
}
const animation_3 = () => {
   document.querySelector("#span_icon").classList.remove("d-none");
   document.querySelector("body").classList.remove("scroll-y-none");
}




//#region EFECTO PARALLAX
window.onscroll = function () {
   let position = window.pageYOffset || document.documentElement.scrollTop;
   let img_hamburger_1 = document.getElementById("img_hamburger_1");
   let section_hamburgers = document.getElementById("section_hamburgers");
   // console.log(section_hamburgers.style);
   // img_hamburger_1.style.bottom = `${position * 0.01}px` ;
}
//#endregion EFECTO PARALLAX


//#region DETETCTAR DARK-MODE EN EL NAVEGADOR
const favicon = document.querySelector("#favicon");
let logo = "assets/crown_logo.png"
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) logo = "assets/crown_logo_white.png"
favicon.href = logo;
//#endregion DETETCTAR DARK-MODE EN EL NAVEGADOR




document.addEventListener("DOMContentLoaded", function() {
   document.querySelector("body").classList.add("scroll-y-none");
   document.querySelector("#img_hero_1").classList.remove("img_left_right");
   document.querySelector("#img_hero_2").classList.remove("img_right_left");

   const animations = () => {
      setTimeout(() => animation_1(), timeTimeOut);
      setTimeout(() => animation_2(), timeTimeOut += time);
      setTimeout(() => animation_3(), timeTimeOut += time + 2500);
   }
   animations();
})