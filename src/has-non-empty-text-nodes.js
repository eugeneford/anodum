import isElementNode from "./is-element-node";
import isNonEmptyTextNode from "./is-non-empty-text-node";

export default function(element){
  if(!isElementNode(element)) {
    throw new TypeError("element is not an Element");
  }

  if (!element.hasChildNodes()) {
    return false;
  }

  let i;
  for (i = 0; i < element.childNodes.length; i++) {
    if (isNonEmptyTextNode(element.childNodes[i])) {
      return true;
    }
  }

  return false;
}
