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
    linear-gradient(rgba(1, 22, 36, 0.2), rgba(0, 0, 0, 0.9)),
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
  grid-template-rows: 15% 85%;
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

@media only screen and (max-width: 600px) {
  .game-container.display {
    display: flex;
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf;;kEAEoE;EACpE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;;;;;EAME,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kCAAkC;AACpC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');\n\n:root {\n  --main-font: 'Allerta Stencil', sans-serif;\n}\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  background:\n    linear-gradient(rgba(1, 22, 36, 0.2), rgba(0, 0, 0, 0.9)),\n    url(./assets/ai-generated-8228367_1920.jpg) center/cover no-repeat;\n  color: white;\n  font-family: var(--main-font);\n}\nh1,\nh2,\nh3,\np,\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n.landing-page {\n  height: 100vh;\n  gap: 20px;\n  grid-template-rows: 15% 1fr;\n  display: grid;\n}\n.hide {\n  display: none;\n}\n.header {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header .title {\n  font-size: 8vh;\n}\n.get-player-info {\n  margin: 20px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nform {\n  width: 100%;\n  gap: 50px;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  font-size: 2rem;\n  text-align: center;\n}\nform input {\n  width: 35vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border-radius: 5px;\n  border: none;\n  font-family: var(--main-font);\n}\nform button {\n  width: 30vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 4px;\n  font-family: var(--main-font);\n  cursor: pointer;\n}\n.game-page {\n  display: none;\n}\n.game-page.display {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 15% 85%;\n}\n.game-status {\n  height: 5vh;\n  width: 80vw;\n  font-size: 2rem;\n  border-radius: 5px;\n  color: chartreuse;\n  background-color: black;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-items: center;\n}\n.game-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.player-name {\n  text-transform: uppercase;\n}\n.grid-container {\n  grid-gap: 2px;\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n}\n.gridItem {\n  width: 30px;\n  height: 30px;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.gridItem:hover {\n  background-color: rgb(135, 243, 238);\n}\n.empty {\n  background-color: rgb(0, 105, 148);\n}\n.ship {\n  background-color: rgb(77, 77, 77);\n}\n.shipHitted {\n  background-color: rgb(255, 0, 0);\n}\n.missedShot {\n  background-color: rgb(192, 192, 192);\n}\n.isSunked {\n  background-color: black;\n}\n\n@media only screen and (max-width: 600px) {\n  .game-container.display {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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




const playerContainer = document.querySelector('.player-container');
const computerContainer = document.querySelector('.computer-container');

const initialize = (name) => {
  // This function is called when the form is submitted, with name being inp.value
  const players = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 0) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('carrier');
    players.playerOne.game.placeShip([0, 0], 5, 'y');
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 5) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('battleship');
    players.playerOne.game.placeShip([0, 1], 4, 'y');
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 9) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('cruiser');
    players.playerOne.game.placeShip([0, 6], 3, 'x');
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 12) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('submarine');
    players.playerOne.game.placeShip([6, 2], 3, 'x');
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.howManyShips)(players.playerOne) === 15) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gameStage)('destroyer');
    players.playerOne.game.placeShip([8, 8], 2, 'x');
  }
  // players.playerOne.game.placeShip([3, 2], 3, 'x');
  // players.playerOne.game.placeShip([6, 2], 3, 'x');
  // players.playerOne.game.placeShip([8, 2], 1, 'x');

  // This will be random
  players.computer.game.placeShip([0, 0], 5, 'y');
  players.computer.game.placeShip([2, 5], 4, 'x');
  players.computer.game.placeShip([3, 2], 3, 'x');
  players.computer.game.placeShip([6, 2], 3, 'x');
  players.computer.game.placeShip([8, 2], 1, 'x');

  players.playerOneAttacks([0, 0]);
  players.playerOneAttacks([1, 0]);
  players.playerOneAttacks([2, 0]);
  players.playerOneAttacks([3, 0]);
  players.playerOneAttacks([4, 0]);
  players.playerOneAttacks([3, 2]);

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
/* eslint-disable consistent-return */



