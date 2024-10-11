/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_module_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app-components */ \"../app-components/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app_components__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n(() => {\n    console.log(\"Start Test\");\n    new _common_module_app_components__WEBPACK_IMPORTED_MODULE_0__.Confirm({\n        title: \"Test\",\n        message: \"This is a test\",\n        onConfirm: () => {\n            console.log(\"Confirmed\");\n        },\n    });\n})();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./app/main.ts?");

/***/ }),

/***/ "../app-components/lib/AppCompConfig.js":
/*!**********************************************!*\
  !*** ../app-components/lib/AppCompConfig.js ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass DefaultLoadingSpinner extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    constructor() {\n        super(\".loading-spinner\");\n    }\n}\nclass AppCompConfig {\n    LoadingSpinner = DefaultLoadingSpinner;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AppCompConfig());\n//# sourceMappingURL=AppCompConfig.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/AppCompConfig.js?");

/***/ }),

/***/ "../app-components/lib/button/Button.js":
/*!**********************************************!*\
  !*** ../app-components/lib/button/Button.js ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ButtonType: () => (/* binding */ ButtonType),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\n/* harmony import */ var _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppCompConfig.js */ \"../app-components/lib/AppCompConfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nvar ButtonType;\n(function (ButtonType) {\n    ButtonType[\"Text\"] = \"text\";\n    ButtonType[\"Contained\"] = \"contained\";\n    ButtonType[\"Outlined\"] = \"outlined\";\n    ButtonType[\"Circle\"] = \"circle\";\n})(ButtonType || (ButtonType = {}));\nclass Button extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    options;\n    iconContainer;\n    loadingSpinner;\n    constructor(classNamesOrOptions, optionsOrUndefined) {\n        let classNames = \"\";\n        let options;\n        if (typeof classNamesOrOptions === \"string\") {\n            classNames = classNamesOrOptions;\n            options = optionsOrUndefined ?? {};\n        }\n        else {\n            options = classNamesOrOptions;\n        }\n        const type = options.type ?? ButtonType.Text;\n        super(`button${classNames}.${type}`);\n        this.options = options;\n        this.append(options.icon ? this.iconContainer = (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\".icon\", options.icon) : undefined, options.title);\n        this.onDom(\"click\", (event) => {\n            if (options.onClick) {\n                const promise = options.onClick(this, event);\n                if (promise instanceof Promise) {\n                    this.startLoading();\n                    promise.finally(() => this.stopLoading());\n                }\n            }\n        });\n    }\n    disable() {\n        this.htmlElement.setAttribute(\"disabled\", \"disabled\");\n        this.addClass(\"disabled\");\n        return this;\n    }\n    enable() {\n        this.htmlElement.removeAttribute(\"disabled\");\n        this.removeClass(\"disabled\");\n        return this;\n    }\n    startLoading() {\n        this.addClass(\"loading\");\n        if (this.iconContainer) {\n            this.iconContainer.empty().append(new _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LoadingSpinner());\n        }\n        else {\n            this.prepend(this.loadingSpinner = new _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LoadingSpinner());\n        }\n        return this;\n    }\n    stopLoading() {\n        this.removeClass(\"loading\");\n        if (this.iconContainer) {\n            this.iconContainer.empty().append(this.options.icon);\n        }\n        else if (this.loadingSpinner) {\n            this.loadingSpinner.remove();\n            this.loadingSpinner = undefined;\n        }\n        return this;\n    }\n}\n//# sourceMappingURL=Button.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/button/Button.js?");

/***/ }),

/***/ "../app-components/lib/button/ButtonGroup.js":
/*!***************************************************!*\
  !*** ../app-components/lib/button/ButtonGroup.js ***!
  \***************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonGroup)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass ButtonGroup extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    constructor(...children) {\n        super(\".button-group\", ...children);\n    }\n}\n//# sourceMappingURL=ButtonGroup.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/button/ButtonGroup.js?");

/***/ }),

/***/ "../app-components/lib/form/Form.js":
/*!******************************************!*\
  !*** ../app-components/lib/form/Form.js ***!
  \******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Form extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    constructor(...children) {\n        super(\".form\", ...children);\n    }\n}\n//# sourceMappingURL=Form.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/form/Form.js?");

/***/ }),

/***/ "../app-components/lib/form/Input.js":
/*!*******************************************!*\
  !*** ../app-components/lib/form/Input.js ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Input)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Input extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    input;\n    constructor(options) {\n        super(`label.input${options.required === true ? \".required\" : \"\"}`);\n        this.append(options.label ? (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"span.label\", options.label) : undefined, this.input = (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"input\", { placeholder: options.placeholder }));\n    }\n    get value() {\n        return this.input.htmlElement.value;\n    }\n    set value(value) {\n        if (this.input.htmlElement.value === value)\n            return;\n        this.input.htmlElement.value = value;\n    }\n}\n//# sourceMappingURL=Input.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/form/Input.js?");

/***/ }),

/***/ "../app-components/lib/form/Select.js":
/*!********************************************!*\
  !*** ../app-components/lib/form/Select.js ***!
  \********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Select)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Select extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    select;\n    constructor(options) {\n        super(`label.select${options.required === true ? \".required\" : \"\"}`);\n        this.append(options.label ? (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"span.label\", options.label) : undefined, this.select = (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"select\", (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"option\", { value: \"\", disabled: true, selected: true }, options.placeholder), ...options.options.map((option) => (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"option\", { value: option.value }, option.label))));\n    }\n    get value() {\n        return this.select.htmlElement.value;\n    }\n    set value(value) {\n        if (this.select.htmlElement.value === value)\n            return;\n        this.select.htmlElement.value = value;\n    }\n}\n//# sourceMappingURL=Select.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/form/Select.js?");

/***/ }),

