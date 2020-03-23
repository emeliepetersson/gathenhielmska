"use strict";

const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
const hideChild = document.querySelectorAll(".hide");
const show = document.querySelectorAll(".show");

// Toggle between class names to show/hide menu items and change styling to menu and icon.
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  menuItems.classList.toggle("show-menu");
});

show[0].addEventListener("click", () => {
  hideChild[0].classList.toggle("showChild");
});

show[1].addEventListener("click", () => {
  hideChild[1].classList.toggle("showChild");
});
