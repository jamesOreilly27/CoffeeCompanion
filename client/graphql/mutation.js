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
  mutation($vendor: String!, $name: String!, $partNumber: String!, $description: String!, $cost: Float!, $price: Float!, $laborTime: Float!, $featured: Boolean!) {
    upsertProduct(vendor: $vendor, name: $name, partNumber: $partNumber, description: $description, cost: $cost, price: $price, laborTime: $laborTime, featured: $featured) {
      id
      vendor
      name
      partNumber
      description
      cost
      price
      laborTime
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
      status
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

export const updateStatus = gql`
  mutation($id: Int!, $status: String!) {
    updateStatus(id: $id, status: $status) {
      id
      status
    }
  }
`

export const updateHasHeaderImage = gql`
  mutation($id: Int!, $hasHeaderImage: Boolean!) {
    updateHasHeaderImage(id: $id, hasHeaderImage: $hasHeaderImage) {
      id
      status
      hasHeaderImage
    }
  }
`

export const updateAreaTitle = gql`
  mutation($id: Int!, $title: String!) {
    updateAreaTitle(id: $id, title: $title) {
      title
      id
    }
  }
`

export const removeBidArea = gql`
  mutation($id: Int!) {
    removeBidArea(id: $id)
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
  mutation($id: Int!, $bidId: Int!, $laborRate: Int!, $laborTotal: Float!, $laborTime: Float!) {
    incrementProductQty(id: $id, bidId: $bidId, laborRate: $laborRate, laborTotal: $laborTotal, laborTime: $laborTime) {
      qty
    }
  }
`

export const decrementProductQty = gql`
  mutation($id: Int!, $bidId: Int!, $laborRate: Int!, $laborTotal: Float!, $laborTime: Float!) {
    decrementProductQty(id: $id, bidId: $bidId, laborRate: $laborRate, laborTotal: $laborTotal, laborTime: $laborTime) {
      qty
    }
  }
`

export const removeAreaProduct = gql`
  mutation($id: Int!, $bidId: Int!, $qty: Int!, $laborTotal: Float!, $laborRate: Int!, $laborTime: Float!) {
    removeAreaProduct(id: $id, bidId: $bidId, qty: $qty, laborTotal: $laborTotal, laborRate: $laborRate, laborTime: $laborTime) {
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

export const addAreaProduct = gql`
  mutation($qty: Int!, $price: Float!, $cost: Float!, $productId: Int!, $bidAreaId: Int!, $bidId: Int!, $laborTime: Float!, $laborRate: Int!, $laborTotal: Float!) {
    addAreaProduct(qty: $qty, price: $price, cost: $cost, productId: $productId, bidAreaId: $bidAreaId, bidId: $bidId, laborTime: $laborTime, laborRate: $laborRate, laborTotal: $laborTotal) {
      id
      qty
      cost
      price
      product {
        name
        partNumber
        description
        laborTime
      }
    }
  }
`

export const updateAreaProductPrice = gql`
  mutation($id: Int!, $price: Float!) {
    updateAreaProductPrice(id: $id, price: $price) {
      id
      qty
      cost
      price
      product {
        name
        partNumber
        description
      }
    }
  }
`

export const updateAreaProductCost = gql`
  mutation($id: Int!, $cost: Float!) {
    updateAreaProductCost(id: $id, cost: $cost) {
      id
      qty
      cost
      price
      product {
        name
        partNumber
        description
      }
    }
  }
`

export const createCustomer = gql`
  mutation($companyName: String!, $email: String!, $phoneNumber: String!, $address: String!, $town: String!, $zipCode: String!) {
    createCustomer(companyName: $companyName, email: $email, phoneNumber: $phoneNumber, address: $address, town: $town, zipCode: $zipCode) {
      companyName
    }
  }
`

export const addCustomer = gql`
mutation($companyName: String!, $email: String!, $phoneNumber: String!, $address: String!, $town: String!, $zipCode: String!, $id: Int!, $taxExempt: Boolean! ) {
  addCustomer(companyName: $companyName, email: $email, phoneNumber: $phoneNumber, address: $address, town: $town, zipCode: $zipCode, id: $id, taxExempt: $taxExempt) {
    id
  }
}
`

export const createNote = gql`
  mutation($bidId: Int!, $subject: String!, $text: String!) {
    createNote(bidId: $bidId, subject: $subject, text: $text) {
      id
      subject
      text
    }
  }
`

export const updateNote = gql`
  mutation($id: Int!, $subject: String!, $text: String!) {
    updateNote(id: $id, subject: $subject, text: $text) {
      id
      subject
      text
    }
  }
`

export const deleteNote = gql`
  mutation($id: Int!) {
    deleteNote(id: $id)
  }
`