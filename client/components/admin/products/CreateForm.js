import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { createProduct } from '../../../graphql'
import { Form, Label, LabelName, Select, Option, TextInput, HalfLabel, TextArea, Button } from '../../styled-components'

const Wrapper = styled.div`

`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

class CreateForm extends Component {
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

  render() {
    return (
      <Mutation mutation={createProduct}>
        {(sendData, { data }) => (
          <Wrapper>
            <Form width={25} padding={3} onSubmit={evt => {
              evt.preventDefault()
              sendData({
                variables: {
                  name: evt.target.name.value.toUpperCase(),
                  description: evt.target.description.value,
                  price: parseInt(evt.target.price.value),
                  image: '',
                  featured: this.parseBool(evt.target.featured.value)
                }
              })
            }}>
              <Label margin={1}>
                <LabelName margin={1}> Name </LabelName>
                <TextInput type="text" name="name" required />
              </Label>
              <Label margin={1}>
                <LabelName margin={1}> Description </LabelName>
                <TextArea type="text" name="description" required />
              </Label>
              <FlexContainer>
                <HalfLabel margin={1}>
                  <LabelName margin={1}> Price </LabelName>
                  <TextInput type="text" name="price" required />
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
              <Button type="submit" backgroundColor="#2091E8" color="#F8F8FF" margin={3}>
                Create
              </Button>
            </Form>
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default CreateForm
