import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { LocationLink, AddLocation } from '../bids'
import { BidAreaDetail } from './bidArea'
import { Title } from '../../styled-components'
import { sumAll, findArea } from './helpers'

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
  width: 15%:
`

const ProjectTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 5px;
  margin-bottom: 1vh;
  background-color: #FFF;
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
  
`

const Price = styled.div`

`

const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 4px;
  width: 100%;
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
    return (
      <Wrapper>
        {this.props.data.bidDetails &&
          <Container>
            <Sidebar>
              <ProjectTotal>
                <Title size="med"> Project Totals </Title>
                <PriceAndCostContainer>
                  <TotalContainer>
                    <Title size="sm">
                      Cost
                    </Title>
                    <Cost>
                      {`$${sumAll(this.props.data.bidDetails.bidAreas, 'cost')}`}
                    </Cost>
                  </TotalContainer>
                  <TotalContainer>
                    <Title size="sm">
                      Price
                    </Title>
                    <Price>
                      {`$${sumAll(this.props.data.bidDetails.bidAreas, 'price')}`}
                    </Price>
                  </TotalContainer>
                </PriceAndCostContainer>
              </ProjectTotal>
              <AreaContainer>
                {this.props.data.bidDetails.bidAreas.map(location => <LocationLink key={location.title} location={location} handleClick={this.handleClick} />)}
                <AddLocation bid={this.props.data.bidDetails} flipTrue={this.addedToTrue} flipFalse={this.addedToFalse} />
              </AreaContainer>
            </Sidebar>
            <BidAreaDetail bidId={parseInt(this.props.match.params.id)} area={findArea(this.state.selectedArea, this.props.data.bidDetails.bidAreas)} />
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
