import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { removeAreaProduct, getBidDetails } from '../../../../graphql'

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: #FF6962;
  color: #FFF;
  border: none;
`

const RemoveButton = ({ id, bidId }) => (
  <Mutation
    mutation={removeAreaProduct}
    update={( cache, { data: removeProductArea } ) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      const areas = bid.bidAreas
      let newAreas;
      areas.forEach(area => {
        area.products.forEach(product => {
          if(product.id === id) {
            newAreas = area.products.splice(area.products.indexOf(product), 1)
          }
        })
      })
      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: newAreas } ) }
      })
    }}
  >
    {( removeAreaProduct, { data }) => (
      <Wrapper onClick={evt => {
        evt.preventDefault()
        removeAreaProduct({ variables: { id: id } })
      }}>
        -
      </Wrapper>
    )}
  </Mutation>
)

export default RemoveButton
