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
  background-color: #FFF;
  border-radius: 4px;
  padding: 10px;
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

const findInstallionCost = subtotal => {
  if(subtotal) return 109
  return 0
}

const CartSubtotal = ({ subtotal }) => (
  <Wrapper>
    <SubtotalItemContainer>
      <div>Subtotal</div>
      <div>{`$${subtotal}`}</div>
    </SubtotalItemContainer>
    <SubtotalItemContainer>
      <div>Installation</div>
      <div>{`$${findInstallionCost(subtotal)}`}</div>
    </SubtotalItemContainer>
    <SubtotalItemContainer>
      <div>Installation</div>
      <div>{`$${findInstallionCost(subtotal)}`}</div>
    </SubtotalItemContainer>
    <GrandTotal>
      <div>Grand Total</div>
      <Total>{`$${findGrandTotal(subtotal, findInstallionCost(subtotal), findInstallionCost(subtotal))}`}</Total>
    </GrandTotal>
    <Button backgroundColor="#202020" color="#F8F8FF">
      Checkout
    </Button>
  </Wrapper>
)

export default CartSubtotal
