import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getBidDetails } from '../../../graphql'
import { LocationLink, AddLocation, BidAreaDetail } from '../bids'
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
    this.state = { selectedArea: " " }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.bidDetails && this.state.selectedArea === " ") {
      this.setState({ selectedArea: this.props.data.bidDetails.bidAreas[0].title })
    }
  }

  handleClick(str) {
    this.setState({ selectedArea: str })
  }

  render() {
    const bid = this.props.data.bidDetails
    return (
      <Wrapper>
        {bid &&
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
                      {`$${sumAll(bid.bidAreas, 'cost')}`}
                    </Cost>
                  </TotalContainer>
                  <TotalContainer>
                    <Title size="sm">
                      Price
                    </Title>
                    <Price>
                      {`$${sumAll(bid.bidAreas, 'price')}`}
                    </Price>
                  </TotalContainer>
                </PriceAndCostContainer>
              </ProjectTotal>
              <AreaContainer>
                {bid.bidAreas.map(location => <LocationLink key={location.title} location={location} handleClick={this.handleClick} />)}
                <AddLocation />
              </AreaContainer>
            </Sidebar>
            <BidAreaDetail area={findArea(this.state.selectedArea, bid.bidAreas)} />
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
