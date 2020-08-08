import React from 'react'
import styled from 'styled-components'
import { RemoveLocation } from '../bids'

const Wrapper = styled.div`
  display: flex;
  margin: 2vh 0 1vh;
  color: #F8F8FF;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`

const Link = styled.div`
  text-decoration: none;
  cursor: pointer;
`

const LocationLink = ({ location, bidId, handleClick }) => (
  <Wrapper>
    <Link onClick={() => {
      handleClick(location.title)
    }}>
      {location.title}
    </Link>
    <RemoveLocation areaId={location.id} bidId={bidId} />
  </Wrapper>
)

export default LocationLink
