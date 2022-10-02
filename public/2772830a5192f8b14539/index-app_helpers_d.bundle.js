"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_gateway_dashboard"] = self["webpackChunkapi_gateway_dashboard"] || []).push([["index-app_helpers_d"],{

/***/ "./app/helpers/dom.js":
/*!****************************!*\
  !*** ./app/helpers/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClass\": () => (/* binding */ addClass),\n/* harmony export */   \"removeClass\": () => (/* binding */ removeClass)\n/* harmony export */ });\nvar addClass = function addClass(elem, newClass) {\n  if (elem) elem.className += \" \" + newClass;\n};\nvar removeClass = function removeClass(elem, removedClass) {\n  if (elem) {\n    var arr = elem.className.split(\" \").filter(function (x) {\n      return x !== removedClass;\n    });\n    elem.className = arr.join(' ');\n  }\n};\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/helpers/dom.js?");

/***/ }),

/***/ "./app/helpers/ma.js":
/*!***************************!*\
  !*** ./app/helpers/ma.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUrlParameter\": () => (/* binding */ getUrlParameter),\n/* harmony export */   \"goTo\": () => (/* binding */ goTo),\n/* harmony export */   \"setHistoryUrl\": () => (/* binding */ setHistoryUrl),\n/* harmony export */   \"setParamApp\": () => (/* binding */ setParamApp),\n/* harmony export */   \"setUpTemplate\": () => (/* binding */ setUpTemplate)\n/* harmony export */ });\nvar setHistoryUrl = function setHistoryUrl(prevUrl, component) {\n  history.pushState({\n    prevUrl: component\n  }, null, '');\n};\nvar goTo = function goTo(hash) {\n  location.hash = '/' + hash;\n};\nvar getUrlParameter = function getUrlParameter(name) {\n  name = name.replace(/[\\[]/, '\\\\[').replace(/[\\]]/, '\\\\]');\n  var regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');\n  var results = regex.exec(location.search);\n  return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));\n};\nvar setUpTemplate = function setUpTemplate() {\n  var contentFullHeight = $('.content-full-height');\n  var verticalFullHeight = $('.content-full-height .vertical-center');\n  var windowFullHeight = window.innerHeight;\n\n  if ($('.header').hasClass('disabled')) {\n    var headerHeight = 0;\n  } else {\n    var headerHeight = $('.header').height() + 12;\n  }\n\n  var footerMenuHeight = $('#footer-menu').height();\n\n  if (!$('.header').length) {\n    headerHeight = 0;\n  }\n\n  if ($('.header').length) {\n    contentFullHeight.css({\n      'height': windowFullHeight\n    });\n    verticalFullHeight.css({\n      'padding-top': headerHeight\n    });\n  }\n\n  if (!$('.header').length) {\n    contentFullHeight.css('height', windowFullHeight);\n  }\n\n  $('.caption').each(function () {\n    var notchSize = 0;\n\n    if ($('body').hasClass('has-notch')) {\n      var notchSize = $('.notch-hider').height();\n    }\n\n    var windowHeight = window.innerHeight;\n    var captionHeight = $(this).data('height');\n\n    if (captionHeight === \"cover\") {\n      $(this).css('height', windowHeight - notchSize - headerHeight);\n      $('.map-full').css('height', windowHeight - headerHeight - footerMenuHeight);\n\n      if (!$('.header').length) {\n        $('.page-content').css('padding-bottom', '0px');\n        $(this).find('.caption-center, .caption-bottom, .caption-top').css('margin-top', '0px');\n      }\n\n      if ($('.header').length) {\n        $(this).find('.caption-center, .caption-bottom, .caption-top').css('margin-top', $('.header').height());\n      }\n    }\n\n    if (captionHeight === \"cover-header\") {\n      $(this).css('height', windowHeight - headerHeight - footerMenuHeight);\n      $('.map-full').css('height', windowHeight - headerHeight - footerMenuHeight); //$(this).css('height', windowHeight)\n\n      if (!$('.header').length) {\n        $('.page-content').css('padding-bottom', '0px');\n        $(this).find('.caption-center, .caption-bottom, .caption-top').css('margin-top', '0px');\n      }\n\n      if ($('.header').length) {\n        $(this).find('.caption-center, .caption-bottom, .caption-top').css('margin-top', $('.header').height());\n      }\n    }\n\n    $(this).css('height', captionHeight);\n  });\n};\nvar setParamApp = function setParamApp(newDataApp) {\n  for (var _i = 0, _Object$keys = Object.keys(newDataApp); _i < _Object$keys.length; _i++) {\n    var key = _Object$keys[_i];\n    App[key] = newDataApp[key];\n  }\n};\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/helpers/ma.js?");

