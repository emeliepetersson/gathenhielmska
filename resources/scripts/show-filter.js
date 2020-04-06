const filterButton = document.querySelector(".filter-wrapper");
const filters = document.querySelector(".mec-search-form");

const showAndHideFilters = (function() {
  filterButton.addEventListener("click", e => {
    filters.classList.toggle("show");
    console.log("works");
  });
})();

export default showAndHideFilters;
