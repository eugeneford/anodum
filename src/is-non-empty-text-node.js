import isTextNode from './is-text-node';

const NBSP_SYMBOL = String.fromCharCode(160);

export default function (node) {
  if (!isTextNode(node)) {
    return false;
  }

  return node.nodeValue.trim().length > 0 || node.nodeValue.includes(NBSP_SYMBOL);
}
