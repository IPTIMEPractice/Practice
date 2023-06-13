import { styled } from 'styled-components';

export const Alert = styled.div`
  width: 25.2rem;
  height: 11rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    padding-top: 2.2rem;
    flex-grow: 1;
    font-size: 1.6rem;
    font-weight: 500;
    border-bottom: 0.05rem solid #dbdbdb;
  }

  button {
    width: 12.6rem;
    height: 4.6rem;
    font-size: 1.4rem;

    &.cancel {
      border-right: 0.05rem solid #dbdbdb;
    }
    &.delete {
      color: #f26e22;
      font-weight: 500;
    }
  }
`;
