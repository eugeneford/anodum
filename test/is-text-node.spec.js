import isTextNode from "../src/is-text-node";

describe("isTextNode", ()=>{
  it("text is a TextNode", ()=>{
    const node = document.createTextNode("text");
    const result = isTextNode(node);
    expect(result).toBe(true);
  });

  it("comment is not a TextNode", ()=>{
    const node = document.createComment("test comment");
    const result = isTextNode(node);
    expect(result).toBe(false);
  })
});
