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
  <Mutation mutation={createNote}>
    {(createNote, { data }) => (
      <Wrapper>
        {data && data.createNote && 
          <Note note={data.createNote} created />
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
