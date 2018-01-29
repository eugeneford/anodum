import isTextNode from './is-text-node';

export default function (node) {
  if (!isTextNode(node)) {
    return false;
  }

  return node.nodeValue.trim().length > 0;
}
