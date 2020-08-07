import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mutation } from 'react-apollo'
import { updateStatus } from '../../../graphql'

const Wrapper = styled(FontAwesomeIcon)`
  color: #F8F8FF;
`

const chooseNewStatus = status => {
  if(status === 'approved') return 'pending'
  else if(status === 'pending') return 'open'
}

const ArrowLeft = ({ id, status }) => (
  <Mutation mutation={updateStatus}>
    {(updateStatus, { data }) => (
      <Wrapper
        icon={['fa', 'angle-left']}
        size="2x"
        onClick={() => {
          updateStatus({ variables: { id: id, status: chooseNewStatus(status) } })
        }}
      >
      </Wrapper>
    )}
  </Mutation>
)

export default ArrowLeft
