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
  border-right: 1px solid #F8F8FF;
  color: #F8F8FF;
  cursor: pointer;
`

const MinusButton = ({ qty, productId, bidId, laborRate, laborTime, laborTotal }) => (
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
              if(bid.laborTotal - (bid.laborRate * product.product.laborTime) > 0) {
                bid.laborTotal = bid.laborTotal - (bid.laborRate * product.product.laborTime)
              }
              else {
                bid.laborTotal = 0
              }
            }
          })
        })
        cache.writeQuery({
          query: getBidDetails,
          data: { bidDetails: Object.assign(bid, { bidArea: areas, laborTotal: bid.laborTotal })}
        })
      } else {
        let newAreas
        areas.forEach(area => {
          area.products.forEach(product => {
            if(product.id === productId) {
              console.log('PRODUCT', product)
              newAreas = area.products.splice(area.products.indexOf(product), 1)
              console.log('BIDAREA',bid.laborTotal - (bid.laborRate * product.product.laborTime) > 0.005)
              if(bid.laborTotal - (bid.laborRate * product.product.laborTime) > 0) {
                bid.laborTotal = bid.laborTotal - (bid.laborRate * product.product.laborTime)
              }
              else {
                bid.laborTotal = 0
              }
            }
          })
        })
        console.log('BID', bid)
        cache.writeQuery({
          query: getBidDetails,
          data: { bidDetails: Object.assign(bid, { bidArea: newAreas, laborTotal: bid.laborTotal } )}
        })
      }
    }}
  >
    {( decrementProductQty, { data }) => (
      <Wrapper onClick={() => {
        decrementProductQty({ variables: { id: productId, bidId, laborRate, laborTotal, laborTime } })
      }}>
        -
      </Wrapper>
    )}
  </Mutation>
)

export default MinusButton
