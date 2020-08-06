import React from 'react'
import { HeaderView, Customer, OurInfo, OurAddressLine, AddyInfo, AddressLine, Header, OurLink, FrontPage } from './PDFStyledComponents'

const PDFTitlePage = ({ customer }) => (
  <HeaderView>
    <Customer>
      {console.log('CUSTOMER', customer)}
      <AddyInfo>
        <Header>
          {customer.companyName}
        </Header>
        <AddressLine>
          {customer.phoneNumber}
        </AddressLine>
        <AddressLine>
          {customer.address}
        </AddressLine>
        <AddressLine>
          {`${customer.town} ${customer.zipCode}`}
        </AddressLine>
      </AddyInfo>
    </Customer>
    <OurInfo>
      <Header>
        {`Sight On Site`}
      </Header>
      <OurAddressLine>
        {`772-800-0698`}
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
