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

/*********** 
 * You were about to go back and do the graphql for another part of the database 
 * Start tomorrow with Categories and work on the association between category and product graphql queries
***********/
