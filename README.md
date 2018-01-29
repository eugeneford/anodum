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

## API

### copyElementAttributes(element, targetElement)
Copies all attributes of element into targetElement. Existing targetElement attributes will be overwritten.

```js
import { copyElementAttributes } from "anodum"; // or Anodum.copyElementAttributes if using in browser

const sourceNode = document.createElement('div');
const targetNode = document.createElement('div');

sourceNode.setAttribute('class', 'container');
sourceNode.setAttribute('id', 'my-div');

copyElementAttributes(sourceNode, targetNode);

// tragetNode.getAttribute('id') => 'my-div'
// tragetNode.getAttribute('class') => 'container'
```

### getElementHeight(element, includeMargins)
Calculates element height. If includeMargins is set to true the final value will include top and bottom margins

```js
import { getElementHeight } from "anodum"; // or Anodum.getElementHeight if using in browser

const element = document.createElement('div');

document.body.appendChild(element);
element.style.height = '40px';
element.style.marginTop = '20px';
element.style.marginBottom = '20px';

const height = getElementHeight(element); // height => 80px
```


