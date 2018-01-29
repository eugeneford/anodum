import getTreePathOfNode from '../src/get-tree-path-of-node';

describe('getTreePathOfNode', () => {
  it('TypeError is thrown when node is not a Node', () => {
    expect(() => getTreePathOfNode(1)).toThrowError(TypeError);
  });

  it('path is correct for "body" element', () => {
    const element = document.createElement('div');
    element.innerHTML = 'text<p>inner text</p>';
    expect(getTreePathOfNode(element.lastChild.firstChild).toString()).toBe('0,1,0');
  });
});
