import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
  border-radius: 6px;
  height: 2.5vh;
`

const FormFill = () => {
  return (
    <Wrapper type="text" placeholder="Search...">
      
    </Wrapper>
  )
}

export default FormFill