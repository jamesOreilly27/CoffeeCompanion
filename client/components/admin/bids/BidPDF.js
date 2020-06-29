import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { Header, ProductsView, ProductCard, ImagePlaceholder, ProductName, ProductQty, ProductPrice, ProductListHeader, AreaTotalView, AreaTotalTitle, AreaTotalPrice, TotalPage, AreaTableHeader, AreaPartsHeader, AreaTaxHeader, FinalAreaPriceHeader, ProjectTotalsView, AreaHeader, AreaDescription } from './PDFStyledComponents'
import { PDFTitlePage, PDFAreaCard } from '../bids'
import { PDFViewer, Page, View, Text, Image, Document, StyleSheet } from '@react-pdf/renderer'
import { sumAll } from './helpers'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98vw;
  height: 105vh;
  background-color: #FFF;
  border-radius: 4px;
`

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const BidPDF = props => {
  const bid = props.data.bidDetails
  return (
    <Wrapper>
      <PDFViewer width="100%" height="100%">
        {bid &&
          <Document>
            <PDFTitlePage />
            <Page size="A4">
              {bid.bidAreas.map(area => {
                return (
                  <View sytle={styles.section} break={bid.bidAreas.indexOf(area) !== 0}>
                    <AreaHeader> {area.title} </AreaHeader>
                    <AreaDescription> {`A brief description of the area so that there is no confusion as to where we are referring to. This field will have to be added to the BidArea Model as a property`} </AreaDescription>
                    <ProductListHeader> Products </ProductListHeader>
                    <ProductsView>
                      {area.products.map(product => {
                        return (
                          <ProductCard key={product.id}>
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
                  </View>
                )
              })}
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
