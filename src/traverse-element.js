import isElementNode from "./is-element-node";
import buildTreePathOfNode from "./build-tree-path-of-node";

export default function (element, onStep, includePath = false) {
  if (!isElementNode(element)) {
    throw new Error('element is not an Element');
  }

  if (typeof onStep !== "function") {
    throw new TypeError("onStep is not a Function");
  }

  let endNode = element, index = 0, path = [];

  // Create path holder if includePath = true was passed
  if (includePath) path = buildTreePathOfNode(element);

  while (element) {
    // Going deeper
    if (element.children && element.children.length > 0) {
      element = element.firstElementChild;
      index = 0;

      // Save Path if includePath = true was passed
      if (includePath) path.push(index);
    }

    // Check element its self
    else if (element === endNode) {
      if (includePath && element.children.length) path.pop();
      if (onStep) onStep(element, path.slice(0));
      return;
    }

    // Go to next element
    else if (element.nextElementSibling) {
      element = element.nextElementSibling;

      // Save Path if includePath = true was passed
      if (includePath) path.push(path.pop() + 1);
    }

    // Moving back to parent
    else {
      do {
        if (element.parentElement) {
          element = element.parentElement;
          if (includePath) path.pop();
          if (element === endNode) {
            if (onStep) onStep(element, path.slice(0));
            return;
          }
        } else {
          if (onStep) onStep(element, path.slice(0));
          return;
        }
      } while (!element.nextElementSibling);
      element = element.nextElementSibling;

      // Save Path if includePath = true was passed
      if (includePath) path.push(path.pop() + 1);
    }

    if (onStep(element, path.slice(0))) return;
  }
}
