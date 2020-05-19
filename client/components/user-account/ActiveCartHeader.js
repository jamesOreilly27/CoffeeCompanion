import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 60vw;
  border-bottom: 1px solid #0D0D0B;
`

const Title = styled.h3`
  margin: 5px 0 15px 0;
`

const ActiveCartHeader = ({ isEmpty }) => (
  <Wrapper>
    {isEmpty ?
      <Title> Your Cart is Empty</Title>
    :
      <Title> Your Cart </Title>
    }
  </Wrapper>
)

export default ActiveCartHeader
