"use strict";
(self["webpackChunksuper_auto_island_frontend"] = self["webpackChunksuper_auto_island_frontend"] || []).push([["src_blockly_blocks_actions_ts"],{

/***/ "./src/blockly/blocks/actions.ts":
/*!***************************************!*\
  !*** ./src/blockly/blocks/actions.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_blockGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/blockGenerator */ "./src/blockly/utils/blockGenerator.ts");
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/javascript */ "./node_modules/blockly/javascript.mjs");
/* harmony import */ var _utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/superGenerator */ "./src/blockly/utils/superGenerator.ts");
/* harmony import */ var _types_extraData_d_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/extraData.d.ts */ "./src/blockly/types/extraData.d.ts");
/* harmony import */ var _utils_wsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/wsUtils */ "./src/blockly/utils/wsUtils.ts");





var componentsConfigsResponse = await (0,_utils_wsUtils__WEBPACK_IMPORTED_MODULE_4__.wsWaitMessage)(window.saiWS, {
  type: "getComponentConfigs"
});
var componentsConfigs = componentsConfigsResponse.configs.map(function (e) {
  return [e, e];
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.broadcastSignal',
  name: '广播信号',
  icon: ['广播', "\uE561"],
  args: {
    SignalName: ['', 'text']
  },
  inlineBlock: false,
  inlineField: false
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.settings.currentComponentConfig',
  name: '组件配置方案',
  icon: ['Apps', "\uE06F"],
  args: {
    Value: ['修改为', 'dropdown', componentsConfigs]
  },
  inlineBlock: true,
  inlineField: true
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.settings.theme',
  name: '应用主题',
  icon: ['主题', "\uE5CB"],
  args: {
    Value: ['修改为', 'dropdown', [['跟随系统', '0'], ['明亮', '1'], ['黑暗', '2']]]
  },
  inlineBlock: true,
  inlineField: true,
  dropdownUseNumbers: true
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.settings.windowDockingLocation',
  name: '窗口停靠位置',
  icon: ['TV', "\uF397"],
  args: {
    Value: ['移动到', 'dropdown', [['左上角', '0'], ['中上侧', '1'], ['右上角', '2'], ['左下角', '3'], ['中下侧', '4'], ['右下角', '5']]]
  },
  inlineBlock: true,
  inlineField: true,
  dropdownUseNumbers: true
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.settings.windowLayer',
  name: '窗口层级',
  icon: ['层级', "\uEA2F"],
  args: {
    Value: ['', 'dropdown', [['置底', '0'], ['置顶', '1']]]
  },
  inlineBlock: true,
  inlineField: true,
  dropdownUseNumbers: true
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.settings.windowDockingOffsetX',
  name: '窗口向右偏移',
  icon: ['左右箭头', "\uE099"],
  args: {
    Value: ['修改为', 'number']
  },
  inlineBlock: false,
  inlineField: false
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.settings.windowDockingOffsetY',
  name: '窗口向下偏移',
  icon: ['下箭头', "\uE094"],
  args: {
    Value: ['修改为', 'number']
  },
  inlineBlock: false,
  inlineField: false
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.os.run',
  name: '运行',
  icon: ['打开', "\uEC2E"],
  args: {
    RunType: ['', 'dropdown', [
    // ['应用程序', 'Application'],
    ['终端命令', 'Command'], ['文件', 'File'], ['文件夹', 'Folder'], ['Url 链接', 'Url']]],
    Value: ['', 'text']
  },
  inlineBlock: false,
  inlineField: true
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.os.run.program',
  name: '运行程序',
  icon: ['窗口集', "\uF4B1"],
  args: {
    Value: ['', 'text'],
    Args: ['应用程序启动参数', 'text']
  },
  dropdownUseNumbers: true,
  inlineBlock: false,
  inlineField: false
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.showNotification',
  name: '显示提醒',
  icon: ['提醒', "\uE02B"],
  args: {
    label1: ['提醒内容设置', 'dummy'],
    Mask: ['标题内容', 'text'],
    MaskDurationSeconds: ['标题持续时间(秒)', 'number'],
    Content: ['正文内容', 'text'],
    ContentDurationSeconds: ['正文持续时长(秒)', 'number'],
    IsMaskSpeechEnabled: ['启用标题语音', 'boolean'],
    IsContentSpeechEnabled: ['启用正文语音', 'boolean'],
    IsWaitForCompleteEnabled: ['等待提醒结束', 'boolean'],
    label2: ['高级设置', 'dummy'],
    IsAdvancedSettingsEnabled: ['启用?', 'checkbox'],
    IsTopmostEnabled: ['置顶提醒', 'boolean'],
    IsEffectEnabled: ['启用提醒特效', 'boolean'],
    IsSoundEffectEnabled: ['启用提醒音效', 'boolean'],
    CustomSoundEffectPath: ['自定义提醒音效(留空默认)', 'text']
  },
  inlineBlock: false,
  inlineField: false
});

// 不使用 MetaBlock
(0,_utils_blockGenerator__WEBPACK_IMPORTED_MODULE_0__.addBlock)({
  type: 'classisland_action_sleep',
  message: '[%1 等待时长] %2 秒',
  inputs: {
    ICON: {
      type: 'field_icon',
      data: {
        text: '沙漏',
        icon: "\uE9AE"
      }
    },
    SECONDS: {
      type: 'input_value',
      blockType: 'math_number',
      check: 'Number',
      fields: {
        NUM: 5
      }
    }
  },
  inline: true,
  style: 'my_blocks'
}, function (block, generator) {
  var value = generator.valueToCode(block, 'SECONDS', blockly_javascript__WEBPACK_IMPORTED_MODULE_1__.Order.NONE) || "''";
  var wrapper = generator.provideFunction_('classisland_action_sleep', "async function ".concat(generator.FUNCTION_NAME_PLACEHOLDER_, "(value) {\n                const actionId = \"classisland.action.sleep\";\n                const actionData = { Value: value };\n                console.log('Internal Action', actionId, JSON.stringify(actionData));\n                await new Promise(resolve => {\n                    setTimeout(() => {\n                        console.log('Internal Action Sleep Completed');\n                        resolve();\n                    }, actionData.Value * 1000);\n                });\n            }"));
  return "await ".concat(wrapper, "(").concat(value, ");\n");
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.notification.weather',
  name: '显示天气提醒',
  icon: ['多云', "\uF44F"],
  args: {
    NotificationKind: ['', 'dropdown', [['三天天气预报', '0'], ['气象预警', '1'], ['逐小时天气预报', '2']]]
  },
  inlineBlock: false,
  inlineField: false,
  dropdownUseNumbers: true
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.app.quit',
  name: '退出 ClassIsland',
  icon: ['退出', "\uE0DE"],
  args: {},
  inlineBlock: false,
  inlineField: false
});
(0,_utils_superGenerator__WEBPACK_IMPORTED_MODULE_2__.addMetaBlock)({
  id: 'classisland.app.restart',
  name: '重启 ClassIsland',
  icon: ['转圈箭头', "\uE0BD"],
  args: {
    Value: ['静默重启:', 'boolean']
  },
  inlineBlock: false,
  inlineField: false
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=src_blockly_blocks_actions_ts.js.map