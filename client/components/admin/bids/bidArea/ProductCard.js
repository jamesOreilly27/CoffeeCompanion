import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title } from '../../../styled-components'
import { QtyContainer, AddButton, RemoveButton } from '../bidArea'

const Wrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7vh;
  width: 85%;
  margin: 1.5vh;
  border-top: 1px solid black;
  padding-top: 2vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 62%;
  width: 20vw;
  padding-left: 10px;
`

const CenteredContainer = styled(Container)`
  align-items: center;
  width: 12vw;
  padding: 0;
`

const ButtonContainer = styled(Container)`
  width: 20px;
  justify-content: center;
`

const Description = styled.div`
  font-size: 14px;
  color: #828181;
`

const TextInput = styled.input`
  width: 5vw;
  border: none;
  border-radius: 4px;
  margin-top: 3px;
`
class ProductCard extends Component {
  constructor(props) {
    super(props)

    this.state = { qty: 1 }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(str) {
    if(str === '') {
      this.setState({ qty: 1 })
    } else {
      this.setState({ qty: parseInt(str) })
    }
  }

  render() {
    return (
      <Wrapper>
        <FontAwesomeIcon icon={['fa', 'image']} size="3x" />
        <Container>
          <Title size="sm">{this.props.name}</Title>
          <Description>{this.props.description}</Description>
        </Container>
        {this.props.search ?
          <CenteredContainer>
            <Title size="sm"> Qty </Title>
            <TextInput onChange={evt => {
              this.handleChange(evt.target.value)
            }}></TextInput>
          </CenteredContainer>
          :
          <QtyContainer quantity={this.props.qty} productId={this.props.productId} bidId={this.props.bidId} />
        }
        <CenteredContainer>
          <Title size="sm">Cost</Title>
          <div>{`$${this.props.cost}`}</div>
        </CenteredContainer>
        <CenteredContainer>
          <Title size="sm">Price</Title>
          <div>{`$${this.props.price}`}</div>
        </CenteredContainer>
        <ButtonContainer>
          {this.props.search ?
            <AddButton
              productId={this.props.productId}
              bidId={this.props.bidId}
              bidAreaId={this.props.bidAreaId}
              qty={this.state.qty}
              price={this.props.price}
              cost={this.props.cost}
            />
            :
            <RemoveButton productId={this.props.productId} bidId={this.props.bidId} />
          }
        </ButtonContainer>
      </Wrapper>
    )
  }
}

export default ProductCard
