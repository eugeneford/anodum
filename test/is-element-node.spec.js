import isElementNode from '../src/is-element-node';

describe('isElementNode', () => {
  it('element is an ElementNode', () => {
    const node = document.createElement('div');
    const result = isElementNode(node);
    expect(result).toBe(true);
  });

  it('comment is not an ElementNode', () => {
    const node = document.createComment('test comment');
    const result = isElementNode(node);
    expect(result).toBe(false);
  });
});
