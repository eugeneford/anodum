import isNode from './is-node';
import isElementNode from './is-element-node';

export default function (node, testElement) {
  if (!isNode(node)) {
    throw new TypeError('node is not a Node');
  }

  if (!isElementNode(testElement)) {
    throw new TypeError('testElement is not an Element');
  }

  let currentNode = node.parentElement;

  while (currentNode) {
    if (currentNode === testElement) {
      return true;
    }
    currentNode = currentNode.parentElement;
  }

  return false;
}
