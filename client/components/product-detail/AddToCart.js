import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addToCart } from '../../graphql'

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Input = styled.input`
  height: 45px;
  width: 45px;
  margin-right: 20px;
`

const Button = styled.button`
  height: 45px;
  width: 150px;
  background-color: #202020;
  color: #F8F8FF;
  border: 1px solid #F8F8FF;
`

const AddToCart = (props) => (
  <Mutation mutation={addToCart}>
    {(addToCart, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        addToCart({ variables: { productId: props.productId, cartId: props.cartId, price: props.price, quantity: evt.target.quantity.value } })
      }}>
        <Input type="text" name="quantity" required />
        <Button type="submit">
          Add To Cart
        </Button>
      </Wrapper>
   )}
  </Mutation>
)

export default AddToCart
