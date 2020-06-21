import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductCard } from '../bidArea'
import { getAllProducts } from '../../../../graphql'
import { graphql } from 'react-apollo'
import { TextInput } from '../../../styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EDF5F9;
`

const CloseButton = styled.button`
  border-radius: 50%;
  background-color: #616060;
  width: 20px;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 67vw;
  margin-top: 5px;
`

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { searchValue: '', displayList: false }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.resetDisplayList = this.resetDisplayList.bind(this)
  }

  handleChange(evt) {
    this.setState({ searchValue: evt.target.value.toUpperCase()})
  }

  handleClick() {
    this.setState({ displayList: true })
  }

  resetDisplayList() {
    this.setState({ displayList: false })
  }

  filterProductList(filterStr) {
    if(filterStr === ' ') {
      return this.props.data.products
    }
    else {
      return this.props.data.products.filter(product => product.name.includes(filterStr))
    }
  }

  render() {
    return (
      <Wrapper>
        {console.log('STATE', this.state)}
        <TextInput
          type="text"
          placeholder="Search..."
          onChange={evt => { this.handleChange(evt) } }
          onClick={this.handleClick}
        >
        </TextInput>
        {this.props.data.products.length && this.state.displayList &&
          <ProductList>
            <CloseButton>X</CloseButton>
            {this.filterProductList(this.state.searchValue).map(product => <ProductCard key={product.id} product={product} search/> )}
          </ProductList>
        }
      </Wrapper>
    )
  }
}

export default graphql(getAllProducts)(SearchBar)
