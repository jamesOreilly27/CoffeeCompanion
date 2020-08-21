import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'
import { RemoveButton, UpdateButton } from '../products'

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
  padding: 2vh 5px;
  background-color: #383737;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

const Image = styled.img`
  width: 80%;
  height: 70%;
`

const ProductName = styled(Title)`
  text-align: center;
  margin-top: 5px;
  margin-left: 11px;
`

const CostAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

const DetailItem = styled.div`
  font-size: 15px;
  color: #F8F8FF;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`

const AdminCard = ({ product, all, featured }) => (
  <Wrapper>
    <CardWrapper>
      <Image src={`/images/products/${product.partNumber}.png`}/>
      <ProductName size="sm">{product.name}</ProductName>
    </CardWrapper>
    <ColumnContainer>
      <CostAndPriceContainer>
        <DetailContainer>
          <DetailItem>{` Cost`}</DetailItem>
          <DetailItem>{`$${product.cost}`}</DetailItem>
        </DetailContainer>
        <DetailContainer>
          <DetailItem>{`Price`}</DetailItem>
          <DetailItem>{`$${product.price}`}</DetailItem>
        </DetailContainer>
      </CostAndPriceContainer>
      {all &&
        <ButtonsContainer>
          <UpdateButton product={product} />
          <RemoveButton product={product} />
        </ButtonsContainer>
      }
    </ColumnContainer>
  </Wrapper>
)

export default AdminCard

{/* <ColumnContainer>
        <Price>{`$${product.price}`}</Price>
      </ColumnContainer> */}
