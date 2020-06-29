import React from 'react'
import { sumAll } from './helpers'
import { AreaCard, AreaTitle, AreaPartsTotal, AreaTaxTotal, FinalAreaTotalPrice } from './PDFStyledComponents'

const PDFAreaCard = ({ area }) => (
  <AreaCard>
    <AreaTitle>
      {area.title}
    </AreaTitle>
    <AreaPartsTotal>
      {`$${sumAll([area], 'price').toFixed(2)}`}
    </AreaPartsTotal>
    <AreaTaxTotal>
      {`$${(Math.ceil(sumAll([area], 'price') * .065 * 100) / 100).toFixed(2)}`}
    </AreaTaxTotal>
    <FinalAreaTotalPrice>
      {`$${sumAll([area], 'price') + Math.ceil((sumAll([area], 'price') * .065) * 100).toFixed(2) / 100}`}
    </FinalAreaTotalPrice>
  </AreaCard>
)

export default PDFAreaCard
