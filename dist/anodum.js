(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["anodum"] = factory();
	else
		root["anodum"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ELEMENT_NODE: 1,
  ATTRIBUTE_NODE: 2,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  ENTITY_REFERENCE_NODE: 5,
  ENTITY_NODE: 6,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11,
  NOTATION_NODE: 12
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.ELEMENT_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, testTags) {
  if (!(testTags instanceof Array)) {
    throw new TypeError('testTags is not an Array');
  }

  return testTags.findIndex(function (tag) {
    return (0, _isTag2.default)(element, tag);
  }) > -1;
};

var _isTag = __webpack_require__(4);

var _isTag2 = _interopRequireDefault(_isTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && !!node.nodeType;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, testTag) {
  if (!(0, _isElementNode2.default)(element)) {
    throw new TypeError('element is not a type of Element');
  }

  if (typeof testTag !== 'string') {
    throw new TypeError('testTag is not a String');
  }

  return testTag.toLowerCase() === element.tagName.toLowerCase();
};

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.TEXT_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.COMMENT_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new XMLSerializer();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.DOCUMENT_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (html) {
  if (typeof html !== 'string') {
    throw new TypeError('html is not a string');
  }
  return html.trim().replace(/[\r\uFEFF\u2060]/g, '').replace(/[\n\t\u202F\u2007]/g, ' ');
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new window.DOMParser();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  if (!(0, _isNode2.default)(node)) {
    throw new TypeError('node is not a Node');
  }

  var path = [];
  var elem = node;
  var index = void 0;

  while (elem.parentNode) {
    index = Array.prototype.indexOf.call(elem.parentNode.childNodes, elem);
    path.unshift(index);
    elem = elem.parentNode;
  }

  // Add root node path
  path.unshift(0);

  return path;
};

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  if (!(0, _isTextNode2.default)(node)) {
    return false;
  }

  return node.nodeValue.trim().length > 0;
};

var _isTextNode = __webpack_require__(5);

var _isTextNode2 = _interopRequireDefault(_isTextNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  if (!(0, _isCommentNode2.default)(node)) {
    return false;
  }

  var comment = _xmlSerializer2.default.serializeToString(node);
  return (/\[\s*(?:end)?if\s*[^\]]*\]/.test(comment)
  );
};

var _isCommentNode = __webpack_require__(6);

var _isCommentNode2 = _interopRequireDefault(_isCommentNode);

var _xmlSerializer = __webpack_require__(7);

var _xmlSerializer2 = _interopRequireDefault(_xmlSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.DOCUMENT_TYPE_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  return (0, _isOneOfTags2.default)(element, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
};

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  if ((0, _isOneOfTags2.default)(element, ['audio', 'video'])) {
    return element.hasAttribute('controls');
  }

  if ((0, _isOneOfTags2.default)(element, ['img', 'object'])) {
    return element.hasAttribute('usemap');
  }

  if ((0, _isTag2.default)(element, 'input')) {
    return element.getAttribute('type') !== 'hidden';
  }

  return (0, _isOneOfTags2.default)(element, ['a', 'button', 'embed', 'iframe', 'keygen', 'label', 'select', 'textarea']);
};

var _isTag = __webpack_require__(4);

var _isTag2 = _interopRequireDefault(_isTag);

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  return (0, _isOneOfTags2.default)(element, ['a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'script', 'select', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var', 'video']);
};

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  return (0, _isOneOfTags2.default)(element, ['article', 'aside', 'nav', 'section']);
};

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, onStep) {
  var includePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!(0, _isNode2.default)(node)) {
    throw new TypeError('node is not a Node');
  }

  if (typeof onStep !== 'function') {
    throw new TypeError('onStep is not a Function');
  }

  var rootNode = node;

  var index = 0;
  var path = [];
  var currentNode = node;

  // Create path holder if includePath = true was passed
  if (includePath) path = (0, _getTreePathOfNode2.default)(rootNode);

  while (currentNode) {
    if (currentNode.childNodes && currentNode.childNodes.length > 0) {
      currentNode = currentNode.firstChild;
      index = 0;

      if (includePath) path.push(index);
    } else if (currentNode.nextSibling) {
      currentNode = currentNode.nextSibling;

      if (includePath) path.push(path.pop() + 1);
    } else {
      if (currentNode === rootNode) {
        onStep(currentNode, path && path.slice(0));
        return;
      }

      do {
        if (currentNode.parentNode) {
          currentNode = currentNode.parentNode;
          if (includePath) path.pop();
          if (currentNode === rootNode) {
            onStep(currentNode, path && path.slice(0));
            return;
          }
        } else {
          onStep(currentNode, path && path.slice(0));
          return;
        }
      } while (!currentNode.nextSibling);
      currentNode = currentNode.nextSibling;

      if (includePath) path.push(path.pop() + 1);
    }

    if (onStep(currentNode, path && path.slice(0))) return;
  }
};

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

