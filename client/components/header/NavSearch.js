import React, { Component } from 'react'
import styled from 'styled-components'
import { Autocomplete } from '@material-ui/lab'
import { TextField, Select, MenuItem } from '@material-ui/core'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30vw;
  height: 5vh;
`

const FormFill = styled(Autocomplete)`
  && .MuiOutlinedInput-root {
    height: 4vh;
  }

  && .MuiInputLabel-outlined {
    margin-top: -3px;
  }

  && .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    margin-top: 2px;
  }

  && .MuiAutocomplete-input:first-child {
    margin-top: -6px;
  }
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
  }

  selectOptions() {
    if(this.state.displayValue === 'products') return this.props.products
    if(this.state.displayValue === 'categories') return this.props.categories
  }

  render() {
    return (
      <Wrapper>
        <StyledSelect
          value={this.state.displayValue}
          onChange={evt => {
            this.setState({ displayValue: evt.target.value })
          }}
        >
          <MenuItem value="categories">categories</MenuItem>
          <MenuItem value="products">products</MenuItem>
        </StyledSelect>
        <FormFill
          renderInput={(params) => <TextField {...params} label="Search..." variant="outlined" />}
          size="small"
          style={{ width: 300 }}
          options={this.selectOptions()}
          getOptionLabel={option => option.name}
        />
      </Wrapper>
    )
  }
}


export default NavSearch
