import React from 'react'
import styled from 'styled-components'
import { BidTypeContainer } from '../bids'
import { getAllBids } from '../../../graphql'
import { graphql } from 'react-apollo'

const Wrapper = styled.div`
  width: 98vw;
  display: flex;
  border: 2px dotted black;
  height: 50vh;
  justify-content: space-around;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const filterBids = (filterType, bids) => {
  return bids.filter(bid => bid.status === filterType)
}

const Bids = props => (
  <Wrapper>
    {props.data.bids &&
      <Container>
        <BidTypeContainer title="Open" bids={filterBids("open", props.data.bids)} />
        <BidTypeContainer title="Pending" bids={filterBids("pending", props.data.bids)} />
        <BidTypeContainer title="Approved" bids={filterBids("approved", props.data.bids)} />
      </Container>
    }
  </Wrapper>
)

export default graphql(getAllBids)(Bids)
