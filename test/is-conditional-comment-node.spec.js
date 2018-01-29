import isConditionalComment from '../src/is-conditional-comment-node';

describe('isConditionalComment', () => {
  it('downlevel-hidden is a conditional comment', () => {
    const container = document.createElement('div');
    container.innerHTML = '<!--[if expression]> HTML <![endif]-->';
    const node = container.firstChild;
    const result = isConditionalComment(node);
    expect(result).toBe(true);
  });

  it('downlevel-revealed is a conditional comment', () => {
    const container = document.createElement('div');
    container.innerHTML = '<![if expression]> HTML <![endif]>';
    const node = container.firstChild;
    const result = isConditionalComment(node);
    expect(result).toBe(true);
  });

  it('standard html comment is not a conditional comment', () => {
    const container = document.createElement('div');
    container.innerHTML = '<!-- my comment -->';
    const node = container.firstChild;
    const result = isConditionalComment(node);
    expect(result).toBe(false);
  });

  it('object is not a conditional comment', () => {
    const node = document.createElement('div');
    const result = isConditionalComment(node);
    expect(result).toBe(false);
  });
});
