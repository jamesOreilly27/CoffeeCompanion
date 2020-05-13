import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductCard } from '../components/product-card'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 98vw;
`

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  chooseTitle() {
    let title 
    this.props.category ? title = this.props.category.name : title = 'Products'
    return title
  }

  render() {
    const products = this.props.products
    return (
      <Wrapper>
        <Title>
          {this.chooseTitle()}
        </Title>
        <ProductContainer>
          {products && products.map(product => <ProductCard product={product} key={product.id} />)}
        </ProductContainer>
      </Wrapper>
    )
  }
}

export default ProductList
