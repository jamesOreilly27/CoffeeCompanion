import React from 'react'
import styled from 'styled-components'
import { Form, TextInput, Label, Button } from '../../styled-components'

const Wrapper = styled(Form)`
  background-color: #373738;
  padding: 30px;
  border-radius: 4px;
`

const CreateForm = () => (
  <Wrapper width={25}>
    <Label>
      Company Name
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Email
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Industry
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Address
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Town
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      State
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Zip Code
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Phone Number
    </Label>
    <TextInput type="text">

    </TextInput>
    <Label>
      Local Police Number
    </Label>
    <TextInput type="text">

    </TextInput>
    <Button width={50} height={30} backgroundColor="#296D4D">
      Create
    </Button>
  </Wrapper>
)

export default CreateForm
