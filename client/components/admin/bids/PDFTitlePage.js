import React from 'react'
import { HeaderView, Customer, OurInfo, OurAddressLine, AddyInfo, AddressLine, Header, OurLink, FrontPage, OurHeader } from './PDFStyledComponents'

const PDFTitlePage = ({ customer }) => (
  <HeaderView>
    <Customer>
      <AddyInfo>
        <OurHeader>
          {customer.companyName}
        </OurHeader>
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
      <OurHeader>
        {`Fastrack Security Solutions LLC`}
      </OurHeader>
      <OurAddressLine>
        {`833-484-8273`}
      </OurAddressLine>
      <OurAddressLine>
        {`2740 SW Martin Downs Blvd`}
      </OurAddressLine>
      <OurAddressLine>
        {`PO BOX #163`}
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
