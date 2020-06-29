import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Title } from '../../../styled-components'
import { sumAll } from '../helpers'

const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled(Title)`
  margin-left: 10px;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 42vw;
`

const AreaPrice = styled.div`
  background-color: #F2F3F4;
  border-radius: 4px;
  padding: 10px;
`

const PDFButton = styled(Link)`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
  outline: none;
  cursor: pointer;
  margin: 1vh 0;
`

const AreaHeader = ({ area, bidId, PDF }) => (
  <Header>
    <HeaderTitle margin={1}>
      {area.title}
    </HeaderTitle>
    <ContentContainer>
      <AreaPrice>
        {`$${sumAll([area], 'price')}`}
      </AreaPrice>
      {!PDF &&
        <PDFButton
          to={`/admin/bids/${bidId}/pdf`}
          width={30}
          height={38.4}
          backgroundColor="#24A0ED"
        >
          View PDF
        </PDFButton>
      }
    </ContentContainer>
  </Header>
)

export default AreaHeader
