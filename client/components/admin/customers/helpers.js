export const combineAddy = customer => `${customer.address} ${customer.town} ${customer.zipCode}`

export const sortCustomers = customers => {
  return customers.sort((a, b) => {
    const textA = a.companyName.toUpperCase()
    const textB = b.companyName.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
}

export const isActiveCustomer = (activeName, customer) => activeName === customer.companyName

export const getActiveCustomer = (activeName, customers) => customers.filter(customer => customer.companyName === activeName)[0]

export const filterPrimary = (contacts, type) => {
  if(type === 'primary') {
    return contacts.filter(contact => {
      console.log('CONTACT TEST', contact)
      return contact.primary
    })
  } else if(type === 'non-primary') {
    return contacts.filter(contact => !contact.primary)
  }
}
