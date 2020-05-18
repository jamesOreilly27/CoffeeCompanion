import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { QtyContainer } from '../user-account'
import { Mutation } from 'react-apollo'
import { removeFromCart } from '../../graphql'
import { getCurrentUser } from '../../graphql'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 60vw;
  justify-content: space-between;
  border-bottom: 1px solid #0D0D0B;
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Image = styled(FontAwesomeIcon)`
  margin-right: 20px
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 10vw;
`

const Title = styled.h4`
  margin: 0 0 3.5px 0;
`

const Desc = styled.div`
  font-size: 13px;
`

const Price = styled.div`
  font-size: 12px;
`

const Remove = styled.div`
  font-size: 12px;
  cursor: pointer;
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
        const cart = user.activeCart
        const newCart = Object.assign(cart, { lineitems: cart.lineitems.filter(item => item.id !== lineitem.id) })
        cache.writeQuery({
          query: getCurrentUser,
          data: { currentUser: Object.assign(user, { cart: newCart }) }
        })
      }} 
    >
      {(removeItem, { data }) => (
        <Wrapper>
          <LeftContainer>
            <Image icon={faImage} size="6x" />
            <ItemDetails>
              <Title>
                {lineitem.product.name}
              </Title>
              <Desc>
                {lineitem.product.description}
              </Desc>
            </ItemDetails>
          </LeftContainer>
          <QtyContainer quantity={lineitem.quantity} />
          <Price>
            {`$${lineitem.price * lineitem.quantity}`}
          </Price>
          <Remove onClick={() => { removeItem({ variables: { id: lineitem.id } }) }}>
            Remove
          </Remove>
        </Wrapper>
      )}
    </Mutation>
  )
}

export default Lineitem