/***/ "../app-components/lib/index.js":
/*!**************************************!*\
  !*** ../app-components/lib/index.js ***!
  \**************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Alert: () => (/* reexport safe */ _modals_Alert_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   AppCompConfig: () => (/* reexport safe */ _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _button_Button_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   ButtonGroup: () => (/* reexport safe */ _button_ButtonGroup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   ButtonType: () => (/* reexport safe */ _button_Button_js__WEBPACK_IMPORTED_MODULE_2__.ButtonType),\n/* harmony export */   Confirm: () => (/* reexport safe */ _modals_Confirm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   Form: () => (/* reexport safe */ _form_Form_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Input: () => (/* reexport safe */ _form_Input_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Select: () => (/* reexport safe */ _form_Select_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   StructuredModal: () => (/* reexport safe */ _modals_StructuredModal_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _form_Select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/Select.js */ \"../app-components/lib/form/Select.js\");\n/* harmony import */ var _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCompConfig.js */ \"../app-components/lib/AppCompConfig.js\");\n/* harmony import */ var _button_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/Button.js */ \"../app-components/lib/button/Button.js\");\n/* harmony import */ var _button_ButtonGroup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/ButtonGroup.js */ \"../app-components/lib/button/ButtonGroup.js\");\n/* harmony import */ var _form_Form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/Form.js */ \"../app-components/lib/form/Form.js\");\n/* harmony import */ var _form_Input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/Input.js */ \"../app-components/lib/form/Input.js\");\n/* harmony import */ var _modals_Alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/Alert.js */ \"../app-components/lib/modals/Alert.js\");\n/* harmony import */ var _modals_Confirm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/Confirm.js */ \"../app-components/lib/modals/Confirm.js\");\n/* harmony import */ var _modals_StructuredModal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/StructuredModal.js */ \"../app-components/lib/modals/StructuredModal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_form_Select_js__WEBPACK_IMPORTED_MODULE_0__, _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__, _button_Button_js__WEBPACK_IMPORTED_MODULE_2__, _button_ButtonGroup_js__WEBPACK_IMPORTED_MODULE_3__, _form_Form_js__WEBPACK_IMPORTED_MODULE_4__, _form_Input_js__WEBPACK_IMPORTED_MODULE_5__, _modals_Alert_js__WEBPACK_IMPORTED_MODULE_6__, _modals_Confirm_js__WEBPACK_IMPORTED_MODULE_7__, _modals_StructuredModal_js__WEBPACK_IMPORTED_MODULE_8__]);\n([_form_Select_js__WEBPACK_IMPORTED_MODULE_0__, _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__, _button_Button_js__WEBPACK_IMPORTED_MODULE_2__, _button_ButtonGroup_js__WEBPACK_IMPORTED_MODULE_3__, _form_Form_js__WEBPACK_IMPORTED_MODULE_4__, _form_Input_js__WEBPACK_IMPORTED_MODULE_5__, _modals_Alert_js__WEBPACK_IMPORTED_MODULE_6__, _modals_Confirm_js__WEBPACK_IMPORTED_MODULE_7__, _modals_StructuredModal_js__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/index.js?");

/***/ }),

/***/ "../app-components/lib/modals/Alert.js":
/*!*********************************************!*\
  !*** ../app-components/lib/modals/Alert.js ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Alert)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\n/* harmony import */ var _button_Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button.js */ \"../app-components/lib/button/Button.js\");\n/* harmony import */ var _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StructuredModal.js */ \"../app-components/lib/modals/StructuredModal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _button_Button_js__WEBPACK_IMPORTED_MODULE_1__, _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__]);\n([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _button_Button_js__WEBPACK_IMPORTED_MODULE_1__, _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nclass Alert extends _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(options) {\n        super(\".alert\");\n        this\n            .appendToHeader((0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"h1\", options.icon, options.title))\n            .appendToMain((0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"p\", options.message))\n            .appendToFooter(new _button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".confirm\", {\n            title: options.confirmButtonTitle ?? \"OK\",\n            onClick: () => {\n                if (options.onConfirm)\n                    options.onConfirm();\n                this.remove();\n            },\n        }));\n    }\n}\n//# sourceMappingURL=Alert.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/modals/Alert.js?");

/***/ }),

/***/ "../app-components/lib/modals/Confirm.js":
/*!***********************************************!*\
  !*** ../app-components/lib/modals/Confirm.js ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Confirm)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\n/* harmony import */ var _button_Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button.js */ \"../app-components/lib/button/Button.js\");\n/* harmony import */ var _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StructuredModal.js */ \"../app-components/lib/modals/StructuredModal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _button_Button_js__WEBPACK_IMPORTED_MODULE_1__, _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__]);\n([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _button_Button_js__WEBPACK_IMPORTED_MODULE_1__, _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nclass Confirm extends _StructuredModal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    resolveConfirm;\n    rejectConfirm;\n    constructor(options) {\n        super(\".confirm\");\n        this\n            .appendToHeader((0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"h1\", options.icon, options.title))\n            .appendToMain((0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"p\", options.message))\n            .appendToFooter(new _button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".cancel\", {\n            title: \"Cancel\",\n            onClick: () => {\n                this.rejectConfirm?.(new Error(\"Canceled by user\"));\n                this.remove();\n            },\n        }), new _button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".confirm\", {\n            type: _button_Button_js__WEBPACK_IMPORTED_MODULE_1__.ButtonType.Contained,\n            title: options.confirmButtonTitle ?? \"Confirm\",\n            onClick: () => {\n                if (options.onConfirm)\n                    options.onConfirm();\n                this.resolveConfirm?.();\n                this.remove();\n            },\n        }));\n    }\n    async waitForConfirmation() {\n        return new Promise((resolve, reject) => {\n            this.resolveConfirm = resolve;\n            this.rejectConfirm = reject;\n        });\n    }\n}\n//# sourceMappingURL=Confirm.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/modals/Confirm.js?");

