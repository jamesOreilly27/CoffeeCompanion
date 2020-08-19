import React, { Component } from 'react'
import styled from 'styled-components'
import { sortCustomers } from './helpers'
import { CustomerList, ArmingPanel } from '../customers'
import { Title } from '../../styled-components'
import axios from 'axios'

const Wrapper = styled.div`
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
  width: 95.5vw;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const CustomerTitle = styled(Title)`
  margin-left: 2vw;
`

class ArmedPanel extends Component {
  constructor(props) {
    super(props)

    this.state = { relayState: { } }

    this.handleArmingClick = this.handleArmingClick.bind(this)
    this.handleArm = this.handleArm.bind(this)
    this.handleDisarm = this.handleDisarm.bind(this)
  }

  handleArmingClick(number) {
    if(number === 'Arm') {
      axios.get('/relay/turn-on/9011/1')
      .then(res => { this.setState({ relayState: res.data.datavalues }) })
      .catch(err => console.log(err))
    } else if(number === 'Disarm') {
      axios.get('/relay/turn-off/9011/2')
      .then(res => { this.setState({ relayState: res.data.datavalues }) })
      .catch(err => console.log(err))
    }
  }

  handleArm(port, relay) {
    axios.get(`/relay/turn-on/${port}/${relay}`)
    .then(res => { this.setState({ relayState: res.data.datavalues }) })
    .catch(err => console.log(err))
  }

  handleDisarm(port, relay) {
    axios.get(`/relay/turn-off/${port}/${relay}`)
    .then(res => { this.setState({ relayState: res.data.datavalues }) })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    axios.get('/relay/read-state/9011')
    .then(res => { this.setState({ relayState: res.data.datavalues }) })
    .catch(err => console.log(err))

    this.interval = setInterval(() => {
      axios.get('/relay/read-state/9011')
      .then(res => { this.setState({ relayState: res.data.datavalues }) })
      .catch(err => console.log(err))
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <CustomerTitle>
            Customers
          </CustomerTitle>
        </Header>
        <Sidebar>
          {this.props.customers && this.state.relayState.relay1state &&
            <CustomerList customers={sortCustomers(this.props.customers)} arm={this.handleArm} disarm={this.handleDisarm} relayState={this.state.relayState} />
          }
        </Sidebar>
        <ArmingPanel handleArmingClick={this.handleArmingClick} />
      </Wrapper>
    )
  }
}

export default ArmedPanel
