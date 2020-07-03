import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled-components'

const Wrapper = styled(Button)`
  transition: all 0.2s;
  &:hover {
    background-color: #3B9D6E;
  }
`

const QuoteButton = () => (
  <Wrapper width={17} height={30} backgroundColor="#296d4d">
    Request A Quote
  </Wrapper>
)

export default QuoteButton
