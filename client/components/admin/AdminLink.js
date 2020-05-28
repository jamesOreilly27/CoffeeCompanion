import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  text-decoration: none;
  margin-right: 10vw;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #0D0D0B;
`

const AdminLink = ({ linkTo }) => (
  <Wrapper to={`/admin/${linkTo.toLowerCase()}`}>
    {linkTo}
  </Wrapper>
)

export default AdminLink
