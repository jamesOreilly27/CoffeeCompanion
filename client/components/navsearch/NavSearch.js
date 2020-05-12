import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getAllCategories } from '../../graphql'

const Wrapper = styled.form`

`

class NavSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Wrapper>
      {console.log('TESTING', this.props.data.categories)}
      Hello Word
    </Wrapper>
    )
  }
}


export default graphql(getAllCategories)(NavSearch)
