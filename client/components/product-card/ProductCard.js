import React from 'react'
import styled from 'styled-components'
import { Image } from '../product-card'
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
  border: 3px solid #EDEDF2;
  height: 300px;
`

const ProductCard = ({ product }) => (
  <Wrapper to={`/product/${product.id}`}>
    <Image url={product.image} />
  </Wrapper>
)

export default ProductCard
