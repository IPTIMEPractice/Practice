import React from 'react';
import { LBtnBasic, LBtnDisabled } from './LButton.styled';

function StyleLBtn({ children, width }) {
  return <LBtnBasic width={width}>{children}</LBtnBasic>;
}

function LButton() {
  return (
    <div>
      <LBtnDisabled>다음</LBtnDisabled>
    </div>
  );
}

export { StyleLBtn, LButton };
