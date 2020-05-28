import React from 'react'
import styled from 'styled-components'
import { CreateForm } from '../products'
import { AdminContainer, Label } from './styledComponents'

const Wrapper = styled(AdminContainer)`
  
`

const Add = () => (
  <Wrapper width={30}>
    <Label> Create New Product </Label>
    <CreateForm />
  </Wrapper>
)


export default Add
