import React, { Component } from 'react'
import styled from 'styled-components'
import { NoteDetail } from '../bids'

const Wrapper = styled.div`
  width: 95%;
  font-size: 20px;
  margin: 1vh 0 0.5vh;
`

class Note extends Component {
  constructor(props) {
    super(props)

    this.state = { showNote: this.props.created }

    this.showNote = this.showNote.bind(this)
    this.hideNote = this.hideNote.bind(this)
  }

  showNote() {
    this.setState({ showNote: true })
  }

  hideNote() {
    this.setState({ showNote: false })
  }

  render() {
    const note = this.props.note
    return (
      <Wrapper>
        {console.log('NOTE', note)}
        {!this.props.created &&
          <div onClick={this.showNote}>
            {note.subject}
          </div>
        }
        {this.state.showNote &&
          <NoteDetail bidId={this.props.bidId} note={note} hideNote={this.hideNote} created={this.props.created} />
        }
      </Wrapper>
    )
  }
}

export default Note
