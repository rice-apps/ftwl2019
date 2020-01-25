module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer/Footer.css":
/*!**************************************!*\
  !*** ./components/footer/Footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/footer/Footer.js":
/*!*************************************!*\
  !*** ./components/footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.css */ "./components/footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Footer() {
  return __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1 / 4, 1 / 4, 1 / 4],
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [3 / 5, 3 / 5, 3 / 5],
    color: "white",
    padding: "32px 30px 32px 0px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "footer-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Friends of Texas Wildlife"), __jsx("div", {
    className: "footer-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Friends of Texas Wildlife is a 501(c)(3) non-profit organization; 100% of all donations support native Texas wildlife and are tax deductible to the extent permitted by law."))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [2 / 5, 2 / 5, 2 / 5],
    color: "white",
    padding: "32px 0px 32px 0px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contactus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "footer-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Contact Us")), __jsx("div", {
    className: "footer-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Friends of Texas Wildlife", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), "29615 Highland Blvd", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "Magnolia, TX 77354", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "(281) 259-0039", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), "ftwl.center@gmail.com"))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    padding: "32px 0px 32px 20px",
    height: "100px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/aboutus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: "12px",
    width: [2 / 3, 2 / 3, 2 / 3],
    color: "white",
    padding: "0px 10px 10px 10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/waystogive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: "13px",
    width: [1, 1, 1],
    color: "white",
    padding: "0px 10px 10px 10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Ways to Give")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "foundanimal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: "12px",
    width: [2 / 3, 2 / 3, 2 / 3],
    color: "white",
    padding: "0px 10px 10px 10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Found an Animal")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: "12px",
    width: [2 / 3, 2 / 3, 2 / 3],
    color: "white",
    padding: "0px 10px 10px 10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "News & Events"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: "12px",
    width: [2 / 3, 2 / 3, 2 / 3],
    color: "white",
    padding: "0px 10px 10px 10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Store")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: "media-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: '../static/facebook-icon.png',
    sx: {
      width: ['30px', '30px']
    },
    padding: "3px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: '../static/twitter-icon.png',
    sx: {
      width: ['30px', '30px']
    },
    padding: "3px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: '../static/instagram-icon.png',
    sx: {
      width: ['30px', '30px']
    },
    padding: "3px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }))))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1 / 4, 1 / 4, 1 / 4],
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/navbar/Navbar.css":
/*!**************************************!*\
  !*** ./components/navbar/Navbar.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/ftwllogo.png */ "./static/ftwllogo.png");
/* harmony import */ var _static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.json */ "./components/navbar/navbar.json");
var _navbar_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./navbar.json */ "./components/navbar/navbar.json", 1);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.css */ "./components/navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/navbar/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import json from './Navbar.json';




