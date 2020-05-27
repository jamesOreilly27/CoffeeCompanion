import React from 'react'
import styled from 'styled-components'
import { Menu, SocialMediaIcon } from '../footer'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const menus = [
  { title: 'E-Commerce', subMenus: [ 'Products', 'Categories', 'Deals', ]},
  { title: 'Our Partners', subMenus: [ 'Avigilon', 'Ironyun' ]},
  { title: 'Company', subMenus: [ 'About Us', 'Contact', 'Quotes' ]},
  { title: 'Your Account', subMenus: [ 'Login', 'Information', 'Orders' ]}
]

const icons = [
  {type: faFacebook, link: '//www.facebook.com/fssvirtualguard/'},
  {type: faTwitter, link: '/'},
  {type: faInstagram, link: '//www.instagram.com/fastrack_security_solutions/'},
  {type: faLinkedin, link: '//www.linkedin.com/company/fastrack-virtual-guard'}
]

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #0F0F0F;
  color: #F8F8FF;
  height: 45vh;
  margin-top: 3vh;
  padding: 10px;
`

const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 1.5vh;
  width: 17vw;
  justify-content: space-between;
  margin-left: 6vw;
`

const Footer = () => {
  return (
    <Wrapper>
      { menus.map(menu => <Menu key={menu.title} title={menu.title} subMenus={menu.subMenus} /> )}
      <SocialMediaContainer>
        { icons.map(icon => <SocialMediaIcon key={icon.link} icon={icon.type} link={icon.link} /> )}
      </SocialMediaContainer>
    </Wrapper>
  )
}

export default Footer
