import isTag from './is-tag';
import isOneOfTags from './is-one-of-tags';

export default function (element) {
  if (isOneOfTags(element, ['audio', 'video'])) {
    return element.hasAttribute('controls');
  }

  if (isOneOfTags(element, ['img', 'object'])) {
    return element.hasAttribute('usemap');
  }

  if (isTag(element, 'input')) {
    return element.getAttribute('type') !== 'hidden';
  }

  return isOneOfTags(element, [
    'a',
    'button',
    'embed',
    'iframe',
    'keygen',
    'label',
    'select',
    'textarea',
  ]);
}
