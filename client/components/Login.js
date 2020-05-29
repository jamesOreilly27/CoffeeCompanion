
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Label, LabelName, TextInput, Button } from './styled-components'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import history from './history'

const loginMutation = gql`
mutation($email: String!, $password: String!) {
  loginUser(email: $email, password: $password)
}
`

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

const sendCreds = () => {
  const input = { email: '', password: '' }
}

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Mutation mutation={loginMutation}>
        {(sendCreds, { data }) => (
          <Wrapper>
            <Form width={25} padding={0} onSubmit={evt => {
              evt.preventDefault()
              this.props.handleSubmit()
              sendCreds({ variables: { email: evt.target.email.value, password: evt.target.password.value }})
            }}>
              { data && data.loginUser && <Redirect to='/products/all' /> }
              { data && data.loginUser && history.push('/products/all') }
              <Label margin={1}>
                <LabelName margin={1}> Email </LabelName>
                <TextInput type="email" name="email" required />
              </Label>
              <Label margin={1}>
                <LabelName margin={1}> Password </LabelName>
                <TextInput type="text" name="password" required />
              </Label>
              <Button type="submit" backgroundColor="#2091E8" color="#F8F8FF" margin={1}>
                Login
              </Button>
            </Form>
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default Login
