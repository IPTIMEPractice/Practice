import React from 'react'
import styled from 'styled-components'

const LBtnBasic = styled.button`
  background-color: #7149c6;
  border: none;
  border-radius: 4.4rem;
  height: 4.4rem;
  min-width: 32.2rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.6rem;
`

const LBtnDisabled = styled.button`
  background-color: #ada2ff;

  border: none;
  border-radius: 4.4rem;
  height: 4.4rem;

  min-width: 32.2rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.6rem;
`

export default function StyleLBtn() {
  return (
    <div>
      <LBtnBasic>다음</LBtnBasic>
      <LBtnDisabled>다음</LBtnDisabled>
    </div>
  )
}
