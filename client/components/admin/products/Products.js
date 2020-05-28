import React, { Component } from 'react'
import styled from 'styled-components'
import { Add, Featured } from '../products'
import { filterFeatured } from '../../helpers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const AddAndContainers = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Show = styled.div`
  text-decoration: underline;
  cursor: pointer;
  padding-bottom: 10px;
`

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { showAll: false }

    this.flipShowAll = this.flipShowAll.bind(this)
  }

  flipShowAll() {
    this.setState({ showAll: !this.state.showAll })
  }

  render() {
    return (
      <Wrapper>
        {this.props.products &&
          <Container>
            {console.log('STATE', this.state.showAll)}
            <AddAndContainers>
              <Add />
              <Featured products={filterFeatured(this.props.products)} />
            </AddAndContainers>
            <Show onClick={this.flipShowAll}>
              Show All Products
            </Show>
          </Container>
        }
      </Wrapper>
    )
  }
}

export default Products
