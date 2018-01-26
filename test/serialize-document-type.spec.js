import domParser from "../src/dom-parser";
import serializeDocumentType from "../src/serialize-document-type";

describe("serializeDocumentType", () => {
  it("TypeError is thrown if element is not a document or document type", () => {
    expect(()=>serializeDocumentType(1)).toThrowError(TypeError);
  });

  it("html4.01 doctype is serialized", () => {
    const html = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">' +
      '<html><head><title>test</title></head><body></body></html>';
    const dom = domParser.parseFromString(html, "text/html");
    expect(serializeDocumentType(dom.doctype))
      .toBe('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">');
  });

  it("html5 doctype is serialized", () => {
    const html = '<!DOCTYPE html><html><head><title>test</title></head><body></body></html>';
    const dom = domParser.parseFromString(html, "text/html");
    expect(serializeDocumentType(dom.doctype))
      .toBe('<!DOCTYPE html>');
  });

  it("mathml doctype is serialized", () => {
    const html = '<!DOCTYPE math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd">' +
      '<apply><plus><ci>a</ci><ci>b</ci></apply>';
    const dom = domParser.parseFromString(html, "text/html");
    expect(serializeDocumentType(dom.doctype))
      .toBe('<!DOCTYPE math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd">');
  });


  it("doctype of document is serialized", () => {
    const html = '<!DOCTYPE html><html><head><title>test</title></head><body></body></html>';
    const dom = domParser.parseFromString(html, "text/html");
    expect(serializeDocumentType(dom))
      .toBe('<!DOCTYPE html>');
  });
});
