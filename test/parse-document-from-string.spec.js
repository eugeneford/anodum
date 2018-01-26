import parseDocumentFromString from '../src/parse-document-from-string';

describe('parseDocumentFromString', ()=>{
  it('html is parsed', ()=>{
    const html = '<!DOCTYPE html><html><head><title>test</title></head><body></body></html>';
    const dom = parseDocumentFromString(html);
    expect(dom.title).toBe("test");
  });

  it('standard comments are removed', ()=>{
    const html = '<!DOCTYPE html><html><head><title>test</title><!--comment--></head><body></body></html>';
    const dom = parseDocumentFromString(html, true);
    expect(dom.head.childNodes.length).toBe(1);
  });

  it('conditional comments are not removed', ()=>{
    const html = '<!DOCTYPE html><html><head><title>test</title><!--[if expression]> HTML <![endif]--></head><body></body></html>';
    const dom = parseDocumentFromString(html, true);
    expect(dom.head.childNodes.length).toBe(2);
  })
});
