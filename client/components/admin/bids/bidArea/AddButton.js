import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { addAreaProduct, getBidDetails } from '../../../../graphql'

const Wrapper = styled.button`
  border-radius: 50%;
  background-color: #77DD77;
  color: #FFF;
  border: none;
`

const AddButton = ({ productId, bidAreaId, bidId, price, cost, qty }) => (
  <Mutation
    mutation={addAreaProduct}
  >
    {( addAreaProduct, { data }) => (
      <Wrapper onClick={evt => {
        evt.preventDefault()
        addAreaProduct({ variables: { productId: productId, bidAreaId: bidAreaId, price: price, cost: cost, qty: qty } })
      }}>
        +
      </Wrapper>
    )}
  </Mutation>
)

export default AddButton
