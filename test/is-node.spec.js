import isNode from "../src/is-node";

describe("isNode", ()=>{
  it("document is a Node", ()=>{
    expect(isNode(document)).toBe(true);
  });

  it("doctype is a Node", ()=>{
    expect(isNode(document.doctype)).toBe(true);
  });

  it("document fragment is a Node", ()=>{
    expect(isNode(document.createDocumentFragment())).toBe(true);
  });

  it("element is a Node", ()=>{
    expect(isNode(document.createElement("div"))).toBe(true);
  });

  it("comment is a Node", ()=>{
    expect(isNode(document.createComment("content"))).toBe(true);
  });

  it("attribute is a Node", ()=>{
    expect(isNode(document.createAttribute("name"))).toBe(true);
  });

  it("text is a Node", ()=>{
    expect(isNode(document.createTextNode("text"))).toBe(true);
  });

  it("returned false for object", ()=>{
    expect(isNode({})).toBe(false);
  })
});
