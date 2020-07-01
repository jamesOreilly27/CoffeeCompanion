import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 21%;
  height: 150px;
  border: 1px dotted black;
  margin-bottom: 18px;
`

const IndustryCard = () => (
  <Wrapper>
    Hello From IndustryCard
  </Wrapper>
)

export default IndustryCard
