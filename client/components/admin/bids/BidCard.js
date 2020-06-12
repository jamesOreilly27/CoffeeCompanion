import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1vh 0;
`

const BidCard = ({ bid }) => (
  <Wrapper>
    {bid.title}
  </Wrapper>
)

export default BidCard
