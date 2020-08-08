import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 95%;
  font-size: 20px;
  margin: 1vh 0 0.5vh;
`

const Note = ({ subject }) => (
  <Wrapper>
    {subject}
  </Wrapper>
)

export default Note
