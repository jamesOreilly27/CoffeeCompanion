import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../header'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 60%;
`

const navItems = [
  { name: 'Shop' },
  { name: 'Locations' },
  { name: 'Rewards' },
  { name: 'Careers' }
]

const Navbar = () => (
  <Wrapper>
    {navItems.map(item => <Navlink name={item.name} /> )}
  </Wrapper>
)

export default Navbar
