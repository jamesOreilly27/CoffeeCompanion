import React from 'react'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import { Mutation } from 'react-apollo'
import { flipArmed } from '../../../graphql'
import { combineAddy, isActiveCustomer } from './helpers'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F8F8FF;
  padding: 8px;
  height: 6vh;
  margin: .5vh 0;
  background-color: ${({ active }) => {
    if (active) return "#000"
    else return "#373738"
  }};
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
  font-size: 20px;
  font-weight: bold;
`

const Address = styled.div`
  font-size: 14px;
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
      <Address>
        {combineAddy(customer)}
      </Address>
    </Title>
  </Wrapper>
)

export default CustomerTitleCard
