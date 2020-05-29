import styled from 'styled-components'

//Buttons
export const Button = styled.button`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor };
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
  outline: none;
  cursor: pointer;
  margin: 1vh 0;
`

//Form Control
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${({ width }) => `${width}vw`};
  padding-top: ${({ padding }) => `${padding}vh`}
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${({ margin }) => `${margin}vh`};
  font-family: 'DM Mono', monospace;
`

export const HalfLabel = styled(Label)`
  width: 45%;
`

export const LabelName = styled.div`
  margin-bottom: ${({ margin }) => `${margin}vh`};
`

export const Select = styled.select`
  width: 100%;
  height: ${({ height }) => `${height}vh`};
  border: 1px solid #CCC;
`

export const Option = styled.option`

`

export const TextInput = styled.input`
  height: 3.5vh;
  width: 100%;
  border: 1px solid #CCC;
  border-radius: .3em;
  font-size: .875em;
`

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 5vh;
  border: 1px solid #CCC;
  border-radius: .3em;
`