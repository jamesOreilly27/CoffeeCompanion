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
  width: 97vw;
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
`

const Title = styled.h1`
  margin: 0; 
  width: 55%;
  border-bottom: 1px solid #006481;
  padding: 10px 0 5px 10px;
  margin-bottom: 20px;
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
        <Section>
          <Title>
            Our Customers
          </Title>
          <IndustriesContainer>
            {industries.map(industry => <IndustryCard industry={industry} /> )}
          </IndustriesContainer>
        </Section>
      </Container>
  </Wrapper>
)

export default Hompage
