import isDocumentNode from "./is-document-node";
import isDocumentTypeNode from "./is-document-type-node";

export default function (node) {
  if (!isDocumentNode(node) && !isDocumentTypeNode(node)) {
    throw new TypeError('node is not a Document or DocumentType');
  }

  const doctype = isDocumentNode(node) ? node.doctype : node;

  return '<!DOCTYPE '
    + doctype.name
    + (doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : '')
    + (!doctype.publicId && doctype.systemId ? ' SYSTEM' : '')
    + (doctype.systemId ? ' "' + doctype.systemId + '"' : '')
    + '>';
}
