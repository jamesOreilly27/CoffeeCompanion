import React from 'react'
import { AreaTableHeader, AreaTitle, HeaderItem, TotalsView, AreaView, AreasView, ProjectTotals, ProjectTotalLineContainer, ProjectLineItem, AreaHeader } from './PDFStyledComponents'
import { Text } from '@react-pdf/renderer'
import { PDFTitlePage, PDFAreaCard } from '../bids'
import { sumAll, taxExemptTotal } from './helpers'

const PDFFinalTotal = ({ bid }) => (
  <TotalsView>
    <AreasView>
      <AreaHeader>
        {`Total Proposal: This proposal is only valid for 30 days`}
      </AreaHeader>
      <AreaTableHeader>
        <AreaTitle>Areas</AreaTitle>
        <HeaderItem> {`Parts`} </HeaderItem>
        <HeaderItem> {` Tax `} </HeaderItem>
        <HeaderItem> {`Total`} </HeaderItem>
      </AreaTableHeader>
      <AreaView>
        {bid.bidAreas.map(area => <PDFAreaCard key={area.id} area={area} isEven={bid.bidAreas.indexOf(area) % 2 === 0} />)}
      </AreaView>
    </AreasView>
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
          {`$${taxExemptTotal((Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100) / 100).toFixed(2), true)}`}
        </ProjectLineItem>
      </ProjectTotalLineContainer>
      <ProjectTotalLineContainer>
        <ProjectLineItem>
          {"Estimated Labor (8 Hours)"}
        </ProjectLineItem>
        <ProjectLineItem>
          {`$520.00`}
        </ProjectLineItem>
      </ProjectTotalLineContainer>
      <ProjectTotalLineContainer>
        <ProjectLineItem total>
          {"Total Due:"}
        </ProjectLineItem>
        <ProjectLineItem total>
          {`$${((sumAll(bid.bidAreas, 'price')) + 520).toFixed(2)}`}
        </ProjectLineItem>
      </ProjectTotalLineContainer>
    </ProjectTotals>
  </TotalsView>
)

export default PDFFinalTotal
