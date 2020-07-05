import React, { Component } from 'react'
import styled from 'styled-components'
import { UpdateTitleForm } from '../bidArea'
import { Link } from 'react-router-dom'
import { Title } from '../../../styled-components'
import { sumAll } from '../helpers'

const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-left: 10px;
`

const HeaderTitle = styled(Title)`
  
`

const EditTitle = styled.div`
  font-size: 11px;
  color: #F8F8FF;
  cursor: pointer;
  margin-left: 2vw;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
`

const AreaPrice = styled.div`
  background-color: #F2F3F4;
  border-radius: 4px;
  padding: 10px;
`

const PDFButton = styled(Link)`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
  outline: none;
  cursor: pointer;
  margin: 1vh 0;
`

class AreaHeader extends Component {
  constructor(props) {
    super(props)

    this.state = { editMode: false }

    this.flipEditMode = this.flipEditMode.bind(this)
  }

  flipEditMode() {
    this.setState({ editMode: !this.state.editMode })
  }

  render() {
    return (
      <Header>
        {!this.state.editMode ?
          <TitleContainer>
            <HeaderTitle margin={1}>
              {this.props.area.title}
            </HeaderTitle>
            <EditTitle onClick={this.flipEditMode}>
              Edit Title
              </EditTitle>
          </TitleContainer>
          :
          <TitleContainer>
            <UpdateTitleForm areaId={this.props.area.id} title={this.props.area.title} handleSubmit={this.flipEditMode} updateTitleState={this.props.updateTitleState} />
          </TitleContainer>
        }
        <ContentContainer>
          <AreaPrice>
            {`$${sumAll([this.props.area], 'price').toFixed(2)}`}
          </AreaPrice>
          {!this.props.PDF &&
            <PDFButton
              to={`/admin/bids/${this.props.bidId}/pdf`}
              width={30}
              height={38.4}
              backgroundColor="#296D4D"
            >
              View PDF
            </PDFButton>
          }
        </ContentContainer>
      </Header>
    )
  }
}

export default AreaHeader

// = ({ area, bidId, PDF }) => (
//   <Header>
//     <TitleContainer>
//       <HeaderTitle margin={1}>
//         {area.title}
//       </HeaderTitle>
//       <EditTitle>
//         Edit Title
//       </EditTitle>
//     </TitleContainer>
//     <ContentContainer>
//       <AreaPrice>
//         {`$${sumAll([area], 'price').toFixed(2)}`}
//       </AreaPrice>
//       {!PDF &&
//         <PDFButton
//           to={`/admin/bids/${bidId}/pdf`}
//           width={30}
//           height={38.4}
//           backgroundColor="#296D4D"
//         >
//           View PDF
//         </PDFButton>
//       }
//     </ContentContainer>
//   </Header>
// )
