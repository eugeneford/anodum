export default function(node) {
  const path = [];
  let elem = node;
  let index;

  while (elem.parentNode) {
    index = Array.prototype.indexOf.call(parent.children, elem);
    path.unshift(index);
    elem = elem.parentNode;
  }

  return path;
}
