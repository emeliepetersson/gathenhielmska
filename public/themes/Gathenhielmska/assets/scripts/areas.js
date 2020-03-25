"use strict";

const showAreaIcons = document.querySelectorAll(".show-area");

showAreaIcons.forEach(showAreaIcon => {
  showAreaIcon.addEventListener("click", e => {
    const description = e.currentTarget.parentElement.nextElementSibling;
    description.classList.toggle("show");
  });
});
