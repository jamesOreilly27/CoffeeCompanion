import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getAllProducts, getCurrentUser, getAllCategories } from './graphql'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { ProductList, CategoriesList, Login, Signup, Logout } from './components'
import { OrderList } from './components/user-account'
import { Header } from './components/header'
import { CategoryHome } from './components/category-home'
import { UserAccount } from './components/user-account'
import { ProductDetail } from './components/product-detail'
import { Homepage } from './components/homepage'
import { AdminDashboard } from './components/admin'
import { Footer } from './components/footer'

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

class Main extends Component {
  constructor(props) {
    super(props)
      this.state = { loggedIn: false }

      this.controlLoginState = this.controlLoginState.bind(this)
  }

  controlLoginState() {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  render() {
    return (
      <Router>
        <ContentContainer>
          <Header products={this.props.productsQuery.products} categories={this.props.categoriesQuery.categories} loggedIn={this.state.loggedIn} />
          <Switch>
            <Route exact path='/' render={() => <Homepage products={this.props.productsQuery.products} categories={this.props.categoriesQuery.categories} />} />
            <Route exact path='/login' render={() => <Login user={this.props.userQuery.currentUser} handleSubmit={this.controlLoginState} /> } />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/your-account' render={() => <UserAccount user={this.props.userQuery.currentUser} />} />
            <Route exact path='/your-account/orders' render={() => {
              let component
              {
                this.props.userQuery.currentUser ?
                  component = <OrderList orders={this.props.userQuery.currentUser.orders} activeCart={this.props.userQuery.currentUser.activeCart} />
                  :
                  component = <Login />
              }
              return component
            }} />
            <Route exact path='/products/all' render={() => <ProductList products={this.props.productsQuery.products} />} />
            <Route exact path='/categories/all' render={() => <CategoriesList categories={this.props.categoriesQuery.categories} />} />
            <Route exact path='/categories/:name' component={CategoryHome} />
            <Route exact path='/products/:name' component={ProductDetail} />
            <Route exact path="/admin" render={() => <AdminDashboard user={this.props.userQuery.currentUser} /> } />
          </Switch>
          <Logout handleClick={this.controlLoginState} />
          <Footer />
        </ContentContainer>
      </Router>
    )
  }
}

export default compose(
  graphql(getCurrentUser, { name: 'userQuery' }),
  graphql(getAllProducts, { name: 'productsQuery' }),
  graphql(getAllCategories, { name: 'categoriesQuery' })
)(Main)
