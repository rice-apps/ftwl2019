webpackHotUpdate("static/development/pages/donate-supplies.js",{

/***/ "./components/donate-supplies/SuppliesCollapsible.js":
/*!***********************************************************!*\
  !*** ./components/donate-supplies/SuppliesCollapsible.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _DonateSuppliesContent_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DonateSuppliesContent.css */ "./components/donate-supplies/DonateSuppliesContent.css");
/* harmony import */ var _DonateSuppliesContent_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DonateSuppliesContent_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/newtonhuynh/Desktop/Coding/ftwl2019/components/donate-supplies/SuppliesCollapsible.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SuppliesCollapsible(props) {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      DS = _useState[0],
      setDS = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client__WEBPACK_IMPORTED_MODULE_2__["default"].getEntries({
      'content_type': 'donateSupplyCategory'
    }).then(function (entries) {
      entries.items.reverse();
      setDS(entries.items);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, DS.map(function (q, i) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      className: "SupplyList",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_1___default.a, {
      open: "true",
      trigger: __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        pl: "15px",
        py: "3px",
        width: "800px",
        height: "25px",
        bg: i % 2 === 0 ? "#6C8C34" : "#2F4C19",
        color: "white",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }
      }, q.fields.category, __jsx("i", {
        "class": "down",
        style: {
          "float": "right",
          marginRight: "8px",
          marginTop: "3px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, " ")),
      triggerWhenOpen: __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        pl: "15px",
        py: "3px",
        width: "800px",
        height: "25px",
        bg: i % 2 === 0 ? "#6C8C34" : "#2F4C19",
        color: "white",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 29
        }
      }, q.fields.category, __jsx("i", {
        "class": "up",
        style: {
          "float": "right",
          marginRight: "8px",
          marginTop: "3px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      }, " ")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, q.fields.supplyList.split('\n').map(function (a) {
      return __jsx("div", {
        className: "Subcategory",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 41
        }
      }, a);
    }))));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SuppliesCollapsible);

/***/ })

})
//# sourceMappingURL=donate-supplies.js.dc58e684eba5edb6e5bf.hot-update.js.map