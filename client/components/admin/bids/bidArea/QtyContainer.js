import React from 'react'
import styled from 'styled-components'
import { PlusButton, MinusButton } from '../bidArea'

const Wrapper = styled.div`
  display: flex;
  height: 22px;
  width: 10vw;
  border: 1px solid #F8F8FF;
`

const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 33%;
`

const Quantity = styled(Element)`
  font-size: 11px;
  color: #F8F8FF;
`

const QtyContainer = ({ quantity, productId, bidId, laborRate, laborTotal, laborTime }) => (
  <Wrapper>
    <MinusButton qty={quantity} productId={productId} bidId={bidId} laborRate={laborRate} laborTime={laborTime} laborTotal={laborTotal} />
    <Quantity> {quantity} </Quantity>
    <PlusButton qty={quantity} productId={productId} bidId={bidId} laborRate={laborRate} laborTime={laborTime} laborTotal={laborTotal} />
  </Wrapper>
)

export default QtyContainer
