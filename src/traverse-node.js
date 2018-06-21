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

  while (currentNode) {
    if (currentNode.childNodes && currentNode.childNodes.length > 0) {
      currentNode = currentNode.firstChild;
      index = 0;

      if (includePath) path.push(index);
    } else if (currentNode.nextSibling) {
      currentNode = currentNode.nextSibling;

      if (includePath) path.push(path.pop() + 1);
    } else {
      if (currentNode === rootNode) {
        onStep(currentNode, path && path.slice(0));
        return;
      }

      do {
        if (currentNode.parentNode) {
          currentNode = currentNode.parentNode;
          if (includePath) path.pop();
          if (currentNode === rootNode) {
            onStep(currentNode, path && path.slice(0));
            return;
          }
        } else {
          onStep(currentNode, path && path.slice(0));
          return;
        }
      } while (!currentNode.nextSibling);
      currentNode = currentNode.nextSibling;

      if (includePath) path.push(path.pop() + 1);
    }

    if (onStep(currentNode, path && path.slice(0))) return;
  }
}
