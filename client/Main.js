import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { getAllProducts } from './graphql'
import { graphql } from 'react-apollo'
import { ProductList, AllCategories, ProductDetail, Login, Signup } from './components'
import { Header } from './components/header'
import { CategoryHome } from './components/category-home'

const client = new ApolloClient({
  uri: 'http://localhost:8332/graphql'
})

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Main = props => {
  return (
    <Router>
        <ContentContainer>
          <Header />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/products/all' render={() => <ProductList products={props.data.products} />} />
            <Route exact path='/products/:category' component={CategoryHome} />
            <Route exact path='/product/:id' component={ProductDetail} />
            <Route exact path='/allcategories' component={AllCategories} />
          </Switch>
        </ContentContainer>
    </Router>
  )
}

export default graphql(getAllProducts)(Main)
