import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
`

const Title = styled.div`
  font-size: 14px;
`

const Price = styled.div`
  font-size: 14px;
`

const AdminCard = ({ product }) => (
  <Wrapper>
    <FontAwesomeIcon icon={["fa", "image"]} size="5x" />
    <Title>{product.name}</Title>
    <Price>{`$${product.price}`}</Price>
  </Wrapper>
)

export default AdminCard
