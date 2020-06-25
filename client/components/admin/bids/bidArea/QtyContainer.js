import React from 'react'
import styled from 'styled-components'
import { PlusButton, MinusButton } from '../bidArea'

const Wrapper = styled.div`
  display: flex;
  height: 22px;
  width: 10vw;
  border: 1px solid #000;
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
`

const QtyContainer = ({ quantity, productId, bidId}) => (
  <Wrapper>
    <MinusButton qty={quantity} productId={productId} bidId={bidId} />
    <Quantity> {quantity} </Quantity>
    <PlusButton qty={quantity} productId={productId} bidId={bidId} />
  </Wrapper>
)

export default QtyContainer
