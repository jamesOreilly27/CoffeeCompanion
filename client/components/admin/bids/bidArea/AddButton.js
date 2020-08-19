import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addAreaProduct, getBidDetails } from '../../../../graphql'

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: #3B9D63;
  color: #FFF;
  border: none;
`

const AddButton = ({ productId, handleAddChange, bidAreaId, bidId, price, cost, qty, laborRate, laborTotal, laborTime }) => (
  <Mutation
    mutation={addAreaProduct}
    update={( cache, { data: { addAreaProduct } }) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      bid.laborTotal = bid.laborTotal + (bid.laborRate * addAreaProduct.product.laborTime * qty)
      const area = bid.bidAreas.find(area => area.id === bidAreaId)
      const newArea = Object.assign(area, { products: area.products.concat([addAreaProduct]) } )
      const newAreas = bid.bidAreas.filter(loopArea => loopArea.id !== area.id)
      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: newAreas.concat([newArea]), laborTotal: bid.laborTotal }) }
      })
    }}
  >
    {( addAreaProduct, { data }) => (
      <Wrapper onClick={evt => {
        evt.preventDefault()
        handleAddChange()
        addAreaProduct({ variables: { productId, bidAreaId, price, cost, qty, bidId, laborRate, laborTotal, laborTime } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default AddButton
