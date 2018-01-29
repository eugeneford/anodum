import isNestingAllowed from '../src/is-nesting-allowed';

describe('isNestingAllowed', () => {
  it('TypeError is thrown if element is not an ElementNode', () => {
    expect(() => isNestingAllowed(1)).toThrowError(TypeError);
  });

  it('TypeError is thrown if containerElement is not an ElementNode', () => {
    const element = document.createElement('div');
    expect(() => isNestingAllowed(element, 1)).toThrowError(TypeError);
  });

  it('"p" can contain a phrasing element', () => {
    const containerElement = document.createElement('p');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"p" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('p');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"h1" can contain a phrasing element', () => {
    const containerElement = document.createElement('h1');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"h1" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('h1');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"h2" can contain a phrasing element', () => {
    const containerElement = document.createElement('h2');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"h2" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('h2');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"h3" can contain a phrasing element', () => {
    const containerElement = document.createElement('h3');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"h3" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('h3');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"h4" can contain a phrasing element', () => {
    const containerElement = document.createElement('h4');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"h4" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('h4');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"h5" can contain a phrasing element', () => {
    const containerElement = document.createElement('h5');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"h5" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('h5');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"h6" can contain a phrasing element', () => {
    const containerElement = document.createElement('h6');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"h6" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('h6');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"pre" can contain a phrasing element', () => {
    const containerElement = document.createElement('pre');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"pre" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('pre');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"em" can contain a phrasing element', () => {
    const containerElement = document.createElement('em');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"em" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('em');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"strong" can contain a phrasing element', () => {
    const containerElement = document.createElement('strong');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"strong" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('strong');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"small" can contain a phrasing element', () => {
    const containerElement = document.createElement('small');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"small" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('small');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"s" can contain a phrasing element', () => {
    const containerElement = document.createElement('s');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"s" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('s');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"cite" can contain a phrasing element', () => {
    const containerElement = document.createElement('cite');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"cite" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('cite');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"q" can contain a phrasing element', () => {
    const containerElement = document.createElement('q');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"q" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('q');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"abbr" can contain a phrasing element', () => {
    const containerElement = document.createElement('abbr');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"abbr" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('abbr');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"data" can contain a phrasing element', () => {
    const containerElement = document.createElement('data');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"data" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('data');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"time" can contain a phrasing element', () => {
    const containerElement = document.createElement('time');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"time" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('time');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"code" can contain a phrasing element', () => {
    const containerElement = document.createElement('code');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"code" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('code');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"var" can contain a phrasing element', () => {
    const containerElement = document.createElement('var');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"var" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('var');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"samp" can contain a phrasing element', () => {
    const containerElement = document.createElement('samp');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"samp" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('samp');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"kbd" can contain a phrasing element', () => {
    const containerElement = document.createElement('kbd');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"kbd" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('kbd');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"sub" can contain a phrasing element', () => {
    const containerElement = document.createElement('sub');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"sub" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('sub');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"sup" can contain a phrasing element', () => {
    const containerElement = document.createElement('sup');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"sup" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('sup');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"i" can contain a phrasing element', () => {
    const containerElement = document.createElement('i');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"i" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('i');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"b" can contain a phrasing element', () => {
    const containerElement = document.createElement('b');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"b" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('b');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"u" can contain a phrasing element', () => {
    const containerElement = document.createElement('u');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"u" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('u');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"mark" can contain a phrasing element', () => {
    const containerElement = document.createElement('mark');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"mark" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('mark');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"bdi" can contain a phrasing element', () => {
    const containerElement = document.createElement('bdi');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"bdi" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('bdi');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"bdo" can contain a phrasing element', () => {
    const containerElement = document.createElement('bdo');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"bdo" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('bdo');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"span" can contain a phrasing element', () => {
    const containerElement = document.createElement('span');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"span" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('span');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"output" can contain a phrasing element', () => {
    const containerElement = document.createElement('output');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"output" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('output');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"legend" can contain a phrasing element', () => {
    const containerElement = document.createElement('legend');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"legend" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('legend');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dfn" can contain a phrasing element', () => {
    const containerElement = document.createElement('dfn');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"dfn" can\'t contain a non-phrasing element', () => {
    const containerElement = document.createElement('dfn');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dfn" can\'t contain another dfn element', () => {
    const containerElement = document.createElement('dfn');
    const element = document.createElement('dfn');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"object" can contain a "param" element', () => {
    const containerElement = document.createElement('object');
    const element = document.createElement('param');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"object" can\'t contain a non-"param" element', () => {
    const containerElement = document.createElement('object');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"audio" can contain a "track" element', () => {
    const containerElement = document.createElement('audio');
    const element = document.createElement('track');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"audio" can contain a "source" element if src is not set', () => {
    const containerElement = document.createElement('audio');
    const element = document.createElement('source');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"audio" can\'t contain a "source" element if src is set', () => {
    const containerElement = document.createElement('audio');
    const element = document.createElement('source');
    containerElement.setAttribute("src", "sourcelink");
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"video" can contain a "track" element', () => {
    const containerElement = document.createElement('video');
    const element = document.createElement('track');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"video" can contain a "source" element if src is not set', () => {
    const containerElement = document.createElement('video');
    const element = document.createElement('source');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"video" can\'t contain a "source" element if src is set', () => {
    const containerElement = document.createElement('video');
    const element = document.createElement('source');
    containerElement.setAttribute("src", "sourcelink");
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"html" can contain a "head" element', () => {
    const containerElement = document.createElement('html');
    const element = document.createElement('head');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"html" can contain a "body" element', () => {
    const containerElement = document.createElement('html');
    const element = document.createElement('body');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"html" can\'t contain other elements', () => {
    const containerElement = document.createElement('html');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"nav" can contain a non-"main" element', () => {
    const containerElement = document.createElement('nav');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"nav" can\'t contain a "main" element', () => {
    const containerElement = document.createElement('nav');
    const element = document.createElement('main');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"aside" can contain a non-"main" element', () => {
    const containerElement = document.createElement('aside');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"aside" can\'t contain a "main" element', () => {
    const containerElement = document.createElement('aside');
    const element = document.createElement('main');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"ul" can contain a "li" element', () => {
    const containerElement = document.createElement('ul');
    const element = document.createElement('li');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"ul" can\'t contain a non-"li" element', () => {
    const containerElement = document.createElement('ul');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"ol" can contain a "li" element', () => {
    const containerElement = document.createElement('ol');
    const element = document.createElement('li');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"ol" can\'t contain a non-"li" element', () => {
    const containerElement = document.createElement('ol');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dt" can contain a phrasing element', () => {
    const containerElement = document.createElement('dt');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"dt" can\'t contain a "header" element', () => {
    const containerElement = document.createElement('dt');
    const element = document.createElement('header');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dt" can\'t contain a "footer" element', () => {
    const containerElement = document.createElement('dt');
    const element = document.createElement('footer');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dt" can\'t contain a sectioning element', () => {
    const containerElement = document.createElement('dt');
    const element = document.createElement('section');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dt" can\'t contain a sectioning element', () => {
    const containerElement = document.createElement('dt');
    const element = document.createElement('section');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dt" can\'t contain a heading element', () => {
    const containerElement = document.createElement('dt');
    const element = document.createElement('h1');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"dl" can contain a "dt" element', () => {
    const containerElement = document.createElement('dl');
    const element = document.createElement('dt');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"dl" can contain a "dd" element', () => {
    const containerElement = document.createElement('dl');
    const element = document.createElement('dd');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"dl" can\'t contain other elements', () => {
    const containerElement = document.createElement('dl');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"header" can\'t contain other "header" elements', () => {
    const containerElement = document.createElement('header');
    const element = document.createElement('header');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"header" can\'t contain "footer" elements', () => {
    const containerElement = document.createElement('header');
    const element = document.createElement('footer');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"header" can\'t contain "main" elements', () => {
    const containerElement = document.createElement('header');
    const element = document.createElement('main');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"header" can contain any other element', () => {
    const containerElement = document.createElement('header');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"footer" can\'t contain "header" elements', () => {
    const containerElement = document.createElement('footer');
    const element = document.createElement('header');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"footer" can\'t contain other "footer" elements', () => {
    const containerElement = document.createElement('footer');
    const element = document.createElement('footer');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"footer" can\'t contain "main" elements', () => {
    const containerElement = document.createElement('footer');
    const element = document.createElement('main');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"footer" can contain any other element', () => {
    const containerElement = document.createElement('footer');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"address" can\'t contain other "address" elements', () => {
    const containerElement = document.createElement('address');
    const element = document.createElement('address');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"address" can\'t contain "header" elements', () => {
    const containerElement = document.createElement('address');
    const element = document.createElement('header');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"address" can\'t contain "footer" elements', () => {
    const containerElement = document.createElement('address');
    const element = document.createElement('footer');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"address" can\'t contain sectioning elements', () => {
    const containerElement = document.createElement('address');
    const element = document.createElement('section');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"address" can\'t contain heading elements', () => {
    const containerElement = document.createElement('address');
    const element = document.createElement('h1');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"address" can contain other elements', () => {
    const containerElement = document.createElement('address');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"hr" can\'t contain other elements', () => {
    const containerElement = document.createElement('hr');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"img" can\'t contain other elements', () => {
    const containerElement = document.createElement('img');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"iframe" can\'t contain other elements', () => {
    const containerElement = document.createElement('iframe');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"embed" can\'t contain other elements', () => {
    const containerElement = document.createElement('embed');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"param" can\'t contain other elements', () => {
    const containerElement = document.createElement('param');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"source" can\'t contain other elements', () => {
    const containerElement = document.createElement('source');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"track" can\'t contain other elements', () => {
    const containerElement = document.createElement('track');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"area" can\'t contain other elements', () => {
    const containerElement = document.createElement('area');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"title" can\'t contain other elements', () => {
    const containerElement = document.createElement('title');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"base" can\'t contain other elements', () => {
    const containerElement = document.createElement('base');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"link" can\'t contain other elements', () => {
    const containerElement = document.createElement('link');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"meta" can\'t contain other elements', () => {
    const containerElement = document.createElement('meta');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"style" can\'t contain other elements', () => {
    const containerElement = document.createElement('style');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"wbr" can\'t contain other elements', () => {
    const containerElement = document.createElement('wbr');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"br" can\'t contain other elements', () => {
    const containerElement = document.createElement('br');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"col" can\'t contain other elements', () => {
    const containerElement = document.createElement('col');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"script" can\'t contain other elements', () => {
    const containerElement = document.createElement('script');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"template" can\'t contain other elements', () => {
    const containerElement = document.createElement('template');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"canvas" can\'t contain other elements', () => {
    const containerElement = document.createElement('canvas');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"input" can\'t contain other elements', () => {
    const containerElement = document.createElement('input');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"textarea" can\'t contain other elements', () => {
    const containerElement = document.createElement('textarea');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"keygen" can\'t contain other elements', () => {
    const containerElement = document.createElement('keygen');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"form" can\'t contain other "form" elements', () => {
    const containerElement = document.createElement('form');
    const element = document.createElement('form');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"form" can contain other elements', () => {
    const containerElement = document.createElement('form');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"label" can\'t contain other "label" elements', () => {
    const containerElement = document.createElement('label');
    const element = document.createElement('label');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"label" can contain other phrasing elements', () => {
    const containerElement = document.createElement('label');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"datalist" can contain phrasing elements', () => {
    const containerElement = document.createElement('datalist');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"datalist" can contain "option" elements', () => {
    const containerElement = document.createElement('datalist');
    const element = document.createElement('option');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"datalist" can\'t contain other elements', () => {
    const containerElement = document.createElement('datalist');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"progress" can\'t contain other "progress" elements', () => {
    const containerElement = document.createElement('progress');
    const element = document.createElement('progress');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"progress" can contain other phrasing elements', () => {
    const containerElement = document.createElement('progress');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"meter" can\'t contain other "meter" elements', () => {
    const containerElement = document.createElement('meter');
    const element = document.createElement('meter');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"meter" can contain other phrasing elements', () => {
    const containerElement = document.createElement('meter');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"select" can contain "option" elements', () => {
    const containerElement = document.createElement('select');
    const element = document.createElement('option');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"select" can contain "optgroup" elements', () => {
    const containerElement = document.createElement('select');
    const element = document.createElement('optgroup');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"select" can contain "script" elements', () => {
    const containerElement = document.createElement('select');
    const element = document.createElement('script');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"select" can contain "template" elements', () => {
    const containerElement = document.createElement('select');
    const element = document.createElement('template');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"select" can\'t contain other elements', () => {
    const containerElement = document.createElement('select');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"optgroup" can contain "option" elements', () => {
    const containerElement = document.createElement('optgroup');
    const element = document.createElement('option');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"optgroup" can\'t contain other elements', () => {
    const containerElement = document.createElement('optgroup');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"button" can\'t contain other interactive elements', () => {
    const containerElement = document.createElement('button');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"button" can contain other phrasing elements', () => {
    const containerElement = document.createElement('button');
    const element = document.createElement('span');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"a" can\'t contain other interactive elements', () => {
    const containerElement = document.createElement('a');
    const element = document.createElement('a');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"a" can contain other elements', () => {
    const containerElement = document.createElement('a');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tbody" can contain "tr" elements', () => {
    const containerElement = document.createElement('tbody');
    const element = document.createElement('tr');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tbody" can contain "script" elements', () => {
    const containerElement = document.createElement('tbody');
    const element = document.createElement('script');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tbody" can contain "template" elements', () => {
    const containerElement = document.createElement('tbody');
    const element = document.createElement('template');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tbody" can\'t contain other elements', () => {
    const containerElement = document.createElement('tbody');
    const element = document.createElement('td');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"thead" can contain "tr" elements', () => {
    const containerElement = document.createElement('thead');
    const element = document.createElement('tr');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"thead" can contain "script" elements', () => {
    const containerElement = document.createElement('thead');
    const element = document.createElement('script');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"thead" can contain "template" elements', () => {
    const containerElement = document.createElement('thead');
    const element = document.createElement('template');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"thead" can\'t contain other elements', () => {
    const containerElement = document.createElement('thead');
    const element = document.createElement('td');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"tfoot" can contain "tr" elements', () => {
    const containerElement = document.createElement('tfoot');
    const element = document.createElement('tr');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tfoot" can contain "script" elements', () => {
    const containerElement = document.createElement('tfoot');
    const element = document.createElement('script');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tfoot" can contain "template" elements', () => {
    const containerElement = document.createElement('tfoot');
    const element = document.createElement('template');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tfoot" can\'t contain other elements', () => {
    const containerElement = document.createElement('tfoot');
    const element = document.createElement('td');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"caption" can\'t contain "table" elements', () => {
    const containerElement = document.createElement('caption');
    const element = document.createElement('table');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"caption" can contain other elements', () => {
    const containerElement = document.createElement('caption');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tr" can contain "td" elements', () => {
    const containerElement = document.createElement('tr');
    const element = document.createElement('td');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tr" can contain "th" elements', () => {
    const containerElement = document.createElement('tr');
    const element = document.createElement('th');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tr" can contain "script" elements', () => {
    const containerElement = document.createElement('tr');
    const element = document.createElement('script');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tr" can contain "template" elements', () => {
    const containerElement = document.createElement('tr');
    const element = document.createElement('template');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"tr" can\'t contain other elements', () => {
    const containerElement = document.createElement('tr');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"th" can\'t contain "header" elements', () => {
    const containerElement = document.createElement('th');
    const element = document.createElement('header');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"th" can\'t contain "footer" elements', () => {
    const containerElement = document.createElement('th');
    const element = document.createElement('footer');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"th" can\'t contain sectioning elements', () => {
    const containerElement = document.createElement('th');
    const element = document.createElement('section');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"th" can\'t contain heading elements', () => {
    const containerElement = document.createElement('th');
    const element = document.createElement('h1');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('"th" can contain other elements', () => {
    const containerElement = document.createElement('th');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "caption" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('caption');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "colgroup" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('colgroup');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "thead" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('thead');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "tbody" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('tbody');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "tfoot" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('tfoot');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "tr" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('tr');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "script" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('script');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can contain "template" elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('template');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });

  it('"table" can\'t contain other elements', () => {
    const containerElement = document.createElement('table');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(false);
  });

  it('all other elements can contain each other', () => {
    const containerElement = document.createElement('div');
    const element = document.createElement('div');
    expect(isNestingAllowed(element, containerElement)).toBe(true);
  });
});
