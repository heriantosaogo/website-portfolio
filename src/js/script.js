// navbar fixed
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      header.classList.add("navbar-fixed");
      header.classList.remove("absolute");
    } else {
      header.classList.remove("navbar-fixed");
      header.classList.add("absolute");
    }
  });
});
// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
