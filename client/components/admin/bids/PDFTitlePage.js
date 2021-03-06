import React from 'react'
import { HeaderView, Customer, OurInfo, OurAddressLine, AddyInfo, AddressLine, OurLink, OurHeader, MyHeader, ProposalMessage } from './PDFStyledComponents'
import styled from '@react-pdf/styled-components'
import { nameToUrl } from '../../helpers'

let date = ( new Date() ).toLocaleDateString().split("/")

const createDateString = arr => {
  let string = ''

  for(let i = 0; i < arr.length; i++) {
    if(i === 0) string += arr[i]
    else string += `/${arr[i]}`
  }

  return string
}

const HeaderImage = styled.Image`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
`

const Logo = styled.Image`
  width: 300px;
  height: 200px;
  margin-left: 150px;
`

const ImagePlaceholder = styled.View`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #DBDBD7;
`

const NoImageMessage = styled.Text`
  font-size: 30px;
`

const PDFTitlePage = ({ bid, customer }) => (
  <HeaderView>
    {bid.hasHeaderImage ?
      <HeaderImage src={`/images/${nameToUrl(customer.companyName)}.png`} />
    :
      <ImagePlaceholder>
        <NoImageMessage>Add an Image in the Dashboard!</NoImageMessage>
      </ImagePlaceholder>
    }
    <Customer>
      <ProposalMessage>
        {`Prepared on ${createDateString(date)}`}
      </ProposalMessage>
      <ProposalMessage>
        A Proposal For
      </ProposalMessage>
      <AddyInfo>
        <OurHeader>
          {customer.companyName}
        </OurHeader>
        <AddressLine>
          {customer.address}
        </AddressLine>
        <AddressLine>
          {`${customer.town} ${customer.zipCode}`}
        </AddressLine>
      </AddyInfo>
    </Customer>

    <Logo src="/images/title-logo.png" />
    <OurInfo>
      <MyHeader>
        {`Fastrack Security Solutions LLC`}
      </MyHeader>
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
