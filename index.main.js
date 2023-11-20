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
    linear-gradient(rgba(6, 97, 158, 0.2), rgba(0, 0, 0, 0.4)),
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
  transition: all 0.3s ease;
}
.header .title:hover {
  margin-right: 20px;
  transform: scale(1.1);
}
.get-player-info {
  margin: 75px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.get-player-info:hover {
  margin: 30px;
  background-color: rgba(0, 0, 0, 0.6);
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
  font-size: 3rem;
  text-align: center;
}
form input {
  width: 35vw;
  min-width: 200px;
  padding: 10px;
  font-size: 3rem;
  border-radius: 5px;
  border: none;
  font-family: var(--main-font);
  color: white;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
form input:hover {
  background-color: #3498db;
  transform: scale(1.1);
}
form input:focus {
  background-color: #3498db;
  transform: scale(1.1);
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
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
form button:hover {
  background-color: #3498db;
  color: #fff;
  border-color: #fff;
  transform: scale(1.1);
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
  transition: all 0.3s ease;
}
.game-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
}
.player-name {
  text-transform: uppercase;
  font-size: 40px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  gap: 3px;
}
.gridItem {
  width: 30px;
  height: 30px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}
.gridItem:hover {
  background-color: rgb(135, 243, 238);
  transform: scale(1.1);
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
  border-radius: 20px;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;

  background-color: rgba(0, 0, 0, 0.6);
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
  left: 30%;
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
  border: 3px solid white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  transition: all 0.3s ease;
}
.game-over-container:hover {
  transform: scale(1.1);
}
.winner {
  font-size: 5rem;
  text-align: center;
}
.restart-game {
  width: 15vw;
  height: 15vh;
  font-size: 3rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.restart-game:hover {
  transform: scale(1.1);
  background-color: #3498db;
  color: #fff;
  border-color: #fff;
}
@media only screen and (max-width: 768px) {
  body {
    background: linear-gradient(rgba(3, 23, 36, 0.7), rgba(0, 0, 0, 1)),
      url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .header .title {
    font-size: 3rem;
  }
  form label {
    font-size: 1.5rem;
  }
  form input {
    font-size: 1.5rem;
    width: 50%;
    min-width: 20vw;
  }
  .game-page.display {
    height: 150vh;
    display: grid;
    grid-template-rows: 15% 15% 70%;
  }
  .game-status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .game-container {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
  .game-status {
    font-size: 1rem;
  }
  .player-name {
    font-size: 1.2rem;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(10, 25px);
  }
  .gridItem {
    width: 25px;
    height: 25px;
  }
  .unplaced-ship {
    width: 25px;
    height: 25px;
  }

  footer {
    width: 100%;
    height: 20vh;
    border-radius: 0;
    grid-row: 2/3;
  }
  .rotate-btn {
    padding: 0;
    height: 60px;
    left: 5%;
    top: 25%;
  }
  .game-over {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999; /* Adjust the z-index as needed */
    height: 150vh;
  }
  .game-over-container {
    width: 100%;
  }
  .winner {
    font-size: 2rem;
  }
  .restart-game {
    width: 70vw;
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf;;kEAEoE;EACpE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;;;;;EAME,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,qDAAqD;AACvD;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,yDAAyD;AAC3D;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;;EAEpB,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,yDAAyD;AAC3D;AACA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE;IACE;6CAC6C;IAC7C,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;EAC9B;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,UAAU;IACV,eAAe;EACjB;EACA;IACE,aAAa;IACb,aAAa;IACb,+BAA+B;EACjC;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,kCAAkC;IAClC,2BAA2B;EAC7B;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,uCAAuC;EACzC;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;EACf;EACA;IACE,UAAU;IACV,YAAY;IACZ,QAAQ;IACR,QAAQ;EACV;EACA;IACE,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,oCAAoC;IACpC,YAAY,EAAE,iCAAiC;IAC/C,aAAa;EACf;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;IACX,eAAe;EACjB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');\n\n:root {\n  --main-font: 'Allerta Stencil', sans-serif;\n}\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  background:\n    linear-gradient(rgba(6, 97, 158, 0.2), rgba(0, 0, 0, 0.4)),\n    url(./assets/ai-generated-8228367_1920.jpg) center/cover no-repeat;\n  color: white;\n  font-family: var(--main-font);\n}\nh1,\nh2,\nh3,\np,\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n.landing-page {\n  height: 100vh;\n  gap: 20px;\n  grid-template-rows: 15% 1fr;\n  display: grid;\n}\n.hide {\n  display: none;\n}\n.header {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header .title {\n  font-size: 8vh;\n  transition: all 0.3s ease;\n}\n.header .title:hover {\n  margin-right: 20px;\n  transform: scale(1.1);\n}\n.get-player-info {\n  margin: 75px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.get-player-info:hover {\n  margin: 30px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\nform {\n  width: 100%;\n  gap: 50px;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  font-size: 3rem;\n  text-align: center;\n}\nform input {\n  width: 35vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 3rem;\n  border-radius: 5px;\n  border: none;\n  font-family: var(--main-font);\n  color: white;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\nform input:hover {\n  background-color: #3498db;\n  transform: scale(1.1);\n}\nform input:focus {\n  background-color: #3498db;\n  transform: scale(1.1);\n}\nform button {\n  width: 30vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 4px;\n  font-family: var(--main-font);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\nform button:hover {\n  background-color: #3498db;\n  color: #fff;\n  border-color: #fff;\n  transform: scale(1.1);\n}\n.game-page {\n  display: none;\n}\n.game-page.display {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 16% 64% 20%;\n}\n.game-status {\n  height: 5vh;\n  width: 80vw;\n  font-size: 2rem;\n  border-radius: 5px;\n  color: chartreuse;\n  background-color: black;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-items: center;\n  transition: all 0.3s ease;\n}\n.game-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.player-name {\n  text-transform: uppercase;\n  font-size: 40px;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  gap: 3px;\n}\n.gridItem {\n  width: 30px;\n  height: 30px;\n  border: 3px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.gridItem:hover {\n  background-color: rgb(135, 243, 238);\n  transform: scale(1.1);\n}\n\n.empty {\n  background-color: rgb(0, 105, 148);\n}\n.ship {\n  background-color: rgb(77, 77, 77);\n}\n.shipHitted {\n  background-color: rgb(255, 0, 0);\n}\n.missedShot {\n  background-color: rgb(192, 192, 192);\n}\n.isSunked {\n  background-color: black;\n}\nfooter {\n  border-radius: 20px;\n  width: 60vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.ships-container.x {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.ships-container.y {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.unplaced-ship {\n  width: 30px;\n  height: 30px;\n  background-color: grey;\n  border: 1px solid black;\n  cursor: pointer;\n}\n.rotate-btn {\n  display: none;\n  font-size: 2rem;\n  bottom: 8%;\n  left: 30%;\n  position: absolute;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n.rotate-btn.display {\n  display: block;\n}\n.game-over {\n  display: none;\n  visibility: hidden;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center;\n}\n.game-over.display {\n  display: flex;\n  visibility: visible;\n}\n.game-over-container {\n  width: 30vw;\n  height: 60vh;\n  border-radius: 20px;\n  border: 3px solid white;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 20px;\n  transition: all 0.3s ease;\n}\n.game-over-container:hover {\n  transform: scale(1.1);\n}\n.winner {\n  font-size: 5rem;\n  text-align: center;\n}\n.restart-game {\n  width: 15vw;\n  height: 15vh;\n  font-size: 3rem;\n  border-radius: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n.restart-game:hover {\n  transform: scale(1.1);\n  background-color: #3498db;\n  color: #fff;\n  border-color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  body {\n    background: linear-gradient(rgba(3, 23, 36, 0.7), rgba(0, 0, 0, 1)),\n      url(./assets/ai-generated-8228367_1920.jpg);\n    background-size: cover;\n    background-position: center center;\n    background-attachment: fixed;\n  }\n  .header .title {\n    font-size: 3rem;\n  }\n  form label {\n    font-size: 1.5rem;\n  }\n  form input {\n    font-size: 1.5rem;\n    width: 50%;\n    min-width: 20vw;\n  }\n  .game-page.display {\n    height: 150vh;\n    display: grid;\n    grid-template-rows: 15% 15% 70%;\n  }\n  .game-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .game-container {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: none;\n  }\n  .game-status {\n    font-size: 1rem;\n  }\n  .player-name {\n    font-size: 1.2rem;\n  }\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n  }\n  .gridItem {\n    width: 25px;\n    height: 25px;\n  }\n  .unplaced-ship {\n    width: 25px;\n    height: 25px;\n  }\n\n  footer {\n    width: 100%;\n    height: 20vh;\n    border-radius: 0;\n    grid-row: 2/3;\n  }\n  .rotate-btn {\n    padding: 0;\n    height: 60px;\n    left: 5%;\n    top: 25%;\n  }\n  .game-over {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 999; /* Adjust the z-index as needed */\n    height: 150vh;\n  }\n  .game-over-container {\n    width: 100%;\n  }\n  .winner {\n    font-size: 2rem;\n  }\n  .restart-game {\n    width: 70vw;\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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

      lobbyPlayers.computer.game.placeShip(
        randomIndex,
        diretion[randomDiretion],
      );
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
/* harmony import */ var _assets_ship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ship.png */ "./src/assets/ship.png");




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
  const footer = document.querySelector('footer');
  if (length === 'completed') {
    // Removes the unplaced ships and the rotate button
    footer.style.visibility = 'hidden';
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

/***/ }),

/***/ "./src/assets/ship.png":
/*!*****************************!*\
  !*** ./src/assets/ship.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "135ace9868c46559118a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxV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Q0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkNBQUk7QUFDUjs7QUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9haS1nZW5lcmF0ZWQtODIyODM2N18xOTIwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWZvbnQ6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDYsIDk3LCAxNTgsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5oMSxcbmgyLFxuaDMsXG5wLFxudWwsXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5sYW5kaW5nLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBnYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDh2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5oZWFkZXIgLnRpdGxlOmhvdmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uZ2V0LXBsYXllci1pbmZvIHtcbiAgbWFyZ2luOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmdldC1wbGF5ZXItaW5mbzpob3ZlciB7XG4gIG1hcmdpbjogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAzNXZ3O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcbn1cbmZvcm0gaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5mb3JtIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuZm9ybSBidXR0b24ge1xuICB3aWR0aDogMzB2dztcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uZ2FtZS1wYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nYW1lLXBhZ2UuZGlzcGxheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTYlIDY0JSAyMCU7XG59XG4uZ2FtZS1zdGF0dXMge1xuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDgwdnc7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogY2hhcnRyZXVzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXItbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ2FwOiAzcHg7XG59XG4uZ3JpZEl0ZW0ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZEl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyNDMsIDIzOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNSwgMTQ4KTtcbn1cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xufVxuLnNoaXBIaXR0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cbi5taXNzZWRTaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xufVxuLmlzU3Vua2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5mb290ZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogNjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5zaGlwcy1jb250YWluZXIueCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnNoaXBzLWNvbnRhaW5lci55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udW5wbGFjZWQtc2hpcCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm90YXRlLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm90dG9tOiA4JTtcbiAgbGVmdDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJvdGF0ZS1idG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdhbWUtb3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ2FtZS1vdmVyLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmdhbWUtb3Zlci1jb250YWluZXIge1xuICB3aWR0aDogMzB2dztcbiAgaGVpZ2h0OiA2MHZoO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZ2FtZS1vdmVyLWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi53aW5uZXIge1xuICBmb250LXNpemU6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXN0YXJ0LWdhbWUge1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiAxNXZoO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcbn1cbi5yZXN0YXJ0LWdhbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDMsIDIzLCAzNiwgMC43KSwgcmdiYSgwLCAwLCAwLCAxKSksXG4gICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIH1cbiAgLmhlYWRlciAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBmb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBmb3JtIGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMjB2dztcbiAgfVxuICAuZ2FtZS1wYWdlLmRpc3BsYXkge1xuICAgIGhlaWdodDogMTUwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAxNSUgNzAlO1xuICB9XG4gIC5nYW1lLXN0YXR1cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5nYW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcbiAgfVxuICAuZ2FtZS1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAucGxheWVyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XG4gIH1cbiAgLmdyaWRJdGVtIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbiAgLnVucGxhY2VkLXNoaXAge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgfVxuICAucm90YXRlLWJ0biB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAyNSU7XG4gIH1cbiAgLmdhbWUtb3ZlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogOTk5OyAvKiBBZGp1c3QgdGhlIHotaW5kZXggYXMgbmVlZGVkICovXG4gICAgaGVpZ2h0OiAxNTB2aDtcbiAgfVxuICAuZ2FtZS1vdmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpbm5lciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5yZXN0YXJ0LWdhbWUge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7O2tFQUVvRTtFQUNwRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7Ozs7OztFQU1FLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gs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RDtBQUMzRDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFOzZDQUM2QztJQUM3QyxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsUUFBUTtFQUNWO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZLEVBQUUsaUNBQWlDO0lBQy9DLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLW1haW4tZm9udDogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCA5NywgMTU4LCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLFxcbiAgICB1cmwoLi9hc3NldHMvYWktZ2VuZXJhdGVkLTgyMjgzNjdfMTkyMC5qcGcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxucCxcXG51bCxcXG5saSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubGFuZGluZy1wYWdlIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAxZnI7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmhlYWRlciAudGl0bGU6aG92ZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uZ2V0LXBsYXllci1pbmZvIHtcXG4gIG1hcmdpbjogNzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmdldC1wbGF5ZXItaW5mbzpob3ZlciB7XFxuICBtYXJnaW46IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbn1cXG5mb3JtIGlucHV0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbn1cXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5nYW1lLXBhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmdhbWUtcGFnZS5kaXNwbGF5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNiUgNjQlIDIwJTtcXG59XFxuLmdhbWUtc3RhdHVzIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogY2hhcnRyZXVzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdhcDogM3B4O1xcbn1cXG4uZ3JpZEl0ZW0ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdyaWRJdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDI0MywgMjM4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDUsIDE0OCk7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG59XFxuLnNoaXBIaXR0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcbi5taXNzZWRTaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG59XFxuLmlzU3Vua2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5mb290ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG4uc2hpcHMtY29udGFpbmVyLngge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5zaGlwcy1jb250YWluZXIueSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnVucGxhY2VkLXNoaXAge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5yb3RhdGUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3R0b206IDglO1xcbiAgbGVmdDogMzAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5yb3RhdGUtYnRuLmRpc3BsYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5nYW1lLW92ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdhbWUtb3Zlci5kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uZ2FtZS1vdmVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogNjB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmdhbWUtb3Zlci1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ud2lubmVyIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJlc3RhcnQtZ2FtZSB7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogMTV2aDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcXG59XFxuLnJlc3RhcnQtZ2FtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgzLCAyMywgMzYsIDAuNyksIHJnYmEoMCwgMCwgMCwgMSkpLFxcbiAgICAgIHVybCguL2Fzc2V0cy9haS1nZW5lcmF0ZWQtODIyODM2N18xOTIwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB9XFxuICAuaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIGZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIGZvcm0gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLXdpZHRoOiAyMHZ3O1xcbiAgfVxcbiAgLmdhbWUtcGFnZS5kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAxNTB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgMTUlIDcwJTtcXG4gIH1cXG4gIC5nYW1lLXN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLmdhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xcbiAgfVxcbiAgLmdhbWUtc3RhdHVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLnBsYXllci1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAuZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICB9XFxuICAuZ3JpZEl0ZW0ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbiAgLnVucGxhY2VkLXNoaXAge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIC5yb3RhdGUtYnRuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgdG9wOiAyNSU7XFxuICB9XFxuICAuZ2FtZS1vdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgei1pbmRleDogOTk5OyAvKiBBZGp1c3QgdGhlIHotaW5kZXggYXMgbmVlZGVkICovXFxuICAgIGhlaWdodDogMTUwdmg7XFxuICB9XFxuICAuZ2FtZS1vdmVyLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5yZXN0YXJ0LWdhbWUge1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZGlzcGxheUdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCB7IGdhbWVTdGFnZSwgZGlzcGxheVVucGxhY2VkU2hpcCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBGdW5jdGlvbiBjcmVhdGVkIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGFuIGV4cG9ydGVkIHZhcmlhYmxlLiBmb3JtLmFkZEV2ZW50XG5sZXQgbG9iYnlQbGF5ZXJzO1xuZnVuY3Rpb24gc2V0SHVtYW5OYW1lKG5hbWUpIHtcbiAgbG9iYnlQbGF5ZXJzID0gbmFtZTtcbn1cblxuY29uc3QgZ2FtZSA9IChzdGFnZSkgPT4ge1xuICBpZiAoc3RhZ2UgPT09ICdzdGFnZTEnKSB7XG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcbiAgICBjb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1jb250YWluZXInKTtcbiAgICBkaXNwbGF5R3JpZChwbGF5ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUpO1xuICAgIGRpc3BsYXlHcmlkKGNvbXB1dGVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMuY29tcHV0ZXIpO1xuICAgIGdhbWVTdGFnZSgnY2FycmllcicpO1xuICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoNSk7XG4gICAgd2hpbGUgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmhvd01hbnlTaGlwcygpICE9PSAxNykge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3QgZGlyZXRpb24gPSBbJ3knLCAneCddO1xuICAgICAgY29uc3QgcmFuZG9tRGlyZXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUucGxhY2VTaGlwKFxuICAgICAgICByYW5kb21JbmRleCxcbiAgICAgICAgZGlyZXRpb25bcmFuZG9tRGlyZXRpb25dLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhZ2UgPT09ICdzdGFnZTInKSB7XG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcbiAgICBkaXNwbGF5R3JpZChwbGF5ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUpO1xuICAgIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDUpIHtcbiAgICAgIGdhbWVTdGFnZSgnYmF0dGxlc2hpcCcpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCg0KTtcbiAgICB9IGVsc2UgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gOSkge1xuICAgICAgZ2FtZVN0YWdlKCdjcnVpc2VyJyk7XG4gICAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDMpO1xuICAgIH0gZWxzZSBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmhvd01hbnlTaGlwcygpID09PSAxMikge1xuICAgICAgZ2FtZVN0YWdlKCdzdWJtYXJpbmUnKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoMyk7XG4gICAgfSBlbHNlIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDE1KSB7XG4gICAgICBnYW1lU3RhZ2UoJ2Rlc3Ryb3llcicpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCgyKTtcbiAgICB9IGVsc2UgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gMTcpIHtcbiAgICAgIGdhbWVTdGFnZSgnYWxsU2hpcHNQbGFjZWQnKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoJ2NvbXBsZXRlZCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGdhbWUoJ3N0YWdlMycpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YWdlID09PSAnc3RhZ2UzJykge1xuICAgIGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG4gICAgZ2FtZVN0YWdlKCdhdHRhY2snKTtcbiAgICBjb21wdXRlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIEdldCB0aGUgZS50YXJnZXRJZCBhbmQgcGFyc2VJbnQgdG8gbnVtXG4gICAgICBjb25zdCB0YXJnZXRJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaSk7XG5cbiAgICAgIC8vIElmIHRoZSBjb29yZHMgb2YgdGhlIGF0dGFjayBpcyBhbHJlYWR5IGF0dGFja2VkLCByZXR1cm4uXG4gICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaVN0YXR1c1t0YXJnZXRJZF0uaXNBdHRhY2tlZCA9PT0gbnVsbCkge1xuICAgICAgICBsb2JieVBsYXllcnMucGxheWVyT25lQXR0YWNrcyh0YXJnZXRJZCk7XG4gICAgICAgIGRpc3BsYXlHcmlkKGNvbXB1dGVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMuY29tcHV0ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiBJZiB0aGUgY29tcHV0ZXIgaGFzIGEgc2hpcCBvbiBpbmRleCh0YXJnZXRJZCksXG4gICAgICBzZXQgbWVzc2FnZSAnWW91IGhpdCBhIHNoaXAhJywgdHdvIHNlY29uZHMgYWZ0ZXIoSWYgY29tcHV0ZXIgc3RpbGwgaGFzIHNoaXBzKSxcbiAgICAgIG1lc3NhZ2UgdGhhdCBjb21wdXRlciB3aWxsIGF0dGFjaywgYW5kIHR3byBzZWNvbmRzIGFmdGVyIHRoYXQgbWVzc2FnZSB3aWxsIGRpc3BsYXkgdGhhdCByYW5kb20gYXR0YWNrICovXG4gICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaGFzU2hpcCh0YXJnZXRJZCkpIHtcbiAgICAgICAgZ2FtZVN0YWdlKCdhdHRhY2tlZFNoaXAnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlTdGF0dXNbdGFyZ2V0SWRdLnNoaXAuaXNJdFN1bmsgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2FtZVN0YWdlKCdzaGlwRG93bicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlzQWxsU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZVN0YWdlKCdjb21wdXRlckF0dGFja3MnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlckF0dGFja3MoKTtcbiAgICAgICAgICAgIGRpc3BsYXlHcmlkKHBsYXllckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLnBsYXllck9uZSk7XG4gICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBFbHNlID0+IHRoZSBjb21wdXRlciBkb2Vzbid0IGhhdmUgYSBzaGlwIG9uIGluZGV4KHRhcmdldElkKSxcbiAgICAgICAgc2V0IG1lc3NhZ2UgdGhhdCBwbGF5ZXIgbWlzc2VkIHRoZSBjb21wdXRlcnMgc2hpcCwgYWZ0ZXIgdHdvIHNlY29uZHMsIFxuICAgICAgICB3aWxsIGRvIHRoZSBzYW1lIGFzIHdoZW4gY29tcHV0ZXIgaGFzIHNoaXAgKi9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVTdGFnZSgnbWlzc2VkU2hpcCcpO1xuICAgICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaXNBbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lU3RhZ2UoJ2NvbXB1dGVyQXR0YWNrcycpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyQXR0YWNrcygpO1xuICAgICAgICAgICAgZGlzcGxheUdyaWQocGxheWVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMucGxheWVyT25lKTtcbiAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhbGwgc3VuaywgbWVzc2FnZSB0aGF0IGdhbWUgaXMgb3ZlciBhbmQgY2FsbCBzdGFnZT0nZ2FtZU92ZXInXG4gICAgICBpZiAoXG4gICAgICAgIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5pc0FsbFN1bmsoKSB8fFxuICAgICAgICBsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pc0FsbFN1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIGdhbWVTdGFnZSgnZ2FtZU92ZXInKTtcbiAgICAgICAgZ2FtZSgnZ2FtZU92ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChzdGFnZSA9PT0gJ2dhbWVPdmVyJykge1xuICAgIGNvbnN0IGdhbWVPdmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKTtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG4gICAgZ2FtZU92ZXJIVE1MLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmlzQWxsU3VuaygpKSB7XG4gICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnWW91IGxvc3QgdGhlIHdhcic7XG4gICAgfVxuICAgIGlmIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pc0FsbFN1bmsoKSkge1xuICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gJ1lvdSB3b24gdGhlIHdhcic7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBnYW1lLCBsb2JieVBsYXllcnMsIHNldEh1bWFuTmFtZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgLy8gY3JlYXRlcyBhbiBhcnJheSB3aXRoIGNvb3JkZW5hdGVzXG4gIGNvbnN0IGJ1aWxkQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgICBib2FyZC5wdXNoKFt4LCB5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICAvLyBjcmVhdGVzIGFuIGFycmF5IGZvciBlYWNoIGNvb2RlbmF0ZSBmcm9tIGJvYXJkIGFycmF5XG4gIGNvbnN0IGJvYXJkU3RhdHVzID0gKGFycikgPT4ge1xuICAgIGNvbnN0IGlTdGF0dXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaVN0YXR1c1tpXSA9IHtcbiAgICAgICAgaXNBdHRhY2tlZDogbnVsbCxcbiAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBpU3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICBjb25zdCBpU3RhdHVzID0gYm9hcmRTdGF0dXMoYm9hcmQpO1xuXG4gIGNvbnN0IGlzRGlmZmVyZW50Um93ID0gKGluZGV4LCBpKSA9PiB7XG4gICAgLyogVGhlIGVuZCBvZiByb3cgZW5kcyBieSA5IFs5LDE5LDI5LDM5LDQ5LDU5LDY5LDc5LDg5LDk5XSBcbiAgICBJZiBpbmRleCBpcyBzbWFsbGVyIHRoYW4gOShleGFtcGxlKSwgYW5kIGluZGV4ICsgaSBpcyBiaWdnZXIgdGhhbiA5IHJldHVybiB0cnVlLiBwbGFjZW1lbnQgbm90IGFsbG93ZWQgKi9cbiAgICBmb3IgKGxldCBqID0gOTsgaiA8IDEwMDsgaiArPSAxMCkge1xuICAgICAgaWYgKGluZGV4IDw9IGogJiYgaW5kZXggKyBpID4gaikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIENhbGxlZCBvbiBwbGFjZVNoaXAoKSwgcmV0dXJucyB0cnVlIGlmIGl0cyBVTmF2YWlsYWJsZSBcbiAgRm9yIGhvcml6b250YWwgaWYgKGluZGV4ICsgaSkgaGFzIHNoaXAgb3IgaWYgaXRzIGRpZmZlcmVudCByb3cgcmV0dXJuXG4gIEZvciB2ZXJ0aWNhbCwgaW5kZXhlcyBnbyAxMCBhZnRlciAxMCwgaWYgKGluZGV4ICsgaSAqIDEwKWhhcyBzaGlwIG9yXG4gIGlmIChpbmRleCArIGkgKiAxMCkgaXMgYmlnZ2VyIG9yIGVxdWFsIHRoYW4gMTAwIHJldHVybiwgYmVjYXVzZSB0aGUgYmlnZ2VzdCBpbmRleCBpcyA5OSAqL1xuICBjb25zdCBpc1BsYWNlbWVudFVuYXZhaWxhYmxlID0gKGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd4Jykge1xuICAgICAgICBpZiAoaVN0YXR1c1tpbmRleCArIGldLnNoaXAgIT09IG51bGwgfHwgaXNEaWZmZXJlbnRSb3coaW5kZXgsIGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgICAgaWYgKGluZGV4ICsgaSAqIDEwID49IDEwMCB8fCBpU3RhdHVzW2luZGV4ICsgaSAqIDEwXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIFRoaXMgd2lsbCByZXR1cm4gaG93IG1hbnkgc2hpcHMgYXJlIGluIHBsYXllciBnYW1lYm9hcmQuXG4gIEl0IHdpbGwgYmUgdXNlZnVsbCB0byBjaGVjayBpZiB0aGVyZSdzIG9ubHkgNSBzaGlwIGluZGV4ZXMsIFxuICB0aGF0IG1lYW5zIG9ubHkgdGhlIGNhcnJpZXIgd2FzIHBsYWNlZCBhbmQgd2UgY2FuIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHBsYWNlbWVudC4gKi9cbiAgY29uc3QgaG93TWFueVNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9jdXBwaWVkV2l0aFNoaXAgPSBpU3RhdHVzLmZpbHRlcigoaW5kZXgpID0+IGluZGV4LnNoaXAgIT0gbnVsbCk7XG4gICAgY29uc3QgaG93TWFueVNoaXBJbmRleGVzID0gb2N1cHBpZWRXaXRoU2hpcC5sZW5ndGg7XG4gICAgcmV0dXJuIGhvd01hbnlTaGlwSW5kZXhlcztcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgaW5kZXggPSBjb29yZHM7XG4gICAgbGV0IGxlbmd0aDtcblxuICAgIC8vIEZpcnN0IGNyZWF0ZXMgYSBzaGlwIHdpdGggbGVuZ3RoIHBhc3NlZCBhcyBwYXJhbWV0ZXI7XG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGJvYXJkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgY29vcmRzIHBhcmFtYXRlcnM7XG5cbiAgICAvLyBJZiBjb29yZHMgaXMgZ2l2ZW4gd2l0aCBhbiBhcnJheSBbMCwwXSwgbmV4dCBzdGVwIGlzIGZpbmQgdGhlIGluZGV4XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29vcmRzKSkge1xuICAgICAgaW5kZXggPSBib2FyZC5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50WzBdID09PSBjb29yZHNbMF0gJiYgZWxlbWVudFsxXSA9PT0gY29vcmRzWzFdLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiBFdmVyeXRpbWUgd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIHdlIGNoZWNrIGhvdyBtYW55IHNoaXBzIGFyZSBpbiB0aGUgZ2FtZWJvYXJkLCBcbiAgICBpcyB0aGUgc2FtZSBhcyBzYXlpbmcgaG93IG1hbnkgdGltZXMgd2FzIHRoaXMgZnVjbnRpb24gc3VjZXNzZnVseSBjYWxsZWQobm8gcGxhY2VtZW50IHVuYXZhaWxhYmxlKSwgXG4gICAgd2lsbCBjaGFuZ2UgdGhlIGxlbmd0aC4gICovXG5cbiAgICBpZiAoaG93TWFueVNoaXBzKCkgPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgfSBlbHNlIGlmIChob3dNYW55U2hpcHMoKSA9PT0gNSkge1xuICAgICAgbGVuZ3RoID0gNDtcbiAgICB9IGVsc2UgaWYgKGhvd01hbnlTaGlwcygpID09PSA5KSB7XG4gICAgICBsZW5ndGggPSAzO1xuICAgIH0gZWxzZSBpZiAoaG93TWFueVNoaXBzKCkgPT09IDEyKSB7XG4gICAgICBsZW5ndGggPSAzO1xuICAgIH0gZWxzZSBpZiAoaG93TWFueVNoaXBzKCkgPT09IDE1KSB7XG4gICAgICBsZW5ndGggPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoKTtcblxuICAgIC8vIElmIHBsYWNlbWVudCBpcyBub3QgYWxsb3dlZCByZXR1cm4gZXJyb3I7XG4gICAgaWYgKGlzUGxhY2VtZW50VW5hdmFpbGFibGUoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdwbGFjZW1lbnQnKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGxvb3BzIHdpbGwgY29udGludWUgYXMgbG9uZyBhcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIGlzIG5vdCByZWFjaGVkLlxuICAgIElmIGRpcmVjdGlvbiBpcyB4IChob3Jpem9udGFsKSwgdGhlIGluZGV4IGlzIG9uZSBhZnRlciB0aGUgb25lLCBzbyB0aGUgaW5kZXggKyBpID0gbmV3U2hpcFxuICAgIElmIGRpcmVjdGlvbiBpcyB5ICh2ZXJ0aWNhbCksIHRoZSBpbmRleCBpcyAxMCBhZnRlciAxMCwgc28gdGhlIGluZGV4IGlzIGkgKiAxMC4gKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgaVN0YXR1c1tpbmRleCArIGldLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgIGlTdGF0dXNbaW5kZXggKyBpICogMTBdLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNTaGlwID0gKGNvb3JkcykgPT4ge1xuICAgIGxldCBpbmRleCA9IGNvb3JkcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZHMpKSB7XG4gICAgICBpbmRleCA9IGJvYXJkLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaVN0YXR1c1tpbmRleF0uc2hpcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIGlTdGF0dXMgb2JqZWN0IGhhcyBhIGtleSBpc0F0dGFja2VkIGFuZCBhbiBPQkpFQ1Qoc2hpcCAqd2hlbiBpdHMgb2NjdXBpZWQqKSwgXG4gIHNvIGlzQXR0YWNrZWQgbmVlZHMgdG8gYmUgc2V0IG8gdHJ1ZSwgYW5kIHNoaXAgb2JqZWN0IG5lZWRzIHRvIGNhbGwgaXQncyBvd24gZnVuY3Rpb25cbiAgY2FsbGVkIGJlZW5IaXQgdGhhdCBpbmNyZW1lbnRzIHRoZSBudW1iZXIgb2YgXCJoaXRzXCIoYSBzaGlwIHByb3ByZXR5KSAqL1xuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGxldCBpbmRleCA9IGNvb3JkcztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvb3JkcykpIHtcbiAgICAgIGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudFswXSA9PT0gY29vcmRzWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3Jkc1sxXSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaVN0YXR1c1tpbmRleF0uaXNBdHRhY2tlZCA9IHRydWU7XG4gICAgaWYgKGlTdGF0dXNbaW5kZXhdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgIGlTdGF0dXNbaW5kZXhdLnNoaXAuYmVlbkhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKiBGaWx0ZXIgdGhlIGV4aXN0aW5nIHNoaXBzIGZyb20gaVN0YXR1cyBhcnJheVxuICAuZXZlcnkgaXMgY2FsbGVkIG9uIHRoZSBmaWx0cmVkIGFycmF5IHRvIGNoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vua2VkXG4gIElmIC5ldmVyeSBpcyB0cnVlLCByZXR1cm4gdHJ1ZSBvdGhlcndpc2UgZmFsc2UgKi9cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IG9jdXBwaWVkV2l0aFNoaXAgPSBpU3RhdHVzLmZpbHRlcigoaW5kZXgpID0+IGluZGV4LnNoaXAgIT0gbnVsbCk7XG4gICAgY29uc3QgYWxsU3Vua2VkID0gb2N1cHBpZWRXaXRoU2hpcC5ldmVyeShcbiAgICAgIChpbmRleCkgPT4gaW5kZXguc2hpcC5pc0l0U3VuayA9PT0gdHJ1ZSxcbiAgICApO1xuICAgIGlmIChhbGxTdW5rZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBpU3RhdHVzLFxuICAgIHBsYWNlU2hpcCxcbiAgICBoYXNTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIGhvd01hbnlTaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgZHJhZ292ZXJIYW5kbGVyLCBkcm9wSGFuZGxlciB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKiBMb29wIGZyb20gMCB0byA5OSwgZWFjaCBsb29wIGNyZWF0ZXMgYSBkaXYgd2l0aCBkYXRhc2V0LWksXG5zbyB0aGF0IGVhY2ggZWxlbWVudCBoYXMgaWRlbnRpZmllciBhcyBpbmRleCBzdGFydGluZyBmcm9tIDAgKi9cblxuLyogSXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGNvbnRhaW5lcihkZXBlbmRpbmcgaWYgaXRzIG9uIHBsYXllckNvbnRhaW5lciBvciBjb21wdXRlckNvbnRhaW5lcixcbnNhbWUgZ29lcyBmb3Igd2hpY2hQbGF5ZXIsIGVhY2ggcGxheWVyIGhhcyBpdCdzIG93biBhcnJheShpU3RhdHVzKS4gXG5wbGF5ZXJDb250YWluZXIgbmVlZHMgdG8gZGlzcGxheSBwbGF5ZXJPbmUgYW5kIGNvbXB1dGVyQ29udGFpbmVyIGNvbXB1dGVyICovXG5jb25zdCBkaXNwbGF5R3JpZCA9IChjb250YWluZXIsIHdoaWNoUGxheWVyKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtJztcbiAgICBncmlkSXRlbS5kYXRhc2V0LmkgPSBpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgLy8gRHJhZyBhbmQgZHJvcCBhZGRlZCAnLi91dGlscy5qcydcbiAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVySGFuZGxlcik7XG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BIYW5kbGVyKGNvbnRhaW5lciwgd2hpY2hQbGF5ZXIpKTtcbiAgICAvLyBJdHMgZW1wdHkgYW5kIG5vdCBoaXRcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgPT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBlbXB0eSc7XG4gICAgfVxuXG4gICAgLyogQ2xhc3MgbGlzdCBuZWVkcyB0byBiZSBjaGVja2VkLCBiZWNhdXNlIGNvbXB1dGVyIHNoaXBzIFxuICAgIG11c250IGJlIGRpc3BsYXllZCwgc28gZ3JpZEl0ZW0gZW1wdHkoYmx1ZSkgKi9cbiAgICBpZiAoXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdwbGF5ZXItY29udGFpbmVyJykgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkID09PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIHNoaXAnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjb21wdXRlci1jb250YWluZXInKSAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgPT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gZW1wdHknO1xuICAgIH1cblxuICAgIC8vIEl0cyBub3QgZW1wdHkgYW5kIGhpdCwgYnV0IG5vdCBzdW5rXG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcC5pc0l0U3VuayA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBzaGlwSGl0dGVkJztcbiAgICB9XG5cbiAgICAvLyBJdHMgZW1wdHkgYW5kIGhpdFxuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCA9PT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIG1pc3NlZFNob3QnO1xuICAgIH1cblxuICAgIC8vIEl0cyBzdW5rXG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwLmlzSXRTdW5rID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gaXNTdW5rZWQnO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUdyaWQ7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhhbmRsZUJ0bnMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vYXNzZXRzL3NoaXAucG5nJztcblxuaGFuZGxlQnRucygpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGdhbWVTdGFnZSB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKiBOYW1lIHBhc3NlZCBpdCBhcyBwYXJhbWV0ZXJzIHNldHMgdGhlIG5hbWUgb2YgdGhlIHBsYXllck9uZS5cbkNvbXB1dGVyIHN0YXJ0cyB3aXRoIGlzIG93biBjb21wdXRlciBuYW1lICovXG5jb25zdCBQbGF5ZXIgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZSA9IHtcbiAgICB1c2VybmFtZTogcGxheWVyLFxuICAgIGdhbWU6IEdhbWVib2FyZCgpLFxuICAgIHR1cm46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXIgPSB7XG4gICAgdXNlcm5hbWU6ICdDb21wdXRlcicsXG4gICAgZ2FtZTogR2FtZWJvYXJkKCksXG4gIH07XG5cbiAgY29uc3QgYm9hcmRDb3B5ID0gWy4uLnBsYXllck9uZS5nYW1lLmJvYXJkXTtcblxuICAvKiBUbyBub3QgcmVwZWF0IGF0dGFja3MsIHJhbmRvbUluZGV4IGZyb20gYm9hcmRDb3B5Lmxlbmd0aFxuICBnZXQgdGhlIGNvb3JkcyBmcm9tIHRoYXQgYm9hcmRDb3B5IHJhbmRvbSBpbmRleCBhbmQgYXR0YWNrIHBsYXllck9uZSBhbmRcbiAgZGVsZXRlIHRoYXQgaW5kZXggZnJvbSB0aGUgYm9hcmRDb3B5IHNvIGNvb3JkcyBkb250IHJlcGVhdFxuICAqL1xuICBjb25zdCBjb21wdXRlckF0dGFja3MgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllck9uZS50dXJuID09PSBmYWxzZSAmJiBjb21wdXRlci5nYW1lLmlzQWxsU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZENvcHkubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkQ29weVtyYW5kb21JbmRleF07XG4gICAgICBwbGF5ZXJPbmUuZ2FtZS5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICBib2FyZENvcHkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcbiAgICAgIHBsYXllck9uZS50dXJuID0gdHJ1ZTtcbiAgICAgIGdhbWVTdGFnZSgnYXR0YWNrJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qIFdpdGggY29vcmRzIGdpdmVuIGFzIHBhcmFtZXRlciBhbmQgcGxheWVyT25lIHdpdGggdHVybjp0cnVlKGRlZmF1bHQpLFxuICBDb21wdXRlciByZWNpZXZlcyBhbiBhdHRhY2sgd2l0aCB0aG9zZSBjb29yZHMsIHR1cm4gaXMgc2V0IHRvIGZhbHNlIGFuZFxuICBjb21wdXRlckF0dGFja3MoKSBpcyBjYWxsZWQgICovXG4gIGNvbnN0IHBsYXllck9uZUF0dGFja3MgPSAoY29vcmRzKSA9PiB7XG4gICAgaWYgKHBsYXllck9uZS50dXJuID09PSB0cnVlKSB7XG4gICAgICBjb21wdXRlci5nYW1lLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICAgIHBsYXllck9uZS50dXJuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHlvdXIgdHVybiB0byBwbGF5Jyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHBsYXllck9uZSwgY29tcHV0ZXIsIHBsYXllck9uZUF0dGFja3MsIGNvbXB1dGVyQXR0YWNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0czogMCxcbiAgaXNJdFN1bms6IGZhbHNlLFxuICBiZWVuSGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzSXRTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWltcG9ydC1hc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgeyBnYW1lLCBzZXRIdW1hbk5hbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IGVycm9yID0gKHR5cGUpID0+IHtcbiAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xuICBpZiAodHlwZSA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICBlcnJvck1lc3NhZ2UgKz0gJ1RoaXMgcGxhY2VtZW50IGlzIG5vdCBhbGxvd2VkLic7XG4gIH1cbiAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbn07XG5cbi8vIERPTSBxdWVyeWluZyBpbnNpZGUgZnVuY3Rpb25zIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCBKRVNUXG5jb25zdCBoYW5kbGVCdG5zID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBzb2xkaWVyTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29sZGllck5hbWUnKTtcbiAgY29uc3QgbGFuZGluZ1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wYWdlJyk7XG4gIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtcGFnZScpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1uYW1lJyk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtZ2FtZScpO1xuXG4gIC8qIFRoaXMgZXZlbnQgbGlzdGVuZXIgd2lsbCBzdGFydCB0aGUgZ2FtZSBieSBjYWxsaW5nIGluaXRpYWxpemUgZnVuY3Rpb24gd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IHRleHQgYXMgdGhlIG5hbWUgb2YgdGhlIHBsYXllcixcbiAgIGxhbmRpbmcgcGFnZSB3aWxsIGhpZGUsIGdhbWUgcGFnZSB3aWxsIGRpc3BsYXkgYW5kIHBsYXllci1uYW1lIGFzIGEgbmV3IG5hbWUgKi9cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNvbGRpZXJOYW1lID0gc29sZGllck5hbWVFbGVtZW50LnZhbHVlO1xuICAgIGxhbmRpbmdQYWdlLmNsYXNzTGlzdCA9ICdsYW5kaW5nLXBhZ2UgaGlkZSc7XG4gICAgZ2FtZVBhZ2UuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIHJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IHNvbGRpZXJOYW1lO1xuICAgIHNldEh1bWFuTmFtZShQbGF5ZXIoc29sZGllck5hbWUpKTtcbiAgICBnYW1lKCdzdGFnZTEnKTtcbiAgfSk7XG5cbiAgLyogV2lsbCBjaGFuZ2UgdGhlIGNsYXNzIG5hbWUgb2Ygc2hpcC1jb250YWluZXItZGVmYXVsdC14IGFuZCBhbGwgb2YgaGlzIGNoaWxkcyBjbGFzcyBuYW1lIGZyb20gJ3gnIHRvICd5JztcbiAgSW4gdGhlIGlmIHN0YXRlbWVudCBpcyBjaGVja2VkIHRoZSBMQVNUIGVsZW1lbnQgb2YgdGhlIG5vZGVMaXN0LCBvbmx5IHdoZW4gdGhlIExBU1RcbiAgZWxlbWVudCBoYXMgY2hhbmdlZCBjbGFzcyBuYW1lIG1lYW5zIHRoYXQgQUxMIGVsZW1lbnRzIGJlZm9yZSBoYXZlIGNoYW5nZWQgdG9vLiAqL1xuICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygneCcpKSB7XG4gICAgICBzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2hpcHMtY29udGFpbmVyIHknO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2hpcHMtY29udGFpbmVyIHgnO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzLCBuby11bmRlZlxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBzaGlwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnc3RhcnRIYW5kbGVyKTtcbn07XG5cbi8vIFdpbGwgYmUgY2FsbGVkIGR1cmluZyBnYW1lLWxvb3AgdG8gY2hhbmdlIHRoZSBtZXNzYWdlKGRvbSkgd2hpbGUgZ2FtZSBnb2VzIG9uLlxuY29uc3QgZ2FtZVN0YWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgZ2FtZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cycpO1xuICBpZiAobWVzc2FnZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBjYXJyaWVyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGJhdHRsZXNoaXAuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdjcnVpc2VyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgY3J1aXNlci4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIHN1Ym1hcmluZS4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGRlc3Ryb3llci4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2FsbFNoaXBzUGxhY2VkJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPVxuICAgICAgJ0dvb2Qgam9iIHBsYWNpbmcgeW91ciBzaGlwcywgaGF2ZSB5b3UgZG9uZSB0aGlzIGJlZm9yZT8nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdhdHRhY2snKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdOb3chIEF0dGFjayB5b3VyIG9wcG9uZW50ISc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2NvbXB1dGVyQXR0YWNrcycpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0VuZW15IGF0dGFja2VkLCBnZXQgcmVhZHkgZm9yIGltcGFjdCEnO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdhdHRhY2tlZFNoaXAnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdZb3UgaGl0IGEgc2hpcCEnO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdtaXNzZWRTaGlwJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnWW91IGhpdCAhIFRoZSB3YXRlci4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2dhbWVPdmVyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnV2FyIGZpbmFsbHkgY2FtZSB0byBhbiBlbmQuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdzaGlwQWxyZWFkeUhpdCcpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ1lvdSBoYXZlIGFscmVhZHkgaGl0IHRoaXMgY29vcmRlbmF0ZSc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ3NoaXBEb3duJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPVxuICAgICAgJ0JPT09PT09NISEhIFlvdSBoYXZlIGV4cGxvZGVkIG9uZSBvZiB5b3VyIGVuZW15IHNoaXBzJztcbiAgfVxufTtcblxuLyogQ3JlYXRlcyBhIHNoaXAgdGhybyBkb20gbWFuaXB1bGF0aW9uLCBsZW5ndGggYXMgdGhlIHBhcmFtZXRlciwgc28gaXQgY3JlYXRlcyBkaWZmZXJlbnQgc2l6ZWQgc2hpcHMgKi9cbmNvbnN0IGRpc3BsYXlVbnBsYWNlZFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgaWYgKGxlbmd0aCA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAvLyBSZW1vdmVzIHRoZSB1bnBsYWNlZCBzaGlwcyBhbmQgdGhlIHJvdGF0ZSBidXR0b25cbiAgICBmb290ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJvdGF0ZUJ0bi5jbGFzc0xpc3QgPSAncm90YXRlLWJ0bic7XG4gIH1cbiAgLyogVGhpcyB3aWxsIG1ha2UgdGhhdCBldmVyeXRpbWUgd2UgY2FsbCB0aGlzIGZ1bmN0aW9uLCB0aGUgcHJpb3IgY29udGVudCBpbnNpZGUgdGhpcyBkaXYgd2lsbCB2YW5pc2guXG4gICBBdm9pZGluZyBzaGlwcyBvdmVyZmxvdywgYmVjYXVzZSB0aGUgbGFzdCBvbmUgd2FzIGFscmVhZHkgcGxhY2VkLiAqL1xuICBzaGlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHVucGxhY2VkU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIFRoZSBtZWFuaW5nIG9mIHggd2lsbCBiZSB0aGF0IHNoaXAgaXMgZGlzcGxheWVkIGhvcml6b250YWxseSBhcyBkZWZhdWx0LlxuICAgIHVucGxhY2VkU2hpcC5jbGFzc0xpc3QgPSBgdW5wbGFjZWQtc2hpcGA7XG4gICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQodW5wbGFjZWRTaGlwKTtcbiAgfVxufTtcblxuY29uc3QgZHJhZ3N0YXJ0SGFuZGxlciA9IChlKSA9PiB7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5pZCk7XG4gIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gIGNvbnNvbGUubG9nKGUuZGF0YVRyYW5zZmVyKTtcbn07XG5cbmNvbnN0IGRyYWdvdmVySGFuZGxlciA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgY29uc29sZS5sb2coJ2RyYWdnaW5nJyk7XG59O1xuXG5jb25zdCBkcm9wSGFuZGxlciA9IChjb250YWluZXIsIHBsYXllcikgPT5cbiAgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLyogR2V0IHRoZSByaWdodCBkaXJlY3Rpb24gdGhyb3VnaCB0aGUgZGlzcGxheVVucGxhY2VkU2hpcCwgXG4gICAgaWYgdGhlIHVucGxhY2VkIHNoaXAgaXMgaG9yaXpvbnRhbCwgY2xhc3NMaXN0IGNvbnRhaW5zICd4JyxcbiAgICBvdGhlciB3YXkgYXJyb3VuZCBmb3IgdmVydGljYWwgJ3knICovXG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcbiAgICBpZiAoc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd4JykpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICd4JztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gJ3knO1xuICAgIH1cbiAgICAvLyBJbmRleCBvZiB0aGUgZ3JpZEl0ZW0gd2hlcmUgdW5wbGFjZWQgc2hpcCB3YXMgZHJvcHBlZC5cbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaSk7XG4gICAgLy8gT25seSBwbGFjZSBhIHNoaXAgaWYgdGhlIGdyaWQgY29udGFpbmVyIHRhcmdldCBpcyB0aGUgcGxheWVyLCBub3QgdGhlIGNvbXB1dGVyXG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ3BsYXllci1jb250YWluZXInKSkge1xuICAgICAgcGxheWVyLmdhbWUucGxhY2VTaGlwKGluZGV4LCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBnYW1lKCdzdGFnZTInKTtcbiAgfTtcblxuZXhwb3J0IHtcbiAgZXJyb3IsXG4gIGhhbmRsZUJ0bnMsXG4gIGdhbWVTdGFnZSxcbiAgZGlzcGxheVVucGxhY2VkU2hpcCxcbiAgZHJhZ292ZXJIYW5kbGVyLFxuICBkcm9wSGFuZGxlcixcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=