import isNode from "./is-node";
import isElementNode from "./is-element-node";

export default function(node, testElement){
  if (!isNode(node)) {
    throw new TypeError("node is not a Node");
  }

  if(!isElementNode(testElement)) {
    throw new TypeError("testElement is not an Element");
  }

  let currentNode = node;

  while (currentNode = currentNode.parentElement) {
    if (currentNode === testElement) {
      return true;
    }
  }

  return false;
}
