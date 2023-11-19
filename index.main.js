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
.ships-container.x {
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
.game-over {
  display: none;
  visibility: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
}
.game-over.display {
  display: flex;
  visibility: visible;
}
.game-over-container {
  width: 30vw;
  height: 60vh;
  border-radius: 20px;
  border: 3px solid black;
  background-color: rgb(9, 39, 104);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.winner {
  font-size: 5rem;
}
.restart-game {
  width: 15vw;
  height: 15vh;
  font-size: 3rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .game-container.display {
    display: flex;
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf;;kEAEoE;EACpE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;;;;;EAME,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');\n\n:root {\n  --main-font: 'Allerta Stencil', sans-serif;\n}\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  background:\n    linear-gradient(rgba(1, 22, 36, 0.2), rgba(0, 0, 0, 0.78)),\n    url(./assets/ai-generated-8228367_1920.jpg) center/cover no-repeat;\n  color: white;\n  font-family: var(--main-font);\n}\nh1,\nh2,\nh3,\np,\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n.landing-page {\n  height: 100vh;\n  gap: 20px;\n  grid-template-rows: 15% 1fr;\n  display: grid;\n}\n.hide {\n  display: none;\n}\n.header {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header .title {\n  font-size: 8vh;\n}\n.get-player-info {\n  margin: 20px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nform {\n  width: 100%;\n  gap: 50px;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  font-size: 2rem;\n  text-align: center;\n}\nform input {\n  width: 35vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border-radius: 5px;\n  border: none;\n  font-family: var(--main-font);\n}\nform button {\n  width: 30vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 4px;\n  font-family: var(--main-font);\n  cursor: pointer;\n}\n.game-page {\n  display: none;\n}\n.game-page.display {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 16% 64% 20%;\n}\n.game-status {\n  height: 5vh;\n  width: 80vw;\n  font-size: 2rem;\n  border-radius: 5px;\n  color: chartreuse;\n  background-color: black;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-items: center;\n}\n.game-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.player-name {\n  text-transform: uppercase;\n}\n.grid-container {\n  grid-gap: 2px;\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n}\n.gridItem {\n  width: 30px;\n  height: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.gridItem:hover {\n  background-color: rgb(135, 243, 238);\n}\n.empty {\n  background-color: rgb(0, 105, 148);\n}\n.ship {\n  background-color: rgb(77, 77, 77);\n}\n.shipHitted {\n  background-color: rgb(255, 0, 0);\n}\n.missedShot {\n  background-color: rgb(192, 192, 192);\n}\n.isSunked {\n  background-color: black;\n}\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ships-container.x {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.ships-container.y {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.unplaced-ship {\n  width: 30px;\n  height: 30px;\n  background-color: grey;\n  border: 1px solid black;\n  cursor: pointer;\n}\n.rotate-btn {\n  display: none;\n  font-size: 2rem;\n  bottom: 8%;\n  left: 40%;\n  position: absolute;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n.rotate-btn.display {\n  display: block;\n}\n.game-over {\n  display: none;\n  visibility: hidden;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center;\n}\n.game-over.display {\n  display: flex;\n  visibility: visible;\n}\n.game-over-container {\n  width: 30vw;\n  height: 60vh;\n  border-radius: 20px;\n  border: 3px solid black;\n  background-color: rgb(9, 39, 104);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.winner {\n  font-size: 5rem;\n}\n.restart-game {\n  width: 15vw;\n  height: 15vh;\n  font-size: 3rem;\n  border-radius: 10px;\n  font-weight: bold;\n  cursor: pointer;\n}\n@media only screen and (max-width: 600px) {\n  .game-container.display {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   lobbyPlayers: () => (/* binding */ lobbyPlayers),
/* harmony export */   setHumanName: () => (/* binding */ setHumanName)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable */



// Function created to assign a value to an exported variable. form.addEvent
let lobbyPlayers;
function setHumanName(name) {
  lobbyPlayers = name;
}

const game = (stage) => {
  console.log(lobbyPlayers);

  if (stage === 'stage1') {
    const playerContainer = document.querySelector('.player-container');
    const computerContainer = document.querySelector('.computer-container');
    (0,_grid__WEBPACK_IMPORTED_MODULE_0__["default"])(playerContainer, lobbyPlayers.playerOne);
    (0,_grid__WEBPACK_IMPORTED_MODULE_0__["default"])(computerContainer, lobbyPlayers.computer);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('carrier');
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.displayUnplacedShip)(5);
    while (lobbyPlayers.computer.game.howManyShips() !== 17) {
      const randomIndex = Math.floor(Math.random() * 100);
      const diretion = ['y', 'x'];
      const randomDiretion = Math.floor(Math.random() * 2);
      console.log(diretion[randomDiretion]);

      lobbyPlayers.computer.game.placeShip(
        randomIndex,
        diretion[randomDiretion],
      );
      console.log(lobbyPlayers.computer.game.howManyShips());
    }
  }

  if (stage === 'stage2') {
    const playerContainer = document.querySelector('.player-container');
    (0,_grid__WEBPACK_IMPORTED_MODULE_0__["default"])(playerContainer, lobbyPlayers.playerOne);
    if (lobbyPlayers.playerOne.game.howManyShips() === 5) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('battleship');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.displayUnplacedShip)(4);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 9) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('cruiser');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.displayUnplacedShip)(3);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 12) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('submarine');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.displayUnplacedShip)(3);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 15) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('destroyer');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.displayUnplacedShip)(2);
    } else if (lobbyPlayers.playerOne.game.howManyShips() === 17) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('allShipsPlaced');
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.displayUnplacedShip)('completed');
      setTimeout(() => {
        game('stage3');
      }, 2000);
    }
  }

  if (stage === 'stage3') {
    const computerContainer = document.querySelector('.computer-container');
    const playerContainer = document.querySelector('.player-container');
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('attack');
    computerContainer.addEventListener('click', (e) => {
      e.preventDefault();

      // Get the e.targetId and parseInt to num
      const targetId = parseInt(e.target.dataset.i);

      // If the coords of the attack is already attacked, return.
      if (lobbyPlayers.computer.game.iStatus[targetId].isAttacked === null) {
        lobbyPlayers.playerOneAttacks(targetId);
        (0,_grid__WEBPACK_IMPORTED_MODULE_0__["default"])(computerContainer, lobbyPlayers.computer);
      } else {
        return;
      }

      /* If the computer has a ship on index(targetId),
      set message 'You hit a ship!', two seconds after(If computer still has ships),
      message that computer will attack, and two seconds after that message will display that random attack */
      if (lobbyPlayers.computer.game.hasShip(targetId)) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('attackedShip');
        if (
          lobbyPlayers.computer.game.iStatus[targetId].ship.isItSunk === true
        ) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('shipDown');
        }

        if (lobbyPlayers.computer.game.isAllSunk() === false) {
          setTimeout(() => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('computerAttacks');
          }, 2000);
          setTimeout(() => {
            lobbyPlayers.computerAttacks();
            (0,_grid__WEBPACK_IMPORTED_MODULE_0__["default"])(playerContainer, lobbyPlayers.playerOne);
          }, 4000);
        }

        /* Else => the computer doesn't have a ship on index(targetId),
        set message that player missed the computers ship, after two seconds, 
        will do the same as when computer has ship */
      } else {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('missedShip');
        if (lobbyPlayers.computer.game.isAllSunk() === false) {
          setTimeout(() => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('computerAttacks');
          }, 2000);
          setTimeout(() => {
            lobbyPlayers.computerAttacks();
            (0,_grid__WEBPACK_IMPORTED_MODULE_0__["default"])(playerContainer, lobbyPlayers.playerOne);
          }, 4000);
        }
      }

      // If all sunk, message that game is over and call stage='gameOver'
      if (
        lobbyPlayers.playerOne.game.isAllSunk() ||
        lobbyPlayers.computer.game.isAllSunk()
      ) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('gameOver');
        game('gameOver');
      }
    });
  }

  if (stage === 'gameOver') {
    const gameOverHTML = document.querySelector('.game-over');
    const winner = document.querySelector('.winner');
    gameOverHTML.classList.add('display');
    if (lobbyPlayers.playerOne.game.isAllSunk()) {
      winner.textContent = 'You lost the war';
    }
    if (lobbyPlayers.computer.game.isAllSunk()) {
      winner.textContent = 'You won the war';
    }
  }
};




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

  /* This will return how many ships are in player gameboard.
  It will be usefull to check if there's only 5 ship indexes, 
  that means only the carrier was placed and we can continue to the next placement. */
  const howManyShips = () => {
    const ocuppiedWithShip = iStatus.filter((index) => index.ship != null);
    const howManyShipIndexes = ocuppiedWithShip.length;
    return howManyShipIndexes;
  };

  const placeShip = (coords, direction) => {
    let index = coords;
    let length;

    // First creates a ship with length passed as parameter;
    // Find the index of the board array that matches the coords paramaters;

    // If coords is given with an array [0,0], next step is find the index
    if (Array.isArray(coords)) {
      index = board.findIndex(
        (element) => element[0] === coords[0] && element[1] === coords[1],
      );
    }

    /* Everytime we call this function we check how many ships are in the gameboard, 
    is the same as saying how many times was this fucntion sucessfuly called(no placement unavailable), 
    will change the length.  */

    if (howManyShips() === 0) {
      length = 5;
    } else if (howManyShips() === 5) {
      length = 4;
    } else if (howManyShips() === 9) {
      length = 3;
    } else if (howManyShips() === 12) {
      length = 3;
    } else if (howManyShips() === 15) {
      length = 2;
    } else {
      return;
    }

    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);

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
    let index = coords;
    if (Array.isArray(coords)) {
      index = board.findIndex(
        (element) => element[0] === coords[0] && element[1] === coords[1],
      );
    }
    if (iStatus[index].ship != null) {
      return true;
    }
    return false;
  };

  /* iStatus object has a key isAttacked and an OBJECT(ship *when its occupied*), 
  so isAttacked needs to be set o true, and ship object needs to call it's own function
  called beenHit that increments the number of "hits"(a ship proprety) */
  const recieveAttack = (coords) => {
    let index = coords;

    if (Array.isArray(coords)) {
      index = board.findIndex(
        (element) => element[0] === coords[0] && element[1] === coords[1],
      );
    }

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
    howManyShips,
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */



/* Loop from 0 to 99, each loop creates a div with dataset-i,
so that each element has identifier as index starting from 0 */

/* It takes two parameters, container(depending if its on playerContainer or computerContainer,
same goes for whichPlayer, each player has it's own array(iStatus). 
playerContainer needs to display playerOne and computerContainer computer */
const displayGrid = (container, whichPlayer) => {
  container.innerHTML = '';
  for (let i = 0; i < 100; i += 1) {
    const gridItem = document.createElement('div');
    gridItem.classList = 'gridItem';
    gridItem.dataset.i = i;
    container.appendChild(gridItem);
    // Drag and drop added './utils.js'
    gridItem.addEventListener('dragover', _utils__WEBPACK_IMPORTED_MODULE_0__.dragoverHandler);
    gridItem.addEventListener('drop', (0,_utils__WEBPACK_IMPORTED_MODULE_0__.dropHandler)(container, whichPlayer));
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
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
    if (playerOne.turn === false && computer.game.isAllSunk() === false) {
      const randomIndex = Math.floor(Math.random() * boardCopy.length);
      const coords = boardCopy[randomIndex];
      playerOne.game.recieveAttack(coords);
      boardCopy.splice(randomIndex, 1);
      playerOne.turn = true;
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gameStage)('attack');
    }
  };

  /* With coords given as parameter and playerOne with turn:true(default),
  Computer recieves an attack with those coords, turn is set to false and
  computerAttacks() is called  */
  const playerOneAttacks = (coords) => {
    if (playerOne.turn === true) {
      computer.game.recieveAttack(coords);
      playerOne.turn = false;
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
/* harmony export */   dragoverHandler: () => (/* binding */ dragoverHandler),
/* harmony export */   dropHandler: () => (/* binding */ dropHandler),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   gameStage: () => (/* binding */ gameStage),
/* harmony export */   handleBtns: () => (/* binding */ handleBtns)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* eslint-disable no-import-assign */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
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
  const shipsContainer = document.querySelector('.ships-container');
  const restartBtn = document.querySelector('.restart-game');

  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
    rotateBtn.classList.add('display');
    playerName.textContent = soldierName;
    (0,_game__WEBPACK_IMPORTED_MODULE_0__.setHumanName)((0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(soldierName));
    (0,_game__WEBPACK_IMPORTED_MODULE_0__.game)('stage1');
  });

  /* Will change the class name of ship-container-default-x and all of his childs class name from 'x' to 'y';
  In the if statement is checked the LAST element of the nodeList, only when the LAST
  element has changed class name means that ALL elements before have changed too. */
  rotateBtn.addEventListener('click', () => {
    if (shipsContainer.classList.contains('x')) {
      shipsContainer.classList = 'ships-container y';
    } else {
      shipsContainer.classList = 'ships-container x';
    }
  });

  restartBtn.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals, no-undef
    location.reload();
  });

  shipsContainer.addEventListener('dragstart', dragstartHandler);
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
  } else if (message === 'allShipsPlaced') {
    gameStatus.textContent =
      'Good job placing your ships, have you done this before?';
  } else if (message === 'attack') {
    gameStatus.textContent = 'Now! Attack your opponent!';
  } else if (message === 'computerAttacks') {
    gameStatus.textContent = 'Enemy attacked, get ready for impact!';
  } else if (message === 'attackedShip') {
    gameStatus.textContent = 'You hit a ship!';
  } else if (message === 'missedShip') {
    gameStatus.textContent = 'You hit ! The water...';
  } else if (message === 'gameOver') {
    gameStatus.textContent = 'War finally came to an end...';
  } else if (message === 'shipAlreadyHit') {
    gameStatus.textContent = 'You have already hit this coordenate';
  } else if (message === 'shipDown') {
    gameStatus.textContent =
      'BOOOOOOM!!! You have exploded one of your enemy ships';
  }
};

