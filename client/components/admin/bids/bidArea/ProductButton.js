import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: ${({ add, remove}) => {
    if(add) return `#77DD77`
    else return `#FF6962`
  }};
  color: #FFF;
  border: none;d
`

const chooseText = add => {
  if(add) return '+'
  else return '-'
}

const ProductButton = ({ add, remove}) => (
  <Wrapper add={add} remove={remove}>
    {chooseText(add)}
  </Wrapper>
)

export default ProductButton
