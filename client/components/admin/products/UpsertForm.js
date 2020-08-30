import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Mutation } from 'react-apollo'
import { upsertProduct, getAllProducts, getProductDetail } from '../../../graphql'
import { Label, LabelName, TextInput, HalfLabel, TextArea, Button } from '../../styled-components'
import { ImageDrop } from '../products'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 95%;
`

const Image = styled.img`
  height: 85%;
  width: 50%;
  border-radius: 12px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${({ width }) => `${width}%`};
  padding-top: 3vh;
`

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

class UpsertForm extends Component {
  constructor(props) {
    super(props)

    this.state = { hasImage: false, fileName: '' }

    this.flipHasImage = this.flipHasImage.bind(this)
    this.updateFileName = this.updateFileName.bind(this)
  }

  flipHasImage() {
    this.setState({ hasImage: !this.state.hasImage })
  }

  updateFileName(name) {
    this.setState({ fileName: name })
  }

  parseBool(string) {
    if(string === "true") return true
    else if(string === "placeholder") return this.props.product.featured
    else return false
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

  componentWillUnmount() {
    if(this.state.fileName) {
      axios.post('/upload/product/image/delete', { path: `public/images/products/${this.state.fileName}` })
      .catch()
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
        {(upsertProduct, { data }) => (
          <Wrapper>
           {console.log('FILENAME', this.state.fileName)}
            {this.props.type === "Create" &&
              <div style={{ width: '60%' }}>
                {this.state.hasImage ? 
                  <Image src={`/images/products/${this.state.fileName}`} />
                :
                  <ImageDrop flipHasImage={this.flipHasImage} updateFileName={this.updateFileName} />
                }
              </div>
            }
            <Form width={this.props.formWidth} padding={3} onSubmit={evt => {
              evt.preventDefault()
              upsertProduct({
                variables: {
                  vendor: this.chooseVal(evt, this.props.product, "vendor"),
                  name: this.chooseVal(evt, this.props.product, "name"),
                  partNumber: this.chooseVal(evt, this.props.product, "partNumber"),
                  description: this.chooseVal(evt, this.props.product, "description"),
                  cost: parseFloat(this.chooseVal(evt, this.props.product, "cost")),
                  price: parseFloat(this.chooseVal(evt, this.props.product, "price")),
                  laborTime: parseFloat(this.chooseVal(evt, this.props.product, "laborTime") / 60),
                  featured: false
                }
              })
            }}>
              <FlexContainer>
                {console.log('PRODUCT', this.props.product)}
                <HalfLabel margin={1}>
                  <LabelName margin={1}> Name </LabelName>
                  <TextInput type="text" name="name" />
                </HalfLabel>
                <HalfLabel>
                  <LabelName margin={1}> Vendor </LabelName>
                  <TextInput type="text" name="vendor" />
                </HalfLabel>
              </FlexContainer>
              <Label margin={1}>
                <LabelName margin={1}> Description </LabelName>
                <TextArea type="text" name="description" />
              </Label>
              <FlexContainer>
                <HalfLabel margin={1}>
                  <LabelName margin={1}> Part # </LabelName>
                  <TextInput type="text" name="partNumber" />
                </HalfLabel>
                <HalfLabel>
                  <LabelName margin={1}> Labor(min) </LabelName>
                  <TextInput type="text" name="laborTime" />
                </HalfLabel>
              </FlexContainer>
              <FlexContainer>
                <HalfLabel>
                  <LabelName margin={1}> Cost </LabelName>
                  <TextInput type="text" name="cost" />
                </HalfLabel>
                <HalfLabel margin={1}>
                  <LabelName margin={1}> Price </LabelName>
                  <TextInput type="text" name="price" />
                </HalfLabel>
              </FlexContainer>
              <Button type="submit" backgroundColor="#296D4D" width={70} height={40}>
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
