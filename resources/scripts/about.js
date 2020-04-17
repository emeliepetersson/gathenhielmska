"use strict";

const showAbout = document.querySelectorAll(".about-hide");
const icon = document.querySelectorAll(".plus-icon");

if (icon[1] != null) {
  icon[1].addEventListener("click", () => {
    showAbout[0].classList.toggle("show");
  });
}

if (icon[2] != null) {
  icon[2].addEventListener("click", () => {
    showAbout[1].classList.toggle("show");
  });
}

if (icon[3] != null) {
  icon[3].addEventListener("click", () => {
    showAbout[2].classList.toggle("show");
  });
}

if (icon[4] != null) {
  icon[4].addEventListener("click", () => {
    showAbout[3].classList.toggle("show");
  });
}
