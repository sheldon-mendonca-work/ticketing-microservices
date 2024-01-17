"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst buildClient = ({ req })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyxHQUFHLEVBQUU7SUFDMUIsSUFBSSxJQUFrQixFQUFhO1FBQ2pDLHVCQUF1QjtRQUV2QixPQUFPRixvREFBWSxDQUFDO1lBQ2xCSSxTQUNFO1lBQ0ZDLFNBQVNILElBQUlHLE9BQU87UUFDdEI7SUFDRixPQUFPLEVBS047QUFDSDtBQUVBLGlFQUFlSixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBpL2J1aWxkLWNsaWVudC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGJ1aWxkQ2xpZW50ID0gKHsgcmVxIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXJcblxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDpcbiAgICAgICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBXZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVXJsOiAnLycsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50OyJdLCJuYW1lcyI6WyJheGlvcyIsImJ1aWxkQ2xpZW50IiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJiYXNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AppComponent = ({ Component, pageProps, user })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Header \",\n                    user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/4AE2F5BEE2F5ADF7/Projects/WebDev/microservices/ticketing/client/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/mnt/4AE2F5BEE2F5ADF7/Projects/WebDev/microservices/ticketing/client/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/4AE2F5BEE2F5ADF7/Projects/WebDev/microservices/ticketing/client/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDSTtBQUU5QyxNQUFNQyxlQUFlLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRTtJQUNoRCxxQkFBTyw4REFBQ0M7OzBCQUNKLDhEQUFDQzs7b0JBQUc7b0JBQVFGLEtBQUtHLEtBQUs7Ozs7Ozs7MEJBQ3RCLDhEQUFDTDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFFaEM7QUFFQUYsYUFBYU8sZUFBZSxHQUFHLE9BQU9DO0lBQ2xDLE1BQU1DLFNBQVNWLDZEQUFXQSxDQUFDUyxXQUFXRSxHQUFHO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUYsT0FBT0csR0FBRyxDQUFDO0lBQ2xDLElBQUlWLFlBQVksQ0FBQztJQUNqQixJQUFHTSxXQUFXUCxTQUFTLENBQUNNLGVBQWUsRUFBQztRQUNwQ0wsWUFBWSxNQUFNTSxXQUFXUCxTQUFTLENBQUNNLGVBQWUsQ0FBQ0MsV0FBV0UsR0FBRztJQUN6RTtJQUVBLE9BQU87UUFBQ1I7UUFBVyxHQUFHUyxJQUFJO0lBQUE7QUFDOUI7QUFFQSxpRUFBZVgsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcblxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHVzZXIgfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDE+SGVhZGVyIHt1c2VyLmVtYWlsfTwvaDE+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L2Rpdj5cbn1cblxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIik7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICAgIGlmKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtwYWdlUHJvcHMsIC4uLmRhdGF9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsIkFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJkaXYiLCJoMSIsImVtYWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImN0eCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();