import styled from 'styled-components'

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
