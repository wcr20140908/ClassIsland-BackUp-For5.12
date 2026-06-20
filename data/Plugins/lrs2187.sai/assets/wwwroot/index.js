/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blockly/fields/FieldIcon.ts":
/*!*****************************************!*\
  !*** ./src/blockly/fields/FieldIcon.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldIcon: () => (/* binding */ FieldIcon)
/* harmony export */ });
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly */ "./node_modules/blockly/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

/**
 * icon 字段
 */
var FieldIcon = /*#__PURE__*/function (_Blockly$Field) {
  function FieldIcon(value, validator) {
    var _this;
    _classCallCheck(this, FieldIcon);
    _this = _callSuper(this, FieldIcon, [value, validator]);
    _this.SERIALIZABLE = false;
    _this.EDITABLE = false;
    return _this;
  }
  _inherits(FieldIcon, _Blockly$Field);
  return _createClass(FieldIcon, [{
    key: "doClassValidation_",
    value: function doClassValidation_(newValue) {
      if (typeof newValue.icon != 'string' || typeof newValue.text != 'string') {
        return null;
      }
      return newValue;
    }
  }, {
    key: "doValueUpdate_",
    value: function doValueUpdate_(newValue) {
      _superPropGet(FieldIcon, "doValueUpdate_", this, 3)([newValue]);
      this.displayValue_ = newValue;
      this.isValueValid_ = true;
    }
  }, {
    key: "doValueInvalid_",
    value: function doValueInvalid_(newValue) {
      this.displayValue_ = newValue;
      this.isDirty_ = true;
      this.isValueValid_ = false;
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this$displayValue_;
      return "(".concat((_this$displayValue_ = this.displayValue_) === null || _this$displayValue_ === void 0 ? void 0 : _this$displayValue_.text, ")");
    }
  }, {
    key: "render_",
    value: function render_() {
      this.textContent_.nodeValue = this.value_.icon;
      this.textElement_.style.fontFamily = "'Fluent System Icons'";
      this.textElement_.style.fontSize = '16px';
      this._changeColor();
      this.updateSize_();
    }
  }, {
    key: "_changeColor",
    value: function _changeColor() {
      var sourceBlock = this.sourceBlock_;
      if (sourceBlock.isShadow()) {
        this.textElement_.parentElement.querySelector('rect')
        // @ts-ignore
        .setAttribute('fill', sourceBlock.style.colourSecondary);
      } else {
        this.textElement_.parentElement.querySelector('rect')
        // @ts-ignore
        .setAttribute('fill', sourceBlock.style.colourPrimary);
      }
    }
  }, {
    key: "updateSize_",
    value: function updateSize_() {
      var bbox = this.textElement_.getBBox();
      var width = bbox.width;
      var height = bbox.height;
      this.size_.width = width - 17;
      this.size_.height = height - 12;
      this.borderRect_.setAttribute('width', '0');
      this.borderRect_.setAttribute('height', '0');
      this.textElement_.style.transform = "translate(-9px, 19px)";
    }
  }], [{
    key: "fromJson",
    value: function fromJson(_options) {
      var icon = blockly__WEBPACK_IMPORTED_MODULE_0__.utils.parsing.replaceMessageReferences(_options.icon);
      var text = blockly__WEBPACK_IMPORTED_MODULE_0__.utils.parsing.replaceMessageReferences(_options.text);
      return new FieldIcon({
        icon: icon,
        text: text
      });
    }
  }]);
}(blockly__WEBPACK_IMPORTED_MODULE_0__.Field);

/***/ }),

/***/ "./src/blockly/index.ts":
/*!******************************!*\
  !*** ./src/blockly/index.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blockly: () => (/* reexport module object */ blockly__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   injectBlockly: () => (/* binding */ injectBlockly),
/* harmony export */   runCode: () => (/* binding */ runCode),
/* harmony export */   saveCode: () => (/* binding */ saveCode)
/* harmony export */ });
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly */ "./node_modules/blockly/index.mjs");
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/javascript */ "./node_modules/blockly/javascript.mjs");
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbox */ "./src/blockly/toolbox.ts");
/* harmony import */ var _langs_zh_hans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./langs/zh-hans */ "./src/blockly/langs/zh-hans.ts");
/* harmony import */ var _utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/quickSetup */ "./src/blockly/utils/quickSetup.ts");
/* harmony import */ var _utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/superGenerator */ "./src/blockly/utils/superGenerator.ts");
/* harmony import */ var _utils_wsUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/wsUtils */ "./src/blockly/utils/wsUtils.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _types_extraData_d_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/extraData.d.ts */ "./src/blockly/types/extraData.d.ts");
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prettier */ "./node_modules/prettier/standalone.mjs");
/* harmony import */ var prettier_plugins_estree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prettier/plugins/estree */ "./node_modules/prettier/plugins/estree.mjs");
/* harmony import */ var prettier_plugins_babel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prettier/plugins/babel */ "./node_modules/prettier/plugins/babel.mjs");
/* harmony import */ var _fields_FieldIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/FieldIcon */ "./src/blockly/fields/FieldIcon.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }













