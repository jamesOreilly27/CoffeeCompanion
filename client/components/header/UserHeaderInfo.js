import React, { Component } from 'react'
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


class UserHeaderInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Authlink to="/login">Login</Authlink>
        <Link to="/your-account/orders">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </Wrapper>
    )
  }
}

export default UserHeaderInfo
