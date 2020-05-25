import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Authlink = styled(Link)`
  margin-right: 8px;
  text-decoration: none;
  color: #0d0b0b;
  font-family: 'Scope One', serif;
`

const UserMessage = styled.div`
  margin-right: 8px;
  margin-left: 6px;
  font-size: 12px;
  font-family: 'Scope One', serif;
`

const Cart = styled(FontAwesomeIcon)`
  color: #0d0d0b;
`


const UserHeaderInfo = ({ user }) => (
  <Wrapper>
      {user ?
        <UserMessage>
          {`hello ${user.firstName} \u25BE`}
        </UserMessage>
        :
        <Authlink to="/login">
          Login
        </Authlink>
      }
    <Link to="/your-account/orders">
      <Cart icon={faShoppingCart} />
    </Link>
  </Wrapper>
)

export default UserHeaderInfo
