import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29%;
  height: 400px;
  margin-bottom: 35px;
  position: relative;

  .blurb {
    background-color: #FFF;
    color: #000;
    transition: all 0.5s ease;
  }

  &:hover {
    .blurb {
      background-color: green;
      color: #F8F8FF;
    }
  }
`

const ImageContainer = styled.img`
  height: 65%;
  width: 100%;
  border-radius: 10px;
`

const BlurbContainer = styled.div`
  position: absolute;
  top: 175px;
  border-radius: 8px;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 225px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 2vh;
`

const Paragraph = styled.div`
  text-align: center;
  margin: 10px 10%;
`

const IndustryCard = ({ industry }) => (
  <Wrapper>
    <ImageContainer src={industry.image} />
    <BlurbContainer className="blurb">
      <Name> {industry.name} </Name>
      <Paragraph className="paragraph">
        This is a Test Paragraph. I think this will be a good enough test to see how this fits into the section. I hope it is anyway. I'll keep typing for a bit to see
      </Paragraph>
    </BlurbContainer>
  </Wrapper>
)

export default IndustryCard


// onMouseEnter={this.setHoverTrue} onMouseLeave={this.setHoverFalse}