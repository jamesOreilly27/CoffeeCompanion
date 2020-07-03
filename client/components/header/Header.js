import React from 'react'
import styled from 'styled-components'
import { NavSearch, Navbar, UserHeaderInfo, Logo, QuoteButton } from '../header'

const Wrapper = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #1F1F1E;
  color: #F8F8FF;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 13vh;
  justify-content: space-around;
  align-items: center;
`

const Header = ({ products, categories, loggedIn }) => (
  <Wrapper>
    <Container>
      <Logo />
      <Navbar />
      {/* <NavSearch products={products} categories={categories} /> */}
      <QuoteButton />
      <UserHeaderInfo loggedIn={loggedIn} />
    </Container>
  </Wrapper>
)

export default Header
