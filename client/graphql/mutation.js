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
export const upsertProduct = gql`
  mutation($name: String!, $description: String!, $price: Int!, $image: String!, $featured: Boolean!) {
    upsertProduct(name: $name, description: $description, price: $price, image: $image, featured: $featured) {
      name
      description
      price
      image
      featured
    }
  }
`

export const deleteProduct = gql`
  mutation($name: String!) {
    destroyProduct(name: $name)
  }
`

//Bids
export const startNewBid = gql`
  mutation($title: String!, $status: String!, $userId: Int!) {
    createBid(title: $title, status: $status, userId: $userId) {
      id
    }
  }
`

export const addBidArea = gql`
  mutation($title: String!, $bidId: Int!) {
    createBidArea(title: $title, bidId: $bidId) {
      id
      title
      products {
        id
        name
        cost
        price
      }
    }
  }
`

export const createAreaProduct = gql`
  mutation($qty: Int!, $bidAreaId: Int!, $productId: Int!) {
    createAreaProduct(qty: $qty, bidAreaId: $bidAreaId, productId: $productId) {
      id
      bidAreaId
      product {
        id
        name
        cost
        price
        description
      }
    }
  }
`