/***/ }),

/***/ "../app-components/lib/modals/Modal.js":
/*!*********************************************!*\
  !*** ../app-components/lib/modals/Modal.js ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Modal extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    closeListener = () => this.remove();\n    constructor(classNames) {\n        super(`dialog.modal${classNames}`);\n        this\n            .onDom(\"close\", this.closeListener)\n            .onDom(\"click\", (event) => {\n            const rect = this.calculateRect();\n            if (event.clientX < rect.left ||\n                event.clientX > rect.right ||\n                event.clientY < rect.top ||\n                event.clientY > rect.bottom) {\n                this.htmlElement.close();\n            }\n        })\n            .appendTo(_common_module_app__WEBPACK_IMPORTED_MODULE_0__.BodyNode).htmlElement.showModal();\n    }\n}\n//# sourceMappingURL=Modal.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/modals/Modal.js?");

/***/ }),

/***/ "../app-components/lib/modals/StructuredModal.js":
/*!*******************************************************!*\
  !*** ../app-components/lib/modals/StructuredModal.js ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StructuredModal)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ \"../app-components/lib/modals/Modal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _Modal_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_common_module_app__WEBPACK_IMPORTED_MODULE_0__, _Modal_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nclass StructuredModal extends _Modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    header;\n    main;\n    footer;\n    constructor(classNames) {\n        super(`.structured-modal${classNames}`);\n        super.append(this.header = (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"header\"), this.main = (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"main\"), this.footer = (0,_common_module_app__WEBPACK_IMPORTED_MODULE_0__.el)(\"footer\"));\n    }\n    appendToHeader(...children) {\n        this.header.append(...children);\n        return this;\n    }\n    appendToMain(...children) {\n        this.main.append(...children);\n        return this;\n    }\n    appendToFooter(...children) {\n        this.footer.append(...children);\n        return this;\n    }\n}\n//# sourceMappingURL=StructuredModal.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/modals/StructuredModal.js?");

/***/ }),

/***/ "../app-module/lib/SPAInitializer.js":
/*!*******************************************!*\
  !*** ../app-module/lib/SPAInitializer.js ***!
  \*******************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _route_Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route/Router.js */ \"../app-module/lib/route/Router.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_route_Router_js__WEBPACK_IMPORTED_MODULE_0__]);\n_route_Router_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass SPAInitializer {\n    static INITIAL_PATH_KEY = \"initialPath\";\n    init() {\n        const initialPath = sessionStorage[SPAInitializer.INITIAL_PATH_KEY];\n        if (initialPath) {\n            _route_Router_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].goWithoutHistory(initialPath);\n            sessionStorage.removeItem(SPAInitializer.INITIAL_PATH_KEY);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SPAInitializer());\n//# sourceMappingURL=SPAInitializer.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-module/lib/SPAInitializer.js?");

/***/ }),

/***/ "../app-module/lib/dom/BodyNode.js":
/*!*****************************************!*\
  !*** ../app-module/lib/dom/BodyNode.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../app-module/lib/dom/DomNode.js\");\n\nclass BodyNode extends _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super(document.body);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BodyNode());\n//# sourceMappingURL=BodyNode.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/BodyNode.js?");

/***/ }),