function Navbar() {
  // let style = {
  //   backgroundColor: "#515768"
  //     }
  let style = {
    paddingTop: '15px',
    paddingBottom: '15px',
    color: "#515768",
    backgroundColor: "#DCDFE5"
  };
  return __jsx("div", {
    className: "navbar-wrapper",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    ml: 150,
    mr: "auto",
    width: "auto",
    height: "auto",
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: {
      width: 100,
      height: 100
    },
    src: _static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), _navbar_json__WEBPACK_IMPORTED_MODULE_4__["navbar_headers"].map(({
    name,
    to,
    subheaders,
    absoluteTo
  }) => __jsx("div", {
    className: "navbar-category",
    key: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, absoluteTo ? __jsx("a", {
    href: absoluteTo,
    className: "navbar-dropdown-absolute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("button", {
    className: "navbar-dropdown-opener",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, name)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("button", {
    className: "navbar-dropdown-opener",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, name)), __jsx("div", {
    className: "dropdown-subheaders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, subheaders.map(({
    name,
    to
  }) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: to,
    key: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, name)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
const styles = {
  backgroundColor: 'white',
  textColor: 'black'
};

/***/ }),

/***/ "./components/navbar/navbar.json":
/*!***************************************!*\
  !*** ./components/navbar/navbar.json ***!
  \***************************************/
/*! exports provided: navbar_headers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"navbar_headers\":[{\"name\":\"About Us\",\"to\":\"/aboutus\",\"subheaders\":[{\"name\":\"Education and Community Outreach\",\"to\":\"/education-and-outreach\"},{\"name\":\"Our Intake Centers\",\"to\":\"/our-intake-centers\"},{\"name\":\"Our Board Members\",\"to\":\"/our-board-members\"}]},{\"name\":\"Ways to Give\",\"to\":\"/waystogive\",\"subheaders\":[{\"name\":\"Volunteer\",\"to\":\"/volunteer\"},{\"name\":\"Donate\",\"to\":\"/donate\"},{\"name\":\"Host A Party\",\"to\":\"/host-a-party\"},{\"name\":\"Donate Supplies\",\"to\":\"/donate-supplies\"},{\"name\":\"Support Us While Shopping\",\"to\":\"/support-us-while-shopping\"}]},{\"name\":\"Found an Animal?\",\"to\":\"/foundanimal\",\"subheaders\":[{\"name\":\"Rabbits\",\"to\":\"/found-animal/bunny\"},{\"name\":\"Squirrels\",\"to\":\"/found-animal/squirrel\"},{\"name\":\"Birds\",\"to\":\"/found-animal/bird\"},{\"name\":\"Fawns\",\"to\":\"/found-animal/fawn\"}]},{\"name\":\"News & Events\",\"to\":\"/events\",\"subheaders\":[{\"name\":\"Upcoming Events\",\"to\":\"/events\"},{\"name\":\"Announcements\",\"to\":\"/events\"},{\"name\":\"Animal Stories\",\"to\":\"/events\"},{\"name\":\"Past Events\",\"to\":\"/events\"}]},{\"name\":\"Store\",\"absoluteTo\":\"https://squareup.com/store/FTWL\",\"subheaders\":[]}]}");

/***/ }),

/***/ "./components/splashpage/MainDeer.css":
/*!********************************************!*\
  !*** ./components/splashpage/MainDeer.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/splashpage/MainDeer.js":
/*!*******************************************!*\
  !*** ./components/splashpage/MainDeer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainDeer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainDeer.css */ "./components/splashpage/MainDeer.css");
/* harmony import */ var _MainDeer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MainDeer_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/splashpage/MainDeer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function MainDeer() {
  return __jsx("div", {
    className: "jsx-4252671488" + " " + "DHDCopyWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4252671488" + " " + "MenuPlaceholder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4252671488",
    __self: this
  }, "#DHDMain.jsx-4252671488{height:88vh;width:100vw;background-image:url('../../static/home/deer.png');background-size:100vw 88vh;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFxdWlsbGV3eWFucXVlL2dpdC9mdHdsMjAxOS9jb21wb25lbnRzL3NwbGFzaHBhZ2UvTWFpbkRlZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVMsQUFHcUIsWUFDQSxZQUN1QyxtREFDeEIsMkJBQ2YsWUFDZCIsImZpbGUiOiIvVXNlcnMvc2hhcXVpbGxld3lhbnF1ZS9naXQvZnR3bDIwMTkvY29tcG9uZW50cy9zcGxhc2hwYWdlL01haW5EZWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9NYWluRGVlci5jc3MnO1xuXG5mdW5jdGlvbiBNYWluRGVlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkRIRENvcHlXcmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1lbnVQbGFjZWhvbGRlclwiPjwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgI0RIRE1haW4ge1xuICAgICAgICBoZWlnaHQ6IDg4dmg7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9zdGF0aWMvaG9tZS9kZWVyLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDg4dmg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cIkRIRE1haW5cIj5cbiAgICAgICAgPGRpdiBpZD1cIkRIRFRleHRXcmFwcGVyXCI+XG4gICAgICAgICAgPGgxPkZyaWVuZHMgb2YgVGV4YXMgV2lsZGxpZmU8L2gxPlxuICAgICAgICAgIDxoMj5HaXZpbmcgd2lsZGxpZmUgYSBzZWNvbmQgY2hhbmNlLjwvaDI+XG4gICAgICAgICAgPGRpdiBpZD1cImxlYXJuQm94XCI+TEVBUk4gTU9SRTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluRGVlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/shaquillewyanque/git/ftwl2019/components/splashpage/MainDeer.js */"), __jsx("div", {
    id: "DHDMain",
    className: "jsx-4252671488",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    id: "DHDTextWrapper",
    className: "jsx-4252671488",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4252671488",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Friends of Texas Wildlife"), __jsx("h2", {
    className: "jsx-4252671488",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Giving wildlife a second chance."), __jsx("div", {
    id: "learnBox",
    className: "jsx-4252671488",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "LEARN MORE"))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainDeer);

/***/ }),

