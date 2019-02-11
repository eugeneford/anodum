export default function (html) {
  if (typeof html !== 'string') {
    throw new TypeError('html is not a string');
  }
  return html.trim()
    .replace(/[\r\uFEFF\u2060]/g, '')
    .replace(/[\t\u202F\u2007]/g, ' ');
}
