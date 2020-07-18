import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media(max-width: 960px) {
    flex: 0 0 32.5%;
  }
  @media(max-width: 640px) {
    flex: 0 0 49%;
  }
  @media(max-width: 450px) {
    flex: 0 0 85%;
    margin: 0 7.5%;
  }
  flex: 0 0 30%;
  color: #F8F8FF;
  height: 15vh;
  margin: 2px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #2D2B2B;
  border-radius: 4px;
`

const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const Section = styled.div`
  display: flex;
  font-size: 18px;
  margin-left: 5px;
  width: 70%;
  justify-content: flex-start;
  align-items: center;
  color: #F8F8FF;
`
const Label = styled.div`
  margin-right: 5px;
`

const ContactCard = ({ contact }) => (
  <Wrapper>
    <Name>
      {`${contact.firstName} ${contact.lastName}`}
    </Name>
    <Section>
      <Label>
        Phone:
      </Label>
      <div>
        {contact.phoneNumber}
      </div>
    </Section>
    <Section>
      <Label>
        Email:
      </Label>
      <div>
        {contact.email}
      </div>
    </Section>
    <Section>
      <Label>
        Passcode:
      </Label>
      <div>
        {contact.passcode}
      </div>
    </Section>
  </Wrapper>
)

export default ContactCard
