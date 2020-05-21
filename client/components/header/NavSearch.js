import React, { Component } from 'react'
import styled from 'styled-components'
import { Autocomplete } from '@material-ui/lab'
import { TextField, Select, MenuItem } from '@material-ui/core'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 28vw;
`

const FormFill = styled(Autocomplete)`
  width: 150px;
`

const StyledSelect = styled(Select)`
  width: 7vw;
  font-size: 12px;
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
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          size="small"
          options={this.selectOptions()}
          getOptionLabel={option => option.name}
        />
      </Wrapper>
    )
  }
}


export default NavSearch