/***/ "./components/splashpage/NeedAssistance.css":
/*!**************************************************!*\
  !*** ./components/splashpage/NeedAssistance.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/splashpage/NeedAssistance.js":
/*!*************************************************!*\
  !*** ./components/splashpage/NeedAssistance.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_home_NA_bunny_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/home/NA_bunny.png */ "./static/home/NA_bunny.png");
/* harmony import */ var _static_home_NA_bunny_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_home_NA_bunny_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_home_call_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/home/call_icon.png */ "./static/home/call_icon.png");
/* harmony import */ var _static_home_call_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_home_call_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_home_Oval_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/home/Oval 2.png */ "./static/home/Oval 2.png");
/* harmony import */ var _static_home_Oval_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_home_Oval_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_home_Line_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/home/Line.png */ "./static/home/Line.png");
/* harmony import */ var _static_home_Line_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_home_Line_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_home_calendar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/home/calendar.png */ "./static/home/calendar.png");
/* harmony import */ var _static_home_calendar_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_home_calendar_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NeedAssistance_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NeedAssistance.css */ "./components/splashpage/NeedAssistance.css");
/* harmony import */ var _NeedAssistance_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NeedAssistance_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/splashpage/NeedAssistance.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function NeedAssistance() {
  return __jsx("div", {
    className: "NAWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    id: "randbunny",
    src: _static_home_NA_bunny_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "NATextWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "NAText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    id: "NATitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Found an animal?"), __jsx("div", {
    className: "NAinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    id: "callIcon",
    src: _static_home_call_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), "Call us at 281-259-0039."), __jsx("div", {
    className: "NAinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    id: "clockBg",
    src: _static_home_Oval_2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("img", {
    id: "clockHand",
    src: _static_home_Line_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), " 10 AM to 2 PM", ' '), __jsx("div", {
    className: "NAinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    id: "calendarIcon",
    src: _static_home_calendar_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "Monday through Saturday"), __jsx("div", {
    id: "NAparagraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "For assistance after hours, please utilize the resources on this website. Unfortunately, as a volunteer organization, we are unable to provide 24-hour assistance.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), "Please call ahead before bringing animals to our center so that we are ready to assist you!")), __jsx("div", {
    id: "WildlifeHelpBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "WILDLIFE HELP"))));
}

/* harmony default export */ __webpack_exports__["default"] = (NeedAssistance);

/***/ }),

/***/ "./components/splashpage/Sponsors.css":
/*!********************************************!*\
  !*** ./components/splashpage/Sponsors.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/splashpage/Sponsors.js":
/*!*******************************************!*\
  !*** ./components/splashpage/Sponsors.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Title */ "./components/util/Title.js");
/* harmony import */ var _Sponsors_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sponsors.css */ "./components/splashpage/Sponsors.css");
/* harmony import */ var _Sponsors_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Sponsors_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/splashpage/Sponsors.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Logo(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: props.src,
    sx: {
      height: [70],
      margin: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

function Logos(props) {
  return __jsx("div", {
    className: "logos-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.sponsors.urls.map(src => __jsx(Logo, {
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))));
}

function Sponsors(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_util_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Partners and Sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(Logos, {
    sponsors: imgs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
}

let imgs = {
  urls: ['../../static/sponsors/walmart 1.png', '../../static/sponsors/kroger 1.png', '../../static/sponsors/texas forest service 1.png', '../../static/sponsors/c_e_ sheperd 1.png', '../../static/sponsors/911 Wildlife Logo 1.png', '../../static/sponsors/cunningham living(1) 1.png', '../../static/sponsors/wildlife center of texas 1.png', '../../static/sponsors/pets paw logo(1) 1.png', '../../static/sponsors/bay area wildlife logo-page-001 1.png', '../../static/sponsors/spring creek greenway 1.png', '../../static/sponsors/dove key ranch(1) 1.png', '../../static/sponsors/fox valley 1.png']
};
/* harmony default export */ __webpack_exports__["default"] = (Sponsors);

/***/ }),

/***/ "./components/splashpage/WaysToGive2.css":
/*!***********************************************!*\
  !*** ./components/splashpage/WaysToGive2.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/splashpage/WaysToGive2.js":
/*!**********************************************!*\
  !*** ./components/splashpage/WaysToGive2.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_home_hands_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/home/hands.png */ "./static/home/hands.png");
