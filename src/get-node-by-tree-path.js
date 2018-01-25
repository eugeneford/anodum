export default function (document, path) {
  const pathClone = path.slice(0);
  pathClone.splice(0, 1);

  let c, node = document.documentElement;

  while (pathClone.length > 0) {
    if (!(node && node.children)) {
      return null;
    }

    c = pathClone.splice(0, 1)[0];
    node = node.children[c];
  }

  return node;
}
