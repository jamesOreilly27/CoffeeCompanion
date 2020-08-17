import React from 'react'
import styled from 'styled-components'
import { CreateForm } from '../customers'
import { Label, Select, Option, TextInput, Button } from '../../styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96%;
`

const CustomerSelectContainer = styled.div`
  width: 90%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #FFF;
`

const ExistingContainer = styled(Container)`
  width: 25%;
  align-items: center;
`

const NewContainer = styled(Container)`
  width: 72%;
  align-items: center;
`

const NewBidForm = props => (
  <Wrapper width={50}>
    <ExistingContainer>
      {props.customers &&
        <CustomerSelectContainer>
          <Label>Exisiting Customer</Label>
          <Select>
            {props.customers.map(customer => (
              <Option value={customer.id}>
                {customer.companyName}
              </Option>
            ))}
          </Select>
        </CustomerSelectContainer>
      }
      <Button type="submit" width={35} height={25} backgroundColor="#296D4D">
        Create
      </Button>
    </ExistingContainer>
    <NewContainer>
      <Label> Create a New Customer </Label>
      <CreateForm bidId={parseInt(props.match.params.bidId)} />
    </NewContainer>
  </Wrapper>
)

export default NewBidForm
