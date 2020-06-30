import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { incrementProductQty, getBidDetails } from '../../../../graphql'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 33%;
  font-size: 12px;
  border-left: 1px solid #000;
  cursor: pointer;
`

const PlusButton = ({ qty, productId, bidId }) => (
  <Mutation
    mutation={incrementProductQty}
    update={(cache, { data: { incrementProductQty } } ) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId }}).bidDetails
      const areas = bid.bidAreas
      areas.forEach(area => {
        area.products.forEach(product => {
          if(product.id === productId) {
            product = Object.assign(product, { qty: incrementProductQty.qty })
          }
        })
      })

      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: areas }) }
      })
    }}
  >
    {( incrementProductQty, { data }) => (
      <Wrapper onClick={() => {
        incrementProductQty({ variables: { id: productId } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default PlusButton
