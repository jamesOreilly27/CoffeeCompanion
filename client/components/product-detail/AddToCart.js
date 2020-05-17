import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addToCart } from '../../graphql'

const Wrapper = styled.form`
  display: flex;
  justify-content: flex-start;
  height: 40px;
`

const Input = styled.input`
  width: 40px;
  margin-right: 10px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #AAA;
  outline: none;
`

const Button = styled.button`
  width: 150px;
  background-color: #202020;
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
`

const AddToCart = (props) => (
  <Mutation mutation={addToCart}>
    {(addToCart, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        props.flipAlertActive()
        addToCart({ variables: { productId: props.productId, cartId: props.cartId, price: props.price, quantity: parseInt(evt.target.quantity.value) } })
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
