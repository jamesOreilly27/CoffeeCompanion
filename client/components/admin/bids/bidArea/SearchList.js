import React from 'react'
import styled from 'styled-components'
import { ProductCard } from '../bidArea'

const Wrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const SearchList = ({ product }) => (
  <Wrapper>
    <Container>
      Hello From SearchList
    </Container>
    <ProductCard product={product} />
  </Wrapper>
)

export default SearchList
