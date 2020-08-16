import styled from '@react-pdf/styled-components'

export const Doc = styled.Document`
  width: 100%;
`

export const TitlePage = styled.Page`
  width: 100%;
  height: 100%;
  padding: 0;
`

export const FrontPage = styled.View`
  
`

export const HeaderView = styled.View`
  width: 100%;
  justify-content: space-between;
`

export const Customer = styled.View`
  width: 50%;
  height: 15vh;
  margin-left: 15px;
  margin-bottom: -30px;
`

export const ProposalMessage = styled.Text`
  font-size: 12px;
  margin-left: 13px;
`

export const AddyInfo = styled.View`
  padding: 10px;
  width: 100%;
  height: 75%;
  color: #000;
`

export const Header = styled.Text`
  font-size: 20px;
`

export const AddressLine = styled.Text`
  color: #000;
  font-size: 12px;
`

export const OurHeader = styled.Text`
  font-weight: bold;
  font-size: 20px;
`

export const MyHeader = styled.Text`
  font-size: 12px;
`

export const OurAddressLine = styled(AddressLine)`
  font-size: 12px;
  color: #000;
`

export const OurLink = styled.Link`
  font-size: 11px;
`

export const OurInfo = styled.View`
  width: 100%;
  display: flex;
  margin-left: 8px;
  flex-direction: column;
  align-items: center;
`

export const NewView = styled.View`

`

export const AreaDetailView = styled.View`
  margin: 20px 50px 0 15px;
  padding: 10px;
  flexGrow: 1;
`

export const AreaHeader = styled.Text`
  padding: 8px;
  fontSize: 20px;
  background-color: #000;
  color: #FFF;
  border-bottom: 1px solid #FFF;
`

export const AreaDescription = styled.Text`
  background-color: #000;
  padding: 20px;
  fontSize: 13px;
  color: #FFF;
`

export const ProductListHeader = styled.Text`
  padding: 10px;
  width: 100%;
  background-color: #000;
  color: #FFF;
  border: 1px solid black;
  font-size: 13px;
`

export const ProductsView = styled.View`
  border: 1px solid black;
`

export const ProductCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 0;
  background-color: ${({ isEven }) => {
    if(isEven) return "#FFF"
    else return "#F3F3F3"
  }};
`

export const ProductImage = styled.Image`
  width: 15%
  height: 80%;
  margin: 0 10px;
`

export const ProductName = styled.Text`
  width: 45%
  font-size: 12px;
  color: #000;
`

export const QtyContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`

export const ProductQty = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #000;
  width: 100%;
`

export const ProductPrice = styled.Text`
  text-align: right;
  font-size: 12px;
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
  font-size: 17px;
  width: 215%;
`

export const AreaTotalPrice = styled.Text`
  font-size: 17px;
  width: 40%;
`

export const TotalPage = styled.Page`

`

export const TotalsView = styled.View`
  width: 100%;
  margin-left: 15px;
`

export const AreasView = styled.View`
  margin: 10px 50px 0 10px;
`

export const AreaTableHeader = styled.View`
  display: flex;
  font-size: 14px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: #000;
  color: #FFF;
  border-bottom: 1px solid black;
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

//#255941

//padding: 15px 0 13px 0px;
//padding-top: 10px 0 -5px;