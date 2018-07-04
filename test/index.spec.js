import {
  copyElementAttributes,
  domParser,
  getElementHeight,
  getNodeByTreePath,
  getTreePathOfNode,
  hasNonEmptyPseudoElements,
  hasNonEmptyShallowTextNodes,
  isAttributeNode,
  isChildOfElement,
  isChildOfTag,
  isCommentNode,
  isConditionalCommentNode,
  isDocumentFragmentNode,
  isDocumentNode,
  isDocumentTypeNode,
  isElementNode,
  isEmbedElement,
  isHeadingElement,
  isInteractiveElement,
  isNestingAllowed,
  isNode,
  isNonEmptyTextNode,
  isOneOfTags,
  isPhrasingElement,
  isProcessingInstructionNode,
  isSameOrContains,
  isSectioningElement,
  isSelfClosingElement,
  isTag,
  isTextNode,
  isValidSelector,
  nodeTypes,
  normalizeHTML,
  parseDocumentFromString,
  parseElementFromString,
  removeSetOfNodes,
  serializeDocument,
  serializeDocumentType,
  traverseNode,
  xmlSerializer,
} from '../src/index';

import './copy-element-attributes.spec';
import './get-element-height.spec';
import './get-node-by-tree-path.spec';
import './get-tree-path-of-node.spec';
import './has-non-empty-pseudo-elements.spec';
import './has-non-empty-shallow-text-nodes.spec';
import './is-attribute-node.spec';
import './is-child-of-element.spec';
import './is-child-of-tag.spec';
import './is-comment-node.spec';
import './is-conditional-comment-node.spec';
import './is-document-fragment-node.spec';
import './is-document-node.spec';
import './is-document-type-node.spec';
import './is-element-node.spec';
import './is-embed-element.spec';
import './is-heading-element.spec';
import './is-interactive-element.spec';
import './is-nesting-allowed.spec';
import './is-node.spec';
import './is-non-empty-text-node.spec';
import './is-one-of-tags.spec';
import './is-phrasing-element.spec';
import './is-processing-instruction-node.spec';
import './is-same-or-contains.spec';
import './is-sectioning-element.spec';
import './is-self-closing-element.spec';
import './is-tag.spec';
import './is-text-node.spec';
import './is-valid-selector.spec';
import './normalize-html.spec';
import './parse-document-from-string.spec';
import './parse-element-from-string.spec';
import './remove-set-of-nodes.spec';
import './serialize-document.spec';
import './serialize-document-type.spec';
import './traverse-node.spec';

describe('Anodum', () => {
  it('copyElementAttributes() is defined', () => {
    expect(copyElementAttributes).toBeDefined();
  });

  it('domParser is defined', () => {
    expect(typeof domParser).toBe('object');
  });

  it('getElementHeight() is defined', () => {
    expect(getElementHeight).toBeDefined();
  });

  it('getNodeByTreePath() is defined', () => {
    expect(getNodeByTreePath).toBeDefined();
  });

  it('getTreePathOfNode() is defined', () => {
    expect(getTreePathOfNode).toBeDefined();
  });

  it('hasNonEmptyPseudoElements() is defined', () => {
    expect(hasNonEmptyPseudoElements).toBeDefined();
  });

  it('hasNonEmptyShallowTextNodes() is defined', () => {
    expect(hasNonEmptyShallowTextNodes).toBeDefined();
  });

  it('isAttributeNode() is defined', () => {
    expect(isAttributeNode).toBeDefined();
  });

  it('isChildOfElement() is defined', () => {
    expect(isChildOfElement).toBeDefined();
  });

  it('isChildOfTag() is defined', () => {
    expect(isChildOfTag).toBeDefined();
  });

  it('isCommentNode() is defined', () => {
    expect(isCommentNode).toBeDefined();
  });

  it('isConditionalCommentNode() is defined', () => {
    expect(isConditionalCommentNode).toBeDefined();
  });

  it('isDocumentFragmentNode() is defined', () => {
    expect(isDocumentFragmentNode).toBeDefined();
  });

  it('isDocumentNode() is defined', () => {
    expect(isDocumentNode).toBeDefined();
  });

  it('isDocumentTypeNode() is defined', () => {
    expect(isDocumentTypeNode).toBeDefined();
  });

  it('isElementNode() is defined', () => {
    expect(isElementNode).toBeDefined();
  });

  it('isEmbedElement() is defined', () => {
    expect(isEmbedElement).toBeDefined();
  });

  it('isHeadingElement() is defined', () => {
    expect(isHeadingElement).toBeDefined();
  });

  it('isInteractiveElement() is defined', () => {
    expect(isInteractiveElement).toBeDefined();
  });

  it('isNestingAllowed() is defined', () => {
    expect(isNestingAllowed).toBeDefined();
  });

  it('isNode() is defined', () => {
    expect(isNode).toBeDefined();
  });

  it('isNonEmptyTextNode() is defined', () => {
    expect(isNonEmptyTextNode).toBeDefined();
  });

  it('isOneOfTags() is defined', () => {
    expect(isOneOfTags).toBeDefined();
  });

  it('isPhrasingElement() is defined', () => {
    expect(isPhrasingElement).toBeDefined();
  });

  it('isProcessingInstructionNode() is defined', () => {
    expect(isProcessingInstructionNode).toBeDefined();
  });

  it('isSectioningElement() is defined', () => {
    expect(isSectioningElement).toBeDefined();
  });

  it('isSameOrContains() is defined', () => {
    expect(isSameOrContains).toBeDefined();
  });

  it('isSelfClosingElement() is defined', () => {
    expect(isSelfClosingElement).toBeDefined();
  });

  it('isTag() is defined', () => {
    expect(isTag).toBeDefined();
  });

  it('isTextNode() is defined', () => {
    expect(isTextNode).toBeDefined();
  });

  it('isValidSelector() is defined', () => {
    expect(isValidSelector).toBeDefined();
  });

  it('nodeTypes is defined', () => {
    expect(typeof nodeTypes).toBe('object');
  });

  it('normalizeHTML() is defined', () => {
    expect(normalizeHTML).toBeDefined();
  });

  it('parseDocumentFromString() is defined', () => {
    expect(parseDocumentFromString).toBeDefined();
  });

  it('parseElementFromString() is defined', () => {
    expect(parseElementFromString).toBeDefined();
  });

  it('removeSetOfNodes() is defined', () => {
    expect(removeSetOfNodes).toBeDefined();
  });

  it('serializeDocument() is defined', () => {
    expect(serializeDocument).toBeDefined();
  });

  it('serializeDocumentType() is defined', () => {
    expect(serializeDocumentType).toBeDefined();
  });

  it('traverseNode() is defined', () => {
    expect(traverseNode).toBeDefined();
  });

  it('xmlSerializer is defined', () => {
    expect(typeof xmlSerializer).toBe('object');
  });
});
