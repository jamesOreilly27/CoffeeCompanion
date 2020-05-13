import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`

const Authlink = styled(Link)`
  font-size: 10px;
  margin-right: 5px;
`


class UserHeaderInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Authlink to="/login">Login</Authlink>
        <Authlink to="/signup">Signup</Authlink>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Wrapper>
    )
  }
}

export default UserHeaderInfo
