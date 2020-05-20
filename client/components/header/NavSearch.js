import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { FormFill, SubmitButton } from '../header'

const Wrapper = styled(Autocomplete)`
  display: flex;
  align-items: center;
  width: 150px;
  padding: 0;
  * {
    padding: 0;
  }
`

class NavSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Wrapper
      renderInput={() => <FormFill />}
    >
      <FormFill />
      <SubmitButton />
    </Wrapper>
    )
  }
}


export default graphql(getAllCategories)(NavSearch)
