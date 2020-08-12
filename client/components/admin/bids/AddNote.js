import React from 'react'
import styled from 'styled-components'
import { Note } from '../bids'
import { Mutation } from 'react-apollo'
import { createNote, getBidDetails } from '../../../graphql'

const Wrapper = styled.div`
  
`

const AddLink = styled.div`
  color: #58D588;
  cursor: pointer;
`

const AddNote = ({ bidId }) => (
  <Mutation
    mutation={createNote}
    update={(cache, { data: { createNote } }) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails

      const newNotes = Object.assign(bid.notes)
      newNotes.push(createNote)

      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { note: newNotes })}
      })
    }}
  >
    {(createNote, { data }) => (
      <Wrapper>
        {data && data.createNote && 
          <Note bidId={bidId} note={data.createNote} created />
        }
        <AddLink onClick={() => {
          createNote({ variables: { bidId, subject: 'Subject', text: 'text' } })
        }}>
          Add A Note
        </AddLink>
      </Wrapper>
    )}
  </Mutation>
)

export default AddNote
