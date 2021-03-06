import React, { Component } from 'react'
import styled from 'styled-components'
import { Title } from '../styled-components'
import { Route, Switch } from 'react-router-dom'
import { AdminLink, Orders, Materials } from '../admin'
import { Bids, BidDetail, BidPDF, NewBidForm } from './bids'
import { Products } from './products'
import { UpdateProduct } from './product-update'
import { Customers, ArmedPanel } from './customers'

const Wrapper = styled.div`

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94.5vw;
  height: 5vh;
  background-color: #383737;
  border-radius: 4px;
  margin-bottom: 1vh;
  padding: 10px;
`

const adminTools = [
  { name: "Customers" },
  { name: "Orders" },
  { name: "Products" },
  { name: "Materials" },
  { name: "Bids" }
]

class AdminDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        {this.props.user && this.props.user.isAdmin && this.props.customers &&
          <Container>
            <Title margin={2}> Admin Dashboard </Title>
            <Navbar>
              {adminTools.map(tool => <AdminLink key={tool.name} linkTo={tool.name} />)}
            </Navbar>
            <Switch>
              <Route exact path="/admin/customers" render={() => <Customers customers={this.props.customers} /> } />
              <Route exact path="/admin/customers/armed-panel" render={() => <ArmedPanel customers={this.props.customers} /> } />
              <Route exact path="/admin/products" render={() => <Products products={this.props.products} />} />
              <Route exact path="/admin/product/:name" component={UpdateProduct} />
              <Route exact path="/admin/orders" component={Orders} />
              <Route exact path="/admin/materials" component={Materials} />
              <Route exact path="/admin/bids" render={() => <Bids user={this.props.user} /> } />
              <Route exact path="/admin/bids/new/:bidId" render={matchProps => <NewBidForm {...matchProps} customers={this.props.customers} /> } />
              <Route exact path="/admin/bids/:id" component={BidDetail} />
              <Route exact path="/admin/bids/:id/pdf" component={BidPDF} />
            </Switch>
          </Container>
        }
      </Wrapper>
    )
  }
}

export default AdminDashboard
