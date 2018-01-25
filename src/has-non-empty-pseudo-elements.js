import isElementNode from "./is-element-node";

export default function (element) {
  if (!isElementNode(element)){
    throw new TypeError("element is not a ElementNode");
  }

  const window = element.ownerDocument.defaultView;
  const cssBefore = window.getComputedStyle(element, ':before').getPropertyValue("content");
  const cssAfter = window.getComputedStyle(element, ':after').getPropertyValue("content");

  return cssBefore.length > 0 || cssAfter.length > 0;
}