/***/ "../app-module/lib/dom/DomNode.js":
/*!****************************************!*\
  !*** ../app-module/lib/dom/DomNode.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomNode)\n/* harmony export */ });\n/* harmony import */ var _WindowEventTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowEventTreeNode.js */ \"../app-module/lib/dom/WindowEventTreeNode.js\");\n\nfunction createElementBySelector(selector) {\n    const parts = (selector || \"div\").split(/([#.])/);\n    const tagName = parts[0] || \"div\";\n    const element = document.createElement(tagName);\n    let currentType = \"\";\n    for (let i = 1; i < parts.length; i += 2) {\n        currentType = parts[i];\n        const value = parts[i + 1];\n        if (currentType === \"#\")\n            element.id = value;\n        else if (currentType === \".\")\n            element.classList.add(value);\n    }\n    return element;\n}\nclass DomNode extends _WindowEventTreeNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    htmlElement;\n    constructor(elementOrSelector, ...children) {\n        super();\n        this.htmlElement = elementOrSelector instanceof HTMLElement\n            ? elementOrSelector\n            : createElementBySelector(elementOrSelector ?? \"\");\n        this.append(...children);\n    }\n    prependText(text) {\n        if (this.htmlElement instanceof HTMLTextAreaElement) {\n            this.htmlElement.value = text + this.htmlElement.value;\n        }\n        else {\n            const fragment = document.createDocumentFragment();\n            text.split(\"\\n\").forEach((line, index) => {\n                if (index > 0)\n                    fragment.appendChild(document.createElement(\"br\"));\n                fragment.appendChild(document.createTextNode(line));\n            });\n            this.htmlElement.prepend(fragment);\n        }\n        return this;\n    }\n    appendText(text) {\n        if (this.htmlElement instanceof HTMLTextAreaElement) {\n            this.htmlElement.value += text;\n        }\n        else {\n            const fragment = document.createDocumentFragment();\n            text.split(\"\\n\").forEach((line, index) => {\n                if (index > 0)\n                    fragment.appendChild(document.createElement(\"br\"));\n                fragment.appendChild(document.createTextNode(line));\n            });\n            this.htmlElement.appendChild(fragment);\n        }\n        return this;\n    }\n    prepend(...children) {\n        for (const child of children) {\n            if (child === undefined)\n                continue;\n            else if (child instanceof DomNode)\n                child.appendTo(this, 0);\n            else if (typeof child === \"string\")\n                this.prependText(child);\n            else {\n                Object.assign(this.htmlElement, child);\n                if (child.style)\n                    this.style(child.style);\n            }\n        }\n        return this;\n    }\n    append(...children) {\n        for (const child of children) {\n            if (child === undefined)\n                continue;\n            else if (child instanceof DomNode)\n                child.appendTo(this);\n            else if (typeof child === \"string\")\n                this.appendText(child);\n            else {\n                Object.assign(this.htmlElement, child);\n                if (child.style)\n                    this.style(child.style);\n            }\n        }\n        return this;\n    }\n    isVisible() {\n        let currentNode = this;\n        while (currentNode !== undefined) {\n            if (currentNode.htmlElement === document.body) {\n                return true;\n            }\n            currentNode = currentNode.parent;\n        }\n        return false;\n    }\n    notifyVisibility() {\n        this.emit(\"visible\", ...[]);\n        this.children.forEach((child) => child.notifyVisibility());\n    }\n    appendTo(parent, index) {\n        if (index === undefined || index >= parent.htmlElement.childNodes.length) {\n            parent.htmlElement.appendChild(this.htmlElement);\n        }\n        else {\n            const referenceNode = parent.htmlElement.childNodes[index];\n            parent.htmlElement.insertBefore(this.htmlElement, referenceNode);\n        }\n        super.appendTo(parent, index);\n        if (this.isVisible())\n            this.notifyVisibility();\n        return this;\n    }\n    remove() {\n        if (this.removed)\n            return;\n        this.emit(\"remove\", ...[]);\n        this.htmlElement.remove();\n        super.remove();\n    }\n    empty() {\n        this.htmlElement.innerHTML = \"\";\n        return this;\n    }\n    set text(text) {\n        this.empty();\n        if (text)\n            this.appendText(text);\n    }\n    get text() {\n        return this.htmlElement.textContent ?? \"\";\n    }\n    addClass(...classNames) {\n        this.htmlElement.classList.add(...classNames);\n        return this;\n    }\n    removeClass(...classNames) {\n        this.htmlElement.classList.remove(...classNames);\n        return this;\n    }\n    style(styles) {\n        if (typeof styles === \"string\") {\n            return this.htmlElement.style.getPropertyValue(styles);\n        }\n        else {\n            Object.assign(this.htmlElement.style, styles);\n            return this;\n        }\n    }\n    onDom(type, listener, options) {\n        this.htmlElement.addEventListener(type, listener, options);\n        return this;\n    }\n    offDom(type, listener, options) {\n        this.htmlElement.removeEventListener(type, listener, options);\n        return this;\n    }\n    calculateRect() {\n        return this.htmlElement.getBoundingClientRect();\n    }\n}\n//# sourceMappingURL=DomNode.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/DomNode.js?");

/***/ }),

/***/ "../app-module/lib/dom/WindowEventTreeNode.js":
/*!****************************************************!*\
  !*** ../app-module/lib/dom/WindowEventTreeNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WindowEventTreeNode)\n/* harmony export */ });\n/* harmony import */ var _common_module_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/ts */ \"../ts-module/lib/index.js\");\n\nclass WindowEventTreeNode extends _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.EventTreeNode {\n    listeners = [];\n    onWindow(type, listener, options) {\n        const boundListener = (event) => {\n            listener.call(this, event);\n        };\n        window.addEventListener(type, boundListener, options);\n        this.listeners.push({\n            type,\n            listener: boundListener,\n            options,\n            originalListener: listener,\n        });\n        return this;\n    }\n    offWindow(type, listener, options) {\n        const index = this.listeners.findIndex((l) => l.type === type && l.originalListener === listener);\n        if (index !== -1) {\n            const { listener: boundListener } = this.listeners[index];\n            window.removeEventListener(type, boundListener, options);\n            this.listeners.splice(index, 1);\n        }\n        return this;\n    }\n    remove() {\n        this.listeners.forEach(({ type, listener, options }) => window.removeEventListener(type, listener, options));\n        this.listeners = [];\n    }\n}\n//# sourceMappingURL=WindowEventTreeNode.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/WindowEventTreeNode.js?");

/***/ }),

