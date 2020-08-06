import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled-components'
import { Mutation } from 'react-apollo'
import { createCustomer } from '../../../graphql'

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

const CreateForm = ({ bidId }) => (
  <Mutation mutation={createCustomer}>
    {(createCustomer, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        createCustomer({ variables: {
          companyName: evt.target.companyName.value,
          email: evt.target.email.value,
          phoneNumber: evt.target.phoneNumber.value,
          address: evt.target.address.value,
          town: evt.target.town.value,
          zipCode: evt.target.zipCode.value,
          state: evt.target.state.value
        }})
      }}>
        <Row>
          <RowItemThirds>
            <Label> Company Name </Label>
            <TextInput type="text" name="companyName"/>
          </RowItemThirds>
          <RowItemThirds>
            <Label> Email </Label>
            <TextInput type="text" name="email"/>
          </RowItemThirds>
          <RowItemThirds>
            <Label> Phone Number </Label>
            <TextInput type="text" name="phoneNumber"/>
          </RowItemThirds>
        </Row>
        <Row>
          <AddyItem>
            <Label> Address </Label>
            <TextInput type="text" name="address"/>
          </AddyItem>
          <TownItem>
            <Label> Town </Label>
            <TextInput type="text" name="town"/>
          </TownItem>
          <ZipItem>
            <Label> Zip Code </Label>
            <TextInput type="text" name="zipCode"/>
          </ZipItem>
          <StateItem>
            <Label> State </Label>
            <TextInput type="text" name="state"/>
          </StateItem>
        </Row>

        <Button type="submit" width={50} height={30} backgroundColor="#296D4D">
          Create
        </Button>
      </Wrapper>
    )}
  </Mutation>
)

export default CreateForm
