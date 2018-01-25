import isPhrasingElement from "../src/is-phrasing-element";

describe("isPhrasingElement", ()=>{
  it("'a' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("a"))).toBe(true);
  });

  it("'abbr' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("abbr"))).toBe(true);
  });

  it("'audio' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("audio"))).toBe(true);
  });

  it("'b' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("b"))).toBe(true);
  });

  it("'bdi' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("bdi"))).toBe(true);
  });

  it("'bdo' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("bdo"))).toBe(true);
  });

  it("'br' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("br"))).toBe(true);
  });

  it("'button' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("button"))).toBe(true);
  });

  it("'canvas' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("canvas"))).toBe(true);
  });

  it("'cite' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("cite"))).toBe(true);
  });

  it("'code' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("code"))).toBe(true);
  });

  it("'data' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("data"))).toBe(true);
  });

  it("'datalist' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("datalist"))).toBe(true);
  });

  it("'del' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("del"))).toBe(true);
  });

  it("'dfn' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("dfn"))).toBe(true);
  });

  it("'em' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("em"))).toBe(true);
  });

  it("'embed' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("embed"))).toBe(true);
  });

  it("'i' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("i"))).toBe(true);
  });

  it("'iframe' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("iframe"))).toBe(true);
  });

  it("'img' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("img"))).toBe(true);
  });

  it("'input' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("input"))).toBe(true);
  });

  it("'ins' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("ins"))).toBe(true);
  });

  it("'kbd' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("kbd"))).toBe(true);
  });

  it("'keygen' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("keygen"))).toBe(true);
  });

  it("'label' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("label"))).toBe(true);
  });

  it("'map' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("map"))).toBe(true);
  });

  it("'mark' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("mark"))).toBe(true);
  });

  it("'math' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("math"))).toBe(true);
  });

  it("'meter' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("meter"))).toBe(true);
  });

  it("'noscript' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("noscript"))).toBe(true);
  });

  it("'object' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("object"))).toBe(true);
  });

  it("'output' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("output"))).toBe(true);
  });

  it("'progress' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("progress"))).toBe(true);
  });

  it("'q' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("q"))).toBe(true);
  });

  it("'ruby' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("ruby"))).toBe(true);
  });

  it("'s' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("s"))).toBe(true);
  });

  it("'samp' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("samp"))).toBe(true);
  });

  it("'script' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("script"))).toBe(true);
  });

  it("'select' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("select"))).toBe(true);
  });

  it("'small' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("small"))).toBe(true);
  });

  it("'span' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("span"))).toBe(true);
  });

  it("'strong' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("strong"))).toBe(true);
  });

  it("'sub' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("sub"))).toBe(true);
  });

  it("'sup' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("sup"))).toBe(true);
  });

  it("'svg' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("svg"))).toBe(true);
  });

  it("'template' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("template"))).toBe(true);
  });

  it("'textarea' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("textarea"))).toBe(true);
  });

  it("'time' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("time"))).toBe(true);
  });

  it("'u' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("u"))).toBe(true);
  });

  it("'var' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("var"))).toBe(true);
  });

  it("'video' is a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("video"))).toBe(true);
  });

  it("'div' is not a phrasing element", ()=>{
    expect(isPhrasingElement(document.createElement("div"))).toBe(false);
  });
});
