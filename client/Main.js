import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getAllProducts, getCurrentUser, getAllCategories } from './graphql'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { ProductList, AllCategories, Login, Signup, Logout } from './components'
import { OrderList } from './components/user-account'
import { Header } from './components/header'
import { CategoryHome } from './components/category-home'
import { UserAccount } from './components/user-account'
import { ProductDetail } from './components/product-detail'

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Main = ({ userQuery, productsQuery, categoriesQuery }) => (
  <Router>
    <ContentContainer>
      <Header products={productsQuery.products} categories={categoriesQuery.categories} />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/your-account' render={() => <UserAccount user={userQuery.currentUser} />} />
        <Route exact path='/your-account/orders' render={() => {
          let component
          {
            userQuery.currentUser ?
            component = <OrderList orders={userQuery.currentUser.orders} activeCart={userQuery.currentUser.activeCart} />
            :
            component = <Login />
          }
          return component
        }} />
        <Route exact path='/products/all' render={() => <ProductList products={productsQuery.products} /> } />
        <Route exact path='/categories/:name' component={CategoryHome} />
        <Route exact path='/products/:name' component={ProductDetail} />
        <Route exact path='/categories/all' component={AllCategories} />
      </Switch>
      <Logout />
    </ContentContainer>
  </Router>
)

export default compose(
  graphql(getCurrentUser, { name: 'userQuery' }),
  graphql(getAllProducts, { name: 'productsQuery' }),
  graphql(getAllCategories, { name: 'categoriesQuery' })
)(Main)
