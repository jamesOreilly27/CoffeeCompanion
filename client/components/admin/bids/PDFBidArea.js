import React from 'react'
import { NewView, AreaDetailView, AreaHeader, AreaDescription, ProductListHeader, ProductsView, ProductCard, ImagePlaceholder, ProductName, ProductQty, ProductPrice, AreaTotalView, AreaTotalTitle, AreaTotalPrice } from './PDFStyledComponents'
import { PDFTitlePage } from '../bids'
import { sumAll } from './helpers'


const PDFBidArea = ({ area, bid }) => (
  <NewView break={bid.bidAreas.indexOf(area) !== 0}>
    <PDFTitlePage />
    <AreaDetailView>
      <AreaHeader> {area.title} </AreaHeader>
      <AreaDescription> {`A brief description of the area so that there is no confusion as to where we are referring to. This field will have to be added to the BidArea Model as a property`} </AreaDescription>
      <ProductListHeader> Products </ProductListHeader>
      <ProductsView>
        {area.products.map(product => {
          return (
            <ProductCard key={product.id} isEven={area.products.indexOf(product) % 2 === 0}>
              <ImagePlaceholder>
                Image Placeholder
              </ImagePlaceholder>
              <ProductName>
                {product.product.name}
              </ProductName>
              <ProductQty>
                {`x${product.qty}`}
              </ProductQty>
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
