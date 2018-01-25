import NodeTypes from "./node-types";

export default function(node){
  return node && node.nodeType === NodeTypes.ENTITY_REFERENCE_NODE;
}
