import isNode from './is-node';

export default function (node) {
  if (!isNode(node)) {
    throw new TypeError('node is not a Node');
  }

  const path = [];
  let elem = node;
  let index;

  while (elem.parentNode) {
    index = Array.prototype.indexOf.call(elem.parentNode.childNodes, elem);
    path.unshift(index);
    elem = elem.parentNode;
  }

  // Add root node path
  path.unshift(0);

  return path;
}
