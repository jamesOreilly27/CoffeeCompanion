import React from 'react'
import styled from 'styled-components'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { getProductDetail, getCurrentUser } from '../../graphql'
import { AddToCart, ReviewDisplay } from '../product-detail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`

const Image = styled(FontAwesomeIcon)`
  flex: 0 0 50%;
`

const InfoContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  align-items: flex-start;
  height: 45vh;
`

const Title = styled.h1`
  margin-bottom: 0;
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;
`

const PriceHeader = styled.div`
  font-size: 12px;
`

const Price = styled.div`
  font-size: 42px;
  font-weight: bold;
`

const ProductDetail = props => {
  const product = props.detailQuery.productDetails
  const user = props.userQuery.currentUser
  return (
    <Wrapper>
      {product && user &&
        <Container>
          <Image icon={faImage} size="10x">

          </Image>
          <InfoContainer>
            <Title>{product.name}</Title>
            <ReviewDisplay reviews={product.reviews} />
            <PriceContainer>
              <PriceHeader>Our Price</PriceHeader>
              <Price>{`$${product.price}`}</Price>
            </PriceContainer>
            <AddToCart cartId={user.activeCart.id} productId={parseInt(props.match.params.id)} price={product.price} />
          </InfoContainer>
        </Container>
      }
    </Wrapper>
  )
}


export default compose(
  graphql(getCurrentUser, { name: 'userQuery' }),
  graphql(getProductDetail, {
  name: 'detailQuery',
  options: props => ({
    variables: { id: parseInt(props.match.params.id) }
  })
}))(ProductDetail)
