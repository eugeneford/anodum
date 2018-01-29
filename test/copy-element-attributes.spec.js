import copyElementAttributes from '../src/copy-element-attributes';

describe('copyElementAttributes', () => {
  it('TypeError is thrown if element is not an ElementNode', () => {
    const sourceNode = { attributes: [] };
    const targetNode = document.createElement('div');
    expect(() => copyElementAttributes(sourceNode, targetNode)).toThrowError(TypeError);
  });

  it('TypeError is thrown if targetElement is not an ElementNode', () => {
    const sourceNode = document.createElement('div');
    const targetNode = { attributes: [] };
    expect(() => copyElementAttributes(sourceNode, targetNode)).toThrowError(TypeError);
  });

  it('attributes are copied', () => {
    const sourceNode = document.createElement('div');
    const targetNode = document.createElement('div');

    sourceNode.setAttribute('class', 'container');
    sourceNode.setAttribute('id', 'my-div');

    copyElementAttributes(sourceNode, targetNode);

    expect(sourceNode.attributes.length).toEqual(targetNode.attributes.length);
    expect(sourceNode.getAttribute('class')).toEqual(sourceNode.getAttribute('class'));
    expect(sourceNode.getAttribute('id')).toEqual(sourceNode.getAttribute('id'));
  });

  it('attributes are overwritten', () => {
    const sourceNode = document.createElement('div');
    const targetNode = document.createElement('div');

    sourceNode.setAttribute('class', 'container');
    sourceNode.setAttribute('id', 'my-div');
    targetNode.setAttribute('id', 'another-div');

    copyElementAttributes(sourceNode, targetNode);

    expect(sourceNode.attributes.length).toEqual(targetNode.attributes.length);
    expect(sourceNode.getAttribute('class')).toEqual(sourceNode.getAttribute('class'));
    expect(sourceNode.getAttribute('id')).toEqual(sourceNode.getAttribute('id'));
  });
});
