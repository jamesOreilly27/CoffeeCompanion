import React from 'react'
import ReactDOM from 'react-dom'
import library from './icons'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Main from './Main'


const client = new ApolloClient({
  uri: '/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Main client={client}/>
  </ApolloProvider>,
  document.getElementById('app')
)
