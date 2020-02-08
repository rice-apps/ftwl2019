webpackHotUpdate("static/development/pages/education-and-outreach.js",{

/***/ "./components/navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/ftwllogo.png */ "./static/ftwllogo.png");
/* harmony import */ var _static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_ftwllogo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.css */ "./components/navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/shaquillewyanque/git/ftwl2019/components/navbar/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import json from './Navbar.json';
// import { navbar_headers } from './navbar.json';


var navbar_headers = [{
  name: 'About Us',
  to: '/aboutus',
  subheaders: [{
    name: 'Education and Community Outreach',
    to: '/education-and-outreach'
  }, {
    name: 'Our Intake Centers',
    to: '/our-intake-centers'
  }, {
    name: 'Our Board Members',
    to: '/our-board-members'
  }]
}, {
  name: 'Ways to Give',
  to: '/waystogive',
  subheaders: [{
    name: 'Volunteer',
    to: '/volunteer'
  }, {
    name: 'Donate',
    to: '/donate'
  }, {
    name: 'Host A Party',
    to: '/host-a-party'
  }, {
    name: 'Donate Supplies',
    to: '/donate-supplies'
  }, {
    name: 'Support Us While Shopping',
    to: '/support-us-while-shopping'
  }]
}, {
  name: 'Found an Animal?',
  to: '/foundanimal',
  subheaders: [{
    name: 'Rabbits',
    to: '/found-animal/bunny'
  }, {
    name: 'Squirrels',
    to: '/found-animal/squirrel'
  }, {
    name: 'Birds',
    to: '/found-animal/bird'
  }, {
    name: 'Fawns',
    to: '/found-animal/fawn'
  }]
}, {
  name: 'News & Events',
  to: '/events',
  subheaders: [{
    name: 'Upcoming Events',
    to: '/events'
  }, {
    name: 'Announcements',
    to: '/events'
  }, {
    name: 'Animal Stories',
    to: '/events'
  }, {
    name: 'Past Events',
    to: '/events'
  }]
}, {
  name: 'Store',
  absoluteTo: 'https://squareup.com/store/FTWL',
  subheaders: []
}];

function Navbar() {
  // let style = {
  //   backgroundColor: "#515768"
  //     }
  var style = {
    paddingTop: '15px',
    paddingBottom: '15px',
    color: '#515768',
    backgroundColor: '#DCDFE5'
  };
  return __jsx("div", {
    className: "navbar-wrapper",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
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
      lineNumber: 118
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
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
      lineNumber: 120
    },
    __self: this
  }))), navbar_headers.map(function (_ref) {
    var name = _ref.name,
        to = _ref.to,
        subheaders = _ref.subheaders,
        absoluteTo = _ref.absoluteTo;
    return __jsx("div", {
      className: "navbar-category",
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, absoluteTo ? __jsx("a", {
      href: absoluteTo,
      className: "navbar-dropdown-absolute",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("button", {
      className: "navbar-dropdown-opener",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, name)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: to,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("button", {
      className: "navbar-dropdown-opener",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, name)), __jsx("div", {
      className: "dropdown-subheaders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, subheaders.map(function (_ref2) {
      var name = _ref2.name,
          to = _ref2.to;
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: to,
        key: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, name));
    })));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
var styles = {
  backgroundColor: 'white',
  textColor: 'black'
};

/***/ })

})
//# sourceMappingURL=education-and-outreach.js.3762daa76cedcc7e202a.hot-update.js.map