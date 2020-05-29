import styled from 'styled-components'

//Buttons
export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor };
  color: ${({ color }) => color };
  width: 150px;
  border-radius: 4px;
  border: ${({ color }) => `1px solid ${color}`}
  outline: none;
  height: 40px;
  cursor: pointer;
`

//Form Control
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: ${({ width }) => `${width}vw`};
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-family: 'DM Mono', monospace;
`

export const LabelName = styled.div`
  margin-bottom: 3vh;
`

export const TextInput = styled.input`
  height: 5.5vh;
  border: 1px solid #CCC;
  border-radius: .3em;
  font-size: .875em;
`