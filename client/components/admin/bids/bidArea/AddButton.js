import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addAreaProduct, getBidDetails } from '../../../../graphql'

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: #77DD77;
  color: #FFF;
  border: none;
`

const AddButton = ({ productId, bidAreaId, bidId, price, cost, qty }) => (
  <Mutation
    mutation={addAreaProduct}
    // update={( cache, { data: addAreaProduct }) => {
    //   const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
    //   let areaToUpdate = bid.bidAreas.filter(area => area.id === bidAreaId)[0]

    //   areaToUpdate = Object.assign(areaToUpdate, { products: areaToUpdate.products.concat([addAreaProduct.addAreaProduct])})

    //   console.log('NEW AREA', areaToUpdate)
    //   console.log('AREAS', bid.bidAreas)
      
    //   cache.writeQuery({
    //     query: getBidDetails,
    //     data: { bidDetails: Object.assign(bid, { bidAreas: bid.bidAreas } )}
    //   })
    // }}
  >
    {( addAreaProduct, { data }) => (
      <Wrapper onClick={evt => {
        addAreaProduct({ variables: { productId, bidAreaId, price, cost, qty } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default AddButton