/***/ "../app-module/lib/dom/el.js":
/*!***********************************!*\
  !*** ../app-module/lib/dom/el.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ el)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../app-module/lib/dom/DomNode.js\");\n\nfunction el(elementOrSelector, ...children) {\n    return new _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](elementOrSelector, ...children);\n}\n//# sourceMappingURL=el.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/el.js?");

/***/ }),

/***/ "../app-module/lib/i18n/I18nMessageManager.js":
/*!****************************************************!*\
  !*** ../app-module/lib/i18n/I18nMessageManager.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass I18nMessageManager {\n    messages = {};\n    addMessage(language, key, message) {\n        if (!this.messages[language]) {\n            this.messages[language] = {};\n        }\n        this.messages[language][key] = message;\n    }\n    addMessages(language, messages) {\n        if (!this.messages[language]) {\n            this.messages[language] = {};\n        }\n        this.messages[language] = { ...this.messages[language], ...messages };\n    }\n    addMessagesBulk(messages) {\n        for (const [language, messageDictionary] of Object.entries(messages)) {\n            if (!this.messages[language]) {\n                this.messages[language] = {};\n            }\n            this.messages[language] = {\n                ...this.messages[language],\n                ...messageDictionary,\n            };\n        }\n    }\n    getMessage(language, key) {\n        const message = this.messages[language]?.[key];\n        if (message === undefined) {\n            console.error(`message \"${key}\" not exists.`);\n            return \"\";\n        }\n        return message;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new I18nMessageManager());\n//# sourceMappingURL=I18nMessageManager.js.map\n\n//# sourceURL=webpack:///../app-module/lib/i18n/I18nMessageManager.js?");

/***/ }),

/***/ "../app-module/lib/i18n/msg.js":
/*!*************************************!*\
  !*** ../app-module/lib/i18n/msg.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ msg)\n/* harmony export */ });\n/* harmony import */ var _utils_BrowserInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/BrowserInfo.js */ \"../app-module/lib/utils/BrowserInfo.js\");\n/* harmony import */ var _I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18nMessageManager.js */ \"../app-module/lib/i18n/I18nMessageManager.js\");\n\n\nfunction msg(key) {\n    return _I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMessage(_utils_BrowserInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].languageCode, key);\n}\n//# sourceMappingURL=msg.js.map\n\n//# sourceURL=webpack:///../app-module/lib/i18n/msg.js?");

/***/ }),

