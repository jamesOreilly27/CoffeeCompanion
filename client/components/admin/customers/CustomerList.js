import React from 'react'
import styled from 'styled-components'
import { CustomerCard } from '../customers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CustomerList = ({ customers }) => (
  <Wrapper>
    { customers && customers.map(customer => <CustomerCard customer={customer} /> )}
  </Wrapper>
)

export default CustomerList
