import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 368px;
  left: 430px;
  height: 200px;
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #272727;
  z-index: 4;
`

const Header = styled.div`
  height: 18%;
  width: 100%;
  border: 2px solid #4E4E6F;
  display: flex;
  justify-content: space-between;
`

const Close = styled.div`
  background-color: #bd2f29;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 20px;
  height: 18px;
  color: #F8F8FF;
`

const Body = styled.div`
  height: 82%;
  width: 100%;
  border: 2px solid #4E4E6F;
`

const NoteDetail = ({ note, hideNote }) => (
  <Wrapper>
    <Header>
      <div>
        {note.subject}
      </div>
      <Close onClick={hideNote}>
        x
      </Close>
    </Header>
    <Body>
      {note.text}
    </Body>
  </Wrapper>
)

export default NoteDetail
