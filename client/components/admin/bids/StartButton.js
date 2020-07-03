import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import history from '../../history'
import { Button } from '../../styled-components'
import { Mutation } from 'react-apollo'
import { startNewBid } from '../../../graphql'

const Wrapper = styled(Button)`
  margin-right: 2vw;
`

const StartButton = () => (
  <Mutation mutation={startNewBid}>
    {(startNewBid, { data }) => (
      <Wrapper width={25} height={30} backgroundColor="#296D4D" onClick={() => {
        startNewBid({ variables: { title: '', status: 'open', userId: 1 } })
      }}>
      { data && data.createBid && <Redirect to={`/admin/bids/${data.createBid.id}`} /> }
      { data && data.createBid && history.push(`/admin/bids/${data.createBid.id}`) }
        New Bid +
      </Wrapper>
    )}
  </Mutation>
)

export default StartButton
