import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled-components'

const findGrandTotal = (subtotal, install1, install2) => {
  return subtotal + install1 + install2
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 25vw;
  height: 180px;
  border: 1px solid black;
`

const SubtotalItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  font-size: 12px;
  width: 70%;
`

const GrandTotal = styled(SubtotalItemContainer)`
  font-size: 14px;
  border-top: 1px solid #0D0D0B;
`

const Total = styled.div`
  
`

const install = 109

const CartSubtotal = ({ subtotal }) => (
  <Wrapper>
    <SubtotalItemContainer>
      <div>Subtotal</div>
      <div>{`$${subtotal}`}</div>
    </SubtotalItemContainer>
    <SubtotalItemContainer>
      <div>Installation</div>
      <div>{`$${install}`}</div>
    </SubtotalItemContainer>
    <SubtotalItemContainer>
      <div>Installation</div>
      <div>{`$${install}`}</div>
    </SubtotalItemContainer>
    <GrandTotal>
      <div>Grand Total</div>
      <Total>{`$${findGrandTotal(subtotal, install, install)}`}</Total>
    </GrandTotal>
    <Button backgroundColor="#202020" color="#F8F8FF">
      Checkout
    </Button>
  </Wrapper>
)

export default CartSubtotal
