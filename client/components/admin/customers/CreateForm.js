import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled-components'

const Wrapper = styled.form`
  width: 69vw;
  background-color: #373738;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 15px
`

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
`

const RowItemThirds = styled(RowItem)`
  width: 29%;
`

const AddyItem = styled(RowItem)`
  width: 29%;
`

const TownItem = styled(RowItem)`
  width: 18%;
  margin-right: 20px;
`

const ZipItem = styled(RowItem)`
  width: 12%;
  margin-right: 20px;
`

const StateItem = styled(RowItem)`
  width: 5%;
`

const Label = styled.label`
  width: 100%;
  color: #F8F8FF;
`

const TextInput = styled.input`
  width: 100%;
  height: 25px;
`

const CreateForm = () => (
  <Wrapper>
    <Row>
      <RowItemThirds>
        <Label> Company Name </Label>
        <TextInput type="text"> </TextInput>
      </RowItemThirds>
      <RowItemThirds>
        <Label> Email </Label>
        <TextInput type="text"> </TextInput>
      </RowItemThirds>
      <RowItemThirds>
        <Label> Phone Number </Label>
        <TextInput type="text"> </TextInput>
      </RowItemThirds>
    </Row>
    <Row>
      <AddyItem>
        <Label> Address </Label>
        <TextInput type="text"></TextInput>
      </AddyItem>
      <TownItem>
        <Label> Town </Label>
        <TextInput type="text"></TextInput>
      </TownItem>
      <ZipItem>
        <Label> Zip Code </Label>
        <TextInput type="text"></TextInput>
      </ZipItem>
      <StateItem>
        <Label> State </Label>
        <TextInput type="text"></TextInput>
      </StateItem>
    </Row>

    <Button width={50} height={30} backgroundColor="#296D4D">
      Create
    </Button>
  </Wrapper>
)

export default CreateForm
