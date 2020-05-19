import React from 'react'
import { Mutation } from 'react-apollo'
import { decrementQty, getCurrentUser } from '../../graphql'
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

const MinusButton = ({ qty, id }) => (
  <Mutation
    mutation={decrementQty}
    update={(cache, { data: { decrementQty } } ) => {
      const user = cache.readQuery({ query: getCurrentUser }).currentUser
      const cart = user.activeCart
      if(decrementQty.quantity) {
        const itemsArr = cart.lineitems
        const itemToReplace = itemsArr.find(item => item.id === id)
        const updatedItem = Object.assign(itemToReplace, { quantity: decrementQty.quantity })
        itemsArr.splice(itemsArr.indexOf(itemToReplace), 1, updatedItem )
        const newCart = Object.assign(cart, { lineitems: itemsArr } )
        cache.writeQuery({
          query: getCurrentUser,
          data: { currentUser : Object.assign(user, { cart: newCart } ) }
        })
      } else {
        const newCart = Object.assign(cart, { lineitems: cart.lineitems.filter(item => item.id !== id) })
        cache.writeQuery({
          query: getCurrentUser,
          data: { currentUser: Object.assign(user, { cart: newCart }) }
        }) 
    }}
  }>
    {( decrementQty, { data }) => (
      <Wrapper onClick={() => {
        decrementQty({ variables: { id: id } })
      }}>
        -
      </Wrapper>
    )}
  </Mutation>
)

export default MinusButton
