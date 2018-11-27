import isNode from './is-node';
import getTreePathOfNode from './get-tree-path-of-node';

export default function (node, onStep, includePath = false) {
  if (!isNode(node)) {
    throw new TypeError('node is not a Node');
  }

  if (typeof onStep !== 'function') {
    throw new TypeError('onStep is not a Function');
  }

  const rootNode = node;

  let index = 0;
  let path = [];
  let currentNode = node;

  // Create path holder if includePath = true was passed
  if (includePath) path = getTreePathOfNode(rootNode);
  // If rootNode hasn't childNodes, invoke callback only for rootNode
  if (!rootNode.hasChildNodes()) {
    onStep(rootNode, path);
    return;
  }

  while (currentNode) {
    if (onStep(currentNode, path)) return;

    if (currentNode.firstChild) {
      currentNode = currentNode.firstChild;
      index = 0;
      if (includePath) path.push(index);
    } else if (currentNode.nextSibling) {
      currentNode = currentNode.nextSibling;
      if (includePath) path.push(path.pop() + 1);
    } else {
      while (!currentNode.nextSibling) {
        if (currentNode === rootNode) return;
        currentNode = currentNode.parentNode;
        if (includePath) path.pop();
      }

      if (currentNode === rootNode) return;
      currentNode = currentNode.nextSibling;
      if (includePath) path.push(path.pop() + 1);
    }
  }
}
