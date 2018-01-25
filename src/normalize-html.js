export default function (html) {
  if (typeof html !== "string") {
    throw new TypeError("html is not a string");
  }
  return html.trim().replace(/[\r\n\t]/g, " ");
}