/* Creates a ship thro dom manipulation, length as the parameter, so it creates different sized ships */
const displayUnplacedShip = (length) => {
  const shipsContainer = document.querySelector('.ships-container');
  const rotateBtn = document.querySelector('.rotate-btn');
  if (length === 'completed') {
    // Removes the unplaced ships and the rotate button
    shipsContainer.innerHTML = '';
    rotateBtn.classList = 'rotate-btn';
  }
  /* This will make that everytime we call this function, the prior content inside this div will vanish.
   Avoiding ships overflow, because the last one was already placed. */
  shipsContainer.innerHTML = '';
  for (let i = 0; i < length; i += 1) {
    const unplacedShip = document.createElement('div');
    // The meaning of x will be that ship is displayed horizontally as default.
    unplacedShip.classList = `unplaced-ship`;
    shipsContainer.appendChild(unplacedShip);
  }
};

const dragstartHandler = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.effectAllowed = 'move';
  console.log(e.dataTransfer);
};

const dragoverHandler = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  console.log('dragging');
};

const dropHandler = (container, player) =>
  function (e) {
    e.preventDefault();
    /* Get the right direction through the displayUnplacedShip, 
    if the unplaced ship is horizontal, classList contains 'x',
    other way arround for vertical 'y' */
    let direction;
    const shipsContainer = document.querySelector('.ships-container');
    if (shipsContainer.classList.contains('x')) {
      direction = 'x';
    } else {
      direction = 'y';
    }
    // Index of the gridItem where unplaced ship was dropped.
    const index = parseInt(e.target.dataset.i);
    // Only place a ship if the grid container target is the player, not the computer
    if (container.classList.value.includes('player-container')) {
      player.game.placeShip(index, direction);
    }
    (0,_game__WEBPACK_IMPORTED_MODULE_0__.game)('stage2');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLDhHQUE4RyxXQUFXLCtDQUErQyxHQUFHLFFBQVEsa0JBQWtCLGVBQWUsY0FBYyxvQkFBb0IseUpBQXlKLGlCQUFpQixrQ0FBa0MsR0FBRyw4QkFBOEIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQixjQUFjLGdDQUFnQyxrQkFBa0IsR0FBRyxTQUFTLGtCQUFrQixHQUFHLFdBQVcsa0JBQWtCLGtCQUFrQix3QkFBd0IsOEJBQThCLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixpQkFBaUIsd0JBQXdCLHlDQUF5QyxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFFBQVEsZ0JBQWdCLGNBQWMsa0JBQWtCLDJCQUEyQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsb0JBQW9CLHVCQUF1QixHQUFHLGNBQWMsZ0JBQWdCLHFCQUFxQixrQkFBa0Isb0JBQW9CLHVCQUF1QixpQkFBaUIsa0NBQWtDLEdBQUcsZUFBZSxnQkFBZ0IscUJBQXFCLGtCQUFrQixvQkFBb0IsaUJBQWlCLHVCQUF1QixrQ0FBa0Msb0JBQW9CLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxzQkFBc0Isa0JBQWtCLGtCQUFrQixvQ0FBb0MsR0FBRyxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixvQkFBb0IsdUJBQXVCLHNCQUFzQiw0QkFBNEIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsd0JBQXdCLDBCQUEwQixHQUFHLG1CQUFtQixrQkFBa0IsMENBQTBDLHdCQUF3QiwwQkFBMEIsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsbUJBQW1CLGtCQUFrQixrQkFBa0IsNENBQTRDLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLDRCQUE0QixrQkFBa0Isd0JBQXdCLDRCQUE0QixzQkFBc0Isb0JBQW9CLEdBQUcsbUJBQW1CLHlDQUF5QyxHQUFHLFVBQVUsdUNBQXVDLEdBQUcsU0FBUyxzQ0FBc0MsR0FBRyxlQUFlLHFDQUFxQyxHQUFHLGVBQWUseUNBQXlDLEdBQUcsYUFBYSw0QkFBNEIsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsNEJBQTRCLG9CQUFvQixHQUFHLGVBQWUsa0JBQWtCLG9CQUFvQixlQUFlLGNBQWMsdUJBQXVCLG9CQUFvQixpQkFBaUIsa0NBQWtDLGlCQUFpQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQixXQUFXLFlBQVksdUJBQXVCLHlDQUF5Qyx3QkFBd0IsNEJBQTRCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsR0FBRyx3QkFBd0IsZ0JBQWdCLGlCQUFpQix3QkFBd0IsNEJBQTRCLHNDQUFzQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLFdBQVcsb0JBQW9CLEdBQUcsaUJBQWlCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHdCQUF3QixzQkFBc0Isb0JBQW9CLEdBQUcsNkNBQTZDLDZCQUE2QixvQkFBb0IsNkJBQTZCLEtBQUssR0FBRyxxQkFBcUI7QUFDbnhNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDOU8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNpQztBQUN3Qjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVc7QUFDZixJQUFJLGlEQUFXO0FBQ2YsSUFBSSxpREFBUztBQUNiLElBQUksMkRBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQVc7QUFDZjtBQUNBLE1BQU0saURBQVM7QUFDZixNQUFNLDJEQUFtQjtBQUN6QixNQUFNO0FBQ04sTUFBTSxpREFBUztBQUNmLE1BQU0sMkRBQW1CO0FBQ3pCLE1BQU07QUFDTixNQUFNLGlEQUFTO0FBQ2YsTUFBTSwyREFBbUI7QUFDekIsTUFBTTtBQUNOLE1BQU0saURBQVM7QUFDZixNQUFNLDJEQUFtQjtBQUN6QixNQUFNO0FBQ04sTUFBTSxpREFBUztBQUNmLE1BQU0sMkRBQW1CO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkIsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaURBQVM7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLFlBQVksaURBQVM7QUFDckIsV0FBVztBQUNYO0FBQ0E7QUFDQSxZQUFZLGlEQUFXO0FBQ3ZCLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0EsWUFBWSxpREFBUztBQUNyQixXQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVksaURBQVc7QUFDdkIsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVM7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJNUM7QUFDQTtBQUNnQztBQUNBOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxvQkFBb0IsaURBQVU7O0FBRTlCO0FBQ0E7QUFDQSxhQUFhLDZDQUFLO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTHpCO0FBQ0E7O0FBRXVEOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1EQUFlO0FBQ3pELHNDQUFzQyxtREFBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDeEVOO0FBQ2dCOztBQUVyQyxrREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIVjtBQUNvQztBQUNBOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzREFBUztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHNEQUFTO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFTO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbER0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEM7QUFDZDs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVksQ0FBQyxtREFBTTtBQUN2QixJQUFJLDJDQUFJO0FBQ1IsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFJO0FBQ1I7O0FBU0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYWktZ2VuZXJhdGVkLTgyMjgzNjdfMTkyMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbWFpbi1mb250OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcbn1cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxLCAyMiwgMzYsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC43OCkpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuaDEsXG5oMixcbmgzLFxucCxcbnVsLFxubGkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubGFuZGluZy1wYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAxZnI7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiA4dmg7XG59XG4uZ2V0LXBsYXllci1pbmZvIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAzNXZ3O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbn1cbmZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDMwdnc7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2FtZS1wYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nYW1lLXBhZ2UuZGlzcGxheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTYlIDY0JSAyMCU7XG59XG4uZ2FtZS1zdGF0dXMge1xuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDgwdnc7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogY2hhcnRyZXVzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXItbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZ3JpZC1jb250YWluZXIge1xuICBncmlkLWdhcDogMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG59XG4uZ3JpZEl0ZW0ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZEl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyNDMsIDIzOCk7XG59XG4uZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTA1LCAxNDgpO1xufVxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XG59XG4uc2hpcEhpdHRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuLm1pc3NlZFNob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG59XG4uaXNTdW5rZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNoaXBzLWNvbnRhaW5lci54IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uc2hpcHMtY29udGFpbmVyLnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi51bnBsYWNlZC1zaGlwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3RhdGUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3R0b206IDglO1xuICBsZWZ0OiA0MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucm90YXRlLWJ0bi5kaXNwbGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ2FtZS1vdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nYW1lLW92ZXIuZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZ2FtZS1vdmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMzksIDEwNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG4ud2lubmVyIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuLnJlc3RhcnQtZ2FtZSB7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmdhbWUtY29udGFpbmVyLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwi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QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWZvbnQ6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMSwgMjIsIDM2LCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuNzgpKSxcXG4gICAgdXJsKC4vYXNzZXRzL2FpLWdlbmVyYXRlZC04MjI4MzY3XzE5MjAuanBnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbnAsXFxudWwsXFxubGkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmxhbmRpbmctcGFnZSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgMWZyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uaGVhZGVyIC50aXRsZSB7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuLmdldC1wbGF5ZXItaW5mbyB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9ybSBsYWJlbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDM1dnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzB2dztcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5nYW1lLXBhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmdhbWUtcGFnZS5kaXNwbGF5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNiUgNjQlIDIwJTtcXG59XFxuLmdhbWUtc3RhdHVzIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogY2hhcnRyZXVzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYXllci1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBncmlkLWdhcDogMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuLmdyaWRJdGVtIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkSXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyNDMsIDIzOCk7XFxufVxcbi5lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTA1LCAxNDgpO1xcbn1cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XFxufVxcbi5zaGlwSGl0dGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG4ubWlzc2VkU2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XFxufVxcbi5pc1N1bmtlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zaGlwcy1jb250YWluZXIueCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnNoaXBzLWNvbnRhaW5lci55IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udW5wbGFjZWQtc2hpcCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJvdGF0ZS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvdHRvbTogOCU7XFxuICBsZWZ0OiA0MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnJvdGF0ZS1idG4uZGlzcGxheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmdhbWUtb3ZlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2FtZS1vdmVyLmRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5nYW1lLW92ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDM5LCAxMDQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi53aW5uZXIge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG4ucmVzdGFydC1nYW1lIHtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ2FtZS1jb250YWluZXIuZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBkaXNwbGF5R3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IHsgZ2FtZVN0YWdlLCBkaXNwbGF5VW5wbGFjZWRTaGlwIH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIEZ1bmN0aW9uIGNyZWF0ZWQgdG8gYXNzaWduIGEgdmFsdWUgdG8gYW4gZXhwb3J0ZWQgdmFyaWFibGUuIGZvcm0uYWRkRXZlbnRcbmxldCBsb2JieVBsYXllcnM7XG5mdW5jdGlvbiBzZXRIdW1hbk5hbWUobmFtZSkge1xuICBsb2JieVBsYXllcnMgPSBuYW1lO1xufVxuXG5jb25zdCBnYW1lID0gKHN0YWdlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGxvYmJ5UGxheWVycyk7XG5cbiAgaWYgKHN0YWdlID09PSAnc3RhZ2UxJykge1xuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItY29udGFpbmVyJyk7XG4gICAgZGlzcGxheUdyaWQocGxheWVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMucGxheWVyT25lKTtcbiAgICBkaXNwbGF5R3JpZChjb21wdXRlckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyKTtcbiAgICBnYW1lU3RhZ2UoJ2NhcnJpZXInKTtcbiAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDUpO1xuICAgIHdoaWxlIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5ob3dNYW55U2hpcHMoKSAhPT0gMTcpIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgIGNvbnN0IGRpcmV0aW9uID0gWyd5JywgJ3gnXTtcbiAgICAgIGNvbnN0IHJhbmRvbURpcmV0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zb2xlLmxvZyhkaXJldGlvbltyYW5kb21EaXJldGlvbl0pO1xuXG4gICAgICBsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5wbGFjZVNoaXAoXG4gICAgICAgIHJhbmRvbUluZGV4LFxuICAgICAgICBkaXJldGlvbltyYW5kb21EaXJldGlvbl0sXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaG93TWFueVNoaXBzKCkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFnZSA9PT0gJ3N0YWdlMicpIHtcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWNvbnRhaW5lcicpO1xuICAgIGRpc3BsYXlHcmlkKHBsYXllckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLnBsYXllck9uZSk7XG4gICAgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gNSkge1xuICAgICAgZ2FtZVN0YWdlKCdiYXR0bGVzaGlwJyk7XG4gICAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDQpO1xuICAgIH0gZWxzZSBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmhvd01hbnlTaGlwcygpID09PSA5KSB7XG4gICAgICBnYW1lU3RhZ2UoJ2NydWlzZXInKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoMyk7XG4gICAgfSBlbHNlIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDEyKSB7XG4gICAgICBnYW1lU3RhZ2UoJ3N1Ym1hcmluZScpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCgzKTtcbiAgICB9IGVsc2UgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gMTUpIHtcbiAgICAgIGdhbWVTdGFnZSgnZGVzdHJveWVyJyk7XG4gICAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDIpO1xuICAgIH0gZWxzZSBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmhvd01hbnlTaGlwcygpID09PSAxNykge1xuICAgICAgZ2FtZVN0YWdlKCdhbGxTaGlwc1BsYWNlZCcpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCgnY29tcGxldGVkJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ2FtZSgnc3RhZ2UzJyk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhZ2UgPT09ICdzdGFnZTMnKSB7XG4gICAgY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcbiAgICBnYW1lU3RhZ2UoJ2F0dGFjaycpO1xuICAgIGNvbXB1dGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gR2V0IHRoZSBlLnRhcmdldElkIGFuZCBwYXJzZUludCB0byBudW1cbiAgICAgIGNvbnN0IHRhcmdldElkID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pKTtcblxuICAgICAgLy8gSWYgdGhlIGNvb3JkcyBvZiB0aGUgYXR0YWNrIGlzIGFscmVhZHkgYXR0YWNrZWQsIHJldHVybi5cbiAgICAgIGlmIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pU3RhdHVzW3RhcmdldElkXS5pc0F0dGFja2VkID09PSBudWxsKSB7XG4gICAgICAgIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmVBdHRhY2tzKHRhcmdldElkKTtcbiAgICAgICAgZGlzcGxheUdyaWQoY29tcHV0ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5jb21wdXRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qIElmIHRoZSBjb21wdXRlciBoYXMgYSBzaGlwIG9uIGluZGV4KHRhcmdldElkKSxcbiAgICAgIHNldCBtZXNzYWdlICdZb3UgaGl0IGEgc2hpcCEnLCB0d28gc2Vjb25kcyBhZnRlcihJZiBjb21wdXRlciBzdGlsbCBoYXMgc2hpcHMpLFxuICAgICAgbWVzc2FnZSB0aGF0IGNvbXB1dGVyIHdpbGwgYXR0YWNrLCBhbmQgdHdvIHNlY29uZHMgYWZ0ZXIgdGhhdCBtZXNzYWdlIHdpbGwgZGlzcGxheSB0aGF0IHJhbmRvbSBhdHRhY2sgKi9cbiAgICAgIGlmIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5oYXNTaGlwKHRhcmdldElkKSkge1xuICAgICAgICBnYW1lU3RhZ2UoJ2F0dGFja2VkU2hpcCcpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaVN0YXR1c1t0YXJnZXRJZF0uc2hpcC5pc0l0U3VuayA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBnYW1lU3RhZ2UoJ3NoaXBEb3duJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaXNBbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lU3RhZ2UoJ2NvbXB1dGVyQXR0YWNrcycpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyQXR0YWNrcygpO1xuICAgICAgICAgICAgZGlzcGxheUdyaWQocGxheWVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMucGxheWVyT25lKTtcbiAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEVsc2UgPT4gdGhlIGNvbXB1dGVyIGRvZXNuJ3QgaGF2ZSBhIHNoaXAgb24gaW5kZXgodGFyZ2V0SWQpLFxuICAgICAgICBzZXQgbWVzc2FnZSB0aGF0IHBsYXllciBtaXNzZWQgdGhlIGNvbXB1dGVycyBzaGlwLCBhZnRlciB0d28gc2Vjb25kcywgXG4gICAgICAgIHdpbGwgZG8gdGhlIHNhbWUgYXMgd2hlbiBjb21wdXRlciBoYXMgc2hpcCAqL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZVN0YWdlKCdtaXNzZWRTaGlwJyk7XG4gICAgICAgIGlmIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pc0FsbFN1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWVTdGFnZSgnY29tcHV0ZXJBdHRhY2tzJyk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsb2JieVBsYXllcnMuY29tcHV0ZXJBdHRhY2tzKCk7XG4gICAgICAgICAgICBkaXNwbGF5R3JpZChwbGF5ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUpO1xuICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFsbCBzdW5rLCBtZXNzYWdlIHRoYXQgZ2FtZSBpcyBvdmVyIGFuZCBjYWxsIHN0YWdlPSdnYW1lT3ZlcidcbiAgICAgIGlmIChcbiAgICAgICAgbG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmlzQWxsU3VuaygpIHx8XG4gICAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlzQWxsU3VuaygpXG4gICAgICApIHtcbiAgICAgICAgZ2FtZVN0YWdlKCdnYW1lT3ZlcicpO1xuICAgICAgICBnYW1lKCdnYW1lT3ZlcicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHN0YWdlID09PSAnZ2FtZU92ZXInKSB7XG4gICAgY29uc3QgZ2FtZU92ZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3ZlcicpO1xuICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcbiAgICBnYW1lT3ZlckhUTUwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9ICdZb3UgbG9zdCB0aGUgd2FyJztcbiAgICB9XG4gICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlzQWxsU3VuaygpKSB7XG4gICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnWW91IHdvbiB0aGUgd2FyJztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdhbWUsIGxvYmJ5UGxheWVycywgc2V0SHVtYW5OYW1lIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBjcmVhdGVzIGFuIGFycmF5IHdpdGggY29vcmRlbmF0ZXNcbiAgY29uc3QgYnVpbGRCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgIGJvYXJkLnB1c2goW3gsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIC8vIGNyZWF0ZXMgYW4gYXJyYXkgZm9yIGVhY2ggY29vZGVuYXRlIGZyb20gYm9hcmQgYXJyYXlcbiAgY29uc3QgYm9hcmRTdGF0dXMgPSAoYXJyKSA9PiB7XG4gICAgY29uc3QgaVN0YXR1cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpU3RhdHVzW2ldID0ge1xuICAgICAgICBpc0F0dGFja2VkOiBudWxsLFxuICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGlTdGF0dXM7XG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBidWlsZEJvYXJkKCk7XG4gIGNvbnN0IGlTdGF0dXMgPSBib2FyZFN0YXR1cyhib2FyZCk7XG5cbiAgY29uc3QgaXNEaWZmZXJlbnRSb3cgPSAoaW5kZXgsIGkpID0+IHtcbiAgICAvKiBUaGUgZW5kIG9mIHJvdyBlbmRzIGJ5IDkgWzksMTksMjksMzksNDksNTksNjksNzksODksOTldIFxuICAgIElmIGluZGV4IGlzIHNtYWxsZXIgdGhhbiA5KGV4YW1wbGUpLCBhbmQgaW5kZXggKyBpIGlzIGJpZ2dlciB0aGFuIDkgcmV0dXJuIHRydWUuIHBsYWNlbWVudCBub3QgYWxsb3dlZCAqL1xuICAgIGZvciAobGV0IGogPSA5OyBqIDwgMTAwOyBqICs9IDEwKSB7XG4gICAgICBpZiAoaW5kZXggPD0gaiAmJiBpbmRleCArIGkgPiBqKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyogQ2FsbGVkIG9uIHBsYWNlU2hpcCgpLCByZXR1cm5zIHRydWUgaWYgaXRzIFVOYXZhaWxhYmxlIFxuICBGb3IgaG9yaXpvbnRhbCBpZiAoaW5kZXggKyBpKSBoYXMgc2hpcCBvciBpZiBpdHMgZGlmZmVyZW50IHJvdyByZXR1cm5cbiAgRm9yIHZlcnRpY2FsLCBpbmRleGVzIGdvIDEwIGFmdGVyIDEwLCBpZiAoaW5kZXggKyBpICogMTApaGFzIHNoaXAgb3JcbiAgaWYgKGluZGV4ICsgaSAqIDEwKSBpcyBiaWdnZXIgb3IgZXF1YWwgdGhhbiAxMDAgcmV0dXJuLCBiZWNhdXNlIHRoZSBiaWdnZXN0IGluZGV4IGlzIDk5ICovXG4gIGNvbnN0IGlzUGxhY2VtZW50VW5hdmFpbGFibGUgPSAoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGlmIChpU3RhdHVzW2luZGV4ICsgaV0uc2hpcCAhPT0gbnVsbCB8fCBpc0RpZmZlcmVudFJvdyhpbmRleCwgaSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgICBpZiAoaW5kZXggKyBpICogMTAgPj0gMTAwIHx8IGlTdGF0dXNbaW5kZXggKyBpICogMTBdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyogVGhpcyB3aWxsIHJldHVybiBob3cgbWFueSBzaGlwcyBhcmUgaW4gcGxheWVyIGdhbWVib2FyZC5cbiAgSXQgd2lsbCBiZSB1c2VmdWxsIHRvIGNoZWNrIGlmIHRoZXJlJ3Mgb25seSA1IHNoaXAgaW5kZXhlcywgXG4gIHRoYXQgbWVhbnMgb25seSB0aGUgY2FycmllciB3YXMgcGxhY2VkIGFuZCB3ZSBjYW4gY29udGludWUgdG8gdGhlIG5leHQgcGxhY2VtZW50LiAqL1xuICBjb25zdCBob3dNYW55U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2N1cHBpZWRXaXRoU2hpcCA9IGlTdGF0dXMuZmlsdGVyKChpbmRleCkgPT4gaW5kZXguc2hpcCAhPSBudWxsKTtcbiAgICBjb25zdCBob3dNYW55U2hpcEluZGV4ZXMgPSBvY3VwcGllZFdpdGhTaGlwLmxlbmd0aDtcbiAgICByZXR1cm4gaG93TWFueVNoaXBJbmRleGVzO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZHMsIGRpcmVjdGlvbikgPT4ge1xuICAgIGxldCBpbmRleCA9IGNvb3JkcztcbiAgICBsZXQgbGVuZ3RoO1xuXG4gICAgLy8gRmlyc3QgY3JlYXRlcyBhIHNoaXAgd2l0aCBsZW5ndGggcGFzc2VkIGFzIHBhcmFtZXRlcjtcbiAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgYm9hcmQgYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBjb29yZHMgcGFyYW1hdGVycztcblxuICAgIC8vIElmIGNvb3JkcyBpcyBnaXZlbiB3aXRoIGFuIGFycmF5IFswLDBdLCBuZXh0IHN0ZXAgaXMgZmluZCB0aGUgaW5kZXhcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZHMpKSB7XG4gICAgICBpbmRleCA9IGJvYXJkLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qIEV2ZXJ5dGltZSB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24gd2UgY2hlY2sgaG93IG1hbnkgc2hpcHMgYXJlIGluIHRoZSBnYW1lYm9hcmQsIFxuICAgIGlzIHRoZSBzYW1lIGFzIHNheWluZyBob3cgbWFueSB0aW1lcyB3YXMgdGhpcyBmdWNudGlvbiBzdWNlc3NmdWx5IGNhbGxlZChubyBwbGFjZW1lbnQgdW5hdmFpbGFibGUpLCBcbiAgICB3aWxsIGNoYW5nZSB0aGUgbGVuZ3RoLiAgKi9cblxuICAgIGlmIChob3dNYW55U2hpcHMoKSA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gNTtcbiAgICB9IGVsc2UgaWYgKGhvd01hbnlTaGlwcygpID09PSA1KSB7XG4gICAgICBsZW5ndGggPSA0O1xuICAgIH0gZWxzZSBpZiAoaG93TWFueVNoaXBzKCkgPT09IDkpIHtcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgfSBlbHNlIGlmIChob3dNYW55U2hpcHMoKSA9PT0gMTIpIHtcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgfSBlbHNlIGlmIChob3dNYW55U2hpcHMoKSA9PT0gMTUpIHtcbiAgICAgIGxlbmd0aCA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlU2hpcChsZW5ndGgpO1xuXG4gICAgLy8gSWYgcGxhY2VtZW50IGlzIG5vdCBhbGxvd2VkIHJldHVybiBlcnJvcjtcbiAgICBpZiAoaXNQbGFjZW1lbnRVbmF2YWlsYWJsZShpbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZXJyb3IoJ3BsYWNlbWVudCcpO1xuICAgIH1cblxuICAgIC8qIFRoaXMgbG9vcHMgd2lsbCBjb250aW51ZSBhcyBsb25nIGFzIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgaXMgbm90IHJlYWNoZWQuXG4gICAgSWYgZGlyZWN0aW9uIGlzIHggKGhvcml6b250YWwpLCB0aGUgaW5kZXggaXMgb25lIGFmdGVyIHRoZSBvbmUsIHNvIHRoZSBpbmRleCArIGkgPSBuZXdTaGlwXG4gICAgSWYgZGlyZWN0aW9uIGlzIHkgKHZlcnRpY2FsKSwgdGhlIGluZGV4IGlzIDEwIGFmdGVyIDEwLCBzbyB0aGUgaW5kZXggaXMgaSAqIDEwLiAqL1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd4Jykge1xuICAgICAgICBpU3RhdHVzW2luZGV4ICsgaV0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgICAgaVN0YXR1c1tpbmRleCArIGkgKiAxMF0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhc1NoaXAgPSAoY29vcmRzKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gY29vcmRzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvb3JkcykpIHtcbiAgICAgIGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudFswXSA9PT0gY29vcmRzWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3Jkc1sxXSxcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpU3RhdHVzW2luZGV4XS5zaGlwICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyogaVN0YXR1cyBvYmplY3QgaGFzIGEga2V5IGlzQXR0YWNrZWQgYW5kIGFuIE9CSkVDVChzaGlwICp3aGVuIGl0cyBvY2N1cGllZCopLCBcbiAgc28gaXNBdHRhY2tlZCBuZWVkcyB0byBiZSBzZXQgbyB0cnVlLCBhbmQgc2hpcCBvYmplY3QgbmVlZHMgdG8gY2FsbCBpdCdzIG93biBmdW5jdGlvblxuICBjYWxsZWQgYmVlbkhpdCB0aGF0IGluY3JlbWVudHMgdGhlIG51bWJlciBvZiBcImhpdHNcIihhIHNoaXAgcHJvcHJldHkpICovXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gY29vcmRzO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29vcmRzKSkge1xuICAgICAgaW5kZXggPSBib2FyZC5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50WzBdID09PSBjb29yZHNbMF0gJiYgZWxlbWVudFsxXSA9PT0gY29vcmRzWzFdLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpU3RhdHVzW2luZGV4XS5pc0F0dGFja2VkID0gdHJ1ZTtcbiAgICBpZiAoaVN0YXR1c1tpbmRleF0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgaVN0YXR1c1tpbmRleF0uc2hpcC5iZWVuSGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIEZpbHRlciB0aGUgZXhpc3Rpbmcgc2hpcHMgZnJvbSBpU3RhdHVzIGFycmF5XG4gIC5ldmVyeSBpcyBjYWxsZWQgb24gdGhlIGZpbHRyZWQgYXJyYXkgdG8gY2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rZWRcbiAgSWYgLmV2ZXJ5IGlzIHRydWUsIHJldHVybiB0cnVlIG90aGVyd2lzZSBmYWxzZSAqL1xuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2N1cHBpZWRXaXRoU2hpcCA9IGlTdGF0dXMuZmlsdGVyKChpbmRleCkgPT4gaW5kZXguc2hpcCAhPSBudWxsKTtcbiAgICBjb25zdCBhbGxTdW5rZWQgPSBvY3VwcGllZFdpdGhTaGlwLmV2ZXJ5KFxuICAgICAgKGluZGV4KSA9PiBpbmRleC5zaGlwLmlzSXRTdW5rID09PSB0cnVlLFxuICAgICk7XG4gICAgaWYgKGFsbFN1bmtlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGlTdGF0dXMsXG4gICAgcGxhY2VTaGlwLFxuICAgIGhhc1NoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0FsbFN1bmssXG4gICAgaG93TWFueVNoaXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5pbXBvcnQgeyBkcmFnb3ZlckhhbmRsZXIsIGRyb3BIYW5kbGVyIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qIExvb3AgZnJvbSAwIHRvIDk5LCBlYWNoIGxvb3AgY3JlYXRlcyBhIGRpdiB3aXRoIGRhdGFzZXQtaSxcbnNvIHRoYXQgZWFjaCBlbGVtZW50IGhhcyBpZGVudGlmaWVyIGFzIGluZGV4IHN0YXJ0aW5nIGZyb20gMCAqL1xuXG4vKiBJdCB0YWtlcyB0d28gcGFyYW1ldGVycywgY29udGFpbmVyKGRlcGVuZGluZyBpZiBpdHMgb24gcGxheWVyQ29udGFpbmVyIG9yIGNvbXB1dGVyQ29udGFpbmVyLFxuc2FtZSBnb2VzIGZvciB3aGljaFBsYXllciwgZWFjaCBwbGF5ZXIgaGFzIGl0J3Mgb3duIGFycmF5KGlTdGF0dXMpLiBcbnBsYXllckNvbnRhaW5lciBuZWVkcyB0byBkaXNwbGF5IHBsYXllck9uZSBhbmQgY29tcHV0ZXJDb250YWluZXIgY29tcHV0ZXIgKi9cbmNvbnN0IGRpc3BsYXlHcmlkID0gKGNvbnRhaW5lciwgd2hpY2hQbGF5ZXIpID0+IHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0nO1xuICAgIGdyaWRJdGVtLmRhdGFzZXQuaSA9IGk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcbiAgICAvLyBEcmFnIGFuZCBkcm9wIGFkZGVkICcuL3V0aWxzLmpzJ1xuICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJIYW5kbGVyKTtcbiAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcEhhbmRsZXIoY29udGFpbmVyLCB3aGljaFBsYXllcikpO1xuICAgIC8vIEl0cyBlbXB0eSBhbmQgbm90IGhpdFxuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkID09PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCA9PT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIGVtcHR5JztcbiAgICB9XG5cbiAgICAvKiBDbGFzcyBsaXN0IG5lZWRzIHRvIGJlIGNoZWNrZWQsIGJlY2F1c2UgY29tcHV0ZXIgc2hpcHMgXG4gICAgbXVzbnQgYmUgZGlzcGxheWVkLCBzbyBncmlkSXRlbSBlbXB0eShibHVlKSAqL1xuICAgIGlmIChcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ3BsYXllci1jb250YWluZXInKSAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgPT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gc2hpcCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NvbXB1dGVyLWNvbnRhaW5lcicpICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBlbXB0eSc7XG4gICAgfVxuXG4gICAgLy8gSXRzIG5vdCBlbXB0eSBhbmQgaGl0LCBidXQgbm90IHN1bmtcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwLmlzSXRTdW5rID09PSBmYWxzZVxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIHNoaXBIaXR0ZWQnO1xuICAgIH1cblxuICAgIC8vIEl0cyBlbXB0eSBhbmQgaGl0XG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwID09PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gbWlzc2VkU2hvdCc7XG4gICAgfVxuXG4gICAgLy8gSXRzIHN1bmtcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAuaXNJdFN1bmsgPT09IHRydWVcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBpc1N1bmtlZCc7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5R3JpZDtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGFuZGxlQnRucyB9IGZyb20gJy4vdXRpbHMnO1xuXG5oYW5kbGVCdG5zKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgZ2FtZVN0YWdlIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qIE5hbWUgcGFzc2VkIGl0IGFzIHBhcmFtZXRlcnMgc2V0cyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyT25lLlxuQ29tcHV0ZXIgc3RhcnRzIHdpdGggaXMgb3duIGNvbXB1dGVyIG5hbWUgKi9cbmNvbnN0IFBsYXllciA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgcGxheWVyT25lID0ge1xuICAgIHVzZXJuYW1lOiBwbGF5ZXIsXG4gICAgZ2FtZTogR2FtZWJvYXJkKCksXG4gICAgdHVybjogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBjb21wdXRlciA9IHtcbiAgICB1c2VybmFtZTogJ0NvbXB1dGVyJyxcbiAgICBnYW1lOiBHYW1lYm9hcmQoKSxcbiAgfTtcblxuICBjb25zdCBib2FyZENvcHkgPSBbLi4ucGxheWVyT25lLmdhbWUuYm9hcmRdO1xuXG4gIC8qIFRvIG5vdCByZXBlYXQgYXR0YWNrcywgcmFuZG9tSW5kZXggZnJvbSBib2FyZENvcHkubGVuZ3RoXG4gIGdldCB0aGUgY29vcmRzIGZyb20gdGhhdCBib2FyZENvcHkgcmFuZG9tIGluZGV4IGFuZCBhdHRhY2sgcGxheWVyT25lIGFuZFxuICBkZWxldGUgdGhhdCBpbmRleCBmcm9tIHRoZSBib2FyZENvcHkgc28gY29vcmRzIGRvbnQgcmVwZWF0XG4gICovXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrcyA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyT25lLnR1cm4gPT09IGZhbHNlICYmIGNvbXB1dGVyLmdhbWUuaXNBbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkQ29weS5sZW5ndGgpO1xuICAgICAgY29uc3QgY29vcmRzID0gYm9hcmRDb3B5W3JhbmRvbUluZGV4XTtcbiAgICAgIHBsYXllck9uZS5nYW1lLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICAgIGJvYXJkQ29weS5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuICAgICAgcGxheWVyT25lLnR1cm4gPSB0cnVlO1xuICAgICAgZ2FtZVN0YWdlKCdhdHRhY2snKTtcbiAgICB9XG4gIH07XG5cbiAgLyogV2l0aCBjb29yZHMgZ2l2ZW4gYXMgcGFyYW1ldGVyIGFuZCBwbGF5ZXJPbmUgd2l0aCB0dXJuOnRydWUoZGVmYXVsdCksXG4gIENvbXB1dGVyIHJlY2lldmVzIGFuIGF0dGFjayB3aXRoIHRob3NlIGNvb3JkcywgdHVybiBpcyBzZXQgdG8gZmFsc2UgYW5kXG4gIGNvbXB1dGVyQXR0YWNrcygpIGlzIGNhbGxlZCAgKi9cbiAgY29uc3QgcGxheWVyT25lQXR0YWNrcyA9IChjb29yZHMpID0+IHtcbiAgICBpZiAocGxheWVyT25lLnR1cm4gPT09IHRydWUpIHtcbiAgICAgIGNvbXB1dGVyLmdhbWUucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgcGxheWVyT25lLnR1cm4gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9uZS50dXJuID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgeW91ciB0dXJuIHRvIHBsYXknKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheWVyT25lLCBjb21wdXRlciwgcGxheWVyT25lQXR0YWNrcywgY29tcHV0ZXJBdHRhY2tzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBjcmVhdGVTaGlwID0gKGxlbmd0aCkgPT4gKHtcbiAgbGVuZ3RoLFxuICBoaXRzOiAwLFxuICBpc0l0U3VuazogZmFsc2UsXG4gIGJlZW5IaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfSxcbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNJdFN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8taW1wb3J0LWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCB7IGdhbWUsIHNldEh1bWFuTmFtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgZXJyb3IgPSAodHlwZSkgPT4ge1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gIGlmICh0eXBlID09PSAncGxhY2VtZW50Jykge1xuICAgIGVycm9yTWVzc2FnZSArPSAnVGhpcyBwbGFjZW1lbnQgaXMgbm90IGFsbG93ZWQuJztcbiAgfVxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufTtcblxuLy8gRE9NIHF1ZXJ5aW5nIGluc2lkZSBmdW5jdGlvbnMgdG8gbm90IGludGVyZmVyZSB3aXRoIEpFU1RcbmNvbnN0IGhhbmRsZUJ0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IHNvbGRpZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2xkaWVyTmFtZScpO1xuICBjb25zdCBsYW5kaW5nUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXBhZ2UnKTtcbiAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1wYWdlJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW5hbWUnKTtcbiAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1nYW1lJyk7XG5cbiAgLyogVGhpcyBldmVudCBsaXN0ZW5lciB3aWxsIHN0YXJ0IHRoZSBnYW1lIGJ5IGNhbGxpbmcgaW5pdGlhbGl6ZSBmdW5jdGlvbiB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgdGV4dCBhcyB0aGUgbmFtZSBvZiB0aGUgcGxheWVyLFxuICAgbGFuZGluZyBwYWdlIHdpbGwgaGlkZSwgZ2FtZSBwYWdlIHdpbGwgZGlzcGxheSBhbmQgcGxheWVyLW5hbWUgYXMgYSBuZXcgbmFtZSAqL1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc29sZGllck5hbWUgPSBzb2xkaWVyTmFtZUVsZW1lbnQudmFsdWU7XG4gICAgbGFuZGluZ1BhZ2UuY2xhc3NMaXN0ID0gJ2xhbmRpbmctcGFnZSBoaWRlJztcbiAgICBnYW1lUGFnZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgcm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gc29sZGllck5hbWU7XG4gICAgc2V0SHVtYW5OYW1lKFBsYXllcihzb2xkaWVyTmFtZSkpO1xuICAgIGdhbWUoJ3N0YWdlMScpO1xuICB9KTtcblxuICAvKiBXaWxsIGNoYW5nZSB0aGUgY2xhc3MgbmFtZSBvZiBzaGlwLWNvbnRhaW5lci1kZWZhdWx0LXggYW5kIGFsbCBvZiBoaXMgY2hpbGRzIGNsYXNzIG5hbWUgZnJvbSAneCcgdG8gJ3knO1xuICBJbiB0aGUgaWYgc3RhdGVtZW50IGlzIGNoZWNrZWQgdGhlIExBU1QgZWxlbWVudCBvZiB0aGUgbm9kZUxpc3QsIG9ubHkgd2hlbiB0aGUgTEFTVFxuICBlbGVtZW50IGhhcyBjaGFuZ2VkIGNsYXNzIG5hbWUgbWVhbnMgdGhhdCBBTEwgZWxlbWVudHMgYmVmb3JlIGhhdmUgY2hhbmdlZCB0b28uICovXG4gIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd4JykpIHtcbiAgICAgIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdzaGlwcy1jb250YWluZXIgeSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdzaGlwcy1jb250YWluZXIgeCc7XG4gICAgfVxuICB9KTtcblxuICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMsIG5vLXVuZGVmXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIHNoaXBzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdzdGFydEhhbmRsZXIpO1xufTtcblxuLy8gV2lsbCBiZSBjYWxsZWQgZHVyaW5nIGdhbWUtbG9vcCB0byBjaGFuZ2UgdGhlIG1lc3NhZ2UoZG9tKSB3aGlsZSBnYW1lIGdvZXMgb24uXG5jb25zdCBnYW1lU3RhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBnYW1lU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhdHVzJyk7XG4gIGlmIChtZXNzYWdlID09PSAnY2FycmllcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGNhcnJpZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgYmF0dGxlc2hpcC4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBjcnVpc2VyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnc3VibWFyaW5lJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgc3VibWFyaW5lLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnZGVzdHJveWVyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgZGVzdHJveWVyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYWxsU2hpcHNQbGFjZWQnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9XG4gICAgICAnR29vZCBqb2IgcGxhY2luZyB5b3VyIHNoaXBzLCBoYXZlIHlvdSBkb25lIHRoaXMgYmVmb3JlPyc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2F0dGFjaycpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ05vdyEgQXR0YWNrIHlvdXIgb3Bwb25lbnQhJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnY29tcHV0ZXJBdHRhY2tzJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnRW5lbXkgYXR0YWNrZWQsIGdldCByZWFkeSBmb3IgaW1wYWN0ISc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2F0dGFja2VkU2hpcCcpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ1lvdSBoaXQgYSBzaGlwISc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ21pc3NlZFNoaXAnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdZb3UgaGl0ICEgVGhlIHdhdGVyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnZ2FtZU92ZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdXYXIgZmluYWxseSBjYW1lIHRvIGFuIGVuZC4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ3NoaXBBbHJlYWR5SGl0Jykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgYWxyZWFkeSBoaXQgdGhpcyBjb29yZGVuYXRlJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnc2hpcERvd24nKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9XG4gICAgICAnQk9PT09PT00hISEgWW91IGhhdmUgZXhwbG9kZWQgb25lIG9mIHlvdXIgZW5lbXkgc2hpcHMnO1xuICB9XG59O1xuXG4vKiBDcmVhdGVzIGEgc2hpcCB0aHJvIGRvbSBtYW5pcHVsYXRpb24sIGxlbmd0aCBhcyB0aGUgcGFyYW1ldGVyLCBzbyBpdCBjcmVhdGVzIGRpZmZlcmVudCBzaXplZCBzaGlwcyAqL1xuY29uc3QgZGlzcGxheVVucGxhY2VkU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGlmIChsZW5ndGggPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgLy8gUmVtb3ZlcyB0aGUgdW5wbGFjZWQgc2hpcHMgYW5kIHRoZSByb3RhdGUgYnV0dG9uXG4gICAgc2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcm90YXRlQnRuLmNsYXNzTGlzdCA9ICdyb3RhdGUtYnRuJztcbiAgfVxuICAvKiBUaGlzIHdpbGwgbWFrZSB0aGF0IGV2ZXJ5dGltZSB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24sIHRoZSBwcmlvciBjb250ZW50IGluc2lkZSB0aGlzIGRpdiB3aWxsIHZhbmlzaC5cbiAgIEF2b2lkaW5nIHNoaXBzIG92ZXJmbG93LCBiZWNhdXNlIHRoZSBsYXN0IG9uZSB3YXMgYWxyZWFkeSBwbGFjZWQuICovXG4gIHNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdW5wbGFjZWRTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gVGhlIG1lYW5pbmcgb2YgeCB3aWxsIGJlIHRoYXQgc2hpcCBpcyBkaXNwbGF5ZWQgaG9yaXpvbnRhbGx5IGFzIGRlZmF1bHQuXG4gICAgdW5wbGFjZWRTaGlwLmNsYXNzTGlzdCA9IGB1bnBsYWNlZC1zaGlwYDtcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1bnBsYWNlZFNoaXApO1xuICB9XG59O1xuXG5jb25zdCBkcmFnc3RhcnRIYW5kbGVyID0gKGUpID0+IHtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIpO1xufTtcblxuY29uc3QgZHJhZ292ZXJIYW5kbGVyID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICBjb25zb2xlLmxvZygnZHJhZ2dpbmcnKTtcbn07XG5cbmNvbnN0IGRyb3BIYW5kbGVyID0gKGNvbnRhaW5lciwgcGxheWVyKSA9PlxuICBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvKiBHZXQgdGhlIHJpZ2h0IGRpcmVjdGlvbiB0aHJvdWdoIHRoZSBkaXNwbGF5VW5wbGFjZWRTaGlwLCBcbiAgICBpZiB0aGUgdW5wbGFjZWQgc2hpcCBpcyBob3Jpem9udGFsLCBjbGFzc0xpc3QgY29udGFpbnMgJ3gnLFxuICAgIG90aGVyIHdheSBhcnJvdW5kIGZvciB2ZXJ0aWNhbCAneScgKi9cbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGlmIChzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3gnKSkge1xuICAgICAgZGlyZWN0aW9uID0gJ3gnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSAneSc7XG4gICAgfVxuICAgIC8vIEluZGV4IG9mIHRoZSBncmlkSXRlbSB3aGVyZSB1bnBsYWNlZCBzaGlwIHdhcyBkcm9wcGVkLlxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pKTtcbiAgICAvLyBPbmx5IHBsYWNlIGEgc2hpcCBpZiB0aGUgZ3JpZCBjb250YWluZXIgdGFyZ2V0IGlzIHRoZSBwbGF5ZXIsIG5vdCB0aGUgY29tcHV0ZXJcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygncGxheWVyLWNvbnRhaW5lcicpKSB7XG4gICAgICBwbGF5ZXIuZ2FtZS5wbGFjZVNoaXAoaW5kZXgsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGdhbWUoJ3N0YWdlMicpO1xuICB9O1xuXG5leHBvcnQge1xuICBlcnJvcixcbiAgaGFuZGxlQnRucyxcbiAgZ2FtZVN0YWdlLFxuICBkaXNwbGF5VW5wbGFjZWRTaGlwLFxuICBkcmFnb3ZlckhhbmRsZXIsXG4gIGRyb3BIYW5kbGVyLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==