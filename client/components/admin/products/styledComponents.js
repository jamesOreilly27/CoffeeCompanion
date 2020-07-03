import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  width: ${({ width }) => `${width}vw`};
  border-radius: 4px;
  margin-bottom: 15px;
  padding-bottom: 15px;
`

export const Label = styled.h4`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 8px;
  width: 97%;
  height: 3.5vh;
  border-bottom: 3px solid #161616;
  color: #F8F8FF;
`
