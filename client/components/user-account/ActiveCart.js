import React from 'react'
import styled from 'styled-components'
import { Lineitem, ActiveCartHeader } from '../user-account'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ActiveCart = ({ cart }) => {
  return (
    <Wrapper>
      {console.log('ID', cart)}
      <ActiveCartHeader />
      {cart.lineitems.map(lineitem => <Lineitem lineitem={lineitem} />)}
    </Wrapper>
  )
}

export default ActiveCart
