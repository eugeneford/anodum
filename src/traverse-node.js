import isNode from "./is-node";
import buildTreePathOfNode from "./build-tree-path-of-node";

export default function (node, onStep, includePath = false) {
  if (!isNode(node)) {
    throw new TypeError("node is not a Node");
  }

  if (typeof onStep !== "function") {
    throw new TypeError("onStep is not a Function");
  }

  let endNode = node, index = 0, path = [];

  // Create path holder if includePath = true was passed
  if (includePath) {
    path = buildTreePathOfNode(node);
  }

  while (node) {
    // Going deeper
    if (node.childNodes && node.childNodes.length > 0) {
      node = node.firstChild;
      index = 0;

      // Save Path if includePath = true was passed
      if (includePath) {
        path.push(index);
      }
    }

    // Go to next element
    else if (node.nextSibling) {
      node = node.nextSibling;

      // Save Path if includePath = true was passed
      if (includePath) {
        path.push(path.pop() + 1);
      }
    }

    // Moving back to parent
    else {
      do {
        if (node.parentNode) {
          node = node.parentNode;
          if (includePath) path.pop();
          if (node === endNode) {
            onStep(node, path && path.slice(0));
            return;
          }
        } else {
          onStep(node, path && path.slice(0));
          return;
        }
      } while (!node.nextSibling);
      node = node.nextSibling;

      // Save Path if includePath = true was passed
      if (includePath) path.push(path.pop() + 1);
    }

    if (onStep(node, path && path.slice(0))) {
      return;
    }
  }
}
