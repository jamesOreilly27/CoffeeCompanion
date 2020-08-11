import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { updateNote } from '../../../graphql'
import { NoteSave } from '../bids'

const Wrapper = styled.form`
  position: absolute;
  top: 368px;
  left: 430px;
  height: 200px;
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #272727;
  z-index: 4;
`

const Header = styled.div`
  height: 18%;
  width: 100%;
  border: 2px solid #4E4E6F;
  display: flex;
  justify-content: space-between;
`

const Close = styled.div`
  background-color: #bd2f29;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 20px;
  height: 18px;
  color: #F8F8FF;
`

const Input = styled.input`
  background-color: #272727;
  border: 2px solid #4E4E6F;
  color: #F8F8FF;
  &::-webkit-input-placeholder {
    color: #F8F8FF;
  }
`

const Body = styled.input`
  height: 82%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: #272727;
  border: 2px solid #4E4E6F;
  color: #F8F8FF;
  &::-webkit-input-placeholder {
    color: #F8F8FF;
  }
`

class NoteDetail extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Mutation mutation={updateNote}>
        {(updateNote, { data } ) => (
          <Wrapper onSubmit={evt => {
            evt.preventDefault()
            updateNote({ variables: { id: this.props.note.id, subject: evt.target.subject.value, text: evt.target.text.value } })
          }}>
            <Header>
              <Input name="subject" type="text" placeholder={this.props.note.subject} />
              <NoteSave subject={this.props.note.subject} text={this.props.note.text} />
              <Close onClick={this.props.hideNote}>
                x
              </Close>
            </Header>
            <Body name="text" type="textarea" placeholder={this.props.note.text} />
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default NoteDetail


  // ({ note, hideNote }) => (
  //   <Wrapper>
  //     <Header>
  //       <Input type="text" placeholder={note.subject} />
  //       <Close onClick={hideNote}>
  //         x
  //     </Close>
  //     </Header>
  //     <Body type="textarea" placeholder={note.text} />
  //   </Wrapper>
  // )