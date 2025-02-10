AOS.init();

const rollingImages = () => {
   document.querySelector("#hero").classList.add("fade_in");
   document.querySelector("#img_hero_1").classList.add("img_left_right");
   document.querySelector("#img_hero_2").classList.add("img_right_left");
}
const floatingLogo = () => {
   document.querySelector("#span_icon").classList.remove("d-none");
   document.querySelector("body").classList.remove("scroll-y-none");
}


//#region EFECTO PARALLAX
window.onscroll = function () {
   let position = window.pageYOffset || document.documentElement.scrollTop;
   let img_hamburger_1 = document.getElementById("img_hamburger_1");
   let section_hamburgers = document.getElementById("section_hamburgers");
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

   floatingLogo();
   rollingImages();
})