blockly__WEBPACK_IMPORTED_MODULE_0__.fieldRegistry.register('field_icon', _fields_FieldIcon__WEBPACK_IMPORTED_MODULE_12__.FieldIcon);
var ws = new WebSocket('/');
ws.addEventListener('message', function (ev) {
  return console.log(ev);
});
await new Promise(function (resolve) {
  setTimeout(resolve, 500);
});
var data = await (0,_utils_wsUtils__WEBPACK_IMPORTED_MODULE_6__.wsWaitMessage)(ws, {
  type: 'getExtraBlocks'
});
window.extraBlocks = JSON.parse(data.blocksString);
window.saiWS = ws;
window.saiWaitMessage = _utils_wsUtils__WEBPACK_IMPORTED_MODULE_6__.wsWaitMessage;
(0,_utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__.preSetupCategory)('ClassIsland');
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__.addLabel)('规则');
// @ts-ignore
await __webpack_require__.e(/*! import() */ "src_blockly_blocks_rules_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blocks/rules */ "./src/blockly/blocks/rules.ts"));
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__.addLabel)('行动');
// @ts-ignore
await __webpack_require__.e(/*! import() */ "src_blockly_blocks_actions_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blocks/actions */ "./src/blockly/blocks/actions.ts"));
(0,_utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__.postSetupCategory)();
for (var pluginName in window.extraBlocks) {
  (0,_utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__.preSetupCategory)(pluginName);
  if (window.extraBlocks[pluginName].rules.length != 0) {
    (0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__.addLabel)("规则");
    var _iterator = _createForOfIteratorHelper(window.extraBlocks[pluginName].rules),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var block = _step.value;
        (0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__.addMetaBlock)(block);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (window.extraBlocks[pluginName].actions.length != 0) {
    (0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__.addLabel)("行动");
    var _iterator2 = _createForOfIteratorHelper(window.extraBlocks[pluginName].actions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _block = _step2.value;
        (0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_5__.addMetaBlock)(_block);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  (0,_utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__.postSetupCategory)();
}
(0,_utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__.preSetupCategory)('调试');
// @ts-ignore
await __webpack_require__.e(/*! import() */ "src_blockly_blocks_debug_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blocks/debug */ "./src/blockly/blocks/debug.ts"));
(0,_utils_quickSetup__WEBPACK_IMPORTED_MODULE_4__.postSetupCategory)();
blockly__WEBPACK_IMPORTED_MODULE_0__.setLocale(_langs_zh_hans__WEBPACK_IMPORTED_MODULE_3__["default"]);
blockly__WEBPACK_IMPORTED_MODULE_0__.ContextMenuItems.registerCommentOptions();
var projectUuid = new URLSearchParams(location.search).get("id") || "";
if (projectUuid === "") {
  location.href = "/?id=".concat((0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])());
}
var callActionDefinition = "\nasync function callAction(id, data) {\n    console.log(\"Calling Action:\", id, data);\n    await window.saiWaitMessage(window.saiWS, {\n        type: \"runAction\",\n        id: id, \n        settings: data,\n    });\n}";
var getRuleStateDefinition = "\nasync function getRuleState(id, data) {\n    console.log(\"Getting Rule State:\", id, data);\n    const result = await window.saiWaitMessage(window.saiWS, {\n        type: \"runRule\",\n        id: id,\n        settings: data,\n    });\n    return result.result;\n}";
var defaultTheme = blockly__WEBPACK_IMPORTED_MODULE_0__.Theme.defineTheme('default', {
  base: blockly__WEBPACK_IMPORTED_MODULE_0__.Themes.Classic,
  name: 'default',
  blockStyles: {
    my_blocks: {
      colourPrimary: '#00AAFF',
      colourSecondary: '#00C2FF',
      colourTertiary: '#007cb8'
    }
  },
  categoryStyles: {
    my_category: {
      colour: '#00AAFF'
    }
  }
});

/**
 * 运行代码
 * @param workspace 工作区实例
 */
var runCode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var workspace,
      code,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          workspace = _args.length > 0 && _args[0] !== undefined ? _args[0] : window.workspace;
          console.log(workspace);
          code = blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.javascriptGenerator.workspaceToCode(workspace);
          code = "".concat(callActionDefinition, "\n").concat(getRuleStateDefinition, "\n\n") + code;
          code = "(async () => {\n".concat(code, "\n})();\n");
          _context.n = 1;
          return prettier__WEBPACK_IMPORTED_MODULE_9__.format(code, {
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
            parser: 'babel',
            plugins: [prettier_plugins_estree__WEBPACK_IMPORTED_MODULE_10__, prettier_plugins_babel__WEBPACK_IMPORTED_MODULE_11__]
          });
        case 1:
          code = _context.v;
          console.log(code);
          eval(code);
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function runCode() {
    return _ref.apply(this, arguments);
  };
}();
window.runCode = runCode;

/**
 * 保存代码
 * @param workspace 工作区实例
 */
var saveCode = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var workspace,
      code,
      _args2 = arguments;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          workspace = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : window.workspace;
          console.log(workspace);
          code = blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.javascriptGenerator.workspaceToCode(workspace);
          code = "(async () => {\n".concat(code, "\n})();\n");
          _context2.n = 1;
          return prettier__WEBPACK_IMPORTED_MODULE_9__.format(code, {
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
            parser: 'babel',
            plugins: [prettier_plugins_estree__WEBPACK_IMPORTED_MODULE_10__, prettier_plugins_babel__WEBPACK_IMPORTED_MODULE_11__]
          });
        case 1:
          code = _context2.v;
          console.log(code);
          _context2.n = 2;
          return (0,_utils_wsUtils__WEBPACK_IMPORTED_MODULE_6__.wsWaitMessage)(ws, {
            type: "save",
            data: {
              type: "blocklyAction",
              guid: projectUuid,
              workspace: JSON.stringify(blockly__WEBPACK_IMPORTED_MODULE_0__.serialization.workspaces.save(workspace)),
              code: code
            }
          });
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function saveCode() {
    return _ref2.apply(this, arguments);
  };
}();
window.saveCode = saveCode;

/**
 * 注入 blockly
 * @param dom 要注入的 dom 元素
 */
var injectBlockly = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dom) {
    var workspace, _data, _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          workspace = blockly__WEBPACK_IMPORTED_MODULE_0__.inject(dom, {
            toolbox: _toolbox__WEBPACK_IMPORTED_MODULE_2__.toolbox,
            zoom: {
              controls: true
            },
            media: './media/',
            theme: defaultTheme
          });
          window.workspace = workspace;
          Reflect.set(window, 'javascriptGenerator', blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.javascriptGenerator);
          Reflect.set(window, 'Blockly', blockly__WEBPACK_IMPORTED_MODULE_0__);
          if (!workspace) {
            _context3.n = 5;
            break;
          }
          _context3.p = 1;
          _context3.n = 2;
          return (0,_utils_wsUtils__WEBPACK_IMPORTED_MODULE_6__.wsWaitMessage)(ws, {
            type: "load",
            guid: projectUuid
          });
        case 2:
          _data = _context3.v;
          if (_data.guid !== projectUuid) {
            location.href = "/?id=".concat(_data.guid);
          }
          blockly__WEBPACK_IMPORTED_MODULE_0__.Events.disable();
          blockly__WEBPACK_IMPORTED_MODULE_0__.serialization.workspaces.load(JSON.parse(_data.workspace), workspace, undefined);
          blockly__WEBPACK_IMPORTED_MODULE_0__.Events.enable();
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t = _context3.v;
          console.log("Load Failed!");
        case 4:
          return _context3.a(2, workspace);
        case 5:
          return _context3.a(2, null);
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function injectBlockly(_x) {
    return _ref3.apply(this, arguments);
  };
}();

// @ts-ignore

// @ts-ignore
// nothing
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/blockly/langs/zh-hans.ts":
/*!**************************************!*\
  !*** ./src/blockly/langs/zh-hans.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Blockly = {
  Msg: Object.create(null)
};
Blockly.Msg['ADD_COMMENT'] = '添加注释';
Blockly.Msg['ALT_KEY'] = 'Alt'; // untranslated
Blockly.Msg['CANNOT_DELETE_VARIABLE_PROCEDURE'] = '不能删除变量“%1”，因为它是函数“%2”定义的一部分';
Blockly.Msg['CHANGE_VALUE_TITLE'] = '更改值：';
Blockly.Msg['CHROME_OS'] = 'ChromeOS'; // untranslated
Blockly.Msg['CLEAN_UP'] = '整理块';
Blockly.Msg['CLOSE'] = 'Close'; // untranslated
Blockly.Msg['COLLAPSED_WARNINGS_WARNING'] = '已收起的信息块内包含警告。';
Blockly.Msg['COLLAPSE_ALL'] = '折叠块';
Blockly.Msg['COLLAPSE_BLOCK'] = '折叠块';
Blockly.Msg['COLOUR_BLEND_COLOUR1'] = '颜色1';
Blockly.Msg['COLOUR_BLEND_COLOUR2'] = '颜色2';
Blockly.Msg['COLOUR_BLEND_HELPURL'] = 'https://meyerweb.com/eric/tools/color-blend/#:::rgbp'; // untranslated
Blockly.Msg['COLOUR_BLEND_RATIO'] = '比例';
Blockly.Msg['COLOUR_BLEND_TITLE'] = '混合';
Blockly.Msg['COLOUR_BLEND_TOOLTIP'] = '把两种颜色以一个给定的比例(0.0-1.0)进行混合。';
Blockly.Msg['COLOUR_PICKER_HELPURL'] = 'https://zh.wikipedia.org/wiki/颜色';
Blockly.Msg['COLOUR_PICKER_TOOLTIP'] = '从调色板中选择一种颜色。';
Blockly.Msg['COLOUR_RANDOM_HELPURL'] = 'http://randomcolour.com'; // untranslated
Blockly.Msg['COLOUR_RANDOM_TITLE'] = '随机颜色';
Blockly.Msg['COLOUR_RANDOM_TOOLTIP'] = '随机选择一种颜色。';
Blockly.Msg['COLOUR_RGB_BLUE'] = '蓝色';
Blockly.Msg['COLOUR_RGB_GREEN'] = '绿色';
Blockly.Msg['COLOUR_RGB_HELPURL'] = 'https://www.december.com/html/spec/colorpercompact.html'; // untranslated
Blockly.Msg['COLOUR_RGB_RED'] = '红色';
Blockly.Msg['COLOUR_RGB_TITLE'] = '颜色';
Blockly.Msg['COLOUR_RGB_TOOLTIP'] = '通过指定红色、绿色和蓝色的量创建一种颜色。所有的值必须在0和100之间。';
Blockly.Msg['COMMAND_KEY'] = '⌘ Command'; // untranslated
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_HELPURL'] = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks'; // untranslated
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK'] = '跳出循环';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE'] = '继续下一轮循环';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK'] = '跳出包含它的循环。';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE'] = '跳过本轮循环的剩余部分，并继进行续下一轮循环。';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_WARNING'] = '警告：这个块只能在循环内使用。';
Blockly.Msg['CONTROLS_FOREACH_HELPURL'] = 'https://github.com/google/blockly/wiki/Loops#for-each'; // untranslated
Blockly.Msg['CONTROLS_FOREACH_TITLE'] = '遍历列表 %2 里的每一项 %1';
Blockly.Msg['CONTROLS_FOREACH_TOOLTIP'] = '遍历列表中的每一项，将变量“%1”设为所选项，并执行一些语句。';
Blockly.Msg['CONTROLS_FOR_HELPURL'] = 'https://github.com/google/blockly/wiki/Loops#count-with'; // untranslated
Blockly.Msg['CONTROLS_FOR_TITLE'] = '变量 %1 从 %2 数到 %3 每次增加 %4';
Blockly.Msg['CONTROLS_FOR_TOOLTIP'] = '让变量“%1”记录开始数到结束数之间指定间隔的值，并执行指定的块。';
Blockly.Msg['CONTROLS_IF_ELSEIF_TOOLTIP'] = '在这个if语句块中增加一个条件。';
Blockly.Msg['CONTROLS_IF_ELSE_TOOLTIP'] = '在这个if语句块中添加一个最终的，包括所有其余情况的条件。';
Blockly.Msg['CONTROLS_IF_HELPURL'] = 'https://github.com/google/blockly/wiki/IfElse'; // untranslated
Blockly.Msg['CONTROLS_IF_IF_TOOLTIP'] = '增加、删除或重新排列各节来重新配置这个if语句块。';
Blockly.Msg['CONTROLS_IF_MSG_ELSE'] = '否则';
Blockly.Msg['CONTROLS_IF_MSG_ELSEIF'] = '否则如果';
Blockly.Msg['CONTROLS_IF_MSG_IF'] = '如果';
Blockly.Msg['CONTROLS_IF_TOOLTIP_1'] = '如果值为真，执行一些语句。';
Blockly.Msg['CONTROLS_IF_TOOLTIP_2'] = '如果值为真，则执行第一块语句。否则，则执行第二块语句。';
Blockly.Msg['CONTROLS_IF_TOOLTIP_3'] = '如果第一个值为真，则执行第一块的语句。否则，如果第二个值为真，则执行第二块的语句。';
Blockly.Msg['CONTROLS_IF_TOOLTIP_4'] = '如果第一个值为真，则执行第一块的语句。否则，如果第二个值为真，则执行语句的第二块。如果没有值为真，则执行最后一块的语句。';
Blockly.Msg['CONTROLS_REPEAT_HELPURL'] = 'https://zh.wikipedia.org/wiki/For循环';
Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'] = '执行';
Blockly.Msg['CONTROLS_REPEAT_TITLE'] = '重复 %1 次';
Blockly.Msg['CONTROLS_REPEAT_TOOLTIP'] = '多次执行一些语句。';
Blockly.Msg['CONTROLS_WHILEUNTIL_HELPURL'] = 'https://github.com/google/blockly/wiki/Loops#repeat'; // untranslated
Blockly.Msg['CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'] = '重复直到条件满足';
Blockly.Msg['CONTROLS_WHILEUNTIL_OPERATOR_WHILE'] = '当条件满足时重复';
Blockly.Msg['CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL'] = '只要值为假，就一直循环执行一些语句。';
Blockly.Msg['CONTROLS_WHILEUNTIL_TOOLTIP_WHILE'] = '只要值为真，就一直循环执行一些语句。';
Blockly.Msg['CONTROL_KEY'] = 'Ctrl'; // untranslated
Blockly.Msg['COPY_SHORTCUT'] = 'Copy'; // untranslated
Blockly.Msg['CUT_SHORTCUT'] = 'Cut'; // untranslated
Blockly.Msg['DELETE_ALL_BLOCKS'] = '删除所有 %1 个块吗？';
Blockly.Msg['DELETE_BLOCK'] = '删除块';
Blockly.Msg['DELETE_VARIABLE'] = '删除变量“%1”';
Blockly.Msg['DELETE_VARIABLE_CONFIRMATION'] = '要删除对变量“%2”的%1个引用吗？';
Blockly.Msg['DELETE_X_BLOCKS'] = '删除 %1 个块';
Blockly.Msg['DIALOG_CANCEL'] = '取消';
Blockly.Msg['DIALOG_OK'] = '确认';
Blockly.Msg['DISABLE_BLOCK'] = '禁用块';
Blockly.Msg['DUPLICATE_BLOCK'] = '复制';
Blockly.Msg['DUPLICATE_COMMENT'] = '复制注释';
Blockly.Msg['EDIT_BLOCK_CONTENTS'] = 'Edit Block contents'; // untranslated
Blockly.Msg['ENABLE_BLOCK'] = '启用块';
Blockly.Msg['EXPAND_ALL'] = '展开块';
Blockly.Msg['EXPAND_BLOCK'] = '展开块';
Blockly.Msg['EXTERNAL_INPUTS'] = '外部输入';
Blockly.Msg['HELP'] = '帮助';
Blockly.Msg['HELP_PROMPT'] = 'Press %1 for help on keyboard controls'; // untranslated
Blockly.Msg['INLINE_INPUTS'] = '单行输入';
Blockly.Msg['KEYBOARD_NAV_CONSTRAINED_MOVE_HINT'] = 'Use the arrow keys to move, then %1 to accept the position'; // untranslated
Blockly.Msg['KEYBOARD_NAV_COPIED_HINT'] = 'Copied. Press %1 to paste.'; // untranslated
Blockly.Msg['KEYBOARD_NAV_CUT_HINT'] = 'Cut. Press %1 to paste.'; // untranslated
Blockly.Msg['KEYBOARD_NAV_UNCONSTRAINED_MOVE_HINT'] = 'Hold %1 and use arrow keys to move freely, then %2 to accept the position'; // untranslated
Blockly.Msg['LINUX'] = 'Linux'; // untranslated
Blockly.Msg['LISTS_CREATE_EMPTY_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#create-empty-list'; // untranslated
Blockly.Msg['LISTS_CREATE_EMPTY_TITLE'] = '创建空列表';
Blockly.Msg['LISTS_CREATE_EMPTY_TOOLTIP'] = '返回一个列表，长度为 0，不包含任何数据记录';
Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TITLE_ADD'] = '列表';
Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP'] = '增加、删除或重新排列各部分以此重新配置这个列表块。';
Blockly.Msg['LISTS_CREATE_WITH_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#create-list-with'; // untranslated
Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '创建列表，内容：';
Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP'] = '将一个项添加到列表中。';
Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP'] = '建立一个具有任意数量项目的列表。';
Blockly.Msg['LISTS_GET_INDEX_FIRST'] = '第一项';
Blockly.Msg['LISTS_GET_INDEX_FROM_END'] = '倒数第#项';
Blockly.Msg['LISTS_GET_INDEX_FROM_START'] = '#';
Blockly.Msg['LISTS_GET_INDEX_GET'] = '取得';
Blockly.Msg['LISTS_GET_INDEX_GET_REMOVE'] = '取得并移除';
Blockly.Msg['LISTS_GET_INDEX_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg['LISTS_GET_INDEX_LAST'] = '最后一项';
Blockly.Msg['LISTS_GET_INDEX_RANDOM'] = '随机的一项';
Blockly.Msg['LISTS_GET_INDEX_REMOVE'] = '移除';
Blockly.Msg['LISTS_GET_INDEX_TAIL'] = ''; // untranslated
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_FIRST'] = '返回列表中的第一项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_FROM'] = '返回在列表中的指定位置的项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_LAST'] = '返回列表中的最后一项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_RANDOM'] = '返回列表中的随机一项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST'] = '移除并返回列表中的第一项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM'] = '移除并返回列表中的指定位置的项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST'] = '移除并返回列表中的最后一项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM'] = '移除并返回列表中的随机一项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST'] = '移除列表中的第一项';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM'] = '移除在列表中的指定位置的项。';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST'] = '移除列表中的最后一项';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM'] = '删除列表中的随机一项。';
Blockly.Msg['LISTS_GET_SUBLIST_END_FROM_END'] = '到倒数第#项';
Blockly.Msg['LISTS_GET_SUBLIST_END_FROM_START'] = '到第#项';
Blockly.Msg['LISTS_GET_SUBLIST_END_LAST'] = '到最后一项';
Blockly.Msg['LISTS_GET_SUBLIST_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist'; // untranslated
Blockly.Msg['LISTS_GET_SUBLIST_START_FIRST'] = '获取子列表，从第一项';
Blockly.Msg['LISTS_GET_SUBLIST_START_FROM_END'] = '获取子列表，从倒数第#项';
Blockly.Msg['LISTS_GET_SUBLIST_START_FROM_START'] = '获取子列表，从第#项';
Blockly.Msg['LISTS_GET_SUBLIST_TAIL'] = ''; // untranslated
Blockly.Msg['LISTS_GET_SUBLIST_TOOLTIP'] = '复制列表中指定的部分。';
Blockly.Msg['LISTS_INDEX_FROM_END_TOOLTIP'] = '%1是最后一项。';
Blockly.Msg['LISTS_INDEX_FROM_START_TOOLTIP'] = '%1是第一项。';
Blockly.Msg['LISTS_INDEX_OF_FIRST'] = '寻找第一次出现的项';
Blockly.Msg['LISTS_INDEX_OF_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list'; // untranslated
Blockly.Msg['LISTS_INDEX_OF_LAST'] = '寻找最后一次出现的项';
Blockly.Msg['LISTS_INDEX_OF_TOOLTIP'] = '返回在列表中的第一/最后一个匹配项的索引值。如果找不到项目则返回%1。';
Blockly.Msg['LISTS_INLIST'] = '在列表中';
Blockly.Msg['LISTS_ISEMPTY_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#is-empty'; // untranslated
Blockly.Msg['LISTS_ISEMPTY_TITLE'] = '%1是空的';
Blockly.Msg['LISTS_ISEMPTY_TOOLTIP'] = '如果改列表为空，则返回真。';
Blockly.Msg['LISTS_LENGTH_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#length-of'; // untranslated
Blockly.Msg['LISTS_LENGTH_TITLE'] = '%1的长度';
Blockly.Msg['LISTS_LENGTH_TOOLTIP'] = '返回列表的长度。';
Blockly.Msg['LISTS_REPEAT_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#create-list-with'; // untranslated
Blockly.Msg['LISTS_REPEAT_TITLE'] = '建立列表使用项 %1 重复 %2 次';
Blockly.Msg['LISTS_REPEAT_TOOLTIP'] = '建立包含指定重复次数的值的列表。';
Blockly.Msg['LISTS_REVERSE_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list'; // untranslated
Blockly.Msg['LISTS_REVERSE_MESSAGE0'] = '倒转%1';
Blockly.Msg['LISTS_REVERSE_TOOLTIP'] = '倒转一个列表，返回副本。';
Blockly.Msg['LISTS_SET_INDEX_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#in-list--set'; // untranslated
Blockly.Msg['LISTS_SET_INDEX_INPUT_TO'] = '值为';
Blockly.Msg['LISTS_SET_INDEX_INSERT'] = '插入在';
Blockly.Msg['LISTS_SET_INDEX_SET'] = '设置';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST'] = '在列表的起始处添加该项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FROM'] = '在列表中指定位置插入项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_LAST'] = '在列表的末尾处添加该项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM'] = '在列表的随机位置插入该项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_FIRST'] = '设置列表中的第一项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_FROM'] = '设置在列表中指定位置的项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_LAST'] = '设置列表中的最后一项。';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_RANDOM'] = '设置列表中的随机一项。';
Blockly.Msg['LISTS_SORT_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list'; // untranslated
Blockly.Msg['LISTS_SORT_ORDER_ASCENDING'] = '升序';
Blockly.Msg['LISTS_SORT_ORDER_DESCENDING'] = '降序';
Blockly.Msg['LISTS_SORT_TITLE'] = '排序%1 %2 %3';
Blockly.Msg['LISTS_SORT_TOOLTIP'] = '排序一个列表，返回副本。';
Blockly.Msg['LISTS_SORT_TYPE_IGNORECASE'] = '按字母（忽略大小写）';
Blockly.Msg['LISTS_SORT_TYPE_NUMERIC'] = '按数字';
Blockly.Msg['LISTS_SORT_TYPE_TEXT'] = '按字母';
Blockly.Msg['LISTS_SPLIT_HELPURL'] = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists'; // untranslated
Blockly.Msg['LISTS_SPLIT_LIST_FROM_TEXT'] = '从文本制作列表';
Blockly.Msg['LISTS_SPLIT_TEXT_FROM_LIST'] = '将列表合并为文本';
Blockly.Msg['LISTS_SPLIT_TOOLTIP_JOIN'] = '加入文本列表至一个文本，由分隔符分隔。';
Blockly.Msg['LISTS_SPLIT_TOOLTIP_SPLIT'] = '将文本按指定的分隔符拆分为文本组成的列表。';
Blockly.Msg['LISTS_SPLIT_WITH_DELIMITER'] = '分隔符：';
Blockly.Msg['LOGIC_BOOLEAN_FALSE'] = 'false';
Blockly.Msg['LOGIC_BOOLEAN_HELPURL'] = 'https://github.com/google/blockly/wiki/Logic#values'; // untranslated
Blockly.Msg['LOGIC_BOOLEAN_TOOLTIP'] = '返回 true 或 false。';
Blockly.Msg['LOGIC_BOOLEAN_TRUE'] = 'true';
Blockly.Msg['LOGIC_COMPARE_HELPURL'] = 'https://zh.wikipedia.org/wiki/不等';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_EQ'] = '如果两个输入结果相等，则返回真。';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_GT'] = '如果第一个输入结果比第二个大，则返回真。';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_GTE'] = '如果第一个输入结果大于或等于第二个输入结果，则返回真。';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_LT'] = '如果第一个输入结果比第二个小，则返回真。';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_LTE'] = '如果第一个输入结果小于或等于第二个输入结果，则返回真。';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_NEQ'] = '如果两个输入结果不相等，则返回真。';
Blockly.Msg['LOGIC_NEGATE_HELPURL'] = 'https://github.com/google/blockly/wiki/Logic#not'; // untranslated
Blockly.Msg['LOGIC_NEGATE_TITLE'] = '非 %1';
Blockly.Msg['LOGIC_NEGATE_TOOLTIP'] = '如果输入结果为false，则返回true；如果输入结果为true，则返回false。';
Blockly.Msg['LOGIC_NULL'] = '空';
Blockly.Msg['LOGIC_NULL_HELPURL'] = 'https://en.wikipedia.org/wiki/Nullable_type'; // untranslated
Blockly.Msg['LOGIC_NULL_TOOLTIP'] = '返回空值。';
Blockly.Msg['LOGIC_OPERATION_AND'] = '并且';
Blockly.Msg['LOGIC_OPERATION_HELPURL'] = 'https://github.com/google/blockly/wiki/Logic#logical-operations'; // untranslated
Blockly.Msg['LOGIC_OPERATION_OR'] = '或';
Blockly.Msg['LOGIC_OPERATION_TOOLTIP_AND'] = '如果两个输入结果都为真，则返回真。';
Blockly.Msg['LOGIC_OPERATION_TOOLTIP_OR'] = '如果至少有一个输入结果为真，则返回真。';
Blockly.Msg['LOGIC_TERNARY_CONDITION'] = '断言';
Blockly.Msg['LOGIC_TERNARY_HELPURL'] = 'https://zh.wikipedia.org/wiki/条件运算符%3F:';
Blockly.Msg['LOGIC_TERNARY_IF_FALSE'] = '如果为 false';
Blockly.Msg['LOGIC_TERNARY_IF_TRUE'] = '如果为 true';
Blockly.Msg['LOGIC_TERNARY_TOOLTIP'] = '检查“断言”里的条件语句。如果条件为真，则返回“如果为真”的值，否则，则返回“如果为假”的值。';
Blockly.Msg['MAC_OS'] = 'macOS'; // untranslated
Blockly.Msg['MATH_ADDITION_SYMBOL'] = '+'; // untranslated
Blockly.Msg['MATH_ARITHMETIC_HELPURL'] = 'https://zh.wikipedia.org/wiki/算术';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_ADD'] = '返回两个数的和。';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_DIVIDE'] = '返回两个数的商。';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_MINUS'] = '返回两个数的差。';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_MULTIPLY'] = '返回两个数的积。';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_POWER'] = '返回第一个数的第二个数次幂。';
Blockly.Msg['MATH_ATAN2_HELPURL'] = 'https://zh.wikipedia.org/wiki/反正切2';
Blockly.Msg['MATH_ATAN2_TITLE'] = '点(x:%1,y:%2)的方位角';
Blockly.Msg['MATH_ATAN2_TOOLTIP'] = '返回点（X，Y）的反正切值，范围为-180到180度。';
Blockly.Msg['MATH_CHANGE_HELPURL'] = 'https://zh.wikipedia.org/wiki/加法';
Blockly.Msg['MATH_CHANGE_TITLE'] = '给 %1 加 %2';
Blockly.Msg['MATH_CHANGE_TOOLTIP'] = '把数加到变量“%1”。';
Blockly.Msg['MATH_CONSTANT_HELPURL'] = 'https://zh.wikipedia.org/wiki/数学常数';
Blockly.Msg['MATH_CONSTANT_TOOLTIP'] = '返回一个以下常见常数：π (3.141…)、e (2.718…)、φ (1.618…)、根号2 (1.414…)、根号½ (0.707…)或∞ (无穷)。';
Blockly.Msg['MATH_CONSTRAIN_HELPURL'] = 'https://en.wikipedia.org/wiki/Clamping_(graphics)'; // untranslated
Blockly.Msg['MATH_CONSTRAIN_TITLE'] = '将 %1 限制在 最低 %2 到最高 %3 之间';
Blockly.Msg['MATH_CONSTRAIN_TOOLTIP'] = '把一个数限制在指定的极限（含）之间。';
Blockly.Msg['MATH_DIVISION_SYMBOL'] = '÷'; // untranslated
Blockly.Msg['MATH_IS_DIVISIBLE_BY'] = '可整除被';
Blockly.Msg['MATH_IS_EVEN'] = '是偶数';
Blockly.Msg['MATH_IS_NEGATIVE'] = '是负数';
Blockly.Msg['MATH_IS_ODD'] = '是奇数';
Blockly.Msg['MATH_IS_POSITIVE'] = '是正数';
Blockly.Msg['MATH_IS_PRIME'] = '是质数';
Blockly.Msg['MATH_IS_TOOLTIP'] = '检查一个数是否是偶数、奇数、质数、整数、正数、负数，或者是否能被某数整除。返回真或假。';
Blockly.Msg['MATH_IS_WHOLE'] = '是整数';
Blockly.Msg['MATH_MODULO_HELPURL'] = 'https://zh.wikipedia.org/wiki/模除';
Blockly.Msg['MATH_MODULO_TITLE'] = '%1 ÷ %2 的余数';
Blockly.Msg['MATH_MODULO_TOOLTIP'] = '返回两个数相除的余数。';
Blockly.Msg['MATH_MULTIPLICATION_SYMBOL'] = '×'; // untranslated
Blockly.Msg['MATH_NUMBER_HELPURL'] = 'https://zh.wikipedia.org/wiki/数';
Blockly.Msg['MATH_NUMBER_TOOLTIP'] = '一个数。';
Blockly.Msg['MATH_ONLIST_HELPURL'] = ''; // untranslated
Blockly.Msg['MATH_ONLIST_OPERATOR_AVERAGE'] = '列表的平均';
Blockly.Msg['MATH_ONLIST_OPERATOR_MAX'] = '列表的最大数';
Blockly.Msg['MATH_ONLIST_OPERATOR_MEDIAN'] = '列表的中位数';
Blockly.Msg['MATH_ONLIST_OPERATOR_MIN'] = '列表的最小数';
Blockly.Msg['MATH_ONLIST_OPERATOR_MODE'] = '列表的众数';
Blockly.Msg['MATH_ONLIST_OPERATOR_RANDOM'] = '列表的随机项';
Blockly.Msg['MATH_ONLIST_OPERATOR_STD_DEV'] = '列表的标准差';
Blockly.Msg['MATH_ONLIST_OPERATOR_SUM'] = '列表的和';
Blockly.Msg['MATH_ONLIST_TOOLTIP_AVERAGE'] = '返回列表内数值的平均（算术平均）。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MAX'] = '返回列表内的最大数。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MEDIAN'] = '返回列表内数的中位数。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MIN'] = '返回列表内的最小数。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MODE'] = '返回列表中的出现次数最多的项的列表。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_RANDOM'] = '返回列表内的一个随机元素。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_STD_DEV'] = '返回列表的标准差。';
Blockly.Msg['MATH_ONLIST_TOOLTIP_SUM'] = '返回列表内的所有数的和。';
Blockly.Msg['MATH_POWER_SYMBOL'] = '^'; // untranslated
Blockly.Msg['MATH_RANDOM_FLOAT_HELPURL'] = 'https://zh.wikipedia.org/wiki/随机数生成器';
Blockly.Msg['MATH_RANDOM_FLOAT_TITLE_RANDOM'] = '随机小数';
Blockly.Msg['MATH_RANDOM_FLOAT_TOOLTIP'] = '返回一个从0.0（含）到1.0（不含）之间的随机数。';
Blockly.Msg['MATH_RANDOM_INT_HELPURL'] = 'https://zh.wikipedia.org/wiki/随机数生成器';
Blockly.Msg['MATH_RANDOM_INT_TITLE'] = '从 %1 到 %2 范围内的随机整数';
Blockly.Msg['MATH_RANDOM_INT_TOOLTIP'] = '返回两个指定的极限（含）之间的随机整数。';
Blockly.Msg['MATH_ROUND_HELPURL'] = 'https://zh.wikipedia.org/wiki/数值修约';
Blockly.Msg['MATH_ROUND_OPERATOR_ROUND'] = '四舍五入';
Blockly.Msg['MATH_ROUND_OPERATOR_ROUNDDOWN'] = '向下舍入';
Blockly.Msg['MATH_ROUND_OPERATOR_ROUNDUP'] = '向上舍入';
Blockly.Msg['MATH_ROUND_TOOLTIP'] = '数向上或向下取整。';
Blockly.Msg['MATH_SINGLE_HELPURL'] = 'https://zh.wikipedia.org/wiki/平方根';
Blockly.Msg['MATH_SINGLE_OP_ABSOLUTE'] = '绝对值';
Blockly.Msg['MATH_SINGLE_OP_ROOT'] = '平方根';
Blockly.Msg['MATH_SINGLE_TOOLTIP_ABS'] = '返回一个数的绝对值。';
Blockly.Msg['MATH_SINGLE_TOOLTIP_EXP'] = '返回e的一个数次幂。';
Blockly.Msg['MATH_SINGLE_TOOLTIP_LN'] = '返回一个数的自然对数。';
Blockly.Msg['MATH_SINGLE_TOOLTIP_LOG10'] = '返回一个数的以10为底的对数。';
Blockly.Msg['MATH_SINGLE_TOOLTIP_NEG'] = '返回一个数的相反数。';
Blockly.Msg['MATH_SINGLE_TOOLTIP_POW10'] = '返回10的一个数次幂。';
Blockly.Msg['MATH_SINGLE_TOOLTIP_ROOT'] = '返回一个数的平方根。';
Blockly.Msg['MATH_SUBTRACTION_SYMBOL'] = '-'; // untranslated
Blockly.Msg['MATH_TRIG_ACOS'] = 'acos';
Blockly.Msg['MATH_TRIG_ASIN'] = 'asin';
Blockly.Msg['MATH_TRIG_ATAN'] = 'atan';
Blockly.Msg['MATH_TRIG_COS'] = 'cos';
Blockly.Msg['MATH_TRIG_HELPURL'] = 'https://zh.wikipedia.org/wiki/三角函数';
Blockly.Msg['MATH_TRIG_SIN'] = 'sin';
Blockly.Msg['MATH_TRIG_TAN'] = 'tan';
Blockly.Msg['MATH_TRIG_TOOLTIP_ACOS'] = '返回一个数的 acos 反余弦。';
Blockly.Msg['MATH_TRIG_TOOLTIP_ASIN'] = '返回一个数的 asin 反正弦。';
Blockly.Msg['MATH_TRIG_TOOLTIP_ATAN'] = '返回一个数的 atan 反正切。';
Blockly.Msg['MATH_TRIG_TOOLTIP_COS'] = '返回角度（非弧度）的 cos 余弦。';
Blockly.Msg['MATH_TRIG_TOOLTIP_SIN'] = '返回角度（非弧度）的 sin 正弦。';
Blockly.Msg['MATH_TRIG_TOOLTIP_TAN'] = '返回角度（非弧度）的 tan 正切。';
Blockly.Msg['MOVE_BLOCK'] = 'Move Block'; // untranslated
Blockly.Msg['NEW_COLOUR_VARIABLE'] = '创建颜色变量...';
Blockly.Msg['NEW_NUMBER_VARIABLE'] = '创建数变量...';
Blockly.Msg['NEW_STRING_VARIABLE'] = '创建字符串变量...';
Blockly.Msg['NEW_VARIABLE'] = '创建变量...';
Blockly.Msg['NEW_VARIABLE_TITLE'] = '新变量的名称：';
Blockly.Msg['NEW_VARIABLE_TYPE_TITLE'] = '新变量的类型：';
Blockly.Msg['OPTION_KEY'] = '⌥ Option'; // untranslated
Blockly.Msg['ORDINAL_NUMBER_SUFFIX'] = ''; // untranslated
Blockly.Msg['PASTE_SHORTCUT'] = 'Paste'; // untranslated
Blockly.Msg['PROCEDURES_ALLOW_STATEMENTS'] = '允许声明';
Blockly.Msg['PROCEDURES_BEFORE_PARAMS'] = '与：';
Blockly.Msg['PROCEDURES_CALLNORETURN_HELPURL'] = 'https://zh.wikipedia.org/wiki/子程序';
Blockly.Msg['PROCEDURES_CALLNORETURN_TOOLTIP'] = '运行用户定义的函数“%1”。';
Blockly.Msg['PROCEDURES_CALLRETURN_HELPURL'] = 'https://zh.wikipedia.org/wiki/子程序';
Blockly.Msg['PROCEDURES_CALLRETURN_TOOLTIP'] = '运行用户定义的函数“%1”，并使用它的输出值。';
Blockly.Msg['PROCEDURES_CALL_BEFORE_PARAMS'] = '与：';
Blockly.Msg['PROCEDURES_CALL_DISABLED_DEF_WARNING'] = "无法运行用户定义函数'%1'，因为定义块已被禁用。";
Blockly.Msg['PROCEDURES_CREATE_DO'] = '创建“%1”';
Blockly.Msg['PROCEDURES_DEFNORETURN_COMMENT'] = '描述该功能...';
Blockly.Msg['PROCEDURES_DEFNORETURN_DO'] = ''; // untranslated
Blockly.Msg['PROCEDURES_DEFNORETURN_HELPURL'] = 'https://zh.wikipedia.org/wiki/子程序';
Blockly.Msg['PROCEDURES_DEFNORETURN_PROCEDURE'] = '做点什么';
Blockly.Msg['PROCEDURES_DEFNORETURN_TITLE'] = '至';
Blockly.Msg['PROCEDURES_DEFNORETURN_TOOLTIP'] = '创建没有输出值的函数。';
Blockly.Msg['PROCEDURES_DEFRETURN_HELPURL'] = 'https://zh.wikipedia.org/wiki/子程序';
Blockly.Msg['PROCEDURES_DEFRETURN_RETURN'] = '返回';
Blockly.Msg['PROCEDURES_DEFRETURN_TOOLTIP'] = '创建有输出值的函数。';
Blockly.Msg['PROCEDURES_DEF_DUPLICATE_WARNING'] = '警告：此函数具有重复参数。';
Blockly.Msg['PROCEDURES_HIGHLIGHT_DEF'] = '突出显示函数定义';
Blockly.Msg['PROCEDURES_IFRETURN_HELPURL'] = 'https://c2.com/cgi/wiki?GuardClause'; // untranslated
Blockly.Msg['PROCEDURES_IFRETURN_TOOLTIP'] = '如果值为真，则返回第二个值。';
Blockly.Msg['PROCEDURES_IFRETURN_WARNING'] = '警告：这个块只能在函数内部使用。';
Blockly.Msg['PROCEDURES_MUTATORARG_TITLE'] = '输入名称：';
Blockly.Msg['PROCEDURES_MUTATORARG_TOOLTIP'] = '添加函数输入。';
Blockly.Msg['PROCEDURES_MUTATORCONTAINER_TITLE'] = '输入';
Blockly.Msg['PROCEDURES_MUTATORCONTAINER_TOOLTIP'] = '添加、移除或重新排此函数的输入。';
Blockly.Msg['REDO'] = '重做';
Blockly.Msg['REMOVE_COMMENT'] = '删除注释';
Blockly.Msg['RENAME_VARIABLE'] = '重命名变量...';
Blockly.Msg['RENAME_VARIABLE_TITLE'] = '将所有“%1”变量重命名为:';
Blockly.Msg['SHORTCUTS_CODE_NAVIGATION'] = 'Code navigation'; // untranslated
Blockly.Msg['SHORTCUTS_EDITING'] = 'Editing'; // untranslated
Blockly.Msg['SHORTCUTS_GENERAL'] = 'General'; // untranslated
Blockly.Msg['TEXT_APPEND_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#text-modification'; // untranslated
Blockly.Msg['TEXT_APPEND_TITLE'] = '在%1之后加上文本%2';
Blockly.Msg['TEXT_APPEND_TOOLTIP'] = '将一些文本追加到变量“%1”里。';
Blockly.Msg['TEXT_CHANGECASE_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case'; // untranslated
Blockly.Msg['TEXT_CHANGECASE_OPERATOR_LOWERCASE'] = '转为小写';
Blockly.Msg['TEXT_CHANGECASE_OPERATOR_TITLECASE'] = '转为首字母大写';
Blockly.Msg['TEXT_CHANGECASE_OPERATOR_UPPERCASE'] = '转为大写';
Blockly.Msg['TEXT_CHANGECASE_TOOLTIP'] = '用不同的大小写模式复制并返回这段文字。';
Blockly.Msg['TEXT_CHARAT_FIRST'] = '获取第一个字符';
Blockly.Msg['TEXT_CHARAT_FROM_END'] = '获取倒数第#个字符';
Blockly.Msg['TEXT_CHARAT_FROM_START'] = '获取第#个字符';
Blockly.Msg['TEXT_CHARAT_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#extracting-text'; // untranslated
Blockly.Msg['TEXT_CHARAT_LAST'] = '获取最后一个字符';
Blockly.Msg['TEXT_CHARAT_RANDOM'] = '获取随机一个字符';
Blockly.Msg['TEXT_CHARAT_TAIL'] = ''; // untranslated
Blockly.Msg['TEXT_CHARAT_TITLE'] = '在文本%1 里 %2';
Blockly.Msg['TEXT_CHARAT_TOOLTIP'] = '返回位于指定位置的字符。';
Blockly.Msg['TEXT_COUNT_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#counting-substrings'; // untranslated
Blockly.Msg['TEXT_COUNT_MESSAGE0'] = '计算%1在%2里出现的次数';
Blockly.Msg['TEXT_COUNT_TOOLTIP'] = '计算在一段文本中，某个部分文本重复出现了多少次。';
Blockly.Msg['TEXT_CREATE_JOIN_ITEM_TOOLTIP'] = '将一个项添加到文本中。';
Blockly.Msg['TEXT_CREATE_JOIN_TITLE_JOIN'] = '拼接';
Blockly.Msg['TEXT_CREATE_JOIN_TOOLTIP'] = '添加、移除或重新排列各节来重新配置这个文本块。';
Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_END'] = '到倒数第#个字符';
Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_START'] = '到第#个字符';
Blockly.Msg['TEXT_GET_SUBSTRING_END_LAST'] = '到最后一个字符';
Blockly.Msg['TEXT_GET_SUBSTRING_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text'; // untranslated
Blockly.Msg['TEXT_GET_SUBSTRING_INPUT_IN_TEXT'] = '从文本';
Blockly.Msg['TEXT_GET_SUBSTRING_START_FIRST'] = '获取子串，从第一个字符';
Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_END'] = '获取子串，从倒数第#个字符';
Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_START'] = '获取子串，从第#个字符';
Blockly.Msg['TEXT_GET_SUBSTRING_TAIL'] = ''; // untranslated
Blockly.Msg['TEXT_GET_SUBSTRING_TOOLTIP'] = '返回文本中指定的一部分。';
Blockly.Msg['TEXT_INDEXOF_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#finding-text'; // untranslated
Blockly.Msg['TEXT_INDEXOF_OPERATOR_FIRST'] = '寻找第一次出现的文本';
Blockly.Msg['TEXT_INDEXOF_OPERATOR_LAST'] = '寻找最后一次出现的文本';
Blockly.Msg['TEXT_INDEXOF_TITLE'] = '在文本 %1 里 %2 %3';
Blockly.Msg['TEXT_INDEXOF_TOOLTIP'] = '返回第一个文本段在第二个文本段中的第一/最后一个匹配项的起始位置。如果未找到，则返回%1。';
Blockly.Msg['TEXT_ISEMPTY_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text'; // untranslated
Blockly.Msg['TEXT_ISEMPTY_TITLE'] = '%1是空的';
Blockly.Msg['TEXT_ISEMPTY_TOOLTIP'] = '如果给定的文本为空，则返回真。';
Blockly.Msg['TEXT_JOIN_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#text-creation'; // untranslated
Blockly.Msg['TEXT_JOIN_TITLE_CREATEWITH'] = '创建文本，内容：';
Blockly.Msg['TEXT_JOIN_TOOLTIP'] = '通过串起任意数量的项以建立一段文本。';
Blockly.Msg['TEXT_LENGTH_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#text-modification'; // untranslated
Blockly.Msg['TEXT_LENGTH_TITLE'] = '%1的长度';
Blockly.Msg['TEXT_LENGTH_TOOLTIP'] = '返回给定文本的字母数（包括空格）。';
Blockly.Msg['TEXT_PRINT_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#printing-text'; // untranslated
Blockly.Msg['TEXT_PRINT_TITLE'] = '输出%1';
Blockly.Msg['TEXT_PRINT_TOOLTIP'] = '打印指定的文字、数或其他值。';
Blockly.Msg['TEXT_PROMPT_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user'; // untranslated
Blockly.Msg['TEXT_PROMPT_TOOLTIP_NUMBER'] = '提示用户输入一个数。';
Blockly.Msg['TEXT_PROMPT_TOOLTIP_TEXT'] = '要求用户输入一些文本。';
Blockly.Msg['TEXT_PROMPT_TYPE_NUMBER'] = '提示输入数并显示消息';
Blockly.Msg['TEXT_PROMPT_TYPE_TEXT'] = '要求输入文本，并显示提示消息';
Blockly.Msg['TEXT_REPLACE_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#replacing-substrings'; // untranslated
Blockly.Msg['TEXT_REPLACE_MESSAGE0'] = '把%3中的%1替换为%2';
Blockly.Msg['TEXT_REPLACE_TOOLTIP'] = '在一段文本中，将出现过的某部分文本都替换掉。';
Blockly.Msg['TEXT_REVERSE_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#reversing-text'; // untranslated
Blockly.Msg['TEXT_REVERSE_MESSAGE0'] = '倒转文本%1';
Blockly.Msg['TEXT_REVERSE_TOOLTIP'] = '将文本中各个字符的顺序倒转。';
Blockly.Msg['TEXT_TEXT_HELPURL'] = 'https://zh.wikipedia.org/wiki/字符串';
Blockly.Msg['TEXT_TEXT_TOOLTIP'] = '一个字、词或一行文本。';
Blockly.Msg['TEXT_TRIM_HELPURL'] = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces'; // untranslated
Blockly.Msg['TEXT_TRIM_OPERATOR_BOTH'] = '消除其两侧的空格';
Blockly.Msg['TEXT_TRIM_OPERATOR_LEFT'] = '消除其左侧的空格';
Blockly.Msg['TEXT_TRIM_OPERATOR_RIGHT'] = '消除其右侧的空格';
Blockly.Msg['TEXT_TRIM_TOOLTIP'] = '从某一端或同时从两端删除多余的空白，并返回这段文字的一个副本。';
Blockly.Msg['TODAY'] = '今天';
Blockly.Msg['UNDO'] = '撤销';
Blockly.Msg['UNKNOWN'] = 'Unknown'; // untranslated
Blockly.Msg['UNNAMED_KEY'] = '未命名';
Blockly.Msg['VARIABLES_DEFAULT_NAME'] = '项目';
Blockly.Msg['VARIABLES_GET_CREATE_SET'] = '创建“设定%1”';
Blockly.Msg['VARIABLES_GET_HELPURL'] = 'https://github.com/google/blockly/wiki/Variables#get'; // untranslated
Blockly.Msg['VARIABLES_GET_TOOLTIP'] = '返回此变量的值。';
Blockly.Msg['VARIABLES_SET'] = '赋值 %1 为 %2';
Blockly.Msg['VARIABLES_SET_CREATE_GET'] = '创建“获得%1”';
Blockly.Msg['VARIABLES_SET_HELPURL'] = 'https://github.com/google/blockly/wiki/Variables#set'; // untranslated
Blockly.Msg['VARIABLES_SET_TOOLTIP'] = '设置此变量，以使它和输入值相等。';
Blockly.Msg['VARIABLE_ALREADY_EXISTS'] = '名字叫“%1”的变量已经存在了。';
Blockly.Msg['VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE'] = '名字叫“%1”的变量已经有了另一个类型：“%2”。';
Blockly.Msg['VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER'] = '名为“%1”的变量已经作为参数存在于流程“%2”中。';
Blockly.Msg['WINDOWS'] = 'Windows'; // untranslated
Blockly.Msg['WORKSPACE_ARIA_LABEL'] = 'Blockly工作区';
Blockly.Msg['WORKSPACE_COMMENT_DEFAULT_TEXT'] = '说点什么...';
Blockly.Msg['CONTROLS_FOREACH_INPUT_DO'] = Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['CONTROLS_FOR_INPUT_DO'] = Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['CONTROLS_IF_ELSEIF_TITLE_ELSEIF'] = Blockly.Msg['CONTROLS_IF_MSG_ELSEIF'];
Blockly.Msg['CONTROLS_IF_ELSE_TITLE_ELSE'] = Blockly.Msg['CONTROLS_IF_MSG_ELSE'];
Blockly.Msg['CONTROLS_IF_IF_TITLE_IF'] = Blockly.Msg['CONTROLS_IF_MSG_IF'];
Blockly.Msg['CONTROLS_IF_MSG_THEN'] = Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['CONTROLS_WHILEUNTIL_INPUT_DO'] = Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['LISTS_CREATE_WITH_ITEM_TITLE'] = Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['LISTS_GET_INDEX_HELPURL'] = Blockly.Msg['LISTS_INDEX_OF_HELPURL'];
Blockly.Msg['LISTS_GET_INDEX_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['LISTS_GET_SUBLIST_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['LISTS_INDEX_OF_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['LISTS_SET_INDEX_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['MATH_CHANGE_TITLE_ITEM'] = Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['PROCEDURES_DEFRETURN_COMMENT'] = Blockly.Msg['PROCEDURES_DEFNORETURN_COMMENT'];
Blockly.Msg['PROCEDURES_DEFRETURN_DO'] = Blockly.Msg['PROCEDURES_DEFNORETURN_DO'];
Blockly.Msg['PROCEDURES_DEFRETURN_PROCEDURE'] = Blockly.Msg['PROCEDURES_DEFNORETURN_PROCEDURE'];
Blockly.Msg['PROCEDURES_DEFRETURN_TITLE'] = Blockly.Msg['PROCEDURES_DEFNORETURN_TITLE'];
Blockly.Msg['TEXT_APPEND_VARIABLE'] = Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['TEXT_CREATE_JOIN_ITEM_TITLE_ITEM'] = Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['MATH_HUE'] = '230';
Blockly.Msg['LOOPS_HUE'] = '120';
Blockly.Msg['LISTS_HUE'] = '260';
Blockly.Msg['LOGIC_HUE'] = '210';
Blockly.Msg['VARIABLES_HUE'] = '330';
Blockly.Msg['TEXTS_HUE'] = '160';
Blockly.Msg['PROCEDURES_HUE'] = '290';
Blockly.Msg['COLOUR_HUE'] = '20';
Blockly.Msg['VARIABLES_DYNAMIC_HUE'] = '310';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blockly.Msg);

/***/ }),

