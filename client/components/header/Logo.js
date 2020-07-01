import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavLogo from '../../images/navlogo.png'

const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-family: 'Scope One', serif;
  color: #0D0D0B;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-left: -25px;
`

const Logo = () => (
  <Wrapper to="/">
    <Image src={NavLogo} />
  </Wrapper>
)

export default Logo
