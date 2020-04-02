import "./areas";
import "./general";
import "./nav";
import "./plus-icons";
import "./search-form";
import "./show-gallery-post";

var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  autoplay: {
    delay: 2000
  }
});
