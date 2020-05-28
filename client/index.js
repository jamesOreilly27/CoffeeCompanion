import React from 'react'
import ReactDOM from 'react-dom'
import './icons'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Main from './Main'


const client = new ApolloClient({
  uri: 'http://localhost:8332/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Main client={client}/>
  </ApolloProvider>,
  document.getElementById('app')
)
