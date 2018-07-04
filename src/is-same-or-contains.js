export default function (element, testElement) {
  if (!element || !testElement) return false;
  return element === testElement || element.contains(testElement);
}
