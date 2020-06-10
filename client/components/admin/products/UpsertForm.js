import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { upsertProduct, getAllProducts, getProductDetail } from '../../../graphql'
import { Form, Label, LabelName, Select, Option, TextInput, HalfLabel, TextArea, Button } from '../../styled-components'

const Wrapper = styled.div`

`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

class UpsertForm extends Component {
  constructor(props) {
    super(props)

    this.state = { featured: "placeholder" }
  }

  parseBool(string) {
    if(string === "true") return true
    else if(string === "placeholder") return this.props.product.featured
    else return false
  }

  sendData() {
    const input = {
      name: '',
      description: '',
      price: 0,
      image: '',
      featured: false
    }
  }

  insertCallback(cache, data) {
    const products = cache.readQuery({ query: getAllProducts }).products
    cache.writeQuery({
      query: getAllProducts,
      data: { products: products.concat([data]) }
    })
  }

  updateCallback(cache, data) {
    const product = cache.readQuery({ query: getProductDetail, variables: { name: data.name } }).productDetails
    cache.writeQuery({ 
      query: getProductDetail,
      data: { productDetails: Object.assign(product, data) }
    })
  }

  chooseVal(evt, prod, type) {
    if (evt.target[type].value) {
      return type === 'name' ? evt.target[type].value.toUpperCase() : evt.target[type].value
    }
    else if (prod) {
      return prod[type]
    }
  }

  render() {
    return (
      <Mutation
        mutation={upsertProduct}
        update={(cache, { data: { upsertProduct } } ) => {
          if(this.props.type === "Create") {
            this.insertCallback(cache, upsertProduct)
          }
          else {
            this.updateCallback(cache, upsertProduct)
          }
        }}
      >
        {(sendData, { data }) => (
          <Wrapper>
            <Form width={25} padding={3} onSubmit={evt => {
              evt.preventDefault()
              sendData({
                variables: {
                  name: this.chooseVal(evt, this.props.product, "name"),
                  description: this.chooseVal(evt, this.props.product, "description"),
                  price: parseInt(this.chooseVal(evt, this.props.product, "price")),
                  image: '',
                  featured: this.parseBool(this.state.featured)
                }
              })
            }}>
              <Label margin={1}>
                <LabelName margin={1}> Name </LabelName>
                <TextInput type="text" name="name" />
              </Label>
              <Label margin={1}>
                <LabelName margin={1}> Description </LabelName>
                <TextArea type="text" name="description" />
              </Label>
              <FlexContainer>
                {console.log('STATE', this.state)}
                <HalfLabel margin={1}>
                  <LabelName margin={1}> Price </LabelName>
                  <TextInput type="text" name="price" />
                </HalfLabel>
                <HalfLabel>
                  <LabelName margin={1}> Featured </LabelName>
                  <Select
                    height={4.2}
                    name="featured"
                    value={this.state.featured}
                    onChange={evt => {
                      this.setState({ featured: evt.target.value })
                    }}
                    required
                  >
                    <Option value="false"> No </Option>
                    <Option value="true"> Yes </Option>
                  </Select>
                </HalfLabel>
              </FlexContainer>
              <Button type="submit" backgroundColor="#2091E8" width={70} height={40}>
                {this.props.type}
              </Button>
            </Form>
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default UpsertForm
