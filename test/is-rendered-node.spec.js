import isRenderedNode from '../src/is-rendered-node';

describe('isRenderedNode', () => {
  describe('when node is not a Node', () => {
    it('should return false', () => {
      expect(isRenderedNode(1)).toBeFalsy();
    });
  });

  describe('when node is a DocumentNode', () => {
    describe('when document is rendered', () => {
      it('should return true', () => {
        expect(isRenderedNode(document)).toBeTruthy();
      });
    });

    describe('when document is not rendered', () => {
      it('should return false', () => {
        const documentNode = document.implementation.createHTMLDocument();
        expect(isRenderedNode(documentNode)).toBeFalsy();
      });
    });
  });

  describe('when node is any other Node', () => {
    describe('when node is a part of rendered document, but is not rendered itself', () => {
      it('should return false', () => {
        const element = document.createElement('div');
        expect(isRenderedNode(element)).toBeFalsy();
      });
    });

    describe('when node a rendered node', () => {
      it('should return true', () => {
        expect(isRenderedNode(document.body)).toBeTruthy();
      });
    });

    describe('when node is not a rendered node', () => {
      it('should return false', () => {
        const documentNode = document.implementation.createHTMLDocument();
        const element = documentNode.createElement('div');
        expect(isRenderedNode(element)).toBeFalsy();
      });
    });
  });
});
