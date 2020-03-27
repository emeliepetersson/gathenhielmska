const searchIcon = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");

const searchForm = (function() {
  searchIcon.addEventListener("click", e => {
    e.preventDefault();
    searchInput.classList.add("show");
  });
})();

export default searchForm;
