"use strict";

const hamburger = document.querySelector(".hamburger");

// Toggle between class names to show/hide menu items and change styling to menu and icon.
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
});
