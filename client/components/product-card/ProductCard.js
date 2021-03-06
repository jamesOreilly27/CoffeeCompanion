import React from 'react'
import styled from 'styled-components'
import { Image, Info } from '../product-card'
import { Link } from 'react-router-dom'
import { nameToUrl } from '../helpers'

const Wrapper = styled(Link)`
  @media(max-width: 960px) {
    flex: 0 0 32.5%
  }
  @media(max-width: 640px) {
    flex: 0 0 49%;
  }
  @media(max-width: 450px) {
    flex: 0 0 85%;
    margin: 0 7.5%;
  }
  flex: 0 0 25%
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  background-color: #FFF;
  border: 2px solid #EAEDED;
  height: 200px;
`

const ProductCard = ({ product }) => (
  <Wrapper to={`/products/${nameToUrl(product.name)}`}>
    <Image url={product.image} />
    <Info product={product} />
  </Wrapper>
)

export default ProductCard
