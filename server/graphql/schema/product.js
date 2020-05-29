const { GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql')
const { Product } = require('../../db/models')
const { ProductType, ProductDetailType } = require('./ObjectTypes')

//Resolvers
const productResolver = () => {
  return Product.findAll()
  .then(products => products)
  .catch(err => console.log(err))
}

const productDetailResolver = (parent, args) => {
  return Product.findOne({ where: { name: args.name } })
  .then(product => product)
  .catch(err => console.log(err))
}

const getByNameResolver = (parent, args) => {
  return Product.findOne({ where: { name: args.name } })
  .then(product => product)
  .catch(err => console.log(err))
}

const create = (parent, args) => {
  Product.create(args)
  .then(product => console.log(product))
  .catch(err => console.log(err))
  return true
}

//Fields
const products = {
  type: new GraphQLList(ProductType),
  description: 'list of all products',
  resolve: productResolver
}

const productDetails = {
  type: ProductDetailType,
  description: 'details for a product',
  args: { name: { type: GraphQLString }},
  resolve: productDetailResolver
}

const getProductByName = {
  type: ProductDetailType,
  description: 'find a product by name',
  args: { name: { type: GraphQLString } },
  resolve: getByNameResolver
}

const createProduct = {
  type: GraphQLBoolean,
  description: 'Add a product to the database',
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    featured: { type: GraphQLBoolean }
  },
  resolve: create
}

module.exports = { products, productDetails, getProductByName, createProduct }
