import React from 'react';
import * as S from './Post.styled';

import userImg from '../../../assets/img/basic-profile.svg';

export default function Post() {
  return (
    <S.PostArticle>
      <S.UserStyled>
        <S.UserImage src={userImg} alt="사용자 이미지" />
        <S.UserDetails>
          <S.UserName>사용자 이름</S.UserName>
          <S.UserId>@ 사용자 아이디</S.UserId>
        </S.UserDetails>
      </S.UserStyled>
      <S.PostContainer>
        <S.PostText>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </S.PostText>
        <S.PostImage src="https://picsum.photos/200" alt="게시물 이미지" />
        <S.PostButtons>
          <S.PostLike />
          <S.PostSpan>58</S.PostSpan>
          <S.PostMessage />
          <S.PostSpan>12</S.PostSpan>
        </S.PostButtons>
        <S.PostDate>2020년 10월 21일</S.PostDate>
      </S.PostContainer>
      <S.PostMore />
    </S.PostArticle>
  );
}
