import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mutation } from 'react-apollo'
import { updateStatus, getAllBids } from '../../../graphql'

const Wrapper = styled.div`
  cursor: pointer;
`

const chooseNewStatus = status => {
  if(status === 'open') return 'pending'
  else if(status === 'pending') return 'approved'
}

const ArrowRight = ({ id, status }) => (
  <Mutation
    mutation={updateStatus}
    update={(cache, { data: { updateStatus } } ) => {
      const bids = cache.readQuery({ query: getAllBids }).bids
      const bid = Object.assign(bids.filter(bid => bid.id === id)[0])
      
      cache.writeQuery({
        query: getAllBids,
        data: Object.assign(bids)
      })
    }}
  >
    {(updateStatus, { data }) => (
      <Wrapper
        onClick={() => {
          updateStatus({ variables: { id: id, status: chooseNewStatus(status) } })
        }}
      >
        {'>'}
      </Wrapper>
    )}
  </Mutation>
)

export default ArrowRight
