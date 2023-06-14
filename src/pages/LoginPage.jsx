import React from 'react';
import TextActiveInput from '../components/common/TextActiveInput/TextActiveInput';
import LButton from '../components/common/Button/LButton';

export default function LoginPage() {
  return (
    <div className="LoginPageWrap">
      <h2>로그인</h2>
      <div className="TextInputBox">
        <TextActiveInput type="email">이메일</TextActiveInput>
        <TextActiveInput type="password">비밀번호</TextActiveInput>
      </div>
      <LButton></LButton>
    </div>
  );
}
