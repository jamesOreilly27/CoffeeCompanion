import React from 'react'
import { AreaTableHeader, AreaTitle, HeaderItem, TotalsView, AreaView, AreasView, ProjectTotals, ProjectTotalLineContainer, ProjectLineItem, AreaHeader, FlexContainer, DisclaimerText, SignatureContainer, SignatureText } from './PDFStyledComponents'
import { Text } from '@react-pdf/renderer'
import { PDFAreaCard } from '../bids'
import { sumAll, taxExemptTotal } from './helpers'

const PDFFinalTotal = ({ bid }) => (
  <TotalsView>
    <AreasView>
      <AreaHeader>
        {`Total Proposal`}
      </AreaHeader>
      <AreaTableHeader>
        <AreaTitle>Areas</AreaTitle>
        <HeaderItem> {`Parts`} </HeaderItem>
        <HeaderItem> {` Tax `} </HeaderItem>
        <HeaderItem> {`Total`} </HeaderItem>
      </AreaTableHeader>
      <AreaView>
        {bid.bidAreas.map(area => <PDFAreaCard key={area.id} area={area} taxExempt={bid.customer.taxExempt} isEven={bid.bidAreas.indexOf(area) % 2 === 0} />)}
      </AreaView>
    </AreasView>
    <FlexContainer>
      <SignatureContainer>
        <DisclaimerText>
          This Proposal is valid for 30 days from the date hereof and becomes binding if signed and delivered during that period. A 50% deposit will be due at the time of signing.
        </DisclaimerText>
        <SignatureText>
          <Text style={{ marginLeft: '15px' }}>
            Signature
          </Text>
          <Text style={{ marginLeft: '125px' }}>
            Date
          </Text>
        </SignatureText>
      </SignatureContainer>
      <ProjectTotals>
        <ProjectTotalLineContainer>
          <ProjectLineItem>
            {"Subtotal"}
          </ProjectLineItem>
          <ProjectLineItem>
            {`$${sumAll(bid.bidAreas, 'price').toFixed(2)}`}
          </ProjectLineItem>
        </ProjectTotalLineContainer>
        <ProjectTotalLineContainer>
          <ProjectLineItem>
            {"Tax"}
          </ProjectLineItem>
          <ProjectLineItem>
            {`$${taxExemptTotal((Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100) / 100).toFixed(2), bid.customer.taxExempt).toFixed(2)}`}
          </ProjectLineItem>
        </ProjectTotalLineContainer>
        <ProjectTotalLineContainer>
          <ProjectLineItem>
            {"Labor"}
          </ProjectLineItem>
          <ProjectLineItem>
            { `$${((bid.laborTotal * 100) / 100).toFixed(2)}` }
          </ProjectLineItem>
        </ProjectTotalLineContainer>
        <ProjectTotalLineContainer>
          <ProjectLineItem total>
            {"Total Due:"}
          </ProjectLineItem>
          <ProjectLineItem total>
            {console.log( taxExemptTotal(parseFloat((Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100) / 100).toFixed(2)), bid.customer.taxExempt) )}
            {`$${(parseFloat(sumAll(bid.bidAreas, 'price').toFixed(2)) + taxExemptTotal(parseFloat((Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100) / 100).toFixed(2)), bid.customer.taxExempt) + parseFloat(((bid.laborTotal * 100) / 100).toFixed(2))).toFixed(2)}`}
          </ProjectLineItem>
        </ProjectTotalLineContainer>
      </ProjectTotals>
    </FlexContainer>
  </TotalsView>
)

export default PDFFinalTotal
