import parseElementFromString from "../src/parse-element-from-string";

describe("parseElementFromString", ()=>{
  it("EvalError is thrown if multiple root elements is passed", ()=>{
    const html = '<div></div><p></p>';
    expect(()=>parseElementFromString(html)).toThrowError(EvalError);
  });

  it("element is parsed", ()=>{
    const html = '<div></div>';
    const element = parseElementFromString(html);
    expect(element.tagName).toBe('DIV');
  })
});
