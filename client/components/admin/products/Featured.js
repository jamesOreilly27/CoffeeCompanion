import React, { Component } from 'react'
import styled from 'styled-components'
import { AdminList } from '../products'
import { AdminContainer, Label } from './styledComponents'

const Wrapper = styled(AdminContainer)`
  background-color: #383737;
`

class Featured extends Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false }
    
    this.flipEditMode = this.flipEditMode.bind(this)
  }

  flipEditMode() {
    this.setState({ editMode: !this.state.editMode })
  }

  render() {
    return (
      <Wrapper width={65}>
        <Label> Featured </Label>
        <AdminList products={this.props.products} featured/>
      </Wrapper>
    )
  }
} 

export default Featured
