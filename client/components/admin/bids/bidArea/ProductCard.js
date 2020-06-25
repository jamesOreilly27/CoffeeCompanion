import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title } from '../../../styled-components'
import { QtyContainer, AddButton, RemoveButton } from '../bidArea'

const Wrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7vh;
  width: 85%;
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

const TextInput = styled.input`
  width: 5vw;
  border: none;
  border-radius: 4px;
  margin-top: 3px;
`

const ProductCard = ({ id, bidId, name, description, qty, price, cost, search }) => (
  <Wrapper>
    <FontAwesomeIcon icon={['fa', 'image']} size="3x" />
    <Container>
      <Title size="sm">{name}</Title>
      <Description>{description}</Description>
    </Container>
    {search ?
      <CenteredContainer>
        <Title size="sm"> Qty. </Title>
        <TextInput></TextInput>
      </CenteredContainer>
    :
      <QtyContainer quantity={qty} id={id} bidId={bidId} />
    }
    <CenteredContainer>
      <Title size="sm">Cost</Title>
      <div>{`$${cost}`}</div>
    </CenteredContainer>
    <CenteredContainer>
      <Title size="sm">Price</Title>
      <div>{`$${price}`}</div>
    </CenteredContainer>
    <ButtonContainer>
      {search ?
        <AddButton id={id} bidId={bidId} />
      :
        <RemoveButton id={id} bidId={bidId} />
      }
    </ButtonContainer>
  </Wrapper>
)

export default ProductCard