/* harmony import */ var _static_home_hands_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_home_hands_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WaysToGive2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WaysToGive2.css */ "./components/splashpage/WaysToGive2.css");
/* harmony import */ var _WaysToGive2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WaysToGive2_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/splashpage/WaysToGive2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function WaysToGive2() {
  return __jsx("div", {
    className: "W2G2Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Ways to Give"), __jsx("div", {
    id: "W2G2OptionWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "W2G2Item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "W2G2Icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    className: "HandsIcon",
    src: _static_home_hands_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Volunteer"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Friends of Texas Wildlife relies totally on caring volunteers like yourself to help fulfill its mission.", ' ')), __jsx("div", {
    className: "W2G2Item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "W2G2Icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    className: "HandsIcon",
    src: _static_home_hands_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Donate"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "We are a non-profit organization. 100% of all donations directly support native Texas wildlife.")), __jsx("div", {
    className: "W2G2Item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "W2G2Icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    className: "HandsIcon",
    src: _static_home_hands_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "More"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Explore other ways you can make a difference by supporting the Friends of Texas Wildlife.", ' '))));
}

/* harmony default export */ __webpack_exports__["default"] = (WaysToGive2);

/***/ }),

/***/ "./components/util/Title.css":
/*!***********************************!*\
  !*** ./components/util/Title.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/util/Title.js":
/*!**********************************!*\
  !*** ./components/util/Title.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.css */ "./components/util/Title.css");
/* harmony import */ var _Title_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Title_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/util/Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Title(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "title-container",
    width: props.width,
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Playfair+Display:400i&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.title), __jsx("p", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.subtitle));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _components_splashpage_Sponsors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/splashpage/Sponsors */ "./components/splashpage/Sponsors.js");
/* harmony import */ var _components_splashpage_MainDeer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/splashpage/MainDeer */ "./components/splashpage/MainDeer.js");
/* harmony import */ var _components_splashpage_NeedAssistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/splashpage/NeedAssistance */ "./components/splashpage/NeedAssistance.js");
/* harmony import */ var _components_splashpage_WaysToGive2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/splashpage/WaysToGive2 */ "./components/splashpage/WaysToGive2.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_splashpage_MainDeer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_splashpage_NeedAssistance__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_splashpage_WaysToGive2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_splashpage_Sponsors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/ftwllogo.png":
/*!*****************************!*\
  !*** ./static/ftwllogo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ftwllogo-24d9e5216cd651a7140e37fde354f46e.png";

/***/ }),

/***/ "./static/home/Line.png":
/*!******************************!*\
  !*** ./static/home/Line.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYCAYAAAAs7gcTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACCSURBVHgB7ZJRDYAgFEUvzgBEsIFEMIIRjKAJNIINNIJNsIERtAE+Jh9s8hh8693uB+McHmMIY8wMoMaTXQgxgEnpwAYJKZCRH/40rOgXVjH48taSqklQQdqeRD3MOz0nSKoOCCO40OaaK0wBYbHTc4QtNqHzwJN9IU9QDmyREv+uNxmcqo/q2a/mAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/home/NA_bunny.png":
/*!**********************************!*\
  !*** ./static/home/NA_bunny.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/NA_bunny-710beacbe7f2f355bc91760bf8564e76.png";

/***/ }),

