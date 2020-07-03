import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border-radius: .3em;
  height: 80%;
  padding: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #3B9D6E;
    transition: all .7s;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Scope One', serif;
  color: #F8F8FF;

  &:hover {
    color: #FFFAFA;
    transition: all .3s;
  }
`

const Navlink = ({ item }) => (
  <Container>
    <StyledLink to={item.linkTo}>
      {item.name}
    </StyledLink>
  </Container>
)

export default Navlink
