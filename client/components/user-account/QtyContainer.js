import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  height: 22px;
  width: 10vw;
  border: 1px solid #000;
`

const Quantity = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33%;
`

const Minus = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: 1px solid #000;
  width: 33%;
`

const Plus = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-left: 1px solid #000;
  width: 33%;
`

const QtyContainer = ({ quantity }) => {
  return (
    <Wrapper>
      {console.log('QTY', quantity)}
      {/* <FontAwesomeIcon icon={faMinus} size="xs" /> */}
        <Minus> - </Minus>
        <Quantity>{quantity}</Quantity>
        <Plus> + </Plus>
      {/* <FontAwesomeIcon icon={faPlus} size="xs" /> */}
    </Wrapper>
  )
}

export default QtyContainer
