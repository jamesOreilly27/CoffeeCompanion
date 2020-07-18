import React from 'react'
import styled from 'styled-components'
import { isActiveCustomer } from './helpers'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F8F8FF;
  padding: 2px 6px;
  background-color: ${({ active }) => {
    if (active) return "#000"
    else return "#373738"
  }};
  cursor: default;

  &:hover {
    background-color: #000;
  }
`

const CustomerSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`

const Title = styled(CustomerSection)`
  width: 100%;
`

const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const CustomerTitleCard = ({ customer, activeName, handleClick }) => (
  <Wrapper
    active={isActiveCustomer(activeName, customer)}
    onClick={evt => {
      handleClick(customer.companyName)
    }}
  >
    <Title>
      <Name>
        {customer.companyName}
      </Name>
    </Title>
  </Wrapper>
)

export default CustomerTitleCard
