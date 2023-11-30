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
  overflow: hidden;
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
  position: absolute;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  grid-template-rows: 15% 1fr;
  display: grid;
}
.landing-page[closing] {
  animation:
    slide-down 0.5s forwards,
    fade-out 0.5s forwards;
  pointer-events: none;
}
.landing-page[closed] {
  display: none;
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
.game-page[opening] {
  height: 100vh;
  display: grid;
  grid-template-rows: 16% 64% 20%;
  opacity: 0;
}
.game-page[open] {
  animation:
    slide-up 1s forwards,
    fade-in 1s forwards;
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
  perspective: 800px;
}
.ships-container.y {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.ships-container.x .unplaced-ship {
  width: 30px;
  height: 30px;
  background-color: grey;
  border: 1px solid black;
  cursor: pointer;
  animation: highlitedShipX 1s infinite alternate;
}

.ships-container.y .unplaced-ship {
  width: 30px;
  height: 30px;
  background-color: grey;
  border: 1px solid black;
  cursor: pointer;
  animation: highlitedShipY infinite linear;
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
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
  justify-content: center;
  z-index: 1000000;
}
.game-over.display {
  display: flex;
}
.game-over-container {
  width: 60vw;
  height: 30vh;
  gap: 20px;
  border: 10px solid rgb(0, 105, 148);
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  transition: all 0.3s ease;
}
.game-over-container:hover {
  transform: scale(1.1);
}
.winner {
  font-size: 2rem;
  text-align: center;
}
.restart-game {
  width: 80%;
  font-size: 1.5rem;
  padding: 10px;
  border: 5px solid rgb(0, 105, 148);
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

.how-to-play {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
  opacity: 1;
  z-index: 333322;
  top: 0;
  left: 0;
}
.how-to-play.open {
  animation: fade-in-display-flex 2s ease;
  display: flex;
}
.how-to-play.close {
  animation: fade-out-display-none 1s ease;
}

.how-to-play-container {
  background-color: #082b42;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  max-width: 60%;
  gap: 70px;
  padding: 20px;
  animation: jump 0.5s infinite alternate;
}
.how-to-play-container li {
  font-size: 1.3rem;
}
.how-to-play-container ul {
  list-style-type: none;
}

.grey {
  background-color: rgb(77, 77, 77);
}
.red {
  background-color: rgb(255, 0, 0);
}
.white {
  background-color: rgb(192, 192, 192);
}
.black {
  background-color: black;
}
.color-help li {
  padding: 10px;
}
.close-help-btn {
  background-color: yellow;
  color: black;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  top: 22%;
  right: 20%;
  font-size: 1.5rem;
  border: 3px solid black;
  cursor: pointer;
  display: flex;
  align-self: end;
}
.help-btn {
  position: absolute;
  width: 60px;
  height: 60px;
  font-size: 4rem;
  background-color: yellow;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 2px;
  top: 5%;
  left: 5%;
  border: none;
  font-weight: 600;
  cursor: pointer;
  z-index: 3000;
}

@media only screen and (max-width: 768px) {
  body {
    background: linear-gradient(rgba(3, 23, 36, 0.7), rgba(0, 0, 0, 1)),
      url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    overflow: auto;
    height: 100%;
  }
  .get-player-info {
    margin: 0;
  }
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .header .title {
    font-size: 3rem;
  }
  form label {
    font-size: 1.2rem;
  }
  form input {
    font-size: 1.2rem;
    width: 80%;
    min-width: 20vw;
  }
  form button {
    font-size: 1.2rem;
  }
  .game-page[open] {
    height: 150vh;
    display: grid;
    grid-template-rows: 10% 10% auto;
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
    top: 14%;
  }
  .game-over {
    background-color: rgba(0, 0, 0, 0.5);
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
  .how-to-play {
  }
  .how-to-play-container {
    width: 100vw;
    gap: 20px;
  }
  .how-to-play-container h1 {
    font-size: 1.2rem;
  }
  .how-to-play-container li {
    font-size: 1rem;
  }
  .help-btn {
    top: 11%;
    width: 30px;
    height: 30px;
    font-size: 2rem;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slide-down {
  100% {
    transform: translateY(100%);
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes highlitedShipX {
  from {
    border: 1px solid black;
  }
  to {
    border: 1px solid yellow;
    transform: rotateX(360deg);
  }
}
@keyframes highlitedShipY {
  from {
    border: 1px solid black;
  }
  to {
    border: 1px solid yellow;
    transform: rotateY(360deg);
  }
}

@keyframes jump {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-1%);
  }
}

@keyframes fade-out-display-none {
  0% {
    opacity: 1;
    display: flex;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes fade-in-display-flex {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: flex;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,eAAe;EACf;;kEAEoE;EACpE,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;AAClB;AACA;;;;;;EAME,UAAU;EACV,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE;;0BAEwB;EACxB,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,qDAAqD;AACvD;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,yDAAyD;AAC3D;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,aAAa;EACb,+BAA+B;EAC/B,UAAU;AACZ;AACA;EACE;;uBAEqB;AACvB;AACA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;;EAEpB,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,+CAA+C;AACjD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,mCAAmC;EACnC,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,kCAAkC;EAClC,iBAAiB;EACjB,eAAe;EACf,yDAAyD;AAC3D;AACA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,eAAe;EACf,MAAM;EACN,OAAO;AACT;AACA;EACE,uCAAuC;EACvC,aAAa;AACf;AACA;EACE,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,SAAS;EACT,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,gCAAgC;AAClC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;AACA;EACE,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,UAAU;EACV,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,aAAa;AACf;;AAEA;EACE;IACE;6CAC6C;IAC7C,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;IAC5B,cAAc;IACd,YAAY;EACd;EACA;IACE,SAAS;EACX;EACA;IACE,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;EAC/B;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,UAAU;IACV,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,aAAa;IACb,gCAAgC;EAClC;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,kCAAkC;IAClC,2BAA2B;EAC7B;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,uCAAuC;EACzC;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;EACf;EACA;IACE,UAAU;IACV,YAAY;IACZ,QAAQ;IACR,QAAQ;EACV;EACA;IACE,oCAAoC;IACpC,aAAa;EACf;;EAEA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;IACX,eAAe;EACjB;EACA;EACA;EACA;IACE,YAAY;IACZ,SAAS;EACX;EACA;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;EACjB;EACA;IACE,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,2BAA2B;EAC7B;AACF;AACA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,wBAAwB;IACxB,0BAA0B;EAC5B;AACF;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,wBAAwB;IACxB,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,UAAU;IACV,aAAa;EACf;;EAEA;IACE,UAAU;IACV,aAAa;EACf;AACF;AACA;EACE;IACE,UAAU;IACV,aAAa;EACf;;EAEA;IACE,UAAU;IACV,aAAa;EACf;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');\n\n:root {\n  --main-font: 'Allerta Stencil', sans-serif;\n}\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  background:\n    linear-gradient(rgba(6, 97, 158, 0.2), rgba(0, 0, 0, 0.4)),\n    url(./assets/ai-generated-8228367_1920.jpg) center/cover no-repeat;\n  color: white;\n  font-family: var(--main-font);\n  overflow: hidden;\n}\nh1,\nh2,\nh3,\np,\nul,\nli {\n  padding: 0;\n  margin: 0;\n}\n.landing-page {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  gap: 20px;\n  grid-template-rows: 15% 1fr;\n  display: grid;\n}\n.landing-page[closing] {\n  animation:\n    slide-down 0.5s forwards,\n    fade-out 0.5s forwards;\n  pointer-events: none;\n}\n.landing-page[closed] {\n  display: none;\n}\n.hide {\n  display: none;\n}\n.header {\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header .title {\n  font-size: 8vh;\n  transition: all 0.3s ease;\n}\n.header .title:hover {\n  margin-right: 20px;\n  transform: scale(1.1);\n}\n.get-player-info {\n  margin: 75px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.get-player-info:hover {\n  margin: 30px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\nform {\n  width: 100%;\n  gap: 50px;\n  display: flex;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  font-size: 3rem;\n  text-align: center;\n}\nform input {\n  width: 35vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 3rem;\n  border-radius: 5px;\n  border: none;\n  font-family: var(--main-font);\n  color: white;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\nform input:hover {\n  background-color: #3498db;\n  transform: scale(1.1);\n}\nform input:focus {\n  background-color: #3498db;\n  transform: scale(1.1);\n}\nform button {\n  width: 30vw;\n  min-width: 200px;\n  padding: 10px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 4px;\n  font-family: var(--main-font);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\nform button:hover {\n  background-color: #3498db;\n  color: #fff;\n  border-color: #fff;\n  transform: scale(1.1);\n}\n.game-page {\n  display: none;\n}\n.game-page[opening] {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 16% 64% 20%;\n  opacity: 0;\n}\n.game-page[open] {\n  animation:\n    slide-up 1s forwards,\n    fade-in 1s forwards;\n}\n.game-status {\n  height: 5vh;\n  width: 80vw;\n  font-size: 2rem;\n  border-radius: 5px;\n  color: chartreuse;\n  background-color: black;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n  justify-items: center;\n  transition: all 0.3s ease;\n}\n.game-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.player-name {\n  text-transform: uppercase;\n  font-size: 40px;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  gap: 3px;\n}\n.gridItem {\n  width: 30px;\n  height: 30px;\n  border: 3px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.gridItem:hover {\n  background-color: rgb(135, 243, 238);\n  transform: scale(1.1);\n}\n\n.empty {\n  background-color: rgb(0, 105, 148);\n}\n.ship {\n  background-color: rgb(77, 77, 77);\n}\n.shipHitted {\n  background-color: rgb(255, 0, 0);\n}\n.missedShot {\n  background-color: rgb(192, 192, 192);\n}\n.isSunked {\n  background-color: black;\n}\nfooter {\n  border-radius: 20px;\n  width: 60vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.ships-container.x {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  perspective: 800px;\n}\n.ships-container.y {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.ships-container.x .unplaced-ship {\n  width: 30px;\n  height: 30px;\n  background-color: grey;\n  border: 1px solid black;\n  cursor: pointer;\n  animation: highlitedShipX 1s infinite alternate;\n}\n\n.ships-container.y .unplaced-ship {\n  width: 30px;\n  height: 30px;\n  background-color: grey;\n  border: 1px solid black;\n  cursor: pointer;\n  animation: highlitedShipY infinite linear;\n}\n.rotate-btn {\n  display: none;\n  font-size: 2rem;\n  bottom: 8%;\n  left: 30%;\n  position: absolute;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n}\n.rotate-btn.display {\n  display: block;\n}\n.game-over {\n  display: none;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.9);\n  align-items: center;\n  justify-content: center;\n  z-index: 1000000;\n}\n.game-over.display {\n  display: flex;\n}\n.game-over-container {\n  width: 60vw;\n  height: 30vh;\n  gap: 20px;\n  border: 10px solid rgb(0, 105, 148);\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.game-over-container:hover {\n  transform: scale(1.1);\n}\n.winner {\n  font-size: 2rem;\n  text-align: center;\n}\n.restart-game {\n  width: 80%;\n  font-size: 1.5rem;\n  padding: 10px;\n  border: 5px solid rgb(0, 105, 148);\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n.restart-game:hover {\n  transform: scale(1.1);\n  background-color: #3498db;\n  color: #fff;\n  border-color: #fff;\n}\n\n.how-to-play {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: none;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  z-index: 333322;\n  top: 0;\n  left: 0;\n}\n.how-to-play.open {\n  animation: fade-in-display-flex 2s ease;\n  display: flex;\n}\n.how-to-play.close {\n  animation: fade-out-display-none 1s ease;\n}\n\n.how-to-play-container {\n  background-color: #082b42;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 10px;\n  max-width: 60%;\n  gap: 70px;\n  padding: 20px;\n  animation: jump 0.5s infinite alternate;\n}\n.how-to-play-container li {\n  font-size: 1.3rem;\n}\n.how-to-play-container ul {\n  list-style-type: none;\n}\n\n.grey {\n  background-color: rgb(77, 77, 77);\n}\n.red {\n  background-color: rgb(255, 0, 0);\n}\n.white {\n  background-color: rgb(192, 192, 192);\n}\n.black {\n  background-color: black;\n}\n.color-help li {\n  padding: 10px;\n}\n.close-help-btn {\n  background-color: yellow;\n  color: black;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  top: 22%;\n  right: 20%;\n  font-size: 1.5rem;\n  border: 3px solid black;\n  cursor: pointer;\n  display: flex;\n  align-self: end;\n}\n.help-btn {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  font-size: 4rem;\n  background-color: yellow;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  border-radius: 2px;\n  top: 5%;\n  left: 5%;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  z-index: 3000;\n}\n\n@media only screen and (max-width: 768px) {\n  body {\n    background: linear-gradient(rgba(3, 23, 36, 0.7), rgba(0, 0, 0, 1)),\n      url(./assets/ai-generated-8228367_1920.jpg);\n    background-size: cover;\n    background-position: center center;\n    background-attachment: fixed;\n    overflow: auto;\n    height: 100%;\n  }\n  .get-player-info {\n    margin: 0;\n  }\n  form {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n  .header .title {\n    font-size: 3rem;\n  }\n  form label {\n    font-size: 1.2rem;\n  }\n  form input {\n    font-size: 1.2rem;\n    width: 80%;\n    min-width: 20vw;\n  }\n  form button {\n    font-size: 1.2rem;\n  }\n  .game-page[open] {\n    height: 150vh;\n    display: grid;\n    grid-template-rows: 10% 10% auto;\n  }\n  .game-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .game-container {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: none;\n  }\n  .game-status {\n    font-size: 1rem;\n  }\n  .player-name {\n    font-size: 1.2rem;\n  }\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n  }\n  .gridItem {\n    width: 25px;\n    height: 25px;\n  }\n  .unplaced-ship {\n    width: 25px;\n    height: 25px;\n  }\n\n  footer {\n    width: 100%;\n    height: 20vh;\n    border-radius: 0;\n    grid-row: 2/3;\n  }\n  .rotate-btn {\n    padding: 0;\n    height: 60px;\n    left: 5%;\n    top: 14%;\n  }\n  .game-over {\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 150vh;\n  }\n\n  .game-over-container {\n    width: 100%;\n  }\n  .winner {\n    font-size: 2rem;\n  }\n  .restart-game {\n    width: 70vw;\n    font-size: 2rem;\n  }\n  .how-to-play {\n  }\n  .how-to-play-container {\n    width: 100vw;\n    gap: 20px;\n  }\n  .how-to-play-container h1 {\n    font-size: 1.2rem;\n  }\n  .how-to-play-container li {\n    font-size: 1rem;\n  }\n  .help-btn {\n    top: 11%;\n    width: 30px;\n    height: 30px;\n    font-size: 2rem;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes slide-down {\n  100% {\n    transform: translateY(100%);\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes highlitedShipX {\n  from {\n    border: 1px solid black;\n  }\n  to {\n    border: 1px solid yellow;\n    transform: rotateX(360deg);\n  }\n}\n@keyframes highlitedShipY {\n  from {\n    border: 1px solid black;\n  }\n  to {\n    border: 1px solid yellow;\n    transform: rotateY(360deg);\n  }\n}\n\n@keyframes jump {\n  0% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(-1%);\n  }\n}\n\n@keyframes fade-out-display-none {\n  0% {\n    opacity: 1;\n    display: flex;\n  }\n\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n@keyframes fade-in-display-flex {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n\n  100% {\n    opacity: 1;\n    display: flex;\n  }\n}\n"],"sourceRoot":""}]);
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
      const randomIndex = Math.floor(Math.random() * 99);
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
      winner.textContent = 'You failed soldier, you lost the war...';
    }
    if (lobbyPlayers.computer.game.isAllSunk()) {
      winner.textContent = 'Good job soldier, you won the war!';
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
      // If index+i is bigger than 99
      if (iStatus[index + i] === undefined) {
        return true;
      }
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
  const helpBtn = document.querySelector('.help-btn');
  const howToPlay = document.querySelector('.how-to-play');
  const closeHelpBtn = document.querySelector('.close-help-btn');

  /* This event listener will start the game by calling initialize function with the value of the input text as the name of the player,
   landing page will hide, game page will display and player-name as a new name */

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const soldierName = soldierNameElement.value;
    landingPage.setAttribute('closing', '');
    landingPage.addEventListener(
      'animationend',
      () => {
        landingPage.removeAttribute('closing');
        landingPage.setAttribute('closed', '');
        gamePage.setAttribute('opening', '');
        gamePage.setAttribute('open', '');
      },
      { once: true },
    );

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

  helpBtn.addEventListener('click', () => {
    howToPlay.classList = 'how-to-play open';
  });

  closeHelpBtn.addEventListener('click', () => {
    howToPlay.classList = 'how-to-play close';
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
};

const dragoverHandler = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkhBQTZIO0FBQzdILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsWUFBWSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxNQUFNLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUss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QUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBSTtBQUNSOztBQVNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2FpLWdlbmVyYXRlZC04MjI4MzY3XzE5MjAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLW1haW4tZm9udDogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XG59XG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoNiwgOTcsIDE1OCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjQpKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmgxLFxuaDIsXG5oMyxcbnAsXG51bCxcbmxpIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmxhbmRpbmctcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBnYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5sYW5kaW5nLXBhZ2VbY2xvc2luZ10ge1xuICBhbmltYXRpb246XG4gICAgc2xpZGUtZG93biAwLjVzIGZvcndhcmRzLFxuICAgIGZhZGUtb3V0IDAuNXMgZm9yd2FyZHM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmxhbmRpbmctcGFnZVtjbG9zZWRdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDh2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5oZWFkZXIgLnRpdGxlOmhvdmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uZ2V0LXBsYXllci1pbmZvIHtcbiAgbWFyZ2luOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmdldC1wbGF5ZXItaW5mbzpob3ZlciB7XG4gIG1hcmdpbjogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAzNXZ3O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcbn1cbmZvcm0gaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5mb3JtIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuZm9ybSBidXR0b24ge1xuICB3aWR0aDogMzB2dztcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uZ2FtZS1wYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nYW1lLXBhZ2Vbb3BlbmluZ10ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE2JSA2NCUgMjAlO1xuICBvcGFjaXR5OiAwO1xufVxuLmdhbWUtcGFnZVtvcGVuXSB7XG4gIGFuaW1hdGlvbjpcbiAgICBzbGlkZS11cCAxcyBmb3J3YXJkcyxcbiAgICBmYWRlLWluIDFzIGZvcndhcmRzO1xufVxuLmdhbWUtc3RhdHVzIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiA4MHZ3O1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IGNoYXJ0cmV1c2U7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyLW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdhcDogM3B4O1xufVxuLmdyaWRJdGVtIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdyaWRJdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMjQzLCAyMzgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDUsIDE0OCk7XG59XG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcbn1cbi5zaGlwSGl0dGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG4ubWlzc2VkU2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbn1cbi5pc1N1bmtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuZm9vdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDYwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uc2hpcHMtY29udGFpbmVyLngge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGVyc3BlY3RpdmU6IDgwMHB4O1xufVxuLnNoaXBzLWNvbnRhaW5lci55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2hpcHMtY29udGFpbmVyLnggLnVucGxhY2VkLXNoaXAge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGhpZ2hsaXRlZFNoaXBYIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLnNoaXBzLWNvbnRhaW5lci55IC51bnBsYWNlZC1zaGlwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBoaWdobGl0ZWRTaGlwWSBpbmZpbml0ZSBsaW5lYXI7XG59XG4ucm90YXRlLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm90dG9tOiA4JTtcbiAgbGVmdDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJvdGF0ZS1idG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdhbWUtb3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDAwO1xufVxuLmdhbWUtb3Zlci5kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5nYW1lLW92ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogMzB2aDtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDAsIDEwNSwgMTQ4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZ2FtZS1vdmVyLWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi53aW5uZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXN0YXJ0LWdhbWUge1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDAsIDEwNSwgMTQ4KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xufVxuLnJlc3RhcnQtZ2FtZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmhvdy10by1wbGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAzMzMzMjI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5ob3ctdG8tcGxheS5vcGVuIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluLWRpc3BsYXktZmxleCAycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhvdy10by1wbGF5LmNsb3NlIHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dC1kaXNwbGF5LW5vbmUgMXMgZWFzZTtcbn1cblxuLmhvdy10by1wbGF5LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJiNDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgZ2FwOiA3MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbmltYXRpb246IGp1bXAgMC41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uaG93LXRvLXBsYXktY29udGFpbmVyIGxpIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uaG93LXRvLXBsYXktY29udGFpbmVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcbn1cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cbi53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbn1cbi5ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNvbG9yLWhlbHAgbGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNsb3NlLWhlbHAtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDIyJTtcbiAgcmlnaHQ6IDIwJTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5oZWxwLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDMwMDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMywgMjMsIDM2LCAwLjcpLCByZ2JhKDAsIDAsIDAsIDEpKSxcbiAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmdldC1wbGF5ZXItaW5mbyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGZvcm0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbiAgLmhlYWRlciAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBmb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICBmb3JtIGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi13aWR0aDogMjB2dztcbiAgfVxuICBmb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmdhbWUtcGFnZVtvcGVuXSB7XG4gICAgaGVpZ2h0OiAxNTB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDEwJSBhdXRvO1xuICB9XG4gIC5nYW1lLXN0YXR1cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5nYW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcbiAgfVxuICAuZ2FtZS1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAucGxheWVyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XG4gIH1cbiAgLmdyaWRJdGVtIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbiAgLnVucGxhY2VkLXNoaXAge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgfVxuICAucm90YXRlLWJ0biB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAxNCU7XG4gIH1cbiAgLmdhbWUtb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGhlaWdodDogMTUwdmg7XG4gIH1cblxuICAuZ2FtZS1vdmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpbm5lciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5yZXN0YXJ0LWdhbWUge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuaG93LXRvLXBsYXkge1xuICB9XG4gIC5ob3ctdG8tcGxheS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lciBsaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5oZWxwLWJ0biB7XG4gICAgdG9wOiAxMSU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZ2hsaXRlZFNoaXBYIHtcbiAgZnJvbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgdG8ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoaWdobGl0ZWRTaGlwWSB7XG4gIGZyb20ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIHRvIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBqdW1wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLW91dC1kaXNwbGF5LW5vbmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZGlzcGxheS1mbGV4IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7O2tFQUVvRTtFQUNwRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBOzs7Ozs7RUFNRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0U7OzBCQUV3QjtFQUN4QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIs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Q2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLFFBQVE7RUFDVjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtFQUNBO0VBQ0E7SUFDRSxZQUFZO0lBQ1osU0FBUztFQUNYO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsMEJBQTBCO0VBQzVCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGxlcnRhK1N0ZW5jaWwmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWZvbnQ6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoNiwgOTcsIDE1OCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjQpKSxcXG4gICAgdXJsKC4vYXNzZXRzL2FpLWdlbmVyYXRlZC04MjI4MzY3XzE5MjAuanBnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5wLFxcbnVsLFxcbmxpIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi5sYW5kaW5nLXBhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDFmcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5sYW5kaW5nLXBhZ2VbY2xvc2luZ10ge1xcbiAgYW5pbWF0aW9uOlxcbiAgICBzbGlkZS1kb3duIDAuNXMgZm9yd2FyZHMsXFxuICAgIGZhZGUtb3V0IDAuNXMgZm9yd2FyZHM7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxhbmRpbmctcGFnZVtjbG9zZWRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmhlYWRlciAudGl0bGUge1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4uaGVhZGVyIC50aXRsZTpob3ZlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5nZXQtcGxheWVyLWluZm8ge1xcbiAgbWFyZ2luOiA3NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4uZ2V0LXBsYXllci1pbmZvOmhvdmVyIHtcXG4gIG1hcmdpbjogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9ybSBsYWJlbCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDM1dnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxufVxcbmZvcm0gaW5wdXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzB2dztcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxufVxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLmdhbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ2FtZS1wYWdlW29wZW5pbmddIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNiUgNjQlIDIwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5nYW1lLXBhZ2Vbb3Blbl0ge1xcbiAgYW5pbWF0aW9uOlxcbiAgICBzbGlkZS11cCAxcyBmb3J3YXJkcyxcXG4gICAgZmFkZS1pbiAxcyBmb3J3YXJkcztcXG59XFxuLmdhbWUtc3RhdHVzIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogY2hhcnRyZXVzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXItbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdhcDogM3B4O1xcbn1cXG4uZ3JpZEl0ZW0ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdyaWRJdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDI0MywgMjM4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDUsIDE0OCk7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG59XFxuLnNoaXBIaXR0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcbi5taXNzZWRTaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG59XFxuLmlzU3Vua2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5mb290ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG4uc2hpcHMtY29udGFpbmVyLngge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwZXJzcGVjdGl2ZTogODAwcHg7XFxufVxcbi5zaGlwcy1jb250YWluZXIueSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXBzLWNvbnRhaW5lci54IC51bnBsYWNlZC1zaGlwIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiBoaWdobGl0ZWRTaGlwWCAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIueSAudW5wbGFjZWQtc2hpcCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFuaW1hdGlvbjogaGlnaGxpdGVkU2hpcFkgaW5maW5pdGUgbGluZWFyO1xcbn1cXG4ucm90YXRlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm90dG9tOiA4JTtcXG4gIGxlZnQ6IDMwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucm90YXRlLWJ0bi5kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDAwMDAwO1xcbn1cXG4uZ2FtZS1vdmVyLmRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmdhbWUtb3Zlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDMwdmg7XFxuICBnYXA6IDIwcHg7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDAsIDEwNSwgMTQ4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4uZ2FtZS1vdmVyLWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi53aW5uZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucmVzdGFydC1nYW1lIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMCwgMTA1LCAxNDgpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxufVxcbi5yZXN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaG93LXRvLXBsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDMzMzMyMjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5ob3ctdG8tcGxheS5vcGVuIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbi1kaXNwbGF5LWZsZXggMnMgZWFzZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ob3ctdG8tcGxheS5jbG9zZSB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0LWRpc3BsYXktbm9uZSAxcyBlYXNlO1xcbn1cXG5cXG4uaG93LXRvLXBsYXktY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODJiNDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1heC13aWR0aDogNjAlO1xcbiAgZ2FwOiA3MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFuaW1hdGlvbjoganVtcCAwLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLmhvdy10by1wbGF5LWNvbnRhaW5lciBsaSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmhvdy10by1wbGF5LWNvbnRhaW5lciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG59XFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLndoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcXG59XFxuLmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29sb3ItaGVscCBsaSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY2xvc2UtaGVscC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0b3A6IDIyJTtcXG4gIHJpZ2h0OiAyMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuLmhlbHAtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiA1JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAzMDAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMywgMjMsIDM2LCAwLjcpLCByZ2JhKDAsIDAsIDAsIDEpKSxcXG4gICAgICB1cmwoLi9hc3NldHMvYWktZ2VuZXJhdGVkLTgyMjgzNjdfMTkyMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmdldC1wbGF5ZXItaW5mbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgLmhlYWRlciAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICBmb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICBmb3JtIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1pbi13aWR0aDogMjB2dztcXG4gIH1cXG4gIGZvcm0gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAuZ2FtZS1wYWdlW29wZW5dIHtcXG4gICAgaGVpZ2h0OiAxNTB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMTAlIGF1dG87XFxuICB9XFxuICAuZ2FtZS1zdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcXG4gIH1cXG4gIC5nYW1lLXN0YXR1cyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5wbGF5ZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbiAgLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgfVxcbiAgLmdyaWRJdGVtIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gIH1cXG4gIC51bnBsYWNlZC1zaGlwIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICAucm90YXRlLWJ0biB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbGVmdDogNSU7XFxuICAgIHRvcDogMTQlO1xcbiAgfVxcbiAgLmdhbWUtb3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgaGVpZ2h0OiAxNTB2aDtcXG4gIH1cXG5cXG4gIC5nYW1lLW92ZXItY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAud2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLnJlc3RhcnQtZ2FtZSB7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAuaG93LXRvLXBsYXkge1xcbiAgfVxcbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbiAgLmhvdy10by1wbGF5LWNvbnRhaW5lciBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5oZWxwLWJ0biB7XFxuICAgIHRvcDogMTElO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBoaWdobGl0ZWRTaGlwWCB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxuICB0byB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgaGlnaGxpdGVkU2hpcFkge1xcbiAgZnJvbSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGp1bXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMSUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0LWRpc3BsYXktbm9uZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLWRpc3BsYXktZmxleCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IGRpc3BsYXlHcmlkIGZyb20gJy4vZ3JpZCc7XG5pbXBvcnQgeyBnYW1lU3RhZ2UsIGRpc3BsYXlVbnBsYWNlZFNoaXAgfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRnVuY3Rpb24gY3JlYXRlZCB0byBhc3NpZ24gYSB2YWx1ZSB0byBhbiBleHBvcnRlZCB2YXJpYWJsZS4gZm9ybS5hZGRFdmVudFxubGV0IGxvYmJ5UGxheWVycztcbmZ1bmN0aW9uIHNldEh1bWFuTmFtZShuYW1lKSB7XG4gIGxvYmJ5UGxheWVycyA9IG5hbWU7XG59XG5cbmNvbnN0IGdhbWUgPSAoc3RhZ2UpID0+IHtcbiAgaWYgKHN0YWdlID09PSAnc3RhZ2UxJykge1xuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItY29udGFpbmVyJyk7XG4gICAgZGlzcGxheUdyaWQocGxheWVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMucGxheWVyT25lKTtcbiAgICBkaXNwbGF5R3JpZChjb21wdXRlckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyKTtcbiAgICBnYW1lU3RhZ2UoJ2NhcnJpZXInKTtcbiAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDUpO1xuICAgIHdoaWxlIChsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5ob3dNYW55U2hpcHMoKSAhPT0gMTcpIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTkpO1xuICAgICAgY29uc3QgZGlyZXRpb24gPSBbJ3knLCAneCddO1xuICAgICAgY29uc3QgcmFuZG9tRGlyZXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUucGxhY2VTaGlwKFxuICAgICAgICByYW5kb21JbmRleCxcbiAgICAgICAgZGlyZXRpb25bcmFuZG9tRGlyZXRpb25dLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhZ2UgPT09ICdzdGFnZTInKSB7XG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcbiAgICBkaXNwbGF5R3JpZChwbGF5ZXJDb250YWluZXIsIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUpO1xuICAgIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDUpIHtcbiAgICAgIGdhbWVTdGFnZSgnYmF0dGxlc2hpcCcpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCg0KTtcbiAgICB9IGVsc2UgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gOSkge1xuICAgICAgZ2FtZVN0YWdlKCdjcnVpc2VyJyk7XG4gICAgICBkaXNwbGF5VW5wbGFjZWRTaGlwKDMpO1xuICAgIH0gZWxzZSBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmhvd01hbnlTaGlwcygpID09PSAxMikge1xuICAgICAgZ2FtZVN0YWdlKCdzdWJtYXJpbmUnKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoMyk7XG4gICAgfSBlbHNlIGlmIChsb2JieVBsYXllcnMucGxheWVyT25lLmdhbWUuaG93TWFueVNoaXBzKCkgPT09IDE1KSB7XG4gICAgICBnYW1lU3RhZ2UoJ2Rlc3Ryb3llcicpO1xuICAgICAgZGlzcGxheVVucGxhY2VkU2hpcCgyKTtcbiAgICB9IGVsc2UgaWYgKGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5ob3dNYW55U2hpcHMoKSA9PT0gMTcpIHtcbiAgICAgIGdhbWVTdGFnZSgnYWxsU2hpcHNQbGFjZWQnKTtcbiAgICAgIGRpc3BsYXlVbnBsYWNlZFNoaXAoJ2NvbXBsZXRlZCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGdhbWUoJ3N0YWdlMycpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YWdlID09PSAnc3RhZ2UzJykge1xuICAgIGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XG4gICAgZ2FtZVN0YWdlKCdhdHRhY2snKTtcbiAgICBjb21wdXRlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIEdldCB0aGUgZS50YXJnZXRJZCBhbmQgcGFyc2VJbnQgdG8gbnVtXG4gICAgICBjb25zdCB0YXJnZXRJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaSk7XG5cbiAgICAgIC8vIElmIHRoZSBjb29yZHMgb2YgdGhlIGF0dGFjayBpcyBhbHJlYWR5IGF0dGFja2VkLCByZXR1cm4uXG4gICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaVN0YXR1c1t0YXJnZXRJZF0uaXNBdHRhY2tlZCA9PT0gbnVsbCkge1xuICAgICAgICBsb2JieVBsYXllcnMucGxheWVyT25lQXR0YWNrcyh0YXJnZXRJZCk7XG4gICAgICAgIGRpc3BsYXlHcmlkKGNvbXB1dGVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMuY29tcHV0ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiBJZiB0aGUgY29tcHV0ZXIgaGFzIGEgc2hpcCBvbiBpbmRleCh0YXJnZXRJZCksXG4gICAgICBzZXQgbWVzc2FnZSAnWW91IGhpdCBhIHNoaXAhJywgdHdvIHNlY29uZHMgYWZ0ZXIoSWYgY29tcHV0ZXIgc3RpbGwgaGFzIHNoaXBzKSxcbiAgICAgIG1lc3NhZ2UgdGhhdCBjb21wdXRlciB3aWxsIGF0dGFjaywgYW5kIHR3byBzZWNvbmRzIGFmdGVyIHRoYXQgbWVzc2FnZSB3aWxsIGRpc3BsYXkgdGhhdCByYW5kb20gYXR0YWNrICovXG4gICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaGFzU2hpcCh0YXJnZXRJZCkpIHtcbiAgICAgICAgZ2FtZVN0YWdlKCdhdHRhY2tlZFNoaXAnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlTdGF0dXNbdGFyZ2V0SWRdLnNoaXAuaXNJdFN1bmsgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2FtZVN0YWdlKCdzaGlwRG93bicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlzQWxsU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZVN0YWdlKCdjb21wdXRlckF0dGFja3MnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxvYmJ5UGxheWVycy5jb21wdXRlckF0dGFja3MoKTtcbiAgICAgICAgICAgIGRpc3BsYXlHcmlkKHBsYXllckNvbnRhaW5lciwgbG9iYnlQbGF5ZXJzLnBsYXllck9uZSk7XG4gICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBFbHNlID0+IHRoZSBjb21wdXRlciBkb2Vzbid0IGhhdmUgYSBzaGlwIG9uIGluZGV4KHRhcmdldElkKSxcbiAgICAgICAgc2V0IG1lc3NhZ2UgdGhhdCBwbGF5ZXIgbWlzc2VkIHRoZSBjb21wdXRlcnMgc2hpcCwgYWZ0ZXIgdHdvIHNlY29uZHMsIFxuICAgICAgICB3aWxsIGRvIHRoZSBzYW1lIGFzIHdoZW4gY29tcHV0ZXIgaGFzIHNoaXAgKi9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVTdGFnZSgnbWlzc2VkU2hpcCcpO1xuICAgICAgICBpZiAobG9iYnlQbGF5ZXJzLmNvbXB1dGVyLmdhbWUuaXNBbGxTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lU3RhZ2UoJ2NvbXB1dGVyQXR0YWNrcycpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbG9iYnlQbGF5ZXJzLmNvbXB1dGVyQXR0YWNrcygpO1xuICAgICAgICAgICAgZGlzcGxheUdyaWQocGxheWVyQ29udGFpbmVyLCBsb2JieVBsYXllcnMucGxheWVyT25lKTtcbiAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhbGwgc3VuaywgbWVzc2FnZSB0aGF0IGdhbWUgaXMgb3ZlciBhbmQgY2FsbCBzdGFnZT0nZ2FtZU92ZXInXG4gICAgICBpZiAoXG4gICAgICAgIGxvYmJ5UGxheWVycy5wbGF5ZXJPbmUuZ2FtZS5pc0FsbFN1bmsoKSB8fFxuICAgICAgICBsb2JieVBsYXllcnMuY29tcHV0ZXIuZ2FtZS5pc0FsbFN1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIGdhbWVTdGFnZSgnZ2FtZU92ZXInKTtcbiAgICAgICAgZ2FtZSgnZ2FtZU92ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChzdGFnZSA9PT0gJ2dhbWVPdmVyJykge1xuICAgIGNvbnN0IGdhbWVPdmVySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKTtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG4gICAgZ2FtZU92ZXJIVE1MLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBpZiAobG9iYnlQbGF5ZXJzLnBsYXllck9uZS5nYW1lLmlzQWxsU3VuaygpKSB7XG4gICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnWW91IGZhaWxlZCBzb2xkaWVyLCB5b3UgbG9zdCB0aGUgd2FyLi4uJztcbiAgICB9XG4gICAgaWYgKGxvYmJ5UGxheWVycy5jb21wdXRlci5nYW1lLmlzQWxsU3VuaygpKSB7XG4gICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSAnR29vZCBqb2Igc29sZGllciwgeW91IHdvbiB0aGUgd2FyISc7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBnYW1lLCBsb2JieVBsYXllcnMsIHNldEh1bWFuTmFtZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgLy8gY3JlYXRlcyBhbiBhcnJheSB3aXRoIGNvb3JkZW5hdGVzXG4gIGNvbnN0IGJ1aWxkQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkgKz0gMSkge1xuICAgICAgICBib2FyZC5wdXNoKFt4LCB5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICAvLyBjcmVhdGVzIGFuIGFycmF5IGZvciBlYWNoIGNvb2RlbmF0ZSBmcm9tIGJvYXJkIGFycmF5XG4gIGNvbnN0IGJvYXJkU3RhdHVzID0gKGFycikgPT4ge1xuICAgIGNvbnN0IGlTdGF0dXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaVN0YXR1c1tpXSA9IHtcbiAgICAgICAgaXNBdHRhY2tlZDogbnVsbCxcbiAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBpU3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICBjb25zdCBpU3RhdHVzID0gYm9hcmRTdGF0dXMoYm9hcmQpO1xuXG4gIGNvbnN0IGlzRGlmZmVyZW50Um93ID0gKGluZGV4LCBpKSA9PiB7XG4gICAgLyogVGhlIGVuZCBvZiByb3cgZW5kcyBieSA5IFs5LDE5LDI5LDM5LDQ5LDU5LDY5LDc5LDg5LDk5XSBcbiAgICBJZiBpbmRleCBpcyBzbWFsbGVyIHRoYW4gOShleGFtcGxlKSwgYW5kIGluZGV4ICsgaSBpcyBiaWdnZXIgdGhhbiA5IHJldHVybiB0cnVlLiBwbGFjZW1lbnQgbm90IGFsbG93ZWQgKi9cbiAgICBmb3IgKGxldCBqID0gOTsgaiA8IDEwMDsgaiArPSAxMCkge1xuICAgICAgaWYgKGluZGV4IDw9IGogJiYgaW5kZXggKyBpID4gaikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIENhbGxlZCBvbiBwbGFjZVNoaXAoKSwgcmV0dXJucyB0cnVlIGlmIGl0cyBVTmF2YWlsYWJsZSBcbiAgRm9yIGhvcml6b250YWwgaWYgKGluZGV4ICsgaSkgaGFzIHNoaXAgb3IgaWYgaXRzIGRpZmZlcmVudCByb3cgcmV0dXJuXG4gIEZvciB2ZXJ0aWNhbCwgaW5kZXhlcyBnbyAxMCBhZnRlciAxMCwgaWYgKGluZGV4ICsgaSAqIDEwKWhhcyBzaGlwIG9yXG4gIGlmIChpbmRleCArIGkgKiAxMCkgaXMgYmlnZ2VyIG9yIGVxdWFsIHRoYW4gMTAwIHJldHVybiwgYmVjYXVzZSB0aGUgYmlnZ2VzdCBpbmRleCBpcyA5OSAqL1xuICBjb25zdCBpc1BsYWNlbWVudFVuYXZhaWxhYmxlID0gKGluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIElmIGluZGV4K2kgaXMgYmlnZ2VyIHRoYW4gOTlcbiAgICAgIGlmIChpU3RhdHVzW2luZGV4ICsgaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd4Jykge1xuICAgICAgICBpZiAoaVN0YXR1c1tpbmRleCArIGldLnNoaXAgIT09IG51bGwgfHwgaXNEaWZmZXJlbnRSb3coaW5kZXgsIGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgICAgaWYgKGluZGV4ICsgaSAqIDEwID49IDEwMCB8fCBpU3RhdHVzW2luZGV4ICsgaSAqIDEwXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIFRoaXMgd2lsbCByZXR1cm4gaG93IG1hbnkgc2hpcHMgYXJlIGluIHBsYXllciBnYW1lYm9hcmQuXG4gIEl0IHdpbGwgYmUgdXNlZnVsbCB0byBjaGVjayBpZiB0aGVyZSdzIG9ubHkgNSBzaGlwIGluZGV4ZXMsIFxuICB0aGF0IG1lYW5zIG9ubHkgdGhlIGNhcnJpZXIgd2FzIHBsYWNlZCBhbmQgd2UgY2FuIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHBsYWNlbWVudC4gKi9cbiAgY29uc3QgaG93TWFueVNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9jdXBwaWVkV2l0aFNoaXAgPSBpU3RhdHVzLmZpbHRlcigoaW5kZXgpID0+IGluZGV4LnNoaXAgIT0gbnVsbCk7XG4gICAgY29uc3QgaG93TWFueVNoaXBJbmRleGVzID0gb2N1cHBpZWRXaXRoU2hpcC5sZW5ndGg7XG4gICAgcmV0dXJuIGhvd01hbnlTaGlwSW5kZXhlcztcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgaW5kZXggPSBjb29yZHM7XG4gICAgbGV0IGxlbmd0aDtcblxuICAgIC8vIEZpcnN0IGNyZWF0ZXMgYSBzaGlwIHdpdGggbGVuZ3RoIHBhc3NlZCBhcyBwYXJhbWV0ZXI7XG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGJvYXJkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgY29vcmRzIHBhcmFtYXRlcnM7XG5cbiAgICAvLyBJZiBjb29yZHMgaXMgZ2l2ZW4gd2l0aCBhbiBhcnJheSBbMCwwXSwgbmV4dCBzdGVwIGlzIGZpbmQgdGhlIGluZGV4XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29vcmRzKSkge1xuICAgICAgaW5kZXggPSBib2FyZC5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50WzBdID09PSBjb29yZHNbMF0gJiYgZWxlbWVudFsxXSA9PT0gY29vcmRzWzFdLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiBFdmVyeXRpbWUgd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIHdlIGNoZWNrIGhvdyBtYW55IHNoaXBzIGFyZSBpbiB0aGUgZ2FtZWJvYXJkLCBcbiAgICBpcyB0aGUgc2FtZSBhcyBzYXlpbmcgaG93IG1hbnkgdGltZXMgd2FzIHRoaXMgZnVjbnRpb24gc3VjZXNzZnVseSBjYWxsZWQobm8gcGxhY2VtZW50IHVuYXZhaWxhYmxlKSwgXG4gICAgd2lsbCBjaGFuZ2UgdGhlIGxlbmd0aC4gICovXG5cbiAgICBpZiAoaG93TWFueVNoaXBzKCkgPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgfSBlbHNlIGlmIChob3dNYW55U2hpcHMoKSA9PT0gNSkge1xuICAgICAgbGVuZ3RoID0gNDtcbiAgICB9IGVsc2UgaWYgKGhvd01hbnlTaGlwcygpID09PSA5KSB7XG4gICAgICBsZW5ndGggPSAzO1xuICAgIH0gZWxzZSBpZiAoaG93TWFueVNoaXBzKCkgPT09IDEyKSB7XG4gICAgICBsZW5ndGggPSAzO1xuICAgIH0gZWxzZSBpZiAoaG93TWFueVNoaXBzKCkgPT09IDE1KSB7XG4gICAgICBsZW5ndGggPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoKTtcblxuICAgIC8vIElmIHBsYWNlbWVudCBpcyBub3QgYWxsb3dlZCByZXR1cm4gZXJyb3I7XG4gICAgaWYgKGlzUGxhY2VtZW50VW5hdmFpbGFibGUoaW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdwbGFjZW1lbnQnKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGxvb3BzIHdpbGwgY29udGludWUgYXMgbG9uZyBhcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIGlzIG5vdCByZWFjaGVkLlxuICAgIElmIGRpcmVjdGlvbiBpcyB4IChob3Jpem9udGFsKSwgdGhlIGluZGV4IGlzIG9uZSBhZnRlciB0aGUgb25lLCBzbyB0aGUgaW5kZXggKyBpID0gbmV3U2hpcFxuICAgIElmIGRpcmVjdGlvbiBpcyB5ICh2ZXJ0aWNhbCksIHRoZSBpbmRleCBpcyAxMCBhZnRlciAxMCwgc28gdGhlIGluZGV4IGlzIGkgKiAxMC4gKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgaVN0YXR1c1tpbmRleCArIGldLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgIGlTdGF0dXNbaW5kZXggKyBpICogMTBdLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNTaGlwID0gKGNvb3JkcykgPT4ge1xuICAgIGxldCBpbmRleCA9IGNvb3JkcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZHMpKSB7XG4gICAgICBpbmRleCA9IGJvYXJkLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnRbMF0gPT09IGNvb3Jkc1swXSAmJiBlbGVtZW50WzFdID09PSBjb29yZHNbMV0sXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaVN0YXR1c1tpbmRleF0uc2hpcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qIGlTdGF0dXMgb2JqZWN0IGhhcyBhIGtleSBpc0F0dGFja2VkIGFuZCBhbiBPQkpFQ1Qoc2hpcCAqd2hlbiBpdHMgb2NjdXBpZWQqKSwgXG4gIHNvIGlzQXR0YWNrZWQgbmVlZHMgdG8gYmUgc2V0IG8gdHJ1ZSwgYW5kIHNoaXAgb2JqZWN0IG5lZWRzIHRvIGNhbGwgaXQncyBvd24gZnVuY3Rpb25cbiAgY2FsbGVkIGJlZW5IaXQgdGhhdCBpbmNyZW1lbnRzIHRoZSBudW1iZXIgb2YgXCJoaXRzXCIoYSBzaGlwIHByb3ByZXR5KSAqL1xuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGxldCBpbmRleCA9IGNvb3JkcztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvb3JkcykpIHtcbiAgICAgIGluZGV4ID0gYm9hcmQuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudFswXSA9PT0gY29vcmRzWzBdICYmIGVsZW1lbnRbMV0gPT09IGNvb3Jkc1sxXSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaVN0YXR1c1tpbmRleF0uaXNBdHRhY2tlZCA9IHRydWU7XG4gICAgaWYgKGlTdGF0dXNbaW5kZXhdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgIGlTdGF0dXNbaW5kZXhdLnNoaXAuYmVlbkhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKiBGaWx0ZXIgdGhlIGV4aXN0aW5nIHNoaXBzIGZyb20gaVN0YXR1cyBhcnJheVxuICAuZXZlcnkgaXMgY2FsbGVkIG9uIHRoZSBmaWx0cmVkIGFycmF5IHRvIGNoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vua2VkXG4gIElmIC5ldmVyeSBpcyB0cnVlLCByZXR1cm4gdHJ1ZSBvdGhlcndpc2UgZmFsc2UgKi9cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IG9jdXBwaWVkV2l0aFNoaXAgPSBpU3RhdHVzLmZpbHRlcigoaW5kZXgpID0+IGluZGV4LnNoaXAgIT0gbnVsbCk7XG4gICAgY29uc3QgYWxsU3Vua2VkID0gb2N1cHBpZWRXaXRoU2hpcC5ldmVyeShcbiAgICAgIChpbmRleCkgPT4gaW5kZXguc2hpcC5pc0l0U3VuayA9PT0gdHJ1ZSxcbiAgICApO1xuICAgIGlmIChhbGxTdW5rZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBpU3RhdHVzLFxuICAgIHBsYWNlU2hpcCxcbiAgICBoYXNTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIGhvd01hbnlTaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cblxuaW1wb3J0IHsgZHJhZ292ZXJIYW5kbGVyLCBkcm9wSGFuZGxlciB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKiBMb29wIGZyb20gMCB0byA5OSwgZWFjaCBsb29wIGNyZWF0ZXMgYSBkaXYgd2l0aCBkYXRhc2V0LWksXG5zbyB0aGF0IGVhY2ggZWxlbWVudCBoYXMgaWRlbnRpZmllciBhcyBpbmRleCBzdGFydGluZyBmcm9tIDAgKi9cblxuLyogSXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGNvbnRhaW5lcihkZXBlbmRpbmcgaWYgaXRzIG9uIHBsYXllckNvbnRhaW5lciBvciBjb21wdXRlckNvbnRhaW5lcixcbnNhbWUgZ29lcyBmb3Igd2hpY2hQbGF5ZXIsIGVhY2ggcGxheWVyIGhhcyBpdCdzIG93biBhcnJheShpU3RhdHVzKS4gXG5wbGF5ZXJDb250YWluZXIgbmVlZHMgdG8gZGlzcGxheSBwbGF5ZXJPbmUgYW5kIGNvbXB1dGVyQ29udGFpbmVyIGNvbXB1dGVyICovXG5jb25zdCBkaXNwbGF5R3JpZCA9IChjb250YWluZXIsIHdoaWNoUGxheWVyKSA9PiB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtJztcbiAgICBncmlkSXRlbS5kYXRhc2V0LmkgPSBpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgLy8gRHJhZyBhbmQgZHJvcCBhZGRlZCAnLi91dGlscy5qcydcbiAgICBncmlkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVySGFuZGxlcik7XG4gICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BIYW5kbGVyKGNvbnRhaW5lciwgd2hpY2hQbGF5ZXIpKTtcbiAgICAvLyBJdHMgZW1wdHkgYW5kIG5vdCBoaXRcbiAgICBpZiAoXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uaXNBdHRhY2tlZCA9PT0gbnVsbCAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgPT09IG51bGxcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBlbXB0eSc7XG4gICAgfVxuXG4gICAgLyogQ2xhc3MgbGlzdCBuZWVkcyB0byBiZSBjaGVja2VkLCBiZWNhdXNlIGNvbXB1dGVyIHNoaXBzIFxuICAgIG11c250IGJlIGRpc3BsYXllZCwgc28gZ3JpZEl0ZW0gZW1wdHkoYmx1ZSkgKi9cbiAgICBpZiAoXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdwbGF5ZXItY29udGFpbmVyJykgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkID09PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIHNoaXAnO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjb21wdXRlci1jb250YWluZXInKSAmJlxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgPT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gZW1wdHknO1xuICAgIH1cblxuICAgIC8vIEl0cyBub3QgZW1wdHkgYW5kIGhpdCwgYnV0IG5vdCBzdW5rXG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLmlzQXR0YWNrZWQgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcC5pc0l0U3VuayA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdCA9ICdncmlkSXRlbSBzaGlwSGl0dGVkJztcbiAgICB9XG5cbiAgICAvLyBJdHMgZW1wdHkgYW5kIGhpdFxuICAgIGlmIChcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5pc0F0dGFja2VkICE9PSBudWxsICYmXG4gICAgICB3aGljaFBsYXllci5nYW1lLmlTdGF0dXNbaV0uc2hpcCA9PT0gbnVsbFxuICAgICkge1xuICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0ID0gJ2dyaWRJdGVtIG1pc3NlZFNob3QnO1xuICAgIH1cblxuICAgIC8vIEl0cyBzdW5rXG4gICAgaWYgKFxuICAgICAgd2hpY2hQbGF5ZXIuZ2FtZS5pU3RhdHVzW2ldLnNoaXAgIT09IG51bGwgJiZcbiAgICAgIHdoaWNoUGxheWVyLmdhbWUuaVN0YXR1c1tpXS5zaGlwLmlzSXRTdW5rID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBncmlkSXRlbS5jbGFzc0xpc3QgPSAnZ3JpZEl0ZW0gaXNTdW5rZWQnO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUdyaWQ7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhhbmRsZUJ0bnMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vYXNzZXRzL3NoaXAucG5nJztcblxuaGFuZGxlQnRucygpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGdhbWVTdGFnZSB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKiBOYW1lIHBhc3NlZCBpdCBhcyBwYXJhbWV0ZXJzIHNldHMgdGhlIG5hbWUgb2YgdGhlIHBsYXllck9uZS5cbkNvbXB1dGVyIHN0YXJ0cyB3aXRoIGlzIG93biBjb21wdXRlciBuYW1lICovXG5jb25zdCBQbGF5ZXIgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZSA9IHtcbiAgICB1c2VybmFtZTogcGxheWVyLFxuICAgIGdhbWU6IEdhbWVib2FyZCgpLFxuICAgIHR1cm46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXIgPSB7XG4gICAgdXNlcm5hbWU6ICdDb21wdXRlcicsXG4gICAgZ2FtZTogR2FtZWJvYXJkKCksXG4gIH07XG5cbiAgY29uc3QgYm9hcmRDb3B5ID0gWy4uLnBsYXllck9uZS5nYW1lLmJvYXJkXTtcblxuICAvKiBUbyBub3QgcmVwZWF0IGF0dGFja3MsIHJhbmRvbUluZGV4IGZyb20gYm9hcmRDb3B5Lmxlbmd0aFxuICBnZXQgdGhlIGNvb3JkcyBmcm9tIHRoYXQgYm9hcmRDb3B5IHJhbmRvbSBpbmRleCBhbmQgYXR0YWNrIHBsYXllck9uZSBhbmRcbiAgZGVsZXRlIHRoYXQgaW5kZXggZnJvbSB0aGUgYm9hcmRDb3B5IHNvIGNvb3JkcyBkb250IHJlcGVhdFxuICAqL1xuICBjb25zdCBjb21wdXRlckF0dGFja3MgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllck9uZS50dXJuID09PSBmYWxzZSAmJiBjb21wdXRlci5nYW1lLmlzQWxsU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZENvcHkubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IGJvYXJkQ29weVtyYW5kb21JbmRleF07XG4gICAgICBwbGF5ZXJPbmUuZ2FtZS5yZWNpZXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICBib2FyZENvcHkuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcbiAgICAgIHBsYXllck9uZS50dXJuID0gdHJ1ZTtcbiAgICAgIGdhbWVTdGFnZSgnYXR0YWNrJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qIFdpdGggY29vcmRzIGdpdmVuIGFzIHBhcmFtZXRlciBhbmQgcGxheWVyT25lIHdpdGggdHVybjp0cnVlKGRlZmF1bHQpLFxuICBDb21wdXRlciByZWNpZXZlcyBhbiBhdHRhY2sgd2l0aCB0aG9zZSBjb29yZHMsIHR1cm4gaXMgc2V0IHRvIGZhbHNlIGFuZFxuICBjb21wdXRlckF0dGFja3MoKSBpcyBjYWxsZWQgICovXG4gIGNvbnN0IHBsYXllck9uZUF0dGFja3MgPSAoY29vcmRzKSA9PiB7XG4gICAgaWYgKHBsYXllck9uZS50dXJuID09PSB0cnVlKSB7XG4gICAgICBjb21wdXRlci5nYW1lLnJlY2lldmVBdHRhY2soY29vcmRzKTtcbiAgICAgIHBsYXllck9uZS50dXJuID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJPbmUudHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHlvdXIgdHVybiB0byBwbGF5Jyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHBsYXllck9uZSwgY29tcHV0ZXIsIHBsYXllck9uZUF0dGFja3MsIGNvbXB1dGVyQXR0YWNrcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0czogMCxcbiAgaXNJdFN1bms6IGZhbHNlLFxuICBiZWVuSGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzSXRTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWltcG9ydC1hc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgeyBnYW1lLCBzZXRIdW1hbk5hbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IGVycm9yID0gKHR5cGUpID0+IHtcbiAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xuICBpZiAodHlwZSA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICBlcnJvck1lc3NhZ2UgKz0gJ1RoaXMgcGxhY2VtZW50IGlzIG5vdCBhbGxvd2VkLic7XG4gIH1cbiAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbn07XG5cbi8vIERPTSBxdWVyeWluZyBpbnNpZGUgZnVuY3Rpb25zIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCBKRVNUXG5jb25zdCBoYW5kbGVCdG5zID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCBzb2xkaWVyTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29sZGllck5hbWUnKTtcbiAgY29uc3QgbGFuZGluZ1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1wYWdlJyk7XG4gIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtcGFnZScpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1uYW1lJyk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtZ2FtZScpO1xuICBjb25zdCBoZWxwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtYnRuJyk7XG4gIGNvbnN0IGhvd1RvUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3ctdG8tcGxheScpO1xuICBjb25zdCBjbG9zZUhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaGVscC1idG4nKTtcblxuICAvKiBUaGlzIGV2ZW50IGxpc3RlbmVyIHdpbGwgc3RhcnQgdGhlIGdhbWUgYnkgY2FsbGluZyBpbml0aWFsaXplIGZ1bmN0aW9uIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCB0ZXh0IGFzIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIsXG4gICBsYW5kaW5nIHBhZ2Ugd2lsbCBoaWRlLCBnYW1lIHBhZ2Ugd2lsbCBkaXNwbGF5IGFuZCBwbGF5ZXItbmFtZSBhcyBhIG5ldyBuYW1lICovXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzb2xkaWVyTmFtZSA9IHNvbGRpZXJOYW1lRWxlbWVudC52YWx1ZTtcbiAgICBsYW5kaW5nUGFnZS5zZXRBdHRyaWJ1dGUoJ2Nsb3NpbmcnLCAnJyk7XG4gICAgbGFuZGluZ1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdhbmltYXRpb25lbmQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsYW5kaW5nUGFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2Nsb3NpbmcnKTtcbiAgICAgICAgbGFuZGluZ1BhZ2Uuc2V0QXR0cmlidXRlKCdjbG9zZWQnLCAnJyk7XG4gICAgICAgIGdhbWVQYWdlLnNldEF0dHJpYnV0ZSgnb3BlbmluZycsICcnKTtcbiAgICAgICAgZ2FtZVBhZ2Uuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICk7XG5cbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBzb2xkaWVyTmFtZTtcbiAgICBzZXRIdW1hbk5hbWUoUGxheWVyKHNvbGRpZXJOYW1lKSk7XG4gICAgZ2FtZSgnc3RhZ2UxJyk7XG4gIH0pO1xuXG4gIC8qIFdpbGwgY2hhbmdlIHRoZSBjbGFzcyBuYW1lIG9mIHNoaXAtY29udGFpbmVyLWRlZmF1bHQteCBhbmQgYWxsIG9mIGhpcyBjaGlsZHMgY2xhc3MgbmFtZSBmcm9tICd4JyB0byAneSc7XG4gIEluIHRoZSBpZiBzdGF0ZW1lbnQgaXMgY2hlY2tlZCB0aGUgTEFTVCBlbGVtZW50IG9mIHRoZSBub2RlTGlzdCwgb25seSB3aGVuIHRoZSBMQVNUXG4gIGVsZW1lbnQgaGFzIGNoYW5nZWQgY2xhc3MgbmFtZSBtZWFucyB0aGF0IEFMTCBlbGVtZW50cyBiZWZvcmUgaGF2ZSBjaGFuZ2VkIHRvby4gKi9cbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3gnKSkge1xuICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NoaXBzLWNvbnRhaW5lciB5JztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NoaXBzLWNvbnRhaW5lciB4JztcbiAgICB9XG4gIH0pO1xuXG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscywgbm8tdW5kZWZcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgc2hpcHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ3N0YXJ0SGFuZGxlcik7XG5cbiAgaGVscEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBob3dUb1BsYXkuY2xhc3NMaXN0ID0gJ2hvdy10by1wbGF5IG9wZW4nO1xuICB9KTtcblxuICBjbG9zZUhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaG93VG9QbGF5LmNsYXNzTGlzdCA9ICdob3ctdG8tcGxheSBjbG9zZSc7XG4gIH0pO1xufTtcblxuLy8gV2lsbCBiZSBjYWxsZWQgZHVyaW5nIGdhbWUtbG9vcCB0byBjaGFuZ2UgdGhlIG1lc3NhZ2UoZG9tKSB3aGlsZSBnYW1lIGdvZXMgb24uXG5jb25zdCBnYW1lU3RhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBnYW1lU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhdHVzJyk7XG4gIGlmIChtZXNzYWdlID09PSAnY2FycmllcicpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ0Nob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIGNhcnJpZXIuLi4nO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgYmF0dGxlc2hpcC4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBjcnVpc2VyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnc3VibWFyaW5lJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgc3VibWFyaW5lLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnZGVzdHJveWVyJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgZGVzdHJveWVyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYWxsU2hpcHNQbGFjZWQnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9XG4gICAgICAnR29vZCBqb2IgcGxhY2luZyB5b3VyIHNoaXBzLCBoYXZlIHlvdSBkb25lIHRoaXMgYmVmb3JlPyc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2F0dGFjaycpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ05vdyEgQXR0YWNrIHlvdXIgb3Bwb25lbnQhJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnY29tcHV0ZXJBdHRhY2tzJykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnRW5lbXkgYXR0YWNrZWQsIGdldCByZWFkeSBmb3IgaW1wYWN0ISc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2F0dGFja2VkU2hpcCcpIHtcbiAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gJ1lvdSBoaXQgYSBzaGlwISc7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ21pc3NlZFNoaXAnKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdZb3UgaGl0ICEgVGhlIHdhdGVyLi4uJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnZ2FtZU92ZXInKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9ICdXYXIgZmluYWxseSBjYW1lIHRvIGFuIGVuZC4uLic7XG4gIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ3NoaXBBbHJlYWR5SGl0Jykge1xuICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSAnWW91IGhhdmUgYWxyZWFkeSBoaXQgdGhpcyBjb29yZGVuYXRlJztcbiAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnc2hpcERvd24nKSB7XG4gICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9XG4gICAgICAnQk9PT09PT00hISEgWW91IGhhdmUgZXhwbG9kZWQgb25lIG9mIHlvdXIgZW5lbXkgc2hpcHMnO1xuICB9XG59O1xuXG4vKiBDcmVhdGVzIGEgc2hpcCB0aHJvIGRvbSBtYW5pcHVsYXRpb24sIGxlbmd0aCBhcyB0aGUgcGFyYW1ldGVyLCBzbyBpdCBjcmVhdGVzIGRpZmZlcmVudCBzaXplZCBzaGlwcyAqL1xuY29uc3QgZGlzcGxheVVucGxhY2VkU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBpZiAobGVuZ3RoID09PSAnY29tcGxldGVkJykge1xuICAgIC8vIFJlbW92ZXMgdGhlIHVucGxhY2VkIHNoaXBzIGFuZCB0aGUgcm90YXRlIGJ1dHRvblxuICAgIGZvb3Rlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgc2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcm90YXRlQnRuLmNsYXNzTGlzdCA9ICdyb3RhdGUtYnRuJztcbiAgfVxuICAvKiBUaGlzIHdpbGwgbWFrZSB0aGF0IGV2ZXJ5dGltZSB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24sIHRoZSBwcmlvciBjb250ZW50IGluc2lkZSB0aGlzIGRpdiB3aWxsIHZhbmlzaC5cbiAgIEF2b2lkaW5nIHNoaXBzIG92ZXJmbG93LCBiZWNhdXNlIHRoZSBsYXN0IG9uZSB3YXMgYWxyZWFkeSBwbGFjZWQuICovXG4gIHNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdW5wbGFjZWRTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gVGhlIG1lYW5pbmcgb2YgeCB3aWxsIGJlIHRoYXQgc2hpcCBpcyBkaXNwbGF5ZWQgaG9yaXpvbnRhbGx5IGFzIGRlZmF1bHQuXG4gICAgdW5wbGFjZWRTaGlwLmNsYXNzTGlzdCA9IGB1bnBsYWNlZC1zaGlwYDtcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1bnBsYWNlZFNoaXApO1xuICB9XG59O1xuXG5jb25zdCBkcmFnc3RhcnRIYW5kbGVyID0gKGUpID0+IHtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbn07XG5cbmNvbnN0IGRyYWdvdmVySGFuZGxlciA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbn07XG5cbmNvbnN0IGRyb3BIYW5kbGVyID0gKGNvbnRhaW5lciwgcGxheWVyKSA9PlxuICBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvKiBHZXQgdGhlIHJpZ2h0IGRpcmVjdGlvbiB0aHJvdWdoIHRoZSBkaXNwbGF5VW5wbGFjZWRTaGlwLCBcbiAgICBpZiB0aGUgdW5wbGFjZWQgc2hpcCBpcyBob3Jpem9udGFsLCBjbGFzc0xpc3QgY29udGFpbnMgJ3gnLFxuICAgIG90aGVyIHdheSBhcnJvdW5kIGZvciB2ZXJ0aWNhbCAneScgKi9cbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGlmIChzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3gnKSkge1xuICAgICAgZGlyZWN0aW9uID0gJ3gnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSAneSc7XG4gICAgfVxuICAgIC8vIEluZGV4IG9mIHRoZSBncmlkSXRlbSB3aGVyZSB1bnBsYWNlZCBzaGlwIHdhcyBkcm9wcGVkLlxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pKTtcbiAgICAvLyBPbmx5IHBsYWNlIGEgc2hpcCBpZiB0aGUgZ3JpZCBjb250YWluZXIgdGFyZ2V0IGlzIHRoZSBwbGF5ZXIsIG5vdCB0aGUgY29tcHV0ZXJcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygncGxheWVyLWNvbnRhaW5lcicpKSB7XG4gICAgICBwbGF5ZXIuZ2FtZS5wbGFjZVNoaXAoaW5kZXgsIGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGdhbWUoJ3N0YWdlMicpO1xuICB9O1xuXG5leHBvcnQge1xuICBlcnJvcixcbiAgaGFuZGxlQnRucyxcbiAgZ2FtZVN0YWdlLFxuICBkaXNwbGF5VW5wbGFjZWRTaGlwLFxuICBkcmFnb3ZlckhhbmRsZXIsXG4gIGRyb3BIYW5kbGVyLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==