/***/ }),

/***/ "./app/helpers/security.js":
/*!*********************************!*\
  !*** ./app/helpers/security.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"encrypt\": () => (/* binding */ encrypt)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar config = {\n  a: '7fa42b5237fffa44a01d766b566ca6c18cf8e9eced8b34f61bc86ca722f9235d',\n  b: '41e40637f14e28a022cccc528b89b128'\n};\n\nfunction buf2hex(buffer) {\n  // buffer is an ArrayBuffer\n  return _toConsumableArray(new Uint8Array(buffer)).map(function (x) {\n    return x.toString(16).padStart(2, '0');\n  }).join('');\n}\n\nfunction hexStringToArrayBuffer(hexString) {\n  hexString = hexString.replace(/^0x/, '');\n\n  if (hexString.length % 2 != 0) {\n    console.log('WARNING: expecting an even number of characters in the hexString');\n  }\n\n  var bad = hexString.match(/[G-Z\\s]/i);\n\n  if (bad) {\n    console.log('WARNING: found non-hex characters', bad);\n  }\n\n  var pairs = hexString.match(/[\\dA-F]{2}/gi);\n  var integers = pairs.map(function (s) {\n    return parseInt(s, 16);\n  });\n  var array = new Uint8Array(integers);\n  return array.buffer;\n}\n\nvar encrypt = function encrypt(text) {\n  return new Promise(function (resolve, reject) {\n    var key = hexStringToArrayBuffer(config.a);\n    var iv = hexStringToArrayBuffer(config.b);\n    text = new TextEncoder().encode(text);\n    window.crypto.subtle.importKey('raw', key, 'AES-GCM', false, ['encrypt']).then(function (importedKey) {\n      var enc = window.crypto.subtle.encrypt({\n        name: \"AES-GCM\",\n        iv: iv\n      }, importedKey, text);\n      enc.then(function (buffer) {\n        resolve(buf2hex(buffer));\n      })[\"catch\"](reject);\n    })[\"catch\"](reject);\n  });\n};\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/helpers/security.js?");

/***/ }),

/***/ "./app/helpers/storage.js":
/*!********************************!*\
  !*** ./app/helpers/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeStorage\": () => (/* binding */ changeStorage),\n/* harmony export */   \"deleteStorage\": () => (/* binding */ deleteStorage),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage)\n/* harmony export */ });\n/* harmony import */ var helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/utilities */ \"./app/helpers/utilities.js\");\n\nvar changeStorage = function changeStorage(data, prefix) {\n  if (prefix) prefix = \"\".concat(prefix, \"_\");\n\n  for (var key in data) {\n    var value = data[key];\n    var fullKey = \"\".concat(prefix).concat(key);\n    localStorage.setItem(fullKey, value);\n    (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.logInfo)(\"[ACTIONS][STORAGE]setting \".concat(fullKey));\n  }\n};\nvar getStorage = function getStorage(key, prefix, defaultValue) {\n  if (prefix) prefix = \"\".concat(prefix, \"_\");else prefix = '';\n  var fullKey = \"\".concat(prefix).concat(key);\n  var v = localStorage.getItem(fullKey);\n  (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.logInfo)(\"[ACTIONS][STORAGE]getting \".concat(fullKey));\n  return v || defaultValue;\n};\nvar deleteStorage = function deleteStorage(item) {\n  localStorage.removeItem(item);\n};\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/helpers/storage.js?");

/***/ }),

