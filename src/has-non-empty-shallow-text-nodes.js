import isElementNode from './is-element-node';
import isNonEmptyTextNode from './is-non-empty-text-node';

export default function (element) {
  if (!isElementNode(element)) {
    throw new TypeError('element is not an Element');
  }

  if (!element.hasChildNodes()) {
    return false;
  }

  for (let i = 0; i < element.childNodes.length; i += 1) {
    if (isNonEmptyTextNode(element.childNodes[i])) {
      return true;
    }
  }

  return false;
}
