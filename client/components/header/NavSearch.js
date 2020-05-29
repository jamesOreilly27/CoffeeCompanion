import React, { Component } from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { FormFill } from '../header'
import history from '../history'
import { nameToUrl } from '../helpers'

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  width: 30vw;
  height: 5vh;
`

const StyledSelect = styled(Select)`
  && {
    width: 12vw;
    font-size: 12px;
    border: 1px solid #B5B7B7;
    height: 3.9vh;
    border-radius: 4px;
    border-bottom: none;
    padding: 3px;
  }
`

class NavSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { displayValue: 'categories' }
    this.selectOptions = this.selectOptions.bind(this)
  }

  selectOptions() {
    if(this.state.displayValue === 'products') return this.props.products
    if(this.state.displayValue === 'categories') return this.props.categories
  }

  render() {
    return (
      <Wrapper
        id="nav-form"
        onSubmit={evt => {
          evt.preventDefault()
          const search = document.getElementById('nav-search')
          history.push(`/${this.state.displayValue}/${nameToUrl(search.value)}`)
          return <Redirect to={`/${this.state.displayValue}/${nameToUrl(search.value)}`} />
      }}>
        <StyledSelect
          id="nav-select"
          value={this.state.displayValue}
          onChange={evt => {
            this.setState({ displayValue: evt.target.value })
          }}
        >
          <MenuItem value="categories">categories</MenuItem>
          <MenuItem value="products">products</MenuItem>
        </StyledSelect>
        <FormFill selectOptions={this.selectOptions} displayValue={this.state.displayValue} />
      </Wrapper>
    )
  }
}


export default NavSearch
