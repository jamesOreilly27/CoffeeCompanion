import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { sumAll } from './helpers'
import { nameToUrl } from '../../helpers'

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #F8F8FF;
`

const FlexContainer = styled.div`
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled(FlexContainer)`
  width: 100px;
`

const BidCard = ({ bid }) => (
  <Wrapper to={`/admin/bids/${bid.id}`}>
    <Title>
      {bid.title}
    </Title>
    <FlexContainer>
      {`$${sumAll(bid.bidAreas, 'cost')}`}
    </FlexContainer>
    <FlexContainer>
      {`$${sumAll(bid.bidAreas, 'price')}`}
    </FlexContainer>
  </Wrapper>
)

export default BidCard
