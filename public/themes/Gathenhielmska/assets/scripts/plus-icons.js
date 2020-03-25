const plusIcons = document.querySelectorAll(".plus-icon");

plusIcons.forEach(plusIcon => {
  plusIcon.addEventListener("click", e => {
    e.currentTarget.classList.toggle("change");
  });
});
