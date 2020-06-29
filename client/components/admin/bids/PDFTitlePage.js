import React from 'react'
import styled from 'styled-components'
import { TitlePage, HeaderView, Customer, OurInfo, OurAddressLine, AddyInfo, AddressLine, Header, OurLink } from './PDFStyledComponents'

const PDFTitlePage = () => (
  <HeaderView>
    <Customer>
      <AddyInfo>
        <Header>
          {`Test Customer`}
        </Header>
        <AddressLine>
          {`555-347-5902`}
        </AddressLine>
        <AddressLine>
          {`123 Main Street`}
        </AddressLine>
        <AddressLine>
          {`Palm City, FL 34990`}
        </AddressLine>
      </AddyInfo>
    </Customer>
    <OurInfo>
      <Header>
        {`Sight On Site`}
      </Header>
      <OurAddressLine>
        {`555-123-4567`}
      </OurAddressLine>
      <OurAddressLine>
        {`3533 SW Corporate Pkwy`}
      </OurAddressLine>
      <OurAddressLine>
        {`Palm City, FL 34990`}
      </OurAddressLine>
      <OurLink src="www.facebook.com/fssvirtualguard/">
        {`www.facebook.com/fssvirtualguard/`}
      </OurLink>
    </OurInfo>
  </HeaderView>
)

export default PDFTitlePage
