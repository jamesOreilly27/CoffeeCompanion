import React from 'react'
import { Header, AreaTableHeader, AreaTitle, HeaderItem, TotalsView, AreaView, AreasView, ProjectTotals, ProjectTotalLineContainer, ProjectLineItem } from './PDFStyledComponents'
import { PDFTitlePage, PDFAreaCard } from '../bids'
import { sumAll } from './helpers'

const PDFFinalTotal = ({ bid }) => (
  <TotalsView>
    <PDFTitlePage />
    <AreasView>
      <Header>
        {`Total Proposal`}
      </Header>
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
          {`$${(Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100) / 100).toFixed(2)}`}
        </ProjectLineItem>
      </ProjectTotalLineContainer>
      <ProjectTotalLineContainer>
        <ProjectLineItem>
          {"Labor"}
        </ProjectLineItem>
        <ProjectLineItem>
          {`$250`}
        </ProjectLineItem>
      </ProjectTotalLineContainer>
      <ProjectTotalLineContainer>
        <ProjectLineItem total>
          {"Total Due:"}
        </ProjectLineItem>
        <ProjectLineItem total>
          {`$${((sumAll(bid.bidAreas, 'price') + Math.ceil((sumAll(bid.bidAreas, 'price') * .065) * 100) / 100 ) + 250).toFixed(2)}`}
        </ProjectLineItem>
      </ProjectTotalLineContainer>
    </ProjectTotals>
  </TotalsView>
)

export default PDFFinalTotal
