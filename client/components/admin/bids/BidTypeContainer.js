import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'
import { BidList } from '../bids'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #383737;
  border-radius: 4px;
  padding: 10px;
`

const CenteredTitle = styled(Title)`
  text-align: center;
`

const BidTypeContainer = ({ title, bids }) => (
  <Wrapper>
    <CenteredTitle size="med">
      {title}
    </CenteredTitle>
    <BidList bids={bids} />
  </Wrapper>
)

export default BidTypeContainer