const Gameboard = () => {
  const buildBoard = () => {
    const board = [];
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        board.push([x, y]);
      }
    }
    return board;
  };

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
    // end of rows are 9,19,29,39,etc.
    // this checks if index is smaller than 9, and index + i is bigger than 9 return true. placement not allowed.
    for (let j = 9; j < 100; j += 10) {
      if (index <= j && index + i > j) {
        return true;
      }
    }
    return false;
  };

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
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    const index = board.findIndex(
      (element) => element[0] === coords[0] && element[1] === coords[1],
    );

    if (isPlacementUnavailable(index, length, direction)) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.error)('placement');
    }

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

    // Its not empty and not hit
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

    // Its not empty and hit
    if (
      whichPlayer.game.iStatus[i].isAttacked !== null &&
      whichPlayer.game.iStatus[i].ship !== null
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

    // Its suck
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


const Player = (player) => {
  const playerOne = {
    username: player,
    game: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    turn: true,
  };

  const computer = {
    username: 'Anonymous',
    game: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  };

  const newArr = [...playerOne.game.board];

  const computerAttacks = () => {
    if (playerOne.turn === false) {
      const randomIndex = Math.floor(Math.random() * newArr.length);
      const coords = newArr[randomIndex];
      playerOne.game.recieveAttack(coords);
      newArr.splice(randomIndex, 1);
      playerOne.turn = true;
    }
  };

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
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   gameStage: () => (/* binding */ gameStage),
/* harmony export */   handleBtns: () => (/* binding */ handleBtns),
/* harmony export */   howManyShips: () => (/* binding */ howManyShips)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* eslint-disable no-console */


const form = document.querySelector('form');
const soldierNameElement = document.getElementById('soldierName');
const landingPage = document.querySelector('.landing-page');
const gamePage = document.querySelector('.game-page');
const playerName = document.querySelector('.player-name');
const gameStatus = document.querySelector('.game-status');

const error = (type) => {
  let errorMessage = '';
  if (type === 'placement') {
    errorMessage += 'This placement is not allowed.';
  }
  console.error(errorMessage);
};

const handleBtns = () => {
  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.classList = 'landing-page hide';
    gamePage.classList.add('display');
    playerName.textContent = soldierName;
    (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])(soldierName);
  });
};

