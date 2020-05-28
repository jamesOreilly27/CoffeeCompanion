import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.button`
  height: 3vh;
  border-radius: 50%;
  margin-left: 5px;
`

const SubmitButton = () => {
  return (
    <Wrapper type="submit">
      <FontAwesomeIcon icon={['fa', 'search']} />
    </Wrapper>
  )
}

export default SubmitButton
