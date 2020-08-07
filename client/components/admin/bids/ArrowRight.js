import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mutation } from 'react-apollo'
import { updateStatus } from '../../../graphql'

const Wrapper = styled(FontAwesomeIcon)`

`

const chooseNewStatus = status => {
  if(status === 'open') return 'pending'
  else if(status === 'pending') return 'approved'
}

const ArrowRight = ({ id, status}) => (
  <Mutation mutation={updateStatus}>
    {(updateStatus, { data }) => (
      <Wrapper
        icon={['fa', 'angle-right']}
        size="2x"
        onClick={() => {
          updateStatus({ variables: { id: id, status: chooseNewStatus(status) } })
        }}
      >
      </Wrapper>
    )}
  </Mutation>
)

export default ArrowRight
