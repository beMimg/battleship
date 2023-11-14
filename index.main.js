"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ai-generated-8228367_1920.jpg */ "./src/assets/ai-generated-8228367_1920.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-font: 'Allerta Stencil', sans-serif;
}
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  font-size: 16px;
  background:
    linear-gradient(rgba(1, 22, 36, 0.2), rgba(0, 0, 0, 0.78)),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
  color: white;
  font-family: var(--main-font);
}
h1,
h2,
h3,
p,
ul,
li {
  padding: 0;
  margin: 0;
}
.landing-page {
  height: 100vh;
  gap: 20px;
  grid-template-rows: 15% 1fr;
  display: grid;
}
.hide {
  display: none;
}
.header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header .title {
  font-size: 8vh;
}
.get-player-info {
  margin: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
form label {
  font-size: 2rem;
  text-align: center;
}
form input {
  width: 35vw;
  min-width: 200px;
  padding: 10px;
  font-size: 2rem;
  border-radius: 5px;
  border: none;
  font-family: var(--main-font);
}
form button {
  width: 30vw;
  min-width: 200px;
  padding: 10px;
  font-size: 2rem;
  border: none;
  border-radius: 4px;
  font-family: var(--main-font);
  cursor: pointer;
}
.game-page {
  display: none;
}
.game-page.display {
  height: 100vh;
  display: grid;
  grid-template-rows: 16% 64% 20%;
}
.game-status {
  height: 5vh;
  width: 80vw;
  font-size: 2rem;
  border-radius: 5px;
  color: chartreuse;
  background-color: black;
  display: grid;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;
}
.game-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
}
.player-name {
  text-transform: uppercase;
}
.grid-container {
  grid-gap: 2px;
  display: grid;
  grid-template-columns: repeat(10, 30px);
}
.gridItem {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}
.gridItem:hover {
  background-color: rgb(135, 243, 238);
}
.empty {
  background-color: rgb(0, 105, 148);
}
.ship {
  background-color: rgb(77, 77, 77);
}
.shipHitted {
  background-color: rgb(255, 0, 0);
}
.missedShot {
  background-color: rgb(192, 192, 192);
}
.isSunked {
  background-color: black;
}
footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ships-container-default-x {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.ships-container.y {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.unplaced-ship {
  width: 30px;
  height: 30px;
  background-color: grey;
  border: 1px solid black;
  cursor: pointer;
}
.unplaced-ship.y {
  display: flex;
  flex-direction: column;
}
.rotate-btn {
  display: none;
  font-size: 2rem;
  bottom: 8%;
  left: 40%;
  position: absolute;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
}
.rotate-btn.display {
  display: block;
}

@media only screen and (max-width: 600px) {
  .game-container.display {
    display: flex;
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf;;kEAEoE;EACpE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;;;;;EAME,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');\n\n:root {\n  --main-font: 'Allerta Stencil', sans-serif;\n}\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  background:\n    linear-gradient(rgba(1, 22, 36, 0.2), rgba(0, 0, 0, 0.78)),\n    url(./assets/ai-generated-8228367_1920.jpg) center/cover no-repeat;\n  color: white;\n  font-family: var(--main-font);\n}\nh1,\nh2,\nh3,\np,\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n.landing-page {\n  height: 100vh;\n  gap: 20px;\n  grid-template-rows: 15% 1fr;\n  display: grid;\n}\n.hide {\n  display: none;\n}\n.header {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header .title {\n  font-size: 8vh;\n}\n.get-player-info {\n  margin: 20px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nform {\n  width: 100%;\n  gap: 50px;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  font-size: 2rem;\n  text-align: center;\n}\nform input {\n  width: 35vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border-radius: 5px;\n  border: none;\n  font-family: var(--main-font);\n}\nform button {\n  width: 30vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 4px;\n  font-family: var(--main-font);\n  cursor: pointer;\n}\n.game-page {\n  display: none;\n}\n.game-page.display {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 16% 64% 20%;\n}\n.game-status {\n  height: 5vh;\n  width: 80vw;\n  font-size: 2rem;\n  border-radius: 5px;\n  color: chartreuse;\n  background-color: black;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-items: center;\n}\n.game-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.player-name {\n  text-transform: uppercase;\n}\n.grid-container {\n  grid-gap: 2px;\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n}\n.gridItem {\n  width: 30px;\n  height: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.gridItem:hover {\n  background-color: rgb(135, 243, 238);\n}\n.empty {\n  background-color: rgb(0, 105, 148);\n}\n.ship {\n  background-color: rgb(77, 77, 77);\n}\n.shipHitted {\n  background-color: rgb(255, 0, 0);\n}\n.missedShot {\n  background-color: rgb(192, 192, 192);\n}\n.isSunked {\n  background-color: black;\n}\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ships-container-default-x {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.ships-container.y {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.unplaced-ship {\n  width: 30px;\n  height: 30px;\n  background-color: grey;\n  border: 1px solid black;\n  cursor: pointer;\n}\n.unplaced-ship.y {\n  display: flex;\n  flex-direction: column;\n}\n.rotate-btn {\n  display: none;\n  font-size: 2rem;\n  bottom: 8%;\n  left: 40%;\n  position: absolute;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n.rotate-btn.display {\n  display: block;\n}\n\n@media only screen and (max-width: 600px) {\n  .game-container.display {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable */




const initialize = (name) => {
  const playerContainer = document.querySelector('.player-container');
  const computerContainer = document.querySelector('.computer-container');

  // This function is called when the form is submitted, with name being inp.value
  const players = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 0) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('carrier');
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.displayUnplacedShip)(5, 'y');
    players.playerOne.game.placeShip([0, 0], 5, 'y');
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 5) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('battleship');
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.displayUnplacedShip)(3);
    // players.playerOne.game.placeShip([0, 1], 4, 'y');
  }
  // if (howManyShips(players.playerOne) === 9) {
  //   gameStage('cruiser');
  //   players.playerOne.game.placeShip([0, 6], 3, 'x');
  // }
  // if (howManyShips(players.playerOne) === 12) {
  //   gameStage('submarine');
  //   players.playerOne.game.placeShip([6, 2], 3, 'x');
  // }
  // if (howManyShips(players.playerOne) === 15) {
  //   gameStage('destroyer');
  //   players.playerOne.game.placeShip([8, 8], 2, 'x');
  // }
  // // players.playerOne.game.placeShip([3, 2], 3, 'x');
  // players.playerOne.game.placeShip([6, 2], 3, 'x');
  // players.playerOne.game.placeShip([8, 2], 1, 'x');

  // This will be random
  // players.computer.game.placeShip([0, 0], 5, 'y');
  // players.computer.game.placeShip([2, 5], 4, 'x');
  // players.computer.game.placeShip([3, 2], 3, 'x');
  // players.computer.game.placeShip([6, 2], 3, 'x');
  // players.computer.game.placeShip([8, 2], 1, 'x');

  // players.playerOneAttacks([0, 0]);
  // players.playerOneAttacks([1, 0]);
  // players.playerOneAttacks([2, 0]);
  // players.playerOneAttacks([3, 0]);
  // players.playerOneAttacks([4, 0]);
  // players.playerOneAttacks([3, 2]);

  (0,_grid__WEBPACK_IMPORTED_MODULE_1__["default"])(playerContainer, players.playerOne);
  (0,_grid__WEBPACK_IMPORTED_MODULE_1__["default"])(computerContainer, players.computer);
  console.log(players);
};

