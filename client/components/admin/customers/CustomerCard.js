import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: #373738;
  color: #F8F8FF;
  padding: 8px;
`

const CustomerTitle = styled.div`
  font-size: 18px;
`

const CustomerTitleCard = ({ customer }) => (
  <Wrapper>
    <CustomerTitle>
      {customer.companyName}
    </CustomerTitle>
  </Wrapper>
)

export default CustomerTitleCard
