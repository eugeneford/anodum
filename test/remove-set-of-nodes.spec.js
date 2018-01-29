import domParser from '../src/dom-parser';
import removeSetOfNodes from '../src/remove-set-of-nodes';

describe('removeSetOfNodes', () => {
  it('TypeError is thrown if nodes is not an Array', () => {
    expect(() => removeSetOfNodes(1)).toThrowError(TypeError);
  });

  it('TypeError is thrown if one of nodes is not a Node', () => {
    const nodes = [1];
    expect(() => removeSetOfNodes(nodes)).toThrowError(TypeError);
  });

  it('elements without parents are ignored', () => {
    const nodes = [document.createElement('div')];

    removeSetOfNodes(nodes);

    nodes.forEach((node) => {
      expect(node.parentNode).toBeNull();
    });
  });

  it('set of elements is removed', () => {
    const html = '<div>element1</div><p>paragraph1</p><h1>heading1</h1>';
    const dom = domParser.parseFromString(html, 'text/html');
    const nodes = [
      dom.querySelector('div'),
      dom.querySelector('p'),
      dom.querySelector('h1'),
    ];

    removeSetOfNodes(nodes);

    nodes.forEach((node) => {
      expect(node.parentNode).toBeNull();
    });
  });

  it('sibling text nodes are merged after removal', () => {
    const html = 'hello<p>paragraph1</p>world';
    const dom = domParser.parseFromString(html, 'text/html');
    const nodes = [
      dom.querySelector('p')
    ];

    removeSetOfNodes(nodes);

    nodes.forEach((node) => {
      expect(node.parentNode).toBeNull();
    });

    expect(dom.body.childNodes.length).toBe(1);
    expect(dom.body.childNodes[0].textContent).toBe("helloworld");
  });

  it('dynamically injected text nodes are merged after removal', () => {
    const html = '<p>paragraph1</p>hello';
    const dom = domParser.parseFromString(html, 'text/html');
    const nodes = [
      dom.querySelector('p')
    ];

    dom.body.appendChild(document.createTextNode("world"));

    removeSetOfNodes(nodes);

    nodes.forEach((node) => {
      expect(node.parentNode).toBeNull();
    });

    expect(dom.body.childNodes.length).toBe(1);
    expect(dom.body.childNodes[0].textContent).toBe("helloworld");
  });
});
