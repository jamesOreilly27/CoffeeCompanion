const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql')
const { Product } = require('../../db/models')
const { ProductType, ProductDetailType } = require('./ObjectTypes')

//Resolvers
const productResolver = () => {
  return Product.findAll()
  .then(products => products)
  .catch(err => console.log(err))
}

const productDetailResolver = (parent, args) => {
  return Product.findByPk(args.id)
  .then(product => product)
  .catch(err => console.log(err))
}

const getByNameResolver = (parent, args) => {
  return Product.findOne({ where: { name: args.name } })
  .then(product => product)
  .catch(err => console.log(err))
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
  args: { id: { type: GraphQLInt }},
  resolve: productDetailResolver
}

const getProductByName = {
  type: ProductDetailType,
  description: 'find a product by name',
  args: { name: { type: GraphQLString } },
  resolve: getByNameResolver
}

module.exports = { products, productDetails, getProductByName }
