import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  width: 90px;
  height: 80px;
  margin-left: -25px;
`

const Logo = () => (
  <Wrapper to="/">
    <Image src="/images/newlogo.png" />
  </Wrapper>
)

export default Logo
