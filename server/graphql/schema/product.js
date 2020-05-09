const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLList } = require('graphql')
const { CategoryType } = require('./category')
const { Product } = require('../../db/models')

const productResolver = () => {
  return Product.findAll()
  .then(products => products)
  .catch(err => console.log(err))
}

module.exports = { productResolver }
