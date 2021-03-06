import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const chooseLink = isLoggedIn => {
  if (isLoggedIn) return "/your-account"
  else return "/login"
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9%;
`

const Authlink = styled(Link)`
  text-decoration: none;
  font-family: 'Scope One', serif;
  font-size: 13px;
`

const Cart = styled(FontAwesomeIcon)`
  color: #F8F8FF;
`

const User = styled(FontAwesomeIcon)`
  color: #F8F8FF;
`


const UserHeaderInfo = ({ loggedIn }) => (
  <Wrapper>
    <Authlink to={chooseLink(loggedIn)}>
      <User icon={['fa', 'user-circle']} size="2x" />
    </Authlink>
    <Link to="/your-account/orders">
      <Cart icon={['fa', 'shopping-cart']} size="lg" />
    </Link>
  </Wrapper>
)

export default UserHeaderInfo
