import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  @media(max-width: 960px) {
    flex: 0 0 18%
  }
  @media(max-width: 640px) {
    flex: 0 0 31%;
  }
  @media(max-width: 450px) {
    flex: 0 0 45%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3px;
  background-color: #FFF;
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
