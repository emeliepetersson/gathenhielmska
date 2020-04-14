import "./areas";
import "./general";
import "./nav";
import "./plus-icons";
import "./search-form";
import "./show-gallery-post";
import "./show-filter";
// import "./image-modal";
import "./about";

var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  autoplay: {
    delay: 6000
  }
});
