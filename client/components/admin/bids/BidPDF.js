import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { PDFTitlePage, PDFBidArea, PDFFinalTotal } from '../bids'
import { PDFViewer, Page } from '@react-pdf/renderer'
import { TitlePage, Doc } from './PDFStyledComponents'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 105vh;
  background-color: #EAEDED;
  border-radius: 4px;
`

const BidPDF = props => {
  const bid = props.data.bidDetails
  return (
    <Wrapper>
      <PDFViewer width="100%" height="100%">
        {bid &&
          <Doc>
            <TitlePage>
              <PDFTitlePage bid={bid} customer={bid.customer} />
            </TitlePage>
            <Page>
              <PDFFinalTotal bid={bid} />
            </Page>
            <Page size="A4">
              {bid.bidAreas.map(area => <PDFBidArea key={area.id} area={area} bid={bid} />)}
            </Page>
          </Doc>
        }
      </PDFViewer>
    </Wrapper>
  )
}

export default graphql(getBidDetails, {
  options: props => ({
    variables: { id: parseInt(props.match.params.id) }
  })
})(BidPDF)
