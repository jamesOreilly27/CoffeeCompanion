import React from 'react'
import styled from 'styled-components'
import { AdminList } from '../products'
import { AdminContainer, Label } from './styledComponents'

const Wrapper = styled(AdminContainer)`
  display: flex;
  flex-direction: column;
`

const Featured = ({ products }) => (
  <Wrapper width={65}>
    <Label> Featured </Label>
    <AdminList products={products} />
  </Wrapper>
)


export default Featured
