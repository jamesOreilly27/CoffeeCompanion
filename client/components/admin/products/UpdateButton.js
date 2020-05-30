import React, { Component } from 'react'
import history from '../../history'
import { Redirect } from 'react-router-dom'
import { Button } from '../../styled-components'
import { nameToUrl } from '../../helpers'

class UpdateButton extends Component {
  constructor(props) {
    super(props)

    this.state = { redirect: false }
  }

  render() {
    return (
      <Button backgroundColor="#2091E8" width={100} height={33} onClick={() => {
        history.push(`/admin/product/${nameToUrl(this.props.product.name)}`)
        this.setState({ redirect: true })
      }}>
        {this.state.redirect && <Redirect to={`/admin/product/${nameToUrl(this.props.product.name)}`} />}
        Update
      </Button>
    )
  }
}

export default UpdateButton
