<p align="center">
  <img src="https://raw.githubusercontent.com/eugeneford/anodum/master/.github/anodum-logo.png" width="100" height="100">
</p>

<h3 align="center">
  Anodum
</h3>

<p align="center">
  Another Document utils library
</p>

<p align="center">
  <a href="https://travis-ci.org/eugeneford/anodum">
    <img src="https://travis-ci.org/eugeneford/anodum.svg?branch=master" alt="Build Status">
  </a>
  <a href='https://coveralls.io/github/eugeneford/anodum'>
    <img src='https://coveralls.io/repos/github/eugeneford/anodum/badge.svg?v=0' alt='Coverage Status' />
  </a>
  <a href='https://www.npmjs.com/package/anodum'>
    <img src='https://img.shields.io/npm/v/anodum.svg?v=0' alt='NPM Version' />
  </a>
</p>

## Overview

## How to Install
#### Using NPM
In order to use Anodum with NPM simply call:
```js
npm install --save anodum
```

#### In Browser
In order to use Anodum directly in browser simply download this repository and copy dist/anodum.js into your project.
Next, include it on your .html page:
```html
<script src="path/to/your/js/anodum.js"></script>
```

## Get Started
You are able to use Anodum as the importable npm package or directly in browser.

#### In Node.js
```js
import { isNode } from "anodum";

const result = isNode(document); // result => true
```

#### In Browser
```html
<script>
var result = Anodum.isNode(document); // result => true
</script>
```

## Constants
Anodum exports a small set of predefined constants eg.
* ``domParser``
* ``xmlSerializer``
* ``nodeTypes``

You are able to use them as well as any of API methods bellow.

## API

### copyElementAttributes(element, targetElement)
Copies all attributes of ``element`` into ``targetElement``. Existing ``targetElement`` attributes will be overwritten.

```js
import { copyElementAttributes } from "anodum"; // or anodum.copyElementAttributes if using in browser

const sourceNode = document.createElement('div');
const targetNode = document.createElement('div');

sourceNode.setAttribute('class', 'container');
sourceNode.setAttribute('id', 'my-div');

copyElementAttributes(sourceNode, targetNode);

// tragetNode.getAttribute('id') => 'my-div'
// tragetNode.getAttribute('class') => 'container'
```


### getElementHeight(element, includeMargins)
Calculates ``element`` height. If ``includeMargins`` is set to true the final value will include top and bottom margins

```js
import { getElementHeight } from "anodum"; // or anodum.getElementHeight if using in browser

const element = document.createElement('div');

document.body.appendChild(element);
element.style.height = '40px';
element.style.marginTop = '20px';
element.style.marginBottom = '20px';

const height = getElementHeight(element); // height => 80px
```


### getNodeByTreePath(rootNode, path)
Looks for an element inside ``rootNode`` by related tree path ``path``.

```js
import { getNodeByTreePath } from "anodum"; // or anodum.getNodeByTreePath if using in browser

const path = [0, 1, 1, 0];
const rootNode = document.createElement('div');
rootNode.innerHTML = 'text<div><h1></h1><p>target</p></div>';

const node = getNodeByTreePath(rootNode, path);

// node.nodeType => 3 (#text)
// node.textContent => target
```


### getTreePathOfNode(node)
Calculates a tree path of target ``node``.

```js
import { getTreePathOfNode } from "anodum"; // or anodum.getTreePathOfNode if using in browser

const element = document.createElement('div');
element.innerHTML = 'text<p>inner text</p>';

const path = getTreePathOfNode(element.lastChild.firstChild);

// path => [0, 1, 0]
```


### hasNonEmptyPseudoElements(element)
Checks if ``element`` has the ``:before`` or ``:after`` elements with non-empty ``content`` property.

```js
import { hasNonEmptyPseudoElements } from "anodum"; // or anodum.hasNonEmptyPseudoElements if using in browser

const element = document.createElement('div');
const style = document.createElement('style');
style.innerHTML = 'div:before { content: "true" }';

document.body.appendChild(style);
document.body.appendChild(element);

const result = hasNonEmptyPseudoElements(element); // result => true
```


### hasNonEmptyShallowTextNodes(element)
Checks if ``element`` has a non-empty direct text child node.

```js
import { hasNonEmptyShallowTextNodes } from "anodum"; // or anodum.hasNonEmptyShallowTextNodes if using in browser

const element = document.createElement('div');
element.innerHTML = 'text';

const result = hasNonEmptyShallowTextNodes(element); // result => true
```


### isAttributeNode(node)
Check if ``node`` is an AttributeNode

```js
import { isAttributeNode } from "anodum"; // or anodum.isAttributeNode if using in browser

const node = document.createAttribute('name');
const result = isAttributeNode(node); // result => true
```


### isChildOfElement(node, testElement)
Checks if ``node`` is a child of target ``testElement``

```js
import { isChildOfElement } from "anodum"; // or anodum.isChildOfElement if using in browser

const highLevelContainer = document.createElement('section');
const container = document.createElement('div');
const node = document.createElement('div');

highLevelContainer.appendChild(container);
container.appendChild(node);

const result = isChildOfElement(node, highLevelContainer); // result => true
```


