"use strict";
(self["webpackChunksuper_auto_island_frontend"] = self["webpackChunksuper_auto_island_frontend"] || []).push([["src_blockly_blocks_debug_ts"],{

/***/ "./src/blockly/blocks/debug.ts":
/*!*************************************!*\
  !*** ./src/blockly/blocks/debug.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_blockGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/blockGenerator */ "./src/blockly/utils/blockGenerator.ts");
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/javascript */ "./node_modules/blockly/javascript.mjs");


(0,_utils_blockGenerator__WEBPACK_IMPORTED_MODULE_0__.addBlock)({
  type: 'console_log',
  message: '[%1 控制台] log %2',
  inputs: {
    ICON: {
      type: 'field_icon',
      data: {
        text: '控制台',
        icon: "\uF498"
      }
    },
    VALUE: {
      type: 'input_value'
    }
  },
  inline: false,
  style: 'my_blocks'
}, function (block, generator) {
  var value = generator.valueToCode(block, 'VALUE', blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.Order.NONE) || "''";
  return "console.log(".concat(value, ");\n");
});

/***/ })

}]);
//# sourceMappingURL=src_blockly_blocks_debug_ts.js.map