var _getTreePathOfNode = __webpack_require__(11);

var _getTreePathOfNode2 = _interopRequireDefault(_getTreePathOfNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _copyElementAttributes = __webpack_require__(21);

var _copyElementAttributes2 = _interopRequireDefault(_copyElementAttributes);

var _domParser = __webpack_require__(10);

var _domParser2 = _interopRequireDefault(_domParser);

var _getElementHeight = __webpack_require__(22);

var _getElementHeight2 = _interopRequireDefault(_getElementHeight);

var _getNodeByTreePath = __webpack_require__(23);

var _getNodeByTreePath2 = _interopRequireDefault(_getNodeByTreePath);

var _getTreePathOfNode = __webpack_require__(11);

var _getTreePathOfNode2 = _interopRequireDefault(_getTreePathOfNode);

var _hasNonEmptyPseudoElements = __webpack_require__(24);

var _hasNonEmptyPseudoElements2 = _interopRequireDefault(_hasNonEmptyPseudoElements);

var _hasNonEmptyShallowTextNodes = __webpack_require__(25);

var _hasNonEmptyShallowTextNodes2 = _interopRequireDefault(_hasNonEmptyShallowTextNodes);

var _isAttributeNode = __webpack_require__(26);

var _isAttributeNode2 = _interopRequireDefault(_isAttributeNode);

var _isChildOfElement = __webpack_require__(27);

var _isChildOfElement2 = _interopRequireDefault(_isChildOfElement);

var _isChildOfTag = __webpack_require__(28);

var _isChildOfTag2 = _interopRequireDefault(_isChildOfTag);

var _isCommentNode = __webpack_require__(6);

var _isCommentNode2 = _interopRequireDefault(_isCommentNode);

var _isConditionalCommentNode = __webpack_require__(13);

var _isConditionalCommentNode2 = _interopRequireDefault(_isConditionalCommentNode);

var _isDocumentFragmentNode = __webpack_require__(29);

var _isDocumentFragmentNode2 = _interopRequireDefault(_isDocumentFragmentNode);

var _isDocumentNode = __webpack_require__(8);

var _isDocumentNode2 = _interopRequireDefault(_isDocumentNode);

var _isDocumentTypeNode = __webpack_require__(14);

var _isDocumentTypeNode2 = _interopRequireDefault(_isDocumentTypeNode);

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

var _isEmbedElement = __webpack_require__(30);

var _isEmbedElement2 = _interopRequireDefault(_isEmbedElement);

var _isHeadingElement = __webpack_require__(15);

var _isHeadingElement2 = _interopRequireDefault(_isHeadingElement);

var _isInteractiveElement = __webpack_require__(16);

var _isInteractiveElement2 = _interopRequireDefault(_isInteractiveElement);

var _isNestingAllowed = __webpack_require__(31);

var _isNestingAllowed2 = _interopRequireDefault(_isNestingAllowed);

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

var _isNonEmptyTextNode = __webpack_require__(12);

var _isNonEmptyTextNode2 = _interopRequireDefault(_isNonEmptyTextNode);

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

var _isPhrasingElement = __webpack_require__(17);

var _isPhrasingElement2 = _interopRequireDefault(_isPhrasingElement);

var _isProcessingInstructionNode = __webpack_require__(32);

var _isProcessingInstructionNode2 = _interopRequireDefault(_isProcessingInstructionNode);

var _isSectioningElement = __webpack_require__(18);

var _isSectioningElement2 = _interopRequireDefault(_isSectioningElement);

var _isSelfClosingElement = __webpack_require__(33);

var _isSelfClosingElement2 = _interopRequireDefault(_isSelfClosingElement);

var _isTag = __webpack_require__(4);

var _isTag2 = _interopRequireDefault(_isTag);

var _isTextNode = __webpack_require__(5);

var _isTextNode2 = _interopRequireDefault(_isTextNode);

var _isValidSelector = __webpack_require__(34);

var _isValidSelector2 = _interopRequireDefault(_isValidSelector);

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

var _normalizeHtml = __webpack_require__(9);

var _normalizeHtml2 = _interopRequireDefault(_normalizeHtml);

var _parseDocumentFromString = __webpack_require__(35);

var _parseDocumentFromString2 = _interopRequireDefault(_parseDocumentFromString);

var _parseElementFromString = __webpack_require__(36);

var _parseElementFromString2 = _interopRequireDefault(_parseElementFromString);

var _removeSetOfNodes = __webpack_require__(37);

var _removeSetOfNodes2 = _interopRequireDefault(_removeSetOfNodes);

var _serializeDocument = __webpack_require__(38);

var _serializeDocument2 = _interopRequireDefault(_serializeDocument);

var _serializeDocumentType = __webpack_require__(39);

var _serializeDocumentType2 = _interopRequireDefault(_serializeDocumentType);

var _traverseNode = __webpack_require__(19);

var _traverseNode2 = _interopRequireDefault(_traverseNode);

var _xmlSerializer = __webpack_require__(7);

var _xmlSerializer2 = _interopRequireDefault(_xmlSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  copyElementAttributes: _copyElementAttributes2.default,
  domParser: _domParser2.default,
  getElementHeight: _getElementHeight2.default,
  getNodeByTreePath: _getNodeByTreePath2.default,
  getTreePathOfNode: _getTreePathOfNode2.default,
  hasNonEmptyPseudoElements: _hasNonEmptyPseudoElements2.default,
  hasNonEmptyShallowTextNodes: _hasNonEmptyShallowTextNodes2.default,
  isAttributeNode: _isAttributeNode2.default,
  isChildOfElement: _isChildOfElement2.default,
  isChildOfTag: _isChildOfTag2.default,
  isCommentNode: _isCommentNode2.default,
  isConditionalCommentNode: _isConditionalCommentNode2.default,
  isDocumentFragmentNode: _isDocumentFragmentNode2.default,
  isDocumentNode: _isDocumentNode2.default,
  isDocumentTypeNode: _isDocumentTypeNode2.default,
  isElementNode: _isElementNode2.default,
  isEmbedElement: _isEmbedElement2.default,
  isHeadingElement: _isHeadingElement2.default,
  isInteractiveElement: _isInteractiveElement2.default,
  isNestingAllowed: _isNestingAllowed2.default,
  isNode: _isNode2.default,
  isNonEmptyTextNode: _isNonEmptyTextNode2.default,
  isOneOfTags: _isOneOfTags2.default,
  isPhrasingElement: _isPhrasingElement2.default,
  isProcessingInstructionNode: _isProcessingInstructionNode2.default,
  isSectioningElement: _isSectioningElement2.default,
  isSelfClosingElement: _isSelfClosingElement2.default,
  isTag: _isTag2.default,
  isTextNode: _isTextNode2.default,
  isValidSelector: _isValidSelector2.default,
  nodeTypes: _nodeTypes2.default,
  normalizeHTML: _normalizeHtml2.default,
  parseDocumentFromString: _parseDocumentFromString2.default,
  parseElementFromString: _parseElementFromString2.default,
  removeSetOfNodes: _removeSetOfNodes2.default,
  serializeDocument: _serializeDocument2.default,
  serializeDocumentType: _serializeDocumentType2.default,
  traverseNode: _traverseNode2.default,
  xmlSerializer: _xmlSerializer2.default
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, targetElement) {
  if (!(0, _isElementNode2.default)(element)) {
    throw new TypeError('element is not an ElementNode');
  }

  if (!(0, _isElementNode2.default)(targetElement)) {
    throw new TypeError('targetElement is not an ElementNode');
  }

  var attribute = void 0;
  for (var i = 0; i < element.attributes.length; i += 1) {
    attribute = element.attributes[i];
    targetElement.setAttribute(attribute.name, attribute.value);
  }
};

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, includeMargins) {
  if (!(0, _isElementNode2.default)(element)) {
    throw new TypeError('element is not an ElementNode');
  }

  var height = element.offsetHeight;

  if (includeMargins) {
    var style = element.ownerDocument.defaultView.getComputedStyle(element, null);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  }

  return height;
};

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (rootNode, path) {
  if (!(0, _isNode2.default)(rootNode)) {
    throw new TypeError('rootNode is not a Node');
  }

  if (!Array.isArray(path)) {
    throw new TypeError('path is not an Array');
  }

  var pathClone = path.slice(0);
  var node = rootNode;

  pathClone.splice(0, 1);

  while (pathClone.length > 0) {
    if (!(node && node.childNodes)) {
      return null;
    }

    var _pathClone$splice = pathClone.splice(0, 1),
        _pathClone$splice2 = _slicedToArray(_pathClone$splice, 1),
        c = _pathClone$splice2[0];

    node = node.childNodes[c];
  }

  return node;
};

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  if (!(0, _isElementNode2.default)(element)) {
    throw new TypeError('element is not a ElementNode');
  }

  var window = element.ownerDocument.defaultView;
  if (!window) return false; // document has no render tree

  var cssBefore = window.getComputedStyle(element, ':before').getPropertyValue('content');
  var cssAfter = window.getComputedStyle(element, ':after').getPropertyValue('content');

  return cssBefore.length > 0 || cssAfter.length > 0;
};

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  if (!(0, _isElementNode2.default)(element)) {
    throw new TypeError('element is not an Element');
  }

  if (!element.hasChildNodes()) {
    return false;
  }

  for (var i = 0; i < element.childNodes.length; i += 1) {
    if ((0, _isNonEmptyTextNode2.default)(element.childNodes[i])) {
      return true;
    }
  }

  return false;
};

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

