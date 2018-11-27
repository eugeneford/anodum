import isNode from './is-node';
import isTextNode from './is-text-node';
import mergeSiblingTextNodes from './merge-sibling-text-nodes';

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

    if (isTextNode(child)) {
      mergeSiblingTextNodes(child);
    }
  });
}
