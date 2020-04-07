const imagesButton = document.querySelector(".show-images");
const videosButton = document.querySelector(".show-videos");
const imagesPosts = document.querySelector(".images-posts");
const videosPosts = document.querySelector(".videos-posts");

const showAndHidePosts = (function() {
  if (imagesButton !== null) {
    imagesButton.addEventListener("click", () => {
      if (!imagesButton.classList.contains("active")) {
        imagesButton.classList.add("active");
      }

      if (videosButton.classList.contains("active")) {
        videosButton.classList.remove("active");
      }

      if (!imagesPosts.classList.contains("show")) {
        imagesPosts.classList.add("show");
      }

      if (videosPosts.classList.contains("show")) {
        videosPosts.classList.remove("show");
      }
    });
  }
  if (videosButton !== null) {
    videosButton.addEventListener("click", () => {
      if (!videosButton.classList.contains("active")) {
        videosButton.classList.add("active");
      }

      if (imagesButton.classList.contains("active")) {
        imagesButton.classList.remove("active");
      }

      if (!videosPosts.classList.contains("show")) {
        videosPosts.classList.add("show");
      }

      if (imagesPosts.classList.contains("show")) {
        imagesPosts.classList.remove("show");
      }
    });
  }
})();

export default showAndHidePosts;
