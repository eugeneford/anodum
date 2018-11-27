import domParser from '../src/dom-parser';
import mergeSiblingTextNodes from '../src/merge-sibling-text-nodes';

describe('mergeSiblingTextNodes', () => {
  it('nextSibling text node is merged', () => {
    const dom = domParser.parseFromString('hello', 'text/html');
    const additionalTextNode = dom.createTextNode('world');
    dom.body.appendChild(additionalTextNode);

    mergeSiblingTextNodes(dom.body.firstChild);

    expect(additionalTextNode).toBeNull();
    expect(dom.body.childNodes.length).toBe(1);
    expect(dom.body.childNodes[0].textContent).toBe('helloworld');
  });
  it('prevSibling text node is merged', () => {
    const dom = domParser.parseFromString('hello', 'text/html');
    const additionalTextNode = dom.createTextNode('world');
    dom.body.appendChild(additionalTextNode);
    mergeSiblingTextNodes(additionalTextNode);
    expect(dom.body.childNodes.length).toBe(1);
    expect(dom.body.childNodes[0].textContent).toBe('helloworld');
  });
  describe('when node is not a TextNode', () => {
    it('should throw a TypeError', () => {
      expect(() => mergeSiblingTextNodes(1)).toThrowError(TypeError);
    });
  });
});
