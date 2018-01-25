import isHeadingElement from "../src/is-heading-element";

describe("isHeadingElement", ()=>{
  it("'h1' is a heading element", ()=>{
    expect(isHeadingElement(document.createElement("h1"))).toBe(true);
  });

  it("'h2' is a heading element", ()=>{
    expect(isHeadingElement(document.createElement("h2"))).toBe(true);
  });

  it("'h3' is a heading element", ()=>{
    expect(isHeadingElement(document.createElement("h3"))).toBe(true);
  });

  it("'h4' is a heading element", ()=>{
    expect(isHeadingElement(document.createElement("h4"))).toBe(true);
  });

  it("'h5' is a heading element", ()=>{
    expect(isHeadingElement(document.createElement("h5"))).toBe(true);
  });

  it("'h6' is a heading element", ()=>{
    expect(isHeadingElement(document.createElement("h6"))).toBe(true);
  });

  it("'p' is not a heading element", ()=>{
    expect(isHeadingElement(document.createElement("p"))).toBe(false);
  });
});
