const modal = document.querySelector(".modal");
const images = document.querySelectorAll("#image-modal");
const modalImg = document.querySelector("#modal-img");
var captionText = document.getElementById("caption");

const showHideImageModal = (function() {
  // Insert the image inside the modal - use its "alt" text as a caption
  images.forEach(image => {
    image.addEventListener("click", e => {
      modal.classList.add("show");
      modalImg.src = e.currentTarget.src;
      captionText.innerHTML = e.currentTarget.alt;
    });
  });

  // Get the <span> element that closes the modal
  const close = document.querySelector("#close-modal");

  // When the user clicks on close, close the modal
  close.onclick = function() {
    modal.classList.remove("show");
  };
})();

export default showHideImageModal;
