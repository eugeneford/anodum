const testDiv = document.createElement('div');

export default function (selector) {
  try {
    testDiv.querySelector(selector);
  }
  catch (e) {
    return false;
  }
  return true;
}
