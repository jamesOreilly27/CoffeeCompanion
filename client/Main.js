import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getAllProducts, getCurrentUser } from './graphql'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { ProductList, AllCategories, ProductDetail, Login, Signup, Logout, OrderList } from './components'
import { checkLoggedIn } from './components/helpers'
import { Header } from './components/header'
import { CategoryHome } from './components/category-home'
import { UserAccount } from './components/user-account'

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
            <Route exact path='/your-account' render={() => <UserAccount user={props.userQuery.currentUser} />} />
            <Route exact path='/your-account/orders' render={() => {
              let component
              {props.userQuery.currentUser ?
                component = <OrderList orders={props.userQuery.currentUser.carts } />
              :
                component = <Login />
              }
              return component
            }} />
            <Route exact path='/products/all' render={() => <ProductList products={props.productQuery.products} />} />
            <Route exact path='/products/:category' component={CategoryHome} />
            <Route exact path='/product/:id' component={ProductDetail} />
            <Route exact path='/allcategories' component={AllCategories} />
          </Switch>
          <Logout />
        </ContentContainer>
    </Router>
  )
}

export default compose(
  graphql(getCurrentUser, { name: 'userQuery' }),
  graphql(getAllProducts, { name: 'productQuery' })
  )(Main)
