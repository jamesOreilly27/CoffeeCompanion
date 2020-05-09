import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getProductDetail = gql`
query($id: Int!) {
 productDetails(id: $id) {
   name
   description
   price
   inventory
   reviews {
     content
     rating
   }
 }
}
`

class ProductDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Hello From ProductDetail
      </div>
    )
  }
}

export default graphql(getProductDetail, {
  options: props => ({
    variables: { id: parseInt(props.match.params.id) }
  })
})(ProductDetail)
