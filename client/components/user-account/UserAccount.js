import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const UserAccount = ({ user }) => {
  return (
    <Wrapper>
      {console.log('TESTING', user)}
      Hello World
    </Wrapper>
  )
}

export default UserAccount
