import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { deleteProduct, getAllProducts } from '../../../graphql'
import { Button, EaseAlert } from '../../styled-components'
import AlertTitle from '@material-ui/lab/AlertTitle'

const sendData = () => {
  const input = { name: '' }
}

const Wrapper = styled.div`

`

const ChoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Choice = styled.div`
  cursor: pointer;
  background-color: #FFF;
  padding: 2px;
`

class RemoveButton extends Component {
  constructor(props) {
    super(props)

    this.state = { alertActive: false }
    this.flipAlertActive = this.flipAlertActive.bind(this)
  }

  flipAlertActive() {
    this.setState({ alertActive: !this.state.alertActive })
  }

  render() {
    return (
      <Mutation
        mutation={deleteProduct}
        update={(cache, { data: { deleteProduct } } ) => {
          const products = cache.readQuery({ query: getAllProducts }).products
          console.log('PROPS', this.props.product.name)
          console.log('FILTER TEST', products.filter(product => product.name !== this.props.product.name))
          cache.writeQuery({
            query: getAllProducts,
            data: { products: products.filter(product => product.name !== this.props.product.name) }
          })
        }}
      >
        {(sendData, { data }) => (
          <Wrapper>
            <Button backgroundColor="#FF6961" width={100} height={33} onClick={this.flipAlertActive}>
              Remove
            </Button>
            {this.state.alertActive &&
              <EaseAlert severity="error">
                <AlertTitle> Delete? </AlertTitle>
                <ChoiceContainer>
                  <Choice onClick={() => {
                    sendData({ variables: { name: this.props.product.name } })
                  }}>
                    Yes
                  </Choice>
                  <Choice onClick={this.flipAlertActive}>
                    No
                  </Choice>
                </ChoiceContainer>
              </EaseAlert>
            }
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default RemoveButton
