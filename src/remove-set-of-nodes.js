import isNode from './is-node';
import isTextNode from './is-text-node';

export default function (nodes) {
  if (!(nodes instanceof Array)) {
    throw new TypeError('nodes is not an Array');
  }

  nodes.forEach((node) => {
    if (!isNode(node)) {
      throw new TypeError('node is not a Node');
    }

    const { parentNode } = node;
    if (!parentNode) return;

    const index = Array.prototype.indexOf.call(parentNode.childNodes, node);

    parentNode.removeChild(node);

    const child = parentNode.childNodes[index];

    // Merge all heading text nodes in order to prevent contenteditable issues
    while (isTextNode(child) && child.previousSibling && isTextNode(child.previousSibling)) {
      child.nodeValue = child.previousSibling.nodeValue + child.nodeValue;
      parentNode.removeChild(child.previousSibling);
    }

    // Merge all trailing text nodes in order to prevent contenteditable issues
    while (isTextNode(child) && child.nextSibling && isTextNode(child.nextSibling)) {
      child.nodeValue += child.nextSibling.nodeValue;
      parentNode.removeChild(child.nextSibling);
    }
  });
}
