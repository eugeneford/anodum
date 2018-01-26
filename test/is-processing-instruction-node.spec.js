import isProcessingInstruction from "../src/is-processing-instruction-node";

describe("isProcessingInstruction", ()=>{
  it("processing instruction is a ProcessingInstructionNode", ()=>{
    const node = document.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');
    const result = isProcessingInstruction(node);
    expect(result).toBe(true);
  });

  it("comment is not a DocumentNode", ()=>{
    const node = document.createComment("test comment");
    const result = isProcessingInstruction(node);
    expect(result).toBe(false);
  })
});
