import React from 'react'
import styled from 'styled-components'
import { BidCard } from '../bids'

const Wrapper = styled.div`

`

const BidList = ({ bids }) => (
  <Wrapper>
    {bids.map(bid => <BidCard key={bid.id} bid={bid} /> )}
  </Wrapper>
)

export default BidList
