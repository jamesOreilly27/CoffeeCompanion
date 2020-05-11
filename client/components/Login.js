
import React from 'react'
import styled from 'styled-components'

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

const Login = ({ displayName, handleSubmit, error, isSignup }) => (
  <Form>
    <Label>
      Email
      <Input
        type="email"
        name="email"
        required
      />
    </Label>
    <Label>
      Password
      <Input
        type="text"
        name="password"
        required
      />
    </Label>
    <SubmitButton>
      {displayName}
    </SubmitButton>
  </Form>
)

export default Login
