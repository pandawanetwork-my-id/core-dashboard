"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_gateway_dashboard"] = self["webpackChunkapi_gateway_dashboard"] || []).push([["index-app_modules_administration_api-gateway_components_router-dashboard_f"],{

/***/ "./app/modules/administration/api-gateway/components/router-dashboard/filter.riot":
/*!****************************************************************************************!*\
  !*** ./app/modules/administration/api-gateway/components/router-dashboard/filter.riot ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./app/modules/administration/api-gateway/components/router-dashboard/filter.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  'css': null,\n  'exports': _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\n  'template': function(template, expressionTypes, bindingTypes, getComponent) {\n    return template(\n      '<div class=\"row\"><div class=\"col-2 tx-11 pd-t-0 pd-l-0\">\\n            Client\\n            <dropdown-clients expr102=\"expr102\" el-class=\"form-control tx-11 w-100\" name=\"clientId\"></dropdown-clients></div><div class=\"col-3 tx-11\">\\n            Domain\\n            <input expr103=\"expr103\" type=\"text\" class=\"form-control form-control-md tx-11\"/></div><div class=\"col-2 tx-11 pd-x-0\">\\n            Status\\n            <dropdown-gateway-status expr104=\"expr104\" el-class=\"form-control tx-11\"></dropdown-gateway-status></div><div class=\"col-3 pd-x-5\"><form-button-loading expr105=\"expr105\" el-name=\"filter\" el-class=\"btn btn-primary btn-md mg-x-10 tx-12 mg-t-15\" el-onloading-title=\"Filtering...\" el-title=\"Filter\"></form-button-loading></div><div class=\"col-2 pd-x-5\"><form-button-loading expr106=\"expr106\" el-name=\"addnew\" el-class=\"btn btn-warning btn-md mg-x-10 tx-12 mg-t-15 float-right\" el-onloading-title=\"Loading...\" el-title=\"New\"></form-button-loading></div></div>',\n      [{\n        'type': bindingTypes.TAG,\n        'getComponent': getComponent,\n\n        'evaluate': function(scope) {\n          return 'dropdown-clients';\n        },\n\n        'slots': [],\n\n        'attributes': [{\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'selected',\n\n          'evaluate': function(scope) {\n            return scope.payload.clientId;\n          }\n        }, {\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'callback',\n\n          'evaluate': function(scope) {\n            return scope.updatePayload;\n          }\n        }],\n\n        'redundantAttribute': 'expr102',\n        'selector': '[expr102]'\n      }, {\n        'redundantAttribute': 'expr103',\n        'selector': '[expr103]',\n\n        'expressions': [{\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'id',\n\n          'evaluate': function(scope) {\n            return scope.ids.domain;\n          }\n        }, {\n          'type': expressionTypes.VALUE,\n\n          'evaluate': function(scope) {\n            return scope.payload.domain;\n          }\n        }]\n      }, {\n        'type': bindingTypes.TAG,\n        'getComponent': getComponent,\n\n        'evaluate': function(scope) {\n          return 'dropdown-gateway-status';\n        },\n\n        'slots': [],\n\n        'attributes': [{\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'selected',\n\n          'evaluate': function(scope) {\n            return scope.payload.status;\n          }\n        }, {\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'callback',\n\n          'evaluate': function(scope) {\n            return scope.setPayload;\n          }\n        }],\n\n        'redundantAttribute': 'expr104',\n        'selector': '[expr104]'\n      }, {\n        'type': bindingTypes.TAG,\n        'getComponent': getComponent,\n\n        'evaluate': function(scope) {\n          return 'form-button-loading';\n        },\n\n        'slots': [],\n\n        'attributes': [{\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'callback',\n\n          'evaluate': function(scope) {\n            return scope.triggerFilterData;\n          }\n        }, {\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'el-isloading',\n\n          'evaluate': function(scope) {\n            return scope.state.table_loadingdata;\n          }\n        }],\n\n        'redundantAttribute': 'expr105',\n        'selector': '[expr105]'\n      }, {\n        'type': bindingTypes.TAG,\n        'getComponent': getComponent,\n\n        'evaluate': function(scope) {\n          return 'form-button-loading';\n        },\n\n        'slots': [],\n\n        'attributes': [{\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'callback',\n\n          'evaluate': function(scope) {\n            return scope.triggerAddModal;\n          }\n        }, {\n          'type': expressionTypes.ATTRIBUTE,\n          'name': 'el-isloading',\n\n          'evaluate': function(scope) {\n            return scope.state.modal_show;\n          }\n        }],\n\n        'redundantAttribute': 'expr106',\n        'selector': '[expr106]'\n      }]\n    );\n  },\n\n  'name': 'gateway-router-dashbboard-filter'\n});\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/modules/administration/api-gateway/components/router-dashboard/filter.riot?");

/***/ }),

/***/ "./app/modules/administration/api-gateway/components/router-dashboard/filter.js":
/*!**************************************************************************************!*\
  !*** ./app/modules/administration/api-gateway/components/router-dashboard/filter.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/utilities */ \"./app/helpers/utilities.js\");\n/* harmony import */ var _globals_api_gateway_global_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/api-gateway-global-components */ \"./app/modules/administration/api-gateway/components/globals/api-gateway-global-components.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: _globals_api_gateway_global_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  state: {\n    'table_loadingdata': false\n  },\n  payload: {\n    clientId: '',\n    status: 1,\n    domain: ''\n  },\n  ids: {\n    client: (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.randomString)(10, {\n      onlyChars: true\n    }),\n    domain: (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.randomString)(10, {\n      onlyChars: true\n    }),\n    status: (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.randomString)(10, {\n      onlyChars: true\n    })\n  },\n  onBeforeMount: function onBeforeMount(props, state) {},\n  onMounted: function onMounted() {},\n  onBeforeUpdate: function onBeforeUpdate(props, state) {\n    var shareState = props.dataState; // disable loading after modal hidden\n\n    if (state.modal_show && !shareState.modal_show) {\n      this.update({\n        'modal_show': shareState.modal_show\n      });\n    } // disable loading after table items was loaded\n\n\n    if (state.table_loadingdata && !shareState.table_loadingdata) {\n      this.update({\n        table_loadingdata: shareState.table_loadingdata\n      });\n    }\n  },\n  onBeforeUnmount: function onBeforeUnmount() {},\n  triggerAddModal: function triggerAddModal() {\n    this.props.changeState(this.name, {\n      'modal_show': true\n    });\n    this.update({\n      'modal_show': true\n    });\n  },\n  triggerFilterData: function triggerFilterData() {\n    var newState = {\n      'filterdata_client': this.$('#' + this.ids.client).value,\n      'filterdata_domain': this.$('#' + this.ids.domain).value,\n      'filterdata_status': this.$('#' + this.ids.status).value\n    };\n    this.props.changeState(this.name, _objectSpread({\n      'table_loadingdata': true\n    }, newState));\n    this.update(_objectSpread({\n      'table_loadingdata': true\n    }, newState));\n  },\n  updatePayload: function updatePayload(key, value) {\n    console.log(key, value);\n  }\n});\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/modules/administration/api-gateway/components/router-dashboard/filter.js?");

