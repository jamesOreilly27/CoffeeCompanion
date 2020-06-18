import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addBidArea, getBidDetails } from '../../../graphql'
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

const Button = styled.button`
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

    this.state = { displayInput: false, title: '' }

    this.flipState = this.flipState.bind(this)
  }

  flipState() {
    this.setState({ displayInput: !this.state.displayInput })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.displayInput && this.state.displayInput !== prevState.displayInput) {
      this.props.flipTrue()
    }
  }

  render() {
    return (
      <Mutation
        mutation={addBidArea}
        update={(cache, { data: { createBidArea } }) => {
          const bid = cache.readQuery({ query: getBidDetails, variables: { id: this.props.bid.id }}).bidDetails
          const newAreas = bid.bidAreas.concat([createBidArea])
          cache.writeQuery({
            query: getBidDetails,
            data: { bidDetails: Object.assign(bid, { bidAreas: newAreas } ) }
          })
        }}
      >
        {(addBidArea, { data }) => (
          <Wrapper onSubmit={evt => {
            evt.preventDefault()
            addBidArea({ variables: { title: evt.target.title.value, bidId: this.props.bid.id }})
            this.flipState()
            this.props.flipFalse()
          }}>
            {this.state.displayInput &&
              <InputField>
                <SmallerText type="text" name="title"></SmallerText>
                <SubmitButton type="submit">
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
        )}
      </Mutation>
    )
  }
}


export default AddLocation
