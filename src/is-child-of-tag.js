import isNode from './is-node';

export default function (node, testTag) {
  if (!isNode(node)) {
    throw new TypeError('node is not a Node');
  }

  if (typeof testTag !== 'string') {
    throw new TypeError('testTag is not a string');
  }

  const tag = testTag.toLowerCase();

  let currentNode = node.parentNode;
  while (currentNode && currentNode.tagName) {
    if (currentNode.tagName.toLowerCase() === tag) {
      return true;
    }
    currentNode = currentNode.parentNode;
  }

  return false;
}
