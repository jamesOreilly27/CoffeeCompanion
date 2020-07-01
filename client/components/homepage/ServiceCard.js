import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  padding: 10px;
  height: 200px;
`

const Title = styled.h2`
  margin: 1vh 0;
  font-size: 22px;
`

const Blurb = styled.div`
  font-size: 15px;
  width: 80%;
  height: 71px;
  margin-left: 10px;
`

const NewButton = styled(Button)`
  margin: 43px 15% 0;
`

const ServiceCard = ({ service }) => (
  <Wrapper>
    <Title>
      {service.name}
    </Title>
    <Blurb>
      {service.blurb}
    </Blurb>
    <NewButton width={50} height={30} backgroundColor="#317787">
      Learn More
    </NewButton>
  </Wrapper>
)

export default ServiceCard
