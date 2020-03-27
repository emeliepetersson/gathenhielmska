"use strict";

const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
const hideChild = document.querySelectorAll(".hide-child");
const parent = document.querySelectorAll(".parent");

// Toggle between class names to show/hide menu items and change styling to menu and icon.
const menu = (function() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    menuItems.classList.toggle("show-menu");
  });

  parent[0].addEventListener("click", () => {
    hideChild[0].classList.toggle("show-child");
    hideChild[1].classList.toggle("show-child");
  });

  parent[1].addEventListener("click", () => {
    hideChild[2].classList.toggle("show-child");
  });
})();

export default menu;
