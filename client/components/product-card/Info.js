import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.div`

`

const DetailContainer = styled.div`
  display: flex;
`

const Info = ({ product }) => {
  return (
    <Wrapper>
      <Name>
        {product.name}
      </Name>
      <DetailContainer>
        <div> {product.price} </div>
        <div> {product.description} </div>
      </DetailContainer>
    </Wrapper>
  )
}

export default Info
