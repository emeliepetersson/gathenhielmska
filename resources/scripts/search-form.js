const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

const showSearchForm = (function() {
  searchIcon.addEventListener("click", e => {
    searchForm.classList.add("show");
    searchIcon.classList.add("hide");
  });
})();

export default showSearchForm;
