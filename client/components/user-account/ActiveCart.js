import React from 'react'
import styled from 'styled-components'
import { Lineitem, ActiveCartHeader, CartSubtotal } from '../user-account'

const findSubtotal = lineitems => {
  let sum = 0
  lineitems.forEach(item => { sum += ( item.price * item.quantity ) })
  return sum
}

const isEmpty = lineitems => !lineitems.length

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #FFF;
  border-radius: 4px;
  padding: 10px 20px 20px 20px;
`

const ActiveCart = ({ activeCart }) => (
  <Wrapper>
    <CartContainer>
      <ActiveCartHeader isEmpty={isEmpty(activeCart.lineitems)} />
      {activeCart.lineitems.map(lineitem => <Lineitem key={lineitem.id} lineitem={lineitem} />)}
    </CartContainer>
    <CartSubtotal subtotal={findSubtotal(activeCart.lineitems)}/>
  </Wrapper>
)

export default ActiveCart
