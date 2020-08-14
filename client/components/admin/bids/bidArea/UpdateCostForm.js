import React from 'react'
import styled from 'styled-components'
import { TextInput, Button } from '../../../styled-components'
import { Mutation } from 'react-apollo'
import { updateAreaProductCost, getBidDetails } from '../../../../graphql'

const Wrapper = styled.form`

`

const Input = styled(TextInput)`
  color: #F8F8FF;
`

const Submit = styled(Button)`

`

const UpdateCostForm = ({ areaProductId, cost, handleSubmit, qty, bidId, bidAreaId }) => (
  <Mutation
    mutation={updateAreaProductCost}
    update={( cache, { data: { updateAreaProductCost } }) => {
      const bid = cache.readQuery({ query: getBidDetails, variables: { id: bidId } }).bidDetails
      const areas = bid.bidAreas
      const area = areas.filter(area => area.id === bidAreaId)[0] 

      area.products.forEach(product => {
        if(product.id === areaProductId) {
          area.products.splice(area.products.indexOf(product), 1, updateAreaProductCost)
        }
      })

      const newBid = Object.assign(bid, { bidAreas: areas } )

      cache.writeQuery({
        query: getBidDetails,
        data: { bidDetails: Object.assign(bid, { bidArea: areas } )}
      })

    }}
  >
    {(updateAreaProductCost, { data }) => (
      <Wrapper onSubmit={evt => {
        evt.preventDefault()
        if(evt.target.cost.value === '') {
          updateAreaProductCost({ variables: { id: areaProductId, cost: (parseFloat(evt.target.cost.placeholder) / qty ) } })
        } else {
          updateAreaProductCost({ variables: { id: areaProductId, cost: (parseFloat(evt.target.cost.value) / qty ) } })
        }
        handleSubmit()
      }}>
        <Input type="text" name="cost" placeholder={cost}>

        </Input>
        <Submit type="submit" width={105} height={30} backgroundColor="#296D4D">
          Update
        </Submit>
      </Wrapper>
    )}
  </Mutation>
)

export default UpdateCostForm