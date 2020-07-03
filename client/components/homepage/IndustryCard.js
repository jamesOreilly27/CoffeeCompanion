import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29%;
  height: 400px;
  margin-bottom: 85px;
  position: relative;
  padding: 1%;
  border-radius: 10px;
  background-color: #383737;

  .blurb {
    background-color: #f8f8ff;
    color: #000;
    transition: all 0.4s ease;
  }

  .image {
    opacity: 1;
    transition: all 0.4s ease;
  }

  .test {
    width: 10px;
    height: 10px;
    background-color: #161616;
    opacity: 0.5;
    position: absolute;
    top: 190px;
    transition: all 0.5s ease-in;
    border-radius: 10px;
  }

  &:hover {
    .blurb {
      background-color: #3B9D6E;
      color: #F8F8FF;
    }

    .test {
      width: 94.5%;
      height: 260px;
      top: 9px;
      opacity: 0;
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
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 250px;
  z-index: 3;
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
    <div className="test"> </div>
      <ImageContainer className="image" src={industry.image} />
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