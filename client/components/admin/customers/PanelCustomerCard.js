import React from 'react'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import { combineAddy } from './helpers'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F8F8FF;
  padding: 8px;
  height: 6vh;
  margin: .5vh 0;
  background-color: ${({ armed }) => {
    if (armed) return "#373738"
    else return "#FF2300"
  }};
  opacity: ${({ armed }) => {
    if (armed) return "1"
    else return "0.3"
  }}
`

const CustomerSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`

const Title = styled(CustomerSection)`
  width: 32%;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const Address = styled.div`
  font-size: 14px;
`

const PoliceNumber = styled(CustomerSection)`
  
`

const Subtitle = styled.div`
  font-size: 13px;
  font-weight: bold;
`

const PhoneNum = styled.div`
  font-size: 16px;
`

const Checkbox = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`

const CustomerTitleCard = ({ customer, relayState, arm, disarm }) => (
  <Wrapper armed={parseInt(relayState[`relay${customer.relayId}state`]._text)}>
    <Title>
      <Name>
        {customer.companyName}
      </Name>
      <Address>
        {combineAddy(customer)}
      </Address>
    </Title>
    <PoliceNumber>
      <Subtitle>
        Police Number
      </Subtitle>
      <PhoneNum>
        {customer.localPolicePhone}
      </PhoneNum>
    </PoliceNumber>
    <PoliceNumber>
      <Subtitle>
        Fire Number
          </Subtitle>
      <PhoneNum>
        {'516-476-6739'}
      </PhoneNum>
    </PoliceNumber>
    <Checkbox>
      <Switch checked={parseInt(relayState[`relay${customer.relayId}state`]._text) !== 0} color="primary" onChange={() => {
        if (parseInt(relayState[`relay${customer.relayId}state`]._text)) disarm(customer.relayPort, customer.relayId)
        else arm(customer.relayPort, customer.relayId)
      }} />
    </Checkbox>
  </Wrapper>
)

export default CustomerTitleCard