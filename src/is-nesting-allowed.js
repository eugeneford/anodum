import isElementNode from './is-element-node';
import isPhrasingElement from './is-phrasing-element';
import isTag from './is-tag';
import isOneOfTags from './is-one-of-tags';
import isSectioningElement from './is-sectioning-element';
import isHeadingElement from './is-heading-element';
import isInteractiveElement from './is-interactive-element';

export default function (element, containerElement) {
  if (!isElementNode(element)) {
    throw new TypeError('element is not a type of Element');
  }

  if (!isElementNode(containerElement)) {
    throw new TypeError('containerElement is not a type of Element');
  }

  switch (containerElement.tagName.toLowerCase()) {
    case 'p':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'pre':
    case 'em':
    case 'strong':
    case 'small':
    case 's':
    case 'cite':
    case 'q':
    case 'abbr':
    case 'data':
    case 'time':
    case 'code':
    case 'var':
    case 'samp':
    case 'kbd':
    case 'sub':
    case 'sup':
    case 'i':
    case 'b':
    case 'u':
    case 'mark':
    case 'bdi':
    case 'bdo':
    case 'span':
    case 'output':
    case 'legend':
      return isPhrasingElement(element);

    case 'dfn':
      return isPhrasingElement(element) && !isTag(element, 'dfn');

    case 'object':
      return isTag(element, 'param');

    case 'audio':
    case 'video':
      if (containerElement.hasAttribute('src')) {
        return isTag(element, 'track');
      }
      return isOneOfTags(element, ['source', 'track']);

    case 'html':
      return isOneOfTags(element, ['head', 'body']);

    case 'nav':
    case 'aside':
      return !isTag(element, 'main');

    case 'ol':
    case 'ul':
      return isTag(element, 'li');

    case 'dt':
      return !isOneOfTags(element, ['header', 'footer']) && !isSectioningElement(element) && !isHeadingElement(element);

    case 'dl':
      return isOneOfTags(element, ['dt', 'dd']);

    case 'header':
    case 'footer':
      return !isOneOfTags(element, ['main', 'header', 'footer']);

    case 'address':
      return !isOneOfTags(element, ['address', 'header', 'footer']) && !isHeadingElement(element) && !isSectioningElement(element);

    case 'hr':
    case 'img':
    case 'iframe':
    case 'embed':
    case 'param':
    case 'source':
    case 'track':
    case 'area':
    case 'title':
    case 'base':
    case 'link':
    case 'meta':
    case 'style':
    case 'wbr':
    case 'br':
    case 'col':
    case 'script':
    case 'template':
    case 'canvas':
    case 'input':
    case 'textarea':
    case 'keygen':
      return false;

    case 'form':
      return !isTag(element, 'form');

    case 'label':
      return isPhrasingElement(element) && !isTag(element, 'label');

    case 'datalist':
      return isPhrasingElement(element) || isTag(element, 'option');

    case 'progress':
      return isPhrasingElement(element) && !isTag(element, 'progress');

    case 'meter':
      return isPhrasingElement(element) && !isTag(element, 'meter');

    case 'select':
      return isOneOfTags(element, ['option', 'optgroup', 'script', 'template']);

    case 'optgroup':
      return isTag(element, 'option');

    case 'button':
      return isPhrasingElement(element) && !isInteractiveElement(element);

    case 'a':
      return !isInteractiveElement(element);

    case 'tbody':
    case 'thead':
    case 'tfoot':
      return isOneOfTags(element, ['tr', 'script', 'template']);

    case 'caption':
      return !isTag(element, 'table');

    case 'tr':
      return isOneOfTags(element, ['td', 'th', 'script', 'template']);

    case 'th':
      return !isOneOfTags(element, ['header', 'footer']) && !isSectioningElement(element) && !isHeadingElement(element);

    case 'table':
      return isOneOfTags(element, ['caption', 'colgroup', 'thead', 'tfoot', 'tbody', 'tr', 'script', 'template']);
    default:
      return true;
  }
}
