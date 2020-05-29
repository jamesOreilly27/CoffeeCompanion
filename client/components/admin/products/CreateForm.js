import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { Form, Label, LabelName, TextInput, HalfLabel, TextArea, Button } from '../../styled-components'

const Wrapper = styled.div`

`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const CreateForm = () => (
  <Wrapper>
    <Form width={25}>
      <Label margin={1}>
        <LabelName margin={1}> Name </LabelName>
        <TextInput type="text" name="name" required />
      </Label>
      <Label margin={1}>
        <LabelName margin={1}> Description </LabelName>
        <TextArea type="text" name="description" required />
      </Label>
      <FlexContainer>
        <HalfLabel margin={1}>
          <LabelName margin={1}> Price </LabelName>
          <TextInput type="text" name="price" required />
        </HalfLabel>
        <HalfLabel margin={1}>
          <LabelName margin={1}> Inv. </LabelName>
          <TextInput type="text" name="inventory" required />
        </HalfLabel>
      </FlexContainer>
      <Button type="submit" backgroundColor="#2091E8" color="#F8F8FF" margin={3}>
        Create
      </Button>
    </Form>
  </Wrapper>
)

export default CreateForm
