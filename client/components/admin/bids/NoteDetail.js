import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { updateNote, getBidDetails } from '../../../graphql'
import { NoteSave, NoteDelete } from '../bids'

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

    this.state = { subject: '', text: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    this.setState({[evt.target.name]: value })
  }

  componentDidMount() {
    this.setState({ subject: this.props.note.subject, text: this.props.note.text })
  }

  render() {
    return (
      <Mutation
        mutation={updateNote}
        update={(cache, { data: { updateNote } }) => {
          const bid = cache.readQuery({ query: getBidDetails, variables: { id: this.props.bidId } }).bidDetails
          const notes = Object.assign(bid.notes)
    
          cache.writeQuery({
            query: getBidDetails,
            data: { bidDetails: Object.assign(bid, { note: notes}) }
          })
        }}
      >
        {(updateNote, { data } ) => (
          <Wrapper onSubmit={evt => {
            evt.preventDefault()
            updateNote({ variables: { id: this.props.note.id, subject: evt.target.subject.value, text: evt.target.text.value } })
            this.props.hideNote()
          }}>
            <Header>
              {console.log(this.props.note)}
              <Input name="subject" type="text" value={this.state.subject} onChange={this.handleChange} />
              <NoteSave subject={this.props.note.subject} text={this.props.note.text} />
              <NoteDelete bidId={this.props.bidId} id={this.props.note.id} />
              <Close onClick={this.props.hideNote}>
                x
              </Close>
            </Header>
            <Body name="text" type="textarea" value={this.state.text} onChange={this.handleChange} />
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default NoteDetail
