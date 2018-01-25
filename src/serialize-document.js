import nodeTypes from "./node-types";
import xmlSerializer from "./xml-serializer";
import isDocumentNode from "./is-document-node";

export default function (node) {
  if (!isDocumentNode(node)) {
    throw new Error('node is not a DocumentNode');
  }

  let elem = node.documentElement, html = "";

  while (elem) {
    switch (elem.nodeType) {
      case nodeTypes.ELEMENT_NODE:
        html = elem.outerHTML + html;
        break;
      case nodeTypes.TEXT_NODE:
        html = elem.data + html;
        break;
      default: // Comments and other stuff
        html = xmlSerializer.serializeToString(elem) + html;
        break;
    }

    elem = elem.previousSibling;
  }

  return html;
}
