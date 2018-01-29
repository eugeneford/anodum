import NodeTypes from './node-types';

export default function (node) {
  return node && node.nodeType === NodeTypes.DOCUMENT_NODE;
}