### isChildOfTag(node, testTag)
Checks if ``node`` is a child of an element with target ``testTag``

```js
import { isChildOfTag } from "anodum"; // or anodum.isChildOfTag if using in browser

const highLevelContainer = document.createElement('section');
const container = document.createElement('div');
const node = document.createElement('div');

highLevelContainer.appendChild(container);
container.appendChild(node);

const result = isChildOfTag(node, 'section'); // result => true
```


### isCommentNode(node)
Checks if ``node`` is a CommentNode

```js
import { isCommentNode } from "anodum"; // or anodum.isCommentNode if using in browser

const node = document.createComment('content');

const result = isCommentNode(node); // result => true
```


### isConditionalCommentNode(node)
Checks if ``node`` is a conditional CommentNode

```js
import { isConditionalCommentNode } from "anodum"; // or anodum.isConditionalCommentNode if using in browser

const container = document.createElement('div');
container.innerHTML = '<![if expression]> HTML <![endif]>';
const node = container.firstChild;

const result = isConditionalComment(node); // result => true
```


### isDocumentFragmentNode(node)
Checks if ``node`` is a DocumentFragmentNode

```js
import { isDocumentFragmentNode } from "anodum"; // or anodum.isDocumentFragmentNode if using in browser

const node = document.createDocumentFragment();

const result = isDocumentFragmentNode(node); // result => true
```


### isDocumentNode(node)
Checks if ``node`` is a DocumentNode

```js
import { isDocumentNode } from "anodum"; // or anodum.isDocumentNode if using in browser

const result = isDocumentNode(document); // result => true
```


### isDocumentTypeNode(node)
Checks if ``node`` is a DocumentTypeNode

```js
import { isDocumentTypeNode } from "anodum"; // or anodum.isDocumentTypeNode if using in browser

const node = document.doctype;

const result = isDocumentTypeNode(node); // result => true
```


### isElementNode(node)
Checks if ``node`` is a ElementNode

```js
import { isElementNode } from "anodum"; // or anodum.isElementNode if using in browser

const node = document.createElement('div');

const result = isElementNode(node); // result => true
```


### isEmbedElement(node)
Checks if ``node`` is a embed element. More details [here](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category)

```js
import { isEmbedElement } from "anodum"; // or anodum.isEmbedElement if using in browser

const node = document.createElement('video');

const result = isEmbedElement(node); // result => true
```


