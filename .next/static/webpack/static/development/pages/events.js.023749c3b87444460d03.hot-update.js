webpackHotUpdate("static/development/pages/events.js",{

/***/ "./components/newsevents/MyModal.js":
/*!******************************************!*\
  !*** ./components/newsevents/MyModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ImageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ImageText */ "./components/util/ImageText.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _MyModal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyModal.css */ "./components/newsevents/MyModal.css");
/* harmony import */ var _MyModal_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MyModal_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "/Users/annabai/Rice/riceapps/ftwl2019/components/newsevents/MyModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function MyModal(props) {
  // return <ImageText title="April Fundraiser" date="Thursday, April 12, 2019" preview="hello this is really a short preview of our blog post." />;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none"),
      myModalDisplay = _useState[0],
      setMyModalDisplay = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_5__["default"].getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    }).then(function (response) {
      console.log(response);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    width: 1,
    id: "myBtn",
    onClick: function onClick() {
      setMyModalDisplay("block");
      history.pushState({}, '', "events" + props.title);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_util_ImageText__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.title,
    image: props.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  })), __jsx("div", {
    id: "myModal",
    "class": "modal",
    style: {
      display: myModalDisplay
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("span", {
    "class": "close",
    onClick: function onClick() {
      setMyModalDisplay("none");
      history.pushState({}, '', 'events');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "\xD7"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: props.image,
    sx: {
      width: ['50%', '50%']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__["documentToReactComponents"])(props.announcementBody))))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyModal);

/***/ })

})
//# sourceMappingURL=events.js.023749c3b87444460d03.hot-update.js.map