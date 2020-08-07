import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import history from '../../history'
import { sumAll } from './helpers'
import { Button } from '../../styled-components'
import { nameToUrl } from '../../helpers'
import { ArrowRight, ArrowLeft } from '../bids'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  background-color: #383737;
  text-decoration: none;
  color: #F8F8FF;
  padding: 10px;
  margin: 3px 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`

const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const FlexContainer = styled.div`
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`

const Title = styled.div`
  display: flex;
  font-size: 30px;
`

const AmtTitle = styled.div`
  font-size: 22px;
`

const Amt = styled.div`
  font-size: 18px;
`

const Arrow = styled(FontAwesomeIcon)`
  cursor: pointer;
`

class BidCard extends Component {
  constructor(props) {
    super(props)

    this.state = { redirect: false }

    this.handleViewClick = this.handleViewClick.bind(this)
  }

  handleViewClick() {
    this.setState({ redirect: true })
  }

  render() {
    const bid = this.props.bid
    return (
      <Wrapper>
        {this.state.redirect && <Redirect to={`/admin/bids/${bid.id}`} />}
        {this.state.redirect && history.push(`/admin/bids/${bid.id}`)}
        <Header>
          <Title>
            {bid.title}
          </Title>
          <Button width={35} height={30} backgroundColor={'#296D4D'} onClick={this.handleViewClick}>
            View
          </Button>
        </Header>
        <CostContainer>
          <div>
            {bid.status !== 'open' &&
              <ArrowLeft id={bid.id} status={bid.status} />
            }
          </div>
          <FlexContainer>
            <AmtTitle>Cost</AmtTitle>
            <Amt>{`$${sumAll(bid.bidAreas, 'cost').toFixed(2)}`}</Amt>
          </FlexContainer>
          <FlexContainer>
            <AmtTitle>Price</AmtTitle>
            <Amt>{`$${sumAll(bid.bidAreas, 'price').toFixed(2)}`}</Amt>
          </FlexContainer>
          <div>
            {bid.status !== 'approved' &&
              <ArrowRight id={bid.id} status={bid.status} />
            }
          </div>
        </CostContainer>
      </Wrapper>
    )
  }
}

export default BidCard
