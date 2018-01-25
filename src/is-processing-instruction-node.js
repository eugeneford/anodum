import NodeTypes from "./node-types";

export default function(node){
  return node && node.nodeType === NodeTypes.PROCESSING_INSTRUCTION_NODE;
}
