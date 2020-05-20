import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { FormFill, SubmitButton } from '../header'

const Wrapper = styled(Autocomplete)`
  width: 150px;
`

// display: flex;
//   align-items: center;

class NavSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Wrapper
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
      size="small"
      options={[
        {name: "Watch"},
        {name: "If"},
        {name: "This"},
        {name: "Works"}
      ]}
      getOptionLabel={option => option.name}
    >
      {/* <FormFill /> */}
      {/* <SubmitButton /> */}
    </Wrapper>
    )
  }
}


export default graphql(getAllCategories)(NavSearch)
