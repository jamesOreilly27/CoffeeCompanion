import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addToCart } from '../../graphql'

const Wrapper = styled.button`
  display: flex;
`

const AddToCart = (props) => (
  <Mutation mutation={addToCart}>
   {(addToCart, { data }) => (
     <Wrapper onClick={() => {
       addToCart({ variables: { productId: props.productId, cartId: props.cartId, price: props.price, quantity: 1 } })
     }}>
       Add To Cart
     </Wrapper>
   )}
  </Mutation>
)

export default AddToCart
