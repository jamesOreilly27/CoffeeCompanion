import React, { Component } from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { ProductCard } from '../components/product-card'

const getAllProducts = gql`
  {
    products {
      id
      name
      description
      image
      price
      categories {
        name
      }
    }

    currentUser {
      id
      email
    }
  }
`

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

class AllProducts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const products = this.props.data.products
    return (
      <Wrapper>
        <Title>
          Products
        </Title>
        <ProductContainer>
          {products && products.map(product => <ProductCard product={product} key={product.id} />)}
        </ProductContainer>
      </Wrapper>
    )
  }
}

export default graphql(getAllProducts)(AllProducts)
