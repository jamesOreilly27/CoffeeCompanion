import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Dance from './components/Dance'

const client = new ApolloClient({
  uri: 'http://localhost:8332/graphql'
})

const Main = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path='/dance' component={Dance} />
        </Switch>
      </ApolloProvider>
    </Router>
  )
}

export default Main
