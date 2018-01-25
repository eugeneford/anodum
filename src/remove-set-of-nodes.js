import isNode from "./is-node";
import isTextNode from "./is-text-node";

export default function (nodes) {
  if (!(nodes instanceof Array)) {
    throw new TypeError("nodes is not an Array");
  }

  nodes.forEach((node) => {
    if (!isNode(node)) {
      throw new TypeError('node is not a Node');
    }

    let parentNode = node.parentNode;
    if (!parentNode) return;

    let index = Array.prototype.indexOf.call(parentNode.childNodes, node);
    parentNode.removeChild(node);

    node = parentNode.childNodes[index];

    // Merge all heading text nodes in order to prevent contenteditable issues
    while (isTextNode(node) && node.previousSibling && isTextNode(node.previousSibling)) {
      node.nodeValue = node.previousSibling.nodeValue + node.nodeValue;
      parentNode.removeChild(node.previousSibling);
    }

    // Merge all trailing text nodes in order to prevent contenteditable issues
    while (isTextNode(node) && node.nextSibling && isTextNode(node.nextSibling)) {
      node.nodeValue = node.nodeValue + node.nextSibling.nodeValue;
      parentNode.removeChild(node.nextSibling);
    }
  });
}
