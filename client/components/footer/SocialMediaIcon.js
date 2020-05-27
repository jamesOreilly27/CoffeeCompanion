import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.a`
  text-decoration: none;
`

const Icon = styled(FontAwesomeIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #EDEDED;
`

const SocialMediaIcon = ({ icon, link }) => (
  <Wrapper href={link}>
    <Icon icon={icon} size="sm"></Icon>
  </Wrapper>
)

export default SocialMediaIcon
