import isNode from './is-node';

const OVERFLOW_AUTO = 'auto';
const OVERFLOW_SCROLL = 'scroll';

export default function (rootNode) {
  if (!isNode(rootNode)) {
    throw new TypeError('rootNode is not a Node');
  }

  const { ownerDocument } = rootNode;
  const { defaultView } = ownerDocument;

  let element = rootNode;
  while (element) {
    const style = defaultView.getComputedStyle(element, null);
    const overflow = style.getPropertyValue('overflow');

    if ((overflow === OVERFLOW_AUTO || overflow === OVERFLOW_SCROLL)
      && element.scrollHeight > element.clientHeight) {
      return element;
    }

    element = element.parentElement;
  }

  return ownerDocument.scrollingElement;
}
