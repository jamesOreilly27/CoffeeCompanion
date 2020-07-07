import styled, { keyframes } from 'styled-components'
import Alert from '@material-ui/lab/Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//keyframes
const easeInAlert = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

//Headers
export const Title = styled.h1`
  margin: ${({ margin }) => {
    if(margin) return `${margin}vh 0`
    else return `0`
  }};
  font-size: ${({ size }) => {
    if(size === 'sm') return `14px`
    if(size === 'med') return `18px`
    else return ''
  }};
  color: #F8F8FF;
`

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
  padding-top: ${({ padding }) => `${padding}vh`};
`

export const Label = styled.label`
  width: 100%;
  color: #F8F8FF;
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
  border: 1px solid #161616;
  border-radius: .3em;
  font-size: .875em;
  background-color: #585656;
`

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 5vh;
  border: 1px solid #CCC;
  border-radius: .3em;
`

export const EaseAlert = styled(Alert)`
  animation: ${easeInAlert} .8s ease;
`

/********** Product Details **********/
export const Image = styled(FontAwesomeIcon)`
  flex: 0 0 50%;
`

export const InfoContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  align-items: flex-start;
  height: 45vh;
`

//Price Details
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;
`

export const PriceHeader = styled.div`
  font-size: 12px;
`

export const Price = styled.div`
  font-size: 42px;
  font-weight: bold;
`
