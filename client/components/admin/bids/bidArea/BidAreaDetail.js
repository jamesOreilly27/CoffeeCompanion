import React from 'react'
import styled from 'styled-components'
import { ProductCard, SearchBar, AreaHeader } from '../bidArea'

const Wrapper = styled.div`
  background-color: #383737;
  border-radius: 4px;
  width: 76%;
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ProductContainer = styled.div`
  padding: 10px;
  border-top: 3px solid #2D2A2E;
  margin: 10px 0;
  border-radius: 4px;
`

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
`

const BidAreaDetail = props => (
  <Wrapper>
    {props.area &&
      <Container>
        <AreaHeader area={props.area} bidId={props.bidId} updateTitleState={props.updateTitleState}/>
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
                partNumber={product.product.partNumber}
              />
            )}
          </ProductsList>
        </ProductContainer>
      </Container>
    }
  </Wrapper>
)

export default BidAreaDetail
