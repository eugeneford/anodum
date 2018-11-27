import isTextNode from './is-text-node';

export default function (node) {
  if (!isTextNode(node)) {
    throw new TypeError('node is not a TextNode');
  }
  const { parentNode } = node;
  const textNode = node;

  // Merge all heading text nodes in order to prevent contenteditable issues
  while (textNode.previousSibling && isTextNode(textNode.previousSibling)) {
    textNode.nodeValue = textNode.previousSibling.nodeValue + textNode.nodeValue;
    parentNode.removeChild(textNode.previousSibling);
  }

  // Merge all trailing text nodes in order to prevent contenteditable issues
  while (textNode.nextSibling && isTextNode(textNode.nextSibling)) {
    textNode.nodeValue += textNode.nextSibling.nodeValue;
    parentNode.removeChild(textNode.nextSibling);
  }
}
