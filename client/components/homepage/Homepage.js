import React from 'react'
import styled from 'styled-components'
import { Banner } from '../homepage'
import { services, industries } from './helpers'
import { ServiceCard, IndustryCard } from '../homepage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ backgroundColor }) => {
    if (backgroundColor) return `${backgroundColor}`
    else return ``
  }}
`

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const IndustriesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 20px;
`

const Title = styled.h1`
  margin: 0; 
  width: 63%;
  border-bottom: 1px solid #296d4d;
  padding: 10px 0 5px 10px;
  margin: 20px;
  margin-top: 0;
  color: #F8F8FF;
`

const AvigSection = styled.div`
  display: flex;
  justify-content: space-around;
  height: 350px;
  margin-top: 3vh;
  padding: 15px 10px;
  background-color: #383737;
  color: #F8F8FF;
  align-items: center;
`

const AvigImage = styled.img`
  width: 49%;
  height: 95%;
  border-radius: 10px;
  margin: 0 0 10px 5px;
`

const AvigBlurb = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%
`

const Header = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 80%;
  height: 14vh;
  margin-top: -20px;
  margin-left: 20px;
`

const SmallImage = styled.img`
  width: 15%;
  margin: 0 2vw;
`

const Paragraph = styled.div`
  font-size: 20px;
  width: 90%;
  margin: 2vh 0 0 8%;
`

const List = styled.ul`

`

const AvigLI = styled.li`
  margin: 3vh 0;
`

const Hompage = () => (
  <Wrapper>
    <Banner />
    <Container>
      <Section>
        <Title>
          Our Services
        </Title>
        <ServicesContainer>
          {services.map(service => <ServiceCard key={service.name} service={service} />)}
        </ServicesContainer>
      </Section>
      <AvigSection>
        <AvigImage src="/images/conroe.png" />
        <AvigBlurb>
          <Header>
            <Image src="/images/avigilon.png" />
            {/* <SmallImage src={Camera} /> */}
          </Header>
          <Paragraph>
            <div>
              We proudly partner with avigilon and we're happy to pass those benefits on to you
            </div>
            <List>
              <AvigLI>State of the Art Video Analytics</AvigLI>
              <AvigLI>24/7 Techinal Support</AvigLI>
              <AvigLI>Lower Prices</AvigLI>
            </List>
          </Paragraph>
        </AvigBlurb>
      </AvigSection>
      <Section>
        <Title>
          Our Customers
          </Title>
        <IndustriesContainer>
          {industries.map(industry => <IndustryCard industry={industry} />)}
        </IndustriesContainer>
      </Section>
    </Container>
  </Wrapper>
)

export default Hompage
