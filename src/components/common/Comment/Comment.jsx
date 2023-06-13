import React from 'react';
import basicProfile from '../../../../src/assets/img/basic-profile.svg';
import { CommentDiv, Commentinp, CommentBtn } from './Comment.styled';

export default function Comment() {
  return (
    <CommentDiv>
      <img src={basicProfile} />
      <Commentinp placeholder="댓글 입력하기..." />
      <CommentBtn>게시</CommentBtn>
    </CommentDiv>
  );
}
