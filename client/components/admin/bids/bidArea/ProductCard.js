import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title } from '../../../styled-components'
import { QtyContainer, AddButton, RemoveButton } from '../bidArea'

const Wrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #383737;
  height: 7vh;
  width: 85%;
  margin: 0 1.5vh;
  border-bottom: 1px solid #f8f8ff;
  padding: 2vh 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 62%;
  width: 20vw;
  padding-left: 10px;
`

const Image = styled(FontAwesomeIcon)`
  color: #C1C1C7;
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
  color: #C1C1C7;
`

const TextInput = styled.input`
  width: 5vw;
  border: none;
  border-radius: 4px;
  margin-top: 3px;
`

const DollarAmt = styled.div`
  color: #F8F8FF;
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
    let qty
    this.props.qty ? qty = this.props.qty : qty = this.state.qty
    return (
      <Wrapper>
        <Image icon={['fa', 'image']} size="3x" />
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
          { this.props.cost && <DollarAmt>{`$${this.props.cost * qty}`}</DollarAmt> }
        </CenteredContainer>
        <CenteredContainer>
          <Title size="sm">Price</Title>
          <DollarAmt>{`$${this.props.price * qty}`}</DollarAmt>
        </CenteredContainer>
        <ButtonContainer>
          {this.props.search &&
            <AddButton
              productId={this.props.productId}
              handleAddChange={this.props.handleAddChange}
              bidId={this.props.bidId}
              bidAreaId={this.props.bidAreaId}
              qty={this.state.qty}
              price={this.props.price}
              cost={this.props.cost}
            />
          }
          {!this.props.PDF && !this.props.search &&
            <RemoveButton productId={this.props.productId} bidId={this.props.bidId} />
          }
        </ButtonContainer>
      </Wrapper>
    )
  }
}

export default ProductCard
