import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'
import { BidList } from '../bids'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const BidTypeContainer = ({ title, bids }) => (
  <Wrapper>
    <Title size="med">
      {title}
    </Title>
    <BidList bids={bids} />
  </Wrapper>
)

export default BidTypeContainer
