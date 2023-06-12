import React from 'react'
import styled from 'styled-components'
import arrowLeft from '../../../assets/img/icon-arrow-left.svg'
import optionImg from '../../../assets/img/icon-more-vertical.svg'

const TopDiv = styled.div`
  width: 390px;
  height: 48px;
  border: 1px solid;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 13px 16px;
`
const ArrowLeftBtn = styled.button`
  background-color: inherit;
  border: none;
  width: 22px;
  height: 22px;
  background-image: url(${arrowLeft});
`
const OptionBtn = styled.button`
  background-color: inherit;
  border: none;
  width: 24px;
  height: 24px;
  background-image: url(${optionImg});
`
export default function TopBasicNav() {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <OptionBtn />
    </TopDiv>
  )
}
