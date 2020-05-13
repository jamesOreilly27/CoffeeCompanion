import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductList } from '../../components'
import { graphql } from 'react-apollo'
import { getOneCategory } from '../../graphql'

const Wrapper = styled.div`

`

const Products = styled.div`

`

class CategoryHome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const category = this.props.data.singleCategory
    return (
      <Wrapper>
        <Products>
          {category && <ProductList products={category.products} category={category} /> }
        </Products>
      </Wrapper>
    )
  }
}

export default graphql(getOneCategory, {
  options: props => ({
    variables: { id: parseInt(props.match.params.id) }
  })
})(CategoryHome)
