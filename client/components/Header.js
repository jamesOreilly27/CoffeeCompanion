import React from 'react'
import styled from 'styled-components'
import { Navbar, UserHeaderInfo, Logo } from '../components'
import { NavSearch } from './navsearch'

const Wrapper = styled.header`
  width: 90vw;
  display: flex;
  justify-content: space-between
`

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 4vh;
  justify-content: space-around;
  align-items: center;
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
