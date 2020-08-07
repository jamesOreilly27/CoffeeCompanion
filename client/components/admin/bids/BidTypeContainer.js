import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'
import { BidList } from '../bids'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  border-radius: 4px;
  border: 2px solid #4E4E6F;
`

const CenteredTitle = styled(Title)`
  text-align: center;
  font-size: 26px;
  background-color: #383738;
  margin: 0;
`

const BidTypeContainer = ({ title, bids }) => (
  <Wrapper>
    <CenteredTitle size="med" margin={1}>
      {title}
    </CenteredTitle>
    <BidList bids={bids} />
  </Wrapper>
)

export default BidTypeContainer
