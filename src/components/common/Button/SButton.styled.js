import React from 'react'
import styled from 'styled-components'

const SBtnBasic = styled.button`
  background-color: #7149c6;
  border: none;
  border-radius: 4.4rem;
  height: 2.8rem;
  min-width: 5.6rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.2rem;
`
const SBtnActive = styled.button`
  background-color: white;
  border: 0.01rem solid #767676;
  border-radius: 4.4rem;
  height: 2.8rem;
  min-width: 5.6rem;
  width: min(122.4rem, 100% - 6rem);
  color: #767676;
  font-size: 1.2rem;
`
export default function StyleSBtn() {
  return (
    <div>
      <SBtnBasic>팔로우</SBtnBasic>
      <SBtnActive>취소</SBtnActive>
    </div>
  )
}
