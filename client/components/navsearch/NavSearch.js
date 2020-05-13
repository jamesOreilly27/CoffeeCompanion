import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql'
import { Dropdown, FormFill, SubmitButton } from '../navsearch'

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  height: 5vh;
`

class NavSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Wrapper>
      {this.props.data.categories && <Dropdown categories={this.props.data.categories} />}
      <FormFill />
      <SubmitButton />
    </Wrapper>
    )
  }
}


export default graphql(getAllCategories)(NavSearch)
