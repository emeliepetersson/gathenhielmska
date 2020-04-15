/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/scripts/about.js":
/*!************************************!*\
  !*** ./resources/scripts/about.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var showAbout = document.querySelectorAll(".about-hide");
var icon = document.querySelectorAll(".plus-icon");
icon[2].addEventListener("click", function () {
  showAbout[0].classList.toggle("show");
});
icon[3].addEventListener("click", function () {
  showAbout[1].classList.toggle("show");
});
icon[4].addEventListener("click", function () {
  showAbout[2].classList.toggle("show");
});
icon[5].addEventListener("click", function () {
  showAbout[3].classList.toggle("show");
}); // export default about;

/***/ }),

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas */ "./resources/scripts/areas.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper */ "./resources/scripts/swiper.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./resources/scripts/nav.js");
/* harmony import */ var _plus_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus-icons */ "./resources/scripts/plus-icons.js");
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form */ "./resources/scripts/search-form.js");
/* harmony import */ var _show_gallery_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-gallery-post */ "./resources/scripts/show-gallery-post.js");
/* harmony import */ var _show_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-filter */ "./resources/scripts/show-filter.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./resources/scripts/about.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _image_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-modal */ "./resources/scripts/image-modal.js");










/***/ }),

/***/ "./resources/scripts/areas.js":
/*!************************************!*\
  !*** ./resources/scripts/areas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var showAreaIcons = document.querySelectorAll(".show-area");

var showAreas = function () {
  showAreaIcons.forEach(function (showAreaIcon) {
    showAreaIcon.addEventListener("click", function (e) {
      // Get the area description and toggle show
      var description = e.currentTarget.querySelector(".area-wrapper");
      description.classList.toggle("show"); // Get the plus icon and toggle change

      var plusIcon = e.currentTarget.querySelector(".plus-icon");
      plusIcon.classList.toggle("change");
    });
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (showAreas);

/***/ }),

/***/ "./resources/scripts/image-modal.js":
/*!******************************************!*\
  !*** ./resources/scripts/image-modal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modal = document.querySelector(".modal");
var images = document.querySelectorAll("#image-modal");
var modalImg = document.querySelector("#modal-img");
var captionText = document.getElementById("caption");

var showHideImageModal = function () {
  // Insert the image inside the modal - use its "alt" text as a caption
  images.forEach(function (image) {
    image.addEventListener("click", function (e) {
      modal.classList.add("show");
      modalImg.src = e.currentTarget.src;
      captionText.innerHTML = e.currentTarget.alt;
    });
  }); // Get the <span> element that closes the modal

  var close = document.querySelector("#close-modal"); // When the user clicks on close, close the modal

  close.onclick = function () {
    modal.classList.remove("show");
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (showHideImageModal);

/***/ }),

/***/ "./resources/scripts/nav.js":
/*!**********************************!*\
  !*** ./resources/scripts/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var hamburger = document.querySelector(".hamburger");
var menuItems = document.querySelector(".menu-items");
var hideChild = document.querySelectorAll(".hide-child");
var parents = document.querySelectorAll(".parent");
var mediaIcons = document.querySelectorAll(".media-icons");

var togglePlusIcon = function togglePlusIcon(e) {
  var plusIcon = e.currentTarget.querySelector(".plus-icon");
  plusIcon.classList.toggle("change");
};

var menu = function () {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("change");
    menuItems.classList.toggle("show-menu");
  }); //Show child-pages when parent is the active nav-link

  if (parents[0].classList.contains("active")) {
    hideChild[0].classList.add("show-child");
    hideChild[1].classList.add("show-child");
    var plusIcon = parents[0].querySelector(".plus-icon");
    plusIcon.classList.add("change");
  } // Toggle between class names to show/hide menu items and change styling to menu and icon.


  parents[0].addEventListener("click", function (e) {
    hideChild[0].classList.toggle("show-child");
    hideChild[1].classList.toggle("show-child");
    togglePlusIcon(e);
  });
  parents[1].addEventListener("click", function (e) {
    hideChild[2].classList.toggle("show-child");
    togglePlusIcon(e);
  }); // Hide menu when clicking on anything else than menu-elements

  window.addEventListener("click", function (e) {
    if (e.target != menuItems && e.target != hamburger && e.target != mediaIcons && e.target.parentNode.parentNode != mediaIcons && e.target.parentNode.parentNode != menuItems && e.target.parentNode != menuItems && e.target.parentNode != hamburger && menuItems.classList.contains("show-menu")) {
      menuItems.classList.remove("show-menu");
      hamburger.classList.remove("change");
    }
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./resources/scripts/plus-icons.js":
/*!*****************************************!*\
  !*** ./resources/scripts/plus-icons.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var plusIcons = document.querySelectorAll(".plus-icon");

var eventListenerForPlusIcons = function () {
  plusIcons.forEach(function (plusIcon) {
    plusIcon.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("change");
    });
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (eventListenerForPlusIcons);

/***/ }),

/***/ "./resources/scripts/search-form.js":
/*!******************************************!*\
  !*** ./resources/scripts/search-form.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var searchIcon = document.querySelector(".search-icon");
var searchForm = document.querySelector(".search-form");

var showSearchForm = function () {
  searchIcon.addEventListener("click", function (e) {
    searchForm.classList.add("show");
    searchIcon.classList.add("hide");
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (showSearchForm);

/***/ }),

/***/ "./resources/scripts/show-filter.js":
/*!******************************************!*\
  !*** ./resources/scripts/show-filter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var filterButton = document.querySelector(".filter-wrapper");
var filters = document.querySelector(".mec-search-form");
var filterIcon = document.querySelector(".filter-icon");
var monthFilter = document.querySelector("#mec_sf_month_242");
var yearFilter = document.querySelector("#mec_sf_year_242");

var showAndHideFilters = function () {
  //Change text content of month and year select tags
  if (monthFilter !== null) {
    monthFilter.querySelector(".mec-none-item").textContent = "Month";
  }

  if (yearFilter !== null) {
    yearFilter.querySelector(".mec-none-item").textContent = "Year";
  }

  if (filterButton !== null) {
    filterButton.addEventListener("click", function (e) {
      filters.classList.toggle("show");
      filterIcon.classList.toggle("rotate");
    });
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (showAndHideFilters);

/***/ }),

/***/ "./resources/scripts/show-gallery-post.js":
/*!************************************************!*\
  !*** ./resources/scripts/show-gallery-post.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imagesButton = document.querySelector(".show-images");
var videosButton = document.querySelector(".show-videos");
var imagesPosts = document.querySelector(".images-posts");
var videosPosts = document.querySelector(".videos-posts");

var showAndHidePosts = function () {
  if (imagesButton !== null) {
    imagesButton.addEventListener("click", function () {
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
    videosButton.addEventListener("click", function () {
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
}();

/* harmony default export */ __webpack_exports__["default"] = (showAndHidePosts);

/***/ }),

/***/ "./resources/scripts/swiper.js":
/*!*************************************!*\
  !*** ./resources/scripts/swiper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  autoplay: {
    delay: 4000
  }
});
/* harmony default export */ __webpack_exports__["default"] = (swiper);

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./resources/scripts/app.js ./resources/styles/app.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/emeliepetersson/Documents/GitHub/gathenhielmska/resources/scripts/app.js */"./resources/scripts/app.js");
module.exports = __webpack_require__(/*! /Users/emeliepetersson/Documents/GitHub/gathenhielmska/resources/styles/app.scss */"./resources/styles/app.scss");


/***/ })

/******/ });