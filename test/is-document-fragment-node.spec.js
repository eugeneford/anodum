import isDocumentFragmentNode from '../src/is-document-fragment-node';

describe('isDocumentFragmentNode', () => {
  it('document fragment is a DocumentFragmentNode', () => {
    const node = document.createDocumentFragment();
    const result = isDocumentFragmentNode(node);
    expect(result).toBe(true);
  });

  it('element is not a DocumentFragmentNode', () => {
    const node = document.createElement('div');
    const result = isDocumentFragmentNode(node);
    expect(result).toBe(false);
  });
});
