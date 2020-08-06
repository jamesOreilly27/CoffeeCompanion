import React from 'react'
import styled from 'styled-components'

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Arm', 0, 'Disarm' ]

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
`

const NumberKey = styled.div`
  flex: 0 0 30%;
  font-size: 26px;
  color: #F8F8FF;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border: 1px solid #F8F8FF;
  background-color: ${({ number }) => {
    if(number === 'Arm') return "#008000"
    else if(number === 'Disarm') return '#C71E23'
    else return ""
  }};
`

const chooseClickHandler = (number, numberHandler, armingHandler) => {
  if(number !== 'Arm' && number !== 'Disarm') return numberHandler(number)
  else return armingHandler(number)
}

const Keypad = ({ handleNumberClick, handleArmingClick, passcode }) => (
  <Wrapper>
    {numbers.map(number => (
      <NumberKey number={number} onClick={() => { chooseClickHandler(number, handleNumberClick, handleArmingClick) }}>
        {number}
      </NumberKey>
    ))}
  </Wrapper>
)

export default Keypad
