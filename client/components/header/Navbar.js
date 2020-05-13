import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../header'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 50%;
`

const navItems = [
  { name: 'Shop', linkTo: '/products' },
  { name: 'Locations', linkTo: 'locations' },
  { name: 'Rewards', linkTo: '/rewards' },
  { name: 'Contact', linkTo: '/contact' }
]

const Navbar = () => (
  <Wrapper>
    {navItems.map(item => <Navlink item={item} /> )}
  </Wrapper>
)

export default Navbar
