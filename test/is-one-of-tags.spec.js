import isOneOfTags from "../src/is-one-of-tags";

describe("isOneOfTags", ()=>{
  it("TypeError is trown if testTags is an Array", ()=>{
    expect(()=> isOneOfTags(document.createElement("div"), "div")).toThrowError(TypeError);
  });

  it("div element is one of ['a','div'] test tags", ()=>{
    const element = document.createElement("div");
    expect(isOneOfTags(element, ['a', "div"])).toBe(true);
  });
});
