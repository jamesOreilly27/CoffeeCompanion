import React from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import history from '../../history'
import { Mutation } from 'react-apollo'
import { startNewBid } from '../../../graphql'

const Wrapper = styled(Link)`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
  outline: none;
  cursor: pointer;
  margin: 1vh 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StartButton = () => (
  <Wrapper to="/admin/bids/new" width={25} height={30} backgroundColor="#296D4D">
    New Bid +
  </Wrapper>
)

export default StartButton
