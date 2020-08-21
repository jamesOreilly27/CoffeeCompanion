import React, { Component } from 'react'
import styled from 'styled-components'
import { Add, Featured, AdminList } from '../products'
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
  color: #F8F8FF;
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

  showOrHide() {
    if(!this.state.showAll) return 'Show'
    else return 'Hide'
  }

  render() {
    return (
      <Wrapper>
        {this.props.products &&
          <Container>
            <AddAndContainers>
              <Add />
            </AddAndContainers>
            <Show onClick={this.flipShowAll}>
              {`${this.showOrHide()} Products`}
            </Show>
            {this.state.showAll &&
              <AdminList products={this.props.products} all />
            }
          </Container>
        }
      </Wrapper>
    )
  }
}

export default Products
