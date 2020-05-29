import React from 'react'
import styled from 'styled-components'
import { AdminCard } from '../products'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const AdminList = ({ products }) => (
  <Wrapper>
    {products.map(product => <AdminCard key={product.id} product={product} />)}
  </Wrapper>
)

export default AdminList
