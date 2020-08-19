import { gql } from 'apollo-boost'

/***** User *****/
export const getCurrentUser = gql`
  {
    currentUser {
      id
      firstName
      isAdmin
      email
      activeCart {
        id
        lineitems {
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
      orders {
        id
        lineitems {
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
    }
  }
`


/***** categories *****/
export const getAllCategories = gql`
{
  categories {
    name
    description
    featured
    products {
      id
      name
      description
      price
    }
  }
}
`

export const getOneCategory = gql`
  query($name: String!){
    singleCategory(name: $name) {
      name
      description
      products {
        id
        name
        price
      }
    }
  }
`


/***** products *****/
export const getAllProducts = gql`
  {
    products {
      id
      name
      partNumber
      description
      image
      cost
      price
      featured
      laborTime
    }
  }
`

export const getProductDetail = gql`
query($name: String!) {
 productDetails(name: $name) {
   id
   name
   description
   cost
   price
   featured
   reviews {
     content
     rating
   }
 }
}
`

export const getProductByName = gql`
  query($name: String!) {
    getProductByName(name: $name) {
      name
      id
    }
  }
`

export const getProductForUpdate = gql`
  query($name: String!) {
    getProductByName(name: $name) {
      id
      name
      description
      price
      image
      featured
    }
  }
`

/***** Bids *****/
export const getAllBids = gql`
  {
    bids {
      id
      title
      status
      bidAreas {
        id
        products {
          id
          cost
          price
          qty
        }
      }
      customer {
        id
      }
    }
  }
`

export const getBidDetails = gql`
  query($id: Int!) {
    bidDetails(id: $id) {
      id
      title
      status
      laborRate
      laborTotal
      bidAreas {
        id
        title
        products {
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
      customer {
        id
        companyName
        phoneNumber
        address
        town
        zipCode
        state
        taxExempt
      }
      notes {
        id
        subject
        text
      }
    }
  }
`

export const allCustomers = gql`
  {
    allCustomers {
      id
      companyName
      industry
      address
      town
      zipCode
      localPolicePhone
      email
      relayPort
      relayId
      taxExempt
      contacts {
        id
        firstName
        lastName
        phoneNumber
        email
        passcode
        primary
      }
    }
  }
`