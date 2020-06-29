import styled from '@react-pdf/styled-components'

export const TitlePage = styled.Page`
  
`

export const HeaderView = styled.View`
  width: 95%;
  margin: 0 10px;
  height: 15vh;
  flex-direction: row;
  justify-content: space-between;
`

export const Customer = styled.View`
  width: 65%;
  height: 15vh;
  background-color: #317787;
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

export const NewView = styled.View`

`

export const AreaDetailView = styled.View`
  margin: 20px 50px 0 15px;
  padding: 10px;
  flexGrow: 1;
`

export const AreaHeader = styled.Text`
  padding: 20px;
  fontSize: 30px;
  background-color: #006481;
  color: #FFF;
  border-radius: 4px;
`

export const AreaDescription = styled.Text`
  background-color: #006481;
  padding: 20px;
  fontSize: 13px;
  color: #FFF;
`

export const ProductListHeader = styled.Text`
  margin-top: 25px;
  padding: 10px;
  width: 100%;
  background-color: #317787;
  color: #FFF;
  border: 1px solid black;
`

export const ProductsView = styled.View`
  border: 1px solid black;
  padding-top: 10px 0 -5px;
`

export const ProductCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 98%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 13px 0px;
  background-color: ${({ isEven }) => {
    if(isEven) return "#FFF"
    else return "#F3F3F3"
  }}
`

export const ImagePlaceholder = styled.Text`
  font-size: 8px;
  width: 15%;
`

export const ProductName = styled.Text`
  width: 60%
  font-size: 15px;
  color: #000;
`

export const ProductQty = styled.Text`
  font-size: 15px;
  color: #000;
  width: 10%;
`

export const ProductPrice = styled.Text`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 15px;
  color: #000;
  width: 15%;
`

export const AreaTotalView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid black;
`

export const AreaTotalTitle = styled.Text`
  font-size: 20px;
  width: 157%;
`

export const AreaTotalPrice = styled.Text`
  font-size: 20px;
  width: 40%;
`

export const TotalPage = styled.Page`

`

export const TotalsView = styled.View`
  
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