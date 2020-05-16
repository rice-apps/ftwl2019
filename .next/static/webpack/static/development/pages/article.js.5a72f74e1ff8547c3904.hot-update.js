webpackHotUpdate("static/development/pages/article.js",{

/***/ "./components/newsevents/Article.js":
/*!******************************************!*\
  !*** ./components/newsevents/Article.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyModal.js */ "./components/newsevents/MyModal.js");
var _jsxFileName = "/Users/annabai/Rice/riceapps/ftwl2019/components/newsevents/Article.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function ArticleBody() {
  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var title = router.query.title;
  console.log("title", title);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      event = _useState[0],
      setEvent = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["client"].getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    }).then(function (response) {
      console.log(response);
      setEvent(response.items);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, event.map(function (x) {
    console.log(x.fields.announcementTitle);

    if (x.fields.announcementTitle === title) {
      return __jsx(_MyModal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: x.fields.announcementTitle,
        image: x.fields.announcementImage.fields.file.url,
        announcementBody: x.fields.announcementBody1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ArticleBody);

/***/ })

})
//# sourceMappingURL=article.js.5a72f74e1ff8547c3904.hot-update.js.map