import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #FFF;
  width: ${({ width }) => `${width}vw`};
  border-radius: 4px;
  margin-bottom: 15px;
`

export const Label = styled.h4`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 8px;
  width: 100%;
  height: 3.5vh;
  border-bottom: 3px solid #EAEDED;
`
