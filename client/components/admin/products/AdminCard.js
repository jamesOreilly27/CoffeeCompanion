import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import Products from './Products'

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
    <FontAwesomeIcon icon={faImage} size="5x" />
    <Title>{product.name}</Title>
    <Price>{`$${product.price}`}</Price>
  </Wrapper>
)

export default AdminCard
