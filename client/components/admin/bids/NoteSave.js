import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  width: 15%;
  height: 80%;
  background-color: #296D4D;
  color: #F8F8FF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NoteSave = () => (
  <Wrapper type="submit">
    Save
  </Wrapper>
)

export default NoteSave
