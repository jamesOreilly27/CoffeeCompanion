import React, { Component } from 'react'
import styled from 'styled-components'
import { Title, InfoContainer, PriceContainer, PriceHeader, Price } from '../../styled-components'
import { UpsertForm } from '../products'
import { getProductDetail } from '../../../graphql'
import { graphql } from 'react-apollo'
import { urlToName } from '../../helpers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 96vw;
  justify-content: space-around;
  background-color: #383738;
  border-radius: 4px;
`

const Name = styled(Title)`
  width: 100%;
  text-align: center;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`



const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`

class UpdateProduct extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const product = this.props.data.productDetails
    return (
      <Wrapper>
        {product &&
          <Container>
            <DetailContainer>
              <Image src={`/images/products/${product.partNumber}.png`} />
              <InfoContainer>
                <Name>{product.name}</Name>
                <FlexContainer>
                  <PriceContainer>
                    <PriceHeader>Price</PriceHeader>
                    <Price>{`$${product.price.toFixed(2)}`}</Price>
                  </PriceContainer>
                  <PriceContainer>
                    <PriceHeader>Cost</PriceHeader>
                    <Price>{`$${product.cost.toFixed(2)}`}</Price>
                  </PriceContainer>
                </FlexContainer>
                <FlexContainer>
                  <PriceHeader>Labor Time (minutes)</PriceHeader>
                  <Price>{Math.ceil(product.laborTime * 60)}</Price>  
                </FlexContainer>
              </InfoContainer>
            </DetailContainer>
            <UpsertForm type="Update" product={product} formWidth={75} />
          </Container>
        }
      </Wrapper>
    )
  }
}

export default graphql(getProductDetail, {
  options: props => ({
    variables: { name: urlToName(props.match.params.name) }
  })
})(UpdateProduct)
