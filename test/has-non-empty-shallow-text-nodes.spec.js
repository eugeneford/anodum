import hasNonEmptyShallowTextNodes from '../src/has-non-empty-shallow-text-nodes';

describe('hasNonEmptyShallowTextNodes', () => {
  it('TypeError is thrown if element is not an ElementNode', () => {
    expect(() => hasNonEmptyShallowTextNodes(1)).toThrowError(TypeError);
  });

  it('empty element doesn\'t have any kind of nodes', () => {
    const element = document.createElement('div');
    expect(hasNonEmptyShallowTextNodes(element)).toBe(false);
  });

  it('\'<div><div></div>text<div></div></div>\' element has non-empty text nodes', () => {
    const element = document.createElement('div');
    element.innerHTML = '<div></div>text<div></div>';
    expect(hasNonEmptyShallowTextNodes(element)).toBe(true);
  });

  it('\'<div><div></div></div>\' element doesn\'t have non-empty text nodes', () => {
    const element = document.createElement('div');
    element.innerHTML = '<div></div>';
    expect(hasNonEmptyShallowTextNodes(element)).toBe(false);
  });
});
