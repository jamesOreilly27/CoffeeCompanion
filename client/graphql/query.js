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
      name
      description
      image
      price
      featured
      categories {
        name
      }
    }
  }
`

export const getProductDetail = gql`
query($name: String!) {
 productDetails(name: $name) {
   id
   name
   description
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
        }
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
      bidAreas {
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
  }
`
