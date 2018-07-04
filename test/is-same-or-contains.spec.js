import isSameOrContains from '../src/is-same-or-contains';

describe('isSameOrContains', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  describe('when one of elements is missing', () => {
    it('should return `false`', () => {
      expect(isSameOrContains(element, null)).toBe(false);
      expect(isSameOrContains(null, element)).toBe(false);
      expect(isSameOrContains(null, null)).toBe(false);
    });
  });

  describe('when both elements are presented', () => {
    describe('when test element is target element', () => {
      it('should return `true`', () => {
        expect(isSameOrContains(element, element)).toBe(true);
      });
    });

    describe('when test element is not target element', () => {
      let testElement;

      beforeEach(() => {
        testElement = document.createElement('div');
      });

      describe('when element does not contain test element', () => {
        it('should return `false`', () => {
          expect(isSameOrContains(element, testElement)).toBe(false);
        });
      });

      describe('when element contains test element', () => {
        it('should return `true`', () => {
          element.appendChild(testElement);

          expect(isSameOrContains(element, testElement)).toBe(true);
        });
      });
    });
  });
});
