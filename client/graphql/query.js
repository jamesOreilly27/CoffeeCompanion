import { gql } from 'apollo-boost'

/***** User *****/
export const getCurrentUser =  gql`
  {
    currentUser {
      id
      email
      activeCart {
        id
        lineitems {
          id
          price
          quantity
          product {
            name
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
    products {
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
        name
        price
      }
    }
  }
`


/**** products *****/
export const getAllProducts = gql`
  {
    products {
      id
      name
      description
      image
      price
      categories {
        name
      }
    }
  }
`
