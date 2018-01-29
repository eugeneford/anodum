import isChildOfElement from '../src/is-child-of-element';

describe('isChildOfElement', () => {
  it('TypeError is thrown if node is not a Node', () => {
    expect(() => isChildOfElement(1, 1)).toThrowError(TypeError);
  });

  it('TypeError is thrown if testElement is not a Node', () => {
    const node = document.createElement('div');
    expect(() => isChildOfElement(node, 1)).toThrowError(TypeError);
  });

  it('"section > div > a" is a child of "section"', () => {
    const highLevelContainer = document.createElement('section');
    const container = document.createElement('div');
    const node = document.createElement('div');

    highLevelContainer.appendChild(container);
    container.appendChild(node);

    expect(isChildOfElement(node, highLevelContainer)).toBe(true);
  });

  it('"section > div > a" is not a child of "nav"', () => {
    const testElement = document.createElement('nav');
    const highLevelContainer = document.createElement('section');
    const container = document.createElement('div');
    const node = document.createElement('div');

    highLevelContainer.appendChild(container);
    container.appendChild(node);

    expect(isChildOfElement(node, testElement)).toBe(false);
  });

  it('"body" is a child of "html"', () => {
    expect(isChildOfElement(document.body, document.documentElement)).toBe(true);
  });

  it('"body" is not a child of "head"', () => {
    expect(isChildOfElement(document.body, document.head)).toBe(false);
  });
});
