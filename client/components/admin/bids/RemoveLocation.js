import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { removeBidArea, getBidDetails } from '../../../graphql'

const Wrapper = styled.button`
  background-color: #bd2f29;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 18px;
  color: #F8F8FF;
`

const RemoveLocation = ({ areaId }) => (
  <Mutation mutation={removeBidArea}>
    {(removeBidArea, { data }) => (
      <Wrapper onClick={evt => {
        evt.preventDefault()
        removeBidArea({ variables: { id: areaId } } )
      }}>
        -
      </Wrapper>
    )}
  </Mutation>
)

export default RemoveLocation
