import React from 'react'
import styled from 'styled-components'
import { Title } from '../styled-components'
import { MenuItem } from '../footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1.5vh;
  width: 15vw;
`

const LightTitle = styled(Title)`
  color: #ADADAC;
`

const Menu = ({ title, subMenus }) => {
  return (
    <Wrapper>
      <LightTitle size="sm"> {title} </LightTitle>
      { subMenus && subMenus.map(item => <MenuItem key={item.title} item={item} />) } 
    </Wrapper>
  )
}

export default Menu
