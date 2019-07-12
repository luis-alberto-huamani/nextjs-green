webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: ON_NAV, ON_REGISTER, ON_LOGIN, ON_USER, ON_STORE, storeSections, userAction, onNav, onRegister, onLogin, onUser, onStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_NAV", function() { return ON_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_REGISTER", function() { return ON_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGIN", function() { return ON_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_USER", function() { return ON_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_STORE", function() { return ON_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSections", function() { return storeSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAction", function() { return userAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNav", function() { return onNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRegister", function() { return onRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUser", function() { return onUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStore", function() { return onStore; });
var ON_NAV = 'ON_NAV';
var ON_REGISTER = 'ON_REGISTER';
var ON_LOGIN = 'ON_LOGIN';
var ON_USER = 'ON_USER';
var ON_STORE = 'ON_STORE_SECTIONS';
var storeSections = {
  OPEN_STORE: 'OPEN_STORE',
  HOME: 'HOME',
  PRODUCT_INFO: 'PRODUCT_INFO',
  BISUTERIA: 'BISUTERIA',
  JUGUETE: 'JUGUETE',
  GOLOSINA: 'GOLOSINA',
  MUSICA: 'MUSICA',
  EBOOK: 'EBOOK',
  TV: 'TV'
};
var userAction = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT'
};
var onNav = function onNav() {
  return {
    type: ON_NAV
  };
};
var onRegister = function onRegister() {
  return {
    type: ON_REGISTER
  };
};
var onLogin = function onLogin(option) {
  return {
    type: ON_LOGIN,
    option: option
  };
};
var onUser = function onUser(payload) {
  return {
    type: ON_USER,
    payload: payload
  };
};
var onStore = function onStore(section) {
  return {
    type: ON_STORE,
    section: section
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.c086d0a1c75c6bdf4638.hot-update.js.map