import React from 'react'
import styled from 'styled-components'
import Background from '../../images/banner-background.jpg'

const Wrapper = styled.div`
  height: 75vh;
  width: 100vw;
  margin-bottom: 8vh;
  display: flex;
  color: #FFF;
  background-image: url(${Background});
  `

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26vh;
`

const Subtitle = styled.div`
  font-size: 20px;
  margin: 3px 0;
  margin-left: 1vw;
`

const Banner = () => {
  return (
    <Wrapper>
      {/* <Message>
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
      </Message> */}
    </Wrapper>
  )
}

export default Banner
