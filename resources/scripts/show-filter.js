const filterButton = document.querySelector(".filter-wrapper");
const filters = document.querySelector(".mec-search-form");
const filterIcon = document.querySelector(".filter-icon");

const showAndHideFilters = (function () {
  filterButton.addEventListener("click", (e) => {
    filters.classList.toggle("show");
    filterIcon.classList.toggle("rotate");
  });
})();

export default showAndHideFilters;
