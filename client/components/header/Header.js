import React from 'react'
import styled from 'styled-components'
import { NavSearch, Navbar, UserHeaderInfo, Logo } from '../header'

const Wrapper = styled.header`
  width: 98vw;
  display: flex;
  justify-content: space-between
`

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 6vh;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`

const UserInfoAndSearch = styled.div`

`

const Header = () => (
  <Wrapper>
    <Container>
      <Logo />
      <Navbar />
      <NavSearch />
      <UserHeaderInfo />
    </Container>
  </Wrapper>
)

export default Header