/***/ "./src/blockly/toolbox.ts":
/*!********************************!*\
  !*** ./src/blockly/toolbox.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toolbox: () => (/* binding */ toolbox)
/* harmony export */ });
var toolbox = {
  kind: 'categoryToolbox',
  contents: [{
    kind: 'category',
    name: '逻辑',
    categorystyle: 'logic_category',
    contents: [{
      kind: 'block',
      type: 'controls_if'
    }, {
      kind: 'block',
      type: 'logic_compare'
    }, {
      kind: 'block',
      type: 'logic_operation'
    }, {
      kind: 'block',
      type: 'logic_negate'
    }, {
      kind: 'block',
      type: 'logic_boolean'
    }, {
      kind: 'block',
      type: 'logic_null'
    }, {
      kind: 'block',
      type: 'logic_ternary'
    }]
  }, {
    kind: 'category',
    name: '循环',
    categorystyle: 'loop_category',
    contents: [{
      kind: 'block',
      type: 'controls_repeat_ext',
      inputs: {
        TIMES: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 10
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'controls_whileUntil'
    }, {
      kind: 'block',
      type: 'controls_for',
      inputs: {
        FROM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        TO: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 10
            }
          }
        },
        BY: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'controls_forEach'
    }, {
      kind: 'block',
      type: 'controls_flow_statements'
    }]
  }, {
    kind: 'category',
    name: '数学',
    categorystyle: 'math_category',
    contents: [{
      kind: 'block',
      type: 'math_number',
      fields: {
        NUM: 123
      }
    }, {
      kind: 'block',
      type: 'math_arithmetic',
      inputs: {
        A: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        B: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_single',
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 9
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_trig',
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 45
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_constant'
    }, {
      kind: 'block',
      type: 'math_number_property',
      inputs: {
        NUMBER_TO_CHECK: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 0
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_round',
      fields: {
        OP: 'ROUND'
      },
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 3.1
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_on_list',
      fields: {
        OP: 'SUM'
      }
    }, {
      kind: 'block',
      type: 'math_modulo',
      inputs: {
        DIVIDEND: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 64
            }
          }
        },
        DIVISOR: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 10
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_constrain',
      inputs: {
        VALUE: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 50
            }
          }
        },
        LOW: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        HIGH: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 100
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_random_int',
      inputs: {
        FROM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        TO: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 100
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'math_random_float'
    }, {
      kind: 'block',
      type: 'math_atan2',
      inputs: {
        X: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        Y: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        }
      }
    }]
  }, {
    kind: 'category',
    name: '文本',
    categorystyle: 'text_category',
    contents: [{
      kind: 'block',
      type: 'text'
    }, {
      kind: 'block',
      type: 'text_join'
    }, {
      kind: 'block',
      type: 'text_append',
      inputs: {
        TEXT: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: ''
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_length',
      inputs: {
        VALUE: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: 'abc'
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_isEmpty',
      inputs: {
        VALUE: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: ''
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_indexOf',
      inputs: {
        VALUE: {
          block: {
            type: 'variables_get'
          }
        },
        FIND: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: 'abc'
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_charAt',
      inputs: {
        VALUE: {
          block: {
            type: 'variables_get'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_getSubstring',
      inputs: {
        STRING: {
          block: {
            type: 'variables_get'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_changeCase',
      inputs: {
        TEXT: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: 'abc'
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_trim',
      inputs: {
        TEXT: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: 'abc'
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_count',
      inputs: {
        SUB: {
          shadow: {
            type: 'text'
          }
        },
        TEXT: {
          shadow: {
            type: 'text'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_replace',
      inputs: {
        FROM: {
          shadow: {
            type: 'text'
          }
        },
        TO: {
          shadow: {
            type: 'text'
          }
        },
        TEXT: {
          shadow: {
            type: 'text'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'text_reverse',
      inputs: {
        TEXT: {
          shadow: {
            type: 'text'
          }
        }
      }
    }]
  }, {
    kind: 'category',
    name: '列表',
    categorystyle: 'list_category',
    contents: [{
      kind: 'block',
      type: 'lists_create_with'
    }, {
      kind: 'block',
      type: 'lists_create_with'
    }, {
      kind: 'block',
      type: 'lists_repeat',
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 5
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'lists_length'
    }, {
      kind: 'block',
      type: 'lists_isEmpty'
    }, {
      kind: 'block',
      type: 'lists_indexOf',
      inputs: {
        VALUE: {
          block: {
            type: 'variables_get'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'lists_getIndex',
      inputs: {
        VALUE: {
          block: {
            type: 'variables_get'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'lists_setIndex',
      inputs: {
        LIST: {
          block: {
            type: 'variables_get'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'lists_getSublist',
      inputs: {
        LIST: {
          block: {
            type: 'variables_get'
          }
        }
      }
    }, {
      kind: 'block',
      type: 'lists_split',
      inputs: {
        DELIM: {
          shadow: {
            type: 'text',
            fields: {
              TEXT: ','
            }
          }
        }
      }
    }, {
      kind: 'block',
      type: 'lists_sort'
    }, {
      kind: 'block',
      type: 'lists_reverse'
    }]
  }, {
    kind: 'sep'
  }, {
    kind: 'category',
    name: '变量',
    categorystyle: 'variable_category',
    custom: 'VARIABLE_DYNAMIC'
  }, {
    kind: 'category',
    name: '函数',
    categorystyle: 'procedure_category',
    custom: 'PROCEDURE'
  }, {
    kind: 'sep'
  }]
};

/***/ }),

/***/ "./src/blockly/types/extraData.d.ts":
/*!******************************************!*\
  !*** ./src/blockly/types/extraData.d.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/blockly/utils/blockGenerator.ts":
/*!*********************************************!*\
  !*** ./src/blockly/utils/blockGenerator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBlock: () => (/* binding */ addBlock),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   generateBlock: () => (/* binding */ generateBlock),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// @ts-ignore

/**
 * Blockly 参数定义
 */

/**
 * Blockly 积木定义
 */

/**
 * 参数定义类型
 */

/**
 * 积木定义接口
 */

/**
 * 积木生成器输出接口
 */

/**
 * 代码生成器函数
 */

var data = {
  initialized: false
};

/**
 * 配置环境
 */
function setup(forBlock, category, blocks) {
  data.forBlock = forBlock;
  data.category = category;
  data.blocks = blocks;
  data.initialized = true;
}

/**
 * 生成积木
 * @param block 积木定义
 */
function generateBlock(block) {
  if (!data.initialized) throw new Error('未初始化 generator!');
  var toolboxInputs = {};
  var definitionArgs = [];
  for (var inputName in block.inputs) {
    if (block.inputs[inputName].type == 'input_value') {
      var toolboxFields = {};
      for (var fieldName in block.inputs[inputName].fields) {
        // @ts-ignore
        toolboxFields[fieldName] = block.inputs[inputName].fields[fieldName];
      }
      if (block.inputs[inputName].blockType) {
        toolboxInputs[inputName] = {
          shadow: {
            type: block.inputs[inputName].blockType,
            fields: toolboxFields
          }
        };
      }
    }
    definitionArgs.push(_objectSpread(_objectSpread({
      name: inputName
    }, block.inputs[inputName]), block.inputs[inputName].data));
  }
  return {
    toolbox: {
      kind: 'block',
      type: block.type,
      inputs: toolboxInputs,
      inline: block.inline
    },
    definition: _objectSpread({
      type: block.type,
      message0: block.message,
      // @ts-ignore
      args0: definitionArgs,
      output: block.output,
      tooltip: block.tooltip,
      helpUrl: block.helpUrl,
      colour: block.colour,
      style: block.style
    }, block.isReporter ? {} : {
      previousStatement: null,
      nextStatement: null
    })
  };
}

/**
 * 在当前环境添加积木
 * @param block 积木定义
 * @param generator 代码生成器函数
 */
function addBlock(block, generator) {
  var _data$category, _data$blocks;
  if (!data.initialized) throw new Error('未初始化 generator!');
  var blockDefinition = generateBlock(block);
  (_data$category = data.category) === null || _data$category === void 0 || _data$category.contents.push(blockDefinition.toolbox);
  (_data$blocks = data.blocks) === null || _data$blocks === void 0 || _data$blocks.push(blockDefinition.definition);
  data.forBlock[block.type] = generator;
}

/***/ }),

/***/ "./src/blockly/utils/quickSetup.ts":
/*!*****************************************!*\
  !*** ./src/blockly/utils/quickSetup.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postSetupCategory: () => (/* binding */ postSetupCategory),
/* harmony export */   preSetupCategory: () => (/* binding */ preSetupCategory),
/* harmony export */   settingUpCategory: () => (/* binding */ settingUpCategory)
/* harmony export */ });
/* harmony import */ var _blockGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockGenerator */ "./src/blockly/utils/blockGenerator.ts");
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolbox */ "./src/blockly/toolbox.ts");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blockly */ "./node_modules/blockly/index.mjs");
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blockly/javascript */ "./node_modules/blockly/javascript.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/**
 * 类别数据接口
 */

var settingUpCategory = {
  initialized: false
};

/**
 * 初始化当前设置的类别
 * @param name 类别名称
 */
function preSetupCategory(name) {
  settingUpCategory.blocks = [];
  settingUpCategory.forBlocks = {};
  settingUpCategory.category = {
    kind: 'category',
    name: name,
    categorystyle: 'my_category',
    contents: []
  };
  settingUpCategory.initialized = true;
  (0,_blockGenerator__WEBPACK_IMPORTED_MODULE_0__.setup)(settingUpCategory.forBlocks, settingUpCategory.category, settingUpCategory.blocks);
}

/**
 * 结束定义当前设置的类别
 */
function postSetupCategory() {
  if (!settingUpCategory.initialized) throw new Error('还没初始化呢！你先别急');
  _toolbox__WEBPACK_IMPORTED_MODULE_1__.toolbox.contents.push(settingUpCategory.category);
  blockly__WEBPACK_IMPORTED_MODULE_2__.common.defineBlocks(blockly__WEBPACK_IMPORTED_MODULE_2__.common.createBlockDefinitionsFromJsonArray(settingUpCategory.blocks));
  Object.assign(blockly_javascript__WEBPACK_IMPORTED_MODULE_3__.javascriptGenerator.forBlock, settingUpCategory.forBlocks);
  console.log("".concat(settingUpCategory.category.name, " \u521D\u59CB\u5316\u5B8C\u6210\uFF01settingUpCategory:"), _objectSpread({}, settingUpCategory));
  delete settingUpCategory.category;
  delete settingUpCategory.blocks;
  delete settingUpCategory.forBlocks;
  settingUpCategory.initialized = false;
}

/***/ }),

/***/ "./src/blockly/utils/superGenerator.ts":
/*!*********************************************!*\
  !*** ./src/blockly/utils/superGenerator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLabel: () => (/* binding */ addLabel),
/* harmony export */   addMetaBlock: () => (/* binding */ addMetaBlock)
/* harmony export */ });
/* harmony import */ var _blockGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockGenerator */ "./src/blockly/utils/blockGenerator.ts");
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/javascript */ "./node_modules/blockly/javascript.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var quote_ = function quote_(text) {
  // @ts-ignore
  return "'" + text.replaceAll("'", "\\'") + "'";
};
var numberInput = {
  type: 'input_value',
  blockType: 'math_number',
  check: 'Number',
  fields: {
    NUM: 0
  }
};
var textInput = {
  type: 'input_value',
  blockType: 'text',
  check: 'String',
  fields: {
    TEXT: ''
  }
};
var booleanInput = {
  type: 'input_value',
  blockType: 'logic_boolean',
  check: 'Boolean',
  fields: {
    BOOL: 'FALSE'
  }
};
var dummyInput = {
  type: 'input_dummy'
};

/**
 * 积木参数类型
 */

/**
 * 积木元数据接口
 */

/**
 * 添加积木
 * @param metadata 积木元数据
 */
function addMetaBlock(metadata) {
  // @ts-ignore
  var type = metadata.id.replaceAll('.', '_');
  var message = "[%1 ".concat(metadata.name, "]");
  var inputs = {};
  var args = [];
  inputs['ICON'] = {
    type: 'field_icon',
    data: {
      text: metadata.icon[0],
      icon: metadata.icon[1]
    }
  };
  var i = 1;
  for (var argName in metadata.args) {
    var arg = metadata.args[argName];
    i++;
    message += " ".concat(arg[0], " %").concat(i);
    var inputDefinition = null;
    switch (arg[1]) {
      case 'dummy':
        inputDefinition = dummyInput;
        break;
      case 'text':
        inputDefinition = textInput;
        args.push([argName, 'block']);
        break;
      case 'number':
        inputDefinition = numberInput;
        args.push([argName, 'block']);
        break;
      case 'boolean':
        inputDefinition = booleanInput;
        args.push([argName, 'block']);
        break;
      case 'dropdown':
        inputDefinition = {
          type: 'field_dropdown',
          data: {
            options: arg[2]
          }
        };
        if (!metadata.inlineField) message += '\n';
        args.push([argName, 'field_dropdown']);
        break;
      case 'checkbox':
        inputDefinition = {
          type: 'field_checkbox',
          data: {
            checked: arg[2]
          }
        };
        if (!metadata.inlineField) message += '\n';
        args.push([argName, 'field_checkbox']);
        break;
      default:
        inputDefinition = dummyInput;
    }
    inputs[argName] = inputDefinition;
  }
  (0,_blockGenerator__WEBPACK_IMPORTED_MODULE_0__.addBlock)({
    type: type,
    message: message,
    inputs: inputs,
    inline: metadata.inlineBlock,
    style: 'my_blocks',
    output: metadata.isRule ? 'Boolean' : undefined,
    isReporter: metadata.isRule
  }, function (block, generator) {
    var argsCode = '(() => { let a = {};';
    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      var _args$_i = _slicedToArray(_args[_i], 2),
        _argName = _args$_i[0],
        argType = _args$_i[1];
      var value = void 0;
      switch (argType) {
        case 'block':
          value = generator.valueToCode(block, _argName, blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.Order.NONE) || "''";
          break;
        case 'field_dropdown':
          value = block.getFieldValue(_argName);
          if (!metadata.dropdownUseNumbers) value = quote_(value);
          break;
        case 'field_checkbox':
          value = block.getFieldValue(_argName);
          value = {
            TRUE: true,
            FALSE: false
          }[value];
          break;
      }
      if (_argName.includes(".")) {
        var parts = _argName.split(".");
        for (var _i2 = 1; _i2 < parts.length; _i2++) {
          var path = parts.slice(0, _i2).join(".");
          argsCode += "if (!a.".concat(path, ") a.").concat(path, " = {};\n");
        }
      }
      argsCode += "a.".concat(_argName, " = ").concat(value, ";");
    }
    argsCode += 'return a; })()';
    if (metadata.isRule) {
      return ["await getRuleState(\"".concat(metadata.id, "\", ").concat(argsCode, ")\n"), blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.Order.MEMBER];
    } else {
      return "await callAction(\"".concat(metadata.id, "\", ").concat(argsCode, ");\n");
    }
  });
}
function addLabel(label) {
  var _data$category;
  (_data$category = _blockGenerator__WEBPACK_IMPORTED_MODULE_0__.data.category) === null || _data$category === void 0 || _data$category.contents.push({
    kind: 'label',
    text: label
  });
}

/***/ }),

/***/ "./src/blockly/utils/wsUtils.ts":
/*!**************************************!*\
  !*** ./src/blockly/utils/wsUtils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wsWaitMessage: () => (/* binding */ wsWaitMessage)
/* harmony export */ });
/**
 * websocket 发送消息并等待传回数据
 * @param ws 要发送的 websocket
 * @param sendMessage 要发送的消息
 */
function wsWaitMessage(ws, sendMessage) {
  var promiseResolve;
  var promiseReject;
  var waiter = new Promise(function (resolve, reject) {
    promiseResolve = resolve;
    promiseReject = reject;
  });
  var _resolver = function resolver(event) {
    var message = JSON.parse(event.data);
    if (message.type === 'result') {
      promiseResolve(message);
    } else {
      promiseReject(JSON.stringify(message));
    }
    ws.removeEventListener('message', _resolver);
  };
  ws.addEventListener('message', _resolver);
  ws.send(JSON.stringify(sendMessage));
  return waiter;
}

/***/ }),

