import isInteractiveElement from "../src/is-interactive-element";

describe("isInteractiveElement", ()=>{
  it("'audio' with controls is an interactive element", ()=>{
    const element = document.createElement("audio");
    element.setAttribute("controls", "controls");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'audio' without controls is not an interactive element", ()=>{
    const element = document.createElement("audio");
    expect(isInteractiveElement(element)).toBe(false);
  });

  it("'video' with controls is an interactive element", ()=>{
    const element = document.createElement("video");
    element.setAttribute("controls", "controls");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'video' without controls is not an interactive element", ()=>{
    const element = document.createElement("video");
    expect(isInteractiveElement(element)).toBe(false);
  });

  it("'img' with usemap is an interactive element", ()=>{
    const element = document.createElement("img");
    element.setAttribute("usemap", "usemap");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'img' without usemap is not an interactive element", ()=>{
    const element = document.createElement("img");
    expect(isInteractiveElement(element)).toBe(false);
  });

  it("'object' with usemap is an interactive element", ()=>{
    const element = document.createElement("object");
    element.setAttribute("usemap", "usemap");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'object' without usemap is not an interactive element", ()=>{
    const element = document.createElement("object");
    expect(isInteractiveElement(element)).toBe(false);
  });

  it("'input' with usemap is not an interactive element", ()=>{
    const element = document.createElement("input");
    element.setAttribute("type", "hidden");
    expect(isInteractiveElement(element)).toBe(false);
  });

  it("'input' without usemap is an interactive element", ()=>{
    const element = document.createElement("input");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'a' is an interactive element", ()=>{
    const element = document.createElement("a");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'button' is an interactive element", ()=>{
    const element = document.createElement("button");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'embed' is an interactive element", ()=>{
    const element = document.createElement("embed");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'iframe' is an interactive element", ()=>{
    const element = document.createElement("iframe");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'keygen' is an interactive element", ()=>{
    const element = document.createElement("keygen");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'label' is an interactive element", ()=>{
    const element = document.createElement("label");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'select' is an interactive element", ()=>{
    const element = document.createElement("select");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'textarea' is an interactive element", ()=>{
    const element = document.createElement("textarea");
    expect(isInteractiveElement(element)).toBe(true);
  });

  it("'div' is not an interactive element", ()=>{
    const element = document.createElement("div");
    expect(isInteractiveElement(element)).toBe(false);
  });
});
