import isTag from '../src/is-tag';

describe('isTag', () => {
  it('TypeError is thrown when element is not an ElementNode', () => {
    expect(() => isTag(1, 'div')).toThrowError(TypeError);
  });

  it('TypeError is thrown when testTag is not a String', () => {
    expect(() => isTag(document.createElement('div'), 1)).toThrowError(TypeError);
  });

  it('div element is "div" tag', () => {
    const element = document.createElement('div');
    expect(isTag(element, 'DIV')).toBe(true);
  });

  it('div element is not "a" tag', () => {
    const element = document.createElement('div');
    expect(isTag(element, 'A')).toBe(false);
  });
});
