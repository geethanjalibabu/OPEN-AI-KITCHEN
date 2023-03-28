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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [dish, setDish] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLoading, seTLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let handleSubmit = async ()=>{\n        try {\n            seTLoading(true);\n            const dishResp = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/chat\", {\n                dish\n            });\n            console.log(dishResp);\n            if (dishResp.data.error) {\n                throw new Error(dishResp.data);\n            }\n            setText(dishResp.data.airesponse.choices[0].text);\n            seTLoading(false);\n        } catch (error) {\n            seTLoading(false);\n            setText(\"\");\n            alert(\"Something went wrong\");\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-serif text-4xl\",\n                    children: \"Give me Step-by-Step Instruction to Prepare\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"p-1 mr-2 text-3xl text-center border-b-2 border-slate-500 bg-amber-50\",\n                    onChange: (e)=>setDish(e.target.value),\n                    value: dish\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bar__data\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: isLoading,\n                    onClick: handleSubmit,\n                    className: \"p-2 bg-orange-400 rounded\",\n                    children: \"Get me..\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 p-4 mt-6 rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        whiteSpace: \"pre-line\"\n                    },\n                    children: text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\0046EP744\\\\Documents\\\\Shasvika\\\\shasu\\\\pages\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 4\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNNQTtBQUxtQjtBQUdPO0FBSWpCLFNBQVNHLE9BQU87SUFDN0IsTUFBSyxDQUFDQyxNQUFLQyxRQUFRLEdBQUNILCtDQUFRQSxDQUFDO0lBQzdCLE1BQUssQ0FBQ0ksTUFBS0MsUUFBUSxHQUFDTCwrQ0FBUUEsQ0FBQztJQUM3QixNQUFLLENBQUNNLFdBQVVDLFdBQVcsR0FBQ1AsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxJQUFJUSxlQUFjLFVBQVc7UUFDM0IsSUFBRztZQUNERCxXQUFXLElBQUk7WUFDaEIsTUFBTUUsV0FBVSxNQUFNVixrREFBVSxDQUFDLGFBQVk7Z0JBQUNLO1lBQUk7WUFDbERPLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixJQUFHQSxTQUFTSSxJQUFJLENBQUNDLEtBQUssRUFBQztnQkFDNUIsTUFBTSxJQUFJQyxNQUFNTixTQUFTSSxJQUFJLEVBQUM7WUFHekIsQ0FBQztZQUNEVixRQUFRTSxTQUFTSSxJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ2YsSUFBSTtZQUNoREssV0FBVyxLQUFLO1FBQ2pCLEVBQ0EsT0FBTU8sT0FBTTtZQUNWUCxXQUFXLEtBQUs7WUFDaEJKLFFBQVE7WUFDUmUsTUFBTTtZQUNaUCxRQUFRQyxHQUFHLENBQUNFO1FBQ1I7SUFDRjtJQUNBLHFCQUVDLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7OzswQkFHZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2YsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFzQjs7Ozs7Ozs7Ozs7MEJBSXBDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQU1DLE1BQUs7b0JBQU9ILFdBQVU7b0JBQzdCSSxVQUFVLENBQUNDLElBQU1wQixRQUFRb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29CQUN2Q0EsT0FBT3ZCOzs7Ozs7Ozs7OzswQkFJVCw4REFBQ2U7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNRO29CQUFPQyxVQUFVdkI7b0JBQVl3QixTQUFTdEI7b0JBQWNZLFdBQVU7OEJBQTRCOzs7Ozs7Ozs7OztZQUszRmQsMEJBQVUsOERBQUNlOzBCQUFHOzs7OztxQ0FDaEIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFFVztvQkFBRUMsT0FBTzt3QkFBQ0MsWUFBVztvQkFBVTs4QkFDOUIvQjs7Ozs7Ozs7OztvQkFHQzs7Ozs7OztBQU1WLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFzdS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnY29uc29sZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3RbdGV4dCxzZXRUZXh0XT11c2VTdGF0ZShcIlwiKVxuICBjb25zdFtkaXNoLHNldERpc2hdPXVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0W2lzTG9hZGluZyxzZVRMb2FkaW5nXT11c2VTdGF0ZShmYWxzZSlcbiAgbGV0IGhhbmRsZVN1Ym1pdD0gYXN5bmMgKCkgPT57XG4gICAgdHJ5e1xuICAgICAgc2VUTG9hZGluZyh0cnVlKVxuICAgICBjb25zdCBkaXNoUmVzcD0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvY2hhdFwiLHtkaXNofSk7XG4gICAgIGNvbnNvbGUubG9nKGRpc2hSZXNwKVxuICAgICBpZihkaXNoUmVzcC5kYXRhLmVycm9yKXtcbnRocm93IG5ldyBFcnJvcihkaXNoUmVzcC5kYXRhKVxuXG5cbiAgICAgfVxuICAgICBzZXRUZXh0KGRpc2hSZXNwLmRhdGEuYWlyZXNwb25zZS5jaG9pY2VzWzBdLnRleHQpXG4gICAgIHNlVExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgIHNlVExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRUZXh0KFwiXCIpXG4gICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpXG5jb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgIFxuICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC04XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTR4bFwiPlxuICAgICAgR2l2ZSBtZSBTdGVwLWJ5LVN0ZXAgSW5zdHJ1Y3Rpb24gdG8gUHJlcGFyZVxuICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J210LTYnPlxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0ncC0xIG1yLTIgdGV4dC0zeGwgdGV4dC1jZW50ZXIgYm9yZGVyLWItMiBib3JkZXItc2xhdGUtNTAwIGJnLWFtYmVyLTUwJ1xuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREaXNoKGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICB2YWx1ZT17ZGlzaH1cbiAgICAgIC8+XG4gICAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdiYXJfX2RhdGEnPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02JyA+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc0xvYWRpbmd9ICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInAtMiBiZy1vcmFuZ2UtNDAwIHJvdW5kZWRcIj5cbiAgICAgICAgR2V0IG1lLi5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIHtcbiAgICAgIGlzTG9hZGluZz88aDE+TG9hZGluZy4uLjwvaDE+OlxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LTIvMyBwLTQgbXQtNiByb3VuZGVkLWxnJz5cbiAgICAgIDwgcCBzdHlsZT17e3doaXRlU3BhY2U6XCJwcmUtbGluZVwifX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9wPlxuXG4gICAgPC9kaXY+XG59XG4gICA8L2Rpdj5cblxuICAgXG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJheGlvcyIsInVzZVN0YXRlIiwiSG9tZSIsInRleHQiLCJzZXRUZXh0IiwiZGlzaCIsInNldERpc2giLCJpc0xvYWRpbmciLCJzZVRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZGlzaFJlc3AiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIkVycm9yIiwiYWlyZXNwb25zZSIsImNob2ljZXMiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJwIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();