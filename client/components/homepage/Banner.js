import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 70vh;
  width: 100vw;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 35px;
  background-color: #ccc;
`

const Banner = () => {
  return (
    <Wrapper>
      <h1>Your</h1>
      <h1>Banner</h1>
      <h1>Here</h1>
    </Wrapper>
  )
}

export default Banner
