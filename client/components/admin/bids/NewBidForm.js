import React from 'react'
import styled from 'styled-components'
import { CreateForm } from '../customers'
import { Label, Select, Option, TextInput, Button } from '../../styled-components'
import { ExistingCusomter } from '../bids'

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

const ExistingContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #FFF;
  width: 25%;
  align-items: center;
`

const NewContainer = styled(Container)`
  width: 72%;
  align-items: center;
`

const NewBidForm = props => (
  <Wrapper width={50}>
   <ExistingCusomter customers={props.customers} bidId={parseInt(props.match.params.bidId)} />
    <NewContainer>
      <Label> Create a New Customer </Label>
      <CreateForm bidId={parseInt(props.match.params.bidId)} />
    </NewContainer>
  </Wrapper>
)

export default NewBidForm
