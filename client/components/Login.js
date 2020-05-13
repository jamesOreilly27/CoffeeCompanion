
import React, { Component } from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const loginMutation = gql`
mutation($email: String!, $password: String!) {
  loginUser(email: $email, password: $password)
}
`

const sendCreds = () => {
  const input = { email: '', password: '' }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 98vw;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-family: 'DM Mono', monospace;
`

const LabelName = styled.div`
  margin-bottom: 3vh;
`

const SubmitButton = styled.button`
  border-radius: .5vw;
  font-size: .875em;
`

const Input = styled.input`
  height: 5.5vh;
  border: 1px solid #CCC;
  border-radius: .3em;
  font-size: .875em;
`

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <Mutation mutation={loginMutation}>
        {(sendCreds, { data }) => (
          <div>
            <Form onSubmit={evt => {
              evt.preventDefault()
              sendCreds({ variables: { email: evt.target.email.value, password: evt.target.password.value }})
              data && data.loginUser ? this.props.history.push('/allproducts') : ''
            }}>
              <Label>
                <LabelName>Email</LabelName>
                <Input type="email" name="email" required />
              </Label>
              <Label>
                <LabelName>Password</LabelName>
                <Input type="text" name="password" required />
              </Label>
              <SubmitButton>
                Login
              </SubmitButton>
            </Form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default Login