### isHeadingElement(node)
Checks if ``node`` is a heading element. More details [here](https://html.spec.whatwg.org/multipage/dom.html#heading-content-category)

```js
import { isHeadingElement } from "anodum"; // or anodum.isHeadingElement if using in browser

const node = document.createElement('h1');

const result = isHeadingElement(node); // result => true
```


### isInteractiveElement(node)
Checks if ``node`` is an interactive element. More details [here](https://html.spec.whatwg.org/multipage/dom.html#interactive-content-2)

```js
import { isInteractiveElement } from "anodum"; // or anodum.isInteractiveElement if using in browser

const node = document.createElement('a');

const result = isInteractiveElement(node); // result => true
```


### isNestingAllowed(element, containerElement)
Checks if nesting ``element`` into ``containerElement`` is valid in terms of html specs. More details [here](https://html.spec.whatwg.org/multipage/dom.html#content-models)

```js
import { isNestingAllowed } from "anodum"; // or anodum.isNestingAllowed if using in browser

const containerElement = document.createElement('button');
const element = document.createElement('div');

const result = isNestingAllowed(element, containerElement); // result => false
```


### isNode(node)
Checks if ``node`` is a Node.

```js
import { isNode } from "anodum"; // or anodum.isNode if using in browser

const result = isNode(document); // result => true

```


### isNonEmptyTextNode(node)
Checks if ``node`` is a TextNode with non-empty text content.

```js
import { isNonEmptyTextNode } from "anodum"; // or anodum.isNode if using in browser

const node = document.createTextNode('text');

const result = isNonEmptyTextNode(node); // result => true
```


### isNonEmptyTextNode(node)
Checks if ``node`` is a TextNode with non-empty text content.

```js
import { isNonEmptyTextNode } from "anodum"; // or anodum.isNode if using in browser

const node = document.createTextNode('text');

const result = isNonEmptyTextNode(node); // result => true
```


### isOneOfTags(element)
Checks if ``element`` matches to one of the specified tags.

```js
import { isOneOfTags } from "anodum"; // or anodum.isOneOfTags if using in browser

const element = document.createElement('div');

const result = isOneOfTags(element, ['h1', 'div'); // result => true
```


### isPhrasingElement(element)
Checks if ``element`` is a phrasing Element. More details [here](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2)

```js
import { isPhrasingElement } from "anodum"; // or anodum.isPhrasingElement if using in browser

const element = document.createElement('cite');

const result = isPhrasingElement(element); // result => true
```


### isProcessingInstructionNode(node)
Checks if ``node`` is a ProcessingInstructionNode.

```js
import { isProcessingInstructionNode } from "anodum"; // or anodum.isProcessingInstructionNode if using in browser

const node = document.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

const result = isProcessingInstructionNode(node); // result => true
```

### isRenderedNode(node)
Checks if ``node`` is rendered.

```js
import { isRenderedNode } from "anodum"; // or anodum.isRenderedNode if using in browser

const result = isRenderedNode(document.body); // result => true
```

### isSameOrContains(element, testElement)

Checks if `element` and `testElement` it the same element, or `element` contains `testElement`.

```js
const element = document.createElement('div');
const element2 = document.createElement('div');

isSameOrContains(element, element); // true
isSameOrContains(element, element2); // false

element.appendChild(element2);
isSameOrContains(element, element2); // true

```

### isSectioningElement(element)
Checks if ``element`` is a sectioning element. More details [here](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2)

```js
import { isSectioningElement } from "anodum"; // or anodum.isSectioningElement if using in browser

const element = document.createElement('section');

const result = isSectioningElement(element); // result => true
```


### isSelfClosingElement(element)
Checks if ``element`` is a self-closing element.

```js
import { isSelfClosingElement } from "anodum"; // or anodum.isSelfClosingElement if using in browser

const element = document.createElement('img');

const result = isSelfClosingElement(element); // result => true
```


### isTag(element, testTag)
Checks if ``element`` matches to specified `testTag`.

```js
import { isTag } from "anodum"; // or anodum.isTag if using in browser

const element = document.createElement('img');

const result = isTag(element, 'img'); // result => true
```


### isTextNode(node)
Checks if ``node`` is a TextNode.

```js
import { isTextNode } from "anodum"; // or anodum.isTextNode if using in browser

const node = document.createTextNode('');

const result = isTextNode(node); // result => true
```

### isValidSelector(cssSelector)
Checks if ``cssSelector`` is valid.

```js
import { isValidSelector } from "anodum"; // or anodum.isValidSelector if using in browser

const result = isValidSelector('div'); // result => true
```

### normalizeHTML(html)
Removes/Replaced unmaintainable symbols from target html string

```js
import { normalizeHTML } from "anodum"; // or anodum.normalizeHTML if using in browser

const html = '\n\n\n<div> test\u202F</div>\t\t\t';

const result = normalizeHTML(html); // result => '<div> test </div>'
```


### parseDocumentFromString(html, removeComments)
Parses target ``html`` string into Document model. If ``removeComments`` is true, all non-conditional comments will be
removed.

```js
import { parseDocumentFromString } from "anodum"; // or anodum.parseDocumentFromString if using in browser

const html = '<!DOCTYPE html><html><head><title>test</title></head><body></body></html>';
const dom = parseDocumentFromString(html);

// dom.title => 'test'
```


### parseElementFromString(html)
Parses target ``html`` string into ElementNode. ``html`` should contain a single root element, otherwise a TypeError
will be thrown.

```js
import { parseElementFromString } from "anodum"; // or anodum.parseElementFromString if using in browser

const html = '<div></div>';

const element = parseElementFromString(html);

// element.tagName => 'DIV'
```


### removeSetOfNodes(nodes)
Removes a set of nodes from their direct parents. After removal all sibling text nodes will be merge into single one in
order to prevent issues with ``contenteditable`` attr.

```js
import { removeSetOfNodes } from "anodum"; // or anodum.removeSetOfNodes if using in browser

const html = '<p>paragraph1</p>hello';
const dom = domParser.parseFromString(html, 'text/html');

const nodes = [
  dom.querySelector('p'),
];

dom.body.appendChild(document.createTextNode('world'));

removeSetOfNodes(nodes);

// nodes[0].parentNode => null
// dom.body.childNodes.length => 1
// dom.body.childNodes[0].textContent => 'helloworld'
```


### serializeDocument(document)
Serializes target ``document`` into html string.

```js
import { serializeDocument } from "anodum"; // or anodum.serializeDocument if using in browser

const html = '<html class="example"></html>';
const dom = domParser.parseFromString(html, 'text/html');

const result = serializeDocument(dom);
// result => '<html class="example"><head><title></title></head><body></body></html>'
```


### serializeDocumentType(document)
Serializes doctype of target ``document`` into html string.

```js
import { serializeDocumentType } from "anodum"; // or anodum.serializeDocumentType if using in browser

const html = '<!DOCTYPE html><html><head><title>test</title></head><body></body></html>';
const dom = domParser.parseFromString(html, 'text/html');

const result = serializeDocumentType(dom); // result => '<!DOCTYPE html>'
```


### traverseNode(node, onStep, includePath)
Walks trough all descendants of target node recursively. Provides specific element on each callback step.
If ``includePath`` is true returns a path of target node as a second parameter.

```js
import { traverseNode } from "anodum"; // or anodum.traverseNode if using in browser

const element = document.createElement('div');
element.innerHTML = '<section><!--comment--><h1></h1></section>text';

traverseNode(element, (node, path) => {
  // First callback call
  // node => section
  // path => [0]
}, true);
```



