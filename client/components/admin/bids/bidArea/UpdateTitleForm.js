import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { updateAreaTitle, getBidDetails } from '../../../../graphql'
import { TextInput, Button } from '../../../styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled(TextInput)`
  width: 85%;
  height: 5.5vh;
  font-size: 1.3em;
`

const Submit = styled(Button)`
  margin-left: 2vw;
`

const UpdateTitleForm = ({ areaId, title, handleSubmit, updateTitleState }) => (
  <Mutation mutation={updateAreaTitle}>
    {(updateAreaTitle, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        updateAreaTitle({ variables: { id: areaId, title: evt.target.title.value } })
        handleSubmit()
        updateTitleState(evt.target.title.value)
      }}>
        <Input
          type="text"
          name="title"
          placeholder={title}
        >
        </Input>
        <Submit
          type="submit"
          backgroundColor="#296D4D"
          width={40}
          height={30}
          >
          Submit
        </Submit>
      </Wrapper>
    )}
  </Mutation>
)

export default UpdateTitleForm
