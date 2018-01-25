import isNode from "./is-node";

export default function(node, testTag){
  if (!isNode(node)) {
    throw new TypeError("node is not a Node");
  }

  if (typeof testTag !== "string") {
    throw new TypeError("testTag is not a string");
  }

  let parentNode;
  let tag = testTag.toLowerCase();

  while (parentNode = node.parentNode) {
    if (parentNode.tagName.toLowerCase() === tag) {
      return true;
    }
  }

  return false;
}
