import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { TitlePage, TitleView, Header, ProductsView, ProductCard, ImagePlaceholder, ProductName, ProductQty, ProductPrice, ProductListHeader, AreaTotalView, AreaTotalTitle, AreaTotalPrice, TotalPage, AreaCard, AreaTitle, FinalAreaTotalPrice, AreaPartsTotal, AreaTaxTotal, AreaTableHeader, AreaPartsHeader, AreaTaxHeader, FinalAreaPriceHeader, ProjectTotalsView } from './PDFStyledComponents'
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
  viewer: {
    color: '#000'
  },
  page: {

  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  areaTitle: {
    margin: "10px, 0, 10px, 10px",
    fontSize: "30px"
  },
  productCard: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    margin: "10px 0 5px 10px"
  }
});

const BidPDF = props => {
  const bid = props.data.bidDetails
  return (
    <Wrapper>
      <PDFViewer width="100%" height="100%">
        {bid &&
          <Document>
            <TitlePage>
              <TitleView fixed>
                <Header>
                  {`- Test Customer Bid -`}
                </Header>
              </TitleView>
            </TitlePage>
            <Page size="A4" style={styles.page}>
              {bid.bidAreas.map(area => {
                return (
                  <View sytle={styles.section} break={bid.bidAreas.indexOf(area) !== 0}>
                    <Text style={styles.areaTitle}> {area.title} </Text>
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
                              {`$${product.price * product.qty}`}
                            </ProductPrice>
                          </ProductCard>
                        )
                      })}
                    </ProductsView>
                    <AreaTotalView>
                      <AreaTotalTitle> Section Total </AreaTotalTitle>
                      <AreaTotalPrice> {`$${sumAll([area], 'price')}`} </AreaTotalPrice>
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
              {bid.bidAreas.map(area => {
                return (
                  <AreaCard>
                    <AreaTitle>
                      {area.title}
                    </AreaTitle>
                    <AreaPartsTotal>
                      {`$${sumAll([area], 'price')}`}
                    </AreaPartsTotal>
                    <AreaTaxTotal>
                      {`$${Math.ceil(sumAll([area], 'price') * .065 * 100) / 100}`}
                    </AreaTaxTotal>
                    <FinalAreaTotalPrice>
                      {`$${sumAll([area], 'price') + Math.ceil((sumAll([area], 'price') * .065) * 100) / 100}`}
                    </FinalAreaTotalPrice>
                  </AreaCard>
                )
              })}
              <ProjectTotalsView>
                <ProductListHeader>
                  Total
                </ProductListHeader>
                <AreaPartsHeader> {`$${sumAll(bid.bidAreas, 'price')}`} </AreaPartsHeader>
                <AreaTaxHeader> {`$${Math.ceil(sumAll(bid.bidAreas, 'price') * .065 * 100) / 100}`} </AreaTaxHeader>
                <FinalAreaPriceHeader> {`$${sumAll(bid.bidAreas, 'price') + Math.ceil((sumAll(bid.bidAreas, 'price') * .065) * 100) / 100}`} </FinalAreaPriceHeader>
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
