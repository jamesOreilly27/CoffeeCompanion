import React from 'react'
import styled from 'styled-components'
import { nameToUrl } from '../../helpers'

const Wrapper = styled.div`
  margin-bottom: 1.5vh;
  text-decoration: none;
  color: #F8F8FF;
  cursor: pointer
`

const LocationLink = ({ location, handleClick }) => (
  <Wrapper onClick={() => {
    handleClick(location.title)
  }}>
    {location.title}
  </Wrapper>
)

export default LocationLink
