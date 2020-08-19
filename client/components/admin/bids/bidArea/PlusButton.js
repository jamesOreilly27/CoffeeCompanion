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
  border-left: 1px solid #F8F8FF;
  color: #F8F8FF;
  cursor: pointer;
`

const PlusButton = ({ qty, productId, bidId, laborRate, laborTime, laborTotal }) => (
  <Mutation
    mutation={incrementProductQty}
    update={(cache, { data: { incrementProductQty } } ) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId }}).bidDetails
      const areas = bid.bidAreas
      areas.forEach(area => {
        area.products.forEach(product => {
          if(product.id === productId) {
            product = Object.assign(product, { qty: incrementProductQty.qty })
            bid.laborTotal = bid.laborTotal + (bid.laborRate * product.product.laborTime)
          }
        })
      })

      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: areas, laborTotal: bid.laborTotal }) }
      })
    }}
  >
    {( incrementProductQty, { data }) => (
      <Wrapper onClick={() => {
        incrementProductQty({ variables: { id: productId, bidId, laborRate, laborTotal, laborTime } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default PlusButton
