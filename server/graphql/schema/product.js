const { GraphQLList, GraphQLInt } = require('graphql')
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

module.exports = { products, productDetails }
