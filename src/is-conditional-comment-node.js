import isCommentNode from "./is-comment-node";
import xmlSerializer from "./xml-serializer";

export default function(node){
  if (!isCommentNode(node)) {
    return false;
  }

  const comment = xmlSerializer.serializeToString(node);
  return /\[\s*(?:end)?if\s*[^\]]*\]/.test(comment);
}
