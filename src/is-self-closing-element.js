import isOneOfTags from './is-one-of-tags';

export default function (element) {
  return isOneOfTags(element, [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]);
}
