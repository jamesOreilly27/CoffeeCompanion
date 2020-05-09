import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { SingleProduct } from '../components'

const getAllProducts = gql`
  {
    products {
      id
      name
      description
      categories
    }
  }
`

class AllProducts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const products = this.props.data.products
    return (
      <div>
        {products && products.map(product => <SingleProduct product={product} key={product.id}/>)}
      </div>
    )
  }
}

export default graphql(getAllProducts)(AllProducts)
