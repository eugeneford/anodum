import isElementNode from './is-element-node';

export default function (element, targetElement) {
  if (!isElementNode(element)) {
    throw new TypeError('element is not an ElementNode');
  }

  if (!isElementNode(targetElement)) {
    throw new TypeError('targetElement is not an ElementNode');
  }

  let attribute;
  for (let i = 0; i < element.attributes.length; i += 1) {
    attribute = element.attributes[i];
    targetElement.setAttribute(attribute.name, attribute.value);
  }
}
