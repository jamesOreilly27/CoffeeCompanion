import React from 'react'
import styled from 'styled-components'
import { Title } from '../styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 60vw;
  border-bottom: 1px solid #0D0D0B;
`

const ActiveCartHeader = ({ isEmpty }) => (
  <Wrapper>
    {isEmpty ?
      <Title margin={1} size="med"> Your Cart is Empty</Title>
    :
      <Title margin={1} size="med"> Your Cart </Title>
    }
  </Wrapper>
)

export default ActiveCartHeader
