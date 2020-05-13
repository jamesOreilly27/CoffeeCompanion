import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql'
import { Dropdown } from '../navsearch'

const Wrapper = styled.form`

`

class NavSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Wrapper>
      {this.props.data.categories && <Dropdown categories={this.props.data.categories} />}
    </Wrapper>
    )
  }
}


export default graphql(getAllCategories)(NavSearch)
