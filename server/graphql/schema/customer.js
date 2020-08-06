const { GraphQLList, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLFloat } = require('graphql')
const { CustomerType } = require('./ObjectTypes')
const { Customer, Contact } = require('../../db/models')

const allCustomersResolver = () => {
  return Customer.findAll()
  .then(customers => customers)
  .catch(err => err)
}

const customerDetailsResolver = (parent, args) => {
  return Customer.findByPk(args.id)
  .then(customer => customer)
  .catch(err => console.log(err))
}

const createCustomerResolver = (parent, args) => {
  return Customer.create(args)
  .then(customer => customer)
  .catch(err => console.log(err))
}

const allCustomers = {
  type: new GraphQLList(CustomerType),
  description: 'a list of roys bids',
  resolve: allCustomersResolver
}

const getCustomerDetails = {
  type: CustomerType,
  description: 'a single customer',
  args: { id: { type: GraphQLInt } },
  resolve: customerDetailsResolver
}

const createCustomer = {
  type: CustomerType,
  description: 'Add a customer to the database',
  args: {
    companyName: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    address: { type: GraphQLString },
    town: { type: GraphQLString },
    zipCode: { type: GraphQLString }
  },
  resolve: createCustomerResolver
}

module.exports = {
  allCustomers,
  getCustomerDetails,
  createCustomer
}
