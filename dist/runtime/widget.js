System.register(["jimu-core/emotion","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.karee-eq-widget {
  --keq-bg: #f4f6f8;
  --keq-panel: #ffffff;
  --keq-border: #e2e6ea;
  --keq-text: #1f2937;
  --keq-text-muted: #6b7280;
  --keq-accent: #0b5fa5;
  --keq-accent-light: #eaf3fb;
  --keq-outdoor: #b45309;
  --keq-outdoor-bg: #fef3c7;
  --keq-indoor: #1d4ed8;
  --keq-indoor-bg: #dbeafe;
  height: 100%;
  overflow: auto;
  background: var(--keq-bg);
  color: var(--keq-text);
  font-size: 13px;
  padding: 10px;
  box-sizing: border-box;
}

.karee-eq-widget * {
  box-sizing: border-box;
}

.keq-empty {
  padding: 24px 14px;
  text-align: center;
  color: var(--keq-text-muted);
}

.keq-toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.keq-search {
  flex: 1 1 160px;
  padding: 6px 9px;
  border: 1px solid var(--keq-border);
  border-radius: 6px;
  font-size: 13px;
}

.keq-select {
  padding: 6px 9px;
  border: 1px solid var(--keq-border);
  border-radius: 6px;
  font-size: 13px;
  background: #fff;
}

.keq-meta {
  font-size: 11px;
  color: var(--keq-text-muted);
  margin-bottom: 6px;
}

.keq-list {
  background: var(--keq-panel);
  border: 1px solid var(--keq-border);
  border-radius: 8px;
  overflow: hidden;
}

.keq-item {
  border-bottom: 1px solid var(--keq-border);
}

.keq-item:last-child {
  border-bottom: none;
}

.keq-item-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  cursor: pointer;
}

.keq-item-row:hover {
  background: #fafbfc;
}

.keq-thumb {
  flex: 0 0 auto;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  background: #eee;
}

.keq-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.keq-thumb-empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9.5px;
  color: var(--keq-text-muted);
  text-align: center;
}

.keq-badge {
  display: inline-block;
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  margin-bottom: 2px;
}

.keq-badge-Outdoor {
  background: var(--keq-outdoor-bg);
  color: var(--keq-outdoor);
}

.keq-badge-Indoor {
  background: var(--keq-indoor-bg);
  color: var(--keq-indoor);
}

.keq-item-main {
  flex: 1 1 auto;
  min-width: 0;
}

