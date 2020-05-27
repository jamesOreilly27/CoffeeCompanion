import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { AdminLink, Products, Customers, Orders, Materials, Bids } from '../admin'

const Wrapper = styled.div`

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`

`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98vw;
  height: 5vh;
  background-color: #FFF;
  border-radius: 4px;
  margin-bottom: 5vh;
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
        {this.props.user && this.props.user.isAdmin &&
          <Container>
            <Title> Admin Dashboard </Title>
            <Navbar>
              {adminTools.map(tool => <AdminLink key={tool.name} linkTo={tool.name} />)}
            </Navbar>
            <Switch>
              <Route exact path="/admin/customers" component={Customers} />
              <Route exact path="/admin/products" component={Products} />
              <Route exact path="/admin/orders" component={Orders} />
              <Route exact path="/admin/materials" component={Materials} />
              <Route exact path="/admin/bids" component={Bids} />
            </Switch>
          </Container>
        }
      </Wrapper>
    )
  }
}

export default AdminDashboard
