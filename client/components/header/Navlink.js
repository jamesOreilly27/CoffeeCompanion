import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border-radius: .3em;

  &:hover {
    background-color: rgba(33, 198, 0, 0.74);
    transition: all .8s;
  }
`

const StyledLink = styled(Link)`
  
`

const Navlink = ({ name }) => (
  <Container>
    <StyledLink to={name}>
      {name}
    </StyledLink>
  </Container>
)

export default Navlink
