import getNodeByTreePath from '../src/get-node-by-tree-path';

describe('getNodeByTreePath', ()=>{
  it('TypeError is thrown when rootNode is not a Node', ()=>{
    expect(()=>getNodeByTreePath(1,1)).toThrowError(TypeError);
  });

  it('TypeError is thrown when path is not an Array', ()=>{
    expect(()=>getNodeByTreePath(document,1)).toThrowError(TypeError);
  });

  it('element is found', ()=>{
    const path = [0,1,1,0];
    const rootNode = document.createElement('div');
    rootNode.innerHTML = 'text<div><h1></h1><p>target</p></div>';

    const node = getNodeByTreePath(rootNode, path);
    expect(node.nodeType).toBe(3);
    expect(node.textContent).toBe('target');
  });


  it('returns null for bad path', ()=>{
    const path = [0,1,1,0];
    const rootNode = document.createElement('div');
    expect(getNodeByTreePath(rootNode, path)).toBeNull();
  });
});