/***/ }),

/***/ "./app/modules/administration/api-gateway/components/router-dashboard/index.js":
/*!*************************************************************************************!*\
  !*** ./app/modules/administration/api-gateway/components/router-dashboard/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filter_riot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.riot */ \"./app/modules/administration/api-gateway/components/router-dashboard/filter.riot\");\n/* harmony import */ var _table_riot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.riot */ \"./app/modules/administration/api-gateway/components/router-dashboard/table.riot\");\n/* harmony import */ var _add_new_modal_riot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-new-modal.riot */ \"./app/modules/administration/api-gateway/components/router-dashboard/add-new-modal.riot\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  GatewayRouterDashboardFilter: _filter_riot__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  GatewayRouterDashboardTable: _table_riot__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  GatewayRouterDashboardAddNewModal: _add_new_modal_riot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/modules/administration/api-gateway/components/router-dashboard/index.js?");

/***/ }),

/***/ "./app/modules/administration/api-gateway/components/router-dashboard/table.js":
/*!*************************************************************************************!*\
  !*** ./app/modules/administration/api-gateway/components/router-dashboard/table.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var helpers_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/utilities */ \"./app/helpers/utilities.js\");\n/* harmony import */ var _api_gateway_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-gateway.sdk */ \"./app/modules/administration/api-gateway/api-gateway.sdk.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  state: {\n    items: [],\n    loadingdata: false,\n    isNoData: true\n  },\n  tableId: (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.randomString)(10, {\n    onlyChars: true\n  }),\n  onBeforeMount: function onBeforeMount() {},\n  onMounted: function onMounted(props, localState) {\n    this.getData(localState);\n  },\n  onBeforeUpdate: function onBeforeUpdate(props, localState) {\n    var shareState = props.dataState;\n\n    if (!localState.loadingdata && shareState.table_loadingdata) {\n      this.getData(shareState);\n    }\n  },\n  onBeforeUnmount: function onBeforeUnmount() {},\n  getData: function getData(_ref) {\n    var _this = this;\n\n    var clientId = _ref.filterdata_client,\n        domain = _ref.filterdata_domain,\n        status = _ref.filterdata_status;\n    this.update({\n      loadingdata: true\n    });\n    (0,_api_gateway_sdk__WEBPACK_IMPORTED_MODULE_1__.GetRoutes)({\n      clientId: clientId,\n      domain: domain,\n      status: status,\n      sorts: '_id:desc'\n    })[\"catch\"](function (err) {\n      (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.showAlertError)(err);\n      return null;\n    }).then(function () {\n      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var items = res.data;\n      var isNoData = !items;\n\n      _this.props.changeState(_this.name, {\n        table_loadingdata: false,\n        table_items: items,\n        table_isNoData: isNoData\n      });\n\n      var data = {\n        loadingdata: false,\n        items: items.map(function (x, i) {\n          x.n = parseInt(i) + 1;\n          return x;\n        }),\n        isNoData: isNoData\n      }; // console.log(data)\n\n      _this.update(data);\n    });\n  },\n  trashRoute: function trashRoute(e) {\n    var _this2 = this;\n\n    var _e$data = e.data,\n        _id = _e$data._id,\n        clientId = _e$data.clientId;\n    (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.showConfirmation)('Remove Client Route \"' + clientId + '\"?', {\n      width: '300px'\n    }).then(function (res) {\n      if (!res.isConfirmed) return null;\n      (0,_api_gateway_sdk__WEBPACK_IMPORTED_MODULE_1__.TrashRoute)({\n        dataId: _id\n      })[\"catch\"](function (err) {\n        (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.showAlertError)(err);\n        return null;\n      }).then(function (res) {\n        if (!res) return null;\n        (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.showToastSuccess)('Route Removed');\n        (0,_api_gateway_sdk__WEBPACK_IMPORTED_MODULE_1__.DeactivateRoutes)({\n          clientIds: clientId\n        })[\"catch\"](function (errDeactivate) {\n          (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.showToastError)(errDeactivate.message);\n          return null;\n        }).then(function () {\n          (0,helpers_utilities__WEBPACK_IMPORTED_MODULE_0__.showToastSuccess)('Route Deactivated');\n          setTimeout(function () {\n            _this2.getData(_this2.state);\n          }, 1 * 1000);\n        });\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://api-gateway-dashboard/./app/modules/administration/api-gateway/components/router-dashboard/table.js?");

/***/ })

}]);