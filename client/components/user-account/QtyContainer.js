import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 22px;
  width: 10vw;
  border: 1px solid #000;
`

const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 33%;
`

const Quantity = styled(Element)`
  font-size: 11px;
`

const Minus = styled(Element)`
  font-size: 16px;
  border-right: 1px solid #000;
`

const Plus = styled(Element)`
  font-size: 12px;
  border-left: 1px solid #000;
`

const QtyContainer = ({ quantity }) => {
  return (
    <Wrapper>
      <Minus> - </Minus>
      <Quantity>{quantity}</Quantity>
      <Plus> + </Plus>
    </Wrapper>
  )
}

export default QtyContainer
