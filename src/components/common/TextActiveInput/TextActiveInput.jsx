import React from 'react';
import { InputEmail } from './TextActiveInput.styled';

export default function TextActiveInput() {
  return (
    <div>
      <InputEmail>
        <label>이메일</label>
        <input type="text" placeholder="ip-time@gmail.com" required />
      </InputEmail>
    </div>
  );
}
