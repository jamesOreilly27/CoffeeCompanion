import React from 'react'
import styled from 'styled-components'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { getProductDetail, getCurrentUser } from '../../graphql'
import { AddToCart } from '../product-detail'
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
  flex: 0 0 35%;
`

const InfoContainer = styled.div`
  display: flex;
  flex: 0 0 60%;
  flex-direction: column;
  align-items: center;
  height: 45vh;
`

const Title = styled.h1`
  
`

const Price = styled.h1`
  font-size: 42px;
  margin-top: 0;
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
            <Price>{`$${product.price}`}</Price>
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
