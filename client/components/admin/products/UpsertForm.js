import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { upsertProduct } from '../../../graphql'
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

    this.state = { featured: '' }
  }

  parseBool(string) {
    return string === 'true'
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

  chooseVal(evtVal, prodVal) {
    if(evtVal) return evtVal
    else return prodVal
  }

  render() {
    return (
      <Mutation mutation={upsertProduct}>
        {(sendData, { data }) => (
          <Wrapper>
            <Form width={25} padding={3} onSubmit={evt => {
              evt.preventDefault()
              console.log({
                name: evt.target.name.value,
                description: evt.target.description.value,
                price: evt.target.price.value,
                featured: this.parseBool(evt.target.featured.value)
              })
              sendData({
                variables: {
                  name: this.chooseVal(evt.target.name.value.toUpperCase(), this.props.product.name),
                  description: this.chooseVal(evt.target.description.value, this.props.product.description),
                  price: this.chooseVal(parseInt(evt.target.price.value), this.props.product.price),
                  image: '',
                  featured: this.parseBool(this.chooseVal(evt.target.featured.value), this.props.product.featured)
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
