import React from 'react'
import styled from 'styled-components'
import { Lineitem, ActiveCartHeader } from '../user-account'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ActiveCart = ({ activeCart }) => {
  return (
    <Wrapper>
      {console.log('CART', activeCart)}
      <ActiveCartHeader />
      {activeCart.lineitems.map(lineitem => <Lineitem key={lineitem.id} lineitem={lineitem} />)}
    </Wrapper>
  )
}

export default ActiveCart
