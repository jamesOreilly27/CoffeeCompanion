import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Container = styled.div`

`

const AdminDashboard = ({ user }) => (
  <Wrapper>
    { user && user.isAdmin &&
      <Container>
        Hello from Admin Dashboard
      </Container>
    }
  </Wrapper>
)

export default AdminDashboard
