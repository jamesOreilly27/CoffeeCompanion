import React from 'react'
import styled from 'styled-components'
import { Lineitem, ActiveCartHeader, CartSubtotal } from '../user-account'

const findSubtotal = lineitems => {
  let sum = 0
  lineitems.forEach(item => { sum += ( item.price * item.quantity ) })
  return sum
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ActiveCart = ({ activeCart }) => {
  return (
    <Wrapper>
      <CartContainer>
        <ActiveCartHeader />
        {activeCart.lineitems.map(lineitem => <Lineitem key={lineitem.id} lineitem={lineitem} />)}
      </CartContainer>
      <CartSubtotal subtotal={findSubtotal(activeCart.lineitems)}/>
    </Wrapper>
  )
}

export default ActiveCart
