import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled-components'

const Wrapper = styled(Button)`
  margin-right: 2vw;
`

const StartButton = () => (
  <Wrapper width={25} height={30} backgroundColor="#29AE48">
        New Bid +
  </Wrapper>
)

export default StartButton
