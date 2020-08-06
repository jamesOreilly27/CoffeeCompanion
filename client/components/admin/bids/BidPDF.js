import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { PDFTitlePage, PDFBidArea, PDFFinalTotal } from '../bids'
import { PDFViewer, Page, Document, Image } from '@react-pdf/renderer'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98vw;
  height: 105vh;
  background-color: #EAEDED;
  border-radius: 4px;
`

const BidPDF = props => {
  const bid = props.data.bidDetails
  console.log('BID', bid)
  return (
    <Wrapper>
      <PDFViewer width="100%" height="100%">
        {bid &&
          <Document>
            <Page>
              <PDFTitlePage customer={bid.customer} />
              <Image src="/images/navlogo.png" />
            </Page>
            <Page size="A4">
              {bid.bidAreas.map(area => <PDFBidArea key={area.id} area={area} bid={bid} />)}
            </Page>
            <Page>
              <PDFFinalTotal bid={bid} />
            </Page>
          </Document>
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
