import React from 'react'
import { sumAll, taxExemptTotal } from './helpers'
import { AreaCard, AreaTitle, AreaItem } from './PDFStyledComponents'

const PDFAreaCard = ({ area, taxExempt, isEven }) => (
  <AreaCard isEven={isEven}>
    <AreaTitle>
      {area.title}
    </AreaTitle>
    <AreaItem>
      {`$${sumAll([area], 'price').toFixed(2)}`}
    </AreaItem>
    <AreaItem>
      {`$${taxExemptTotal(taxExemptTotal((Math.ceil(sumAll([area], 'price') * .065 * 100) / 100).toFixed(2), taxExempt))}`}
    </AreaItem>
    <AreaItem>
      {`$${( sumAll([area], 'price')).toFixed(2) }`}
    </AreaItem>
  </AreaCard>
)

//{`$${( taxExemptTotal(Math.ceil(sumAll([area], 'price') * .065 * 100) / 100).toFixed(2), true) }`}

export default PDFAreaCard
