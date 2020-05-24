import React from 'react'
import styled from 'styled-components'
import Background from '../../images/command-900.jpg'

const Wrapper = styled.div`
  height: 75vh;
  width: 100vw;
  margin-bottom: 10vh;
  display: flex;
  font-size: 30px;
  color: #FFF;
  background-color: #CCC;
  background-image: url(${Background});
  justify-content: flex-start;
  align-items: flex-start;
  `

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
`

const Title = styled.h1`
  margin: 0;
`

const Subtitle = styled.div`
  font-size: 20px;
  margin: 3px 0;
  margin-left: 2vw;
`

const Banner = () => {
  return (
    <Wrapper>
      <Message>
        <Title>
          SOS Monitoring
        </Title>
        <Subtitle>
          - Never worry with 24/7 monitoring
        </Subtitle>
        <Subtitle>
          - Stop Crime in Real Time
        </Subtitle>
        <Subtitle>
          - Proactive Security Monitoring
        </Subtitle>
      </Message>
    </Wrapper>
  )
}

export default Banner
