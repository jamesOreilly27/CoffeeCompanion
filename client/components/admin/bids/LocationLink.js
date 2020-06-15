import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1.5vh
`

const LocationLink = ({ location }) => (
  <Wrapper>
    {location.title}
  </Wrapper>
)

export default LocationLink
