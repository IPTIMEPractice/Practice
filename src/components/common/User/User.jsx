import React from 'react'
import * as S from './User.styled'
import userImg from '../../../assets/img/basic-profile.svg'

export default function User() {
  return (
    <S.UserStyled>
      <S.UserImage src={userImg} alt="사용자 이미지" />
      <S.UserDetails>
        <S.UserName>사용자 이름</S.UserName>
        <S.UserId>@ 사용자 아이디</S.UserId>
      </S.UserDetails>
      <button>팔로우</button>
    </S.UserStyled>
  )
}
