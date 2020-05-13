import { gql } from 'apollo-boost'


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

    currentUser {
      id
      email
    }
  }
`

/***** carts *****/
// export const getMyOrders = gql`
//   myOrders
// `
