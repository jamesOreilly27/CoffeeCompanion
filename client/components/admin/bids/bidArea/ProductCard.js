import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 7vh;
`

const ProductCard = ({ product }) => (
  <Wrapper>
    {product.name}
  </Wrapper>
)

export default ProductCard
