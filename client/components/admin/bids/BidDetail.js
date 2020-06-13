import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'

const Wrapper = styled.div`

`

const Container = styled.div`

`

const BidDetail = props => (
  <Wrapper>
    {props.data.bidDetails &&
      <Container>
        {console.log(props.data.bidDetails)}
        Hello From Bid Detail
      </Container>
    }
  </Wrapper>
)

export default graphql(getBidDetails, {
  options: props => ({
    variables: { id: parseInt(props.match.params.id) }
  })
})(BidDetail)
