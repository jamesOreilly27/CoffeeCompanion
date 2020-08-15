import styled from '@react-pdf/styled-components'

export const TitlePage = styled.Page`
  
`

export const FrontPage = styled.View`
  
`

export const TitleImage = styled.Image`
  margin-top: 175px;
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
  background-color: #255941;
`

export const AddyInfo = styled.View`
  align-items: center;
  padding: 10px;
  width: 60%;
  height: 75%;
  background-color: #255941;
  color: #FFF;
`

export const Header = styled.Text`
  font-size: 20px;
`

export const AddressLine = styled.Text`
  color: #FFF;
  font-size: 13px;
`

export const OurHeader = styled.Text`
  font-weight: bold;
  font-size: 14px;
`

export const OurAddressLine = styled(AddressLine)`
  color: #000;
`

export const OurLink = styled.Link`
  font-size: 11px;
`

export const OurInfo = styled.View`
  width: 35%;
  display: flex;
  margin-left: 8px;
  flex-direction: column;
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
  background-color: #255941;
  color: #FFF;
`

export const AreaDescription = styled.Text`
  background-color: #255941;
  padding: 20px;
  fontSize: 13px;
  color: #FFF;
`

export const ProductListHeader = styled.Text`
  margin-top: 25px;
  padding: 10px;
  width: 100%;
  background-color: #255941;
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
  }};
`

export const ProductImage = styled.Image`
  width: 15%
  height: 90%;
  margin: 0 10px;
`

export const ProductName = styled.Text`
  width: 45%
  font-size: 15px;
  color: #000;
`

export const QtyContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`

export const ProductQty = styled.Text`
  font-size: 15px;
  text-align: center;
  color: #000;
  width: 100%;
`

export const ProductPrice = styled.Text`
  text-align: right;
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
  width: 215%;
`

export const AreaTotalPrice = styled.Text`
  font-size: 20px;
  width: 40%;
  margin-right: 10px;
`

export const TotalPage = styled.Page`

`

export const TotalsView = styled.View`
  width: 100%;
`

export const AreasView = styled.View`
  margin: 10px 50px 0 10px;
`

export const AreaTableHeader = styled.View`
  display: flex;
  font-size: 14px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  padding: 10px;
  width: 100%;
  background-color: #255941;
  color: #FFF;
  border: 1px solid black;
`

export const AreaView = styled.View`
  border: 1px solid black;
`

export const AreaCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 13px 10px;
  font-size: 11px;
  background-color: ${({ isEven }) => {
    if(isEven) return "#FFF"
    else return "#EAEDED"
  }};
`

export const AreaTitle = styled.Text`
  width: 55%;
`

export const AreaItem = styled.Text`
  width: 10%;
  text-align: right;
`

export const HeaderItem = styled.Text`
  width: 10%;
  text-align: right;
`

export const ProjectTotals = styled.View`
  font-size: 14px;
  width: 40%;
  margin-left: 307px;
  border: 1px solid black;
`

export const ProjectTotalLineContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 8px;
  border-bottom: 1px solid black;
`

export const ProjectLineItem = styled.Text`
  font-size: ${({ total }) => {
    if(total) return "20px"
    else return "14px"
  }};
`
