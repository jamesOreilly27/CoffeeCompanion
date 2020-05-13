import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 160px;
  margin-left: 10px;
`

const Name = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #2D2D2D;
`

const Price = styled.div`
  color: #737373;
`

const Info = ({ product }) => {
  return (
    <Wrapper>
      <Name>
        {product.name}
      </Name>
      <Price>
        {`$${product.price}`}
      </Price>
    </Wrapper>
  )
}

export default Info
