import React, { Component } from 'react'
import styled from 'styled-components'
import { Title, Image, InfoContainer, PriceContainer, PriceHeader, Price } from '../../styled-components'
import { ReviewDisplay } from '../../product-detail'
import { getProductDetail } from '../../../graphql'
import { graphql } from 'react-apollo'
import { urlToName } from '../../helpers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
              <Image icon={['fa', 'image']} size="10x"></Image>
              <InfoContainer>
                <Title>{product.name}</Title>
                <ReviewDisplay reviews={product.reviews} />
                <PriceContainer>
                  <PriceHeader>Our Price</PriceHeader>
                  <Price>{`$${product.price}`}</Price>
                </PriceContainer>
              </InfoContainer>
            </DetailContainer>
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
