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
  width: 98%;
  border-bottom: 1px solid #f8f8ff;
  padding: 3vh 10px;
  height: 13vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  width: 16vw;
  padding-left: 10px;
`
const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  background-color: #FFF;

`

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const CenteredContainer = styled(Container)`
  align-items: center;
  width: 9vw;
  padding: 0;
  cursor: default;
`

const ButtonContainer = styled(Container)`
  width: 20px;
  justify-content: center;
`

const PartNumber = styled.div`
  font-size: 12px;
  color: #C3C3C3;
`

const TextInput = styled.input`
  width: 5vw;
  border: none;
  border-radius: 4px;
  margin-top: 3px;
`

const DollarAmt = styled.div`
  color: #F8F8FF;
  font-size: 14px;
`

class ProductCard extends Component {
  constructor(props) {
    super(props)

    this.state = { qty: 1, editPrice: false }

    this.handleChange = this.handleChange.bind(this)
    this.flipEditPrice = this.flipEditPrice.bind(this)
  }

  handleChange(str) {
    if(str === '') {
      this.setState({ qty: 1 })
    } else {
      this.setState({ qty: parseInt(str) })
    }
  }

  flipEditPrice() {
    this.setState({ editPrice: !this.state.editPrice})
  }

  render() {
    let qty
    this.props.qty ? qty = this.props.qty : qty = this.state.qty
    return (
      <Wrapper>
        <ImageContainer>
          <Image src={`/images/products/${this.props.partNumber}.png`} />
        </ImageContainer>
        <Container>
          <Title size="sm">{this.props.name}</Title>
          <PartNumber>{this.props.partNumber}</PartNumber>
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
          { this.props.cost && <DollarAmt>{`$${(this.props.cost * qty).toFixed(2)}`}</DollarAmt> }
        </CenteredContainer>
        {!this.state.editPrice ?
          <CenteredContainer onClick={this.flipEditPrice}>
            <Title size="sm">Price</Title>
            <DollarAmt>{`$${(this.props.price * qty).toFixed(2)}`}</DollarAmt>
          </CenteredContainer>
        :
          <CenteredContainer onClick={this.flipEditPrice}>
            <Title size="sm">Edit</Title>
            <DollarAmt>{`$${(this.props.price * qty).toFixed(2)}`}</DollarAmt>
          </CenteredContainer>
        }
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
