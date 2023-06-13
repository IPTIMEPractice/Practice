import React from 'react'
import styled from 'styled-components'

const MsBtnBasic = styled.button`
  background-color: #7149c6;
  border-radius: 4.4rem;
  height: 3.2rem;
  min-width: 9rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.4rem;
`
const MsBtnDisabled = styled.button`
  background-color: #ada2ff;
  border-radius: 4.4rem;
  height: 3.2rem;
  min-width: 9rem;
  width: min(122.4rem, 100% - 6rem);
  color: white;
  font-size: 1.4rem;
`
export default function StyleMsBtn() {
  return (
    <div>
      <MsBtnBasic>저장</MsBtnBasic>
      <MsBtnDisabled>저장</MsBtnDisabled>
    </div>
  )
}
