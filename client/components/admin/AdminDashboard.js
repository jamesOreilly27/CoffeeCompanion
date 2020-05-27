import React from 'react'
import styled from 'styled-components'
import { AdminLink } from '../admin'

const Wrapper = styled.div`

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`

`

const Navbar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 98vw;
  height: 5vh;
  background-color: #FFF;
  border-radius: 4px;
  margin-bottom: 5vh;
  padding: 10px;
`

const adminTools = [
  { name: "Customers" },
  { name: "Orders" },
  { name: "Products" },
  { name: "Materials" },
  { name: "Bids" }
]

const AdminDashboard = ({ user }) => (
  <Wrapper>
    { user && user.isAdmin &&
      <Container>
        <Title> Dashboard </Title>
        <Navbar>
          {adminTools.map(tool => <AdminLink linkTo={tool.name} /> )}
        </Navbar>
      </Container>
    }
  </Wrapper>
)

export default AdminDashboard
