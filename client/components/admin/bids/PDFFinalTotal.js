import React from 'react'
import { Header, AreaTableHeader, ProductListHeader, AreaPartsHeader, AreaTaxHeader, FinalAreaPriceHeader, ProjectTotalsView, TotalsView} from './PDFStyledComponents'
import { PDFTitlePage, PDFAreaCard } from '../bids'
import { sumAll } from './helpers'

const PDFFinalTotal = ({ bid }) => (
  <TotalsView>
    <PDFTitlePage />
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
  </TotalsView>
)

export default PDFFinalTotal
