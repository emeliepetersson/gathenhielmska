const ImagesButton = document.querySelector(".show-images");
const VideosButton = document.querySelector(".show-videos");
const ImagesPosts = document.querySelector(".images-posts");
const VideosPosts = document.querySelector(".videos-posts");

const showAndHidePosts = (function() {
  ImagesButton.addEventListener("click", () => {
    if (!ImagesButton.classList.contains("active")) {
      ImagesButton.classList.add("active");
    }

    if (VideosButton.classList.contains("active")) {
      VideosButton.classList.remove("active");
    }

    if (!ImagesPosts.classList.contains("show")) {
      ImagesPosts.classList.add("show");
    }

    if (VideosPosts.classList.contains("show")) {
      VideosPosts.classList.remove("show");
    }
  });

  VideosButton.addEventListener("click", () => {
    if (!VideosButton.classList.contains("active")) {
      VideosButton.classList.add("active");
    }

    if (ImagesButton.classList.contains("active")) {
      ImagesButton.classList.remove("active");
    }

    if (!VideosPosts.classList.contains("show")) {
      VideosPosts.classList.add("show");
    }

    if (ImagesPosts.classList.contains("show")) {
      ImagesPosts.classList.remove("show");
    }
  });
})();

export default showAndHidePosts;
