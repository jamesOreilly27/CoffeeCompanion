import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { LocationLink, AddLocation, Note, AddNote, ImageDrop, RemoveImage } from '../bids'
import { BidAreaDetail } from './bidArea'
import { Title } from '../../styled-components'
import { sumAll, findArea } from './helpers'
import { nameToUrl } from '../../helpers'

const Wrapper = styled.div`
  
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95vw;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20px;
  width: 23%;
`

const ProjectTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 5px;
  margin-bottom: 0.7vh;
  background-color: #383737;
  border-radius: 4px;
  padding: 10px;
`

const PriceAndCostContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 1vh 0;
`

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Cost = styled.div`
  color: #F8F8FF;
  font-size: 18px;
`

const Price = styled.div`
  color: #F8F8FF;
  font-size: 18px;
`

const ImageContainer = styled.div`
  height: 230px;
  width: 100%;
  background-color: #383837;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1vh;
`

const HasImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 4px;
  margin-top: 5px;
`

const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383737;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
`

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 0.7vh;
  background-color: #383738;
  color: #F8F8FF;
  padding: 10px;
`

class BidDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedArea: " ", added: false }

    this.handleClick = this.handleClick.bind(this)
    this.addedToTrue = this.addedToTrue.bind(this)
    this.addedToFalse = this.addedToFalse.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data.bidDetails && this.state.selectedArea === " ") {
      this.setState({ selectedArea: this.props.data.bidDetails.bidAreas[0].title })
    }
  }

  handleClick(str) {
    this.setState({ selectedArea: str })
  }
  
  addedToTrue() {
    this.setState({ added: true })
  }
  
  addedToFalse() {
    this.setState({ added: false })
  }

  render() {
    const bid = this.props.data.bidDetails
    return (
      <Wrapper>
        {bid &&
          <Container>
            <Sidebar>
              <ProjectTotal>
                <Title size="lg"> Project Totals </Title>
                <PriceAndCostContainer>
                  <TotalContainer>
                    <Title size="med">
                      Cost
                    </Title>
                    <Cost>
                      {`$${sumAll(bid.bidAreas, 'cost').toFixed(2)}`}
                    </Cost>
                  </TotalContainer>
                  <TotalContainer>
                    <Title size="med">
                      Price
                    </Title>
                    <Price>
                      {`$${(sumAll(bid.bidAreas, 'price') + bid.laborTotal).toFixed(2)}`}
                    </Price>
                  </TotalContainer>
                </PriceAndCostContainer>
                <TotalContainer>
                  <Title size="med">
                    Profit
                  </Title>
                  <Price>
                    {`$${(sumAll(bid.bidAreas, 'price') + bid.laborTotal - sumAll(bid.bidAreas, 'cost')).toFixed(2)}`}
                  </Price>
                </TotalContainer>
              </ProjectTotal>
              <NoteContainer>
                <Title size="lg">
                  Notes
                </Title>
                {bid.notes.map(note => <Note note={note} bidId={bid.id} /> )}
                <AddNote bidId={bid.id} />
              </NoteContainer>
              <ImageContainer>
                <Title margin={1} size="lg">
                  Header Image
                </Title>
                {bid.hasHeaderImage ?
                <HasImageContainer>
                  <Image src={`/images/${nameToUrl(bid.customer.companyName)}.png`} />
                  <RemoveImage bid={bid} />
                </HasImageContainer>
                :
                  <ImageDrop companyName={bid.customer.companyName} bid={bid} />
                }
              </ImageContainer>
              <AreaContainer>
                <Title size="lg">
                  Sections
                </Title>
                {bid.bidAreas.map(location => <LocationLink key={location.title} location={location} bidId={bid.id} handleClick={this.handleClick} />)}
                <AddLocation bid={bid} flipTrue={this.addedToTrue} flipFalse={this.addedToFalse} />
              </AreaContainer>
            </Sidebar>
            <BidAreaDetail bidId={parseInt(this.props.match.params.id)} area={findArea(this.state.selectedArea, bid.bidAreas)} updateTitleState={this.handleClick} laborRate={bid.laborRate} laborTotal={bid.laborTotal} />
          </Container>
        }
      </Wrapper>
    )
  }
}

export default graphql(getBidDetails, {
  options: props => ({
    variables: { id: parseInt(props.match.params.id) }
  })
})(BidDetail)