var _isNonEmptyTextNode = __webpack_require__(12);

var _isNonEmptyTextNode2 = _interopRequireDefault(_isNonEmptyTextNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.ATTRIBUTE_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, testElement) {
  if (!(0, _isNode2.default)(node)) {
    throw new TypeError('node is not a Node');
  }

  if (!(0, _isElementNode2.default)(testElement)) {
    throw new TypeError('testElement is not an Element');
  }

  var currentNode = node.parentElement;

  while (currentNode) {
    if (currentNode === testElement) {
      return true;
    }
    currentNode = currentNode.parentElement;
  }

  return false;
};

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, testTag) {
  if (!(0, _isNode2.default)(node)) {
    throw new TypeError('node is not a Node');
  }

  if (typeof testTag !== 'string') {
    throw new TypeError('testTag is not a string');
  }

  var tag = testTag.toLowerCase();

  var currentNode = node.parentNode;
  while (currentNode && currentNode.tagName) {
    if (currentNode.tagName.toLowerCase() === tag) {
      return true;
    }
    currentNode = currentNode.parentNode;
  }

  return false;
};

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.DOCUMENT_FRAGMENT_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  return (0, _isOneOfTags2.default)(element, ['audio', 'canvas', 'embed', 'iframe', 'img', 'math', 'object', 'svg', 'video']);
};

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, containerElement) {
  if (!(0, _isElementNode2.default)(element)) {
    throw new TypeError('element is not a type of Element');
  }

  if (!(0, _isElementNode2.default)(containerElement)) {
    throw new TypeError('containerElement is not a type of Element');
  }

  switch (containerElement.tagName.toLowerCase()) {
    case 'p':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'pre':
    case 'em':
    case 'strong':
    case 'small':
    case 's':
    case 'cite':
    case 'q':
    case 'abbr':
    case 'data':
    case 'time':
    case 'code':
    case 'var':
    case 'samp':
    case 'kbd':
    case 'sub':
    case 'sup':
    case 'i':
    case 'b':
    case 'u':
    case 'mark':
    case 'bdi':
    case 'bdo':
    case 'span':
    case 'output':
    case 'legend':
      return (0, _isPhrasingElement2.default)(element);

    case 'dfn':
      return (0, _isPhrasingElement2.default)(element) && !(0, _isTag2.default)(element, 'dfn');

    case 'object':
      return (0, _isTag2.default)(element, 'param');

    case 'audio':
    case 'video':
      if (containerElement.hasAttribute('src')) {
        return (0, _isTag2.default)(element, 'track');
      }
      return (0, _isOneOfTags2.default)(element, ['source', 'track']);

    case 'html':
      return (0, _isOneOfTags2.default)(element, ['head', 'body']);

    case 'nav':
    case 'aside':
      return !(0, _isTag2.default)(element, 'main');

    case 'ol':
    case 'ul':
      return (0, _isTag2.default)(element, 'li');

    case 'dt':
      return !(0, _isOneOfTags2.default)(element, ['header', 'footer']) && !(0, _isSectioningElement2.default)(element) && !(0, _isHeadingElement2.default)(element);

    case 'dl':
      return (0, _isOneOfTags2.default)(element, ['dt', 'dd']);

    case 'header':
    case 'footer':
      return !(0, _isOneOfTags2.default)(element, ['main', 'header', 'footer']);

    case 'address':
      return !(0, _isOneOfTags2.default)(element, ['address', 'header', 'footer']) && !(0, _isHeadingElement2.default)(element) && !(0, _isSectioningElement2.default)(element);

    case 'hr':
    case 'img':
    case 'iframe':
    case 'embed':
    case 'param':
    case 'source':
    case 'track':
    case 'area':
    case 'title':
    case 'base':
    case 'link':
    case 'meta':
    case 'style':
    case 'wbr':
    case 'br':
    case 'col':
    case 'script':
    case 'template':
    case 'canvas':
    case 'input':
    case 'textarea':
    case 'keygen':
      return false;

    case 'form':
      return !(0, _isTag2.default)(element, 'form');

    case 'label':
      return (0, _isPhrasingElement2.default)(element) && !(0, _isTag2.default)(element, 'label');

    case 'datalist':
      return (0, _isPhrasingElement2.default)(element) || (0, _isTag2.default)(element, 'option');

    case 'progress':
      return (0, _isPhrasingElement2.default)(element) && !(0, _isTag2.default)(element, 'progress');

    case 'meter':
      return (0, _isPhrasingElement2.default)(element) && !(0, _isTag2.default)(element, 'meter');

    case 'select':
      return (0, _isOneOfTags2.default)(element, ['option', 'optgroup', 'script', 'template']);

    case 'optgroup':
      return (0, _isTag2.default)(element, 'option');

    case 'button':
      return (0, _isPhrasingElement2.default)(element) && !(0, _isInteractiveElement2.default)(element);

    case 'a':
      return !(0, _isInteractiveElement2.default)(element);

    case 'tbody':
    case 'thead':
    case 'tfoot':
      return (0, _isOneOfTags2.default)(element, ['tr', 'script', 'template']);

    case 'caption':
      return !(0, _isTag2.default)(element, 'table');

    case 'tr':
      return (0, _isOneOfTags2.default)(element, ['td', 'th', 'script', 'template']);

    case 'th':
      return !(0, _isOneOfTags2.default)(element, ['header', 'footer']) && !(0, _isSectioningElement2.default)(element) && !(0, _isHeadingElement2.default)(element);

    case 'table':
      return (0, _isOneOfTags2.default)(element, ['caption', 'colgroup', 'thead', 'tfoot', 'tbody', 'tr', 'script', 'template']);
    default:
      return true;
  }
};

