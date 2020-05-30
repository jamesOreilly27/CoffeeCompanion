import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled-components'
import { RemoveButton } from '../products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  @media(max-width: 960px) {
    flex: 0 0 31%
  }
  @media(max-width: 640px) {
    flex: 0 0 48%;
  }
  @media(max-width: 450px) {
    flex: 0 0 85%;
  }
  display: flex;
  justify-content: space-around;
  margin: 3px;
  padding: 2vh 0;
  background-color: #FFF;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 14px;
`

const Price = styled.div`
  font-size: 14px;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const AdminCard = ({ product, all, featured }) => (
  <Wrapper>
    <CardWrapper>
      <FontAwesomeIcon icon={["fa", "image"]} size="5x" />
      <Title>{product.name}</Title>
      <Price>{`$${product.price}`}</Price>
    </CardWrapper>
    {all &&
      <ButtonsContainer>
        <Button backgroundColor="#2091E8" width={100} height={33}>
          Update
        </Button>
        <RemoveButton product={product} />
      </ButtonsContainer>
    }
  </Wrapper>
)

export default AdminCard
