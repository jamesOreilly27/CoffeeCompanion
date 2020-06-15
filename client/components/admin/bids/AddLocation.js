import React, { Component } from 'react'
import styled from 'styled-components'
import { TextInput } from '../../styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SmallerText = styled(TextInput)`
  width: 70%;
`

const Button = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 100%;
  color: #FFF;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubmitButton = styled(Button)`
  background-color: #58D558;
`

const StartButton = styled.div`
  color: #58D558;
  cursor: pointer;
`

const CancelButton = styled(Button)`
  background-color: #D92121;
`

class AddLocation extends Component {
  constructor(props) {
    super(props)

    this.state = { displayInput: false }

    this.flipState = this.flipState.bind(this)
  }

  flipState() {
    this.setState({ displayInput: !this.state.displayInput })
  }

  render() {
    return (
      <Wrapper>
        {this.state.displayInput &&
          <InputField>
            <SmallerText></SmallerText>
            <SubmitButton>
              +
            </SubmitButton>
            <CancelButton onClick={this.flipState}>
              -
            </CancelButton>
          </InputField>
        }
        {!this.state.displayInput &&
          <StartButton onClick={this.flipState}>
            Add Location
          </StartButton>
        }
      </Wrapper>
    )
  }
}


export default AddLocation
