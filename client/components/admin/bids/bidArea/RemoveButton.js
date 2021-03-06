import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { removeAreaProduct, getBidDetails } from '../../../../graphql'

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: #bd2f29;
  color: #FFF;
  border: none;
`

const RemoveButton = ({ productId, bidId, qty, laborRate, laborTime, laborTotal }) => (
  <Mutation
    mutation={removeAreaProduct}
    update={( cache, { data: { removeAreaProduct } } ) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      if(bid.laborTotal - (bid.laborRate * removeAreaProduct.product.laborTime) > 0) {
        bid.laborTotal = bid.laborTotal - (bid.laborRate * removeAreaProduct.product.laborTime)
      }
      else {
        bid.laborTotal = 0
      }
      const areas = bid.bidAreas
      let newAreas;
      areas.forEach(area => {
        area.products.forEach(product => {
          if(product.id === productId) {
            newAreas = area.products.splice(area.products.indexOf(product), 1)
          }
        })
      })
      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: newAreas, laborTotal: bid.laborTotal } ) }
      })
    }}
  >
    {( removeAreaProduct, { data }) => (
      <Wrapper onClick={evt => {
        evt.preventDefault()
        removeAreaProduct({ variables: { id: productId, bidId: bidId, qty: qty, laborRate: laborRate, laborTime: laborTime, laborTotal: laborTotal } })
      }}>
        -
      </Wrapper>
    )}
  </Mutation>
)

export default RemoveButton
