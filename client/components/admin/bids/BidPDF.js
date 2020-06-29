import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { Viewer, Header, ProductListHeader, TotalPage, AreaTableHeader, AreaPartsHeader, AreaTaxHeader, FinalAreaPriceHeader, ProjectTotalsView } from './PDFStyledComponents'
import { PDFTitlePage, PDFAreaCard, PDFBidArea } from '../bids'
import { PDFViewer, Page, Document } from '@react-pdf/renderer'
import { sumAll } from './helpers'

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
  return (
    <Wrapper>
      <PDFViewer width="100%" height="100%">
        {bid &&
          <Document>
            <Page>
              <PDFTitlePage />
            </Page>
            <Page size="A4">
              {bid.bidAreas.map(area => <PDFBidArea key={area.id} area={area} bid={bid} /> )}
            </Page>
            <TotalPage>
              <Header>
                {`Test Customer Bid`}
              </Header>
              <AreaTableHeader>
                <ProductListHeader>
                  Areas
                </ProductListHeader>
                <AreaPartsHeader> {`Parts`} </AreaPartsHeader>
                <AreaTaxHeader> {` Tax `} </AreaTaxHeader>
                <FinalAreaPriceHeader> {`Total`} </FinalAreaPriceHeader>
              </AreaTableHeader>
              {bid.bidAreas.map(area => <PDFAreaCard key={area.id} area={area} />
              )}
              <ProjectTotalsView>
                <ProductListHeader>
                  Total
                </ProductListHeader>
                <AreaPartsHeader> {`$${sumAll(bid.bidAreas, 'price').toFixed(2)}`} </AreaPartsHeader>
                <AreaTaxHeader> {`$${Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100).toFixed(2) / 100}`} </AreaTaxHeader>
                <FinalAreaPriceHeader> {`$${sumAll(bid.bidAreas, 'price') + Math.ceil((sumAll(bid.bidAreas, 'price') * .065) * 100).toFixed(2) / 100}`} </FinalAreaPriceHeader>
              </ProjectTotalsView>
            </TotalPage>
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
