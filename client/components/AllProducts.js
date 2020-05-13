import React, { Component } from 'react'
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

class AllProducts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const products = this.props.data.products
    console.log(products)
    return (
      <div>
        {products && products.map(product => <ProductCard product={product} key={product.id} />)}
      </div>
    )
  }
}

export default graphql(getAllProducts)(AllProducts)
