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
  flex-direction: column;
  width: 90vw;
`

const UserInfoAndSearch = styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  justify-content: space-around;
`

const LowerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const Header = () => (
  <Wrapper>
    <Container>
      <UserInfoAndSearch>
        <Logo />
        <NavSearch />
        <UserHeaderInfo />
      </UserInfoAndSearch>
      <LowerHeader>
        <Navbar />
      </LowerHeader>
    </Container>
  </Wrapper>
)

export default Header
