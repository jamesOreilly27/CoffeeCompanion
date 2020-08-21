import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { nameToUrl } from '../../helpers'
import { Mutation } from 'react-apollo'
import { updateHasHeaderImage } from '../../../graphql'

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bd2f29;
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: #F8F8FF;
  margin: 10px 0;
  height: 25px;
`

const RemoveImage = ({ bid }) => (
  <Mutation mutation={updateHasHeaderImage}>
    {(updateHasHeaderImage, { data }) => (
      <Wrapper onClick={() => {
        axios.post('/upload/header-image/delete', { path: `public/images/${nameToUrl(bid.customer.companyName)}.png` })
        updateHasHeaderImage({ variables: { id: bid.id, hasHeaderImage: !bid.hasHeaderImage }})
      }}>
        {console.log('BID TESTING', bid)}
        Remove
      </Wrapper>
    )}
  </Mutation>
)

export default RemoveImage
