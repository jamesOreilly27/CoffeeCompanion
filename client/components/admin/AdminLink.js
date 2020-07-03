import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  text-decoration: none;
  margin-right: 4vw;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #F8F8FF;
`

const AdminLink = ({ linkTo }) => (
  <Wrapper to={`/admin/${linkTo.toLowerCase()}`}>
    {linkTo}
  </Wrapper>
)

export default AdminLink
