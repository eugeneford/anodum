import isNode from './is-node';

export default function (rootNode, path) {
  if (!isNode(rootNode)) {
    throw new TypeError('rootNode is not a Node');
  }

  if (!Array.isArray(path)) {
    throw new TypeError('path is not an Array');
  }

  const pathClone = path.slice(0);
  let node = rootNode;

  pathClone.splice(0, 1);

  while (pathClone.length > 0) {
    if (!(node && node.childNodes)) {
      return null;
    }

    const [c] = pathClone.splice(0, 1);

    node = node.childNodes[c];
  }

  return node;
}
