import React from 'react'
import styled from 'styled-components'
import { CustomerCard, PanelCustomerCard } from '../customers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CustomerList = ({ customers, home, activeName, handleClick }) => (
  <Wrapper>
    { customers && !home && customers.map(customer => <PanelCustomerCard customer={customer} /> )}
    { customers && home && customers.map(customer => <CustomerCard customer={customer} activeName={activeName} handleClick={handleClick} /> )}
  </Wrapper>
)

export default CustomerList
