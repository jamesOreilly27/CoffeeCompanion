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

const RemoveLocation = ({ areaId, bidId }) => (
  <Mutation
    mutation={removeBidArea}
    update={( cache, { data: { removeBidArea } } ) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      const areas = bid.bidAreas
      let newAreas = []

      areas.forEach(area => {
        if(area.id !== areaId) {
          newAreas.push(area)
        }
      })

      const newBid = Object.assign(bid, { bidAreas: newAreas })
      
      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: newAreas } ) }
      })
    }}
  >
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
