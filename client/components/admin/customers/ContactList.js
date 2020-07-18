import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 67%;
  border-radius: 4px;
  background-color: #373738;
`

const ContactList = ({ customer }) => (
  <Wrapper>
    {customer.companyName}
  </Wrapper>
)

export default ContactList
