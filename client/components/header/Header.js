import React from 'react'
import styled from 'styled-components'
import { NavSearch, Navbar, UserHeaderInfo, Logo, QuoteButton } from '../header'

const Wrapper = styled.header`
  width: 98vw;
  display: flex;
  justify-content: space-between
`

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 13vh;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2vh;
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
