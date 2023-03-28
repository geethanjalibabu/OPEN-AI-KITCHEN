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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method != \"POST\") {\n        return res.status(405).send({\n            message: \"Only Post Request\"\n        });\n    }\n    const headers = {\n        \"Content-Type\": \"application/json\",\n        Authorization: `Bearer ${(process__WEBPACK_IMPORTED_MODULE_0___default().env.GET_API_KEY)}`\n    };\n    const response = await fetch(\"https://api.openai.com/v1/completions\", {\n        method: \"POST\",\n        headers,\n        body: JSON.stringify({\n            \"model\": \"text-davinci-003\",\n            \"prompt\": `How to prepare ${req.body.dish}`,\n            \"max_tokens\": 200,\n            \"temperature\": 0.7\n        })\n    });\n    const airesponse = await response.json();\n    res.json({\n        message: \"Success\",\n        airesponse\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEI7QUFNZixlQUFlQyxRQUFRQyxHQUFrQixFQUFDQyxHQUF5QixFQUFFO0lBQ2hGLElBQUdELElBQUlFLE1BQU0sSUFBRSxRQUFPO1FBQ2xCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUTtRQUFtQjtJQUU1RCxDQUFDO0lBQ0QsTUFBTUMsVUFBVTtRQUNaLGdCQUFpQjtRQUNqQkMsZUFBZ0IsQ0FBQyxPQUFPLEVBQUVULGdFQUF1QixDQUFDLENBQUM7SUFDdkQ7SUFDQSxNQUFNWSxXQUFVLE1BQU1DLE1BQU0seUNBQXdDO1FBQ2hFVCxRQUFPO1FBQ1BJO1FBQ0FNLE1BQUtDLEtBQUtDLFNBQVMsQ0FBQztZQUNoQixTQUFTO1lBQ1QsVUFBVSxDQUFDLGVBQWUsRUFBRWQsSUFBSVksSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztZQUMzQyxjQUFjO1lBQ2QsZUFBZTtRQUNuQjtJQU9KO0lBQ0EsTUFBTUMsYUFBVyxNQUFNTixTQUFTTyxJQUFJO0lBRXBDaEIsSUFBSWdCLElBQUksQ0FBQztRQUNMWixTQUFRO1FBQ1JXO0lBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhc3UvLi9wYWdlcy9hcGkvY2hhdC50cz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwicHJvY2Vzc1wiO1xyXG50eXBlIERhdGEgPSB7XHJcbiAgICBtZXNzYWdlOlN0cmluZyxcclxuICAgIGFpcmVzcG9uc2UgPzphbnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6TmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZTxEYXRhPikge1xyXG4gICAgaWYocmVxLm1ldGhvZCE9XCJQT1NUXCIpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuc2VuZCh7bWVzc2FnZTpcIk9ubHkgUG9zdCBSZXF1ZXN0XCJ9KVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb24gOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuR0VUX0FQSV9LRVl9YFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jb21wbGV0aW9uc1wiLHtcclxuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJtb2RlbFwiOiBcInRleHQtZGF2aW5jaS0wMDNcIixcclxuICAgICAgICAgICAgXCJwcm9tcHRcIjogYEhvdyB0byBwcmVwYXJlICR7cmVxLmJvZHkuZGlzaH1gLFxyXG4gICAgICAgICAgICBcIm1heF90b2tlbnNcIjogMjAwLFxyXG4gICAgICAgICAgICBcInRlbXBlcmF0dXJlXCI6IDAuN1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgIH0pXHJcbiAgICBjb25zdCBhaXJlc3BvbnNlPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOlwiU3VjY2Vzc1wiLFxyXG4gICAgICAgIGFpcmVzcG9uc2VcclxuICAgIH0pXHJcbn0iXSwibmFtZXMiOlsicHJvY2VzcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZW52IiwiR0VUX0FQSV9LRVkiLCJyZXNwb25zZSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXNoIiwiYWlyZXNwb25zZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();