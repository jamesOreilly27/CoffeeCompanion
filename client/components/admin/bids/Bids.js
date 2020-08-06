import React from 'react'
import styled from 'styled-components'
import { BidTypeContainer, StartButton } from '../bids'
import { Title } from '../../styled-components'
import { getAllBids } from '../../../graphql'
import { graphql } from 'react-apollo'

const Wrapper = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  justify-content: space-around;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99%;
  background-color: #373738;
  margin-bottom: 5px;
  border-radius: 4px;
`

const BidTitle = styled(Title)`
  margin-left: 2vw;
`

const filterBids = (filterType, bids) => {
  return bids.filter(bid => bid.status === filterType)
}

const Bids = ({ user, data }) => (
  <Wrapper>
    <Header>
      <BidTitle>
        Bids
      </BidTitle>
      <StartButton user={user} />
    </Header>
    {data.bids &&
      <Container>
        <BidTypeContainer title="Open" bids={filterBids("open", data.bids)} />
        <BidTypeContainer title="Pending" bids={filterBids("pending", data.bids)} />
        <BidTypeContainer title="Approved" bids={filterBids("approved", data.bids)} />
      </Container>
    }
  </Wrapper>
)

export default graphql(getAllBids)(Bids)
