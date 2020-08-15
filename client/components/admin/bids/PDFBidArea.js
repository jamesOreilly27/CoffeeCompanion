import React from 'react'
import { NewView, AreaDetailView, AreaHeader, AreaDescription, QtyContainer, ProductListHeader, ProductsView, ProductCard, ProductImage, ProductName, ProductQty, ProductPrice, AreaTotalView, AreaTotalTitle, AreaTotalPrice } from './PDFStyledComponents'
import { PDFTitlePage } from '../bids'
import { sumAll } from './helpers'


const PDFBidArea = ({ area, bid }) => (
  <NewView break={bid.bidAreas.indexOf(area) !== 0}>
    <PDFTitlePage customer={bid.customer}/>
    <AreaDetailView>
      <AreaHeader> {area.title} </AreaHeader>
      <ProductListHeader> Products </ProductListHeader>
      <ProductsView>
        {area.products.map(product => {
          return (
            <ProductCard key={product.id} isEven={area.products.indexOf(product) % 2 === 0}>
              <ProductImage src={`/images/products/${product.product.partNumber}.png`} />
              <ProductName>
                {product.product.name}
              </ProductName>
              <QtyContainer>
                <ProductQty>
                  {`$${(product.price).toFixed(2)} EA`}
                </ProductQty>
                <ProductQty>
                  {`Qty ${product.qty}`}
                </ProductQty>
              </QtyContainer>
              <ProductPrice>
                {`$${(product.price * product.qty).toFixed(2)}`}
              </ProductPrice>
            </ProductCard>
          )
        })}
      </ProductsView>
      <AreaTotalView>
        <AreaTotalTitle> Section Total </AreaTotalTitle>
        <AreaTotalPrice> {`$${sumAll([area], 'price').toFixed(2)}`} </AreaTotalPrice>
      </AreaTotalView>
    </AreaDetailView>
  </NewView>
)

export default PDFBidArea
