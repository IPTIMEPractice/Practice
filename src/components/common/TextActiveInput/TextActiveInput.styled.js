import { styled } from 'styled-components';

export const InputEmail = styled.div`
  width: 32.2rem;
  height: 4.8rem;
  border-bottom: #dbdbdb 0.1rem solid;

  label {
    display: block;
    height: 50%;
    width: 100%;
    color: #767676;
    font-size: 1.5rem;
  }
  input {
    height: 50%;
    width: 100%;
  }
  ::placeholder {
    color: #d6d6d6;
    font-size: 1.4rem;
  }
`;
