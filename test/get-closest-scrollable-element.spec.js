import getClosestScrollableElement from '../src/get-closest-scrollable-element';

describe('getClosestScrollableElement', () => {
  describe('when rootNode is not a Node', () => {
    it('should throw a TypeError', () => {
      expect(() => getClosestScrollableElement(1)).toThrowError(TypeError);
    });
  });

  describe('when rootNode is not scrollable', () => {
    describe('when some parent of the rootNode is scrollable', () => {
      describe('when that node has overflow:auto', () => {
        it('should return that node', () => {
          const container = document.createElement('div');
          container.style.overflow = 'auto';
          container.style.height = '100px';
          container.innerHTML = '<div style="height: 200px"></div>';
          document.body.insertAdjacentElement('afterbegin', container);

          const scrollableElement = getClosestScrollableElement(container.firstChild);
          expect(scrollableElement).toBe(container);

          document.body.removeChild(container);
        });
      });

      describe('when that node has overflow:scroll', () => {
        it('should return that node', () => {
          const container = document.createElement('div');
          container.style.overflow = 'scroll';
          container.style.height = '100px';
          container.innerHTML = '<div style="height: 200px"></div>';
          document.body.insertAdjacentElement('afterbegin', container);

          const scrollableElement = getClosestScrollableElement(container.firstChild);
          expect(scrollableElement).toBe(container);

          document.body.removeChild(container);
        });
      });

      describe('when that node has overflow:scroll and clientHeight equals scrollHeight', () => {
        describe('when use clientHeight is set to false', () => {
          it('should return that node', () => {
            const container = document.createElement('div');
            const useClientHeight = false;
            container.style.overflow = 'scroll';
            container.style.height = '100px';
            container.innerHTML = '<div style="height: 50px"></div>';
            const { firstChild } = container;
            document.body.insertAdjacentElement('afterbegin', container);

            const scrollableElement = getClosestScrollableElement(firstChild, useClientHeight);
            expect(scrollableElement).toBe(container);

            document.body.removeChild(container);
          });
        });

        describe('when use clientHeight is set to false', () => {
          it('should return the default scrolling element', () => {
            const container = document.createElement('div');
            const useClientHeight = true;
            container.style.overflow = 'scroll';
            container.style.height = '100px';
            container.innerHTML = '<div style="height: 50px"></div>';
            const { firstChild } = container;
            document.body.insertAdjacentElement('afterbegin', container);

            const scrollableElement = getClosestScrollableElement(firstChild, useClientHeight);
            expect(scrollableElement).toBe(document);

            document.body.removeChild(container);
          });
        });
      });

      describe('when that node does not have any of above', () => {
        it('should return the default scrolling element', () => {
          const container = document.createElement('div');
          container.style.height = '100px';
          container.innerHTML = '<div style="height: 200px"></div>';
          document.body.insertAdjacentElement('afterbegin', container);

          const scrollableElement = getClosestScrollableElement(container.firstChild);
          expect(scrollableElement).toBe(document);

          document.body.removeChild(container);
        });
      });
    });

    describe('when there are no scrollable parents', () => {
      it('should return the default scrolling element', () => {
        const container = document.createElement('div');
        document.body.insertAdjacentElement('afterbegin', container);

        const scrollableElement = getClosestScrollableElement(container);
        expect(scrollableElement).toBe(document);

        document.body.removeChild(container);
      });
    });
  });

  describe('when rootNode is scrollable', () => {
    describe('when that node has overflow:auto', () => {
      it('should return that node', () => {
        const container = document.createElement('div');
        container.style.overflow = 'auto';
        container.style.height = '100px';
        container.innerHTML = '<div style="height: 200px"></div>';
        document.body.insertAdjacentElement('afterbegin', container);

        const scrollableElement = getClosestScrollableElement(container);
        expect(scrollableElement).toBe(container);

        document.body.removeChild(container);
      });
    });

    describe('when that node has overflow:scroll', () => {
      it('should return that node', () => {
        const container = document.createElement('div');
        container.style.overflow = 'scroll';
        container.style.height = '100px';
        container.innerHTML = '<div style="height: 200px"></div>';
        document.body.insertAdjacentElement('afterbegin', container);

        const scrollableElement = getClosestScrollableElement(container);
        expect(scrollableElement).toBe(container);

        document.body.removeChild(container);
      });
    });

    describe('when that node does not have any of above', () => {
      it('should return the default scrolling element', () => {
        const container = document.createElement('div');
        container.style.height = '100px';
        container.innerHTML = '<div style="height: 200px"></div>';
        document.body.insertAdjacentElement('afterbegin', container);

        const scrollableElement = getClosestScrollableElement(container);
        expect(scrollableElement).toBe(document);

        document.body.removeChild(container);
      });
    });
  });
});
