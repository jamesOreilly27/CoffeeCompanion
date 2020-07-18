import React from 'react'
import styled from 'styled-components'
import { ContactCard } from '../customers'
import { Title } from '../../styled-components'
import { filterPrimary } from './helpers'

const Wrapper = styled.div`
  width: 83%;
  border-radius: 4px;
  background-color: #373738;
  display: flex;
  flex-direction: column;
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
    <Title margin={1}>
      {customer.companyName}
    </Title>
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