/***/ "../app-module/lib/index.js":
/*!**********************************!*\
  !*** ../app-module/lib/index.js ***!
  \**********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BodyNode: () => (/* reexport safe */ _dom_BodyNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   BrowserInfo: () => (/* reexport safe */ _utils_BrowserInfo_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   DomNode: () => (/* reexport safe */ _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   I18nMessageManager: () => (/* reexport safe */ _i18n_I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Router: () => (/* reexport safe */ _route_Router_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   SPAInitializer: () => (/* reexport safe */ _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   Store: () => (/* reexport safe */ _store_Store_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   StyleUtils: () => (/* reexport safe */ _utils_StyleUtils_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   View: () => (/* reexport safe */ _route_View_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   el: () => (/* reexport safe */ _dom_el_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   msg: () => (/* reexport safe */ _i18n_msg_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dom_BodyNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/BodyNode.js */ \"../app-module/lib/dom/BodyNode.js\");\n/* harmony import */ var _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/DomNode.js */ \"../app-module/lib/dom/DomNode.js\");\n/* harmony import */ var _dom_el_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/el.js */ \"../app-module/lib/dom/el.js\");\n/* harmony import */ var _i18n_I18nMessageManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/I18nMessageManager.js */ \"../app-module/lib/i18n/I18nMessageManager.js\");\n/* harmony import */ var _i18n_msg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/msg.js */ \"../app-module/lib/i18n/msg.js\");\n/* harmony import */ var _route_Router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/Router.js */ \"../app-module/lib/route/Router.js\");\n/* harmony import */ var _route_View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route/View.js */ \"../app-module/lib/route/View.js\");\n/* harmony import */ var _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SPAInitializer.js */ \"../app-module/lib/SPAInitializer.js\");\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/Store.js */ \"../app-module/lib/store/Store.js\");\n/* harmony import */ var _utils_BrowserInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/BrowserInfo.js */ \"../app-module/lib/utils/BrowserInfo.js\");\n/* harmony import */ var _utils_StyleUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/StyleUtils.js */ \"../app-module/lib/utils/StyleUtils.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_route_Router_js__WEBPACK_IMPORTED_MODULE_5__, _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_7__]);\n([_route_Router_js__WEBPACK_IMPORTED_MODULE_5__, _SPAInitializer_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-module/lib/index.js?");

/***/ }),

/***/ "../app-module/lib/route/Router.js":
/*!*****************************************!*\
  !*** ../app-module/lib/route/Router.js ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_module_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/ts */ \"../ts-module/lib/index.js\");\n\nif (!window.URLPattern) {\n    await __webpack_require__.e(/*! import() */ \"vendors-app-module_node_modules_urlpattern-polyfill_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! urlpattern-polyfill */ \"../app-module/node_modules/urlpattern-polyfill/index.js\"));\n}\nclass Router {\n    routes = [];\n    isViewOpening = false;\n    activeViews = [];\n    constructor() {\n        window.addEventListener(\"popstate\", (event) => {\n            console.log(event);\n            this.updateActiveViews(event.state);\n        });\n    }\n    openView(View, data) {\n        this.isViewOpening = true;\n        const view = new View();\n        view.changeData(data);\n        this.activeViews.push(view);\n        this.isViewOpening = false;\n    }\n    add(pathname, View) {\n        const urlPattern = new URLPattern({ pathname });\n        this.routes.push({ urlPattern, View });\n        const params = urlPattern.exec({ pathname: location.pathname })?.pathname\n            .groups;\n        if (params)\n            this.openView(View, params);\n        return this;\n    }\n    updateActiveViews(data) {\n        for (const route of this.routes) {\n            const openingView = this.activeViews.find((view) => view instanceof route.View);\n            const urlPatternParams = route.urlPattern.exec({\n                pathname: location.pathname,\n            })?.pathname.groups;\n            if (urlPatternParams) {\n                if (data)\n                    Object.assign(data, urlPatternParams);\n                else\n                    data = urlPatternParams;\n            }\n            if (urlPatternParams) {\n                openingView\n                    ? openingView.changeData(data)\n                    : this.openView(route.View, data);\n            }\n            else if (openingView) {\n                openingView.close();\n                _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.ArrayUtils.pull(this.activeViews, openingView);\n            }\n        }\n    }\n    performNavigation(pathname, data, replace) {\n        replace\n            ? history.replaceState(undefined, \"\", pathname)\n            : history.pushState(undefined, \"\", pathname);\n        this.updateActiveViews(data);\n    }\n    go(pathname, data) {\n        if (location.pathname !== pathname) {\n            if (this.isViewOpening) {\n                setTimeout(() => this.performNavigation(pathname, data, false), 0);\n            }\n            else {\n                this.performNavigation(pathname, data, false);\n            }\n        }\n    }\n    goWithoutHistory(pathname, data) {\n        if (location.pathname !== pathname) {\n            if (this.isViewOpening) {\n                setTimeout(() => this.performNavigation(pathname, data, true), 0);\n            }\n            else {\n                this.performNavigation(pathname, data, true);\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Router());\n//# sourceMappingURL=Router.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///../app-module/lib/route/Router.js?");

/***/ }),

/***/ "../app-module/lib/route/View.js":
/*!***************************************!*\
  !*** ../app-module/lib/route/View.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n    eventListeners = new Map();\n    container;\n    changeData(data) { }\n    addViewManagedEvent(target, eventName, listener) {\n        if (!this.eventListeners.has(target)) {\n            this.eventListeners.set(target, new Map());\n        }\n        const targetListeners = this.eventListeners.get(target);\n        targetListeners.set(eventName, listener);\n        target.on(eventName, listener);\n        return this;\n    }\n    removeAllEvents() {\n        for (const [target, listeners] of this.eventListeners) {\n            for (const [eventName, listener] of listeners) {\n                target.off(eventName, listener);\n            }\n        }\n        this.eventListeners.clear();\n    }\n    close() {\n        this.removeAllEvents();\n        this.container.remove();\n    }\n}\n//# sourceMappingURL=View.js.map\n\n//# sourceURL=webpack:///../app-module/lib/route/View.js?");

/***/ }),

/***/ "../app-module/lib/store/Store.js":
/*!****************************************!*\
  !*** ../app-module/lib/store/Store.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _common_module_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/ts */ \"../ts-module/lib/index.js\");\n\nclass Store {\n    prefix;\n    constructor(name) {\n        if (!_common_module_ts__WEBPACK_IMPORTED_MODULE_0__.StringUtils.isKebabCase(name)) {\n            throw new Error(\"Name must be in kebab-case format (lowercase and hyphens only).\");\n        }\n        this.prefix = `${name}/`;\n    }\n    getStorage(permanent) {\n        return permanent ? localStorage : sessionStorage;\n    }\n    getFullKey(key) {\n        return this.prefix + key;\n    }\n    static isQuotaExceededError(e) {\n        return e instanceof DOMException && (e.code === 22 ||\n            e.code === 1014 ||\n            e.name === \"QuotaExceededError\" ||\n            e.name === \"NS_ERROR_DOM_QUOTA_REACHED\");\n    }\n    setValue(key, value, permanent) {\n        const storage = this.getStorage(permanent);\n        const fullKey = this.getFullKey(key);\n        try {\n            storage.setItem(fullKey, JSON.stringify(value));\n        }\n        catch (e) {\n            if (Store.isQuotaExceededError(e)) {\n                storage.clear();\n                location.reload();\n            }\n            else {\n                throw e;\n            }\n        }\n    }\n    setTemporary(key, value) {\n        this.setValue(key, value, false);\n    }\n    setPermanent(key, value) {\n        this.setValue(key, value, true);\n    }\n    get(key) {\n        const fullKey = this.getFullKey(key);\n        const value = sessionStorage.getItem(fullKey) ??\n            localStorage.getItem(fullKey);\n        if (value === null)\n            return undefined;\n        try {\n            return _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.JsonUtils.parseWithUndefined(value);\n        }\n        catch (e) {\n            console.error(`Failed to parse ${fullKey}: ${value}`);\n            console.error(e);\n        }\n    }\n    getAll() {\n        const result = {};\n        const processStorage = (storage) => {\n            for (let i = 0; i < storage.length; i++) {\n                const key = storage.key(i);\n                if (key?.startsWith(this.prefix)) {\n                    const value = storage.getItem(key);\n                    if (value !== null) {\n                        const parsedKey = key.slice(this.prefix.length);\n                        try {\n                            result[parsedKey] = _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.JsonUtils.parseWithUndefined(value);\n                        }\n                        catch (e) {\n                            console.error(`Failed to parse ${key}: ${value}`);\n                            console.error(e);\n                        }\n                    }\n                }\n            }\n        };\n        processStorage(sessionStorage);\n        processStorage(localStorage);\n        return result;\n    }\n    isPermanent(key) {\n        return localStorage.getItem(this.getFullKey(key)) !== null;\n    }\n    remove(...keys) {\n        keys.forEach((key) => {\n            const fullKey = this.getFullKey(key);\n            sessionStorage.removeItem(fullKey);\n            localStorage.removeItem(fullKey);\n        });\n    }\n    clear() {\n        [sessionStorage, localStorage].forEach((storage) => {\n            for (let i = storage.length - 1; i >= 0; i--) {\n                const key = storage.key(i);\n                if (key?.startsWith(this.prefix)) {\n                    storage.removeItem(key);\n                }\n            }\n        });\n    }\n}\n//# sourceMappingURL=Store.js.map\n\n//# sourceURL=webpack:///../app-module/lib/store/Store.js?");

/***/ }),

