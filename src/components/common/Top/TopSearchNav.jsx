import React from 'react'
import styled from 'styled-components'
import arrowLeft from '../../../assets/img/icon-arrow-left.svg'

const TopDiv = styled.div`
  width: 39rem;
  height: 4.8rem;
  border: 1px solid;
  display: flex;
  box-sizing: border-box;
  padding: 0 1.6rem;
  gap: 2rem;
`
const ArrowLeftBtn = styled.button`
  margin: 1.3rem 0;
  border: none;
  width: 2.2rem;
  height: 2.2rem;
  background: url(${arrowLeft}) no-repeat 0 0 / contain;
`
const SearchInp = styled.input`
  margin: 0;
  padding: 0;
  border: none;
  background: #f2f2f2;
  border-radius: 3.2rem;
  width: 31.6rem;
  height: 3.2rem;
  margin: 0.8rem 0;
  padding-left: 1.6rem;

  &::placeholder {
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;

    /* C4C4C4 */

    color: #c4c4c4;
  }
`
export default function TopBasicNav() {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <SearchInp placeholder="계정 검색" />
    </TopDiv>
  )
}
