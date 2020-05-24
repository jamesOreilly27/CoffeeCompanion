import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { getProductDetail, getCurrentUser } from '../../graphql'
import { AddToCart, ReviewDisplay } from '../product-detail'
import { Alert, AlertTitle } from '@material-ui/lab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { urlToName } from '../helpers'

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

const easeInAlert = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const CartAlert = styled(Alert)`
  animation: ${easeInAlert} .8s ease;
`

const CartLink = styled(Link)`
  text-decoration: none;
`

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { alertActive: false }
    this.flipAlertActive = this.flipAlertActive.bind(this)
  }

  flipAlertActive() {
    this.setState({ alertActive: !this.state.alertActive })
  }

  render() {
    const product = this.props.detailQuery.productDetails
    console.log('PRODUCT', product)
    const user = this.props.userQuery.currentUser
    return (
      <Wrapper>
        {product && user &&
          <Container>
            <Image icon={faImage} size="10x"></Image>
            <InfoContainer>
              <Title>{product.name}</Title>
              <ReviewDisplay reviews={product.reviews} />
              <PriceContainer>
                <PriceHeader>Our Price</PriceHeader>
                <Price>{`$${product.price}`}</Price>
              </PriceContainer>
              <AddToCart cartId={user.activeCart.id} productId={product.id} price={product.price} flipAlertActive={this.flipAlertActive} />
              {this.state.alertActive &&
                <CartAlert severity="success" onClose={() => { this.flipAlertActive() } }>
                  <AlertTitle>Added To Cart</AlertTitle>
                  <CartLink to="/your-account/orders"> Checkout </CartLink>
                </CartAlert>
              }
            </InfoContainer>
          </Container>
        }
      </Wrapper>
    )
  }
}


export default compose(
  graphql(getCurrentUser, { name: 'userQuery' }),
  graphql(getProductDetail, {
  name: 'detailQuery',
  options: props => ({
    variables: { name: urlToName(props.match.params.name) }
  })
}))(ProductDetail)
