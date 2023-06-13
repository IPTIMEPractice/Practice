import styled from 'styled-components'

const CommentDiv = styled.div`
  display: flex;
  align-items: center;
  width: 39rem;
  height: 61px;
  padding: 0 16px;
  box-sizing: border-box;
  color: #c4c4c4;
  font-size: 14px;
  gap: 18px;
`;

const CommentInp = styled.input`
  flex-grow: 1;

  &::placeholder{
    color: #c4c4c4;
  }
`;

const CommentBtn = styled.button`
  color: #c4c4c4;
  cursor: pointer;
`;

export { CommentDiv, CommentInp, CommentBtn };