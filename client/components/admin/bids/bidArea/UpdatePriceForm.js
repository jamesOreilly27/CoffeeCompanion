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

const UpdatePriceForm = ({ areaProductId, price, handleSubmit, qty, bidId, bidAreaId }) => (
  <Mutation
    mutation={updateAreaProductPrice}
    update={( cache, { data: { updateAreaProductPrice } }) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      const areas = bid.bidAreas
      const area = areas.filter(area => area.id === bidAreaId)[0] 

      area.products.forEach(product => {
        if(product.id === areaProductId) {
          area.products.splice(area.products.indexOf(product), 1, updateAreaProductPrice)
        }
      })

      const newBid = Object.assign(bid, { bidAreas: areas } )

      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: areas } )}
      })

    }}
  >
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
