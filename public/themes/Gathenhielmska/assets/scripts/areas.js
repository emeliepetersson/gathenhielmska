"use strict";

const expandArrows = document.querySelectorAll(".expand-arrow");

expandArrows.forEach(expandArrow => {
  expandArrow.addEventListener("click", e => {
    const description = e.currentTarget.parentElement.nextElementSibling;
    description.classList.toggle("show");
  });
});
