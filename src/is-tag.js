import isElementNode from './is-element-node';

export default function (element, testTag) {
  if (!isElementNode(element)) {
    throw new TypeError('element is not a type of Element');
  }

  if (typeof testTag !== 'string') {
    throw new TypeError('testTag is not a String');
  }

  return testTag.toLowerCase() === element.tagName.toLowerCase();
}
