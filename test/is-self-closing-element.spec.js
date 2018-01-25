import isSelfClosingElement from "../src/is-self-closing-element";

describe("isSelfClosingElement", ()=>{
  it("'area' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("area"))).toBe(true);
  });

  it("'base' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("base"))).toBe(true);
  });

  it("'br' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("br"))).toBe(true);
  });

  it("'col' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("col"))).toBe(true);
  });

  it("'command' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("command"))).toBe(true);
  });

  it("'embed' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("embed"))).toBe(true);
  });

  it("'hr' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("hr"))).toBe(true);
  });

  it("'img' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("img"))).toBe(true);
  });

  it("'input' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("input"))).toBe(true);
  });

  it("'keygen' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("keygen"))).toBe(true);
  });

  it("'link' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("link"))).toBe(true);
  });

  it("'meta' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("meta"))).toBe(true);
  });

  it("'param' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("param"))).toBe(true);
  });

  it("'source' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("source"))).toBe(true);
  });

  it("'track' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("track"))).toBe(true);
  });

  it("'wbr' is a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("wbr"))).toBe(true);
  });

  it("'div' is not a self-closing element", ()=>{
    expect(isSelfClosingElement(document.createElement("div"))).toBe(false);
  });
});
