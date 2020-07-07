import React from 'react'
import styled from 'styled-components'
import { CreateForm, CustomerList } from '../customers'
import { Title } from '../../styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99%;
  background-color: #373738;
  margin-bottom: 5px;
  border-radius: 4px;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20px;
  width: 23%
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const CustomerTitle = styled(Title)`
  margin-left: 2vw;
`

const Customers = ({ customers }) => (
  <Wrapper>
    <Header>
      <CustomerTitle>
        Customers
      </CustomerTitle>
    </Header>
    {/* <ContentContainer>
      <CreateForm customers={customers} />
      <CustomerList customers={customers} />
    </ContentContainer> */}
    <Sidebar>
      <CustomerList customers={customers} />
    </Sidebar>
  </Wrapper>
)

export default Customers
