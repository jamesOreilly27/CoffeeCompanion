import React from 'react'
import styled from 'styled-components'
import { UpsertForm } from '../products'
import { AdminContainer, Label } from './styledComponents'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  width: 70%;
  border-radius: 4px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  background-color: #383737;
`

const Add = () => (
  <Wrapper>
    <Label> Create New Product </Label>
    <UpsertForm type="Create"/>
  </Wrapper>
)


export default Add