/***/ "./app/helpers/utilities.js":
/*!**********************************!*\
  !*** ./app/helpers/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copyTextInSelector\": () => (/* binding */ copyTextInSelector),\n/* harmony export */   \"debugLog\": () => (/* binding */ debugLog),\n/* harmony export */   \"formatNumber\": () => (/* binding */ formatNumber),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"hideModal\": () => (/* binding */ hideModal),\n/* harmony export */   \"logError\": () => (/* binding */ logError),\n/* harmony export */   \"logInfo\": () => (/* binding */ logInfo),\n/* harmony export */   \"parseRequestURL\": () => (/* binding */ parseRequestURL),\n/* harmony export */   \"randomNumber\": () => (/* binding */ randomNumber),\n/* harmony export */   \"randomString\": () => (/* binding */ randomString),\n/* harmony export */   \"sendToClipboard\": () => (/* binding */ sendToClipboard),\n/* harmony export */   \"setFavicon\": () => (/* binding */ setFavicon),\n/* harmony export */   \"showAlertError\": () => (/* binding */ showAlertError),\n/* harmony export */   \"showAlertSuccess\": () => (/* binding */ showAlertSuccess),\n/* harmony export */   \"showConfirmation\": () => (/* binding */ showConfirmation),\n/* harmony export */   \"showModal\": () => (/* binding */ showModal),\n/* harmony export */   \"showToastError\": () => (/* binding */ showToastError),\n/* harmony export */   \"showToastSuccess\": () => (/* binding */ showToastSuccess),\n/* harmony export */   \"sleep\": () => (/* binding */ sleep)\n/* harmony export */ });\n/* harmony import */ var packagejson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! packagejson */ \"./package.json\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* utilities used for util function like localstorage, date, or many others */\n\n\n\n // import '@sweetalert2/theme-bootstrap-4/bootstrap-4.css'\n\nvar version = packagejson__WEBPACK_IMPORTED_MODULE_0__.version;\nvar name = packagejson__WEBPACK_IMPORTED_MODULE_0__.name;\nvar isDevelopment = \"production\";\nvar ls = localStorage;\nvar getStorage = function getStorage(key) {\n  var isJSON = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  if (!key || key.length === 0) throw new Error('No Storage Key Defined');\n  var data = ls.getItem(key);\n  if (!isJSON) return data;\n  return JSON.parse(data);\n};\nvar formatNumber = function formatNumber(n) {\n  return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n};\nvar copyTextInSelector = function copyTextInSelector(selectorId) {\n  var sel = document.getElementById(selectorId);\n  var text = sel.html();\n  if (!navigator) alert('copy text doesn\\'t supported');\n  navigator.clipboard.writeText(text);\n};\nvar sendToClipboard = function sendToClipboard(text) {\n  if (!navigator) alert('copy text doesn\\'t supported');\n  navigator.clipboard.writeText(text);\n};\nvar showAlertError = function showAlertError(e) {\n  if (!e) return null;\n  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({\n    icon: 'error',\n    title: 'Error',\n    text: e.error || e.message\n  });\n  console.error(e);\n};\nvar showAlertSuccess = function showAlertSuccess(message) {\n  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(_objectSpread({\n    icon: 'success',\n    title: 'Success',\n    text: message\n  }, opt));\n};\nvar showConfirmation = function showConfirmation(message) {\n  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(_objectSpread({\n    title: 'Confirmation',\n    text: message,\n    confirmButtonText: 'Confirm',\n    showCancelButton: true\n  }, opt));\n};\nvar showToastSuccess = function showToastSuccess(message) {\n  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(_objectSpread({\n    toast: true,\n    icon: 'success',\n    // title: message,\n    // text: message,\n    position: 'top-end',\n    padding: '5px',\n    timer: 3 * 1000,\n    html: \"<span class=\\\"tx-12\\\">\".concat(message, \"</span>\"),\n    buttonsStyling: 'tx-10',\n    timerProgressBar: true,\n    showConfirmButton: false,\n    didOpen: function didOpen(toast) {\n      toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));\n      toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));\n    }\n  }, opt));\n};\nvar showToastError = function showToastError(message) {\n  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(_objectSpread({\n    toast: true,\n    icon: 'error',\n    title: 'Error',\n    text: message\n  }, opt));\n};\nvar parseRequestURL = function parseRequestURL() {\n  var url = location.hash.slice(1).toLowerCase() || '';\n  var urlpath = url.substring(0, url.indexOf('?') >= 0 ? url.indexOf('?') : url.length).split(\"/\").filter(function (x) {\n    return x.length > 0;\n  });\n  var queryString = url.indexOf('?') >= 0 ? url.substring(url.indexOf('?')) : '';\n  return {\n    resource: urlpath[1],\n    verb: urlpath[2] ? urlpath[2] : '',\n    id: urlpath[3] ? urlpath[3] : '',\n    pathName: urlpath.join('_'),\n    queryString: queryString\n  };\n};\nvar sleep = function sleep(ms) {\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, ms);\n  });\n};\nvar debugLog = function debugLog() {\n  var _console;\n\n  if (!isDevelopment) return null;\n  var time = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('LLL');\n\n  for (var _len = arguments.length, opt = new Array(_len), _key = 0; _key < _len; _key++) {\n    opt[_key] = arguments[_key];\n  }\n\n  (_console = console).log.apply(_console, [time].concat(opt));\n};\nvar logInfo = function logInfo() {\n  var _console2;\n\n  var time = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('LLL');\n\n  for (var _len2 = arguments.length, opt = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    opt[_key2] = arguments[_key2];\n  }\n\n  (_console2 = console).log.apply(_console2, [\"[\".concat(name, \":v\").concat(version, \"]\"), time].concat(opt));\n};\nvar logError = function logError() {\n  var time = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('LLL');\n  console.log(\"[\".concat(name, \":v\").concat(version, \"]\"), time);\n\n  for (var _len3 = arguments.length, opt = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    opt[_key3] = arguments[_key3];\n  }\n\n  console.error(opt);\n};\nvar randomString = function randomString() {\n  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    onlyNums: false,\n    onlyChars: false\n  };\n  var result = '';\n  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';\n  if (opt.onlyNums) characters = '0123456789';else if (!opt.onlyChars) characters += '0123456789';\n  var charactersLength = characters.length;\n\n  for (var i = 0; i < size; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n\n  return result;\n};\nvar randomNumber = function randomNumber() {\n  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 99999;\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\nvar setFavicon = function setFavicon(favicon) {\n  var h = jquery__WEBPACK_IMPORTED_MODULE_3___default()('head > link[rel=\"shortcut icon\"]');\n  if (h && h[0] && h[0].href) h[0].href = favicon;\n};\nvar showModal = function showModal(modalId) {\n  var sel = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#' + modalId);\n  if (sel && sel.modal) sel.modal('show');\n  return sel;\n};\nvar hideModal = function hideModal(modalId) {\n  jquery__WEBPACK_IMPORTED_MODULE_3___default()('#' + modalId).modal('hide');\n};\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/helpers/utilities.js?");

