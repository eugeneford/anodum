import isDocumentNode from './is-document-node';
import isDocumentTypeNode from './is-document-type-node';

export default function (node) {
  if (!isDocumentNode(node) && !isDocumentTypeNode(node)) {
    throw new TypeError('node is not a Document or DocumentType');
  }

  const doctype = isDocumentNode(node) ? node.doctype : node;
  const publicId = doctype.publicId ? ` PUBLIC "${doctype.publicId}"` : '';
  const systemTerm = !doctype.publicId && doctype.systemId ? ' SYSTEM' : '';
  const systemId = doctype.systemId ? ` "${doctype.systemId}"` : '';

  return `<!DOCTYPE ${doctype.name}${publicId}${systemTerm}${systemId}>`;
}
