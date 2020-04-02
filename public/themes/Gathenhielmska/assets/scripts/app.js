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

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas */ "./resources/scripts/areas.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ "./resources/scripts/general.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./resources/scripts/nav.js");
/* harmony import */ var _plus_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus-icons */ "./resources/scripts/plus-icons.js");
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form */ "./resources/scripts/search-form.js");





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
      var description = e.currentTarget.nextElementSibling;
      description.classList.toggle("show"); // Get the plus icon and toggle change

      var plusIcon = e.currentTarget.querySelector(".plus-icon");
      plusIcon.classList.toggle("change");
    });
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (showAreas);

/***/ }),

/***/ "./resources/scripts/general.js":
/*!**************************************!*\
  !*** ./resources/scripts/general.js ***!
  \**************************************/
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
  }
});
/* harmony default export */ __webpack_exports__["default"] = (swiper);

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
  }

  if (parents[1].classList.contains("active")) {
    hideChild[2].classList.add("show-child");
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
    if (e.target != menuItems && e.target != hamburger && e.target.parentNode.parentNode != menuItems && e.target.parentNode != menuItems && e.target.parentNode != hamburger && menuItems.classList.contains("show-menu")) {
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