import React from 'react'
import styled from 'styled-components'
import { Lineitem, ActiveCartHeader } from '../user-account'

const findSubtotal = lineitems => {
  let sum = 0
  lineitems.forEach(item => { sum += item.price })
  return sum
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ActiveCart = ({ activeCart }) => {
  return (
    <Wrapper>
      <ActiveCartHeader />
      {activeCart.lineitems.map(lineitem => <Lineitem key={lineitem.id} lineitem={lineitem} />)}
    </Wrapper>
  )
}

export default ActiveCart
