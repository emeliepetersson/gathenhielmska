import "./areas";
import "./general";
import "./nav";
import "./plus-icons";
import "./search-form";

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
