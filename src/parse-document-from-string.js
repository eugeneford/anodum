import domParser from "./dom-parser";
import traverseNode from "./traverse-node";
import isConditionalComment from "./is-conditional-comment-node";
import normalizeHTML from "./normalize-html";

export default function(html, removeComments) {
  const normalizedHTML = normalizeHTML(html);
  let dom = domParser.parseFromString(normalizedHTML, "text/html");

  if (removeComments) {
    const comments = [];

    traverseNode(dom, (node) => {
      if (isConditionalComment(node)) {
        comments.push(node);
      }
    });

    comments.forEach((comment) => comment.parentNode.removeChild(comment));
  }

  return dom;
}
