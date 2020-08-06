import React from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import { Button } from '../../styled-components'
import history from '../../history'
import { Mutation } from 'react-apollo'
import { startNewBid } from '../../../graphql'

const Wrapper = styled(Button)`
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

const StartButton = ({ user }) => (
  <Mutation mutation={startNewBid}>
    {(startNewBid, { data }) => (
      <Wrapper
        width={25}
        height={30}
        backgroundColor="#296D4D"
        onClick={() => {
          startNewBid({ variables: { title: " ", status: "open", userId: user.id } })
        }}
      >
        {data && data.createBid && history.push(`/admin/bids/new/${data.createBid.id}`)}
        {data && data.createBid && <Redirect to={`/admin/bids/new/${data.createBid.id}`} /> }
        New Bid +
      </Wrapper>
    )}
  </Mutation>
)

export default StartButton
