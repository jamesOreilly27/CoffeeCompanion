import { gql } from 'apollo-boost'


export const addToCart = gql`
  mutation($productId: Int!, $cartId: Int!, $price: Int!, $quantity: Int!) {
    addToCart(productId: $productId, cartId: $cartId, price: $price, quantity: $quantity)
  }
`

export const removeFromCart = gql`
  mutation($id: Int!) {
    removeFromCart(id: $id)
  }
`
