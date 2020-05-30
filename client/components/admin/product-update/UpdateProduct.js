import React, { Component } from 'react'
import styled from 'styled-components'
import { getProductDetail } from '../../../graphql'
import { graphql } from 'react-apollo'
import { urlToName } from '../../helpers'

const Wrapper = styled.div`

`

const Container = styled.div`

`

class UpdateProduct extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const product = this.props.data.productDetails
    return (
      <Wrapper>
        {product &&
          <Container>
            Hello From UpdateProduct
          </Container>
        }
      </Wrapper>
    )
  }
}

export default graphql(getProductDetail, {
  options: props => ({
    variables: { name: urlToName(props.match.params.name) }
  })
})(UpdateProduct)
