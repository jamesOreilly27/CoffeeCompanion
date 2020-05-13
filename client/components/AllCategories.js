import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { SingleCategory } from '../components'
import { getAllCategories } from '../graphql'

class AllCategories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const categories = this.props.data.categories
    return (
      <div>
        {categories && categories.map(category => <SingleCategory category={category} key={category.id} />)}
      </div>
    )
  }
}

export default graphql(getAllCategories)(AllCategories)
