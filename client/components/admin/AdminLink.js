import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  text-decoration: none;
  width: 70px;
  margin: 0 3vw;
  display: flex;
  justify-content: center;
  font-size: 20px;
`

const AdminLink = ({ linkTo }) => (
  <Wrapper to={`/admin/${linkTo}`}>
    {linkTo}
  </Wrapper>
)

export default AdminLink
