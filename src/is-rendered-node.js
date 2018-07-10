import isNode from './is-node';
import isDocumentNode from './is-document-node';

export default function (node) {
  if (!isNode) return false;
  if (isDocumentNode(node)) return Boolean(node.defaultView);
  return Boolean(node.parentNode) && Boolean(node.ownerDocument.defaultView);
}
