import isNode from "./is-node";

export default function(node, testTag){
  if (!isNode(node)) {
    throw new TypeError("node is not a Node");
  }

  if (typeof testTag !== "string") {
    throw new TypeError("testTag is not a string");
  }

  let currentNode = node;
  let tag = testTag.toLowerCase();

  while ((currentNode = currentNode.parentNode) && currentNode.tagName) {
    if (currentNode.tagName.toLowerCase() === tag) {
      return true;
    }
  }

  return false;
}
