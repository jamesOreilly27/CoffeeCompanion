import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title } from '../../../styled-components'
import { ProductButton } from '../bidArea'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7vh;
  width: 50%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 62%;
  width: 20vw;
  padding-left: 10px;
`

const CenteredContainer = styled(Container)`
  align-items: center;
  width: 10vw;
  padding: 0;
`

const ButtonContainer = styled(Container)`
  width: 20px;
  justify-content: center;
`

const Description = styled.div`
  font-size: 14px;
  color: #828181;
`

const ProductCard = ({ product, search }) => (
  <Wrapper>
    <FontAwesomeIcon icon={['fa', 'image']} size="3x" />
    <Container>
      <Title size="sm">{product.product.name}</Title>
      <Description>{product.product.description}</Description>
    </Container>
    <CenteredContainer>
      <Title size="sm">Cost</Title>
      <div>{`$${product.cost}`}</div>
    </CenteredContainer>
    <CenteredContainer>
      <Title size="sm">Price</Title>
      <div>{`$${product.price}`}</div>
    </CenteredContainer>
    <ButtonContainer>
      {search ?
        <ProductButton add />
      :
        <ProductButton remove />
      }
    </ButtonContainer>
  </Wrapper>
)

export default ProductCard
