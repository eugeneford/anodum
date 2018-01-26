import isChildOfTag from "../src/is-child-of-tag";

describe("isChildOfTag", ()=>{
  it("TypeError is thrown if node is not a Node", ()=>{
    const node = {};
    expect(()=> isChildOfTag(node, "div")).toThrowError(TypeError);
  });

  it("TypeError is thrown if testTag is not a String", ()=>{
    const node = document.createElement("div");
    expect(()=> isChildOfTag(node, 1)).toThrowError(TypeError);
  });

  it("'section > div > a' is a child of 'section'", ()=>{
    const highLevelContainer = document.createElement("section");
    const container = document.createElement("div");
    const node = document.createElement("div");

    highLevelContainer.appendChild(container);
    container.appendChild(node);

    expect(isChildOfTag(node, "section")).toBe(true);
  });

  it("'section > div > a' is not a child of 'nav'", ()=>{
    const highLevelContainer = document.createElement("section");
    const container = document.createElement("div");
    const node = document.createElement("div");

    highLevelContainer.appendChild(container);
    container.appendChild(node);

    expect(isChildOfTag(node, "nav")).toBe(false);
  });

  it("'body' is a child of 'html'", ()=>{
    expect(isChildOfTag(document.body, "html")).toBe(true);
  });

  it("'body' is not a child of 'head'", ()=>{
    expect(isChildOfTag(document.body, "head")).toBe(false);
  });
});
