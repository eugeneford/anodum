import isNode from "./is-node";

export default function(node, rootNode) {
  if (!isNode(node)) {
    throw new TypeError("node is not a Node");
  }

  if (rootNode) {
    if (!isNode(rootNode)) {
      throw new TypeError("rootNode is not a Node");
    }
    if (!rootNode.contains(node)) {
      throw new Error("rootNode doesn't contain a node");
    }
  }

  const path = [];
  let elem = node;
  let index;

  while (elem.parentNode && elem.parentNode !== rootNode) {
    index = Array.prototype.indexOf.call(elem.parentNode.childNodes, elem);
    path.unshift(index);
    elem = elem.parentNode;
  }

  // Add root node path
  path.unshift(0);

  return path;
}