.keq-item-title {
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.keq-item-sub {
  font-size: 11px;
  color: var(--keq-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.keq-item-value {
  margin-top: 2px;
  font-weight: 700;
  font-size: 12.5px;
}

.keq-sublabel {
  font-weight: 400;
  font-size: 9.5px;
  color: var(--keq-text-muted);
}

.keq-details {
  padding: 4px 12px 14px 84px;
  background: #fbfcfd;
}

.keq-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 6px 16px;
  margin-bottom: 8px;
}

.keq-k {
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--keq-text-muted);
}

.keq-v {
  font-size: 12px;
  margin-top: 1px;
  word-break: break-word;
}

.keq-related {
  display: inline-block;
  margin-top: 2px;
  font-size: 11.5px;
  color: var(--keq-accent);
  cursor: pointer;
  background: var(--keq-accent-light);
  border: 1px solid #bfdcf3;
  padding: 4px 9px;
  border-radius: 6px;
}

.keq-related-muted {
  color: var(--keq-text-muted);
  background: transparent;
  border: none;
  cursor: default;
  padding: 2px 0;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,2BAAA;EACA,sBAAA;EACA,yBAAA;EACA,qBAAA;EACA,wBAAA;EACA,YAAA;EACA,cAAA;EACA,yBAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;AACF;;AACA;EAAqB,sBAAA;AAGrB;;AADA;EACE,kBAAA;EACA,kBAAA;EACA,4BAAA;AAIF;;AADA;EACE,aAAA;EACA,QAAA;EACA,kBAAA;EACA,eAAA;AAIF;;AAFA;EACE,eAAA;EACA,gBAAA;EACA,mCAAA;EACA,kBAAA;EACA,eAAA;AAKF;;AAHA;EACE,gBAAA;EACA,mCAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AAMF;;AAHA;EACE,eAAA;EACA,4BAAA;EACA,kBAAA;AAMF;;AAHA;EACE,4BAAA;EACA,mCAAA;EACA,kBAAA;EACA,gBAAA;AAMF;;AAJA;EAAY,0CAAA;AAQZ;;AAPA;EAAuB,mBAAA;AAWvB;;AATA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;EACA,eAAA;AAYF;;AAVA;EAAsB,mBAAA;AActB;;AAZA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AAeF;;AAbA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;AAgBF;;AAdA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,4BAAA;EACA,kBAAA;AAiBF;;AAdA;EACE,qBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AAiBF;;AAfA;EAAqB,iCAAA;EAAmC,yBAAA;AAoBxD;;AAnBA;EAAoB,gCAAA;EAAkC,wBAAA;AAwBtD;;AAtBA;EAAiB,cAAA;EAAgB,YAAA;AA2BjC;;AA1BA;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AA6BF;;AA3BA;EACE,eAAA;EACA,4BAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AA8BF;;AA3BA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;AA8BF;;AA5BA;EAAgB,gBAAA;EAAkB,gBAAA;EAAkB,4BAAA;AAkCpD;;AAhCA;EACE,2BAAA;EACA,mBAAA;AAmCF;;AAjCA;EACE,aAAA;EACA,4DAAA;EACA,aAAA;EACA,kBAAA;AAoCF;;AAlCA;EAAS,gBAAA;EAAkB,yBAAA;EAA2B,sBAAA;EAAuB,4BAAA;AAyC7E;;AAxCA;EAAS,eAAA;EAAiB,eAAA;EAAiB,sBAAA;AA8C3C;;AA5CA;EACE,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,eAAA;EACA,mCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AA+CF;;AA7CA;EACE,4BAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;AAgDF","sourcesContent":[".karee-eq-widget {\n  --keq-bg: #f4f6f8;\n  --keq-panel: #ffffff;\n  --keq-border: #e2e6ea;\n  --keq-text: #1f2937;\n  --keq-text-muted: #6b7280;\n  --keq-accent: #0b5fa5;\n  --keq-accent-light: #eaf3fb;\n  --keq-outdoor: #b45309;\n  --keq-outdoor-bg: #fef3c7;\n  --keq-indoor: #1d4ed8;\n  --keq-indoor-bg: #dbeafe;\n  height: 100%;\n  overflow: auto;\n  background: var(--keq-bg);\n  color: var(--keq-text);\n  font-size: 13px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.karee-eq-widget * { box-sizing: border-box; }\n\n.keq-empty {\n  padding: 24px 14px;\n  text-align: center;\n  color: var(--keq-text-muted);\n}\n\n.keq-toolbar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.keq-search {\n  flex: 1 1 160px;\n  padding: 6px 9px;\n  border: 1px solid var(--keq-border);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.keq-select {\n  padding: 6px 9px;\n  border: 1px solid var(--keq-border);\n  border-radius: 6px;\n  font-size: 13px;\n  background: #fff;\n}\n\n.keq-meta {\n  font-size: 11px;\n  color: var(--keq-text-muted);\n  margin-bottom: 6px;\n}\n\n.keq-list {\n  background: var(--keq-panel);\n  border: 1px solid var(--keq-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.keq-item { border-bottom: 1px solid var(--keq-border); }\n.keq-item:last-child { border-bottom: none; }\n\n.keq-item-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n.keq-item-row:hover { background: #fafbfc; }\n\n.keq-thumb {\n  flex: 0 0 auto;\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #eee;\n}\n.keq-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.keq-thumb-empty {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9.5px;\n  color: var(--keq-text-muted);\n  text-align: center;\n}\n\n.keq-badge {\n  display: inline-block;\n  flex: 0 0 auto;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  padding: 2px 6px;\n  border-radius: 4px;\n  white-space: nowrap;\n  margin-bottom: 2px;\n}\n.keq-badge-Outdoor { background: var(--keq-outdoor-bg); color: var(--keq-outdoor); }\n.keq-badge-Indoor { background: var(--keq-indoor-bg); color: var(--keq-indoor); }\n\n.keq-item-main { flex: 1 1 auto; min-width: 0; }\n.keq-item-title {\n  font-weight: 600;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.keq-item-sub {\n  font-size: 11px;\n  color: var(--keq-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.keq-item-value {\n  margin-top: 2px;\n  font-weight: 700;\n  font-size: 12.5px;\n}\n.keq-sublabel { font-weight: 400; font-size: 9.5px; color: var(--keq-text-muted); }\n\n.keq-details {\n  padding: 4px 12px 14px 84px;\n  background: #fbfcfd;\n}\n.keq-details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 6px 16px;\n  margin-bottom: 8px;\n}\n.keq-k { font-size: 9.5px; text-transform: uppercase; letter-spacing: .03em; color: var(--keq-text-muted); }\n.keq-v { font-size: 12px; margin-top: 1px; word-break: break-word; }\n\n.keq-related {\n  display: inline-block;\n  margin-top: 2px;\n  font-size: 11.5px;\n  color: var(--keq-accent);\n  cursor: pointer;\n  background: var(--keq-accent-light);\n  border: 1px solid #bfdcf3;\n  padding: 4px 9px;\n  border-radius: 6px;\n}\n.keq-related-muted {\n  color: var(--keq-text-muted);\n  background: transparent;\n  border: none;\n  cursor: default;\n  padding: 2px 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css"
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./widget.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/karee-equipment-list/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/karee-equipment-list/src/runtime/widget.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */


// Fields we never show in the expanded detail panel — system/housekeeping fields that
// aren't useful to an end user browsing the equipment register.
const SYSTEM_FIELDS = new Set([
    'OBJECTID', 'GlobalID', 'GUID',
    'Shape__Area', 'Shape__Length', 'SHAPE_Area', 'SHAPE_Length',
    'CreationDate', 'Creator', 'EditDate', 'Editor',
    'CreationDate_1', 'Creator_1', 'EditDate_1', 'Editor_1'
]);
// Fields searched when the user types in the search box.
const SEARCH_FIELDS = ['Name', 'ItemNo', 'Description', 'Engineer', 'Requester_Name', 'Original_Manufacturer'];
function normGuid(g) {
    return (g === null || g === undefined ? '' : String(g)).toUpperCase().replace(/[{}]/g, '').trim();
}
function safeFieldValue(rec, field) {
    try {
        return rec.getFieldValue(field);
    }
    catch (e) {
        return undefined;
    }
}
function fmtCurrency(n) {
    const v = Number(n);
    if (n === null || n === undefined || n === '' || isNaN(v))
        return '—';
    try {
        return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(v);
    }
    catch (e) {
        return 'R ' + Math.round(v).toLocaleString();
    }
}
function fmtValue(v) {
    if (v === null || v === undefined || v === '')
        return '—';
    if (typeof v === 'number' && v > 1e11) {
        // looks like an epoch-ms date field
        const d = new Date(v);
        if (!isNaN(d.getTime()))
            return d.toLocaleDateString();
    }
    return String(v);
}
// Query used against both data sources. 2000 covers this service's known record counts
// (Indoor Equipment is ~238 rows); raise pageSize here if either sheet grows well beyond that.
const QUERY = { where: '1=1', outFields: ['*'], pageSize: 2000 };
// Fetches attachment thumbnails the same way the Auction Status widget proved out
// (batched queryAttachments REST calls), but against whatever URL the bound data
// source actually has - not a hardcoded service URL - so this keeps working if the
// portal item is ever republished at a different URL.
function fetchAttachmentMap(serviceUrl, ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const map = {};
        if (!serviceUrl || ids.length === 0)
            return map;
        for (let i = 0; i < ids.length; i += 50) {
            const batch = ids.slice(i, i + 50);
            try {
                const resp = yield fetch(`${serviceUrl}/queryAttachments?objectIds=${batch.join(',')}&f=json`);
                const data = yield resp.json();
                const groups = data.attachmentGroups || [];
                groups.forEach((g) => {
                    var _a;
                    if (((_a = g.attachmentInfos) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        const attId = g.attachmentInfos[0].id;
                        map[String(g.parentObjectId)] = `${serviceUrl}/${g.parentObjectId}/attachments/${attId}`;
                    }
                });
            }
            catch (e) {
                // non-fatal - that batch just renders without thumbnails
            }
        }
        return map;
    });
}
function Widget(props) {
    const [dsA, setDsA] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [dsB, setDsB] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [recordsA, setRecordsA] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [recordsB, setRecordsB] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [search, setSearch] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('');
    const [typeFilter, setTypeFilter] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('');
    const [openId, setOpenId] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [images, setImages] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({});
    const useDataSources = props.useDataSources;
    const hasTwoDataSources = !!(useDataSources && useDataSources.length >= 2);
    const config = props.config;
    const outdoorLabel = (config === null || config === void 0 ? void 0 : config.outdoorLabel) || 'Outdoor Equipment';
    const indoorLabel = (config === null || config === void 0 ? void 0 : config.indoorLabel) || 'Indoor Equipment';
    const outdoorLinkField = (config === null || config === void 0 ? void 0 : config.outdoorLinkField) || 'GlobalID';
    const indoorLinkField = (config === null || config === void 0 ? void 0 : config.indoorLinkField) || 'GUID';
    const refreshA = (ds) => { if (ds)
        setRecordsA(ds.getRecords()); };
    const refreshB = (ds) => { if (ds)
        setRecordsB(ds.getRecords()); };
    const handleCreatedA = (ds) => { setDsA(ds); refreshA(ds); };
    const handleCreatedB = (ds) => { setDsB(ds); refreshB(ds); };
    // Work out which of the two configured data sources is the spatial one (Outdoor,
    // has geometry) versus the standalone table (Indoor, no geometry) — rather than
    // assuming the user picked them in a particular order in settings.
    const aIsSpatial = !!(dsA && typeof dsA.getGeometryType === 'function' && dsA.getGeometryType());
    const bIsSpatial = !!(dsB && typeof dsB.getGeometryType === 'function' && dsB.getGeometryType());
    let outdoorDs = null;
    let indoorDs = null;
    let outdoorRecords = [];
    let indoorRecords = [];
    if (aIsSpatial && !bIsSpatial) {
        outdoorDs = dsA;
        indoorDs = dsB;
        outdoorRecords = recordsA;
        indoorRecords = recordsB;
    }
    else if (bIsSpatial && !aIsSpatial) {
        outdoorDs = dsB;
        indoorDs = dsA;
        outdoorRecords = recordsB;
        indoorRecords = recordsA;
    }
    else {
        // Fallback if geometry detection is inconclusive (e.g. neither data source has
        // loaded yet): assume the first configured data source is Outdoor.
        outdoorDs = dsA;
        indoorDs = dsB;
        outdoorRecords = recordsA;
        indoorRecords = recordsB;
    }
    const outdoorUrl = outdoorDs === null || outdoorDs === void 0 ? void 0 : outdoorDs.url;
    const indoorUrl = indoorDs === null || indoorDs === void 0 ? void 0 : indoorDs.url;
    // Thumbnails are the whole point of matching Auction Status's look - fetch them
    // for both sheets whenever the record set actually changes (not on every render).
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        let cancelled = false;
        const outdoorIds = outdoorRecords.map(r => r.getId());
        const indoorIds = indoorRecords.map(r => r.getId());
        Promise.all([
            fetchAttachmentMap(outdoorUrl, outdoorIds),
            fetchAttachmentMap(indoorUrl, indoorIds)
        ]).then(([outdoorMap, indoorMap]) => {
            if (cancelled)
                return;
            const merged = {};
            Object.keys(outdoorMap).forEach(id => { merged['O-' + id] = outdoorMap[id]; });
            Object.keys(indoorMap).forEach(id => { merged['I-' + id] = indoorMap[id]; });
            setImages(merged);
        });
        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outdoorUrl, indoorUrl, outdoorRecords.length, indoorRecords.length]);
    const items = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const outdoorByKey = {};
        outdoorRecords.forEach(r => {
            const key = normGuid(safeFieldValue(r, outdoorLinkField));
            if (key)
                outdoorByKey[key] = r;
        });
        const indoorByParent = {};
        indoorRecords.forEach(r => {
            const key = normGuid(safeFieldValue(r, indoorLinkField));
            if (key) {
                if (!indoorByParent[key])
                    indoorByParent[key] = [];
                indoorByParent[key].push(r);
            }
        });
        const outItems = outdoorRecords.map(r => {
            const key = normGuid(safeFieldValue(r, outdoorLinkField));
            return {
                id: 'O-' + r.getId(),
                kind: 'Outdoor',
                record: r,
                linkKey: key,
                childIndoorRecords: indoorByParent[key] || []
            };
        });
        const inItems = indoorRecords.map(r => {
            const key = normGuid(safeFieldValue(r, indoorLinkField));
            return {
                id: 'I-' + r.getId(),
                kind: 'Indoor',
                record: r,
                linkKey: key,
                parentOutdoorRecord: outdoorByKey[key]
            };
        });
        return [...outItems, ...inItems];
    }, [outdoorRecords, indoorRecords, outdoorLinkField, indoorLinkField]);
    const filtered = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const q = search.trim().toLowerCase();
        return items
            .filter(it => {
            if (typeFilter && it.kind !== typeFilter)
                return false;
            if (q) {
                const hay = SEARCH_FIELDS.map(f => {
                    const v = safeFieldValue(it.record, f);
                    return v === null || v === undefined ? '' : String(v).toLowerCase();
                }).join(' | ');
                if (hay.indexOf(q) === -1)
                    return false;
            }
            return true;
        })
            .sort((a, b) => {
            const an = String(safeFieldValue(a.record, 'Name') || '');
            const bn = String(safeFieldValue(b.record, 'Name') || '');
            return an.localeCompare(bn);
        });
    }, [items, search, typeFilter]);
    // This is the piece that gives the widget native map interactivity: publishing a
    // DataRecordsSelectionChangeMessage is exactly what the built-in List/Table widgets do
    // on row click, so any Action configured in the builder (e.g. this widget's "Record
    // selection changes" trigger -> a Map widget's "Zoom to" action) fires the same way it
    // would for a native widget - no bespoke map-wiring code needed here.
    //
    // NOTE: the exact constructor shape of DataRecordsSelectionChangeMessage can vary
    // slightly by Experience Builder SDK version. If TypeScript or the runtime complains
    // here, check `DataRecordsSelectionChangeMessage` in your installed
    // `jimu-core` type definitions and adjust the argument object below to match -
    // see this project's README for details.
    const publishSelection = (ds, record) => {
        if (!ds || !record)
            return;
        try {
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataRecordsSelectionChangeMessage({
                widgetId: props.id,
                dataSourceId: ds.id,
                records: [record]
            }));
        }
        catch (e) {
            console.error('karee-equipment-list: failed to publish selection message', e);
        }
    };
    const handleItemClick = (it) => {
        setOpenId(openId === it.id ? null : it.id);
        // Outdoor items zoom to themselves. Indoor items have no geometry of their own
        // (Equipment_Table is a standalone table) so we zoom to their related outdoor
        // parent instead - this is what makes indoor selections still "do something" on
        // the map, without needing a data-engineering join.
        if (it.kind === 'Outdoor') {
            publishSelection(outdoorDs, it.record);
        }
        else if (it.parentOutdoorRecord) {
            publishSelection(outdoorDs, it.parentOutdoorRecord);
        }
        // Also select the record on its own data source, so any other widget bound to
        // that same data source (e.g. a Filter or a second Table) reflects the selection.
        const ownDs = it.kind === 'Outdoor' ? outdoorDs : indoorDs;
        if (ownDs && typeof ownDs.selectRecordsByIds === 'function') {
            try {
                ownDs.selectRecordsByIds([it.record.getId()]);
            }
            catch (e) { /* non-fatal */ }
        }
    };
    if (!hasTwoDataSources) {
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "karee-eq-widget jimu-widget", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-empty", children: "Open this widget's settings and select two data sources under \"Data\": your Outdoor Equipment feature layer and your Indoor Equipment table. Order doesn't matter \u2014 the widget works out which one has geometry automatically." }) }));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "karee-eq-widget jimu-widget", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: useDataSources[0], widgetId: props.id, query: QUERY, onDataSourceCreated: handleCreatedA, onDataSourceInfoChange: () => refreshA(dsA) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: useDataSources[1], widgetId: props.id, query: QUERY, onDataSourceCreated: handleCreatedB, onDataSourceInfoChange: () => refreshB(dsB) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-toolbar", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "keq-search", type: "search", placeholder: "Search name, item no., description...", value: search, onChange: e => setSearch(e.target.value) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: "keq-select", value: typeFilter, onChange: e => setTypeFilter(e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "", children: "All types" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Outdoor", children: outdoorLabel }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Indoor", children: indoorLabel })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-meta", children: [filtered.length, " of ", items.length, " item(s)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-list", children: [filtered.length === 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-empty", children: "No equipment matches the current filters." })), filtered.map(it => {
                        const rec = it.record;
                        const name = safeFieldValue(rec, 'Name') || '(Unnamed item)';
                        const itemNo = safeFieldValue(rec, 'ItemNo');
                        const status = safeFieldValue(rec, 'Auction_Status');
                        const value = safeFieldValue(rec, 'Current_Value');
                        const open = openId === it.id;
                        const data = (typeof rec.getData === 'function') ? rec.getData() : {};
                        const imageUrl = images[it.id];
                        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'keq-item' + (open ? ' keq-open' : ''), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-item-row", onClick: () => handleItemClick(it), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-thumb", children: imageUrl
                                                ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: imageUrl, alt: String(name) })
                                                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-thumb-empty", children: "No image" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-item-main", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'keq-badge keq-badge-' + it.kind, children: it.kind === 'Outdoor' ? outdoorLabel : indoorLabel }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-item-title", children: name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-item-sub", children: [itemNo ? 'Item ' + itemNo : '', status ? (itemNo ? ' · ' : '') + status : ''] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-item-value", children: [fmtCurrency(value), " ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "keq-sublabel", children: "est. auction value" })] })] })] }), open && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-details", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-details-grid", children: Object.keys(data)
                                                .filter(f => !SYSTEM_FIELDS.has(f))
                                                .map(f => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-kv", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-k", children: f }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-v", children: fmtValue(data[f]) })] }, f))) }), it.kind === 'Indoor' && (it.parentOutdoorRecord
                                            ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-related", onClick: (e) => { e.stopPropagation(); setOpenId('O-' + it.parentOutdoorRecord.getId()); }, children: ["\u21B3 Related outdoor item: ", safeFieldValue(it.parentOutdoorRecord, 'Name')] }))
                                            : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-related keq-related-muted", children: "No related outdoor item found for this indoor record." })), it.kind === 'Outdoor' && ((it.childIndoorRecords && it.childIndoorRecords.length > 0)
                                            ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keq-related", children: ["\u21B3 ", it.childIndoorRecords.length, " related indoor item(s)"] }))
                                            : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "keq-related keq-related-muted", children: "No related indoor equipment linked to this outdoor item." }))] }))] }, it.id));
                    })] })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9rYXJlZS1lcXVpcG1lbnQtbGlzdC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0lBQXNJLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksWUFBWSxRQUFRLE1BQU0sWUFBWSxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFP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MEVBQUssU0FBUyxFQUFDLGFBQWEsd0JBQ3ZCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLCtCQUMzQixDQUNMOzRDQUNILENBQUMsQ0FBQyx5RUFBSyxTQUFTLEVBQUMsK0JBQStCLHlFQUErRCxDQUNsSCxJQUNHLENBQ1AsS0FyRE8sRUFBRSxDQUFDLEVBQUUsQ0FzRFQsQ0FDUDtvQkFDSCxDQUFDLENBQUMsSUFDRSxJQUNGLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMva2FyZWUtZXF1aXBtZW50LWxpc3Qvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2thcmVlLWVxdWlwbWVudC1saXN0L3NyYy9ydW50aW1lL3dpZGdldC5jc3M/YjJjMiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9rYXJlZS1lcXVpcG1lbnQtbGlzdC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAua2FyZWUtZXEtd2lkZ2V0IHtcbiAgLS1rZXEtYmc6ICNmNGY2Zjg7XG4gIC0ta2VxLXBhbmVsOiAjZmZmZmZmO1xuICAtLWtlcS1ib3JkZXI6ICNlMmU2ZWE7XG4gIC0ta2VxLXRleHQ6ICMxZjI5Mzc7XG4gIC0ta2VxLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4gIC0ta2VxLWFjY2VudDogIzBiNWZhNTtcbiAgLS1rZXEtYWNjZW50LWxpZ2h0OiAjZWFmM2ZiO1xuICAtLWtlcS1vdXRkb29yOiAjYjQ1MzA5O1xuICAtLWtlcS1vdXRkb29yLWJnOiAjZmVmM2M3O1xuICAtLWtlcS1pbmRvb3I6ICMxZDRlZDg7XG4gIC0ta2VxLWluZG9vci1iZzogI2RiZWFmZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0ta2VxLWJnKTtcbiAgY29sb3I6IHZhcigtLWtlcS10ZXh0KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ua2FyZWUtZXEtd2lkZ2V0ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ua2VxLWVtcHR5IHtcbiAgcGFkZGluZzogMjRweCAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1rZXEtdGV4dC1tdXRlZCk7XG59XG5cbi5rZXEtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmtlcS1zZWFyY2gge1xuICBmbGV4OiAxIDEgMTYwcHg7XG4gIHBhZGRpbmc6IDZweCA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWtlcS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmtlcS1zZWxlY3Qge1xuICBwYWRkaW5nOiA2cHggOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1rZXEtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5rZXEtbWV0YSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWtlcS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ua2VxLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXEtcGFuZWwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1rZXEtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ua2VxLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0ta2VxLWJvcmRlcik7XG59XG5cbi5rZXEtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmtlcS1pdGVtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rZXEtaXRlbS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xufVxuXG4ua2VxLXRodW1iIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmtlcS10aHVtYiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5rZXEtdGh1bWItZW1wdHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA5LjVweDtcbiAgY29sb3I6IHZhcigtLWtlcS10ZXh0LW11dGVkKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ua2VxLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmtlcS1iYWRnZS1PdXRkb29yIHtcbiAgYmFja2dyb3VuZDogdmFyKC0ta2VxLW91dGRvb3ItYmcpO1xuICBjb2xvcjogdmFyKC0ta2VxLW91dGRvb3IpO1xufVxuXG4ua2VxLWJhZGdlLUluZG9vciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWtlcS1pbmRvb3ItYmcpO1xuICBjb2xvcjogdmFyKC0ta2VxLWluZG9vcik7XG59XG5cbi5rZXEtaXRlbS1tYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmtlcS1pdGVtLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmtlcS1pdGVtLXN1YiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWtlcS10ZXh0LW11dGVkKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5rZXEtaXRlbS12YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMi41cHg7XG59XG5cbi5rZXEtc3VibGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDkuNXB4O1xuICBjb2xvcjogdmFyKC0ta2VxLXRleHQtbXV0ZWQpO1xufVxuXG4ua2VxLWRldGFpbHMge1xuICBwYWRkaW5nOiA0cHggMTJweCAxNHB4IDg0cHg7XG4gIGJhY2tncm91bmQ6ICNmYmZjZmQ7XG59XG5cbi5rZXEtZGV0YWlscy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICBnYXA6IDZweCAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5rZXEtayB7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiB2YXIoLS1rZXEtdGV4dC1tdXRlZCk7XG59XG5cbi5rZXEtdiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ua2VxLXJlbGF0ZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGNvbG9yOiB2YXIoLS1rZXEtYWNjZW50KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXEtYWNjZW50LWxpZ2h0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmZGNmMztcbiAgcGFkZGluZzogNHB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ua2VxLXJlbGF0ZWQtbXV0ZWQge1xuICBjb2xvcjogdmFyKC0ta2VxLXRleHQtbXV0ZWQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmc6IDJweCAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMva2FyZWUtZXF1aXBtZW50LWxpc3Qvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFBcUIsc0JBQUE7QUFHckI7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUhBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUFZLDBDQUFBO0FBUVo7O0FBUEE7RUFBdUIsbUJBQUE7QUFXdkI7O0FBVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFBc0IsbUJBQUE7QUFjdEI7O0FBWkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFlRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFkQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFmQTtFQUFxQixpQ0FBQTtFQUFtQyx5QkFBQTtBQW9CeEQ7O0FBbkJBO0VBQW9CLGdDQUFBO0VBQWtDLHdCQUFBO0FBd0J0RDs7QUF0QkE7RUFBaUIsY0FBQTtFQUFnQixZQUFBO0FBMkJqQzs7QUExQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBOEJGOztBQTNCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBOEJGOztBQTVCQTtFQUFnQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQiw0QkFBQTtBQWtDcEQ7O0FBaENBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQW1DRjs7QUFqQ0E7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFvQ0Y7O0FBbENBO0VBQVMsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIsc0JBQUE7RUFBdUIsNEJBQUE7QUF5QzdFOztBQXhDQTtFQUFTLGVBQUE7RUFBaUIsZUFBQTtFQUFpQixzQkFBQTtBQThDM0M7O0FBNUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStDRjs7QUE3Q0E7RUFDRSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZ0RGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rYXJlZS1lcS13aWRnZXQge1xcbiAgLS1rZXEtYmc6ICNmNGY2Zjg7XFxuICAtLWtlcS1wYW5lbDogI2ZmZmZmZjtcXG4gIC0ta2VxLWJvcmRlcjogI2UyZTZlYTtcXG4gIC0ta2VxLXRleHQ6ICMxZjI5Mzc7XFxuICAtLWtlcS10ZXh0LW11dGVkOiAjNmI3MjgwO1xcbiAgLS1rZXEtYWNjZW50OiAjMGI1ZmE1O1xcbiAgLS1rZXEtYWNjZW50LWxpZ2h0OiAjZWFmM2ZiO1xcbiAgLS1rZXEtb3V0ZG9vcjogI2I0NTMwOTtcXG4gIC0ta2VxLW91dGRvb3ItYmc6ICNmZWYzYzc7XFxuICAtLWtlcS1pbmRvb3I6ICMxZDRlZDg7XFxuICAtLWtlcS1pbmRvb3ItYmc6ICNkYmVhZmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWtlcS1iZyk7XFxuICBjb2xvcjogdmFyKC0ta2VxLXRleHQpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5rYXJlZS1lcS13aWRnZXQgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ua2VxLWVtcHR5IHtcXG4gIHBhZGRpbmc6IDI0cHggMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1rZXEtdGV4dC1tdXRlZCk7XFxufVxcblxcbi5rZXEtdG9vbGJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5rZXEtc2VhcmNoIHtcXG4gIGZsZXg6IDEgMSAxNjBweDtcXG4gIHBhZGRpbmc6IDZweCA5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1rZXEtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLmtlcS1zZWxlY3Qge1xcbiAgcGFkZGluZzogNnB4IDlweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWtlcS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLmtlcS1tZXRhIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiB2YXIoLS1rZXEtdGV4dC1tdXRlZCk7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi5rZXEtbGlzdCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXEtcGFuZWwpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0ta2VxLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ua2VxLWl0ZW0geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0ta2VxLWJvcmRlcik7IH1cXG4ua2VxLWl0ZW06bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cXG5cXG4ua2VxLWl0ZW0tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ua2VxLWl0ZW0tcm93OmhvdmVyIHsgYmFja2dyb3VuZDogI2ZhZmJmYzsgfVxcblxcbi5rZXEtdGh1bWIge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG4ua2VxLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5rZXEtdGh1bWItZW1wdHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA5LjVweDtcXG4gIGNvbG9yOiB2YXIoLS1rZXEtdGV4dC1tdXRlZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5rZXEtYmFkZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAuMDNlbTtcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG4ua2VxLWJhZGdlLU91dGRvb3IgeyBiYWNrZ3JvdW5kOiB2YXIoLS1rZXEtb3V0ZG9vci1iZyk7IGNvbG9yOiB2YXIoLS1rZXEtb3V0ZG9vcik7IH1cXG4ua2VxLWJhZGdlLUluZG9vciB7IGJhY2tncm91bmQ6IHZhcigtLWtlcS1pbmRvb3ItYmcpOyBjb2xvcjogdmFyKC0ta2VxLWluZG9vcik7IH1cXG5cXG4ua2VxLWl0ZW0tbWFpbiB7IGZsZXg6IDEgMSBhdXRvOyBtaW4td2lkdGg6IDA7IH1cXG4ua2VxLWl0ZW0tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5rZXEtaXRlbS1zdWIge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgY29sb3I6IHZhcigtLWtlcS10ZXh0LW11dGVkKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5rZXEtaXRlbS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMi41cHg7XFxufVxcbi5rZXEtc3VibGFiZWwgeyBmb250LXdlaWdodDogNDAwOyBmb250LXNpemU6IDkuNXB4OyBjb2xvcjogdmFyKC0ta2VxLXRleHQtbXV0ZWQpOyB9XFxuXFxuLmtlcS1kZXRhaWxzIHtcXG4gIHBhZGRpbmc6IDRweCAxMnB4IDE0cHggODRweDtcXG4gIGJhY2tncm91bmQ6ICNmYmZjZmQ7XFxufVxcbi5rZXEtZGV0YWlscy1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XFxuICBnYXA6IDZweCAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4ua2VxLWsgeyBmb250LXNpemU6IDkuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjAzZW07IGNvbG9yOiB2YXIoLS1rZXEtdGV4dC1tdXRlZCk7IH1cXG4ua2VxLXYgeyBmb250LXNpemU6IDEycHg7IG1hcmdpbi10b3A6IDFweDsgd29yZC1icmVhazogYnJlYWstd29yZDsgfVxcblxcbi5rZXEtcmVsYXRlZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBmb250LXNpemU6IDExLjVweDtcXG4gIGNvbG9yOiB2YXIoLS1rZXEtYWNjZW50KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWtlcS1hY2NlbnQtbGlnaHQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmZGNmMztcXG4gIHBhZGRpbmc6IDRweCA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5rZXEtcmVsYXRlZC1tdXRlZCB7XFxuICBjb2xvcjogdmFyKC0ta2VxLXRleHQtbXV0ZWQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAycHggMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vd2lkZ2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3dpZGdldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIFJlYWN0LFxuICBqc3gsXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIE1lc3NhZ2VNYW5hZ2VyLFxuICBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UsXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBEYXRhUmVjb3JkXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgJy4vd2lkZ2V0LmNzcydcblxuLy8gRmllbGRzIHdlIG5ldmVyIHNob3cgaW4gdGhlIGV4cGFuZGVkIGRldGFpbCBwYW5lbCDigJQgc3lzdGVtL2hvdXNla2VlcGluZyBmaWVsZHMgdGhhdFxuLy8gYXJlbid0IHVzZWZ1bCB0byBhbiBlbmQgdXNlciBicm93c2luZyB0aGUgZXF1aXBtZW50IHJlZ2lzdGVyLlxuY29uc3QgU1lTVEVNX0ZJRUxEUyA9IG5ldyBTZXQoW1xuICAnT0JKRUNUSUQnLCAnR2xvYmFsSUQnLCAnR1VJRCcsXG4gICdTaGFwZV9fQXJlYScsICdTaGFwZV9fTGVuZ3RoJywgJ1NIQVBFX0FyZWEnLCAnU0hBUEVfTGVuZ3RoJyxcbiAgJ0NyZWF0aW9uRGF0ZScsICdDcmVhdG9yJywgJ0VkaXREYXRlJywgJ0VkaXRvcicsXG4gICdDcmVhdGlvbkRhdGVfMScsICdDcmVhdG9yXzEnLCAnRWRpdERhdGVfMScsICdFZGl0b3JfMSdcbl0pXG5cbi8vIEZpZWxkcyBzZWFyY2hlZCB3aGVuIHRoZSB1c2VyIHR5cGVzIGluIHRoZSBzZWFyY2ggYm94LlxuY29uc3QgU0VBUkNIX0ZJRUxEUyA9IFsnTmFtZScsICdJdGVtTm8nLCAnRGVzY3JpcHRpb24nLCAnRW5naW5lZXInLCAnUmVxdWVzdGVyX05hbWUnLCAnT3JpZ2luYWxfTWFudWZhY3R1cmVyJ11cblxudHlwZSBLaW5kID0gJ091dGRvb3InIHwgJ0luZG9vcidcblxuaW50ZXJmYWNlIE1lcmdlZEl0ZW0ge1xuICBpZDogc3RyaW5nXG4gIGtpbmQ6IEtpbmRcbiAgcmVjb3JkOiBEYXRhUmVjb3JkXG4gIGxpbmtLZXk6IHN0cmluZ1xuICBwYXJlbnRPdXRkb29yUmVjb3JkPzogRGF0YVJlY29yZFxuICBjaGlsZEluZG9vclJlY29yZHM/OiBEYXRhUmVjb3JkW11cbn1cblxuZnVuY3Rpb24gbm9ybUd1aWQgKGc6IHVua25vd24pOiBzdHJpbmcge1xuICByZXR1cm4gKGcgPT09IG51bGwgfHwgZyA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcoZykpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW3t9XS9nLCAnJykudHJpbSgpXG59XG5cbmZ1bmN0aW9uIHNhZmVGaWVsZFZhbHVlIChyZWM6IERhdGFSZWNvcmQsIGZpZWxkOiBzdHJpbmcpOiBhbnkge1xuICB0cnkge1xuICAgIHJldHVybiByZWMuZ2V0RmllbGRWYWx1ZShmaWVsZClcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5mdW5jdGlvbiBmbXRDdXJyZW5jeSAobjogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgdiA9IE51bWJlcihuKVxuICBpZiAobiA9PT0gbnVsbCB8fCBuID09PSB1bmRlZmluZWQgfHwgbiA9PT0gJycgfHwgaXNOYU4odikpIHJldHVybiAn4oCUJ1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVpBJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdaQVInLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KHYpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJ1IgJyArIE1hdGgucm91bmQodikudG9Mb2NhbGVTdHJpbmcoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGZtdFZhbHVlICh2OiBhbnkpOiBzdHJpbmcge1xuICBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gJycpIHJldHVybiAn4oCUJ1xuICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInICYmIHYgPiAxZTExKSB7XG4gICAgLy8gbG9va3MgbGlrZSBhbiBlcG9jaC1tcyBkYXRlIGZpZWxkXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHYpXG4gICAgaWYgKCFpc05hTihkLmdldFRpbWUoKSkpIHJldHVybiBkLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gIH1cbiAgcmV0dXJuIFN0cmluZyh2KVxufVxuXG4vLyBRdWVyeSB1c2VkIGFnYWluc3QgYm90aCBkYXRhIHNvdXJjZXMuIDIwMDAgY292ZXJzIHRoaXMgc2VydmljZSdzIGtub3duIHJlY29yZCBjb3VudHNcbi8vIChJbmRvb3IgRXF1aXBtZW50IGlzIH4yMzggcm93cyk7IHJhaXNlIHBhZ2VTaXplIGhlcmUgaWYgZWl0aGVyIHNoZWV0IGdyb3dzIHdlbGwgYmV5b25kIHRoYXQuXG5jb25zdCBRVUVSWSA9IHsgd2hlcmU6ICcxPTEnLCBvdXRGaWVsZHM6IFsnKiddLCBwYWdlU2l6ZTogMjAwMCB9XG5cbi8vIEZldGNoZXMgYXR0YWNobWVudCB0aHVtYm5haWxzIHRoZSBzYW1lIHdheSB0aGUgQXVjdGlvbiBTdGF0dXMgd2lkZ2V0IHByb3ZlZCBvdXRcbi8vIChiYXRjaGVkIHF1ZXJ5QXR0YWNobWVudHMgUkVTVCBjYWxscyksIGJ1dCBhZ2FpbnN0IHdoYXRldmVyIFVSTCB0aGUgYm91bmQgZGF0YVxuLy8gc291cmNlIGFjdHVhbGx5IGhhcyAtIG5vdCBhIGhhcmRjb2RlZCBzZXJ2aWNlIFVSTCAtIHNvIHRoaXMga2VlcHMgd29ya2luZyBpZiB0aGVcbi8vIHBvcnRhbCBpdGVtIGlzIGV2ZXIgcmVwdWJsaXNoZWQgYXQgYSBkaWZmZXJlbnQgVVJMLlxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdHRhY2htZW50TWFwIChzZXJ2aWNlVXJsOiBzdHJpbmcsIGlkczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPik6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICBpZiAoIXNlcnZpY2VVcmwgfHwgaWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG1hcFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkgKz0gNTApIHtcbiAgICBjb25zdCBiYXRjaCA9IGlkcy5zbGljZShpLCBpICsgNTApXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHtzZXJ2aWNlVXJsfS9xdWVyeUF0dGFjaG1lbnRzP29iamVjdElkcz0ke2JhdGNoLmpvaW4oJywnKX0mZj1qc29uYClcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKVxuICAgICAgY29uc3QgZ3JvdXBzID0gZGF0YS5hdHRhY2htZW50R3JvdXBzIHx8IFtdXG4gICAgICBncm91cHMuZm9yRWFjaCgoZzogYW55KSA9PiB7XG4gICAgICAgIGlmIChnLmF0dGFjaG1lbnRJbmZvcz8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGF0dElkID0gZy5hdHRhY2htZW50SW5mb3NbMF0uaWRcbiAgICAgICAgICBtYXBbU3RyaW5nKGcucGFyZW50T2JqZWN0SWQpXSA9IGAke3NlcnZpY2VVcmx9LyR7Zy5wYXJlbnRPYmplY3RJZH0vYXR0YWNobWVudHMvJHthdHRJZH1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gbm9uLWZhdGFsIC0gdGhhdCBiYXRjaCBqdXN0IHJlbmRlcnMgd2l0aG91dCB0aHVtYm5haWxzXG4gICAgfVxuICB9XG4gIHJldHVybiBtYXBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFtkc0EsIHNldERzQV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhU291cmNlPihudWxsKVxuICBjb25zdCBbZHNCLCBzZXREc0JdID0gUmVhY3QudXNlU3RhdGU8RGF0YVNvdXJjZT4obnVsbClcbiAgY29uc3QgW3JlY29yZHNBLCBzZXRSZWNvcmRzQV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhUmVjb3JkW10+KFtdKVxuICBjb25zdCBbcmVjb3Jkc0IsIHNldFJlY29yZHNCXSA9IFJlYWN0LnVzZVN0YXRlPERhdGFSZWNvcmRbXT4oW10pXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3R5cGVGaWx0ZXIsIHNldFR5cGVGaWx0ZXJdID0gUmVhY3QudXNlU3RhdGU8JycgfCBLaW5kPignJylcbiAgY29uc3QgW29wZW5JZCwgc2V0T3BlbklkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4obnVsbClcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KHt9KVxuXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gcHJvcHMudXNlRGF0YVNvdXJjZXNcbiAgY29uc3QgaGFzVHdvRGF0YVNvdXJjZXMgPSAhISh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPj0gMilcblxuICBjb25zdCBjb25maWcgPSBwcm9wcy5jb25maWdcbiAgY29uc3Qgb3V0ZG9vckxhYmVsID0gY29uZmlnPy5vdXRkb29yTGFiZWwgfHwgJ091dGRvb3IgRXF1aXBtZW50J1xuICBjb25zdCBpbmRvb3JMYWJlbCA9IGNvbmZpZz8uaW5kb29yTGFiZWwgfHwgJ0luZG9vciBFcXVpcG1lbnQnXG4gIGNvbnN0IG91dGRvb3JMaW5rRmllbGQgPSBjb25maWc/Lm91dGRvb3JMaW5rRmllbGQgfHwgJ0dsb2JhbElEJ1xuICBjb25zdCBpbmRvb3JMaW5rRmllbGQgPSBjb25maWc/LmluZG9vckxpbmtGaWVsZCB8fCAnR1VJRCdcblxuICBjb25zdCByZWZyZXNoQSA9IChkczogRGF0YVNvdXJjZSkgPT4geyBpZiAoZHMpIHNldFJlY29yZHNBKGRzLmdldFJlY29yZHMoKSkgfVxuICBjb25zdCByZWZyZXNoQiA9IChkczogRGF0YVNvdXJjZSkgPT4geyBpZiAoZHMpIHNldFJlY29yZHNCKGRzLmdldFJlY29yZHMoKSkgfVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZWRBID0gKGRzOiBEYXRhU291cmNlKSA9PiB7IHNldERzQShkcyk7IHJlZnJlc2hBKGRzKSB9XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZWRCID0gKGRzOiBEYXRhU291cmNlKSA9PiB7IHNldERzQihkcyk7IHJlZnJlc2hCKGRzKSB9XG5cbiAgLy8gV29yayBvdXQgd2hpY2ggb2YgdGhlIHR3byBjb25maWd1cmVkIGRhdGEgc291cmNlcyBpcyB0aGUgc3BhdGlhbCBvbmUgKE91dGRvb3IsXG4gIC8vIGhhcyBnZW9tZXRyeSkgdmVyc3VzIHRoZSBzdGFuZGFsb25lIHRhYmxlIChJbmRvb3IsIG5vIGdlb21ldHJ5KSDigJQgcmF0aGVyIHRoYW5cbiAgLy8gYXNzdW1pbmcgdGhlIHVzZXIgcGlja2VkIHRoZW0gaW4gYSBwYXJ0aWN1bGFyIG9yZGVyIGluIHNldHRpbmdzLlxuICBjb25zdCBhSXNTcGF0aWFsID0gISEoZHNBICYmIHR5cGVvZiAoZHNBIGFzIGFueSkuZ2V0R2VvbWV0cnlUeXBlID09PSAnZnVuY3Rpb24nICYmIChkc0EgYXMgYW55KS5nZXRHZW9tZXRyeVR5cGUoKSlcbiAgY29uc3QgYklzU3BhdGlhbCA9ICEhKGRzQiAmJiB0eXBlb2YgKGRzQiBhcyBhbnkpLmdldEdlb21ldHJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAoZHNCIGFzIGFueSkuZ2V0R2VvbWV0cnlUeXBlKCkpXG5cbiAgbGV0IG91dGRvb3JEczogRGF0YVNvdXJjZSA9IG51bGxcbiAgbGV0IGluZG9vckRzOiBEYXRhU291cmNlID0gbnVsbFxuICBsZXQgb3V0ZG9vclJlY29yZHM6IERhdGFSZWNvcmRbXSA9IFtdXG4gIGxldCBpbmRvb3JSZWNvcmRzOiBEYXRhUmVjb3JkW10gPSBbXVxuXG4gIGlmIChhSXNTcGF0aWFsICYmICFiSXNTcGF0aWFsKSB7XG4gICAgb3V0ZG9vckRzID0gZHNBOyBpbmRvb3JEcyA9IGRzQjsgb3V0ZG9vclJlY29yZHMgPSByZWNvcmRzQTsgaW5kb29yUmVjb3JkcyA9IHJlY29yZHNCXG4gIH0gZWxzZSBpZiAoYklzU3BhdGlhbCAmJiAhYUlzU3BhdGlhbCkge1xuICAgIG91dGRvb3JEcyA9IGRzQjsgaW5kb29yRHMgPSBkc0E7IG91dGRvb3JSZWNvcmRzID0gcmVjb3Jkc0I7IGluZG9vclJlY29yZHMgPSByZWNvcmRzQVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrIGlmIGdlb21ldHJ5IGRldGVjdGlvbiBpcyBpbmNvbmNsdXNpdmUgKGUuZy4gbmVpdGhlciBkYXRhIHNvdXJjZSBoYXNcbiAgICAvLyBsb2FkZWQgeWV0KTogYXNzdW1lIHRoZSBmaXJzdCBjb25maWd1cmVkIGRhdGEgc291cmNlIGlzIE91dGRvb3IuXG4gICAgb3V0ZG9vckRzID0gZHNBOyBpbmRvb3JEcyA9IGRzQjsgb3V0ZG9vclJlY29yZHMgPSByZWNvcmRzQTsgaW5kb29yUmVjb3JkcyA9IHJlY29yZHNCXG4gIH1cblxuICBjb25zdCBvdXRkb29yVXJsID0gKG91dGRvb3JEcyBhcyBhbnkpPy51cmwgYXMgc3RyaW5nXG4gIGNvbnN0IGluZG9vclVybCA9IChpbmRvb3JEcyBhcyBhbnkpPy51cmwgYXMgc3RyaW5nXG5cbiAgLy8gVGh1bWJuYWlscyBhcmUgdGhlIHdob2xlIHBvaW50IG9mIG1hdGNoaW5nIEF1Y3Rpb24gU3RhdHVzJ3MgbG9vayAtIGZldGNoIHRoZW1cbiAgLy8gZm9yIGJvdGggc2hlZXRzIHdoZW5ldmVyIHRoZSByZWNvcmQgc2V0IGFjdHVhbGx5IGNoYW5nZXMgKG5vdCBvbiBldmVyeSByZW5kZXIpLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IG91dGRvb3JJZHMgPSBvdXRkb29yUmVjb3Jkcy5tYXAociA9PiByLmdldElkKCkpXG4gICAgY29uc3QgaW5kb29ySWRzID0gaW5kb29yUmVjb3Jkcy5tYXAociA9PiByLmdldElkKCkpXG5cbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaEF0dGFjaG1lbnRNYXAob3V0ZG9vclVybCwgb3V0ZG9vcklkcyksXG4gICAgICBmZXRjaEF0dGFjaG1lbnRNYXAoaW5kb29yVXJsLCBpbmRvb3JJZHMpXG4gICAgXSkudGhlbigoW291dGRvb3JNYXAsIGluZG9vck1hcF0pID0+IHtcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVyblxuICAgICAgY29uc3QgbWVyZ2VkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgICAgIE9iamVjdC5rZXlzKG91dGRvb3JNYXApLmZvckVhY2goaWQgPT4geyBtZXJnZWRbJ08tJyArIGlkXSA9IG91dGRvb3JNYXBbaWRdIH0pXG4gICAgICBPYmplY3Qua2V5cyhpbmRvb3JNYXApLmZvckVhY2goaWQgPT4geyBtZXJnZWRbJ0ktJyArIGlkXSA9IGluZG9vck1hcFtpZF0gfSlcbiAgICAgIHNldEltYWdlcyhtZXJnZWQpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW291dGRvb3JVcmwsIGluZG9vclVybCwgb3V0ZG9vclJlY29yZHMubGVuZ3RoLCBpbmRvb3JSZWNvcmRzLmxlbmd0aF0pXG5cbiAgY29uc3QgaXRlbXM6IE1lcmdlZEl0ZW1bXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG91dGRvb3JCeUtleTogUmVjb3JkPHN0cmluZywgRGF0YVJlY29yZD4gPSB7fVxuICAgIG91dGRvb3JSZWNvcmRzLmZvckVhY2gociA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBub3JtR3VpZChzYWZlRmllbGRWYWx1ZShyLCBvdXRkb29yTGlua0ZpZWxkKSlcbiAgICAgIGlmIChrZXkpIG91dGRvb3JCeUtleVtrZXldID0gclxuICAgIH0pXG4gICAgY29uc3QgaW5kb29yQnlQYXJlbnQ6IFJlY29yZDxzdHJpbmcsIERhdGFSZWNvcmRbXT4gPSB7fVxuICAgIGluZG9vclJlY29yZHMuZm9yRWFjaChyID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKHNhZmVGaWVsZFZhbHVlKHIsIGluZG9vckxpbmtGaWVsZCkpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGlmICghaW5kb29yQnlQYXJlbnRba2V5XSkgaW5kb29yQnlQYXJlbnRba2V5XSA9IFtdXG4gICAgICAgIGluZG9vckJ5UGFyZW50W2tleV0ucHVzaChyKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBvdXRJdGVtczogTWVyZ2VkSXRlbVtdID0gb3V0ZG9vclJlY29yZHMubWFwKHIgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gbm9ybUd1aWQoc2FmZUZpZWxkVmFsdWUociwgb3V0ZG9vckxpbmtGaWVsZCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogJ08tJyArIHIuZ2V0SWQoKSxcbiAgICAgICAga2luZDogJ091dGRvb3InIGFzIEtpbmQsXG4gICAgICAgIHJlY29yZDogcixcbiAgICAgICAgbGlua0tleToga2V5LFxuICAgICAgICBjaGlsZEluZG9vclJlY29yZHM6IGluZG9vckJ5UGFyZW50W2tleV0gfHwgW11cbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGluSXRlbXM6IE1lcmdlZEl0ZW1bXSA9IGluZG9vclJlY29yZHMubWFwKHIgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gbm9ybUd1aWQoc2FmZUZpZWxkVmFsdWUociwgaW5kb29yTGlua0ZpZWxkKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiAnSS0nICsgci5nZXRJZCgpLFxuICAgICAgICBraW5kOiAnSW5kb29yJyBhcyBLaW5kLFxuICAgICAgICByZWNvcmQ6IHIsXG4gICAgICAgIGxpbmtLZXk6IGtleSxcbiAgICAgICAgcGFyZW50T3V0ZG9vclJlY29yZDogb3V0ZG9vckJ5S2V5W2tleV1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBbLi4ub3V0SXRlbXMsIC4uLmluSXRlbXNdXG4gIH0sIFtvdXRkb29yUmVjb3JkcywgaW5kb29yUmVjb3Jkcywgb3V0ZG9vckxpbmtGaWVsZCwgaW5kb29yTGlua0ZpZWxkXSlcblxuICBjb25zdCBmaWx0ZXJlZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHEgPSBzZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgIC5maWx0ZXIoaXQgPT4ge1xuICAgICAgICBpZiAodHlwZUZpbHRlciAmJiBpdC5raW5kICE9PSB0eXBlRmlsdGVyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHEpIHtcbiAgICAgICAgICBjb25zdCBoYXkgPSBTRUFSQ0hfRklFTERTLm1hcChmID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzYWZlRmllbGRWYWx1ZShpdC5yZWNvcmQsIGYpXG4gICAgICAgICAgICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyh2KS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSkuam9pbignIHwgJylcbiAgICAgICAgICBpZiAoaGF5LmluZGV4T2YocSkgPT09IC0xKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFuID0gU3RyaW5nKHNhZmVGaWVsZFZhbHVlKGEucmVjb3JkLCAnTmFtZScpIHx8ICcnKVxuICAgICAgICBjb25zdCBibiA9IFN0cmluZyhzYWZlRmllbGRWYWx1ZShiLnJlY29yZCwgJ05hbWUnKSB8fCAnJylcbiAgICAgICAgcmV0dXJuIGFuLmxvY2FsZUNvbXBhcmUoYm4pXG4gICAgICB9KVxuICB9LCBbaXRlbXMsIHNlYXJjaCwgdHlwZUZpbHRlcl0pXG5cbiAgLy8gVGhpcyBpcyB0aGUgcGllY2UgdGhhdCBnaXZlcyB0aGUgd2lkZ2V0IG5hdGl2ZSBtYXAgaW50ZXJhY3Rpdml0eTogcHVibGlzaGluZyBhXG4gIC8vIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSBpcyBleGFjdGx5IHdoYXQgdGhlIGJ1aWx0LWluIExpc3QvVGFibGUgd2lkZ2V0cyBkb1xuICAvLyBvbiByb3cgY2xpY2ssIHNvIGFueSBBY3Rpb24gY29uZmlndXJlZCBpbiB0aGUgYnVpbGRlciAoZS5nLiB0aGlzIHdpZGdldCdzIFwiUmVjb3JkXG4gIC8vIHNlbGVjdGlvbiBjaGFuZ2VzXCIgdHJpZ2dlciAtPiBhIE1hcCB3aWRnZXQncyBcIlpvb20gdG9cIiBhY3Rpb24pIGZpcmVzIHRoZSBzYW1lIHdheSBpdFxuICAvLyB3b3VsZCBmb3IgYSBuYXRpdmUgd2lkZ2V0IC0gbm8gYmVzcG9rZSBtYXAtd2lyaW5nIGNvZGUgbmVlZGVkIGhlcmUuXG4gIC8vXG4gIC8vIE5PVEU6IHRoZSBleGFjdCBjb25zdHJ1Y3RvciBzaGFwZSBvZiBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UgY2FuIHZhcnlcbiAgLy8gc2xpZ2h0bHkgYnkgRXhwZXJpZW5jZSBCdWlsZGVyIFNESyB2ZXJzaW9uLiBJZiBUeXBlU2NyaXB0IG9yIHRoZSBydW50aW1lIGNvbXBsYWluc1xuICAvLyBoZXJlLCBjaGVjayBgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlYCBpbiB5b3VyIGluc3RhbGxlZFxuICAvLyBgamltdS1jb3JlYCB0eXBlIGRlZmluaXRpb25zIGFuZCBhZGp1c3QgdGhlIGFyZ3VtZW50IG9iamVjdCBiZWxvdyB0byBtYXRjaCAtXG4gIC8vIHNlZSB0aGlzIHByb2plY3QncyBSRUFETUUgZm9yIGRldGFpbHMuXG4gIGNvbnN0IHB1Ymxpc2hTZWxlY3Rpb24gPSAoZHM6IERhdGFTb3VyY2UsIHJlY29yZDogRGF0YVJlY29yZCkgPT4ge1xuICAgIGlmICghZHMgfHwgIXJlY29yZCkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UoXG4gICAgICAgIG5ldyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2Uoe1xuICAgICAgICAgIHdpZGdldElkOiBwcm9wcy5pZCxcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IGRzLmlkLFxuICAgICAgICAgIHJlY29yZHM6IFtyZWNvcmRdXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2thcmVlLWVxdWlwbWVudC1saXN0OiBmYWlsZWQgdG8gcHVibGlzaCBzZWxlY3Rpb24gbWVzc2FnZScsIGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKGl0OiBNZXJnZWRJdGVtKSA9PiB7XG4gICAgc2V0T3BlbklkKG9wZW5JZCA9PT0gaXQuaWQgPyBudWxsIDogaXQuaWQpXG5cbiAgICAvLyBPdXRkb29yIGl0ZW1zIHpvb20gdG8gdGhlbXNlbHZlcy4gSW5kb29yIGl0ZW1zIGhhdmUgbm8gZ2VvbWV0cnkgb2YgdGhlaXIgb3duXG4gICAgLy8gKEVxdWlwbWVudF9UYWJsZSBpcyBhIHN0YW5kYWxvbmUgdGFibGUpIHNvIHdlIHpvb20gdG8gdGhlaXIgcmVsYXRlZCBvdXRkb29yXG4gICAgLy8gcGFyZW50IGluc3RlYWQgLSB0aGlzIGlzIHdoYXQgbWFrZXMgaW5kb29yIHNlbGVjdGlvbnMgc3RpbGwgXCJkbyBzb21ldGhpbmdcIiBvblxuICAgIC8vIHRoZSBtYXAsIHdpdGhvdXQgbmVlZGluZyBhIGRhdGEtZW5naW5lZXJpbmcgam9pbi5cbiAgICBpZiAoaXQua2luZCA9PT0gJ091dGRvb3InKSB7XG4gICAgICBwdWJsaXNoU2VsZWN0aW9uKG91dGRvb3JEcywgaXQucmVjb3JkKVxuICAgIH0gZWxzZSBpZiAoaXQucGFyZW50T3V0ZG9vclJlY29yZCkge1xuICAgICAgcHVibGlzaFNlbGVjdGlvbihvdXRkb29yRHMsIGl0LnBhcmVudE91dGRvb3JSZWNvcmQpXG4gICAgfVxuXG4gICAgLy8gQWxzbyBzZWxlY3QgdGhlIHJlY29yZCBvbiBpdHMgb3duIGRhdGEgc291cmNlLCBzbyBhbnkgb3RoZXIgd2lkZ2V0IGJvdW5kIHRvXG4gICAgLy8gdGhhdCBzYW1lIGRhdGEgc291cmNlIChlLmcuIGEgRmlsdGVyIG9yIGEgc2Vjb25kIFRhYmxlKSByZWZsZWN0cyB0aGUgc2VsZWN0aW9uLlxuICAgIGNvbnN0IG93bkRzID0gaXQua2luZCA9PT0gJ091dGRvb3InID8gb3V0ZG9vckRzIDogaW5kb29yRHNcbiAgICBpZiAob3duRHMgJiYgdHlwZW9mIChvd25EcyBhcyBhbnkpLnNlbGVjdFJlY29yZHNCeUlkcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHsgKG93bkRzIGFzIGFueSkuc2VsZWN0UmVjb3Jkc0J5SWRzKFtpdC5yZWNvcmQuZ2V0SWQoKV0pIH0gY2F0Y2ggKGUpIHsgLyogbm9uLWZhdGFsICovIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWhhc1R3b0RhdGFTb3VyY2VzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2FyZWUtZXEtd2lkZ2V0IGppbXUtd2lkZ2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWVtcHR5XCI+XG4gICAgICAgICAgT3BlbiB0aGlzIHdpZGdldCdzIHNldHRpbmdzIGFuZCBzZWxlY3QgdHdvIGRhdGEgc291cmNlcyB1bmRlciBcIkRhdGFcIjogeW91ciBPdXRkb29yXG4gICAgICAgICAgRXF1aXBtZW50IGZlYXR1cmUgbGF5ZXIgYW5kIHlvdXIgSW5kb29yIEVxdWlwbWVudCB0YWJsZS4gT3JkZXIgZG9lc24ndCBtYXR0ZXIg4oCUIHRoZVxuICAgICAgICAgIHdpZGdldCB3b3JrcyBvdXQgd2hpY2ggb25lIGhhcyBnZW9tZXRyeSBhdXRvbWF0aWNhbGx5LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrYXJlZS1lcS13aWRnZXQgamltdS13aWRnZXRcIj5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2VzWzBdfVxuICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgIHF1ZXJ5PXtRVUVSWX1cbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlQ3JlYXRlZEF9XG4gICAgICAgIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9eygpID0+IHJlZnJlc2hBKGRzQSl9XG4gICAgICAvPlxuICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZXNbMV19XG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgcXVlcnk9e1FVRVJZfVxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVDcmVhdGVkQn1cbiAgICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17KCkgPT4gcmVmcmVzaEIoZHNCKX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLXRvb2xiYXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwia2VxLXNlYXJjaFwiXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSwgaXRlbSBuby4sIGRlc2NyaXB0aW9uLi4uXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJrZXEtc2VsZWN0XCJcbiAgICAgICAgICB2YWx1ZT17dHlwZUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUeXBlRmlsdGVyKGUudGFyZ2V0LnZhbHVlIGFzICcnIHwgS2luZCl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsIHR5cGVzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk91dGRvb3JcIj57b3V0ZG9vckxhYmVsfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbmRvb3JcIj57aW5kb29yTGFiZWx9PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLW1ldGFcIj57ZmlsdGVyZWQubGVuZ3RofSBvZiB7aXRlbXMubGVuZ3RofSBpdGVtKHMpPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWxpc3RcIj5cbiAgICAgICAge2ZpbHRlcmVkLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXEtZW1wdHlcIj5ObyBlcXVpcG1lbnQgbWF0Y2hlcyB0aGUgY3VycmVudCBmaWx0ZXJzLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZmlsdGVyZWQubWFwKGl0ID0+IHtcbiAgICAgICAgICBjb25zdCByZWMgPSBpdC5yZWNvcmRcbiAgICAgICAgICBjb25zdCBuYW1lID0gc2FmZUZpZWxkVmFsdWUocmVjLCAnTmFtZScpIHx8ICcoVW5uYW1lZCBpdGVtKSdcbiAgICAgICAgICBjb25zdCBpdGVtTm8gPSBzYWZlRmllbGRWYWx1ZShyZWMsICdJdGVtTm8nKVxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHNhZmVGaWVsZFZhbHVlKHJlYywgJ0F1Y3Rpb25fU3RhdHVzJylcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNhZmVGaWVsZFZhbHVlKHJlYywgJ0N1cnJlbnRfVmFsdWUnKVxuICAgICAgICAgIGNvbnN0IG9wZW4gPSBvcGVuSWQgPT09IGl0LmlkXG4gICAgICAgICAgY29uc3QgZGF0YSA9ICh0eXBlb2YgKHJlYyBhcyBhbnkpLmdldERhdGEgPT09ICdmdW5jdGlvbicpID8gKHJlYyBhcyBhbnkpLmdldERhdGEoKSA6IHt9XG5cbiAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IGltYWdlc1tpdC5pZF1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXQuaWR9IGNsYXNzTmFtZT17J2tlcS1pdGVtJyArIChvcGVuID8gJyBrZXEtb3BlbicgOiAnJyl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlcS1pdGVtLXJvd1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpdCl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLXRodW1iXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VVcmxcbiAgICAgICAgICAgICAgICAgICAgPyA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD17U3RyaW5nKG5hbWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwia2VxLXRodW1iLWVtcHR5XCI+Tm8gaW1hZ2U8L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXEtaXRlbS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2tlcS1iYWRnZSBrZXEtYmFkZ2UtJyArIGl0LmtpbmR9PlxuICAgICAgICAgICAgICAgICAgICB7aXQua2luZCA9PT0gJ091dGRvb3InID8gb3V0ZG9vckxhYmVsIDogaW5kb29yTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWl0ZW0tdGl0bGVcIj57bmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWl0ZW0tc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtTm8gPyAnSXRlbSAnICsgaXRlbU5vIDogJyd9e3N0YXR1cyA/IChpdGVtTm8gPyAnIMK3ICcgOiAnJykgKyBzdGF0dXMgOiAnJ31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXEtaXRlbS12YWx1ZVwiPntmbXRDdXJyZW5jeSh2YWx1ZSl9IDxzcGFuIGNsYXNzTmFtZT1cImtlcS1zdWJsYWJlbFwiPmVzdC4gYXVjdGlvbiB2YWx1ZTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWRldGFpbHMtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGYgPT4gIVNZU1RFTV9GSUVMRFMuaGFzKGYpKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlcS1rdlwiIGtleT17Zn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VxLWtcIj57Zn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXEtdlwiPntmbXRWYWx1ZShkYXRhW2ZdKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7aXQua2luZCA9PT0gJ0luZG9vcicgJiYgKFxuICAgICAgICAgICAgICAgICAgICBpdC5wYXJlbnRPdXRkb29yUmVjb3JkXG4gICAgICAgICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtlcS1yZWxhdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgc2V0T3BlbklkKCdPLScgKyBpdC5wYXJlbnRPdXRkb29yUmVjb3JkLmdldElkKCkpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOKGsyBSZWxhdGVkIG91dGRvb3IgaXRlbToge3NhZmVGaWVsZFZhbHVlKGl0LnBhcmVudE91dGRvb3JSZWNvcmQsICdOYW1lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwia2VxLXJlbGF0ZWQga2VxLXJlbGF0ZWQtbXV0ZWRcIj5ObyByZWxhdGVkIG91dGRvb3IgaXRlbSBmb3VuZCBmb3IgdGhpcyBpbmRvb3IgcmVjb3JkLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtpdC5raW5kID09PSAnT3V0ZG9vcicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAoaXQuY2hpbGRJbmRvb3JSZWNvcmRzICYmIGl0LmNoaWxkSW5kb29yUmVjb3Jkcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXEtcmVsYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDihrMge2l0LmNoaWxkSW5kb29yUmVjb3Jkcy5sZW5ndGh9IHJlbGF0ZWQgaW5kb29yIGl0ZW0ocylcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJrZXEtcmVsYXRlZCBrZXEtcmVsYXRlZC1tdXRlZFwiPk5vIHJlbGF0ZWQgaW5kb29yIGVxdWlwbWVudCBsaW5rZWQgdG8gdGhpcyBvdXRkb29yIGl0ZW0uPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9