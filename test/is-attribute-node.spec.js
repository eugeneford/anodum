import isAttributeNode from '../src/is-attribute-node';

describe('isAttributeNode', () => {
  it('attribute is an AttributeNode', () => {
    const node = document.createAttribute('name');
    const result = isAttributeNode(node);
    expect(result).toBe(true);
  });

  it('element is not an AttributeNode', () => {
    const node = document.createElement('div');
    const result = isAttributeNode(node);
    expect(result).toBe(false);
  });
});
