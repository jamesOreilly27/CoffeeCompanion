import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styled-components'
import { ProductCard } from './ProductCard'
import { sumAll } from './helpers'

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
          {console.log('AREA', props.area)}
        </ProductContainer>
      </Container>
    }
  </Wrapper>
)

export default BidAreaDetail
