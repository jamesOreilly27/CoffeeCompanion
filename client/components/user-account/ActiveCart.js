import React from 'react'
import styled from 'styled-components'
import { Lineitem, ActiveCartHeader } from '../user-account'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ActiveCart = ({ order }) => {
  return (
    <Wrapper>
      {console.log(order)}
      <ActiveCartHeader />
      {order.lineitems.map(lineitem => <Lineitem lineitem={lineitem} />)}
    </Wrapper>
  )
}

export default ActiveCart
