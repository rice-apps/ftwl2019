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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import './Footer.css';

function Footer() {
  return __jsx("div", {
    className: "footer",
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1 / 2, 1 / 2, 1 / 2],
    color: "white",
    bg: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Friends of Texas Wildlife"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Friends of Texas Wildlife is a 501(c)(3) non-profit organization; 100% of all donations support native Texas wildlife and are tax deductible to the extent permitted by law.")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1 / 2, 1 / 2, 1 / 2],
    color: "white",
    bg: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Contact Us"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Friends of Texas Wildlife", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "29615 Highland Blvd", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "Magnolia, TX 77354", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "(281) 259-0039", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), "ftwl.center@gmail.com")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    bg: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    bg: "green",
    padding: "10px 20px 10px 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "About Us"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    bg: "green",
    padding: "10px 20px 10px 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Ways to Give"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    bg: "green",
    padding: "10px 20px 10px 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Found an Animal"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    bg: "green",
    padding: "10px 20px 10px 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "News and Events"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    fontSize: 2,
    width: [1, 1, 1],
    color: "white",
    bg: "green",
    padding: "10px 20px 10px 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Store")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);
const styles = {
  "background-color": "red" //"object-fit": "cover",
  //"width": "100%",
  //"position": "absolute",
  //"padding": "64px 0px 64px 16px",

};

/***/ }),

/***/ "./components/Navbar.css":
/*!*******************************!*\
  !*** ./components/Navbar.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.css */ "./components/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import logo from "../static/ftwllogo.png";



function Navbar() {
  return __jsx("div", {
    className: "Navbar",
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontSize: 2,
    width: [1 / 8, 1 / 8, 1 / 8],
    height: [1 / 16, 1 / 16, 1 / 16],
    ml: "auto",
    mr: "auto",
    color: "black",
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/ftwllogo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontSize: 2,
    ml: "auto",
    mr: "auto",
    width: [1 / 8, 1 / 8, 1 / 8],
    height: [1 / 16, 1 / 16, 1 / 16],
    color: "black",
    bg: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "About Us"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontSize: 2,
    width: [1 / 8, 1 / 8, 1 / 8],
    height: [1 / 16, 1 / 16, 1 / 16],
    color: "black",
    bg: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Ways to Give"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontSize: 2,
    width: [1 / 8, 1 / 8, 1 / 8],
    height: [1 / 16, 1 / 16, 1 / 16],
    color: "black",
    bg: "yellow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Found an Animal?"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontSize: 2,
    width: [1 / 8, 1 / 8, 1 / 8],
    height: [1 / 16, 1 / 16, 1 / 16],
    color: "black",
    bg: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "News & Events"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontSize: 2,
    width: [1 / 2, 1 / 2, 1 / 2],
    height: [1 / 16, 1 / 16, 1 / 16],
    color: "black",
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/Facebookicon.png",
    variant: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/Instagramicon.png",
    variant: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/Twittericon.png",
    variant: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Donate"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Contact Us")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
const styles = {
  "background-color": "white",
  "text-color": "black",
  "padding-bottom": 120
};

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
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Welcome to Friends of Texas Wildlife \uD83D\uDC3B"), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shaquillewyanque/git/ftwl2019/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map