import React from 'react';
import * as S from './DeleteAlert.styled';

export default function DeleteAlert() {
  return (
    <S.Alert>
      <p>상품을 삭제할까요?</p>
      <div>
        <button className="cancel">취소</button>
        <button className="delete">삭제</button>
      </div>
    </S.Alert>
  );
}
