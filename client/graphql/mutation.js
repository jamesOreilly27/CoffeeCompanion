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
export const incrementLineitemQty = gql`
  mutation($id: Int!) {
    incrementLineitemQty(id: $id) {
      quantity
    }
  }
`

export const decrementLineitemQty = gql`
  mutation($id: Int!) {
    decrementLineitemQty(id: $id) {
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
    addBidArea(title: $title, bidId: $bidId) {
      id
      title
      products {
        id
        cost
        price
        product {
          name
        }
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
        cost
        price
        description
      }
    }
  }
`

export const incrementProductQty = gql`
  mutation($id: Int!) {
    incrementProductQty(id: $id) {
      qty
    }
  }
`

export const decrementProductQty = gql`
  mutation($id: Int!) {
    decrementProductQty(id: $id) {
      qty
    }
  }
`

export const removeAreaProduct = gql`
  mutation($id: Int!) {
    removeAreaProduct(id: $id)
  }
`

export const addAreaProduct = gql`
  mutation($qty: Int!, $price: Int!, $cost: Int!, $productId: Int!, $bidAreaId: Int!) {
    addAreaProduct(qty: $qty, price: $price, cost: $cost, productId: $productId, bidAreaId: $bidAreaId) {
      id
      qty
      cost
      price
    }
  }
`
