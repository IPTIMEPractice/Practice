import React from 'react'
import styled from 'styled-components'

const MBtnBasic = styled.button`
  background-color: #7149c6;
  border-radius: 4.4rem;
  height: 3.4rem;
  min-width: 12rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.4rem;
`

const MBtnDisabled = styled.button`
  background-color: #ada2ff;
  border-radius: 4.4rem;
  height: 3.4rem;
  min-width: 12rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.4rem;
`

const MBtnActive = styled.button`
  background-color: #ffffff;
  border: 0.01rem solid #767676;
  border-radius: 4.4rem;
  height: 3.4rem;
  min-width: 12rem;
  width: min(122.4rem, 100% - 6rem);
  color: #767676;
  font-size: 1.4rem;
`

export default function StyleMBtn() {
  return (
    <div>
      <MBtnBasic>팔로우</MBtnBasic>
      <MBtnDisabled>팔로우</MBtnDisabled>
      <MBtnActive>언팔로우</MBtnActive>
    </div>
  )
}
