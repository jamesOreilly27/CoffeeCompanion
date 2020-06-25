import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../styled-components'
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

const AreaPrice = styled.div`
  background-color: #F2F3F4;
  border-radius: 4px;
  padding: 10px;
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
          <HeaderTitle margin={1}> {props.area.title} </HeaderTitle>
          <AreaPrice> {`$${sumAll([props.area], 'price')}`} </AreaPrice>
        </Header>
        <ProductContainer>
          <SearchBar />
          <ProductsList>
            {props.area.products.map(product =>
              <ProductCard
                key={product.id}
                id={product.id}
                bidId={props.bidId}
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