/***/ "./static/home/Oval 2.png":
/*!********************************!*\
  !*** ./static/home/Oval 2.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ6SURBVHgBzZi7btpgGIY/G5C6IDl34NwABaZsdbaMUW8gSIBEp5K1S8PWDboxACVbu5EtnWq2TECvIL6DOGKKOPV9kR25CQdbMfA/y++zX33f9x/eX5OIVKtVYzweWzi0NE17v1gsTLSmfx/nDs4dtH9xaqfTabvRaLgSAS3sg6VSycKPznF4gZ8aEgG8102lUrVms+mEeX6rqEqlYk4mkzqEnMsbCSsuselmuVz+PJvNfkJQVmKA35nP54V8Pv80GAzuJKoopKuO5gofeifxwu+dQZhAWF/CiioWiz8gpiK7xcrlcuZwOLyRbaIQoa8QVJU9wHQiYgYi9lvWiWINofkm++UEwh6DNfbc+7xeNoza3WPCTSaTOb9X6v5VCLo6kCBiTKfTun+yjBSjhIv3cnhOW62WvYwUoyQK4M0YohUKBQP5fBA1cJGxYz2RSFiiDgzQB6bPEoVACk91Lj9EIahH53pIFIJrMz24QFMBBkkXBVFTFNfUohBc37OmHFEIBkn3XIcyUA9ryhaFQOb+6DAGNo4j+bJdgrmvr3e7XRchuxYFoAWjnuWQgJD1RAGQtRrbpSgurNAcVJgXJUckMHgil5dyoNqCoAc/SuTZzYxGIzebzT4hlWeyZ/DPL51O51ZeiiIwhncwiEd46ET2Rw3l85+te2VGIewWwo7j2j/YBOuo3W5fvry+0rZDWA8GkU7Hkp3pWXyHoE+rbq7d4IBjtVFjj14qY9vkYFGzhiCotu6ZjVtBrLFMJvMLHzmKIZ2MTg+97GOwqFcReicPVsyE86GLvpDwUAiHmWu8d+ONh1sJLSogzvBs2bo9z/vAnmefcyunDonAP4rTJRe91l8TAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/home/calendar.png":
/*!**********************************!*\
  !*** ./static/home/calendar.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/home/call_icon.png":
/*!***********************************!*\
  !*** ./static/home/call_icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgBvZg7jtpQFIaPbSjSUVKSFcTAAuJhAxHZQBweEt2QFYTp0oV0SDxCVkCmSwfZAHZWMKSjCwVFJF7zH2RbHg/ge81cfxLCWNfcn3POPQ80itBut3Pr9fr2cDi0vVs/s9nsXa/XW1BKaOEPrVarsNlsppqmFcL3IXCx2+2K4/F4RSmgxwli+F4mk5natp2jFAhEbbfbySlBIcy0hB1FNRqNr7ypwHoWNiHFGM1m08b7F4lnCsViseA4zj0pQkcQfyBJ4Ga7Xq9/J0Ww+yxKAAvjw0EK0OkKkCaUBD2LSpR7OHf1+32XFMAxJS2Kn4GVbkgROmLjt8wDviBk9wUpgt0n7IJQuVHiNkoiStf1qkoLBfsMBoMZW0BkMdalV/sQVz8E13+mFDiKQjHuklhqsFAnLVLMURT3SXCNaC2bqMrkPkFGx6nqkJi1ctzmkEIM/8J13VWpVHpFYrUwr7JTeFL7OLZETyIXZMSXksA3wh9grf/lcvkPLm0Sw4J1aT6fS1WFOLRTN9ErdWGJWxKni3z36dICNJMmvMAdruV5Y3ZuStLOfQlc45BYi+wzQ6v88dQmLGi/3/NQ8iT5sjgIu8nn84tOpxPcP9tPIb6qovHlYfE0FE0X5wQxPKjwM8vl8nVYlEYX8Ew+xaVUecEzY9TJb1yW8JqcEhRZzxarwGIPLE6L28AT5pB6XHingkT+L1YUU6vVbPxyZYOCD1uYtxMSxSR1ZQK6wqIYTMcFwzCmMZP0taykphlu8LgVljyVUnC7LWWpMAkSrCh3BiUExfiXaZp/cWnGHXlRYKWH4XBYvWoYHY1GY8+dop3rRUH4rgpfJ3ZfFO8QdGA16f8mPEHv/SnpxURFxHFL89Y7pZf2OOA1Q9KshaekFxcVhvt5WOEdxL3BexB7fHqRjF3UxHvE0DPXPwKUkmgitGZo2QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/home/hands.png":
/*!*******************************!*\
  !*** ./static/home/hands.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shaquillewyanque/git/ftwl2019/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map