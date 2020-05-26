import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router-dom'
import history from './history'

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
      history.push('/login')
    }}>
      { data && data.logout && <Redirect to="/" /> }
      Logout
    </button>
  )
}

export default Logout
