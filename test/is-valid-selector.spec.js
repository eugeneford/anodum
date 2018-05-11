import isValidSelector from '../src/is-valid-selector';

describe('isValidSelector', () => {
  describe('when selector is valid', () => {
    it('should return true', () => {
      expect(isValidSelector('div.some-class#id')).toBeTruthy();
    });
  });

  describe('when selector is invalid', () => {
    it('should return true', () => {
      expect(isValidSelector('some!invalid*selector')).toBeFalsy();
    });
  });
});
