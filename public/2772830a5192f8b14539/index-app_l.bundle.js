"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_gateway_dashboard"] = self["webpackChunkapi_gateway_dashboard"] || []).push([["index-app_l"],{

/***/ "./app/layouts/components/menu-app.riot":
/*!**********************************************!*\
  !*** ./app/layouts/components/menu-app.riot ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-app */ \"./app/layouts/components/menu-app.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  'css': null,\n  'exports': _menu_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\n  'template': function(template, expressionTypes, bindingTypes, getComponent) {\n    return template(\n      '<div class=\"br-sideleft sideleft-scrollbar ps ps--active-y\"><ul class=\"br-sideleft-menu mg-t-30\"><li expr15=\"expr15\" class=\"br-menu-item\"></li></ul></div>',\n      [{\n        'type': bindingTypes.EACH,\n        'getKey': null,\n        'condition': null,\n\n        'template': template(\n          '<a expr16=\"expr16\"></a><a expr19=\"expr19\"></a><ul expr22=\"expr22\" class=\"br-menu-sub\"></ul>',\n          [{\n            'type': bindingTypes.IF,\n\n            'evaluate': function(scope) {\n              return !scope.o.childs;\n            },\n\n            'redundantAttribute': 'expr16',\n            'selector': '[expr16]',\n\n            'template': template(\n              '<font-awesome expr17=\"expr17\"></font-awesome><span expr18=\"expr18\" class=\"menu-item-label tx-10\"> </span>',\n              [{\n                'expressions': [{\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'href',\n\n                  'evaluate': function(scope) {\n                    return scope.setLink(scope.o.link,{});\n                  }\n                }, {\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'class',\n\n                  'evaluate': function(scope) {\n                    return [\n                      'br-menu-link ',\n                      scope.ActiveClass(scope.props.active, scope.o.name),\n                      ' tx-11'\n                    ].join('');\n                  }\n                }, {\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'id',\n\n                  'evaluate': function(scope) {\n                    return scope.o.name;\n                  }\n                }]\n              }, {\n                'type': bindingTypes.TAG,\n                'getComponent': getComponent,\n\n                'evaluate': function(scope) {\n                  return 'font-awesome';\n                },\n\n                'slots': [],\n\n                'attributes': [{\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'icon',\n\n                  'evaluate': function(scope) {\n                    return ['menu-item-icon icon tx-15 ', scope.o.icon].join('');\n                  }\n                }],\n\n                'redundantAttribute': 'expr17',\n                'selector': '[expr17]'\n              }, {\n                'redundantAttribute': 'expr18',\n                'selector': '[expr18]',\n\n                'expressions': [{\n                  'type': expressionTypes.TEXT,\n                  'childNodeIndex': 0,\n\n                  'evaluate': function(scope) {\n                    return scope.o.title;\n                  }\n                }]\n              }]\n            )\n          }, {\n            'type': bindingTypes.IF,\n\n            'evaluate': function(scope) {\n              return scope.o.childs;\n            },\n\n            'redundantAttribute': 'expr19',\n            'selector': '[expr19]',\n\n            'template': template(\n              '<font-awesome expr20=\"expr20\"></font-awesome><span expr21=\"expr21\" class=\"menu-item-label tx-10\"> </span>',\n              [{\n                'expressions': [{\n                  'type': expressionTypes.EVENT,\n                  'name': 'onclick',\n\n                  'evaluate': function(scope) {\n                    return () => scope.toggleSettings(scope.o);\n                  }\n                }, {\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'ref',\n\n                  'evaluate': function(scope) {\n                    return scope.o.name;\n                  }\n                }, {\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'class',\n\n                  'evaluate': function(scope) {\n                    return [\n                      'br-menu-link with-sub pointer ',\n                      scope.ActiveClass(scope.props.active, scope.o.name),\n                      ' tx-11'\n                    ].join('');\n                  }\n                }]\n              }, {\n                'type': bindingTypes.TAG,\n                'getComponent': getComponent,\n\n                'evaluate': function(scope) {\n                  return 'font-awesome';\n                },\n\n                'slots': [],\n\n                'attributes': [{\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'icon',\n\n                  'evaluate': function(scope) {\n                    return ['menu-item-icon icon tx-15 ', scope.o.icon].join('');\n                  }\n                }],\n\n                'redundantAttribute': 'expr20',\n                'selector': '[expr20]'\n              }, {\n                'redundantAttribute': 'expr21',\n                'selector': '[expr21]',\n\n                'expressions': [{\n                  'type': expressionTypes.TEXT,\n                  'childNodeIndex': 0,\n\n                  'evaluate': function(scope) {\n                    return scope.o.title;\n                  }\n                }]\n              }]\n            )\n          }, {\n            'type': bindingTypes.IF,\n\n            'evaluate': function(scope) {\n              return scope.o.childs;\n            },\n\n            'redundantAttribute': 'expr22',\n            'selector': '[expr22]',\n\n            'template': template(\n              '<li class=\"sub-item\"><a expr23=\"expr23\" class=\"sub-link\" style=\"font-size: 9px !important;\"></a></li>',\n              [{\n                'expressions': [{\n                  'type': expressionTypes.ATTRIBUTE,\n                  'name': 'id',\n\n                  'evaluate': function(scope) {\n                    return scope.o.name;\n                  }\n                }]\n              }, {\n                'type': bindingTypes.EACH,\n                'getKey': null,\n                'condition': null,\n\n                'template': template(' ', [{\n                  'expressions': [{\n                    'type': expressionTypes.TEXT,\n                    'childNodeIndex': 0,\n\n                    'evaluate': function(scope) {\n                      return [scope.ch.title].join('');\n                    }\n                  }, {\n                    'type': expressionTypes.ATTRIBUTE,\n                    'name': 'href',\n\n                    'evaluate': function(scope) {\n                      return scope.setLink(scope.ch.link,{});\n                    }\n                  }]\n                }]),\n\n                'redundantAttribute': 'expr23',\n                'selector': '[expr23]',\n                'itemName': 'ch',\n                'indexName': null,\n\n                'evaluate': function(scope) {\n                  return scope.o.childs;\n                }\n              }]\n            )\n          }]\n        ),\n\n        'redundantAttribute': 'expr15',\n        'selector': '[expr15]',\n        'itemName': 'o',\n        'indexName': null,\n\n        'evaluate': function(scope) {\n          return scope.menuItems;\n        }\n      }]\n    );\n  },\n\n  'name': 'menuapp'\n});\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/layouts/components/menu-app.riot?");

/***/ }),

