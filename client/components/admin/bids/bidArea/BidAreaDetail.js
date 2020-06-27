import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../styled-components'
import { Link } from 'react-router-dom'
import { ProductCard, SearchBar } from '../bidArea'
import { sumAll } from '../helpers'

const Wrapper = styled.div`
  width: 60%;
  background-color: #FFF;
  border-radius: 4px;
  width: 80%;
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled(Title)`
  margin-left: 10px;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 42vw;
`

const AreaPrice = styled.div`
  background-color: #F2F3F4;
  border-radius: 4px;
  padding: 10px;
`

const PDFButton = styled(Link)`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor };
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
  outline: none;
  cursor: pointer;
  margin: 1vh 0;
`

const ProductContainer = styled.div`
  padding: 10px;
`

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
`

const BidAreaDetail = props => (
  <Wrapper>
    {props.area &&
      <Container>
        <Header>
          <HeaderTitle margin={1}>
            {props.area.title}
          </HeaderTitle>
          <ContentContainer>
            <AreaPrice>
              {`$${sumAll([props.area], 'price')}`}
            </AreaPrice>
            <PDFButton
              to={`/admin/bids/${props.bidId}/pdf`}
              width={30}
              height={38.4}
              backgroundColor="#24A0ED"
            >
              View PDF
            </PDFButton>
          </ContentContainer>
        </Header>
        <ProductContainer>
          <SearchBar bidAreaId={props.area.id} bidId={props.bidId} />
          <ProductsList>
            {props.area.products.map(product =>
              <ProductCard
                key={product.id}
                productId={product.id}
                bidId={props.bidId}
                bidAreaId={props.area.id}
                name={product.product.name}
                description={product.product.description}
                qty={product.qty}
                cost={product.cost}
                price={product.price}
              />
            )}
          </ProductsList>
        </ProductContainer>
      </Container>
    }
  </Wrapper>
)

export default BidAreaDetail
