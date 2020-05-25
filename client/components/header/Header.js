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
  height: 10vh;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2vh;
`

const Header = ({ products, categories }) => (
  <Wrapper>
    <Container>
      <Logo />
      <Navbar />
      <NavSearch products={products} categories={categories} />
      <UserHeaderInfo />
    </Container>
  </Wrapper>
)

export default Header
