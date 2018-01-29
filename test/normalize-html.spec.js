import normalizeHTML from '../src/normalize-html';

describe('normalizeHTML', () => {
  it('TypeError is thrown if html is not a string', () => {
    expect(() => normalizeHTML(1)).toThrowError(TypeError);
  });

  it('trailing spaces are removed', () => {
    const html = ' <div>test</div> ';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('trailing tabs are removed', () => {
    const html = '\t<div>test</div>\t';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('trailing newlines are removed', () => {
    const html = '\n<div>test</div>\n';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('trailing zero width spaces are removed', () => {
    const html = '\uFEFF<div>test</div>\uFEFF';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('trailing narrow spaces are removed', () => {
    const html = '\u202F<div>test</div>\u202F';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('trailing figure spaces are removed', () => {
    const html = '\u2007<div>test</div>\u2007';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('non-trailing narrow spaces are replaced with spaces', () => {
    const html = '<div>test\u202F</div>';
    expect(normalizeHTML(html)).toEqual('<div>test </div>');
  });

  it('non-trailing figure spaces are replaced with spaces', () => {
    const html = '<div>test\u2007</div>';
    expect(normalizeHTML(html)).toEqual('<div>test </div>');
  });

  it('non-trailing tabs are replaced with spaces', () => {
    const html = '<div>test\t</div>';
    expect(normalizeHTML(html)).toEqual('<div>test </div>');
  });

  it('non-trailing zero width spaces are removed', () => {
    const html = '<div>test\uFEFF</div>';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('non-trailing newlines are replaced with spaces', () => {
    const html = '<div>test\n</div>';
    expect(normalizeHTML(html)).toEqual('<div>test </div>');
  });

  it('non-trailing carriage returns are removed', () => {
    const html = '<div>test\r</div>';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });

  it('word joiners are removed', () => {
    const html = '\u2060<div>test\u2060</div>\u2060';
    expect(normalizeHTML(html)).toEqual('<div>test</div>');
  });
});
