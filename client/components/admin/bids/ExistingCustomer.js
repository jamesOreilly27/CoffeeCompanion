import React from 'react'
import styled from 'styled-components'
import { Label, Select, Option, Button } from '../../styled-components'
import { Redirect } from 'react-router-dom'
import history from '../../history'
import { Mutation } from 'react-apollo'
import { addExistingCustomer } from '../../../graphql'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #FFF;
  width: 25%;
  align-items: center;
`

const CustomerSelectContainer = styled.div`
  width: 90%;
`


const ExistingCustomer = ({ customers, bidId }) => (
  <Mutation mutation={addExistingCustomer}>
    {(addExistingCustomer, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        addExistingCustomer({ variables: {
          customerId: parseInt(evt.target.customer.value),
          bidId: bidId,
        }})
      }}>
        {customers &&
          <CustomerSelectContainer>
            {data && data.addExistingCustomer && history.push(`/admin/bids/${data.addExistingCustomer.id}`)}
            {data && data.addExistingCustomer && <Redirect to={`/admin/bids/${data.addExistingCustomer.id}`} /> }
            <Label>
              Exisiting Customer
          </Label>
            <Select name="customer">
              {customers.map(customer => (
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
      </Wrapper>
    )}
  </Mutation>
)

export default ExistingCustomer