/***/ "../app-module/lib/utils/BrowserInfo.js":
/*!**********************************************!*\
  !*** ../app-module/lib/utils/BrowserInfo.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store.js */ \"../app-module/lib/store/Store.js\");\n\nclass BrowserInfo {\n    _isAndroid;\n    _isIOS;\n    store = new _store_Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"browser-info\");\n    get isAndroid() {\n        return this._isAndroid ??\n            (this._isAndroid = /Android/i.test(navigator.userAgent));\n    }\n    get isIOS() {\n        return this._isIOS ??\n            (this._isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent));\n    }\n    get isMobileDevice() {\n        return this.isAndroid || this.isIOS;\n    }\n    normalizeLanguageCode(lang) {\n        const [mainLang, region] = lang.toLowerCase().split(\"-\");\n        if (mainLang === \"zh\") {\n            return region === \"tw\" || region === \"hk\" ? \"zh-TW\" : \"zh-CN\";\n        }\n        return mainLang;\n    }\n    get languageCode() {\n        const storedLang = this.store.get(\"lang\");\n        if (storedLang)\n            return storedLang;\n        const fullLang = navigator.language ||\n            (navigator.languages && navigator.languages[0]) || \"en-US\";\n        return this.normalizeLanguageCode(fullLang);\n    }\n    set languageCode(lang) {\n        this.store.setPermanent(\"lang\", this.normalizeLanguageCode(lang));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BrowserInfo());\n//# sourceMappingURL=BrowserInfo.js.map\n\n//# sourceURL=webpack:///../app-module/lib/utils/BrowserInfo.js?");

/***/ }),

/***/ "../app-module/lib/utils/StyleUtils.js":
/*!*********************************************!*\
  !*** ../app-module/lib/utils/StyleUtils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StyleUtils {\n    applyTextStroke(target, width, color) {\n        let shadow = \"\";\n        for (let i = -width; i <= width; i++) {\n            for (let j = -width; j <= width; j++) {\n                if (i !== 0 || j !== 0) {\n                    shadow += `${i}px ${j}px 0 ${color},`;\n                }\n            }\n        }\n        shadow = shadow.slice(0, -1);\n        target.style({ textShadow: shadow });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StyleUtils());\n//# sourceMappingURL=StyleUtils.js.map\n\n//# sourceURL=webpack:///../app-module/lib/utils/StyleUtils.js?");

/***/ }),

/***/ "../ts-module/lib/event/EventContainer.js":
/*!************************************************!*\
  !*** ../ts-module/lib/event/EventContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventContainer)\n/* harmony export */ });\nclass EventContainer {\n    events = {};\n    on(eventName, eventHandler) {\n        if (!this.events[eventName])\n            this.events[eventName] = [];\n        this.events[eventName].push(eventHandler);\n        return this;\n    }\n    off(eventName, eventHandler) {\n        if (!this.events[eventName])\n            return this;\n        const index = this.events[eventName].indexOf(eventHandler);\n        if (index !== -1)\n            this.events[eventName].splice(index, 1);\n        return this;\n    }\n    emit(eventName, ...args) {\n        if (!this.events[eventName])\n            return [];\n        return this.events[eventName].map((handler) => handler(...args));\n    }\n}\n//# sourceMappingURL=EventContainer.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/event/EventContainer.js?");

/***/ }),

