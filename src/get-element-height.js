import isElementNode from "./is-element-node";

export default function (element, includeMargins) {
  if (!isElementNode(element)) {
    throw new TypeError("element is not an ElementNode");
  }

  let height = element.offsetHeight;

  if (includeMargins) {
    const style = element.ownerDocument.defaultView.getComputedStyle(element, null);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  }

  return height;
}
