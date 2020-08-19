import React, { Component } from 'react'
import styled from 'styled-components'
import { Keypad } from '../customers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ClearButton = styled.button`
  width: 35%;
  height: 50px;
  background-color: #037BC5;
  font-size: 26px;
  color: #F8F8FF;
  margin-top: 20px;
  border: none;
`

class ArmingPanel extends Component {
  constructor(props) {
    super(props)

    this.state = { passcode: '' }

    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.clearPasscode = this.clearPasscode.bind(this)
  }

  handleNumberClick(number) {
    if (number !== 'Arm' && number !== 'Disarm') {
      this.setState({ passcode: `${this.state.passcode}${number}` })
    } else {
      this.clearPasscode()
    }
  }

  clearPasscode() {
    this.setState({ passcode: '' })
  }

  render() {
    return (
      <Wrapper>
        <Keypad handleNumberClick={this.handleNumberClick} handleArmingClick={this.props.handleArmingClick} passcode={this.state.passcode} relay={1} />
        <ClearButton onClick={this.clearPasscode}>
          Clear
        </ClearButton>
      </Wrapper>
    )
  }

}

export default ArmingPanel
