import isDocumentTypeNode from '../src/is-document-type-node';

describe('isDocumentTypeNode', () => {
  it('doctype is a DocumentTypeNode', () => {
    const result = isDocumentTypeNode(document.doctype);
    expect(result).toBe(true);
  });

  it('comment is not a DocumentTypeNode', () => {
    const node = document.createComment('test comment');
    const result = isDocumentTypeNode(node);
    expect(result).toBe(false);
  });
});
