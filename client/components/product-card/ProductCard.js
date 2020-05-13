import React from 'react'
import styled from 'styled-components'
import { Image, Info } from '../product-card'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  @media(max-width: 960px) {
    flex: 0 0 33%
  }
  @media(max-width: 640px) {
    flex: 0 0 50%;
  }
  @media(max-width: 450px) {
    flex: 0 0 85%;
    margin: 0 7.5%;
  }
  flex: 0 0 25%
  border: 1px solid red;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ProductCard = ({ product }) => (
  <Wrapper to={`/product/${product.id}`}>
    <Image url={product.image} />
    <Info product={product} />
  </Wrapper>
)

export default ProductCard
