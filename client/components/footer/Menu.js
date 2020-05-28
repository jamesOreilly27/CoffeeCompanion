import React from 'react'
import styled from 'styled-components'
import { MenuItem } from '../footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1.5vh;
  width: 15vw;
`

const Title = styled.div`
  font-size: 12px;
  color: #ADADAC;
`

const Menu = ({ title, subMenus }) => {
  return (
    <Wrapper>
      <Title>{ title }</Title>
      { subMenus && subMenus.map(item => <MenuItem key={item.title} item={item} />) } 
    </Wrapper>
  )
}

export default Menu