var _isElementNode = __webpack_require__(1);

var _isElementNode2 = _interopRequireDefault(_isElementNode);

var _isPhrasingElement = __webpack_require__(17);

var _isPhrasingElement2 = _interopRequireDefault(_isPhrasingElement);

var _isTag = __webpack_require__(4);

var _isTag2 = _interopRequireDefault(_isTag);

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

var _isSectioningElement = __webpack_require__(18);

var _isSectioningElement2 = _interopRequireDefault(_isSectioningElement);

var _isHeadingElement = __webpack_require__(15);

var _isHeadingElement2 = _interopRequireDefault(_isHeadingElement);

var _isInteractiveElement = __webpack_require__(16);

var _isInteractiveElement2 = _interopRequireDefault(_isInteractiveElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  return node && node.nodeType === _nodeTypes2.default.PROCESSING_INSTRUCTION_NODE;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  return (0, _isOneOfTags2.default)(element, ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
};

var _isOneOfTags = __webpack_require__(2);

var _isOneOfTags2 = _interopRequireDefault(_isOneOfTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  try {
    testDiv.querySelector(selector);
  } catch (e) {
    return false;
  }
  return true;
};

var testDiv = document.createElement('div');

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (html, removeComments) {
  var normalizedHTML = (0, _normalizeHtml2.default)(html);
  var dom = _domParser2.default.parseFromString(normalizedHTML, 'text/html');

  if (removeComments) {
    var comments = [];

    (0, _traverseNode2.default)(dom, function (node) {
      if ((0, _isCommentNode2.default)(node) && !(0, _isConditionalCommentNode2.default)(node)) {
        comments.push(node);
      }
    });

    comments.forEach(function (comment) {
      return comment.parentNode.removeChild(comment);
    });
  }

  return dom;
};

var _domParser = __webpack_require__(10);

var _domParser2 = _interopRequireDefault(_domParser);

var _traverseNode = __webpack_require__(19);

var _traverseNode2 = _interopRequireDefault(_traverseNode);

var _isConditionalCommentNode = __webpack_require__(13);

var _isConditionalCommentNode2 = _interopRequireDefault(_isConditionalCommentNode);

var _isCommentNode = __webpack_require__(6);

var _isCommentNode2 = _interopRequireDefault(_isCommentNode);

var _normalizeHtml = __webpack_require__(9);

var _normalizeHtml2 = _interopRequireDefault(_normalizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (html) {
  var normalizedHTML = (0, _normalizeHtml2.default)(html);
  var container = document.createElement('div');

  container.innerHTML = normalizedHTML;

  if (container.children.length !== 1) {
    throw new EvalError('html should contain a single root element');
  }

  return container.firstElementChild;
};

var _normalizeHtml = __webpack_require__(9);

var _normalizeHtml2 = _interopRequireDefault(_normalizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (nodes) {
  if (!(nodes instanceof Array)) {
    throw new TypeError('nodes is not an Array');
  }

  nodes.forEach(function (node) {
    if (!(0, _isNode2.default)(node)) {
      throw new TypeError('node is not a Node');
    }

    var parentNode = node.parentNode;

    if (!parentNode) return;

    var index = Array.prototype.indexOf.call(parentNode.childNodes, node);

    parentNode.removeChild(node);

    var child = parentNode.childNodes[index];

    // Merge all heading text nodes in order to prevent contenteditable issues
    while ((0, _isTextNode2.default)(child) && child.previousSibling && (0, _isTextNode2.default)(child.previousSibling)) {
      child.nodeValue = child.previousSibling.nodeValue + child.nodeValue;
      parentNode.removeChild(child.previousSibling);
    }

    // Merge all trailing text nodes in order to prevent contenteditable issues
    while ((0, _isTextNode2.default)(child) && child.nextSibling && (0, _isTextNode2.default)(child.nextSibling)) {
      child.nodeValue += child.nextSibling.nodeValue;
      parentNode.removeChild(child.nextSibling);
    }
  });
};

var _isNode = __webpack_require__(3);

var _isNode2 = _interopRequireDefault(_isNode);

var _isTextNode = __webpack_require__(5);

var _isTextNode2 = _interopRequireDefault(_isTextNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  if (!(0, _isDocumentNode2.default)(node)) {
    throw new TypeError('node is not a DocumentNode');
  }

  var elem = node.documentElement;
  var html = '';

  while (elem) {
    switch (elem.nodeType) {
      case _nodeTypes2.default.ELEMENT_NODE:
        html = elem.outerHTML + html;
        break;
      default:
        html = _xmlSerializer2.default.serializeToString(elem) + html;
        break;
    }

    elem = elem.previousSibling;
  }

  return html;
};

var _nodeTypes = __webpack_require__(0);

var _nodeTypes2 = _interopRequireDefault(_nodeTypes);

var _xmlSerializer = __webpack_require__(7);

var _xmlSerializer2 = _interopRequireDefault(_xmlSerializer);

var _isDocumentNode = __webpack_require__(8);

var _isDocumentNode2 = _interopRequireDefault(_isDocumentNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  if (!(0, _isDocumentNode2.default)(node) && !(0, _isDocumentTypeNode2.default)(node)) {
    throw new TypeError('node is not a Document or DocumentType');
  }

  var doctype = (0, _isDocumentNode2.default)(node) ? node.doctype : node;
  var publicId = doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : '';
  var systemTerm = !doctype.publicId && doctype.systemId ? ' SYSTEM' : '';
  var systemId = doctype.systemId ? ' "' + doctype.systemId + '"' : '';

  return '<!DOCTYPE ' + doctype.name + publicId + systemTerm + systemId + '>';
};

var _isDocumentNode = __webpack_require__(8);

var _isDocumentNode2 = _interopRequireDefault(_isDocumentNode);

var _isDocumentTypeNode = __webpack_require__(14);

var _isDocumentTypeNode2 = _interopRequireDefault(_isDocumentTypeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});