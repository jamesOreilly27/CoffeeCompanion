
import React, { Component } from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const loginMutation = gql`
mutation($email: String!, $password: String!, $isSignup: Boolean!, $firstName: String, $lastName: String) {
  loginUser(email: $email, password: $password, isSignup: $isSignup, firstName: $firstName, lastName: $lastName)
}
`

const sendCreds = () => {
  const input = { email: '', password: '', isSignup: true, firstName: '', lastName: '' }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20vw;
  margin: 6vw 12vw;
`

const Label = styled.label`
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubmitButton = styled.button`
  width: 10vw;
  height: 3vw;
  border-radius: .5vw;
  font-size: .875em;
`

const Input = styled.input`
  width: 10vw;
  height: 2vw;
  border-radius: .3em;
  font-size: .875em;
`

class Signup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Mutation mutation={loginMutation}>
        {(sendCreds, { data }) => (
          <div>
            <Form onSubmit={evt => {
              evt.preventDefault()
              sendCreds({ variables: {
                email: evt.target.email.value,
                password: evt.target.password.value,
                isSignup: true,
                firstName: evt.target.firstName.value,
                lastName: evt.target.lastName.value
              }})
              data && data.loginUser ? this.props.history.push('/products') : ''
            }}>
              <Label>
                First Name
                <Input
                  type="text"
                  name="firstName"
                  required
                />
              </Label>
              <Label>
                Last Name
                <Input
                  type="text"
                  name="lastName"
                  required
                />
              </Label>
              <Label>
                Email
                <Input type="email" name="email" required />
              </Label>
              <Label>
                Password
                <Input type="text" name="password" required />
              </Label>
              <SubmitButton>
                Submit
              </SubmitButton>
            </Form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default Signup
