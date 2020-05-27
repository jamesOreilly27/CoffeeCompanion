import React, { Component } from 'react'
import styled from 'styled-components'
import { AdminList } from '../products'
import { AdminContainer, Label } from './styledComponents'

const Wrapper = styled(AdminContainer)`
  display: flex;
  flex-direction: column;
`

const Edit = styled.div`
  margin: 10px;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
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
        <AdminList products={this.props.products} />
        <Edit onClick={this.flipEditMode}> Edit </Edit>
      </Wrapper>
    )
  }
} 

export default Featured
