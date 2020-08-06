import React from 'react'
import styled from 'styled-components'
import { CustomerCard, PanelCustomerCard } from '../customers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CustomerList = ({ customers, home, activeName, handleClick, relayState, arm, disarm }) => (
  <Wrapper>
    { customers && !home && customers.map(customer => <PanelCustomerCard customer={customer} relayState={relayState} arm={arm} disarm={disarm} /> )}
    { customers && home && customers.map(customer => <CustomerCard customer={customer} activeName={activeName} handleClick={handleClick} /> )}
  </Wrapper>
)

export default CustomerList
