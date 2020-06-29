import styled from '@react-pdf/styled-components'
import { Page, Text, View, Link } from '@react-pdf/renderer'

export const TitlePage = styled.Page`
  
`

export const HeaderView = styled.View`
  width: 100%;
  height: 15vh;
  flex-direction: row;
  justify-content: space-between;
`

export const Customer = styled.View`
  width: 65%;
  height: 15vh;
  background-color: #317888;
`

export const AddyInfo = styled.View`
  align-items: center;
  padding: 10px;
  width: 60%;
  height: 75%;
  background-color: #006481;
  color: #FFF;
`

export const Header = styled.Text`
  font-size: 20px;
`

export const AddressLine = styled.Text`
  color: #FFF;
  font-size: 13px;
`

export const OurAddressLine = styled(AddressLine)`
  color: #000;
`

export const OurLink = styled.Link`
  font-size: 11px;
`

export const OurInfo = styled.View`
  width: 35%;
  align-items: center;
  margin-top: 10px;
`

export const ProductListHeader = styled.Text`
  margin: 10px 0 10px 10px;
  width: 59%;
`

export const ProductsView = styled.View`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-top: 10px 0 -5px;
`

export const ProductCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 5px 10px;
  padding: 5px 0 8px;
`

export const ImagePlaceholder = styled.Text`
  font-size: 8px;
`

export const ProductName = styled.Text`
  width: 55%
  font-size: 15px;
  color: blue;
`

export const ProductQty = styled.Text`
  font-size: 15px;
  color: blue;
`

export const ProductPrice = styled.Text`
  font-size: 15px;
  color: blue;
`

export const AreaTotalView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 151%;
  margin: 10px 0 10px 10px;
`

export const AreaTotalTitle = styled.Text`
  font-size: 20px;
  width: 35%;
`

export const AreaTotalPrice = styled.Text`
  font-size: 20px;
  width: 40%;
`

export const TotalPage = styled.Page`

`

export const AreaTableHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px solid black;
  font-weight: bold;
`

export const AreaCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 10px;
  font-size: 11px;
`

export const AreaTitle = styled.Text`
  width: 55%;
`

export const AreaPartsTotal = styled.Text`
  width: 10%;
`

export const AreaPartsHeader = styled.Text`
  margin-right: 53px;
`

export const AreaTaxTotal = styled.Text`
  width: 10%;
`

export const AreaTaxHeader = styled.Text`
  margin-right: 53px;
`

export const FinalAreaTotalPrice = styled.Text`
  width: 10%;

`

export const FinalAreaPriceHeader = styled.Text`

`

export const ProjectTotalsView = styled.View`
  display: flex;
  flex-direction: row;
  width: 98vw;
  border-top: 2px solid black;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 10px;
  font-size: 11px;
`