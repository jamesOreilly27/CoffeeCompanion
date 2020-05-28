import { gql } from 'apollo-boost'

/********** Cart Functions **********/

//Add and Remove from Cart
export const addToCart = gql`
  mutation($productId: Int!, $cartId: Int!, $price: Int!, $quantity: Int!) {
    addToCart(productId: $productId, cartId: $cartId, price: $price, quantity: $quantity) {
      id
      price
      quantity
      product {
        name
        description
        image
      }
    }
  }
`

export const removeFromCart = gql`
  mutation($id: Int!) {
    removeFromCart(id: $id)
  }
`

//Increment and Drecrement lineitem Quantity
export const incrementQty = gql`
  mutation($id: Int!) {
    incrementQty(id: $id) {
      quantity
    }
  }
`

export const decrementQty = gql`
  mutation($id: Int!) {
    decrementQty(id: $id) {
      quantity
    }
  }
`

/********** Admin Tools **********/

//Products
export const createProduct = gql`
  mutation($name: String!, $description: String!, $price: Int!, $inventory: Int!, $image: String!) {
    createProduct(name: $name, description: $description, price: $price, inventory: $inventory, image: $image)
  }
`
