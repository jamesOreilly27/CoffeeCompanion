import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { incrementLineitemQty, getCurrentUser } from '../../graphql'

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
    mutation={incrementLineitemQty}
    update={(cache, { data: { incrementLineitemQty } } ) => {
      const user = cache.readQuery({ query: getCurrentUser }).currentUser
      const cart = user.activeCart
      const itemsArr = cart.lineitems
      const itemToReplace = itemsArr.find(item => item.id === id)
      const updatedItem = Object.assign(itemToReplace, { quantity: incrementLineitemQty.quantity })
      itemsArr.splice(itemsArr.indexOf(itemToReplace), 1, updatedItem )
      const newCart = Object.assign(cart, { lineitems: itemsArr } )
      cache.writeQuery({
        query: getCurrentUser,
        data: { currentUser : Object.assign(user, { cart: newCart } ) }
      })
    }}
  >
    {( incrementLineitemQty, { data }) => (
      <Wrapper onClick={() => {
        incrementLineitemQty({ variables: { id: id } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default PlusButton
