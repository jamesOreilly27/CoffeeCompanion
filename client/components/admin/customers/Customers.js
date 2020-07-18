import React, { Component } from 'react'
import styled from 'styled-components'
import { sortCustomers, getActiveCustomer } from './helpers'
import { CustomerList, ContactList } from '../customers'
import { Title } from '../../styled-components'

const Wrapper = styled.div`
  
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99%;
  background-color: #373738;
  margin-bottom: 5px;
  border-radius: 4px;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20px;
  width: 27%;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const CustomerTitle = styled(Title)`
  margin-left: 2vw;
`

class Customers extends Component {
  constructor(props) {
    super(props)

    this.state = { activeCustomer: '2nd Chance Salvage' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(str) {
    this.setState({ activeCustomer: str })
  }

  render() {
    const customers = this.props.customers
    return (
      <Wrapper>
        {customers &&
          <Container>
            <Header>
              <CustomerTitle>
                Customers
              </CustomerTitle>
            </Header>
            <ContentContainer>
              <Sidebar>
                <CustomerList customers={sortCustomers(customers)} activeName={this.state.activeCustomer} handleClick={this.handleClick} home />
              </Sidebar>
              <ContactList customer={getActiveCustomer(this.state.activeCustomer, customers)} />
            </ContentContainer>
          </Container>
        }
      </Wrapper>
    )
  }
}

export default Customers
