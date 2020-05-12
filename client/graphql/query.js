import { gql } from 'apollo-boost'

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
