import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { AllProducts, AllCategories, ProductDetail, Login, Signup } from './components'
import { Header } from './components/header'

const client = new ApolloClient({
  uri: 'http://localhost:8332/graphql'
})

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Main = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ContentContainer>
          <Header />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/product/:id' component={ProductDetail} />
            <Route exact path='/allcategories' component={AllCategories} />
          </Switch>
        </ContentContainer>
      </ApolloProvider>
    </Router>
  )
}

export default Main
