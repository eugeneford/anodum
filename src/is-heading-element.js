import isOneOfTags from './is-one-of-tags';

export default function (element) {
  return isOneOfTags(element, [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]);
}
