import isTag from "./is-tag";

export default function(element, testTags){
  if (!(testTags instanceof Array)) {
    throw new TypeError("testTags is not an Array");
  }

  return testTags.findIndex(tag => isTag(element, tag)) > -1;
}
