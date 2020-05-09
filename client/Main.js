import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Dance from './components/Dance'
import AllProducts from './components/AllProducts'

const client = new ApolloClient({
  uri: 'http://localhost:8332/graphql'
})

const Main = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path='/dance' component={Dance} />
          <Route exact path='/allproducts' component={AllProducts} />
        </Switch>
      </ApolloProvider>
    </Router>
  )
}

export default Main
