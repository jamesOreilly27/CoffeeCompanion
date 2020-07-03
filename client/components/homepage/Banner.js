import React from 'react'
import styled from 'styled-components'
import Background from '../../images/banner.png'

const Wrapper = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  background-image: url(${Background});
  background-color: #3B9D6E;
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
