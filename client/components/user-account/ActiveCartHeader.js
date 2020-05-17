import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 90vw;
`

const HeadersContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`

const Title = styled.h3`
  margin: 0;
`

const Price = styled.div`
  font-size: 12px;
`

const Quantity = styled.div`
  font-size: 12px;
`

const Remove = styled.div`
  color: #EAEDED
`

const ActiveCartHeader = () => {
  return (
    <Wrapper>
      <Title> Your Cart </Title>
      <HeadersContainer>
        <Quantity> Qty </Quantity>
        <Price> Price </Price>
        <Remove>Remove</Remove>
      </HeadersContainer>
    </Wrapper>
  )
}

export default ActiveCartHeader
