import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { deleteNote, getBidDetails } from '../../../graphql'

const Wrapper = styled.button`
  width: 15%;
  height: 80%;
  background-color: #BD2F2A;
  color: #F8F8FF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NoteDelete = ({ id, bidId }) => (
  <Mutation
    mutation={deleteNote}
    update={(cache, { data: { deleteNote } }) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: 1 } }).bidDetails
      const notes = Object.assign(bid.notes)
      const newNotes = notes.filter(note => note.id !== id)

      console.log(Object.assign(bid, { note: newNotes } ))

      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { notes: newNotes }) }
      })
    }}
  >
    {(deleteNote, { data } ) => (
      <Wrapper onClick={() => {
        deleteNote({ variables: { id } })
      }}>
        Del
      </Wrapper>
    )}
  </Mutation>
)

export default NoteDelete
