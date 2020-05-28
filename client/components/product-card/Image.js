import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  height: 143px;
  margin-left: 10px;
`

const Image = url => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={['fa', 'image']} size="10x" />
    </Wrapper>
  )
}

export default Image
