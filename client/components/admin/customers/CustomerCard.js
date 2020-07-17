import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #373738;
  color: #F8F8FF;
  padding: 8px;
  height: 6vh;
`

const CustomerTitle = styled.div`
  font-size: 18px;
`

const CustomerTitleCard = ({ customer }) => (
  <Wrapper>
    <CustomerTitle>
      {console.log('CUSTOMER', customer)}
      {customer.companyName}
    </CustomerTitle>
  </Wrapper>
)

export default CustomerTitleCard
