import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 15px;
  color: #EDEDED;
  margin: 10px 0;
`

const MenuItem = ({ item }) => (
  <Wrapper>
    {item}
  </Wrapper>
)

export default MenuItem
