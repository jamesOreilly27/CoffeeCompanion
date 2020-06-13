import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
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

const sumAll = (bidAreas, type) => {
  let total = 0;
  bidAreas.forEach(bidArea => {
    for(let i = 0; i < bidArea.products.length; i++) {
      total += bidArea.products[i][type]
    }
  })
  return total
}

const BidCard = ({ bid }) => (
  <Wrapper to="/admin">
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
