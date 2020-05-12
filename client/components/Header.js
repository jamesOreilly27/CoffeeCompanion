import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar } from '../components'

const Wrapper = styled.header`

`

const Container = styled.div`

`

// const Navbar = styled.div`

// `

const Header = () => (
  <Wrapper>
    {console.log('HELLO WORLD')}
    <Container>
      <Navbar />
    </Container>
  </Wrapper>
)

export default Header
