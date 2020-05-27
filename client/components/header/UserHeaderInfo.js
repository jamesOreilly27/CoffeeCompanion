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
  margin: 0 12px;
  text-decoration: none;
  color: #0d0b0b;
  font-family: 'Scope One', serif;
  font-size: 13px;
`

const Cart = styled(FontAwesomeIcon)`
  color: #0d0d0b;
`


const UserHeaderInfo = ({ loggedIn }) => (
  <Wrapper>
    {loggedIn ?
      <Authlink to="/your-account">
        {`Account \u25BE`}
      </Authlink>
    :
      <Authlink to="/login">
        {`Account \u25BE`}
      </Authlink>
    }
    <Link to="/your-account/orders">
      <Cart icon={faShoppingCart} />
    </Link>
  </Wrapper>
)

export default UserHeaderInfo
