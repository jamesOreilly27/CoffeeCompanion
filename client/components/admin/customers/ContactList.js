import React from 'react'
import styled from 'styled-components'
import { ContactCard } from '../customers'
import { Title } from '../../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { filterPrimary } from './helpers'

const Wrapper = styled.div`
  width: 83%;
  border-radius: 4px;
  background-color: #373738;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Mic = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: #F8F8FF;
`

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const ContactList = ({ customer }) => (
  <Wrapper>
    <Header>
      <Title margin={1}>
        {customer.companyName}
      </Title>
      <Mic icon={['fa', 'microphone']} size="2x" />
    </Header>
    <ContactsContainer>
      <Title margin={2}>
        Primary Contacts
      </Title>
      <Section>
        {filterPrimary(customer.contacts, 'primary').map(contact => <ContactCard key={contact.id} contact={contact} /> )}
      </Section>
      <Title margin={2}>
        Contacts
      </Title>
      <Section>
        {filterPrimary(customer.contacts, 'non-primary').map(contact => <ContactCard key={contact.id} contact={contact} /> )}
      </Section>
    </ContactsContainer>
  </Wrapper>
)

export default ContactList
