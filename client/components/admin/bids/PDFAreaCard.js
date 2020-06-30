import React from 'react'
import { sumAll } from './helpers'
import { AreaCard, AreaTitle, AreaItem } from './PDFStyledComponents'

const PDFAreaCard = ({ area, isEven}) => (
  <AreaCard isEven={isEven}>
    <AreaTitle>
      {area.title}
    </AreaTitle>
    <AreaItem>
      {`$${sumAll([area], 'price').toFixed(2)}`}
    </AreaItem>
    <AreaItem>
      {`$${(Math.ceil(sumAll([area], 'price') * .065 * 100) / 100).toFixed(2)}`}
    </AreaItem>
    <AreaItem>
      {`$${( sumAll([area], 'price') + Math.ceil((sumAll([area], 'price') * .065) * 100) / 100 ).toFixed(2) }`}
    </AreaItem>
  </AreaCard>
)

export default PDFAreaCard
