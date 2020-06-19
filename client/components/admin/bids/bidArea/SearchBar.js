import React, { Component } from 'react'
import styled from 'styled-components'
import { SearchList } from '../bidArea'
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

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { searchValue: '', displayList: false }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.resetDisplayList = this.resetDisplayList.bind(this)
  }

  handleChange(evt) {
    this.setState({ searchValue: evt.target.value})
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
        <TextInput
          type="text"
          placeholder="Search..."
          onChange={evt => { this.handleChange(evt) } }
          onClick={this.handleClick}
        >
        </TextInput>
        {this.props.data.products.length && this.state.displayList &&
          <ProductList>
            {this.filterProductList(this.state.searchValue).map(product => <SearchList key={product.id} product={product} /> )}
          </ProductList>
        }
      </Wrapper>
    )
  }
}

export default graphql(getAllProducts)(SearchBar)
