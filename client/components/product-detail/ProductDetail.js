import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { EaseAlert, Title, Image, InfoContainer, PriceContainer, PriceHeader, Price } from '../styled-components'
import AlertTitle from '@material-ui/lab/AlertTitle'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { getProductDetail, getCurrentUser } from '../../graphql'
import { AddToCart, ReviewDisplay } from '../product-detail'
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
    const user = this.props.userQuery.currentUser
    return (
      <Wrapper>
        {product && user &&
          <Container>
            <Image icon={['fa', 'image']} size="10x"></Image>
            <InfoContainer>
              <Title>{product.name}</Title>
              <ReviewDisplay reviews={product.reviews} />
              <PriceContainer>
                <PriceHeader>Our Price</PriceHeader>
                <Price>{`$${product.price}`}</Price>
              </PriceContainer>
              <AddToCart cartId={user.activeCart.id} productId={product.id} price={product.price} flipAlertActive={this.flipAlertActive} />
              {this.state.alertActive &&
                <EaseAlert severity="success" onClose={() => { this.flipAlertActive() } }>
                  <AlertTitle>Added To Cart</AlertTitle>
                  <CartLink to="/your-account/orders"> Checkout </CartLink>
                </EaseAlert>
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