/***/ }),

/***/ "./app/helpers/validation.js":
/*!***********************************!*\
  !*** ./app/helpers/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateNewRouter\": () => (/* binding */ validateNewRouter)\n/* harmony export */ });\n/* harmony import */ var lodash_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.result */ \"./node_modules/lodash.result/index.js\");\n/* harmony import */ var lodash_result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_result__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Validation = /*#__PURE__*/function () {\n  function Validation(data) {\n    _classCallCheck(this, Validation);\n\n    this.data = data;\n  }\n\n  _createClass(Validation, [{\n    key: \"validate\",\n    value: function validate(config) {\n      try {\n        for (var field in config) {\n          var types = (config[field] || '').split(',').map(function (x) {\n            return x.trim();\n          }).filter(function (x) {\n            return x.length > 0;\n          });\n          if (types.length === 0) continue;\n\n          var _iterator = _createForOfIteratorHelper(types),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var type = _step.value;\n              this.execute(field, type);\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n        }\n      } catch (err) {\n        throw err;\n      }\n    }\n  }, {\n    key: \"execute\",\n    value: function execute(field, type) {\n      switch (type) {\n        case 'required':\n          this.required(field);\n          break;\n\n        default:\n          break;\n      }\n    }\n  }, {\n    key: \"required\",\n    value: function required(field) {\n      var msg = \"\".concat(field, \" Required\");\n      if (!lodash_result__WEBPACK_IMPORTED_MODULE_0___default()(this.data, field)) throw new Error(msg);\n    }\n  }]);\n\n  return Validation;\n}();\n\nvar newRouterFormConfig = {\n  clientId: 'required',\n  httpScheme: 'required',\n  domain: 'required',\n  apiKey: 'required'\n};\nvar validateNewRouter = function validateNewRouter(data) {\n  new Validation(data).validate(newRouterFormConfig);\n};\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/helpers/validation.js?");

/***/ })

}]);