import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getAllCategories = gql`
{
  categories {
    name
    description
    products {
      name
      description
      price
    }
  }
}
`

class AllCategories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Hello From AllCategories
      </div>
    )
  }
}

export default graphql(getAllCategories)(AllCategories)
