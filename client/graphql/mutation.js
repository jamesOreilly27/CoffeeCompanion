import { gql } from 'apollo-boost'


// export const addToCart = gql`

// `

export const removeFromCart = gql`
  mutation($id: Int!) {
    removeFromCart(id: $id)
  }
`
