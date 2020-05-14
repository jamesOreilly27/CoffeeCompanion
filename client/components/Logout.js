import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const logoutMutation = gql`
  mutation {
    logout
  }
`

const Logout = () => {
  const [logout, { data }] = useMutation(logoutMutation)
  return (
    <button onClick={() => {
      logout()
    }}>
      Logout
    </button>
  )
}

export default Logout
