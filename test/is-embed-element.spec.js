import isEmbedElement from "../src/is-embed-element";

describe("isEmbedElement", ()=>{
  it("'audio' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("audio"))).toBe(true);
  });

  it("'canvas' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("canvas"))).toBe(true);
  });

  it("'embed' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("embed"))).toBe(true);
  });

  it("'iframe' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("iframe"))).toBe(true);
  });

  it("'img' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("img"))).toBe(true);
  });

  it("'math' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("math"))).toBe(true);
  });

  it("'object' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("object"))).toBe(true);
  });

  it("'svg' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("svg"))).toBe(true);
  });

  it("'video' is an embed element", ()=>{
    expect(isEmbedElement(document.createElement("video"))).toBe(true);
  });

  it("'div' is not an embed element", ()=>{
    expect(isEmbedElement(document.createElement("div"))).toBe(false);
  });
});
