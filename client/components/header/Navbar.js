import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../header'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 45%;
`

const navItems = [
  { name: 'Services', linkTo: '/services/all' },
  { name: 'About Us', linkTo: '/about' },
  { name: 'Busts', linkTo: '/busts' },
  { name: 'Contact Us', linkTo: '/contact' }
]

const Navbar = () => (
  <Wrapper>
    {navItems.map(item => <Navlink key={item.name} item={item} /> )}
  </Wrapper>
)

export default Navbar
