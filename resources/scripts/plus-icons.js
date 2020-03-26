const plusIcons = document.querySelectorAll(".plus-icon");

const eventListenerForPlusIcons = (function() {
  plusIcons.forEach(plusIcon => {
    plusIcon.addEventListener("click", e => {
      e.currentTarget.classList.toggle("change");
    });
  });
})();

export default eventListenerForPlusIcons;
