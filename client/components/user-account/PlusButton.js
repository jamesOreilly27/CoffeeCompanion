import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { incrementQty, getCurrentUser } from '../../graphql'

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

const PlusButton = ({ qty, id }) => (
  <Mutation
    mutation={incrementQty}
    update={(cache, { data: { incrementQty } } ) => {
      const user = cache.readQuery({ query: getCurrentUser }).currentUser
      const cart = user.activeCart
      const itemsArr = cart.lineitems
      const itemToReplace = itemsArr.find(item => item.id === id)
      const updatedItem = Object.assign(itemToReplace, { quantity: incrementQty.quantity })
      itemsArr.splice(itemsArr.indexOf(itemToReplace), 1, updatedItem )
      const newCart = Object.assign(cart, { lineitems: itemsArr } )
      cache.writeQuery({
        query: getCurrentUser,
        data: { currentUser : Object.assign(user, { cart: newCart } ) }
      })
    }}
  >
    {( incrementQty, { data }) => (
      <Wrapper onClick={() => {
        incrementQty({ variables: { id: id } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default PlusButton