/***/ "./app/layouts/main-layout.riot":
/*!**************************************!*\
  !*** ./app/layouts/main-layout.riot ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var helpers_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/storage */ \"./app/helpers/storage.js\");\n/* harmony import */ var helpers_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/utilities */ \"./app/helpers/utilities.js\");\n/* harmony import */ var theme_images_non_login_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme/images/non-login-favicon.png */ \"./app/theme/images/non-login-favicon.png\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  'css': null,\n\n  'exports': {\n    onBeforeMount() {\n        this.module = null\n        this.auth = null\n        this.data = { username: (0,helpers_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('USERNAME') }\n    },\n\n    setModuleActive(mdl, auth, data) {\n        this.module = mdl\n        this.auth = auth\n        this.data = data\n        ;(0,helpers_utilities__WEBPACK_IMPORTED_MODULE_1__.logInfo)('Set Module Active:', mdl)\n        this.update()\n        if (this.auth) (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_1__.setFavicon)(theme_images_non_login_favicon_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    },\n\n    setActive(a) {\n    }\n  },\n\n  'template': function(template, expressionTypes, bindingTypes, getComponent) {\n    return template(\n      '<header-app expr0=\"expr0\"></header-app><menu-app expr1=\"expr1\"></menu-app><div expr2=\"expr2\" id=\"app-layout\"></div><body-footer expr3=\"expr3\"></body-footer>',\n      [{\n        'type': bindingTypes.IF,\n\n        'evaluate': function(scope) {\n          return scope.auth;\n        },\n\n        'redundantAttribute': 'expr0',\n        'selector': '[expr0]',\n\n        'template': template(null, [{\n          'type': bindingTypes.TAG,\n          'getComponent': getComponent,\n\n          'evaluate': function(scope) {\n            return 'header-app';\n          },\n\n          'slots': [],\n\n          'attributes': [{\n            'type': expressionTypes.ATTRIBUTE,\n            'name': 'data',\n\n            'evaluate': function(scope) {\n              return scope.data;\n            }\n          }]\n        }])\n      }, {\n        'type': bindingTypes.IF,\n\n        'evaluate': function(scope) {\n          return scope.auth;\n        },\n\n        'redundantAttribute': 'expr1',\n        'selector': '[expr1]',\n\n        'template': template(null, [{\n          'type': bindingTypes.TAG,\n          'getComponent': getComponent,\n\n          'evaluate': function(scope) {\n            return 'menu-app';\n          },\n\n          'slots': [],\n\n          'attributes': [{\n            'type': expressionTypes.ATTRIBUTE,\n            'name': 'active',\n\n            'evaluate': function(scope) {\n              return scope.module;\n            }\n          }, {\n            'type': expressionTypes.ATTRIBUTE,\n            'name': 'cb',\n\n            'evaluate': function(scope) {\n              return scope.setActive;\n            }\n          }]\n        }])\n      }, {\n        'type': bindingTypes.TAG,\n        'getComponent': getComponent,\n\n        'evaluate': function(scope) {\n          return scope.module;\n        },\n\n        'slots': [],\n\n        'attributes': [{\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'data',\n\n          'evaluate': function(scope) {\n            return scope.data;\n          }\n        }],\n\n        'redundantAttribute': 'expr2',\n        'selector': '[expr2]'\n      }, {\n        'type': bindingTypes.IF,\n\n        'evaluate': function(scope) {\n          return scope.auth;\n        },\n\n        'redundantAttribute': 'expr3',\n        'selector': '[expr3]',\n\n        'template': template(null, [{\n          'type': bindingTypes.TAG,\n          'getComponent': getComponent,\n\n          'evaluate': function(scope) {\n            return 'body-footer';\n          },\n\n          'slots': [],\n          'attributes': []\n        }])\n      }]\n    );\n  },\n\n  'name': 'main-layout'\n});\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/layouts/main-layout.riot?");

