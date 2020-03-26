"use strict";

const showAreaIcons = document.querySelectorAll(".show-area");

const showAreas = (function() {
  showAreaIcons.forEach(showAreaIcon => {
    showAreaIcon.addEventListener("click", e => {
      // Get the area description and toggle show
      const description = e.currentTarget.nextElementSibling;
      description.classList.toggle("show");

      // Get the plus icon and toggle change
      const plusIcon = e.currentTarget.querySelector(".plus-icon");
      plusIcon.classList.toggle("change");
    });
  });
})();

export default showAreas;
