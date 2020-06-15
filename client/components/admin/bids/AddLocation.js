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

const SubmitButton = styled.button`
  border-radius: 100%;
  background-color: #58D558;
  color: #FFF;
  border: none;
`

const StartButton = styled.div`
  color: #58D558;
  cursor: pointer;
`

class AddLocation extends Component {
  constructor(props) {
    super(props)

    this.state = { displayInput: false }
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
            <SubmitButton> + </SubmitButton>
          </InputField>
        }
        {!this.state.displayInput &&
          <StartButton onClick={() => {
            this.flipState()
          }}>
            Add Location
          </StartButton>
        }
      </Wrapper>
    )
  }
}


export default AddLocation
