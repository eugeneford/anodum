import getTreePathOfNode from "../src/get-tree-path-of-node";

describe("getTreePathOfNode", () => {
  describe("when rootNode is not set", () => {
    it("TypeError is thrown when node is not a Node", () => {
      expect(() => getTreePathOfNode(1)).toThrowError(TypeError);
    });

    it('path is correct for "body" element', () => {
      const element = document.createElement("div");
      element.innerHTML = "text<p>inner text</p>";
      expect(getTreePathOfNode(element.lastChild.firstChild).toString()).toBe(
        "0,1,0"
      );
    });
  });

  describe("when rootNode is set", () => {
    it("TypeError is thrown when rootNode is not a Node", () => {
      const element = document.createElement("div");
      expect(() => getTreePathOfNode(element, 1)).toThrowError(TypeError);
    });

    it("Error is thrown when rootNode doesn't contain node", () => {
      const element = document.createElement("div");
      const rootElement = document.createElement("div");
      expect(() => getTreePathOfNode(element, rootElement)).toThrowError(Error);
    });

    it('path is correct for "rootNode" element', () => {
      const rootElement = document.createElement("div");
      const childElement = document.createElement("div");
      const anotherChildElement = document.createElement("div");
      childElement.innerHTML = "text<p>inner text</p>";
      rootElement.appendChild(anotherChildElement);
      rootElement.appendChild(childElement);
      expect(
        getTreePathOfNode(
          childElement.lastChild.firstChild,
          rootElement
        ).toString()
      ).toBe("0,1,1,0");
    });
  });
});
