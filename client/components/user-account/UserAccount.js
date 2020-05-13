import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const UserAccount = ({ user }) => (
  <Wrapper>
    {console.log(user)}
  </Wrapper>
)

export default UserAccount