// Will be called during game-loop to change the message while game goes on.
const gameStage = (message) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYWktZ2VuZXJhdGVkLTgyMjgzNjdfMTkyMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbWFpbi1mb250OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcbn1cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxLCAyMiwgMzYsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC45KSksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5oMSxcbmgyLFxuaDMsXG5wLFxudWwsXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5sYW5kaW5nLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBnYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDh2aDtcbn1cbi5nZXQtcGxheWVyLWluZm8ge1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5mb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDM1dnc7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xufVxuZm9ybSBidXR0b24ge1xuICB3aWR0aDogMzB2dztcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nYW1lLXBhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdhbWUtcGFnZS5kaXNwbGF5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgODUlO1xufVxuLmdhbWUtc3RhdHVzIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiA4MHZ3O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IGNoYXJ0cmV1c2U7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyLW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmdyaWQtY29udGFpbmVyIHtcbiAgZ3JpZC1nYXA6IDJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xufVxuLmdyaWRJdGVtIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdyaWRJdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMjQzLCAyMzgpO1xufVxuLmVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNSwgMTQ4KTtcbn1cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xufVxuLnNoaXBIaXR0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cbi5taXNzZWRTaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xufVxuLmlzU3Vua2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmdhbWUtY29udGFpbmVyLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7O2tFQUVvRTtFQUNwRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7Ozs7OztFQU1FLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWZvbnQ6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMSwgMjIsIDM2LCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuOSkpLFxcbiAgICB1cmwoLi9hc3NldHMvYWktZ2VuZXJhdGVkLTgyMjgzNjdfMTkyMC5qcGcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxucCxcXG51bCxcXG5saSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubGFuZGluZy1wYWdlIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAxZnI7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbn1cXG4uZ2V0LXBsYXllci1pbmZvIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb3JtIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMzV2dztcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdhbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ2FtZS1wYWdlLmRpc3BsYXkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA4NSU7XFxufVxcbi5nYW1lLXN0YXR1cyB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGNoYXJ0cmV1c2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZ3JpZC1nYXA6IDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcbi5ncmlkSXRlbSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZEl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMjQzLCAyMzgpO1xcbn1cXG4uZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNSwgMTQ4KTtcXG59XFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbn1cXG4uc2hpcEhpdHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLm1pc3NlZFNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xcbn1cXG4uaXNTdW5rZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5nYW1lLWNvbnRhaW5lci5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgZGlzcGxheUdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCB7IGdhbWVTdGFnZSwgaG93TWFueVNoaXBzIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG5jb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1jb250YWluZXInKTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9IChuYW1lKSA9PiB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkLCB3aXRoIG5hbWUgYmVpbmcgaW5wLnZhbHVlXG4gIGNvbnN0IHBsYXllcnMgPSBQbGF5ZXIobmFtZSk7XG5cbiAgaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDApIHtcbiAgICBnYW1lU3RhZ2UoJ2NhcnJpZXInKTtcbiAgICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbMCwgMF0sIDUsICd5Jyk7XG4gIH1cbiAgaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDUpIHtcbiAgICBnYW1lU3RhZ2UoJ2JhdHRsZXNoaXAnKTtcbiAgICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbMCwgMV0sIDQsICd5Jyk7XG4gIH1cbiAgaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDkpIHtcbiAgICBnYW1lU3RhZ2UoJ2NydWlzZXInKTtcbiAgICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbMCwgNl0sIDMsICd4Jyk7XG4gIH1cbiAgaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDEyKSB7XG4gICAgZ2FtZVN0YWdlKCdzdWJtYXJpbmUnKTtcbiAgICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbNiwgMl0sIDMsICd4Jyk7XG4gIH1cbiAgaWYgKGhvd01hbnlTaGlwcyhwbGF5ZXJzLnBsYXllck9uZSkgPT09IDE1KSB7XG4gICAgZ2FtZVN0YWdlKCdkZXN0cm95ZXInKTtcbiAgICBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbOCwgOF0sIDIsICd4Jyk7XG4gIH1cbiAgLy8gcGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5wbGFjZVNoaXAoWzMsIDJdLCAzLCAneCcpO1xuICAvLyBwbGF5ZXJzLnBsYXllck9uZS5nYW1lLnBsYWNlU2hpcChbNiwgMl0sIDMsICd4Jyk7XG4gIC8vIHBsYXllcnMucGxheWVyT25lLmdhbWUucGxhY2VTaGlwKFs4LCAyXSwgMSwgJ3gnKTtcblxuICAvLyBUaGlzIHdpbGwgYmUgcmFuZG9tXG4gIHBsYXllcnMuY29tcHV0ZXIuZ2FtZS5wbGFjZVNoaXAoWzAsIDBdLCA1LCAneScpO1xuICBwbGF5ZXJzLmNvbXB1dGVyLmdhbWUucGxhY2VTaGlwKFsyLCA1XSwgNCwgJ3gnKTtcbiAgcGxheWVycy5jb21wdXRlci5nYW1lLnBsYWNlU2hpcChbMywgMl0sIDMsICd4Jyk7XG4gIHBsYXllcnMuY29tcHV0ZXIuZ2FtZS5wbGFjZVNoaXAoWzYsIDJdLCAzLCAneCcpO1xuICBwbGF5ZXJzLmNvbXB1dGVyLmdhbWUucGxhY2VTaGlwKFs4LCAyXSwgMSwgJ3gnKTtcblxuICBwbGF5ZXJzLnBsYXllck9uZUF0dGFja3MoWzAsIDBdKTtcbiAgcGxheWVycy5wbGF5ZXJPbmVBdHRhY2tzKFsxLCAwXSk7XG4gIHBsYXllcnMucGxheWVyT25lQXR0YWNrcyhbMiwgMF0pO1xuICBwbGF5ZXJzLnBsYXllck9uZUF0dGFja3MoWzMsIDBdKTtcbiAgcGxheWVycy5wbGF5ZXJPbmVBdHRhY2tzKFs0LCAwXSk7XG4gIHBsYXllcnMucGxheWVyT25lQXR0YWNrcyhbMywgMl0pO1xuXG4gIGRpc3BsYXlHcmlkKHBsYXllckNvbnRhaW5lciwgcGxheWVycy5wbGF5ZXJPbmUpO1xuICBkaXNwbGF5R3JpZChjb21wdXRlckNvbnRhaW5lciwgcGxheWVycy5jb21wdXRlcik7XG4gIGNvbnNvbGUubG9nKHBsYXllcnMpO1xufTtcblxuLy8gcGxheWVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbi8vICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcbi8vICAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuLy8gICByZXR1cm4gY29vcmRzO1xuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYnVpbGRCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSArPSAxKSB7XG4gICAgICAgIGJvYXJkLnB1c2goW3gsIHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkU3RhdHVzID0gKGFycikgPT4ge1xuICAgIGNvbnN0IGlTdGF0dXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaVN0YXR1c1tpXSA9IHtcbiAgICAgICAgaXNBdHRhY2tlZDogbnVsbCxcbiAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBpU3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICBjb25zdCBpU3RhdHVzID0gYm9hcmRTdGF0dXMoYm9hcmQpO1xuXG4gIGNvbnN0IGlzRGlmZmVyZW50Um93ID0gKGluZGV4LCBpKSA9PiB7XG4gICAgLy8gZW5kIG9mIHJvd3MgYXJlIDksMTksMjksMzksZXRjLlxuICAgIC8vIHRoaXMgY2hlY2tzIGlmIGluZGV4IGlzIHNtYWxsZXIgdGhhbiA5LCBhbmQgaW5kZXggKyBpIGlzIGJpZ2dlciB0aGFuIDkgcmV0dXJuIHRydWUuIHBsYWNlbWVudCBub3QgYWxsb3dlZC5cbiAgICBmb3IgKGxldCBqID0gOTsgaiA8IDEwMDsgaiArPSAxMCkge1xuICAgICAgaWYgKGluZGV4IDw9IGogJiYgaW5kZXggKyBpID4gaikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzUGxhY2VtZW50VW5hdmFpbGFibGUgPSAoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGlmIChpU3RhdHVzW2luZGV4ICsgaV0uc2hpcCAhPT0gbnVsbCB8fCBpc0RpZmZlcmVudFJvdyhpbmRleCwgaSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgICBpZiAoaW5kZXggKyBpICogMTAgPj0gMTAwIHx8IGlTdGF0dXNbaW5kZXggKyBpICogMTBdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkcywgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlU2hpcChsZW5ndGgpO1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgKTtcblxuICAgIGlmIChpc1BsYWNlbWVudFVuYXZhaWxhYmxlKGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbikpIHtcbiAgICAgIHJldHVybiBlcnJvcigncGxhY2VtZW50Jyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGlTdGF0dXNbaW5kZXggKyBpXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgICBpU3RhdHVzW2luZGV4ICsgaSAqIDEwXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmZpbmRJbmRleChcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50WzBdID09PSBjb29yZHNbMF0gJiYgZWxlbWVudFsxXSA9PT0gY29vcmRzWzFdLFxuICAgICk7XG4gICAgaWYgKGlTdGF0dXNbaW5kZXhdLnNoaXAgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgKTtcbiAgICBpU3RhdHVzW2luZGV4XS5pc0F0dGFja2VkID0gdHJ1ZTtcbiAgICBpZiAoaVN0YXR1c1tpbmRleF0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgaVN0YXR1c1tpbmRleF0uc2hpcC5iZWVuSGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBvY3VwcGllZFdpdGhTaGlwID0gaVN0YXR1cy5maWx0ZXIoKGluZGV4KSA9PiBpbmRleC5zaGlwICE9IG51bGwpO1xuICAgIGNvbnN0IGFsbFN1bmtlZCA9IG9jdXBwaWVkV2l0aFNoaXAuZXZlcnkoXG4gICAgICAoaW5kZXgpID0+IGluZGV4LnNoaXAuaXNJdFN1bmsgPT09IHRydWUsXG4gICAgKTtcbiAgICBpZiAoYWxsU3Vua2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgaVN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgaGFzU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IGRpc3BsYXlHcmlkID0gKGNvbnRhaW5lciwgd2hpY2hQbGF5ZXIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtJztcbiAgICBncmlkSXRlbS5kYXRhc2V0LmkgPSBpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG5cbiAgICAvLyBJdHMgZW1wdHkgYW5kIG5vdCBoaXRcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgPT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBlbXB0eSc7XG4gICAgfVxuXG4gICAgLy8gSXRzIG5vdCBlbXB0eSBhbmQgbm90IGhpdFxuICAgIGlmIChcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ3BsYXllci1jb250YWluZXInKSAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgPT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gc2hpcCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NvbXB1dGVyLWNvbnRhaW5lcicpICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBlbXB0eSc7XG4gICAgfVxuXG4gICAgLy8gSXRzIG5vdCBlbXB0eSBhbmQgaGl0XG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gc2hpcEhpdHRlZCc7XG4gICAgfVxuXG4gICAgLy8gSXRzIGVtcHR5IGFuZCBoaXRcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgPT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBtaXNzZWRTaG90JztcbiAgICB9XG5cbiAgICAvLyBJdHMgc3Vja1xuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcC5pc0l0U3VuayA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIGlzU3Vua2VkJztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHcmlkO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVCdG5zIH0gZnJvbSAnLi91dGlscyc7XG5cbmhhbmRsZUJ0bnMoKTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jb25zdCBQbGF5ZXIgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZSA9IHtcbiAgICB1c2VybmFtZTogcGxheWVyLFxuICAgIGdhbWU6IEdhbWVib2FyZCgpLFxuICAgIHR1cm46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXIgPSB7XG4gICAgdXNlcm5hbWU6ICdBbm9ueW1vdXMnLFxuICAgIGdhbWU6IEdhbWVib2FyZCgpLFxuICB9O1xuXG4gIGNvbnN0IG5ld0FyciA9IFsuLi5wbGF5ZXJPbmUuZ2FtZS5ib2FyZF07XG5cbiAgY29uc3QgY29tcHV0ZXJBdHRhY2tzID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV3QXJyLmxlbmd0aCk7XG4gICAgICBjb25zdCBjb29yZHMgPSBuZXdBcnJbcmFuZG9tSW5kZXhdO1xuICAgICAgcGxheWVyT25lLmdhbWUucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgbmV3QXJyLnNwbGljZShyYW5kb21JbmRleCwgMSk7XG4gICAgICBwbGF5ZXJPbmUudHVybiA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllck9uZUF0dGFja3MgPSAoY29vcmRzKSA9PiB7XG4gICAgaWYgKHBsYXllck9uZS50dXJuID09PSB0cnVlKSB7XG4gICAgICBjb21wdXRlci5nYW1lLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICAgIHBsYXllck9uZS50dXJuID0gZmFsc2U7XG4gICAgICBjb21wdXRlckF0dGFja3MoKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9uZS50dXJuID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgeW91ciB0dXJuIHRvIHBsYXknKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcGxheWVyT25lLCBjb21wdXRlciwgcGxheWVyT25lQXR0YWNrcywgY29tcHV0ZXJBdHRhY2tzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBjcmVhdGVTaGlwID0gKGxlbmd0aCkgPT4gKHtcbiAgbGVuZ3RoLFxuICBoaXRzOiAwLFxuICBpc0l0U3VuazogZmFsc2UsXG4gIGJlZW5IaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfSxcbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNJdFN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IHNvbGRpZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2xkaWVyTmFtZScpO1xuY29uc3QgbGFuZGluZ1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wYWdlJyk7XG5jb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXBhZ2UnKTtcbmNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW5hbWUnKTtcbmNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMnKTtcblxuY29uc3QgZXJyb3IgPSAodHlwZSkgPT4ge1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gIGlmICh0eXBlID09PSAncGxhY2VtZW50Jykge1xuICAgIGVycm9yTWVzc2FnZSArPSAnVGhpcyBwbGFjZW1lbnQgaXMgbm90IGFsbG93ZWQuJztcbiAgfVxuICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XG59O1xuXG5jb25zdCBoYW5kbGVCdG5zID0gKCkgPT4ge1xuICAvKiBUaGlzIGV2ZW50IGxpc3RlbmVyIHdpbGwgc3RhcnQgdGhlIGdhbWUgYnkgY2FsbGluZyBpbml0aWFsaXplIGZ1bmN0aW9uIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCB0ZXh0IGFzIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIsXG4gICBsYW5kaW5nIHBhZ2Ugd2lsbCBoaWRlLCBnYW1lIHBhZ2Ugd2lsbCBkaXNwbGF5IGFuZCBwbGF5ZXItbmFtZSBhcyBhIG5ldyBuYW1lICovXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzb2xkaWVyTmFtZSA9IHNvbGRpZXJOYW1lRWxlbWVudC52YWx1ZTtcbiAgICBsYW5kaW5nUGFnZS5jbGFzc0xpc3QgPSAnbGFuZGluZy1wYWdlIGhpZGUnO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gc29sZGllck5hbWU7XG4gICAgaW5pdGlhbGl6ZShzb2xkaWVyTmFtZSk7XG4gIH0pO1xufTtcblxuLy8gV2lsbCBiZSBjYWxsZWQgZHVyaW5nIGdhbWUtbG9vcCB0byBjaGFuZ2UgdGhlIG1lc3NhZ2Ugd2hpbGUgZ2FtZSBnb2VzIG9uLlxuY29uc3QgZ2FtZVN0YWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgaWYgKG1lc3NhZ2UgPT09ICdjYXJyaWVyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgY2Fycmllci4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBiYXR0bGVzaGlwLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnY3J1aXNlcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGNydWlzZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBzdWJtYXJpbmUuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBkZXN0cm95ZXIuLi4nO1xuICB9XG59O1xuXG4vKiBUaGlzIHdpbGwgcmV0dXJuIGhvdyBtYW55IHNoaXBzIGFyZSBpbiBwbGF5ZXIgZ2FtZWJvYXJkLlxuSXQgd2lsbCBiZSB1c2VmdWxsIHRvIGNoZWNrIGlmIHRoZXJlJ3Mgb25seSA1IHNoaXAgaW5kZXhlcywgXG50aGF0IG1lYW5zIG9ubHkgdGhlIGNhcnJpZXIgd2FzIHBsYWNlZCBhbmQgd2UgY2FuIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHBsYWNlbWVudC4gKi9cbmNvbnN0IGhvd01hbnlTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3Qgb2N1cHBpZWRXaXRoU2hpcCA9IHBsYXllci5nYW1lLmlTdGF0dXMuZmlsdGVyKFxuICAgIChpbmRleCkgPT4gaW5kZXguc2hpcCAhPSBudWxsLFxuICApO1xuICBjb25zdCBob3dNYW55U2hpcEluZGV4ZXMgPSBvY3VwcGllZFdpdGhTaGlwLmxlbmd0aDtcbiAgcmV0dXJuIGhvd01hbnlTaGlwSW5kZXhlcztcbn07XG5cbmV4cG9ydCB7IGVycm9yLCBoYW5kbGVCdG5zLCBnYW1lU3RhZ2UsIGhvd01hbnlTaGlwcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9