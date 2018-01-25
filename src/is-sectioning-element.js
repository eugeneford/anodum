import isOneOfTags from "./is-one-of-tags";

export default function (element) {
  return isOneOfTags(element, [
    "article",
    "aside",
    "nav",
    "section"
  ]);
}
