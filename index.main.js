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
  border: 2px solid black;
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
  gap: 20px;
  transition: all 0.3s ease;
}
.game-over-container:hover {
  transform: scale(1.1);
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
  .player-side {
  }
  .computer-side {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf;;kEAEoE;EACpE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;;;;;EAME,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,qDAAqD;AACvD;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,yDAAyD;AAC3D;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;;EAEpB,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,yDAAyD;AAC3D;AACA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE;IACE;6CAC6C;IAC7C,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;EAC9B;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,UAAU;IACV,eAAe;EACjB;EACA;IACE,aAAa;IACb,aAAa;IACb,+BAA+B;EACjC;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,kCAAkC;IAClC,2BAA2B;EAC7B;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,uCAAuC;EACzC;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;EACA;EACA;EACA;EACA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;EACf;EACA;IACE,UAAU;IACV,YAAY;IACZ,QAAQ;IACR,QAAQ;EACV;EACA;IACE,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,oCAAoC;IACpC,YAAY,EAAE,iCAAiC;IAC/C,aAAa;EACf;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;IACX,eAAe;EACjB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');\n\n:root {\n  --main-font: 'Allerta Stencil', sans-serif;\n}\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  background:\n    linear-gradient(rgba(6, 97, 158, 0.2), rgba(0, 0, 0, 0.4)),\n    url(./assets/ai-generated-8228367_1920.jpg) center/cover no-repeat;\n  color: white;\n  font-family: var(--main-font);\n}\nh1,\nh2,\nh3,\np,\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n.landing-page {\n  height: 100vh;\n  gap: 20px;\n  grid-template-rows: 15% 1fr;\n  display: grid;\n}\n.hide {\n  display: none;\n}\n.header {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header .title {\n  font-size: 8vh;\n  transition: all 0.3s ease;\n}\n.header .title:hover {\n  margin-right: 20px;\n  transform: scale(1.1);\n}\n.get-player-info {\n  margin: 75px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.get-player-info:hover {\n  margin: 30px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\nform {\n  width: 100%;\n  gap: 50px;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  font-size: 3rem;\n  text-align: center;\n}\nform input {\n  width: 35vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 3rem;\n  border-radius: 5px;\n  border: none;\n  font-family: var(--main-font);\n  color: white;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\nform input:hover {\n  background-color: #3498db;\n  transform: scale(1.1);\n}\nform input:focus {\n  background-color: #3498db;\n  transform: scale(1.1);\n}\nform button {\n  width: 30vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 4px;\n  font-family: var(--main-font);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\nform button:hover {\n  background-color: #3498db;\n  color: #fff;\n  border-color: #fff;\n  transform: scale(1.1);\n}\n.game-page {\n  display: none;\n}\n.game-page.display {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 16% 64% 20%;\n}\n.game-status {\n  height: 5vh;\n  width: 80vw;\n  font-size: 2rem;\n  border-radius: 5px;\n  color: chartreuse;\n  background-color: black;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-items: center;\n  transition: all 0.3s ease;\n}\n.game-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.player-name {\n  text-transform: uppercase;\n  font-size: 40px;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  gap: 3px;\n}\n.gridItem {\n  width: 30px;\n  height: 30px;\n  border: 2px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.gridItem:hover {\n  background-color: rgb(135, 243, 238);\n  transform: scale(1.1);\n}\n\n.empty {\n  background-color: rgb(0, 105, 148);\n}\n.ship {\n  background-color: rgb(77, 77, 77);\n}\n.shipHitted {\n  background-color: rgb(255, 0, 0);\n}\n.missedShot {\n  background-color: rgb(192, 192, 192);\n}\n.isSunked {\n  background-color: black;\n}\nfooter {\n  border-radius: 20px;\n  width: 60vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.ships-container.x {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.ships-container.y {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.unplaced-ship {\n  width: 30px;\n  height: 30px;\n  background-color: grey;\n  border: 1px solid black;\n  cursor: pointer;\n}\n.rotate-btn {\n  display: none;\n  font-size: 2rem;\n  bottom: 8%;\n  left: 30%;\n  position: absolute;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n.rotate-btn.display {\n  display: block;\n}\n.game-over {\n  display: none;\n  visibility: hidden;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center;\n}\n.game-over.display {\n  display: flex;\n  visibility: visible;\n}\n.game-over-container {\n  width: 30vw;\n  height: 60vh;\n  border-radius: 20px;\n  border: 3px solid white;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  transition: all 0.3s ease;\n}\n.game-over-container:hover {\n  transform: scale(1.1);\n}\n.winner {\n  font-size: 5rem;\n}\n.restart-game {\n  width: 15vw;\n  height: 15vh;\n  font-size: 3rem;\n  border-radius: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n.restart-game:hover {\n  transform: scale(1.1);\n  background-color: #3498db;\n  color: #fff;\n  border-color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  body {\n    background: linear-gradient(rgba(3, 23, 36, 0.7), rgba(0, 0, 0, 1)),\n      url(./assets/ai-generated-8228367_1920.jpg);\n    background-size: cover;\n    background-position: center center;\n    background-attachment: fixed;\n  }\n  .header .title {\n    font-size: 3rem;\n  }\n  form label {\n    font-size: 1.5rem;\n  }\n  form input {\n    font-size: 1.5rem;\n    width: 50%;\n    min-width: 20vw;\n  }\n  .game-page.display {\n    height: 150vh;\n    display: grid;\n    grid-template-rows: 15% 15% 70%;\n  }\n  .game-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .game-container {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: none;\n  }\n  .game-status {\n    font-size: 1rem;\n  }\n  .player-name {\n    font-size: 1.2rem;\n  }\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n  }\n  .gridItem {\n    width: 25px;\n    height: 25px;\n  }\n  .unplaced-ship {\n    width: 25px;\n    height: 25px;\n  }\n  .player-side {\n  }\n  .computer-side {\n  }\n  footer {\n    width: 100%;\n    height: 20vh;\n    border-radius: 0;\n    grid-row: 2/3;\n  }\n  .rotate-btn {\n    padding: 0;\n    height: 60px;\n    left: 5%;\n    top: 25%;\n  }\n  .game-over {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 999; /* Adjust the z-index as needed */\n    height: 150vh;\n  }\n  .game-over-container {\n    width: 100%;\n  }\n  .winner {\n    font-size: 2rem;\n  }\n  .restart-game {\n    width: 70vw;\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlB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STtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkNBQUk7QUFDUjs7QUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9haS1nZW5lcmF0ZWQtODIyODM2N18xOTIwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxsZXJ0YStTdGVuY2lsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWZvbnQ6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDYsIDk3LCAxNTgsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG59XG5oMSxcbmgyLFxuaDMsXG5wLFxudWwsXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5sYW5kaW5nLXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBnYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDh2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5oZWFkZXIgLnRpdGxlOmhvdmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uZ2V0LXBsYXllci1pbmZvIHtcbiAgbWFyZ2luOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmdldC1wbGF5ZXItaW5mbzpob3ZlciB7XG4gIG1hcmdpbjogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAzNXZ3O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcbn1cbmZvcm0gaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5mb3JtIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuZm9ybSBidXR0b24ge1xuICB3aWR0aDogMzB2dztcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uZ2FtZS1wYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nYW1lLXBhZ2UuZGlzcGxheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTYlIDY0JSAyMCU7XG59XG4uZ2FtZS1zdGF0dXMge1xuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDgwdnc7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogY2hhcnRyZXVzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXItbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ2FwOiAzcHg7XG59XG4uZ3JpZEl0ZW0ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZEl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyNDMsIDIzOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNSwgMTQ4KTtcbn1cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NywgNzcpO1xufVxuLnNoaXBIaXR0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cbi5taXNzZWRTaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xufVxuLmlzU3Vua2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5mb290ZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogNjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5zaGlwcy1jb250YWluZXIueCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnNoaXBzLWNvbnRhaW5lci55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udW5wbGFjZWQtc2hpcCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm90YXRlLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm90dG9tOiA4JTtcbiAgbGVmdDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJvdGF0ZS1idG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdhbWUtb3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ2FtZS1vdmVyLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmdhbWUtb3Zlci1jb250YWluZXIge1xuICB3aWR0aDogMzB2dztcbiAgaGVpZ2h0OiA2MHZoO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmdhbWUtb3Zlci1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ud2lubmVyIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuLnJlc3RhcnQtZ2FtZSB7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xufVxuLnJlc3RhcnQtZ2FtZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMywgMjMsIDM2LCAwLjcpLCByZ2JhKDAsIDAsIDAsIDEpKSxcbiAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxuICAuaGVhZGVyIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIGZvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIGZvcm0gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAyMHZ3O1xuICB9XG4gIC5nYW1lLXBhZ2UuZGlzcGxheSB7XG4gICAgaGVpZ2h0OiAxNTB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDE1JSA3MCU7XG4gIH1cbiAgLmdhbWUtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmdhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xuICB9XG4gIC5nYW1lLXN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5wbGF5ZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcbiAgfVxuICAuZ3JpZEl0ZW0ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxuICAudW5wbGFjZWQtc2hpcCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG4gIC5wbGF5ZXItc2lkZSB7XG4gIH1cbiAgLmNvbXB1dGVyLXNpZGUge1xuICB9XG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgfVxuICAucm90YXRlLWJ0biB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAyNSU7XG4gIH1cbiAgLmdhbWUtb3ZlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogOTk5OyAvKiBBZGp1c3QgdGhlIHotaW5kZXggYXMgbmVlZGVkICovXG4gICAgaGVpZ2h0OiAxNTB2aDtcbiAgfVxuICAuZ2FtZS1vdmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpbm5lciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5yZXN0YXJ0LWdhbWUge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7O2tFQUVvRTtFQUNwRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7Ozs7OztFQU1FLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFl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QUFlO0VBQ2YseURBQXlEO0FBQzNEO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0U7NkNBQzZDO0lBQzdDLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsUUFBUTtFQUNWO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZLEVBQUUsaUNBQWlDO0lBQy9DLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsbGVydGErU3RlbmNpbCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLW1haW4tZm9udDogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCA5NywgMTU4LCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLFxcbiAgICB1cmwoLi9hc3NldHMvYWktZ2VuZXJhdGVkLTgyMjgzNjdfMTkyMC5qcGcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxucCxcXG51bCxcXG5saSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubGFuZGluZy1wYWdlIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAxZnI7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmhlYWRlciAudGl0bGU6aG92ZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uZ2V0LXBsYXllci1pbmZvIHtcXG4gIG1hcmdpbjogNzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmdldC1wbGF5ZXItaW5mbzpob3ZlciB7XFxuICBtYXJnaW46IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbn1cXG5mb3JtIGlucHV0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbn1cXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5nYW1lLXBhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmdhbWUtcGFnZS5kaXNwbGF5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNiUgNjQlIDIwJTtcXG59XFxuLmdhbWUtc3RhdHVzIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogY2hhcnRyZXVzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdhcDogM3B4O1xcbn1cXG4uZ3JpZEl0ZW0ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdyaWRJdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDI0MywgMjM4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDUsIDE0OCk7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG59XFxuLnNoaXBIaXR0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcbi5taXNzZWRTaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG59XFxuLmlzU3Vua2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5mb290ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG4uc2hpcHMtY29udGFpbmVyLngge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5zaGlwcy1jb250YWluZXIueSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnVucGxhY2VkLXNoaXAge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5yb3RhdGUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3R0b206IDglO1xcbiAgbGVmdDogMzAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5yb3RhdGUtYnRuLmRpc3BsYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5nYW1lLW92ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdhbWUtb3Zlci5kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uZ2FtZS1vdmVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogNjB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmdhbWUtb3Zlci1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ud2lubmVyIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuLnJlc3RhcnQtZ2FtZSB7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogMTV2aDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcXG59XFxuLnJlc3RhcnQtZ2FtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgzLCAyMywgMzYsIDAuNyksIHJnYmEoMCwgMCwgMCwgMSkpLFxcbiAgICAgIHVybCguL2Fzc2V0cy9haS1nZW5lcmF0ZWQtODIyODM2N18xOTIwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB9XFxuICAuaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIGZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIGZvcm0gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWluLXdpZHRoOiAyMHZ3O1xcbiAgfVxcbiAgLmdhbWUtcGFnZS5kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAxNTB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgMTUlIDcwJTtcXG4gIH1cXG4gIC5nYW1lLXN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLmdhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lO1xcbiAgfVxcbiAgLmdhbWUtc3RhdHVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLnBsYXllci1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAuZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICB9XFxuICAuZ3JpZEl0ZW0ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbiAgLnVucGxhY2VkLXNoaXAge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbiAgLnBsYXllci1zaWRlIHtcXG4gIH1cXG4gIC5jb21wdXRlci1zaWRlIHtcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICAucm90YXRlLWJ0biB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbGVmdDogNSU7XFxuICAgIHRvcDogMjUlO1xcbiAgfVxcbiAgLmdhbWUtb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDk5OTsgLyogQWRqdXN0IHRoZSB6LWluZGV4IGFzIG5lZWRlZCAqL1xcbiAgICBoZWlnaHQ6IDE1MHZoO1xcbiAgfVxcbiAgLmdhbWUtb3Zlci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC53aW5uZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAucmVzdGFydC1nYW1lIHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IGRpc3BsYXlHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgeyBnYW1lU3RhZ2UsIGRpc3BsYXlVbnBsYWNlZFNoaXAgfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRnVuY3Rpb24gY3JlYXRlZCB0byBhc3NpZ24gYSB2YWx1ZSB0byBhbiBleHBvcnRlZCB2YXJpYWJsZS4gZm9ybS5hZGRFdmVudFxubGV0IGxvYmJ5UGxheWVycztcbmZ1bmN0aW9uIHNldEh1bWFuTmFtZShuYW1lKSB7XG4gIGxvYmJ5UGxheWVycyA9IG5hbWU7XG59XG5cbmNvbnN0IGdhbWUgPSAoc3RhZ2UpID0+IHtcbiAgY29uc29sZS5sb2cobG9iYnlQbGF5ZXJzKTtcblxuICBpZiAoc3RhZ2UgPT09ICdzdGFnZTEnKSB7XG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcbiAgICBjb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1jb250YWluZXInKTtcbiAgICBkaXNwbGF5R3JpZChwbGF5ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUpO1xuICAgIGRpc3BsYXlHcmlkKGNvbXB1dGVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMuY29tcHV0ZXIpO1xuICAgIGdhbWVTdGFnZSgnY2FycmllcicpO1xuICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoNSk7XG4gICAgd2hpbGUgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmhvd01hbnlTaGlwcygpICE9PSAxNykge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3QgZGlyZXRpb24gPSBbJ3knLCAneCddO1xuICAgICAgY29uc3QgcmFuZG9tRGlyZXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnNvbGUubG9nKGRpcmV0aW9uW3JhbmRvbURpcmV0aW9uXSk7XG5cbiAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLnBsYWNlU2hpcChcbiAgICAgICAgcmFuZG9tSW5kZXgsXG4gICAgICAgIGRpcmV0aW9uW3JhbmRvbURpcmV0aW9uXSxcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5ob3dNYW55U2hpcHMoKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YWdlID09PSAnc3RhZ2UyJykge1xuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG4gICAgZGlzcGxheUdyaWQocGxheWVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMucGxheWVyT25lKTtcbiAgICBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmhvd01hbnlTaGlwcygpID09PSA1KSB7XG4gICAgICBnYW1lU3RhZ2UoJ2JhdHRsZXNoaXAnKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoNCk7XG4gICAgfSBlbHNlIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDkpIHtcbiAgICAgIGdhbWVTdGFnZSgnY3J1aXNlcicpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCgzKTtcbiAgICB9IGVsc2UgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gMTIpIHtcbiAgICAgIGdhbWVTdGFnZSgnc3VibWFyaW5lJyk7XG4gICAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDMpO1xuICAgIH0gZWxzZSBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmhvd01hbnlTaGlwcygpID09PSAxNSkge1xuICAgICAgZ2FtZVN0YWdlKCdkZXN0cm95ZXInKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoMik7XG4gICAgfSBlbHNlIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDE3KSB7XG4gICAgICBnYW1lU3RhZ2UoJ2FsbFNoaXBzUGxhY2VkJyk7XG4gICAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKCdjb21wbGV0ZWQnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBnYW1lKCdzdGFnZTMnKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFnZSA9PT0gJ3N0YWdlMycpIHtcbiAgICBjb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1jb250YWluZXInKTtcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWNvbnRhaW5lcicpO1xuICAgIGdhbWVTdGFnZSgnYXR0YWNrJyk7XG4gICAgY29tcHV0ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBHZXQgdGhlIGUudGFyZ2V0SWQgYW5kIHBhcnNlSW50IHRvIG51bVxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmkpO1xuXG4gICAgICAvLyBJZiB0aGUgY29vcmRzIG9mIHRoZSBhdHRhY2sgaXMgYWxyZWFkeSBhdHRhY2tlZCwgcmV0dXJuLlxuICAgICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlTdGF0dXNbdGFyZ2V0SWRdLmlzQXR0YWNrZWQgPT09IG51bGwpIHtcbiAgICAgICAgbG9iYnlQbGF5ZXJzLnBsYXllck9uZUF0dGFja3ModGFyZ2V0SWQpO1xuICAgICAgICBkaXNwbGF5R3JpZChjb21wdXRlckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyogSWYgdGhlIGNvbXB1dGVyIGhhcyBhIHNoaXAgb24gaW5kZXgodGFyZ2V0SWQpLFxuICAgICAgc2V0IG1lc3NhZ2UgJ1lvdSBoaXQgYSBzaGlwIScsIHR3byBzZWNvbmRzIGFmdGVyKElmIGNvbXB1dGVyIHN0aWxsIGhhcyBzaGlwcyksXG4gICAgICBtZXNzYWdlIHRoYXQgY29tcHV0ZXIgd2lsbCBhdHRhY2ssIGFuZCB0d28gc2Vjb25kcyBhZnRlciB0aGF0IG1lc3NhZ2Ugd2lsbCBkaXNwbGF5IHRoYXQgcmFuZG9tIGF0dGFjayAqL1xuICAgICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmhhc1NoaXAodGFyZ2V0SWQpKSB7XG4gICAgICAgIGdhbWVTdGFnZSgnYXR0YWNrZWRTaGlwJyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pU3RhdHVzW3RhcmdldElkXS5zaGlwLmlzSXRTdW5rID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGdhbWVTdGFnZSgnc2hpcERvd24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pc0FsbFN1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWVTdGFnZSgnY29tcHV0ZXJBdHRhY2tzJyk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsb2JieVBsYXllcnMuY29tcHV0ZXJBdHRhY2tzKCk7XG4gICAgICAgICAgICBkaXNwbGF5R3JpZChwbGF5ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUpO1xuICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogRWxzZSA9PiB0aGUgY29tcHV0ZXIgZG9lc24ndCBoYXZlIGEgc2hpcCBvbiBpbmRleCh0YXJnZXRJZCksXG4gICAgICAgIHNldCBtZXNzYWdlIHRoYXQgcGxheWVyIG1pc3NlZCB0aGUgY29tcHV0ZXJzIHNoaXAsIGFmdGVyIHR3byBzZWNvbmRzLCBcbiAgICAgICAgd2lsbCBkbyB0aGUgc2FtZSBhcyB3aGVuIGNvbXB1dGVyIGhhcyBzaGlwICovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lU3RhZ2UoJ21pc3NlZFNoaXAnKTtcbiAgICAgICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlzQWxsU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZVN0YWdlKCdjb21wdXRlckF0dGFja3MnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlckF0dGFja3MoKTtcbiAgICAgICAgICAgIGRpc3BsYXlHcmlkKHBsYXllckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLnBsYXllck9uZSk7XG4gICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYWxsIHN1bmssIG1lc3NhZ2UgdGhhdCBnYW1lIGlzIG92ZXIgYW5kIGNhbGwgc3RhZ2U9J2dhbWVPdmVyJ1xuICAgICAgaWYgKFxuICAgICAgICBsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaXNBbGxTdW5rKCkgfHxcbiAgICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaXNBbGxTdW5rKClcbiAgICAgICkge1xuICAgICAgICBnYW1lU3RhZ2UoJ2dhbWVPdmVyJyk7XG4gICAgICAgIGdhbWUoJ2dhbWVPdmVyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoc3RhZ2UgPT09ICdnYW1lT3ZlcicpIHtcbiAgICBjb25zdCBnYW1lT3ZlckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyJyk7XG4gICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xuICAgIGdhbWVPdmVySFRNTC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5pc0FsbFN1bmsoKSkge1xuICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gJ1lvdSBsb3N0IHRoZSB3YXInO1xuICAgIH1cbiAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9ICdZb3Ugd29uIHRoZSB3YXInO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgZ2FtZSwgbG9iYnlQbGF5ZXJzLCBzZXRIdW1hbk5hbWUgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBjb29yZGVuYXRlc1xuICBjb25zdCBidWlsZEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5ICs9IDEpIHtcbiAgICAgICAgYm9hcmQucHVzaChbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgLy8gY3JlYXRlcyBhbiBhcnJheSBmb3IgZWFjaCBjb29kZW5hdGUgZnJvbSBib2FyZCBhcnJheVxuICBjb25zdCBib2FyZFN0YXR1cyA9IChhcnIpID0+IHtcbiAgICBjb25zdCBpU3RhdHVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlTdGF0dXNbaV0gPSB7XG4gICAgICAgIGlzQXR0YWNrZWQ6IG51bGwsXG4gICAgICAgIHNoaXA6IG51bGwsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gaVN0YXR1cztcbiAgfTtcblxuICBjb25zdCBib2FyZCA9IGJ1aWxkQm9hcmQoKTtcbiAgY29uc3QgaVN0YXR1cyA9IGJvYXJkU3RhdHVzKGJvYXJkKTtcblxuICBjb25zdCBpc0RpZmZlcmVudFJvdyA9IChpbmRleCwgaSkgPT4ge1xuICAgIC8qIFRoZSBlbmQgb2Ygcm93IGVuZHMgYnkgOSBbOSwxOSwyOSwzOSw0OSw1OSw2OSw3OSw4OSw5OV0gXG4gICAgSWYgaW5kZXggaXMgc21hbGxlciB0aGFuIDkoZXhhbXBsZSksIGFuZCBpbmRleCArIGkgaXMgYmlnZ2VyIHRoYW4gOSByZXR1cm4gdHJ1ZS4gcGxhY2VtZW50IG5vdCBhbGxvd2VkICovXG4gICAgZm9yIChsZXQgaiA9IDk7IGogPCAxMDA7IGogKz0gMTApIHtcbiAgICAgIGlmIChpbmRleCA8PSBqICYmIGluZGV4ICsgaSA+IGopIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKiBDYWxsZWQgb24gcGxhY2VTaGlwKCksIHJldHVybnMgdHJ1ZSBpZiBpdHMgVU5hdmFpbGFibGUgXG4gIEZvciBob3Jpem9udGFsIGlmIChpbmRleCArIGkpIGhhcyBzaGlwIG9yIGlmIGl0cyBkaWZmZXJlbnQgcm93IHJldHVyblxuICBGb3IgdmVydGljYWwsIGluZGV4ZXMgZ28gMTAgYWZ0ZXIgMTAsIGlmIChpbmRleCArIGkgKiAxMCloYXMgc2hpcCBvclxuICBpZiAoaW5kZXggKyBpICogMTApIGlzIGJpZ2dlciBvciBlcXVhbCB0aGFuIDEwMCByZXR1cm4sIGJlY2F1c2UgdGhlIGJpZ2dlc3QgaW5kZXggaXMgOTkgKi9cbiAgY29uc3QgaXNQbGFjZW1lbnRVbmF2YWlsYWJsZSA9IChpbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgaWYgKGlTdGF0dXNbaW5kZXggKyBpXS5zaGlwICE9PSBudWxsIHx8IGlzRGlmZmVyZW50Um93KGluZGV4LCBpKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgIGlmIChpbmRleCArIGkgKiAxMCA+PSAxMDAgfHwgaVN0YXR1c1tpbmRleCArIGkgKiAxMF0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKiBUaGlzIHdpbGwgcmV0dXJuIGhvdyBtYW55IHNoaXBzIGFyZSBpbiBwbGF5ZXIgZ2FtZWJvYXJkLlxuICBJdCB3aWxsIGJlIHVzZWZ1bGwgdG8gY2hlY2sgaWYgdGhlcmUncyBvbmx5IDUgc2hpcCBpbmRleGVzLCBcbiAgdGhhdCBtZWFucyBvbmx5IHRoZSBjYXJyaWVyIHdhcyBwbGFjZWQgYW5kIHdlIGNhbiBjb250aW51ZSB0byB0aGUgbmV4dCBwbGFjZW1lbnQuICovXG4gIGNvbnN0IGhvd01hbnlTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBvY3VwcGllZFdpdGhTaGlwID0gaVN0YXR1cy5maWx0ZXIoKGluZGV4KSA9PiBpbmRleC5zaGlwICE9IG51bGwpO1xuICAgIGNvbnN0IGhvd01hbnlTaGlwSW5kZXhlcyA9IG9jdXBwaWVkV2l0aFNoaXAubGVuZ3RoO1xuICAgIHJldHVybiBob3dNYW55U2hpcEluZGV4ZXM7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gY29vcmRzO1xuICAgIGxldCBsZW5ndGg7XG5cbiAgICAvLyBGaXJzdCBjcmVhdGVzIGEgc2hpcCB3aXRoIGxlbmd0aCBwYXNzZWQgYXMgcGFyYW1ldGVyO1xuICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBib2FyZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIGNvb3JkcyBwYXJhbWF0ZXJzO1xuXG4gICAgLy8gSWYgY29vcmRzIGlzIGdpdmVuIHdpdGggYW4gYXJyYXkgWzAsMF0sIG5leHQgc3RlcCBpcyBmaW5kIHRoZSBpbmRleFxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvb3JkcykpIHtcbiAgICAgIGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudFswXSA9PT0gY29vcmRzWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3Jkc1sxXSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyogRXZlcnl0aW1lIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiB3ZSBjaGVjayBob3cgbWFueSBzaGlwcyBhcmUgaW4gdGhlIGdhbWVib2FyZCwgXG4gICAgaXMgdGhlIHNhbWUgYXMgc2F5aW5nIGhvdyBtYW55IHRpbWVzIHdhcyB0aGlzIGZ1Y250aW9uIHN1Y2Vzc2Z1bHkgY2FsbGVkKG5vIHBsYWNlbWVudCB1bmF2YWlsYWJsZSksIFxuICAgIHdpbGwgY2hhbmdlIHRoZSBsZW5ndGguICAqL1xuXG4gICAgaWYgKGhvd01hbnlTaGlwcygpID09PSAwKSB7XG4gICAgICBsZW5ndGggPSA1O1xuICAgIH0gZWxzZSBpZiAoaG93TWFueVNoaXBzKCkgPT09IDUpIHtcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgfSBlbHNlIGlmIChob3dNYW55U2hpcHMoKSA9PT0gOSkge1xuICAgICAgbGVuZ3RoID0gMztcbiAgICB9IGVsc2UgaWYgKGhvd01hbnlTaGlwcygpID09PSAxMikge1xuICAgICAgbGVuZ3RoID0gMztcbiAgICB9IGVsc2UgaWYgKGhvd01hbnlTaGlwcygpID09PSAxNSkge1xuICAgICAgbGVuZ3RoID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NoaXAgPSBjcmVhdGVTaGlwKGxlbmd0aCk7XG5cbiAgICAvLyBJZiBwbGFjZW1lbnQgaXMgbm90IGFsbG93ZWQgcmV0dXJuIGVycm9yO1xuICAgIGlmIChpc1BsYWNlbWVudFVuYXZhaWxhYmxlKGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbikpIHtcbiAgICAgIHJldHVybiBlcnJvcigncGxhY2VtZW50Jyk7XG4gICAgfVxuXG4gICAgLyogVGhpcyBsb29wcyB3aWxsIGNvbnRpbnVlIGFzIGxvbmcgYXMgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBpcyBub3QgcmVhY2hlZC5cbiAgICBJZiBkaXJlY3Rpb24gaXMgeCAoaG9yaXpvbnRhbCksIHRoZSBpbmRleCBpcyBvbmUgYWZ0ZXIgdGhlIG9uZSwgc28gdGhlIGluZGV4ICsgaSA9IG5ld1NoaXBcbiAgICBJZiBkaXJlY3Rpb24gaXMgeSAodmVydGljYWwpLCB0aGUgaW5kZXggaXMgMTAgYWZ0ZXIgMTAsIHNvIHRoZSBpbmRleCBpcyBpICogMTAuICovXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGlTdGF0dXNbaW5kZXggKyBpXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgICBpU3RhdHVzW2luZGV4ICsgaSAqIDEwXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICBsZXQgaW5kZXggPSBjb29yZHM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29vcmRzKSkge1xuICAgICAgaW5kZXggPSBib2FyZC5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50WzBdID09PSBjb29yZHNbMF0gJiYgZWxlbWVudFsxXSA9PT0gY29vcmRzWzFdLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGlTdGF0dXNbaW5kZXhdLnNoaXAgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKiBpU3RhdHVzIG9iamVjdCBoYXMgYSBrZXkgaXNBdHRhY2tlZCBhbmQgYW4gT0JKRUNUKHNoaXAgKndoZW4gaXRzIG9jY3VwaWVkKiksIFxuICBzbyBpc0F0dGFja2VkIG5lZWRzIHRvIGJlIHNldCBvIHRydWUsIGFuZCBzaGlwIG9iamVjdCBuZWVkcyB0byBjYWxsIGl0J3Mgb3duIGZ1bmN0aW9uXG4gIGNhbGxlZCBiZWVuSGl0IHRoYXQgaW5jcmVtZW50cyB0aGUgbnVtYmVyIG9mIFwiaGl0c1wiKGEgc2hpcCBwcm9wcmV0eSkgKi9cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICBsZXQgaW5kZXggPSBjb29yZHM7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZHMpKSB7XG4gICAgICBpbmRleCA9IGJvYXJkLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgICApO1xuICAgIH1cblxuICAgIGlTdGF0dXNbaW5kZXhdLmlzQXR0YWNrZWQgPSB0cnVlO1xuICAgIGlmIChpU3RhdHVzW2luZGV4XS5zaGlwICE9PSBudWxsKSB7XG4gICAgICBpU3RhdHVzW2luZGV4XS5zaGlwLmJlZW5IaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyogRmlsdGVyIHRoZSBleGlzdGluZyBzaGlwcyBmcm9tIGlTdGF0dXMgYXJyYXlcbiAgLmV2ZXJ5IGlzIGNhbGxlZCBvbiB0aGUgZmlsdHJlZCBhcnJheSB0byBjaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtlZFxuICBJZiAuZXZlcnkgaXMgdHJ1ZSwgcmV0dXJuIHRydWUgb3RoZXJ3aXNlIGZhbHNlICovXG4gIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBvY3VwcGllZFdpdGhTaGlwID0gaVN0YXR1cy5maWx0ZXIoKGluZGV4KSA9PiBpbmRleC5zaGlwICE9IG51bGwpO1xuICAgIGNvbnN0IGFsbFN1bmtlZCA9IG9jdXBwaWVkV2l0aFNoaXAuZXZlcnkoXG4gICAgICAoaW5kZXgpID0+IGluZGV4LnNoaXAuaXNJdFN1bmsgPT09IHRydWUsXG4gICAgKTtcbiAgICBpZiAoYWxsU3Vua2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgaVN0YXR1cyxcbiAgICBwbGFjZVNoaXAsXG4gICAgaGFzU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBob3dNYW55U2hpcHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5cbmltcG9ydCB7IGRyYWdvdmVySGFuZGxlciwgZHJvcEhhbmRsZXIgfSBmcm9tICcuL3V0aWxzJztcblxuLyogTG9vcCBmcm9tIDAgdG8gOTksIGVhY2ggbG9vcCBjcmVhdGVzIGEgZGl2IHdpdGggZGF0YXNldC1pLFxuc28gdGhhdCBlYWNoIGVsZW1lbnQgaGFzIGlkZW50aWZpZXIgYXMgaW5kZXggc3RhcnRpbmcgZnJvbSAwICovXG5cbi8qIEl0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBjb250YWluZXIoZGVwZW5kaW5nIGlmIGl0cyBvbiBwbGF5ZXJDb250YWluZXIgb3IgY29tcHV0ZXJDb250YWluZXIsXG5zYW1lIGdvZXMgZm9yIHdoaWNoUGxheWVyLCBlYWNoIHBsYXllciBoYXMgaXQncyBvd24gYXJyYXkoaVN0YXR1cykuIFxucGxheWVyQ29udGFpbmVyIG5lZWRzIHRvIGRpc3BsYXkgcGxheWVyT25lIGFuZCBjb21wdXRlckNvbnRhaW5lciBjb21wdXRlciAqL1xuY29uc3QgZGlzcGxheUdyaWQgPSAoY29udGFpbmVyLCB3aGljaFBsYXllcikgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSc7XG4gICAgZ3JpZEl0ZW0uZGF0YXNldC5pID0gaTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgIC8vIERyYWcgYW5kIGRyb3AgYWRkZWQgJy4vdXRpbHMuanMnXG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckhhbmRsZXIpO1xuICAgIGdyaWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wSGFuZGxlcihjb250YWluZXIsIHdoaWNoUGxheWVyKSk7XG4gICAgLy8gSXRzIGVtcHR5IGFuZCBub3QgaGl0XG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgPT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwID09PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gZW1wdHknO1xuICAgIH1cblxuICAgIC8qIENsYXNzIGxpc3QgbmVlZHMgdG8gYmUgY2hlY2tlZCwgYmVjYXVzZSBjb21wdXRlciBzaGlwcyBcbiAgICBtdXNudCBiZSBkaXNwbGF5ZWQsIHNvIGdyaWRJdGVtIGVtcHR5KGJsdWUpICovXG4gICAgaWYgKFxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygncGxheWVyLWNvbnRhaW5lcicpICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBzaGlwJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY29tcHV0ZXItY29udGFpbmVyJykgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkID09PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIGVtcHR5JztcbiAgICB9XG5cbiAgICAvLyBJdHMgbm90IGVtcHR5IGFuZCBoaXQsIGJ1dCBub3Qgc3Vua1xuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAuaXNJdFN1bmsgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gc2hpcEhpdHRlZCc7XG4gICAgfVxuXG4gICAgLy8gSXRzIGVtcHR5IGFuZCBoaXRcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCAhPT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgPT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBtaXNzZWRTaG90JztcbiAgICB9XG5cbiAgICAvLyBJdHMgc3Vua1xuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcC5pc0l0U3VuayA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIGlzU3Vua2VkJztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHcmlkO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVCdG5zIH0gZnJvbSAnLi91dGlscyc7XG5cbmhhbmRsZUJ0bnMoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBnYW1lU3RhZ2UgfSBmcm9tICcuL3V0aWxzJztcblxuLyogTmFtZSBwYXNzZWQgaXQgYXMgcGFyYW1ldGVycyBzZXRzIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXJPbmUuXG5Db21wdXRlciBzdGFydHMgd2l0aCBpcyBvd24gY29tcHV0ZXIgbmFtZSAqL1xuY29uc3QgUGxheWVyID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmUgPSB7XG4gICAgdXNlcm5hbWU6IHBsYXllcixcbiAgICBnYW1lOiBHYW1lYm9hcmQoKSxcbiAgICB0dXJuOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyID0ge1xuICAgIHVzZXJuYW1lOiAnQ29tcHV0ZXInLFxuICAgIGdhbWU6IEdhbWVib2FyZCgpLFxuICB9O1xuXG4gIGNvbnN0IGJvYXJkQ29weSA9IFsuLi5wbGF5ZXJPbmUuZ2FtZS5ib2FyZF07XG5cbiAgLyogVG8gbm90IHJlcGVhdCBhdHRhY2tzLCByYW5kb21JbmRleCBmcm9tIGJvYXJkQ29weS5sZW5ndGhcbiAgZ2V0IHRoZSBjb29yZHMgZnJvbSB0aGF0IGJvYXJkQ29weSByYW5kb20gaW5kZXggYW5kIGF0dGFjayBwbGF5ZXJPbmUgYW5kXG4gIGRlbGV0ZSB0aGF0IGluZGV4IGZyb20gdGhlIGJvYXJkQ29weSBzbyBjb29yZHMgZG9udCByZXBlYXRcbiAgKi9cbiAgY29uc3QgY29tcHV0ZXJBdHRhY2tzID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gZmFsc2UgJiYgY29tcHV0ZXIuZ2FtZS5pc0FsbFN1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRDb3B5Lmxlbmd0aCk7XG4gICAgICBjb25zdCBjb29yZHMgPSBib2FyZENvcHlbcmFuZG9tSW5kZXhdO1xuICAgICAgcGxheWVyT25lLmdhbWUucmVjaWV2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgYm9hcmRDb3B5LnNwbGljZShyYW5kb21JbmRleCwgMSk7XG4gICAgICBwbGF5ZXJPbmUudHVybiA9IHRydWU7XG4gICAgICBnYW1lU3RhZ2UoJ2F0dGFjaycpO1xuICAgIH1cbiAgfTtcblxuICAvKiBXaXRoIGNvb3JkcyBnaXZlbiBhcyBwYXJhbWV0ZXIgYW5kIHBsYXllck9uZSB3aXRoIHR1cm46dHJ1ZShkZWZhdWx0KSxcbiAgQ29tcHV0ZXIgcmVjaWV2ZXMgYW4gYXR0YWNrIHdpdGggdGhvc2UgY29vcmRzLCB0dXJuIGlzIHNldCB0byBmYWxzZSBhbmRcbiAgY29tcHV0ZXJBdHRhY2tzKCkgaXMgY2FsbGVkICAqL1xuICBjb25zdCBwbGF5ZXJPbmVBdHRhY2tzID0gKGNvb3JkcykgPT4ge1xuICAgIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gdHJ1ZSkge1xuICAgICAgY29tcHV0ZXIuZ2FtZS5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICBwbGF5ZXJPbmUudHVybiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocGxheWVyT25lLnR1cm4gPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCB5b3VyIHR1cm4gdG8gcGxheScpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBwbGF5ZXJPbmUsIGNvbXB1dGVyLCBwbGF5ZXJPbmVBdHRhY2tzLCBjb21wdXRlckF0dGFja3MgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoKSA9PiAoe1xuICBsZW5ndGgsXG4gIGhpdHM6IDAsXG4gIGlzSXRTdW5rOiBmYWxzZSxcbiAgYmVlbkhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pc0l0U3VuayA9IHRydWU7XG4gICAgfVxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1pbXBvcnQtYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuaW1wb3J0IHsgZ2FtZSwgc2V0SHVtYW5OYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBlcnJvciA9ICh0eXBlKSA9PiB7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcbiAgaWYgKHR5cGUgPT09ICdwbGFjZW1lbnQnKSB7XG4gICAgZXJyb3JNZXNzYWdlICs9ICdUaGlzIHBsYWNlbWVudCBpcyBub3QgYWxsb3dlZC4nO1xuICB9XG4gIHJldHVybiBlcnJvck1lc3NhZ2U7XG59O1xuXG4vLyBET00gcXVlcnlpbmcgaW5zaWRlIGZ1bmN0aW9ucyB0byBub3QgaW50ZXJmZXJlIHdpdGggSkVTVFxuY29uc3QgaGFuZGxlQnRucyA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3Qgc29sZGllck5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbGRpZXJOYW1lJyk7XG4gIGNvbnN0IGxhbmRpbmdQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctcGFnZScpO1xuICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXBhZ2UnKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbmFtZScpO1xuICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0LWdhbWUnKTtcblxuICAvKiBUaGlzIGV2ZW50IGxpc3RlbmVyIHdpbGwgc3RhcnQgdGhlIGdhbWUgYnkgY2FsbGluZyBpbml0aWFsaXplIGZ1bmN0aW9uIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCB0ZXh0IGFzIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIsXG4gICBsYW5kaW5nIHBhZ2Ugd2lsbCBoaWRlLCBnYW1lIHBhZ2Ugd2lsbCBkaXNwbGF5IGFuZCBwbGF5ZXItbmFtZSBhcyBhIG5ldyBuYW1lICovXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzb2xkaWVyTmFtZSA9IHNvbGRpZXJOYW1lRWxlbWVudC52YWx1ZTtcbiAgICBsYW5kaW5nUGFnZS5jbGFzc0xpc3QgPSAnbGFuZGluZy1wYWdlIGhpZGUnO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBzb2xkaWVyTmFtZTtcbiAgICBzZXRIdW1hbk5hbWUoUGxheWVyKHNvbGRpZXJOYW1lKSk7XG4gICAgZ2FtZSgnc3RhZ2UxJyk7XG4gIH0pO1xuXG4gIC8qIFdpbGwgY2hhbmdlIHRoZSBjbGFzcyBuYW1lIG9mIHNoaXAtY29udGFpbmVyLWRlZmF1bHQteCBhbmQgYWxsIG9mIGhpcyBjaGlsZHMgY2xhc3MgbmFtZSBmcm9tICd4JyB0byAneSc7XG4gIEluIHRoZSBpZiBzdGF0ZW1lbnQgaXMgY2hlY2tlZCB0aGUgTEFTVCBlbGVtZW50IG9mIHRoZSBub2RlTGlzdCwgb25seSB3aGVuIHRoZSBMQVNUXG4gIGVsZW1lbnQgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZSBtZWFucyB0aGF0IEFMTCBlbGVtZW50cyBiZWZvcmUgaGF2ZSBjaGFuZ2VkIHRvby4gKi9cbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3gnKSkge1xuICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NoaXBzLWNvbnRhaW5lciB5JztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NoaXBzLWNvbnRhaW5lciB4JztcbiAgICB9XG4gIH0pO1xuXG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscywgbm8tdW5kZWZcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgc2hpcHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ3N0YXJ0SGFuZGxlcik7XG59O1xuXG4vLyBXaWxsIGJlIGNhbGxlZCBkdXJpbmcgZ2FtZS1sb29wIHRvIGNoYW5nZSB0aGUgbWVzc2FnZShkb20pIHdoaWxlIGdhbWUgZ29lcyBvbi5cbmNvbnN0IGdhbWVTdGFnZSA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMnKTtcbiAgaWYgKG1lc3NhZ2UgPT09ICdjYXJyaWVyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgY2Fycmllci4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBiYXR0bGVzaGlwLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnY3J1aXNlcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGNydWlzZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBzdWJtYXJpbmUuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBkZXN0cm95ZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdhbGxTaGlwc1BsYWNlZCcpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID1cbiAgICAgICdHb29kIGpvYiBwbGFjaW5nIHlvdXIgc2hpcHMsIGhhdmUgeW91IGRvbmUgdGhpcyBiZWZvcmU/JztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYXR0YWNrJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnTm93ISBBdHRhY2sgeW91ciBvcHBvbmVudCEnO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdjb21wdXRlckF0dGFja3MnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdFbmVteSBhdHRhY2tlZCwgZ2V0IHJlYWR5IGZvciBpbXBhY3QhJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYXR0YWNrZWRTaGlwJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnWW91IGhpdCBhIHNoaXAhJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnbWlzc2VkU2hpcCcpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ1lvdSBoaXQgISBUaGUgd2F0ZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdnYW1lT3ZlcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ1dhciBmaW5hbGx5IGNhbWUgdG8gYW4gZW5kLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnc2hpcEFscmVhZHlIaXQnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSBhbHJlYWR5IGhpdCB0aGlzIGNvb3JkZW5hdGUnO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdzaGlwRG93bicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID1cbiAgICAgICdCT09PT09PTSEhISBZb3UgaGF2ZSBleHBsb2RlZCBvbmUgb2YgeW91ciBlbmVteSBzaGlwcyc7XG4gIH1cbn07XG5cbi8qIENyZWF0ZXMgYSBzaGlwIHRocm8gZG9tIG1hbmlwdWxhdGlvbiwgbGVuZ3RoIGFzIHRoZSBwYXJhbWV0ZXIsIHNvIGl0IGNyZWF0ZXMgZGlmZmVyZW50IHNpemVkIHNoaXBzICovXG5jb25zdCBkaXNwbGF5VW5wbGFjZWRTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcbiAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGlmIChsZW5ndGggPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgLy8gUmVtb3ZlcyB0aGUgdW5wbGFjZWQgc2hpcHMgYW5kIHRoZSByb3RhdGUgYnV0dG9uXG4gICAgZm9vdGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBzaGlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0ID0gJ3JvdGF0ZS1idG4nO1xuICB9XG4gIC8qIFRoaXMgd2lsbCBtYWtlIHRoYXQgZXZlcnl0aW1lIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiwgdGhlIHByaW9yIGNvbnRlbnQgaW5zaWRlIHRoaXMgZGl2IHdpbGwgdmFuaXNoLlxuICAgQXZvaWRpbmcgc2hpcHMgb3ZlcmZsb3csIGJlY2F1c2UgdGhlIGxhc3Qgb25lIHdhcyBhbHJlYWR5IHBsYWNlZC4gKi9cbiAgc2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB1bnBsYWNlZFNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBUaGUgbWVhbmluZyBvZiB4IHdpbGwgYmUgdGhhdCBzaGlwIGlzIGRpc3BsYXllZCBob3Jpem9udGFsbHkgYXMgZGVmYXVsdC5cbiAgICB1bnBsYWNlZFNoaXAuY2xhc3NMaXN0ID0gYHVucGxhY2VkLXNoaXBgO1xuICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHVucGxhY2VkU2hpcCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdzdGFydEhhbmRsZXIgPSAoZSkgPT4ge1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2Zlcik7XG59O1xuXG5jb25zdCBkcmFnb3ZlckhhbmRsZXIgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIGNvbnNvbGUubG9nKCdkcmFnZ2luZycpO1xufTtcblxuY29uc3QgZHJvcEhhbmRsZXIgPSAoY29udGFpbmVyLCBwbGF5ZXIpID0+XG4gIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8qIEdldCB0aGUgcmlnaHQgZGlyZWN0aW9uIHRocm91Z2ggdGhlIGRpc3BsYXlVbnBsYWNlZFNoaXAsIFxuICAgIGlmIHRoZSB1bnBsYWNlZCBzaGlwIGlzIGhvcml6b250YWwsIGNsYXNzTGlzdCBjb250YWlucyAneCcsXG4gICAgb3RoZXIgd2F5IGFycm91bmQgZm9yIHZlcnRpY2FsICd5JyAqL1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtY29udGFpbmVyJyk7XG4gICAgaWYgKHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygneCcpKSB7XG4gICAgICBkaXJlY3Rpb24gPSAneCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9ICd5JztcbiAgICB9XG4gICAgLy8gSW5kZXggb2YgdGhlIGdyaWRJdGVtIHdoZXJlIHVucGxhY2VkIHNoaXAgd2FzIGRyb3BwZWQuXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmkpO1xuICAgIC8vIE9ubHkgcGxhY2UgYSBzaGlwIGlmIHRoZSBncmlkIGNvbnRhaW5lciB0YXJnZXQgaXMgdGhlIHBsYXllciwgbm90IHRoZSBjb21wdXRlclxuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdwbGF5ZXItY29udGFpbmVyJykpIHtcbiAgICAgIHBsYXllci5nYW1lLnBsYWNlU2hpcChpbmRleCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgZ2FtZSgnc3RhZ2UyJyk7XG4gIH07XG5cbmV4cG9ydCB7XG4gIGVycm9yLFxuICBoYW5kbGVCdG5zLFxuICBnYW1lU3RhZ2UsXG4gIGRpc3BsYXlVbnBsYWNlZFNoaXAsXG4gIGRyYWdvdmVySGFuZGxlcixcbiAgZHJvcEhhbmRsZXIsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9