/***/ }),

/***/ "./app/layouts/index.js":
/*!******************************!*\
  !*** ./app/layouts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ layoutModule),\n/* harmony export */   \"layoutComponents\": () => (/* binding */ layoutComponents)\n/* harmony export */ });\n/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout.index */ \"./app/layouts/components/layout.index.js\");\n\nvar layoutComponents = Object.keys(_components_layout_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction layoutModule(name) {\n  return _components_layout_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name];\n}\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/layouts/index.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var packagejson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! packagejson */ \"./package.json\");\n/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.esm.js\");\n/* harmony import */ var appModule_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appModule/pages */ \"./app/modules/pages.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.kebabcase */ \"./node_modules/lodash.kebabcase/index.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var layoutModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layoutModule */ \"./app/layouts/index.js\");\n/* harmony import */ var components_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/components.index */ \"./app/components/components.index.js\");\n/* harmony import */ var _layouts_main_layout_riot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/main-layout.riot */ \"./app/layouts/main-layout.riot\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./app/routes.js\");\n/* harmony import */ var _helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/utilities.js */ \"./app/helpers/utilities.js\");\n/* harmony import */ var helpers_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helpers/storage */ \"./app/helpers/storage.js\");\n/* harmony import */ var helpers_ma__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/ma */ \"./app/helpers/ma.js\");\n/* harmony import */ var theme_scss_bracket_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! theme/scss/bracket.scss */ \"./app/theme/scss/bracket.scss\");\n/* harmony import */ var services_app_plugins_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! services/app-plugins.js */ \"./app/services/app-plugins.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n/* plugins app */\n\n\nvar guestRoutes = ['register', 'login'];\nvar version = packagejson__WEBPACK_IMPORTED_MODULE_0__.version;\nwindow.formatNumber = _helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.formatNumber;\nwindow.App = {\n  version: version,\n  nodeEnv: \"production\" || 0,\n  baseApiUrl: \"http://localhost:4000\",\n  webPrefixURL: \"\",\n  currentUrl: '/',\n  currentHash: ''\n};\n\nvar needLogin = function needLogin(route) {\n  if (guestRoutes.indexOf(route) < 0) {\n    return isLogin() ? false : true;\n  } else {\n    return false;\n  }\n};\n\nvar isLogin = function isLogin() {\n  return (0,helpers_storage__WEBPACK_IMPORTED_MODULE_9__.getStorage)('API_TOKEN', '') ? true : false; // return true\n};\n\nvar initApp = function initApp() {\n  /* register all components */\n  _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].forEach(function (item) {\n    (0,_helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)(\"Registering Route: \".concat(item.hash, \" => \").concat(item.component));\n    (0,riot__WEBPACK_IMPORTED_MODULE_1__.register)(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(item.hash), (0,appModule_pages__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.component));\n  });\n  layoutModule__WEBPACK_IMPORTED_MODULE_4__.layoutComponents.forEach(function (component) {\n    (0,_helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)('Registering Layout:', component, lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(component));\n    (0,riot__WEBPACK_IMPORTED_MODULE_1__.register)(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(component), (0,layoutModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(component));\n  });\n  components_components_index__WEBPACK_IMPORTED_MODULE_5__.tagComponents.forEach(function (item) {\n    (0,_helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)('Registering Global Components', item);\n    (0,riot__WEBPACK_IMPORTED_MODULE_1__.register)(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(item), (0,components_components_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(item));\n  });\n};\n\nvar router = function router(e) {\n  (0,_helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)('App URL Changed');\n  App.currentUrl = location.href;\n  var request = (0,_helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.parseRequestURL)();\n  var pathName = request.pathName;\n  /* logout */\n\n  if (pathName === 'logout') {\n    (0,helpers_storage__WEBPACK_IMPORTED_MODULE_9__.deleteStorage)('API_TOKEN');\n    (0,helpers_ma__WEBPACK_IMPORTED_MODULE_10__.goTo)('login');\n  }\n\n  var namedRoutes = _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map(function (x) {\n    if (!x.name) x.name = lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(x.hash);\n    return x;\n  });\n  var routeHash = namedRoutes.findIndex(function (item) {\n    return item.name === lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(pathName);\n  });\n  if (!isLogin()) (0,helpers_ma__WEBPACK_IMPORTED_MODULE_10__.goTo)('login');\n  var authPage = needLogin(pathName);\n  var objRoute = namedRoutes[routeHash] || {\n    menu: true\n  };\n  var pUrl = lodash_kebabcase__WEBPACK_IMPORTED_MODULE_3___default()(pathName);\n  (0,_helpers_utilities_js__WEBPACK_IMPORTED_MODULE_8__.logInfo)({\n    pathName: pathName,\n    routeHash: routeHash,\n    pUrl: pUrl,\n    authPage: authPage,\n    objRoute: objRoute\n  });\n\n  if (routeHash >= 0) {\n    if (!authPage) {\n      appComponent.setModuleActive(pUrl, objRoute.menu);\n    } else {\n      (0,helpers_ma__WEBPACK_IMPORTED_MODULE_10__.goTo)('logout');\n    }\n  } else {\n    if (pathName === 'login') {\n      appComponent.setModuleActive(pUrl, false);\n    } else {\n      appComponent.setModuleActive('not-found', true);\n    }\n  }\n};\n\ninitApp();\nvar appComponent = (0,riot__WEBPACK_IMPORTED_MODULE_1__.component)(_layouts_main_layout_riot__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(document.getElementById('page'));\nwindow.cekData = appComponent;\nwindow.addEventListener('hashchange', router);\nwindow.addEventListener('load', router);\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/main.js?");

/***/ })

}]);