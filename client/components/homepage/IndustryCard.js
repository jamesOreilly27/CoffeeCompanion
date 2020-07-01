import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21%;
  height: 125px;
  margin-bottom: 18px;
`

const Name = styled.div`
  font-size: 16px;
  margin-top: 10px;
`

const IndustryCard = ({ industry }) => (
  <Wrapper>
    <FontAwesomeIcon icon={industry.icon} size="5x" color="#033645" />
    <Name>
      {industry.name}
    </Name>
  </Wrapper>
)

export default IndustryCard
