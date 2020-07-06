import React from 'react'
import styled from 'styled-components'
import { TextInput, Button } from '../../../styled-components'
import { Mutation } from 'react-apollo'
import { updateAreaProductPrice, getBidDetails } from '../../../../graphql'

const Wrapper = styled.form`

`

const Input = styled(TextInput)`
  color: #F8F8FF;
`

const Submit = styled(Button)`

`

const UpdatePriceForm = ({ areaProductId, price, handleSubmit, qty }) => (
  <Mutation mutation={updateAreaProductPrice}>
    {(updateAreaProductPrice, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        if(evt.target.price.value === '') {
          updateAreaProductPrice({ variables: { id: areaProductId, price: (parseFloat(evt.target.price.placeholder) / qty ) } })
        } else {
          updateAreaProductPrice({ variables: { id: areaProductId, price: (parseFloat(evt.target.price.value) / qty ) } })
        }
        handleSubmit()
      }}>
        <Input type="text" name="price" placeholder={price * qty}>

        </Input>
        <Submit type="submit" width={105} height={30} backgroundColor="#296D4D">
          Update
        </Submit>
      </Wrapper>
    )}
  </Mutation>
)

export default UpdatePriceForm
