import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { nameToUrl } from '../../helpers'

const Wrapper = styled(Link)`
  margin-bottom: 1.5vh
  text-decoration: none;
`

const LocationLink = ({ location, id }) => (
  <Wrapper to={`/admin/bids/${id}/${nameToUrl(location.title)}`}>
    {location.title}
  </Wrapper>
)

export default LocationLink
