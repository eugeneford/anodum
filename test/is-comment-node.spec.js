import isCommentNode from '../src/is-comment-node';

describe('isCommentNode', () => {
  it('comment is a CommentNode', () => {
    const node = document.createComment('content');
    const result = isCommentNode(node);
    expect(result).toBe(true);
  });

  it('element is not a Comment Node', () => {
    const node = document.createElement('div');
    const result = isCommentNode(node);
    expect(result).toBe(false);
  });
});
