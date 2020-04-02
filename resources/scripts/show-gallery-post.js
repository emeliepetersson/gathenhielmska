const ImagesButton = document.querySelector(".show-images");
const VideosButton = document.querySelector(".show-videos");
const ImagesPosts = document.querySelector(".images-posts");
const VideosPosts = document.querySelector(".videos-posts");

const showAndHidePosts = (function() {
  ImagesButton.addEventListener("click", () => {
    ImagesPosts.classList.add("show");
    VideosPosts.classList.remove("show");
  });

  VideosButton.addEventListener("click", () => {
    VideosPosts.classList.add("show");
    ImagesPosts.classList.remove("show");
  });
})();

export default showAndHidePosts;