// playerContainer.addEventListener('click', (e) => {
//   const x = e.target.dataset.x;
//   const y = e.target.dataset.y;
//   const coords = [x, y];
//   return coords;
// });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */



const Gameboard = () => {
  // creates an array with coordenates
  const buildBoard = () => {
    const board = [];
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        board.push([x, y]);
      }
    }
    return board;
  };

  // creates an array for each coodenate from board array
  const boardStatus = (arr) => {
    const iStatus = [];
    for (let i = 0; i < arr.length; i += 1) {
      iStatus[i] = {
        isAttacked: null,
        ship: null,
      };
    }
    return iStatus;
  };

  const board = buildBoard();
  const iStatus = boardStatus(board);

  const isDifferentRow = (index, i) => {
    /* The end of row ends by 9 [9,19,29,39,49,59,69,79,89,99] 
    If index is smaller than 9(example), and index + i is bigger than 9 return true. placement not allowed */
    for (let j = 9; j < 100; j += 10) {
      if (index <= j && index + i > j) {
        return true;
      }
    }
    return false;
  };

  /* Called on placeShip(), returns true if its UNavailable 
  For horizontal if (index + i) has ship or if its different row return
  For vertical, indexes go 10 after 10, if (index + i * 10)has ship or
  if (index + i * 10) is bigger or equal than 100 return, because the biggest index is 99 */
  const isPlacementUnavailable = (index, length, direction) => {
    for (let i = 0; i < length; i += 1) {
      if (direction === 'x') {
        if (iStatus[index + i].ship !== null || isDifferentRow(index, i)) {
          return true;
        }
      } else if (direction === 'y') {
        if (index + i * 10 >= 100 || iStatus[index + i * 10].ship !== null) {
          return true;
        }
      }
    }
    return false;
  };

  const placeShip = (coords, length, direction) => {
    // First creates a ship with length passed as parameter;
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    // Find the index of the board array that matches the coords paramaters;
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );
    // If placement is not allowed return error;
    if (isPlacementUnavailable(index, length, direction)) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)('placement');
    }

    /* This loops will continue as long as the length of the ship is not reached.
    If direction is x (horizontal), the index is one after the one, so the index + i = newShip
    If direction is y (vertical), the index is 10 after 10, so the index is i * 10. */
    for (let i = 0; i < length; i += 1) {
      if (direction === 'x') {
        iStatus[index + i].ship = newShip;
      }
      if (direction === 'y') {
        iStatus[index + i * 10].ship = newShip;
      }
    }
  };

  const hasShip = (coords) => {
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );
    if (iStatus[index].ship != null) {
      return true;
    }
    return false;
  };

  /* iStatus object has a key isAttacked and an OBJECT(ship *when its occupied*), 
  so isAttacked needs to be set o true, and ship object needs to call it's own function
  called beenHit that increments the number of "hits"(a ship proprety) */
  const recieveAttack = (coords) => {
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );
    iStatus[index].isAttacked = true;
    if (iStatus[index].ship !== null) {
      iStatus[index].ship.beenHit();
      return true;
    }
    return false;
  };

  /* Filter the existing ships from iStatus array
  .every is called on the filtred array to check if all ships have been sunked
  If .every is true, return true otherwise false */
  const isAllSunk = () => {
    const ocuppiedWithShip = iStatus.filter((index) => index.ship != null);
    const allSunked = ocuppiedWithShip.every(
      (index) => index.ship.isItSunk === true,
    );
    if (allSunked) {
      return true;
    }
    return false;
  };

  return {
    board,
    iStatus,
    placeShip,
    hasShip,
    recieveAttack,
    isAllSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Loop from 0 to 99, each loop creates a div with dataset-i,
so that each element has identifier as index starting from 0 */
/* It takes two parameters, container(depending if its on playerContainer or computerContainer,
same goes for whichPlayer, each player has it's own array(iStatus). 
playerContainer needs to display playerOne and computerContainer computer.
*/
const displayGrid = (container, whichPlayer) => {
  for (let i = 0; i < 100; i += 1) {
    const gridItem = document.createElement('div');
    gridItem.classList = 'gridItem';
    gridItem.dataset.i = i;
    container.appendChild(gridItem);

    // Its empty and not hit
    if (
      whichPlayer.game.iStatus[i].isAttacked === null &&
      whichPlayer.game.iStatus[i].ship === null
    ) {
      gridItem.classList = 'gridItem empty';
    }

    /* Class list needs to be checked, because computer ships 
    musnt be displayed, so gridItem empty(blue) */
    if (
      container.classList.value.includes('player-container') &&
      whichPlayer.game.iStatus[i].isAttacked === null &&
      whichPlayer.game.iStatus[i].ship !== null
    ) {
      gridItem.classList = 'gridItem ship';
    } else if (
      container.classList.value.includes('computer-container') &&
      whichPlayer.game.iStatus[i].isAttacked === null &&
      whichPlayer.game.iStatus[i].ship !== null
    ) {
      gridItem.classList = 'gridItem empty';
    }

    // Its not empty and hit, but not sunk
    if (
      whichPlayer.game.iStatus[i].isAttacked !== null &&
      whichPlayer.game.iStatus[i].ship !== null &&
      whichPlayer.game.iStatus[i].ship.isItSunk === false
    ) {
      gridItem.classList = 'gridItem shipHitted';
    }

    // Its empty and hit
    if (
      whichPlayer.game.iStatus[i].isAttacked !== null &&
      whichPlayer.game.iStatus[i].ship === null
    ) {
      gridItem.classList = 'gridItem missedShot';
    }

    // Its sunk
    if (
      whichPlayer.game.iStatus[i].ship !== null &&
      whichPlayer.game.iStatus[i].ship.isItSunk === true
    ) {
      gridItem.classList = 'gridItem isSunked';
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGrid);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



(0,_utils__WEBPACK_IMPORTED_MODULE_1__.handleBtns)();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* eslint-disable import/no-cycle */


/* Name passed it as parameters sets the name of the playerOne.
Computer starts with is own computer name */
const Player = (player) => {
  const playerOne = {
    username: player,
    game: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    turn: true,
  };

  const computer = {
    username: 'Computer',
    game: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  };

  const boardCopy = [...playerOne.game.board];

  /* To not repeat attacks, randomIndex from boardCopy.length
  get the coords from that boardCopy random index and attack playerOne and
  delete that index from the boardCopy so coords dont repeat
  */
  const computerAttacks = () => {
    if (playerOne.turn === false) {
      const randomIndex = Math.floor(Math.random() * boardCopy.length);
      const coords = boardCopy[randomIndex];
      playerOne.game.recieveAttack(coords);
      boardCopy.splice(randomIndex, 1);
      playerOne.turn = true;
    }
  };

  /* With coords given as parameter and playerOne with turn:true(default),
  Computer recieves an attack with those coords, turn is set to false and
  computerAttacks() is called  */
  const playerOneAttacks = (coords) => {
    if (playerOne.turn === true) {
      computer.game.recieveAttack(coords);
      playerOne.turn = false;
      computerAttacks();
    } else if (playerOne.turn === false) {
      throw new Error('Not your turn to play');
    }
  };

  return { playerOne, computer, playerOneAttacks, computerAttacks };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createShip = (length) => ({
  length,
  hits: 0,
  isItSunk: false,
  beenHit() {
    this.hits += 1;
    this.isSunk();
  },
  isSunk() {
    if (this.hits >= this.length) {
      this.isItSunk = true;
    }
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayUnplacedShip: () => (/* binding */ displayUnplacedShip),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   gameStage: () => (/* binding */ gameStage),
/* harmony export */   handleBtns: () => (/* binding */ handleBtns),
/* harmony export */   howManyShips: () => (/* binding */ howManyShips)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */


const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  return errorMessage;
};

// DOM querying inside functions to not interfere with JEST
const handleBtns = () => {
  const form = document.querySelector('form');
  const soldierNameElement = document.getElementById('soldierName');
  const landingPage = document.querySelector('.landing-page');
  const gamePage = document.querySelector('.game-page');
  const playerName = document.querySelector('.player-name');
  const rotateBtn = document.querySelector('.rotate-btn');

  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
    rotateBtn.classList.add('display');
    playerName.textContent = soldierName;
    (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])(soldierName);
  });

  /* Will change the class name of ship-container-default-x and all of his childs class name from 'x' to 'y';
  In the if statement is checked the LAST element of the nodeList, only when the LAST
  element has changed class name means that ALL elements before have changed too. */
  rotateBtn.addEventListener('click', (e) => {
    const shipsContainer = e.currentTarget.previousElementSibling;
    // get all childs of shipsContainer
    const shipContainerChilds = shipsContainer.children;
    const lastIndex = shipContainerChilds.length - 1;
    for (let i = 0; i < shipContainerChilds.length; i += 1) {
      if (shipContainerChilds[lastIndex].classList.contains('x')) {
        shipsContainer.classList = 'ships-container y';
        shipContainerChilds[i].classList = 'unplaced-ship y';
      } else {
        shipsContainer.classList = 'ships-container-default-x';
        shipContainerChilds[i].classList = 'unplaced-ship x';
      }
    }
  });
};

// Will be called during game-loop to change the message(dom) while game goes on.
const gameStage = (message) => {
  const gameStatus = document.querySelector('.game-status');
  if (message === 'carrier') {
    gameStatus.textContent = 'Choose where to place your carrier...';
  } else if (message === 'battleship') {
    gameStatus.textContent = 'Choose where to place your battleship...';
  } else if (message === 'cruiser') {
    gameStatus.textContent = 'Choose where to place your cruiser...';
  } else if (message === 'submarine') {
    gameStatus.textContent = 'Choose where to place your submarine...';
  } else if (message === 'destroyer') {
    gameStatus.textContent = 'Choose where to place your destroyer...';
  }
};

/* This will return how many ships are in player gameboard.
It will be usefull to check if there's only 5 ship indexes, 
that means only the carrier was placed and we can continue to the next placement. */
const howManyShips = (player) => {
  const ocuppiedWithShip = player.game.iStatus.filter(
    (index) => index.ship != null,
  );
  const howManyShipIndexes = ocuppiedWithShip.length;
  return howManyShipIndexes;
};

/* Creates a ship thro dom manipulation, length as the parameter, so it creates different sized ships */
const displayUnplacedShip = (length) => {
  const shipsContainer = document.querySelector('.ships-container-default-x');
  /* This will make that everytime we call this function, the prior content inside this div will vanish.
   Avoiding ships overflow, because the last one was already placed. */
  shipsContainer.innerHTML = '';
  for (let i = 0; i < length; i += 1) {
    const unplacedShip = document.createElement('div');
    // The meaning of x will be that ship is displayed horizontally as default.
    unplacedShip.classList = `unplaced-ship x`;
    shipsContainer.appendChild(unplacedShip);
  }
};




/***/ }),

/***/ "./src/assets/ai-generated-8228367_1920.jpg":
/*!**************************************************!*\
  !*** ./src/assets/ai-generated-8228367_1920.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62b02bcc71564158a5bd.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFL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LElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9haS1nZW5lcmF0ZWQtODIyODM2N18xOTIwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWZvbnQ6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDEsIDIyLCAzNiwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjc4KSksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5oMSxcbmgyLFxuaDMsXG5wLFxudWwsXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5sYW5kaW5nLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBnYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDh2aDtcbn1cbi5nZXQtcGxheWVyLWluZm8ge1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5mb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuZm9ybSBidXR0b24ge1xuICB3aWR0aDogMzB2dztcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nYW1lLXBhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdhbWUtcGFnZS5kaXNwbGF5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNiUgNjQlIDIwJTtcbn1cbi5nYW1lLXN0YXR1cyB7XG4gIGhlaWdodDogNXZoO1xuICB3aWR0aDogODB2dztcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiBjaGFydHJldXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLmdhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLnBsYXllci1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGdyaWQtZ2FwOiAycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbn1cbi5ncmlkSXRlbSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ncmlkSXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDI0MywgMjM4KTtcbn1cbi5lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDUsIDE0OCk7XG59XG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcbn1cbi5zaGlwSGl0dGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG4ubWlzc2VkU2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbn1cbi5pc1N1bmtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2hpcHMtY29udGFpbmVyLWRlZmF1bHQteCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnNoaXBzLWNvbnRhaW5lci55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udW5wbGFjZWQtc2hpcCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udW5wbGFjZWQtc2hpcC55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3RhdGUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3R0b206IDglO1xuICBsZWZ0OiA0MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucm90YXRlLWJ0bi5kaXNwbGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmdhbWUtY29udGFpbmVyLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7O2tFQUVvRTtFQUNwRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7Ozs7OztFQU1FLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tbWFpbi1mb250OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDEsIDIyLCAzNiwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjc4KSksXFxuICAgIHVybCguL2Fzc2V0cy9haS1nZW5lcmF0ZWQtODIyODM2N18xOTIwLmpwZykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5wLFxcbnVsLFxcbmxpIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi5sYW5kaW5nLXBhZ2Uge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmhlYWRlciAudGl0bGUge1xcbiAgZm9udC1zaXplOiA4dmg7XFxufVxcbi5nZXQtcGxheWVyLWluZm8ge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ2FtZS1wYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5nYW1lLXBhZ2UuZGlzcGxheSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTYlIDY0JSAyMCU7XFxufVxcbi5nYW1lLXN0YXR1cyB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGNoYXJ0cmV1c2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZ3JpZC1nYXA6IDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcbi5ncmlkSXRlbSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZEl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMjQzLCAyMzgpO1xcbn1cXG4uZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNSwgMTQ4KTtcXG59XFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbn1cXG4uc2hpcEhpdHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLm1pc3NlZFNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG4uaXNTdW5rZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc2hpcHMtY29udGFpbmVyLWRlZmF1bHQteCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnNoaXBzLWNvbnRhaW5lci55IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udW5wbGFjZWQtc2hpcCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnVucGxhY2VkLXNoaXAueSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJvdGF0ZS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvdHRvbTogOCU7XFxuICBsZWZ0OiA0MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnJvdGF0ZS1idG4uZGlzcGxheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdhbWUtY29udGFpbmVyLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBkaXNwbGF5R3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IHsgZ2FtZVN0YWdlLCBob3dNYW55U2hpcHMsIGRpc3BsYXlVbnBsYWNlZFNoaXAgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgaW5pdGlhbGl6ZSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWNvbnRhaW5lcicpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkLCB3aXRoIG5hbWUgYmVpbmcgaW5wLnZhbHVlXG4gIGNvbnN0IHBsYXllcnMgPSBQbGF5ZXIobmFtZSk7XG5cbiAgaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDApIHtcbiAgICBnYW1lU3RhZ2UoJ2NhcnJpZXInKTtcbiAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDUsICd5Jyk7XG4gICAgcGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5wbGFjZVNoaXAoWzAsIDBdLCA1LCAneScpO1xuICB9XG4gIGlmIChob3dNYW55U2hpcHMocGxheWVycy5wbGF5ZXJPbmUpID09PSA1KSB7XG4gICAgZ2FtZVN0YWdlKCdiYXR0bGVzaGlwJyk7XG4gICAgZGlzcGxheVVucGxhY2VkU2hpcCgzKTtcbiAgICAvLyBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbMCwgMV0sIDQsICd5Jyk7XG4gIH1cbiAgLy8gaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDkpIHtcbiAgLy8gICBnYW1lU3RhZ2UoJ2NydWlzZXInKTtcbiAgLy8gICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbMCwgNl0sIDMsICd4Jyk7XG4gIC8vIH1cbiAgLy8gaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDEyKSB7XG4gIC8vICAgZ2FtZVN0YWdlKCdzdWJtYXJpbmUnKTtcbiAgLy8gICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbNiwgMl0sIDMsICd4Jyk7XG4gIC8vIH1cbiAgLy8gaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDE1KSB7XG4gIC8vICAgZ2FtZVN0YWdlKCdkZXN0cm95ZXInKTtcbiAgLy8gICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbOCwgOF0sIDIsICd4Jyk7XG4gIC8vIH1cbiAgLy8gLy8gcGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5wbGFjZVNoaXAoWzMsIDJdLCAzLCAneCcpO1xuICAvLyBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbNiwgMl0sIDMsICd4Jyk7XG4gIC8vIHBsYXllcnMucGxheWVyT25lLmdhbWUucGxhY2VTaGlwKFs4LCAyXSwgMSwgJ3gnKTtcblxuICAvLyBUaGlzIHdpbGwgYmUgcmFuZG9tXG4gIC8vIHBsYXllcnMuY29tcHV0ZXIuZ2FtZS5wbGFjZVNoaXAoWzAsIDBdLCA1LCAneScpO1xuICAvLyBwbGF5ZXJzLmNvbXB1dGVyLmdhbWUucGxhY2VTaGlwKFsyLCA1XSwgNCwgJ3gnKTtcbiAgLy8gcGxheWVycy5jb21wdXRlci5nYW1lLnBsYWNlU2hpcChbMywgMl0sIDMsICd4Jyk7XG4gIC8vIHBsYXllcnMuY29tcHV0ZXIuZ2FtZS5wbGFjZVNoaXAoWzYsIDJdLCAzLCAneCcpO1xuICAvLyBwbGF5ZXJzLmNvbXB1dGVyLmdhbWUucGxhY2VTaGlwKFs4LCAyXSwgMSwgJ3gnKTtcblxuICAvLyBwbGF5ZXJzLnBsYXllck9uZUF0dGFja3MoWzAsIDBdKTtcbiAgLy8gcGxheWVycy5wbGF5ZXJPbmVBdHRhY2tzKFsxLCAwXSk7XG4gIC8vIHBsYXllcnMucGxheWVyT25lQXR0YWNrcyhbMiwgMF0pO1xuICAvLyBwbGF5ZXJzLnBsYXllck9uZUF0dGFja3MoWzMsIDBdKTtcbiAgLy8gcGxheWVycy5wbGF5ZXJPbmVBdHRhY2tzKFs0LCAwXSk7XG4gIC8vIHBsYXllcnMucGxheWVyT25lQXR0YWNrcyhbMywgMl0pO1xuXG4gIGRpc3BsYXlHcmlkKHBsYXllckNvbnRhaW5lciwgcGxheWVycy5wbGF5ZXJPbmUpO1xuICBkaXNwbGF5R3JpZChjb21wdXRlckNvbnRhaW5lciwgcGxheWVycy5jb21wdXRlcik7XG4gIGNvbnNvbGUubG9nKHBsYXllcnMpO1xufTtcblxuLy8gcGxheWVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbi8vICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcbi8vICAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuLy8gICByZXR1cm4gY29vcmRzO1xuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBjcmVhdGVzIGFuIGFycmF5IHdpdGggY29vcmRlbmF0ZXNcbiAgY29uc3QgYnVpbGRCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgIGJvYXJkLnB1c2goW3gsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIC8vIGNyZWF0ZXMgYW4gYXJyYXkgZm9yIGVhY2ggY29vZGVuYXRlIGZyb20gYm9hcmQgYXJyYXlcbiAgY29uc3QgYm9hcmRTdGF0dXMgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgaVN0YXR1cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpU3RhdHVzW2ldID0ge1xuICAgICAgICBpc0F0dGFja2VkOiBudWxsLFxuICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGlTdGF0dXM7XG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBidWlsZEJvYXJkKCk7XG4gIGNvbnN0IGlTdGF0dXMgPSBib2FyZFN0YXR1cyhib2FyZCk7XG5cbiAgY29uc3QgaXNEaWZmZXJlbnRSb3cgPSAoaW5kZXgsIGkpID0+IHtcbiAgICAvKiBUaGUgZW5kIG9mIHJvdyBlbmRzIGJ5IDkgWzksMTksMjksMzksNDksNTksNjksNzksODksOTldIFxuICAgIElmIGluZGV4IGlzIHNtYWxsZXIgdGhhbiA5KGV4YW1wbGUpLCBhbmQgaW5kZXggKyBpIGlzIGJpZ2dlciB0aGFuIDkgcmV0dXJuIHRydWUuIHBsYWNlbWVudCBub3QgYWxsb3dlZCAqL1xuICAgIGZvciAobGV0IGogPSA5OyBqIDwgMTAwOyBqICs9IDEwKSB7XG4gICAgICBpZiAoaW5kZXggPD0gaiAmJiBpbmRleCArIGkgPiBqKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyogQ2FsbGVkIG9uIHBsYWNlU2hpcCgpLCByZXR1cm5zIHRydWUgaWYgaXRzIFVOYXZhaWxhYmxlIFxuICBGb3IgaG9yaXpvbnRhbCBpZiAoaW5kZXggKyBpKSBoYXMgc2hpcCBvciBpZiBpdHMgZGlmZmVyZW50IHJvdyByZXR1cm5cbiAgRm9yIHZlcnRpY2FsLCBpbmRleGVzIGdvIDEwIGFmdGVyIDEwLCBpZiAoaW5kZXggKyBpICogMTApaGFzIHNoaXAgb3JcbiAgaWYgKGluZGV4ICsgaSAqIDEwKSBpcyBiaWdnZXIgb3IgZXF1YWwgdGhhbiAxMDAgcmV0dXJuLCBiZWNhdXNlIHRoZSBiaWdnZXN0IGluZGV4IGlzIDk5ICovXG4gIGNvbnN0IGlzUGxhY2VtZW50VW5hdmFpbGFibGUgPSAoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGlmIChpU3RhdHVzW2luZGV4ICsgaV0uc2hpcCAhPT0gbnVsbCB8fCBpc0RpZmZlcmVudFJvdyhpbmRleCwgaSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgICBpZiAoaW5kZXggKyBpICogMTAgPj0gMTAwIHx8IGlTdGF0dXNbaW5kZXggKyBpICogMTBdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkcywgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICAvLyBGaXJzdCBjcmVhdGVzIGEgc2hpcCB3aXRoIGxlbmd0aCBwYXNzZWQgYXMgcGFyYW1ldGVyO1xuICAgIGNvbnN0IG5ld1NoaXAgPSBjcmVhdGVTaGlwKGxlbmd0aCk7XG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGJvYXJkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgY29vcmRzIHBhcmFtYXRlcnM7XG4gICAgY29uc3QgaW5kZXggPSBib2FyZC5maW5kSW5kZXgoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudFswXSA9PT0gY29vcmRzWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3Jkc1sxXSxcbiAgICApO1xuICAgIC8vIElmIHBsYWNlbWVudCBpcyBub3QgYWxsb3dlZCByZXR1cm4gZXJyb3I7XG4gICAgaWYgKGlzUGxhY2VtZW50VW5hdmFpbGFibGUoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdwbGFjZW1lbnQnKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGxvb3BzIHdpbGwgY29udGludWUgYXMgbG9uZyBhcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIGlzIG5vdCByZWFjaGVkLlxuICAgIElmIGRpcmVjdGlvbiBpcyB4IChob3Jpem9udGFsKSwgdGhlIGluZGV4IGlzIG9uZSBhZnRlciB0aGUgb25lLCBzbyB0aGUgaW5kZXggKyBpID0gbmV3U2hpcFxuICAgIElmIGRpcmVjdGlvbiBpcyB5ICh2ZXJ0aWNhbCksIHRoZSBpbmRleCBpcyAxMCBhZnRlciAxMCwgc28gdGhlIGluZGV4IGlzIGkgKiAxMC4gKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgaVN0YXR1c1tpbmRleCArIGldLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgIGlTdGF0dXNbaW5kZXggKyBpICogMTBdLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNTaGlwID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgKTtcbiAgICBpZiAoaVN0YXR1c1tpbmRleF0uc2hpcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIGlTdGF0dXMgb2JqZWN0IGhhcyBhIGtleSBpc0F0dGFja2VkIGFuZCBhbiBPQkpFQ1Qoc2hpcCAqd2hlbiBpdHMgb2NjdXBpZWQqKSwgXG4gIHNvIGlzQXR0YWNrZWQgbmVlZHMgdG8gYmUgc2V0IG8gdHJ1ZSwgYW5kIHNoaXAgb2JqZWN0IG5lZWRzIHRvIGNhbGwgaXQncyBvd24gZnVuY3Rpb25cbiAgY2FsbGVkIGJlZW5IaXQgdGhhdCBpbmNyZW1lbnRzIHRoZSBudW1iZXIgb2YgXCJoaXRzXCIoYSBzaGlwIHByb3ByZXR5KSAqL1xuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgKTtcbiAgICBpU3RhdHVzW2luZGV4XS5pc0F0dGFja2VkID0gdHJ1ZTtcbiAgICBpZiAoaVN0YXR1c1tpbmRleF0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgaVN0YXR1c1tpbmRleF0uc2hpcC5iZWVuSGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIEZpbHRlciB0aGUgZXhpc3Rpbmcgc2hpcHMgZnJvbSBpU3RhdHVzIGFycmF5XG4gIC5ldmVyeSBpcyBjYWxsZWQgb24gdGhlIGZpbHRyZWQgYXJyYXkgdG8gY2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rZWRcbiAgSWYgLmV2ZXJ5IGlzIHRydWUsIHJldHVybiB0cnVlIG90aGVyd2lzZSBmYWxzZSAqL1xuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2N1cHBpZWRXaXRoU2hpcCA9IGlTdGF0dXMuZmlsdGVyKChpbmRleCkgPT4gaW5kZXguc2hpcCAhPSBudWxsKTtcbiAgICBjb25zdCBhbGxTdW5rZWQgPSBvY3VwcGllZFdpdGhTaGlwLmV2ZXJ5KFxuICAgICAgKGluZGV4KSA9PiBpbmRleC5zaGlwLmlzSXRTdW5rID09PSB0cnVlLFxuICAgICk7XG4gICAgaWYgKGFsbFN1bmtlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGlTdGF0dXMsXG4gICAgcGxhY2VTaGlwLFxuICAgIGhhc1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIvKiBMb29wIGZyb20gMCB0byA5OSwgZWFjaCBsb29wIGNyZWF0ZXMgYSBkaXYgd2l0aCBkYXRhc2V0LWksXG5zbyB0aGF0IGVhY2ggZWxlbWVudCBoYXMgaWRlbnRpZmllciBhcyBpbmRleCBzdGFydGluZyBmcm9tIDAgKi9cbi8qIEl0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBjb250YWluZXIoZGVwZW5kaW5nIGlmIGl0cyBvbiBwbGF5ZXJDb250YWluZXIgb3IgY29tcHV0ZXJDb250YWluZXIsXG5zYW1lIGdvZXMgZm9yIHdoaWNoUGxheWVyLCBlYWNoIHBsYXllciBoYXMgaXQncyBvd24gYXJyYXkoaVN0YXR1cykuIFxucGxheWVyQ29udGFpbmVyIG5lZWRzIHRvIGRpc3BsYXkgcGxheWVyT25lIGFuZCBjb21wdXRlckNvbnRhaW5lciBjb21wdXRlci5cbiovXG5jb25zdCBkaXNwbGF5R3JpZCA9IChjb250YWluZXIsIHdoaWNoUGxheWVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSc7XG4gICAgZ3JpZEl0ZW0uZGF0YXNldC5pID0gaTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuXG4gICAgLy8gSXRzIGVtcHR5IGFuZCBub3QgaGl0XG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgPT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwID09PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gZW1wdHknO1xuICAgIH1cblxuICAgIC8qIENsYXNzIGxpc3QgbmVlZHMgdG8gYmUgY2hlY2tlZCwgYmVjYXVzZSBjb21wdXRlciBzaGlwcyBcbiAgICBtdXNudCBiZSBkaXNwbGF5ZWQsIHNvIGdyaWRJdGVtIGVtcHR5KGJsdWUpICovXG4gICAgaWYgKFxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygncGxheWVyLWNvbnRhaW5lcicpICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBzaGlwJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY29tcHV0ZXItY29udGFpbmVyJykgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkID09PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIGVtcHR5JztcbiAgICB9XG5cbiAgICAvLyBJdHMgbm90IGVtcHR5IGFuZCBoaXQsIGJ1dCBub3Qgc3Vua1xuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAuaXNJdFN1bmsgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gc2hpcEhpdHRlZCc7XG4gICAgfVxuXG4gICAgLy8gSXRzIGVtcHR5IGFuZCBoaXRcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgPT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBtaXNzZWRTaG90JztcbiAgICB9XG5cbiAgICAvLyBJdHMgc3Vua1xuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcC5pc0l0U3VuayA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIGlzU3Vua2VkJztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHcmlkO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVCdG5zIH0gZnJvbSAnLi91dGlscyc7XG5cbmhhbmRsZUJ0bnMoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbi8qIE5hbWUgcGFzc2VkIGl0IGFzIHBhcmFtZXRlcnMgc2V0cyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyT25lLlxuQ29tcHV0ZXIgc3RhcnRzIHdpdGggaXMgb3duIGNvbXB1dGVyIG5hbWUgKi9cbmNvbnN0IFBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgcGxheWVyT25lID0ge1xuICAgIHVzZXJuYW1lOiBwbGF5ZXIsXG4gICAgZ2FtZTogR2FtZWJvYXJkKCksXG4gICAgdHVybjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBjb21wdXRlciA9IHtcbiAgICB1c2VybmFtZTogJ0NvbXB1dGVyJyxcbiAgICBnYW1lOiBHYW1lYm9hcmQoKSxcbiAgfTtcblxuICBjb25zdCBib2FyZENvcHkgPSBbLi4ucGxheWVyT25lLmdhbWUuYm9hcmRdO1xuXG4gIC8qIFRvIG5vdCByZXBlYXQgYXR0YWNrcywgcmFuZG9tSW5kZXggZnJvbSBib2FyZENvcHkubGVuZ3RoXG4gIGdldCB0aGUgY29vcmRzIGZyb20gdGhhdCBib2FyZENvcHkgcmFuZG9tIGluZGV4IGFuZCBhdHRhY2sgcGxheWVyT25lIGFuZFxuICBkZWxldGUgdGhhdCBpbmRleCBmcm9tIHRoZSBib2FyZENvcHkgc28gY29vcmRzIGRvbnQgcmVwZWF0XG4gICovXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrcyA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyT25lLnR1cm4gPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkQ29weS5sZW5ndGgpO1xuICAgICAgY29uc3QgY29vcmRzID0gYm9hcmRDb3B5W3JhbmRvbUluZGV4XTtcbiAgICAgIHBsYXllck9uZS5nYW1lLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICAgIGJvYXJkQ29weS5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuICAgICAgcGxheWVyT25lLnR1cm4gPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKiBXaXRoIGNvb3JkcyBnaXZlbiBhcyBwYXJhbWV0ZXIgYW5kIHBsYXllck9uZSB3aXRoIHR1cm46dHJ1ZShkZWZhdWx0KSxcbiAgQ29tcHV0ZXIgcmVjaWV2ZXMgYW4gYXR0YWNrIHdpdGggdGhvc2UgY29vcmRzLCB0dXJuIGlzIHNldCB0byBmYWxzZSBhbmRcbiAgY29tcHV0ZXJBdHRhY2tzKCkgaXMgY2FsbGVkICAqL1xuICBjb25zdCBwbGF5ZXJPbmVBdHRhY2tzID0gKGNvb3JkcykgPT4ge1xuICAgIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gdHJ1ZSkge1xuICAgICAgY29tcHV0ZXIuZ2FtZS5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICBwbGF5ZXJPbmUudHVybiA9IGZhbHNlO1xuICAgICAgY29tcHV0ZXJBdHRhY2tzKCk7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHlvdXIgdHVybiB0byBwbGF5Jyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHBsYXllck9uZSwgY29tcHV0ZXIsIHBsYXllck9uZUF0dGFja3MsIGNvbXB1dGVyQXR0YWNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0czogMCxcbiAgaXNJdFN1bms6IGZhbHNlLFxuICBiZWVuSGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzSXRTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZXJyb3IgPSAodHlwZSkgPT4ge1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gIGlmICh0eXBlID09PSAncGxhY2VtZW50Jykge1xuICAgIGVycm9yTWVzc2FnZSArPSAnVGhpcyBwbGFjZW1lbnQgaXMgbm90IGFsbG93ZWQuJztcbiAgfVxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufTtcblxuLy8gRE9NIHF1ZXJ5aW5nIGluc2lkZSBmdW5jdGlvbnMgdG8gbm90IGludGVyZmVyZSB3aXRoIEpFU1RcbmNvbnN0IGhhbmRsZUJ0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHNvbGRpZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2xkaWVyTmFtZScpO1xuICBjb25zdCBsYW5kaW5nUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXBhZ2UnKTtcbiAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wYWdlJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW5hbWUnKTtcbiAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcblxuICAvKiBUaGlzIGV2ZW50IGxpc3RlbmVyIHdpbGwgc3RhcnQgdGhlIGdhbWUgYnkgY2FsbGluZyBpbml0aWFsaXplIGZ1bmN0aW9uIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCB0ZXh0IGFzIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIsXG4gICBsYW5kaW5nIHBhZ2Ugd2lsbCBoaWRlLCBnYW1lIHBhZ2Ugd2lsbCBkaXNwbGF5IGFuZCBwbGF5ZXItbmFtZSBhcyBhIG5ldyBuYW1lICovXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc29sZGllck5hbWUgPSBzb2xkaWVyTmFtZUVsZW1lbnQudmFsdWU7XG4gICAgbGFuZGluZ1BhZ2UuY2xhc3NMaXN0ID0gJ2xhbmRpbmctcGFnZSBoaWRlJztcbiAgICBnYW1lUGFnZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgcm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gc29sZGllck5hbWU7XG4gICAgaW5pdGlhbGl6ZShzb2xkaWVyTmFtZSk7XG4gIH0pO1xuXG4gIC8qIFdpbGwgY2hhbmdlIHRoZSBjbGFzcyBuYW1lIG9mIHNoaXAtY29udGFpbmVyLWRlZmF1bHQteCBhbmQgYWxsIG9mIGhpcyBjaGlsZHMgY2xhc3MgbmFtZSBmcm9tICd4JyB0byAneSc7XG4gIEluIHRoZSBpZiBzdGF0ZW1lbnQgaXMgY2hlY2tlZCB0aGUgTEFTVCBlbGVtZW50IG9mIHRoZSBub2RlTGlzdCwgb25seSB3aGVuIHRoZSBMQVNUXG4gIGVsZW1lbnQgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZSBtZWFucyB0aGF0IEFMTCBlbGVtZW50cyBiZWZvcmUgaGF2ZSBjaGFuZ2VkIHRvby4gKi9cbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIC8vIGdldCBhbGwgY2hpbGRzIG9mIHNoaXBzQ29udGFpbmVyXG4gICAgY29uc3Qgc2hpcENvbnRhaW5lckNoaWxkcyA9IHNoaXBzQ29udGFpbmVyLmNoaWxkcmVuO1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHNoaXBDb250YWluZXJDaGlsZHMubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb250YWluZXJDaGlsZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwQ29udGFpbmVyQ2hpbGRzW2xhc3RJbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd4JykpIHtcbiAgICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NoaXBzLWNvbnRhaW5lciB5JztcbiAgICAgICAgc2hpcENvbnRhaW5lckNoaWxkc1tpXS5jbGFzc0xpc3QgPSAndW5wbGFjZWQtc2hpcCB5JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdzaGlwcy1jb250YWluZXItZGVmYXVsdC14JztcbiAgICAgICAgc2hpcENvbnRhaW5lckNoaWxkc1tpXS5jbGFzc0xpc3QgPSAndW5wbGFjZWQtc2hpcCB4JztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLy8gV2lsbCBiZSBjYWxsZWQgZHVyaW5nIGdhbWUtbG9vcCB0byBjaGFuZ2UgdGhlIG1lc3NhZ2UoZG9tKSB3aGlsZSBnYW1lIGdvZXMgb24uXG5jb25zdCBnYW1lU3RhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBnYW1lU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhdHVzJyk7XG4gIGlmIChtZXNzYWdlID09PSAnY2FycmllcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGNhcnJpZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgYmF0dGxlc2hpcC4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBjcnVpc2VyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnc3VibWFyaW5lJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgc3VibWFyaW5lLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnZGVzdHJveWVyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgZGVzdHJveWVyLi4uJztcbiAgfVxufTtcblxuLyogVGhpcyB3aWxsIHJldHVybiBob3cgbWFueSBzaGlwcyBhcmUgaW4gcGxheWVyIGdhbWVib2FyZC5cbkl0IHdpbGwgYmUgdXNlZnVsbCB0byBjaGVjayBpZiB0aGVyZSdzIG9ubHkgNSBzaGlwIGluZGV4ZXMsIFxudGhhdCBtZWFucyBvbmx5IHRoZSBjYXJyaWVyIHdhcyBwbGFjZWQgYW5kIHdlIGNhbiBjb250aW51ZSB0byB0aGUgbmV4dCBwbGFjZW1lbnQuICovXG5jb25zdCBob3dNYW55U2hpcHMgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IG9jdXBwaWVkV2l0aFNoaXAgPSBwbGF5ZXIuZ2FtZS5pU3RhdHVzLmZpbHRlcihcbiAgICAoaW5kZXgpID0+IGluZGV4LnNoaXAgIT0gbnVsbCxcbiAgKTtcbiAgY29uc3QgaG93TWFueVNoaXBJbmRleGVzID0gb2N1cHBpZWRXaXRoU2hpcC5sZW5ndGg7XG4gIHJldHVybiBob3dNYW55U2hpcEluZGV4ZXM7XG59O1xuXG4vKiBDcmVhdGVzIGEgc2hpcCB0aHJvIGRvbSBtYW5pcHVsYXRpb24sIGxlbmd0aCBhcyB0aGUgcGFyYW1ldGVyLCBzbyBpdCBjcmVhdGVzIGRpZmZlcmVudCBzaXplZCBzaGlwcyAqL1xuY29uc3QgZGlzcGxheVVucGxhY2VkU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtY29udGFpbmVyLWRlZmF1bHQteCcpO1xuICAvKiBUaGlzIHdpbGwgbWFrZSB0aGF0IGV2ZXJ5dGltZSB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24sIHRoZSBwcmlvciBjb250ZW50IGluc2lkZSB0aGlzIGRpdiB3aWxsIHZhbmlzaC5cbiAgIEF2b2lkaW5nIHNoaXBzIG92ZXJmbG93LCBiZWNhdXNlIHRoZSBsYXN0IG9uZSB3YXMgYWxyZWFkeSBwbGFjZWQuICovXG4gIHNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdW5wbGFjZWRTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gVGhlIG1lYW5pbmcgb2YgeCB3aWxsIGJlIHRoYXQgc2hpcCBpcyBkaXNwbGF5ZWQgaG9yaXpvbnRhbGx5IGFzIGRlZmF1bHQuXG4gICAgdW5wbGFjZWRTaGlwLmNsYXNzTGlzdCA9IGB1bnBsYWNlZC1zaGlwIHhgO1xuICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHVucGxhY2VkU2hpcCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGVycm9yLCBoYW5kbGVCdG5zLCBnYW1lU3RhZ2UsIGhvd01hbnlTaGlwcywgZGlzcGxheVVucGxhY2VkU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9