import React from 'react'
import { Mutation } from 'react-apollo'
import { decrementProductQty, getBidDetails } from '../../../../graphql'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 33%;
  font-size: 16px;
  border-right: 1px solid #000;
  cursor: pointer;
`

const MinusButton = ({ qty, productId, bidId }) => (
  <Mutation
    mutation={decrementProductQty}
    update={(cache, { data: { decrementProductQty } } ) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      const areas = bid.bidAreas
      if(decrementProductQty.qty) {
        areas.forEach( area => {
          area.products.forEach(product => {
            if(product.id === productId) {
              product = Object.assign(product, { qty: decrementProductQty.qty })
            }
          })
        })
        cache.writeQuery({
          query: getBidDetails,
          data: { bidDetails: Object.assign(bid, { bidArea: areas })}
        })
      } else {
        let newAreas
        areas.forEach(area => {
          area.products.forEach(product => {
            if(product.id === productId) {
              newAreas = area.products.splice(area.products.indexOf(product), 1)
            }
          })
        })

        cache.writeQuery({
          query: getBidDetails,
          data: { bidDetails: Object.assign(bid, { bidArea: newAreas } )}
        })
      }
    }}
  >
    {( decrementProductQty, { data }) => (
      <Wrapper onClick={() => {
        decrementProductQty({ variables: { id: productId } })
      }}>
        -
      </Wrapper>
    )}
  </Mutation>
)

export default MinusButton
