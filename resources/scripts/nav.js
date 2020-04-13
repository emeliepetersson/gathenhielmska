"use strict";

const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
const hideChild = document.querySelectorAll(".hide-child");
const parents = document.querySelectorAll(".parent");

const togglePlusIcon = e => {
  const plusIcon = e.currentTarget.querySelector(".plus-icon");
  plusIcon.classList.toggle("change");
};

const menu = (function() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    menuItems.classList.toggle("show-menu");
  });

  //Show child-pages when parent is the active nav-link
  if (parents[0].classList.contains("active")) {
    hideChild[0].classList.add("show-child");
    hideChild[1].classList.add("show-child");
    const plusIcon = parents[0].querySelector(".plus-icon");
    plusIcon.classList.add("change");
  }
  if (parents[1].classList.contains("active")) {
    hideChild[2].classList.add("show-child");
    const plusIcon = parents[1].querySelector(".plus-icon");
    plusIcon.classList.add("change");
  }

  // Toggle between class names to show/hide menu items and change styling to menu and icon.
  parents[0].addEventListener("click", e => {
    hideChild[0].classList.toggle("show-child");
    hideChild[1].classList.toggle("show-child");
    togglePlusIcon(e);
  });

  parents[1].addEventListener("click", e => {
    hideChild[2].classList.toggle("show-child");
    togglePlusIcon(e);
  });

  // Hide menu when clicking on anything else than menu-elements
  window.addEventListener("click", e => {
    if (
      e.target != menuItems &&
      e.target != hamburger &&
      e.target.parentNode.parentNode != menuItems &&
      e.target.parentNode != menuItems &&
      e.target.parentNode != hamburger &&
      menuItems.classList.contains("show-menu")
    ) {
      menuItems.classList.remove("show-menu");
      hamburger.classList.remove("change");
    }
  });
})();

export default menu;
