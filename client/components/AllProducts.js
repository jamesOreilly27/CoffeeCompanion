import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getAllProducts = gql`
  {
    products {
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
    return (
      <div>
        Hello From All Products
      </div>
    )
  }
}

export default graphql(getAllProducts)(AllProducts)
