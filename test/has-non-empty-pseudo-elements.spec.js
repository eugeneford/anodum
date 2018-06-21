import hasNonEmptyPseudoElements from '../src/has-non-empty-pseudo-elements';

describe('hasNonEmptyPseudoElements', () => {
  it('TypeError is thrown if element is not an ElementNode', () => {
    expect(() => hasNonEmptyPseudoElements(1)).toThrowError(TypeError);
  });

  it('true for element with ::before pseudo element', () => {
    const element = document.createElement('div');
    const style = document.createElement('style');
    style.innerHTML = 'div:before { content: "true" }';

    document.body.appendChild(style);
    document.body.appendChild(element);

    expect(hasNonEmptyPseudoElements(element)).toBe(true);

    document.body.removeChild(style);
    document.body.removeChild(element);
  });

  it('true for element with ::after pseudo element', () => {
    const element = document.createElement('div');
    const style = document.createElement('style');
    style.innerHTML = 'div:after { content: "true" }';

    document.body.appendChild(style);
    document.body.appendChild(element);

    expect(hasNonEmptyPseudoElements(element)).toBe(true);

    document.body.removeChild(style);
    document.body.removeChild(element);
  });

  it('false for element without pseudo element', () => {
    const htmlDocument = document.implementation.createHTMLDocument();
    const element = htmlDocument.createElement('div');

    htmlDocument.body.appendChild(element);

    expect(hasNonEmptyPseudoElements(element)).toBe(false);
  });
});
