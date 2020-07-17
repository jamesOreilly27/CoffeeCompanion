export const combineAddy = customer => `${customer.address} ${customer.town} ${customer.zipCode}`

export const sortCustomers = customers => {
  console.log('CUSTOMERS', customers)
  return customers.sort((a, b) => {
    const textA = a.companyName.toUpperCase()
    const textB = b.companyName.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
}
