import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { Mutation } from 'react-apollo'
import { removeFromCart } from '../../graphql'
import { getCurrentUser } from '../../graphql'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 90vw;
  justify-content: center;
`

const ImageAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
`

const Title = styled.h5`
  margin: 0;
`

const DetailsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`

const Quantity = styled.div`
`

const Price = styled.div`
`

const Remove = styled(FontAwesomeIcon)`
  color: red;
`

const removeItem = () => {
  const input = { id: 0 }
}

const Lineitem = ({ lineitem }) => {
  return (
    <Mutation
      mutation={removeFromCart}
      update={(cache, { data: { removeFromCart } } ) => {
        const user = cache.readQuery({ query: getCurrentUser }).currentUser
        const cart = user.carts.filter(cart => cart.status === 'open')[0]
        cart.lineitems = cart.lineitems.filter(item => item.id !== lineitem.id)
        cache.writeQuery({
          query: getCurrentUser,
          data: { currentUser: Object.assign(user, { lineitems: cart.lineitems.filter(item => item.id !== lineitem.id)}) }
        })
      }} 
    >
      {(removeItem, { data }) => (
        <Wrapper>
          <ImageAndTitle>
            <FontAwesomeIcon icon={faImage} size="6x" />
            <Title>
              {lineitem.product.name}
            </Title>
          </ImageAndTitle>
          <DetailsContainer>
            <Quantity>
              {lineitem.quantity}
            </Quantity>
            <Price>
              {`$${lineitem.price}`}
            </Price>
            <Remove
              icon={faMinusCircle}
              onClick={() => {
                removeItem({ variables: { id: lineitem.id } })
              }}
              > </Remove>
          </DetailsContainer>
        </Wrapper>
      )}
    </Mutation>
  )
}

export default Lineitem
