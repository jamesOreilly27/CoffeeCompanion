import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1vh 0;
`

const BidCard = ({ bid }) => (
  <Wrapper>
    {console.log(bid)}
    {/* {bid.title} */}
  </Wrapper>
)

export default BidCard
