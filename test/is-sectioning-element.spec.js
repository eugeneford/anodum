import isSectioningElement from '../src/is-sectioning-element';

describe('isSectioningElement', () => {
  it('"article" is a sectioning element', () => {
    expect(isSectioningElement(document.createElement('article'))).toBe(true);
  });

  it('"aside" is a sectioning element', () => {
    expect(isSectioningElement(document.createElement('aside'))).toBe(true);
  });

  it('"nav" is a sectioning element', () => {
    expect(isSectioningElement(document.createElement('nav'))).toBe(true);
  });

  it('"section" is a sectioning element', () => {
    expect(isSectioningElement(document.createElement('section'))).toBe(true);
  });

  it('"div" is not a sectioning element', () => {
    expect(isSectioningElement(document.createElement('div'))).toBe(false);
  });
});