/***/ "./src/components/BlocklyContainer.tsx":
/*!*********************************************!*\
  !*** ./src/components/BlocklyContainer.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlocklyContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blockly */ "./src/blockly/index.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blockly__WEBPACK_IMPORTED_MODULE_1__]);
_blockly__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



function BlocklyContainer(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var workspace = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!containerRef.current) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return (0,_blockly__WEBPACK_IMPORTED_MODULE_1__.injectBlockly)(containerRef.current);
          case 1:
            workspace.current = _context.v;
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  }, [containerRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, props, {
    ref: containerRef
  }));
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/base.css */ "./src/styles/base.css");
/* harmony import */ var _components_BlocklyContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlocklyContainer */ "./src/components/BlocklyContainer.tsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_BlocklyContainer__WEBPACK_IMPORTED_MODULE_3__]);
_components_BlocklyContainer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function IndexPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BlocklyContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-full h-full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "absolute top-2 right-2 flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "p-2 bg-neutral-300 rounded-2xl",
    onClick: function onClick() {
      return window.saveCode(window.workspace);
    }
  }, "\u4FDD\u5B58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "p-2 bg-neutral-300 rounded-2xl",
    onClick: function onClick() {
      return window.runCode(window.workspace);
    }
  }, "\u8FD0\u884C\u4EE3\u7801")));
}
var dom = document.getElementById('app');
if (dom) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(dom);
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IndexPage, null));
} else {
  throw new Error('Cannot find dom element #app');
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/styles/base.css":
/*!*****************************!*\
  !*** ./src/styles/base.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
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
/******/ 		
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
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
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
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 		var dataWebpackPrefix = "super-auto-island.frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
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
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 			"index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
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
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksuper_auto_island_frontend"] = self["webpackChunksuper_auto_island_frontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_blockly_index_mjs-node_modules_blockly_-798ac8"], () => (__webpack_require__("./src/pages/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map