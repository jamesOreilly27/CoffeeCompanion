import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 90vw;
  justify-content: center;
`

const ImageAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
`

const Title = styled.h5`
  margin: 0;
`

const DetailsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`

const Quantity = styled.div`
`

const Price = styled.div`
`

const Remove = styled(FontAwesomeIcon)`
  color: red;
`

const Lineitem = ({ lineitem }) => {
  return (
    <Wrapper>
      {console.log('LINEITEM', lineitem)}
      <ImageAndTitle>
        <FontAwesomeIcon icon={faImage} size="6x" />
        <Title>
          {lineitem.product.name}
        </Title>
      </ImageAndTitle>
      <DetailsContainer>
        <Quantity>
          {lineitem.quantity}
        </Quantity>
        <Price>
          {`$${lineitem.price}`}
        </Price>
        <Remove icon={faMinusCircle}> hello there </Remove>
      </DetailsContainer>
    </Wrapper>
  )
}

export default Lineitem
