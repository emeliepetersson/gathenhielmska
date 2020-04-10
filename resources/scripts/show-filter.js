const filterButton = document.querySelector(".filter-wrapper");
const filters = document.querySelector(".mec-search-form");
const filterIcon = document.querySelector(".filter-icon");
const monthFilter = document.querySelector("#mec_sf_month_242");
const yearFilter = document.querySelector("#mec_sf_year_242");

const showAndHideFilters = (function() {
  //Change text content of month and year select tags
  if (monthFilter !== null) {
    monthFilter.querySelector(".mec-none-item").textContent = "Month";
  }
  if (yearFilter !== null) {
    yearFilter.querySelector(".mec-none-item").textContent = "Year";
  }

  if (filterButton !== null) {
    filterButton.addEventListener("click", e => {
      filters.classList.toggle("show");
      filterIcon.classList.toggle("rotate");
    });
  }
})();

export default showAndHideFilters;
