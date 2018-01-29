import isDocumentNode from '../src/is-document-node';

describe('isDocumentNode', () => {
  it('document is a DocumentNode', () => {
    const result = isDocumentNode(document);
    expect(result).toBe(true);
  });

  it('comment is not a DocumentNode', () => {
    const node = document.createComment('test comment');
    const result = isDocumentNode(node);
    expect(result).toBe(false);
  });
});
