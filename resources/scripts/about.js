"use strict";

const showAbout = document.querySelectorAll(".about-hide");
const icon = document.querySelectorAll(".plus-icon");

console.log(icon);
console.log(showAbout);

icon[2].addEventListener("click", () => {
  showAbout[0].classList.toggle("show");
});

icon[3].addEventListener("click", () => {
  showAbout[1].classList.toggle("show");
});

icon[4].addEventListener("click", () => {
  showAbout[2].classList.toggle("show");
});

icon[5].addEventListener("click", () => {
  showAbout[3].classList.toggle("show");
});

// export default about;
