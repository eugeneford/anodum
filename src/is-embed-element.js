import isOneOfTags from './is-one-of-tags';

export default function (element) {
  return isOneOfTags(element, [
    'audio',
    'canvas',
    'embed',
    'iframe',
    'img',
    'math',
    'object',
    'svg',
    'video',
  ]);
}
