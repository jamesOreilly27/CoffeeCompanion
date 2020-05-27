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

const Logo = () => (
  <Wrapper to="/">
    <div>SOS</div>
    <div>Monitoring</div>
  </Wrapper>
)

export default Logo
