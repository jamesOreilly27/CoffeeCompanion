import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 98vw;
`

const RouteContainer = styled(Link)`
  @media(max-width: 960px) {
    flex: 0 0 30%
  }
  @media(max-width: 640px) {
    flex: 0 0 40%;
  }
  @media(max-width: 450px) {
    flex: 0 0 85%;
    margin: 8px 7.5%;
  }
  text-decoration: none;
  height: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`

const UserAccount = () => (
  <Wrapper>
    <RouteContainer to="/your-account/orders">
      Your Orders
    </RouteContainer>
    <RouteContainer to="/">
      Your Orders
    </RouteContainer>
    <RouteContainer to="/">
      Your Orders
    </RouteContainer>
    <RouteContainer to="/">
      Your Orders
    </RouteContainer>
    <RouteContainer to="/">
      Your Orders
    </RouteContainer>
    <RouteContainer to="/">
      Your Orders
    </RouteContainer>
  </Wrapper>
)

export default UserAccount