/***/ "../ts-module/lib/index.js":
/*!*********************************!*\
  !*** ../ts-module/lib/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArrayUtils: () => (/* reexport safe */ _utils_ArrayUtils_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   EventContainer: () => (/* reexport safe */ _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   EventTreeNode: () => (/* reexport safe */ _tree_EventTreeNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   IntegerUtils: () => (/* reexport safe */ _utils_IntegerUtils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   JsonUtils: () => (/* reexport safe */ _utils_JsonUtils_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   StringUtils: () => (/* reexport safe */ _utils_StringUtils_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   TreeNode: () => (/* reexport safe */ _tree_TreeNode_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event/EventContainer.js */ \"../ts-module/lib/event/EventContainer.js\");\n/* harmony import */ var _tree_EventTreeNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree/EventTreeNode.js */ \"../ts-module/lib/tree/EventTreeNode.js\");\n/* harmony import */ var _tree_TreeNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree/TreeNode.js */ \"../ts-module/lib/tree/TreeNode.js\");\n/* harmony import */ var _utils_ArrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ArrayUtils.js */ \"../ts-module/lib/utils/ArrayUtils.js\");\n/* harmony import */ var _utils_IntegerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/IntegerUtils.js */ \"../ts-module/lib/utils/IntegerUtils.js\");\n/* harmony import */ var _utils_JsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/JsonUtils.js */ \"../ts-module/lib/utils/JsonUtils.js\");\n/* harmony import */ var _utils_StringUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/StringUtils.js */ \"../ts-module/lib/utils/StringUtils.js\");\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/index.js?");

/***/ }),

/***/ "../ts-module/lib/tree/EventTreeNode.js":
/*!**********************************************!*\
  !*** ../ts-module/lib/tree/EventTreeNode.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventTreeNode)\n/* harmony export */ });\n/* harmony import */ var _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/EventContainer.js */ \"../ts-module/lib/event/EventContainer.js\");\n\nclass EventTreeNode extends _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    parent;\n    children = [];\n    removed = false;\n    appendTo(parent, index) {\n        if (this.parent === parent) {\n            const currentIndex = this.parent.children.indexOf(this);\n            if (index !== undefined && index > currentIndex) {\n                index--;\n            }\n            this.parent.children.splice(currentIndex, 1);\n        }\n        else if (this.parent) {\n            this.remove();\n        }\n        this.parent = parent;\n        if (index !== undefined && index >= 0 && index < parent.children.length) {\n            parent.children.splice(index, 0, this);\n        }\n        else {\n            parent.children.push(this);\n        }\n        return this;\n    }\n    remove() {\n        if (this.removed)\n            return;\n        this.removed = true;\n        if (this.parent) {\n            const index = this.parent.children.indexOf(this);\n            if (index > -1)\n                this.parent.children.splice(index, 1);\n            this.parent = undefined;\n        }\n        while (this.children.length > 0) {\n            this.children[0].remove();\n        }\n    }\n}\n//# sourceMappingURL=EventTreeNode.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/tree/EventTreeNode.js?");

/***/ }),

/***/ "../ts-module/lib/tree/TreeNode.js":
/*!*****************************************!*\
  !*** ../ts-module/lib/tree/TreeNode.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TreeNode)\n/* harmony export */ });\nclass TreeNode {\n    parent;\n    children = [];\n    removed = false;\n    appendTo(parent, index) {\n        if (this.parent === parent) {\n            const currentIndex = this.parent.children.indexOf(this);\n            if (index !== undefined && index > currentIndex) {\n                index--;\n            }\n            this.parent.children.splice(currentIndex, 1);\n        }\n        else if (this.parent) {\n            this.remove();\n        }\n        this.parent = parent;\n        if (index !== undefined && index >= 0 && index < parent.children.length) {\n            parent.children.splice(index, 0, this);\n        }\n        else {\n            parent.children.push(this);\n        }\n        return this;\n    }\n    remove() {\n        if (this.removed)\n            return;\n        this.removed = true;\n        if (this.parent) {\n            const index = this.parent.children.indexOf(this);\n            if (index > -1)\n                this.parent.children.splice(index, 1);\n            this.parent = undefined;\n        }\n        while (this.children.length > 0) {\n            this.children[0].remove();\n        }\n    }\n}\n//# sourceMappingURL=TreeNode.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/tree/TreeNode.js?");

/***/ }),

/***/ "../ts-module/lib/utils/ArrayUtils.js":
/*!********************************************!*\
  !*** ../ts-module/lib/utils/ArrayUtils.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ArrayUtils {\n    pull(array, ...removeList) {\n        for (const remove of removeList) {\n            const index = array.indexOf(remove);\n            if (index !== -1)\n                array.splice(index, 1);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ArrayUtils());\n//# sourceMappingURL=ArrayUtils.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/ArrayUtils.js?");

/***/ }),

/***/ "../ts-module/lib/utils/IntegerUtils.js":
/*!**********************************************!*\
  !*** ../ts-module/lib/utils/IntegerUtils.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass IntegerUtils {\n    random(min, max) {\n        return Math.floor(Math.random() * (max - min + 1) + min);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new IntegerUtils());\n//# sourceMappingURL=IntegerUtils.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/IntegerUtils.js?");

/***/ }),

/***/ "../ts-module/lib/utils/JsonUtils.js":
/*!*******************************************!*\
  !*** ../ts-module/lib/utils/JsonUtils.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass JsonUtils {\n    parseWithUndefined(data) {\n        return JSON.parse(data, (_, v) => v === null ? undefined : v);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new JsonUtils());\n//# sourceMappingURL=JsonUtils.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/JsonUtils.js?");

/***/ }),

/***/ "../ts-module/lib/utils/StringUtils.js":
/*!*********************************************!*\
  !*** ../ts-module/lib/utils/StringUtils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StringUtils {\n    capitalize(input) {\n        const words = input.split(\" \");\n        const capitalizedWords = words.map((word) => {\n            if (word.length === 0)\n                return word;\n            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\n        });\n        return capitalizedWords.join(\" \");\n    }\n    isKebabCase(str) {\n        return /^[a-z]+(-[a-z]+)*$/.test(str);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StringUtils());\n//# sourceMappingURL=StringUtils.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/StringUtils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.ts");
/******/ 	
/******/ })()
;