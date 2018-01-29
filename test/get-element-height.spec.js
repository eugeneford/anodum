import getElementHeight from '../src/get-element-height';

describe('getElementHeight', () => {
  it('TypeError is thrown if element is not an ElementNode', () => {
    const element = { attributes: [] };
    expect(() => getElementHeight(element)).toThrowError(TypeError);
  });

  it('height is computed correctly for target element', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style.height = '40px';
    element.style.marginTop = '20px';
    element.style.marginBottom = '20px';

    expect(getElementHeight(element)).toEqual(40);

    document.body.removeChild(element);
  });

  it('outerHeight is computed correctly for target element', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style.height = '40px';
    element.style.marginTop = '20px';
    element.style.marginBottom = '20px';

    expect(getElementHeight(element, true)).toEqual(80);

    document.body.removeChild(element);
  });
});
