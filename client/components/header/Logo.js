import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = () => (
  <Wrapper>
    <div>SOS</div>
    <div>Monitoring</div>
  </Wrapper>
)

export default Logo
