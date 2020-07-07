import React from 'react'
import styled from 'styled-components'
import { Form, Label, Select, Option, TextInput, Button } from '../../styled-components'

const Wrapper = styled(Form)`
  
`

const CustomerSelectContainer = styled.div`
  width: 35%;
`

const NewBidForm = ({ customers }) => (
  <Wrapper width={50}>
    {customers &&
      <CustomerSelectContainer>
        <Label> Customer </Label>
        <Select>
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
)

export default NewBidForm
